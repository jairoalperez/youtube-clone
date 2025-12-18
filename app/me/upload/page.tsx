"use client"

import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

type Step = 1 | 2 | 3

export default function UploadPage() {
  const [step, setStep] = useState<Step>(1)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileSelect = () => {
    setUploading(true)
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          setStep(2)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Upload Video</h1>

        {/* Step indicator */}
        <div className="flex items-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= s ? "bg-orange-500 text-black" : "bg-zinc-800 text-gray-400"
                }`}
              >
                {step > s ? <Check className="h-4 w-4" /> : s}
              </div>
              <span className={step >= s ? "text-white" : "text-gray-400"}>Step {s}</span>
              {s < 3 && <div className="w-12 h-0.5 bg-zinc-800" />}
            </div>
          ))}
        </div>

        {/* Step 1: Upload */}
        {step === 1 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                  <Upload className="h-12 w-12 text-orange-500" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">
                  {uploading ? "Uploading..." : "Select a file to upload"}
                </h2>
                <p className="text-gray-400 mb-6">Drag and drop or click to browse</p>

                {uploading ? (
                  <div className="max-w-md mx-auto">
                    <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-white text-sm">{progress}%</p>
                  </div>
                ) : (
                  <Button onClick={handleFileSelect} className="bg-orange-500 hover:bg-orange-600 text-black">
                    Select File
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter video title"
                    className="bg-zinc-800 border-zinc-700 text-white mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Tell viewers about your video"
                    rows={5}
                    className="bg-zinc-800 border-zinc-700 text-white mt-2"
                  />
                </div>

                <div>
                  <Label className="text-white">Thumbnail</Label>
                  <div className="mt-2 border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Upload thumbnail</p>
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

                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setStep(1)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white"
                  >
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="bg-orange-500 hover:bg-orange-600 text-black">
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-12 w-12 text-green-500" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Video Published!</h2>
                <p className="text-gray-400 mb-6">Your video has been successfully uploaded and is now live.</p>
                <div className="flex gap-3 justify-center">
                  <Button asChild variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    <Link href="/watch/my-vid-1">Watch Video</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      setStep(1)
                      setProgress(0)
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-black"
                  >
                    Upload Another
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  )
}
