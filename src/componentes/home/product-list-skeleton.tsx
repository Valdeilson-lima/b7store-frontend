export const ProductListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="bg-gray-200 roundes-md w-52 h-8 mx-auto lg:mx-0 animate-pulse"></div>
      <div className="bg-gray-200 roundes-md w-64 h-5 mx-auto lg:mx-0 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 animate-pulse">
        <div className="bg-gray-200 h-80 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};
