import { Skeleton } from "@/src/components/ui/skeleton"; // Assuming you're using shadcn/ui

const ProfileSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 md:p-6 space-y-4 pt-8 animate-pulse">
      <div className="w-full flex flex-col justify-center items-center mt-5 mb-10">
        {/* Image upload skeleton */}
        <div className="flex flex-col items-center">
          <div className="h-[160px] w-[160px] rounded-lg bg-gray-200 flex items-center justify-center">
            <div className="h-12 w-12 text-gray-400">
              {/* Icon placeholder */}
              <div className="h-12 w-12 rounded-full bg-gray-300 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Form fields skeleton */}
      <div className="space-y-4">
        {/* Name field skeleton */}
        <div className="space-y-2">
          <div className="relative">
            <Skeleton className="h-[50px] w-full rounded-md bg-gray-200" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Skeleton className="h-5 w-5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Phone field skeleton */}
        <div className="space-y-2">
          <div className="relative">
            <Skeleton className="h-[50px] w-full rounded-md bg-gray-200" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Skeleton className="h-5 w-5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Address field skeleton */}
        <div className="space-y-2">
          <div className="relative">
            <Skeleton className="h-[50px] w-full rounded-md bg-gray-200" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Skeleton className="h-5 w-5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Button skeleton */}
        <div className="mt-10">
          <Skeleton className="h-11 w-full rounded-md bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
