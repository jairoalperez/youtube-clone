"use client"

import type React from "react"

import { Search, Upload, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currentUser } from "@/lib/mock-data"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <div className="flex items-center justify-between gap-4 px-4 py-2">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-zinc-800"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link
            href="/"
            className="flex items-center gap-1 text-xl font-bold text-white hover:text-orange-500 transition-colors"
          >
            <span className="bg-orange-500 text-black px-2 py-1 rounded">YT Clone</span>
          </Link>
        </div>

        {/* Center: Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
            <Button type="submit" size="icon" className="bg-zinc-800 hover:bg-zinc-700 text-white">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        {/* Right: User Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-zinc-800">
            <Link href="/me/upload">
              <Upload className="h-5 w-5" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback className="bg-orange-500 text-black">{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-zinc-800 text-white">
              <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800">
                <Link href="/me/channel">Your Channel</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800">
                <Link href="/me/upload">Upload</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800">
                <Link href="/feed/library">Library</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800">
                <Link href="/me/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
