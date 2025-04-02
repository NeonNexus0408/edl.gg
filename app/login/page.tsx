import type { Metadata } from "next"
import Link from "next/link"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Sign In - EDL.GG",
  description:
    "Sign in to your EDL.GG account to access personalized features, comment on news, and participate in the community.",
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        {/* Login card */}
        <div className="bg-[#2d3844] rounded-md overflow-hidden shadow-lg border border-[#3d4957]">
          <div className="p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Sign In</h1>
              <p className="text-gray-400 text-sm">Access your EDL.GG account to join the community</p>
            </div>

            <LoginForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#4c9fd8] hover:underline font-medium">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-6 bg-[#2d3844] rounded-md p-4 border border-[#3d4957]">
          <h2 className="text-sm font-semibold mb-2">Why sign in to EDL.GG?</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-start">
              <span className="text-[#4c9fd8] mr-2">•</span>
              <span>Participate in discussions and comment on news</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4c9fd8] mr-2">•</span>
              <span>Create and manage your fantasy teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4c9fd8] mr-2">•</span>
              <span>Follow your favorite teams and players</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4c9fd8] mr-2">•</span>
              <span>Get personalized match notifications</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

