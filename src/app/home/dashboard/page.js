'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Users, Plus, Clock, Star, Bell, BarChart, Calendar, FileText, Settings, Bookmark, Activity, Globe, Share2 } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [recentChats] = useState([
    { id: 1, name: 'Design Team', lastMessage: "Let's finalize the prototype", time: '2m ago', unread: 3, participants: 8 },
    { id: 2, name: 'Marketing Group', lastMessage: 'Campaign results are in', time: '1h ago', unread: 0, participants: 12 },
    { id: 3, name: 'John Smith', lastMessage: 'Thanks for the feedback!', time: '4h ago', unread: 1, participants: 2 },
    { id: 4, name: 'Project Alpha', lastMessage: 'New milestone achieved!', time: '5h ago', unread: 5, participants: 15 },
    { id: 5, name: 'Support Team', lastMessage: 'Urgent: Server updates needed', time: '6h ago', unread: 2, participants: 6 },
  ])

  const [onlineUsers] = useState([
    { name: 'Alice Chen', status: 'In a meeting', avatar: '👩‍💼' },
    { name: 'Bob Wilson', status: 'Available', avatar: '👨‍💻' },
    { name: 'Charlie Kim', status: 'Do not disturb', avatar: '👨‍🔧' },
    { name: 'Diana Park', status: 'Away', avatar: '👩‍🎨' },
    { name: 'Eva Rodriguez', status: 'Available', avatar: '👩‍⚕️' }
  ])

  const [pinnedItems] = useState([
    { id: 1, title: 'Q4 Planning Document', type: 'document', icon: FileText },
    { id: 2, title: 'Team Meeting', type: 'event', icon: Calendar, date: 'Tomorrow, 2 PM' },
    { id: 3, title: 'Project Roadmap', type: 'link', icon: Globe },
  ])

  const [notifications] = useState([
    { id: 1, text: '@mention in Design Team', time: '5m ago', type: 'mention' },
    { id: 2, text: 'Meeting reminder: Weekly Sync', time: '1h ago', type: 'reminder' },
    { id: 3, text: 'New shared file: Q4 Report', time: '2h ago', type: 'file' },
  ])

  const [quickStats] = useState([
    { label: 'Active Chats', value: '12', icon: MessageCircle, color: 'text-blue-400' },
    { label: 'Team Members', value: '34', icon: Users, color: 'text-purple-400' },
    { label: 'Shared Files', value: '156', icon: FileText, color: 'text-pink-400' },
    { label: 'Tasks', value: '23', icon: Activity, color: 'text-green-400' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -top-32 -left-32"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-32 -right-32"
          animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto p-6 flex justify-between items-center backdrop-blur-sm">
        <motion.h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Blab
        </motion.h1>
        <div className="flex gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-gray-950 backdrop-blur-md hover:bg-black flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </motion.button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 ${stat.color}/10 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Chats Section */}
        <div className="lg:col-span-8 space-y-8">
          {/* Recent Chats */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                Recent Chats
              </h2>
              <Link href="/chats" className="text-sm text-blue-400 hover:text-blue-300">View All</Link>
            </div>
            <div className="space-y-4">
              {recentChats.map(chat => (
                <Link key={chat.id} href={`/home/chat/${chat.id}`}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{chat.name}</h3>
                          <span className="text-xs text-gray-400">• {chat.participants} participants</span>
                        </div>
                        <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <span className="text-xs text-gray-400">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pinned Items */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Pinned Items
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300">Manage</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinnedItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      {item.date && <p className="text-xs text-gray-400">{item.date}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Online Users */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              Online Now
            </h2>
            <div className="space-y-3">
              {onlineUsers.map((user, index) => (
                <motion.div
                  key={user.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl">{user.avatar}</span>
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-xs text-gray-400">{user.status}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-pink-400" />
              Notifications
            </h2>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <p className="text-sm">{notification.text}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}