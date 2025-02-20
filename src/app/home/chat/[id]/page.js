'use client'
import { motion } from 'framer-motion'
import { Send, Users, ArrowLeft, Smile, Paperclip } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ChatPage() {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  
  // Enhanced chat data with avatars
  const chatData = {
    1: { name: 'Design Team', members: 4, avatar: '👩‍🎨' },
    2: { name: 'Marketing Group', members: 8, avatar: '📈' },
    3: { name: 'John Smith', members: 1, avatar: '👨‍💻' },
  }

  const chatInfo = chatData[id] || { name: 'Unknown Chat', members: 0, avatar: '❓' }

  const [messages, setMessages] = useState([
    { id: 1, text: "Hey team! How's the prototype coming along?", sender: 'Alice', time: '09:30 AM', isMe: false, avatar: '👩‍💻' },
    { id: 2, text: 'Going great! Just finishing up the interactions.', sender: 'me', time: '09:31 AM', isMe: true },
    { id: 3, text: 'Should have it ready for review by EOD.', sender: 'me', time: '09:31 AM', isMe: true },
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: 'me',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: true,
        },
      ])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -top-32 -left-32"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-32 -right-32"
          animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Header */}
      <nav className="container mx-auto p-6 flex items-center gap-4 backdrop-blur-sm bg-black/30">
        <Link href="/home/dashboard">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.div>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/5 p-2 pr-4 rounded-full cursor-pointer"
          >
            <div className="text-2xl">{chatInfo.avatar}</div>
            <div>
              <h1 className="text-xl font-semibold">{chatInfo.name}</h1>
              <span className="text-gray-400 text-sm">{chatInfo.members} members</span>
            </div>
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-auto p-2 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
        >
          <Users className="w-5 h-5 text-purple-400" />
        </motion.div>
      </nav>

      {/* Chat Messages */}
      <main className="container mx-auto px-4 pb-24 h-[calc(100vh-160px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <div className="max-w-3xl mx-auto space-y-6 py-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'} group`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-3xl max-w-[80%] backdrop-blur-md border ${
                  message.isMe
                    ? 'bg-blue-500/20 border-blue-500/20 rounded-br-none hover:bg-blue-500/30'
                    : 'bg-white/5 border-white/10 rounded-bl-none hover:bg-white/10'
                } relative transition-all duration-200`}
              >
                {!message.isMe && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">{message.avatar}</div>
                    <span className="text-xs font-medium text-purple-300">{message.sender}</span>
                  </div>
                )}
                <p>{message.text}</p>
                <span className="text-xs text-gray-400 mt-1 block">{message.time}</span>
                
                {/* Hover effect indicator */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/10 transition-all pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Message Input */}
      <div className="fixed bottom-0 w-full bg-gray-900/50 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto p-6">
          <div className="max-w-3xl mx-auto flex gap-4">
            {/* Additional Action Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
            >
              <Smile className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
            >
              <Paperclip className="w-5 h-5" />
            </motion.button>

            {/* Message Input Field */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex-1 relative"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="w-full px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:border-blue-500/50 transition-all"
              />
              <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-white/10 transition-all pointer-events-none" />
            </motion.div>

            {/* Send Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              className="p-3 rounded-full bg-blue-500/80 hover:bg-blue-500 flex items-center justify-center transition-all"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}