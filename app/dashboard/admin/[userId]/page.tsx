import { User } from "../page";

export async function generateStaticParams() {
  const users = await fetch("http://localhost:3000/api/users", {
    method: "GET",
  }).then((res) => res.json());

  return users.map((user: any) => ({
    userId: user._id,
  }));
}

const getUserListings = async (userId: string) => {
  const data = await fetch(`http://localhost:3000/api/cars?userId=${userId}`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
};

export default async function User({ params }: { params: { userId: string } }) {
  const userId = params.userId;
  const userListings = await getUserListings(userId);

  console.log(userListings);

  return <div>User Id: {userId}</div>;
}
