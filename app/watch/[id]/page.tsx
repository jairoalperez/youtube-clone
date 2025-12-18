"use client"

import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { mockVideos, mockComments, currentUser } from "@/lib/mock-data"
import { ThumbsUp, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { VideoCard } from "@/components/video-card"
import { CommentItem } from "@/components/comment-item"
import { use, useState } from "react"

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const video = mockVideos.find((v) => v.id === id) || mockVideos[0]
  const suggestedVideos = mockVideos.filter((v) => v.id !== id).slice(0, 10)

  const [isLiked, setIsLiked] = useState(video.isLiked || false)
  const [isWatchLater, setIsWatchLater] = useState(video.isWatchLater || false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)
  const [commentText, setCommentText] = useState("")

  return (
    <AppLayout>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Video player */}
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <div className="text-gray-500 text-center">
                <div className="text-6xl mb-2">▶</div>
                <div className="text-lg">Video Player</div>
                <div className="text-sm">{video.duration}</div>
              </div>
            </div>

            {/* Video info */}
            <h1 className="text-white text-xl font-semibold mb-3">{video.title}</h1>

            {/* Channel row */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={video.channelAvatar || "/placeholder.svg"} alt={video.channelName} />
                  <AvatarFallback className="bg-gray-700 text-white">{video.channelName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium">{video.channelName}</p>
                  <p className="text-gray-400 text-sm">1.2M subscribers</p>
                </div>
                <Button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={
                    isSubscribed
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-orange-500 hover:bg-orange-600 text-black"
                  }
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setIsLiked(!isLiked)}
                  className={
                    isLiked
                      ? "bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 border-orange-500/30"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {isLiked ? video.likes + 1 : video.likes}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsWatchLater(!isWatchLater)}
                  className={
                    isWatchLater
                      ? "bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 border-orange-500/30"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }
                >
                  <Clock className="h-4 w-4 mr-2" />
                  {isWatchLater ? "Saved" : "Watch Later"}
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                <span>{video.views} views</span>
                <span>{video.uploadedAt}</span>
              </div>
              <p className={`text-gray-200 ${descriptionExpanded ? "" : "line-clamp-2"}`}>{video.description}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                className="text-gray-400 hover:text-white hover:bg-transparent mt-2 px-0"
              >
                {descriptionExpanded ? (
                  <>
                    Show less <ChevronUp className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    Show more <ChevronDown className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            </div>

            {/* Comments */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">{mockComments.length} Comments</h2>

              {/* Comment composer */}
              <div className="flex gap-3 mb-6">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback className="bg-orange-500 text-black">{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-700 rounded-none focus:border-orange-500 text-white placeholder:text-gray-500 resize-none"
                    rows={1}
                  />
                  {commentText && (
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setCommentText("")}
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        Cancel
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black">
                        Post
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Comments list */}
              <div className="space-y-6">
                {mockComments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </div>
            </div>
          </div>

          {/* Suggested videos */}
          <div className="space-y-3">
            {suggestedVideos.map((video) => (
              <div key={video.id} className="flex gap-2">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
