"use client"

import { AppLayout } from "@/components/app-layout"
import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function WatchLaterPage() {
  const watchLaterVideos = mockVideos.slice(0, 8)

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Watch Later</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {watchLaterVideos.map((video) => (
            <div key={video.id} className="relative group">
              <VideoCard video={video} />
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 h-8 w-8 bg-black/80 hover:bg-orange-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
