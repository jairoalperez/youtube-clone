"use client"

import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { currentUser } from "@/lib/mock-data"
import { Upload } from "lucide-react"

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Settings</h1>

        <div className="space-y-6">
          {/* Profile */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-white">Profile Picture</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                    <AvatarFallback className="bg-orange-500 text-black text-2xl">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={currentUser.name}
                  className="bg-zinc-800 border-zinc-700 text-white mt-2"
                />
              </div>

              <div>
                <Label htmlFor="handle" className="text-white">
                  Handle
                </Label>
                <Input
                  id="handle"
                  defaultValue={currentUser.handle}
                  className="bg-zinc-800 border-zinc-700 text-white mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={currentUser.email}
                  className="bg-zinc-800 border-zinc-700 text-white mt-2"
                />
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-black">Save Profile</Button>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="current-password" className="text-white">
                  Current Password
                </Label>
                <Input id="current-password" type="password" className="bg-zinc-800 border-zinc-700 text-white mt-2" />
              </div>

              <div>
                <Label htmlFor="new-password" className="text-white">
                  New Password
                </Label>
                <Input id="new-password" type="password" className="bg-zinc-800 border-zinc-700 text-white mt-2" />
              </div>

              <div>
                <Label htmlFor="confirm-password" className="text-white">
                  Confirm New Password
                </Label>
                <Input id="confirm-password" type="password" className="bg-zinc-800 border-zinc-700 text-white mt-2" />
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-black">Change Password</Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-zinc-900 border-red-900/50">
            <CardHeader>
              <CardTitle className="text-white">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="bg-red-900 hover:bg-red-800 text-white">
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
