'use client'
import { motion, useScroll, useSpring, useMotionValueEvent, useMotionValue, useTransform } from 'framer-motion'
import { MessageCircle, Menu, Users, Shield, Globe, ArrowRight, Sparkles, Bot, Laptop, Phone, Tablet } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [usersOnline, setUsersOnline] = useState(0)
  const count = useSpring(0, { mass: 1, stiffness: 75, damping: 15 })
  const phoneX = useMotionValue(0)
  const phoneRotate = useTransform(phoneX, [-100, 100], [-15, 15])

  useEffect(() => {
    const updateUsers = () => {
      const target = 2458
      count.set(target)
      setUsersOnline(target)
    }
    updateUsers()
  }, [])

  const mockupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -top-32 -left-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-32 -right-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto p-4 md:p-6 flex justify-between items-center backdrop-blur-sm mt-4 mx-4">
        <motion.h1
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blab
        </motion.h1>
        <div className="flex gap-2 md:gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full text-white bg-gray-950 backdrop-blur-md hover:bg-black transition-all"
          >
            <Link href="/register">Sign In</Link>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

        {/* Online Users Counter */}
        <motion.div
          className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/10 flex items-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">
            <motion.span>
              {Math.round(usersOnline)}
            </motion.span> users online now
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Connect Seamlessly
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-medium">
            With Friends & Colleagues
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Experience next-level communication with real-time translation,
          crystal-clear voice messages, and instant chat capabilities.
        </motion.p>

        {/* Platform Availability */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['Desktop', 'Mobile', 'Tablet'].map((device, index) => (
            <motion.div
              key={device}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              {index === 0 ? <Laptop className="w-4 h-4 text-blue-400" /> :
                index === 1 ? <Phone className="w-4 h-4 text-purple-400" /> :
                  <Tablet className="w-4 h-4 text-pink-400" />}
              <span className="text-sm">{device}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mockup Section */}
       {/* Mockup Section */}
<motion.div
  className="relative w-full max-w-5xl mt-8 md:mt-20 px-4"
>
  <motion.div
    className="relative mx-auto w-64 sm:w-72 md:w-80 h-[500px] md:h-[600px] bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/20 overflow-hidden"
    variants={mockupVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50 p-4">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-4 bg-white/5 p-3 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <h4 className="text-base md:text-lg font-semibold">Team Chat</h4>
          </div>
          <Users className="w-4 h-4 md:w-5 md:h-5" />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-xl max-w-[80%] border border-white/10">
            <p className="text-xs md:text-sm">Hey team! How's the new feature coming along? �</p>
          </div>
          <div className="bg-blue-500/20 backdrop-blur-sm p-2 md:p-3 rounded-xl max-w-[80%] ml-auto border border-blue-500/20">
            <p className="text-xs md:text-sm">Just pushed the latest updates. Looking good! ✨</p>
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-4 flex gap-2 bg-white/5 p-2 rounded-xl backdrop-blur-sm border border-white/10">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-3 md:px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-xs md:text-sm focus:outline-none focus:border-blue-500/50"
          />
          <button
            className="p-2 rounded-lg bg-blue-500/80 hover:bg-blue-500 transition-colors"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>

  {/* AI Features Indicator */}
  <motion.div
    className="hidden md:flex absolute -right-8 top-32 items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <Bot className="w-5 h-5 text-blue-400" />
    <span className="text-sm">AI-Powered Translations</span>
  </motion.div>

  {/* Security Indicator */}
  <motion.div
    className="hidden md:flex absolute -left-8 top-64 items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1.2 }}
  >
    <Shield className="w-5 h-5 text-purple-400" />
    <span className="text-sm">End-to-End Encrypted</span>
  </motion.div>
</motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-32 w-full max-w-6xl px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <div className="mb-4 md:mb-6 flex items-center gap-4">
                <motion.div
                  className={`p-3 md:p-4 ${feature.color}/10 rounded-xl`}
                  whileHover={{ rotate: 15 }}
                >
                  <feature.icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

const features = [
  {
    title: 'Global Chat',
    description: 'Connect with team members worldwide with real-time translation in 20+ languages.',
    icon: Globe,
    color: 'text-blue-400'
  },
  {
    title: 'Smart Features',
    description: 'AI-powered suggestions, smart replies, and automatic message organization.',
    icon: Sparkles,
    color: 'text-purple-400'
  },
  {
    title: 'Team Spaces',
    description: 'Create dedicated spaces for teams with custom permissions and integration options.',
    icon: Users,
    color: 'text-pink-400'
  }
]