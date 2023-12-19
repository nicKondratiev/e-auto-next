export default function LoadingSkeleton() {
  return (
    <>
      {[...Array(3)].map((val, index) => (
        <div
          key={index}
          className="flex h-48 w-[800px] animate-pulse gap-4 rounded-lg border bg-gray-200 p-4 shadow-sm"
        ></div>
      ))}
    </>
  );
}
