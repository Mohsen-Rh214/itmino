import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-slate-200 aspect-square w-full"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        <div className="h-4 bg-slate-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
        <div className="flex items-center justify-between mt-auto">
            <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-16"></div>
                <div className="h-5 bg-slate-200 rounded w-24"></div>
            </div>
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;