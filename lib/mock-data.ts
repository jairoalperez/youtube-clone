// Mock data for the YouTube clone

export interface Video {
  id: string
  title: string
  channelId: string
  channelName: string
  channelHandle: string
  channelAvatar: string
  thumbnail: string
  duration: string
  views: string
  uploadedAt: string
  description: string
  likes: number
  isLiked?: boolean
  isWatchLater?: boolean
}

export interface Channel {
  id: string
  name: string
  handle: string
  avatar: string
  banner: string
  subscriberCount: string
  description: string
  isSubscribed?: boolean
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  text: string
  timestamp: string
  isOwn?: boolean
}

export const currentUser = {
  id: "user-1",
  name: "John Doe",
  handle: "@johndoe",
  avatar: "/diverse-user-avatars.png",
  email: "john@example.com",
}

export const mockVideos: Video[] = [
  {
    id: "vid-1",
    title: "Building a Full-Stack App with Next.js 15",
    channelId: "ch-1",
    channelName: "Tech Tutorials",
    channelHandle: "@techtutorials",
    channelAvatar: "/tech-channel.png",
    thumbnail: "/nextjs-tutorial.jpg",
    duration: "24:15",
    views: "125K",
    uploadedAt: "2 days ago",
    description: "Learn how to build a modern full-stack application using Next.js 15 with App Router.",
    likes: 4200,
    isLiked: false,
    isWatchLater: false,
  },
  {
    id: "vid-2",
    title: "The Future of AI in 2025",
    channelId: "ch-2",
    channelName: "AI Insider",
    channelHandle: "@aiinsider",
    channelAvatar: "/ai-channel.jpg",
    thumbnail: "/ai-future.jpg",
    duration: "15:42",
    views: "890K",
    uploadedAt: "1 week ago",
    description: "Exploring the latest developments in artificial intelligence and what to expect in 2025.",
    likes: 18000,
    isLiked: true,
    isWatchLater: true,
  },
  {
    id: "vid-3",
    title: "Amazing Nature Photography Tips",
    channelId: "ch-3",
    channelName: "Photo Masters",
    channelHandle: "@photomasters",
    channelAvatar: "/photo-channel.jpg",
    thumbnail: "/nature-photography-collection.png",
    duration: "18:30",
    views: "456K",
    uploadedAt: "3 days ago",
    description: "Professional tips for capturing stunning nature photographs.",
    likes: 12000,
  },
  {
    id: "vid-4",
    title: "Cooking the Perfect Steak",
    channelId: "ch-4",
    channelName: "Chef's Kitchen",
    channelHandle: "@chefskitchen",
    channelAvatar: "/chef-channel.jpg",
    thumbnail: "/steak-cooking.jpg",
    duration: "12:05",
    views: "2.1M",
    uploadedAt: "1 month ago",
    description: "Master the art of cooking the perfect steak every time.",
    likes: 89000,
  },
  {
    id: "vid-5",
    title: "Beginner's Guide to TypeScript",
    channelId: "ch-1",
    channelName: "Tech Tutorials",
    channelHandle: "@techtutorials",
    channelAvatar: "/tech-channel.png",
    thumbnail: "/typescript-guide.jpg",
    duration: "32:18",
    views: "678K",
    uploadedAt: "2 weeks ago",
    description: "Everything you need to know to get started with TypeScript.",
    likes: 24000,
  },
  {
    id: "vid-6",
    title: "Travel Vlog: Tokyo Adventures",
    channelId: "ch-5",
    channelName: "World Explorer",
    channelHandle: "@worldexplorer",
    channelAvatar: "/travel-channel.jpg",
    thumbnail: "/tokyo-travel-street.png",
    duration: "28:45",
    views: "1.5M",
    uploadedAt: "5 days ago",
    description: "Join me as I explore the vibrant streets of Tokyo!",
    likes: 45000,
  },
]

export const mockChannels: Channel[] = [
  {
    id: "ch-1",
    name: "Tech Tutorials",
    handle: "@techtutorials",
    avatar: "/tech-channel.png",
    banner: "/tech-banner.jpg",
    subscriberCount: "1.2M",
    description: "Learn programming, web development, and software engineering.",
    isSubscribed: true,
  },
  {
    id: "ch-2",
    name: "AI Insider",
    handle: "@aiinsider",
    avatar: "/ai-channel.jpg",
    banner: "/ai-banner.jpg",
    subscriberCount: "890K",
    description: "Your source for AI news, tutorials, and insights.",
    isSubscribed: true,
  },
  {
    id: "ch-3",
    name: "Photo Masters",
    handle: "@photomasters",
    avatar: "/photo-channel.jpg",
    banner: "/photo-banner.jpg",
    subscriberCount: "567K",
    description: "Professional photography tips and techniques.",
    isSubscribed: false,
  },
]

export const mockComments: Comment[] = [
  {
    id: "comment-1",
    userId: "user-2",
    userName: "Jane Smith",
    userAvatar: "/user-jane.jpg",
    text: "Great tutorial! This helped me understand Next.js so much better.",
    timestamp: "2 hours ago",
    isOwn: false,
  },
  {
    id: "comment-2",
    userId: "user-1",
    userName: "John Doe",
    userAvatar: "/diverse-user-avatars.png",
    text: "Thanks for sharing this! Looking forward to more content like this.",
    timestamp: "5 hours ago",
    isOwn: true,
  },
  {
    id: "comment-3",
    userId: "user-3",
    userName: "Alex Johnson",
    userAvatar: "/user-alex.jpg",
    text: "Could you make a follow-up video about server actions?",
    timestamp: "1 day ago",
    isOwn: false,
  },
]

export const myVideos: Video[] = [
  {
    id: "my-vid-1",
    title: "My First Tutorial Video",
    channelId: "user-1",
    channelName: "John Doe",
    channelHandle: "@johndoe",
    channelAvatar: "/diverse-user-avatars.png",
    thumbnail: "/tutorial-concept.png",
    duration: "10:24",
    views: "12K",
    uploadedAt: "1 week ago",
    description: "My first attempt at creating tutorial content.",
    likes: 450,
  },
  {
    id: "my-vid-2",
    title: "Vlog: Day in My Life as a Developer",
    channelId: "user-1",
    channelName: "John Doe",
    channelHandle: "@johndoe",
    channelAvatar: "/diverse-user-avatars.png",
    thumbnail: "/developer-vlog.jpg",
    duration: "15:33",
    views: "8.5K",
    uploadedAt: "2 weeks ago",
    description: "Follow me through a typical day working as a software developer.",
    likes: 320,
  },
]
