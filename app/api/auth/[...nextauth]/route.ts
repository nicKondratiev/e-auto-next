import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import { SessionStrategy } from "next-auth";

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
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/user/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
