import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News - EDL.GG",
  description: "Latest CS2 news, match reports, and coverage from tournaments around the world.",
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* News content would go here */}
        <div className="bg-[#2d3844] rounded-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Sample News Article</h2>
            <p className="text-gray-300">This is a sample news article for the HLTV clone.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

