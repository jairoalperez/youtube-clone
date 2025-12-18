"use client"

import { AppLayout } from "@/components/app-layout"
import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

export default function LikedVideosPage() {
  const likedVideos = mockVideos.filter((v) => v.isLiked)

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Liked Videos</h1>

        {likedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {likedVideos.map((video) => (
              <div key={video.id} className="relative group">
                <VideoCard video={video} />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 h-8 w-8 bg-orange-500/80 hover:bg-gray-800 text-black hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ThumbsUp className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No liked videos yet</p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
