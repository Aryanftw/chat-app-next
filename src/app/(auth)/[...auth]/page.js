// app/(auth)/[...auth]/page.js
import { SignIn, SignUp } from "@clerk/nextjs";

export default async function AuthPage({ params }) {
  // Wait for params to be available
  const resolvedParams = await params;
  const authType = resolvedParams.auth?.[0];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 py-12">
      {/* Brand Logo */}
      <div className="absolute top-8 left-8 flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
        <span className="text-white text-xl font-medium tracking-tight">Blab.</span>
      </div>
      
      {/* Render the appropriate Clerk component directly */}
      {authType === "sign-in" ? <SignIn /> : <SignUp />}
    </div>
  );
}