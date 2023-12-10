import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import { AuthOptions, SessionStrategy } from "next-auth";

type CredentialsType = Record<string, CredentialInput>;

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {} as CredentialsType,
      async authorize(credentials) {
        const { email, password } = credentials as CredentialsType;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) return null;

          const isPasswordCorrect = await bcrypt.compare(
            password as string,
            user.password
          );

          if (!isPasswordCorrect) return null;

          return user;
        } catch (err) {
          console.log("Error: ", err);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async session({
      session,
      user,
      token,
    }: {
      session: any;
      user: any;
      token: any;
    }) {
      session.user = token.user;
      return session;
    },
    async jwt({
      token,
      session,
      user,
    }: {
      token: any;
      session: any;
      user: any;
    }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions as AuthOptions);

export { handler as GET, handler as POST };
