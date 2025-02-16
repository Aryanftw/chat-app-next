'use client'
import { MessageCircle, Menu, Users, Shield, Globe, ArrowRight, Sparkles, Bot, Laptop, Phone, Tablet } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto p-4 md:p-6 flex justify-between items-center backdrop-blur-sm mt-4 mx-4">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Sync
        </h1>
        <div className="flex gap-2 md:gap-4 items-center">
          <button
            className="px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          ><Link href="/register">Sign In</Link>

          </button>
          <button className="p-2 md:p-2.5 rounded-full hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

        {/* Online Users Counter */}
        <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">2,458 users online now</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Connect Seamlessly
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-medium">
            With Friends & Colleagues
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed px-4">
          Experience next-level communication with real-time translation,
          crystal-clear voice messages, and instant chat capabilities.
        </p>

        {/* Platform Availability */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Laptop className="w-4 h-4 text-blue-400" />
            <span className="text-sm">Desktop</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Phone className="w-4 h-4 text-purple-400" />
            <span className="text-sm">Mobile</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Tablet className="w-4 h-4 text-pink-400" />
            <span className="text-sm">Tablet</span>
          </div>
        </div>

        {/* Mockup Section */}
        <div className="relative w-full max-w-5xl mt-8 md:mt-20 px-4">
          <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-[500px] md:h-[600px] bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50 p-4">
              {/* Chat Interface Mock */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 bg-white/5 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <h4 className="text-base md:text-lg font-semibold">Team Chat</h4>
                  </div>
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1 space-y-4 overflow-y-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-xl max-w-[80%] border border-white/10">
                    <p className="text-xs md:text-sm">Hey team! How's the new feature coming along? 🚀</p>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-2 md:p-3 rounded-xl max-w-[80%] ml-auto border border-blue-500/20">
                    <p className="text-xs md:text-sm">Just pushed the latest updates. Looking good! ✨</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 bg-white/5 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 md:px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-xs md:text-sm focus:outline-none focus:border-blue-500/50"
                  />
                  <button className="p-2 rounded-lg bg-blue-500/80 hover:bg-blue-500 transition-colors">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Features Indicator */}
          <div className="hidden md:flex absolute -right-8 top-32 items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
            <Bot className="w-5 h-5 text-blue-400" />
            <span className="text-sm">AI-Powered Translations</span>
          </div>

          {/* Security Indicator */}
          <div className="hidden md:flex absolute -left-8 top-64 items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-sm">End-to-End Encrypted</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-32 w-full max-w-6xl px-4">
          <div className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 md:mb-6 flex items-center gap-4">
              <div className="p-3 md:p-4 bg-blue-500/10 rounded-xl">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Global Chat</h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Connect with team members worldwide with real-time translation in 20+ languages.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 md:mb-6 flex items-center gap-4">
              <div className="p-3 md:p-4 bg-purple-500/10 rounded-xl">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Smart Features</h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              AI-powered suggestions, smart replies, and automatic message organization.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-4 md:mb-6 flex items-center gap-4">
              <div className="p-3 md:p-4 bg-pink-500/10 rounded-xl">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Team Spaces</h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Create dedicated spaces for teams with custom permissions and integration options.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}