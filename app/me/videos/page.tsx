"use client"

import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { myVideos } from "@/lib/mock-data"
import { Pencil, Trash2, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ManageVideosPage() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Manage Videos</h1>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black">
            <Link href="/me/upload">Upload New Video</Link>
          </Button>
        </div>

        <div className="space-y-4">
          {myVideos.map((video) => (
            <div key={video.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
              {/* Thumbnail */}
              <div className="relative w-40 h-24 bg-zinc-800 rounded flex-shrink-0">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium mb-1">{video.title}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span>{video.views} views</span>
                  <span>{video.uploadedAt}</span>
                  <span>{video.likes} likes</span>
                </div>
              </div>

              {/* Visibility */}
              <div className="flex-shrink-0">
                <Select defaultValue="public">
                  <SelectTrigger className="w-32 bg-zinc-800 border-zinc-700 text-white text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectItem value="public">
                      <div className="flex items-center gap-2">
                        <Eye className="h-3 w-3" />
                        Public
                      </div>
                    </SelectItem>
                    <SelectItem value="unlisted">Unlisted</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Actions */}
              <div className="flex gap-2 flex-shrink-0">
                <Button asChild size="icon" variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                  <Link href={`/me/videos/${video.id}/edit`}>
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-zinc-800 hover:bg-red-900 text-white hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
