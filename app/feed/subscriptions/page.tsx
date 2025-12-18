import { AppLayout } from "@/components/app-layout"
import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionsPage() {
  // Filter videos from subscribed channels
  const subscribedVideos = mockVideos.filter((v) => ["ch-1", "ch-2"].includes(v.channelId))

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Subscriptions</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subscribedVideos.map((video) => (
            <div key={video.id} className="relative">
              <VideoCard video={video} />
              <Badge className="absolute top-2 left-2 bg-orange-500 text-black">Subscribed</Badge>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
