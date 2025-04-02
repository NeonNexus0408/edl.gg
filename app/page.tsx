import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import NavBar from "@/components/nav-bar"
import PlayerOfTheWeek from "@/components/player-of-the-week"
import TeamRanking from "@/components/team-ranking"
import MatchesSection from "@/components/matches-section"
import NewsSection from "@/components/news-section"
import RecentActivity from "@/components/recent-activity"
import EventsList from "@/components/events-list"
import TopTransfers from "@/components/top-transfers"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e252d] text-white">
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-4 mt-4">
        {/* Left Advertisement */}
        <div className="hidden lg:block lg:w-[300px] relative">
          <div className="sticky top-4">
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="CSGO Empire Advertisement"
              width={300}
              height={600}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4">
            {/* Left Column - Player of the week and Rankings */}
            <div className="space-y-4">
              <PlayerOfTheWeek />
              <TeamRanking />
              <EventsList />
            </div>

            {/* Right Column - Matches and News */}
            <div className="space-y-4">
              <div className="bg-[#2d3844] rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=600"
                  alt="BLAST Open Lisbon 2025"
                  width={600}
                  height={200}
                  className="w-full"
                />

                <div className="flex border-b border-[#3d4957]">
                  <Link href="#" className="px-6 py-3 hover:bg-[#3d4957] transition-colors">
                    Overview
                  </Link>
                  <Link href="#" className="px-6 py-3 hover:bg-[#3d4957] transition-colors">
                    Matches
                  </Link>
                  <Link href="#" className="px-6 py-3 hover:bg-[#3d4957] transition-colors">
                    Results
                  </Link>
                  <Link href="#" className="px-6 py-3 hover:bg-[#3d4957] transition-colors">
                    Stats
                  </Link>
                </div>

                <div className="p-4 relative">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-bold">LIQUID</div>
                    <div className="text-3xl font-bold">TARGET</div>
                    <div className="text-3xl font-bold">SIUHY</div>
                    <div className="text-sm text-gray-400">SOURCES</div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Player Image"
                    width={300}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              </div>

              <NewsSection />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-[300px] space-y-4">
          <div className="bg-[#2d3844] rounded-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">TODAY'S MATCHES</h3>
              <Star className="w-4 h-4 text-gray-400" />
            </div>
            <MatchesSection />
          </div>

          <div className="bg-[#2d3844] rounded-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">RECENT ACTIVITY</h3>
              <div className="flex gap-1">
                <button className="text-xs bg-[#3d4957] px-2 py-1 rounded">FROM</button>
                <button className="text-xs bg-[#3d4957] px-2 py-1 rounded">...</button>
              </div>
            </div>
            <RecentActivity />
          </div>

          <div className="bg-[#2d3844] rounded-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">TOP 30 TRANSFERS</h3>
            </div>
            <TopTransfers />
          </div>

          {/* Right Advertisement */}
          <div className="sticky top-4">
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="CSGO Empire Advertisement"
              width={300}
              height={600}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

