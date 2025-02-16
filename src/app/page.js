import Image from 'next/image';
import { Download, MessageCircle, Mic, Menu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl -top-32 -left-32 opacity-20 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl -bottom-32 -right-32 opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          Tappa!
        </h1>
        <div className="flex gap-4 items-center">
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
            Get started
          </button>
          <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-24 flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Connect Seamlessly
          </span>
          <br />
          <span className="text-gray-300 font-medium text-4xl md:text-5xl">
            With Friends & Colleagues
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Experience next-level communication with real-time translation,
          crystal-clear voice messages, and instant chat capabilities.
        </p>

        {/* App Store Buttons */}
        <div className="flex gap-6 mb-16">
          <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl">
            <Image 
              src="/app-store.svg" 
              alt="App Store" 
              width={24} 
              height={24}
              className="filter brightness-0 invert"
            />
            <span className="font-medium">App Store</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl">
            <Image 
              src="/google-play.svg" 
              alt="Google Play" 
              width={24} 
              height={24}
              className="filter brightness-0 invert"
            />
            <span className="font-medium">Google Play</span>
          </button>
        </div>

        {/* Mockup Section */}
        <div className="relative w-full max-w-5xl mt-20">
          <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[40px] shadow-2xl border-8 border-gray-800 overflow-hidden">
            <Image 
              src="/phone-mockup.png" 
              alt="Phone Mockup" 
              layout="fill" 
              objectFit="cover"
              className="opacity-95"
            />
          </div>

          {/* Animated Chat Bubbles */}
          <div className="absolute top-20 -left-20 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-4 rounded-2xl shadow-2xl animate-float">
            <p className="text-sm font-medium">Mary: Let's discuss the project?</p>
          </div>
          <div className="absolute bottom-40 -right-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-2xl shadow-2xl animate-float delay-1000">
            <p className="text-sm font-medium">Alex: Hello! 👋</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full max-w-6xl">
          <div className="group bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-4 bg-blue-500/10 rounded-xl">
                <MessageCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">Smart Chat</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Real-time messaging with AI-powered suggestions and automatic translation across 20+ languages.
            </p>
          </div>

          <div className="group bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-4 bg-purple-500/10 rounded-xl">
                <Mic className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold">Voice Messages</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Send high-quality voice messages with background noise reduction and adjustable playback speed.
            </p>
          </div>

          <div className="group bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 cursor-pointer">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-4 bg-pink-500/10 rounded-xl">
                <Download className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold">File Sharing</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Share files up to 2GB with end-to-end encryption and cloud storage integration.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}