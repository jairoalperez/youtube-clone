import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import type { Video } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`} className="group">
      <Card className="bg-transparent border-none overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
            {video.duration}
          </div>
        </div>

        {/* Info */}
        <div className="flex gap-3">
          <Avatar className="h-9 w-9 flex-shrink-0">
            <AvatarImage src={video.channelAvatar || "/placeholder.svg"} alt={video.channelName} />
            <AvatarFallback className="bg-gray-700 text-white">{video.channelName.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium line-clamp-2 text-sm mb-1 group-hover:text-orange-500 transition-colors">
              {video.title}
            </h3>
            <p className="text-gray-400 text-xs">{video.channelName}</p>
            <p className="text-gray-400 text-xs">
              {video.views} views • {video.uploadedAt}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
