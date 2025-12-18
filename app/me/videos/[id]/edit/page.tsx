"use client"

import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { myVideos } from "@/lib/mock-data"
import { Upload } from "lucide-react"
import { use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const video = myVideos.find((v) => v.id === id) || myVideos[0]

  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Edit Video</h1>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-white">
                  Title
                </Label>
                <Input id="title" defaultValue={video.title} className="bg-zinc-800 border-zinc-700 text-white mt-2" />
              </div>

              <div>
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  defaultValue={video.description}
                  rows={5}
                  className="bg-zinc-800 border-zinc-700 text-white mt-2"
                />
              </div>

              <div>
                <Label className="text-white">Thumbnail</Label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt="Current thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 flex flex-col items-center justify-center hover:border-orange-500 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-500 mb-2" />
                    <p className="text-gray-400 text-sm text-center">Upload new thumbnail</p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="visibility" className="text-white">
                  Visibility
                </Label>
                <Select defaultValue="public">
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="unlisted">Unlisted</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="secondary"
                  onClick={() => router.back()}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => router.push("/me/videos")}
                  className="bg-orange-500 hover:bg-orange-600 text-black"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
