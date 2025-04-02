import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Events - EDL.GG",
  description: "CS2 tournaments and events from around the world.",
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/events/ongoing"
          className="bg-[#2d3844] rounded-md p-6 text-center hover:bg-[#3d4957] transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Ongoing Events</h2>
          <p className="text-gray-300">View all currently running tournaments</p>
        </Link>

        <Link
          href="/events/upcoming"
          className="bg-[#2d3844] rounded-md p-6 text-center hover:bg-[#3d4957] transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-gray-300">See what tournaments are coming soon</p>
        </Link>

        <Link
          href="/events/past"
          className="bg-[#2d3844] rounded-md p-6 text-center hover:bg-[#3d4957] transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Past Events</h2>
          <p className="text-gray-300">Browse completed tournaments and results</p>
        </Link>
      </div>

      <div className="bg-[#2d3844] rounded-md overflow-hidden p-4">
        <h2 className="text-xl font-semibold mb-4">Featured Events</h2>
        {/* Events content would go here */}
        <div className="p-4 border border-[#3d4957] rounded-md">
          <p className="text-gray-300">Sample event listing</p>
        </div>
      </div>
    </div>
  )
}

