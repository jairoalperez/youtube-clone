import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { History, Clock, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { mockVideos } from "@/lib/mock-data"
import Image from "next/image"

export default function LibraryPage() {
  const historyVideos = mockVideos.slice(0, 3)
  const watchLaterVideos = mockVideos.slice(3, 6)
  const likedVideos = mockVideos.filter((v) => v.isLiked)

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Library</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* History */}
          <Link href="/feed/history">
            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <History className="h-6 w-6 text-orange-500" />
                  History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {historyVideos.map((video) => (
                    <div key={video.id} className="flex gap-2">
                      <div className="relative w-24 h-14 bg-zinc-800 rounded flex-shrink-0">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs line-clamp-2">{video.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Watch Later */}
          <Link href="/feed/watch-later">
            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Clock className="h-6 w-6 text-orange-500" />
                  Watch Later
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {watchLaterVideos.map((video) => (
                    <div key={video.id} className="flex gap-2">
                      <div className="relative w-24 h-14 bg-zinc-800 rounded flex-shrink-0">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs line-clamp-2">{video.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Liked Videos */}
          <Link href="/feed/liked">
            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <ThumbsUp className="h-6 w-6 text-orange-500" />
                  Liked Videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {likedVideos.map((video) => (
                    <div key={video.id} className="flex gap-2">
                      <div className="relative w-24 h-14 bg-zinc-800 rounded flex-shrink-0">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs line-clamp-2">{video.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}
