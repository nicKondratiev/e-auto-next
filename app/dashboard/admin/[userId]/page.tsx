export default function User({ params }: { params: { userId: string } }) {
  const userId = params.userId;

  return <div>User Id: {userId}</div>;
}
