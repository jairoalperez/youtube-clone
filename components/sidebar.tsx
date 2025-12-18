"use client"

import { Home, Users, Library, History, Clock, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Subscriptions", href: "/feed/subscriptions", icon: Users },
  { name: "Library", href: "/feed/library", icon: Library },
  { name: "History", href: "/feed/history", icon: History },
  { name: "Watch Later", href: "/feed/watch-later", icon: Clock },
  { name: "Liked Videos", href: "/feed/liked", icon: ThumbsUp },
]

interface SidebarProps {
  isOpen?: boolean
}

export function Sidebar({ isOpen = true }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-[57px] h-[calc(100vh-57px)] bg-black border-r border-gray-800 transition-all duration-300 ease-in-out z-40 overflow-y-auto",
        isOpen ? "w-64" : "w-0 md:w-20",
      )}
    >
      <nav className="p-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-3 py-2.5 rounded-lg transition-colors duration-200",
                isActive ? "bg-orange-500/20 text-orange-500" : "text-gray-300 hover:bg-gray-800 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
