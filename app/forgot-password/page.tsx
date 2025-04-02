import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Forgot Password - EDL.GG",
  description: "Reset your EDL.GG account password.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-[#2d3844] rounded-md overflow-hidden shadow-lg border border-[#3d4957]">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
            <p className="text-gray-400 text-sm">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>

          <form className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-[#4c9fd8] text-white py-2 px-4 rounded-md hover:bg-[#3a8bc2] transition-colors"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Remember your password?{" "}
              <Link href="/login" className="text-[#4c9fd8] hover:underline font-medium">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

