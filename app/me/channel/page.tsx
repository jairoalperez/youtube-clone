"use client"

import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoCard } from "@/components/video-card"
import { currentUser, myVideos } from "@/lib/mock-data"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function MyChannelPage() {
  const banner = "/channel-banner.jpg"

  return (
    <AppLayout>
      <div>
        {/* Banner */}
        <div className="relative h-48 bg-zinc-900">
          <Image src={banner || "/placeholder.svg"} alt={currentUser.name} fill className="object-cover" />
        </div>

        {/* Channel header */}
        <div className="bg-black border-b border-zinc-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback className="bg-orange-500 text-black text-2xl">
                  {currentUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-white text-3xl font-bold">{currentUser.name}</h1>
                  <Badge className="bg-orange-500 text-black">Creator</Badge>
                </div>
                <div className="text-gray-400 text-sm mb-3">{currentUser.handle} • 15K subscribers</div>
                <div className="flex gap-2">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black">
                    <Link href="/me/upload">Upload Video</Link>
                  </Button>
                  <Button asChild variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    <Link href="/me/videos">Manage Videos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-6 py-6">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="bg-transparent border-b border-zinc-800 rounded-none w-full justify-start h-auto p-0">
              <TabsTrigger
                value="videos"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-gray-400"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 rounded-none text-gray-400"
              >
                About
              </TabsTrigger>
            </TabsList>
            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <div className="max-w-3xl">
                <h2 className="text-white text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-300 mb-6">
                  Welcome to my channel! I create content about technology, programming, and my daily life as a
                  developer.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  )
}
