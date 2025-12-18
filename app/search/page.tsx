"use client"

import { AppLayout } from "@/components/app-layout"
import { VideoCard } from "@/components/video-card"
import { mockVideos } from "@/lib/mock-data"
import { useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <AppLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-xl">
            Search results for: <span className="text-orange-500">{query}</span>
          </h1>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-48 bg-gray-900 border-gray-700 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700 text-white">
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="date">Upload date</SelectItem>
              <SelectItem value="views">View count</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
