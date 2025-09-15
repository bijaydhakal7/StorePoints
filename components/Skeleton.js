export default function Skeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center border rounded-lg p-4 bg-white shadow-md">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div> 
      <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div> 
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
      <div className="bg-gray-300 h-8 w-full rounded"></div> 
    </div>
  );
}