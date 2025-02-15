"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log(formData);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-xl shadow-lg shadow-black/30 space-y-8">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
          <span className="text-white text-xl font-medium tracking-tight">Sync.</span>
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create new account<span className="text-blue-500">.</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Already a member?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div className="space-y-1">
            <label htmlFor="firstName" className="text-xs text-gray-400 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-600 transition-all duration-200"
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label htmlFor="lastName" className="text-xs text-gray-400 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-600 transition-all duration-200"
              placeholder="Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs text-gray-400 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-600 transition-all duration-200`}
              placeholder="example@email.com"
              required
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </div>

          {/* Password */}
          <div className="space-y-1 relative">
            <label htmlFor="password" className="text-xs text-gray-400 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-600 transition-all duration-200"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium shadow-sm shadow-blue-800/30"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-3 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}