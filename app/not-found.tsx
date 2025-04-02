"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-[#2d3844] rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-[#1e252d] rounded-full p-6">
                <div className="text-[#4c9fd8] text-8xl font-bold">404</div>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>

            <p className="text-gray-300 mb-8">The page you are looking for doesn't exist or has been moved.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-[#4c9fd8] text-white py-3 px-4 rounded-md hover:bg-[#3a8bc2] transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>

              <Link
                href="/matches"
                className="flex items-center justify-center gap-2 bg-[#3d4957] text-white py-3 px-4 rounded-md hover:bg-[#4a5769] transition-colors"
              >
                <span>View Matches</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 border border-[#3d4957] text-white py-3 px-4 rounded-md hover:bg-[#3d4957] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3d4957]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#2d3844] px-2 text-gray-400">Or try a search</span>
              </div>
            </div>

            <div className="mt-8">
              <form className="flex">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search EDL.GG..."
                    className="w-full px-4 py-3 bg-[#1e252d] border border-[#3d4957] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <button
                  type="submit"
                  className="bg-[#4c9fd8] text-white px-4 py-3 rounded-r-md hover:bg-[#3a8bc2] transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="bg-[#232c38] p-4">
            <div className="text-center text-sm text-gray-400">
              <p>
                If you believe this is an error, please{" "}
                <Link href="/contact" className="text-[#4c9fd8] hover:underline">
                  contact support
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Popular Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/news" className="bg-[#2d3844] p-4 rounded-md hover:bg-[#3d4957] transition-colors text-center">
              News
            </Link>
            <Link
              href="/matches"
              className="bg-[#2d3844] p-4 rounded-md hover:bg-[#3d4957] transition-colors text-center"
            >
              Matches
            </Link>
            <Link
              href="/results"
              className="bg-[#2d3844] p-4 rounded-md hover:bg-[#3d4957] transition-colors text-center"
            >
              Results
            </Link>
            <Link
              href="/events"
              className="bg-[#2d3844] p-4 rounded-md hover:bg-[#3d4957] transition-colors text-center"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

