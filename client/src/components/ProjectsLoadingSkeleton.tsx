import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          {/* Image skeleton */}
          <Skeleton className="aspect-video w-full" />
          
          <CardContent className="p-6">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4 mb-2" />
            
            {/* Location and year skeletons */}
            <div className="flex items-center gap-4 mb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            
            {/* Client skeleton */}
            <Skeleton className="h-4 w-48 mb-4" />
            
            {/* Stats grid skeleton */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Skeleton className="h-5 w-16 mb-1" />
                <Skeleton className="h-3 w-12" />
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-1" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            
            {/* Features badges skeleton */}
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-16" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}