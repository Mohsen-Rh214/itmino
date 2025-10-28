import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-300 aspect-square w-full"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="flex items-center justify-between">
            <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-5 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;