"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#1e252d] text-white flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-[#2d3844] rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#1e252d] rounded-full p-6">
                    <div className="text-[#c01e1e] text-8xl font-bold">!</div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-center">Critical Error</h1>

                <p className="text-gray-300 mb-8 text-center">
                  We're sorry, but a critical error has occurred in the application.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={() => reset()}
                    className="flex items-center justify-center gap-2 bg-[#4c9fd8] text-white py-3 px-4 rounded-md hover:bg-[#3a8bc2] transition-colors"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    <span>Reload Application</span>
                  </button>

                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 border border-[#3d4957] text-white py-3 px-4 rounded-md hover:bg-[#3d4957] transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span>Return Home</span>
                  </Link>
                </div>

                <div className="bg-[#1e252d] rounded-md p-4 text-left text-sm text-gray-400">
                  <p className="font-semibold mb-1">Error Information:</p>
                  <p className="font-mono overflow-x-auto">{error.message || "An unknown error occurred"}</p>
                  {error.digest && <p className="mt-2 text-xs">Error ID: {error.digest}</p>}
                </div>
              </div>

              <div className="bg-[#232c38] p-4">
                <div className="text-center text-sm text-gray-400">
                  <p>
                    Please try again later or{" "}
                    <a href="mailto:support@edl.gg" className="text-[#4c9fd8] hover:underline">
                      contact support
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

