import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Example of redirecting legacy URLs to new format
  const url = request.nextUrl.clone()

  // Example: Redirect old match URL format to new format
  if (url.pathname.startsWith("/matchid/")) {
    const matchId = url.pathname.split("/")[2]
    return NextResponse.redirect(new URL(`/matches/${matchId}`, request.url))
  }

  // Example: Redirect old team URL format to new format
  if (url.pathname.startsWith("/team/")) {
    const teamId = url.pathname.split("/")[2]
    return NextResponse.redirect(new URL(`/teams/${teamId}`, request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/matchid/:path*",
    "/team/:path*",
    // Add other legacy path patterns here
  ],
}

