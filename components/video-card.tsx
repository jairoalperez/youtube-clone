
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import type { Video } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"

interface VideoCardProps {
    video: Video
    variant?: "vertical" | "horizontal"
}

export function VideoCard({ video, variant = "vertical" }: VideoCardProps) {
    if (variant === "horizontal") {
        return (
            <Link href={`/watch/${video.id}`} className="group flex gap-2 w-full">
                {/* Thumbnail */}
                <div className="relative w-40 h-24 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-white font-medium line-clamp-2 text-sm leading-tight mb-1 group-hover:text-orange-500 transition-colors">
                        {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-0.5 truncate">{video.channelName}</p>
                    <p className="text-gray-400 text-xs truncate">
                        {video.views} views
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <Link href={`/watch/${video.id}`} className="group">
            <Card className="bg-transparent border-none overflow-hidden">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-3">
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
                        <AvatarFallback className="bg-zinc-700 text-white">{video.channelName.charAt(0)}</AvatarFallback>
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