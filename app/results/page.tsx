import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Results - EDL.GG",
  description: "Latest CS2 match results from tournaments around the world.",
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Results</h1>
      <div className="bg-[#2d3844] rounded-md overflow-hidden p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Results</h2>
        {/* Results content would go here */}
        <div className="p-4 border border-[#3d4957] rounded-md">
          <p className="text-gray-300">Sample match result</p>
        </div>
      </div>
    </div>
  )
}

