import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { AppLayout } from "@/components/app-layout"
import { Badge } from "@/components/ui/badge"

const filters = ["All", "Music", "Gaming", "Tech", "Cooking", "Travel", "Photography"]

export default function HomePage() {
  return (
    <AppLayout>
      <div className="p-6">
        {/* Filter chips */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {filters.map((filter, index) => (
            <Badge
              key={filter}
              variant={index === 0 ? "default" : "secondary"}
              className={
                index === 0
                  ? "bg-orange-500 hover:bg-orange-600 text-black cursor-pointer whitespace-nowrap"
                  : "bg-zinc-800 hover:bg-zinc-700 text-gray-200 cursor-pointer whitespace-nowrap"
              }
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
