'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Users, ArrowLeft, Search, Image, Paperclip, Smile, MoreVertical, Phone, Video } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function ChatPage() {
  const [chats, setChats] = useState([
    { id: 1, name: 'Design Team', members: 4, lastMessage: "How's the prototype?", time: '09:30 AM', online: true, typing: true },
    { id: 2, name: 'Dev Squad', members: 5, lastMessage: 'Code review done!', time: '10:15 AM', online: true, typing: false },
    { id: 3, name: 'Marketing Team', members: 3, lastMessage: 'Campaign launched!', time: '11:00 AM', online: false, typing: false },
  ])

  const [search, setSearch] = useState('')
  const [activeChat, setActiveChat] = useState(null)

  const [messages, setMessages] = useState([
    { id: 1, text: "Hey team! How's the prototype coming along?", sender: 'Alice', time: '09:30 AM', isMe: false, avatar: '👩‍💼' },
    { id: 2, text: 'Going great! Just finishing up the interactions.', sender: 'me', time: '09:31 AM', isMe: true, avatar: '👨‍💻' },
    { id: 3, text: 'Should have it ready for review by EOD.', sender: 'me', time: '09:31 AM', isMe: true, avatar: '👨‍💻' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
        avatar: '👨‍💻'
      }])
      setNewMessage('')
    }
  }

  const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -top-32 -left-32"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-32 -right-32"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Enhanced Navigation */}
      <motion.nav 
        className="container mx-auto p-6 flex items-center gap-4 backdrop-blur-md bg-white/5 border-b border-white/10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button 
          onClick={() => setActiveChat(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hover:bg-white/10 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>
        {activeChat ? (
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <h1 className="text-xl font-semibold">{activeChat.name}</h1>
              <span className="text-gray-400 text-sm">· {activeChat.members} members</span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-purple-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Video className="w-5 h-5 text-blue-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        ) : (
          <h1 className="text-xl font-semibold">Chats</h1>
        )}
      </motion.nav>

      <AnimatePresence mode="wait">
        {activeChat ? (
          // Enhanced Chat View
          <motion.main 
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="container mx-auto px-4 pb-24 h-[calc(100vh-160px)] overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex gap-3 ${message.isMe ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      {message.avatar}
                    </div>
                    <div className={`p-4 rounded-3xl max-w-[320px] backdrop-blur-md border ${
                      message.isMe 
                        ? 'bg-blue-500/20 border-blue-500/20 rounded-br-none'
                        : 'bg-white/5 border-white/10 rounded-bl-none'
                    }`}>
                      {!message.isMe && (
                        <span className="text-xs font-medium text-purple-300 mb-1 block">
                          {message.sender}
                        </span>
                      )}
                      <p>{message.text}</p>
                      <span className="text-xs text-gray-400 mt-1 block">{message.time}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : (
          // Enhanced Chat List View
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="container mx-auto px-4 pb-24 h-[calc(100vh-160px)]"
          >
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="relative mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </motion.div>

              <AnimatePresence>
                {filteredChats.map((chat, index) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md mb-4 cursor-pointer hover:bg-white/10 transition-all"
                    onClick={() => setActiveChat(chat)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xl">
                          👥
                        </div>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-semibold">{chat.name}</h3>
                          <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {chat.typing ? (
                            <span className="text-sm text-blue-400">typing...</span>
                          ) : (
                            <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Message Input */}
      {activeChat && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 w-full bg-gray-900/50 backdrop-blur-xl border-t border-white/10"
        >
          <div className="container mx-auto p-6">
            <div className="max-w-3xl mx-auto flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <Paperclip className="w-5 h-5" />
              </motion.button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <Smile className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={sendMessage}
                className="p-3 rounded-full bg-blue-500/80 hover:bg-blue-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}