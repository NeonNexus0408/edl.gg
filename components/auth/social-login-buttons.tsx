"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function SocialLoginButtons() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)

  const handleSocialLogin = async (provider: string) => {
    setLoadingProvider(provider)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would handle the social authentication here
      console.log(`${provider} login initiated`)

      // Redirect to provider's OAuth page
    } catch (error) {
      console.error(`${provider} login failed`, error)
    } finally {
      setLoadingProvider(null)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        disabled={loadingProvider !== null}
        className="flex justify-center items-center py-2 px-4 border border-[#3d4957] rounded-md bg-[#1e252d] hover:bg-[#263440] transition-colors text-sm"
      >
        {loadingProvider === "google" ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        )}
        Google
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("discord")}
        disabled={loadingProvider !== null}
        className="flex justify-center items-center py-2 px-4 border border-[#3d4957] rounded-md bg-[#1e252d] hover:bg-[#263440] transition-colors text-sm"
      >
        {loadingProvider === "discord" ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
            />
          </svg>
        )}
        Discord
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("steam")}
        disabled={loadingProvider !== null}
        className="flex justify-center items-center py-2 px-4 border border-[#3d4957] rounded-md bg-[#1e252d] hover:bg-[#263440] transition-colors text-sm col-span-2"
      >
        {loadingProvider === "steam" ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-4.61 0-8.47-3.13-9.65-7.36l3.78 1.58c.27.68.83 1.27 1.6 1.59.25.1.5.17.76.17.3 0 .59-.07.87-.19l2.62-1.87c.85-.62 1.37-1.61 1.37-2.71 0-1.86-1.5-3.36-3.35-3.36-.17 0-.35.02-.5.05L6.26 8.1c-.63-.24-1.32-.24-1.95 0-.83.33-1.47 1.01-1.75 1.86a3.26 3.26 0 0 0 1.84 4.22l-1.55-.65A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8m-3.35 10.5a2.14 2.14 0 0 1-2.14-2.14 2.14 2.14 0 0 1 2.14-2.14c1.18 0 2.14.96 2.14 2.14a2.14 2.14 0 0 1-2.14 2.14M18 8.59c-1.26 0-2.29 1.03-2.29 2.29s1.03 2.29 2.29 2.29 2.29-1.03 2.29-2.29-1.03-2.29-2.29-2.29m0 3.43c-.63 0-1.14-.51-1.14-1.14 0-.63.51-1.14 1.14-1.14.63 0 1.14.51 1.14 1.14 0 .63-.51 1.14-1.14 1.14Z"
            />
          </svg>
        )}
        Sign in with Steam
      </button>
    </div>
  )
}

