export default function SkeletonLoader() {
  return (
    <div className="w-full p-4 space-y-4">
      <div className="h-8 bg-gray-200 rounded-md animate-pulse w-3/4"></div>
      <div className="h-8 bg-gray-200 rounded-md animate-pulse w-5/6"></div>
      <div className="h-8 bg-gray-200 rounded-md animate-pulse w-1/2"></div>
    </div>
  );
}
