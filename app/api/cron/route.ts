import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import { UserInterface } from "../../dashboard/admin/page";
import { connectMongoDB } from "../../../lib/mongodb";
import { revalidateTag } from "next/cache";

export async function PUT(req: NextRequest, res: NextResponse) {
  await connectMongoDB();

  try {
    const bannedUsers: UserInterface[] = await User.find({ isBanned: true });

    const shouldBeUnbanned = bannedUsers.filter((user) => {
      return new Date(user.banExpirationDate!) <= new Date(Date.now());
    });

    console.log("should be unbanned users:", shouldBeUnbanned);

    const updatePromises = shouldBeUnbanned.map(async (user) => {
      const updateUser = await User.updateOne(
        { _id: user._id },
        { $set: { isBanned: false, banExpirationDate: null, role: "USER" } }
      );
      return updateUser;
    });

    const updatedUsers = await Promise.all(updatePromises);

    const successCount = updatedUsers.filter(
      (result) => result.acknowledged
    ).length;

    if (successCount === shouldBeUnbanned.length) {
      await revalidateTag("users-collection");

      return NextResponse.json({
        message: "Successfully updated specified users to unbanned",
      });
    } else {
      return NextResponse.json({ message: "Failed to update some users" });
    }
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: error.message, err: error });
  }
}
