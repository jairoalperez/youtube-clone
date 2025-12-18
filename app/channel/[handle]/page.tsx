"use client"

import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoCard } from "@/components/video-card"
import { mockChannels, mockVideos } from "@/lib/mock-data"
import Image from "next/image"
import { use, useState } from "react"

export default function ChannelPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params)
  const channel = mockChannels.find((c) => c.handle === `@${handle}`) || mockChannels[0]
  const channelVideos = mockVideos.filter((v) => v.channelId === channel.id)
  const [isSubscribed, setIsSubscribed] = useState(channel.isSubscribed || false)

  return (
    <AppLayout>
      <div>
        {/* Banner */}
        <div className="relative h-48 bg-gray-900">
          <Image src={channel.banner || "/placeholder.svg"} alt={channel.name} fill className="object-cover" />
        </div>

        {/* Channel header */}
        <div className="bg-black border-b border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={channel.avatar || "/placeholder.svg"} alt={channel.name} />
                <AvatarFallback className="bg-gray-700 text-white text-2xl">{channel.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-white text-3xl font-bold mb-1">{channel.name}</h1>
                <div className="text-gray-400 text-sm mb-3">
                  {channel.handle} • {channel.subscriberCount} subscribers
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
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-6 py-6">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="bg-transparent border-b border-gray-800 rounded-none w-full justify-start h-auto p-0">
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
                {channelVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <div className="max-w-3xl">
                <h2 className="text-white text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Subscribers:</span> {channel.subscriberCount}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Videos:</span> {channelVideos.length}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  )
}
