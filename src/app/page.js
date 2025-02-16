import Image from 'next/image';
import { Download, MessageCircle, Mic } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tappa!</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
            Get started
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition">
            <span className="sr-only">Menu</span>
            ⋮
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Connect with your<br />friends easily
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          The best app for your communication
        </p>

        {/* App Store Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition">
            <Image src="/app-store.svg" alt="App Store" width={20} height={20} />
            App Store
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition">
            <Image src="/google-play.svg" alt="Google Play" width={20} height={20} />
            Google Play
          </button>
        </div>

        {/* Mockup and Floating Elements */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-64 h-96 bg-black rounded-3xl shadow-lg overflow-hidden">
            {/* Phone Mockup Placeholder */}
            <Image src="/phone-mockup.png" alt="Phone Mockup" layout="fill" objectFit="cover" />
          </div>

          {/* Floating Chat Bubbles */}
          <div className="absolute top-0 left-0 bg-blue-600 text-white p-3 rounded-2xl shadow-lg transform -translate-x-12 translate-y-16">
            Mary: Let's discuss a new project?
          </div>
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-3 rounded-2xl shadow-lg transform translate-x-12 -translate-y-8">
            Alex: Hello, how are you?
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-4">Translation</h3>
            <div className="flex gap-2">
              {['English', 'German', 'Spanish', 'Italian'].map((lang) => (
                <span key={lang} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Voice Messages</h3>
            <Mic className="w-8 h-8 text-purple-400" />
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Instant Chat</h3>
            <MessageCircle className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </main>
    </div>
  );
}