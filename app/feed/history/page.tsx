"use client"

import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { Trash2, Pause } from "lucide-react"
import { useState } from "react"

export default function HistoryPage() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <AppLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">History</h1>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setIsPaused(!isPaused)}
              className={
                isPaused
                  ? "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }
            >
              <Pause className="h-4 w-4 mr-2" />
              {isPaused ? "Resume History" : "Pause History"}
            </Button>
            <Button variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-white">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear History
            </Button>
          </div>
        </div>

        {/* Today */}
        <div className="mb-8">
          <h2 className="text-gray-400 text-sm font-medium mb-4">Today</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockVideos.slice(0, 4).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Yesterday */}
        <div>
          <h2 className="text-gray-400 text-sm font-medium mb-4">Yesterday</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockVideos.slice(4, 6).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
