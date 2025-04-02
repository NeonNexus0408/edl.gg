import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Register - EDL.GG",
  description: "Create a new EDL.GG account to join the community, comment on news, and access personalized features.",
}

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-[#2d3844] rounded-md overflow-hidden shadow-lg border border-[#3d4957]">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400 text-sm">Join the EDL.GG community</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-3 py-2 bg-[#1e252d] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 bg-[#1e252d] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 bg-[#1e252d] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                className="w-full px-3 py-2 bg-[#1e252d] border border-[#3d4957] rounded-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-start">
              <input id="terms" type="checkbox" className="h-4 w-4 mt-1 bg-[#1e252d] border border-[#3d4957] rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the{" "}
                <Link href="/terms" className="text-[#4c9fd8] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#4c9fd8] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4c9fd8] text-white py-2 px-4 rounded-md hover:bg-[#3a8bc2] transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#4c9fd8] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

