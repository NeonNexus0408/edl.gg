"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Filter, ChevronDown } from "lucide-react"
import { useState,useEffect } from "react"

// export const metadata: Metadata = {
//   title: "Matches - EDL.GG",
//   description: "Upcoming and live CS2 matches from tournaments around the world.",
// }

// Mock data for matches
const liveMatches = [
  {
    id: "1",
    team1: { name: "Vitality", logo: "/placeholder.svg?height=30&width=30", score: 13 },
    team2: { name: "FaZe", logo: "/placeholder.svg?height=30&width=30", score: 7 },
    event: "BLAST Premier Spring Final 2025",
    status: "LIVE",
    map: "Nuke",
    stars: 5,
  },
  {
    id: "2",
    team1: { name: "NAVI", logo: "/placeholder.svg?height=30&width=30", score: 9 },
    team2: { name: "G2", logo: "/placeholder.svg?height=30&width=30", score: 12 },
    event: "BLAST Premier Spring Final 2025",
    status: "LIVE",
    map: "Inferno",
    stars: 5,
  },
]

const upcomingMatches = [
  {
    id: "3",
    team1: { name: "Liquid", logo: "/placeholder.svg?height=30&width=30" },
    team2: { name: "The MongolZ", logo: "/placeholder.svg?height=30&width=30" },
    event: "BLAST Open Lisbon 2025",
    time: "15:00",
    date: "Today",
    stars: 4,
  },
  {
    id: "4",
    team1: { name: "MOUZ", logo: "/placeholder.svg?height=30&width=30" },
    team2: { name: "Eternal Fire", logo: "/placeholder.svg?height=30&width=30" },
    event: "BLAST Open Lisbon 2025",
    time: "18:30",
    date: "Today",
    stars: 3,
  },
  {
    id: "5",
    team1: { name: "Spirit", logo: "/placeholder.svg?height=30&width=30" },
    team2: { name: "Complexity", logo: "/placeholder.svg?height=30&width=30" },
    event: "BLAST Open Lisbon 2025",
    time: "12:00",
    date: "Tomorrow",
    stars: 4,
  },
]

const recentResults = [
  {
    id: "6",
    team1: { name: "Liquid", logo: "/placeholder.svg?height=30&width=30", score: 0 },
    team2: { name: "The MongolZ", logo: "/placeholder.svg?height=30&width=30", score: 2 },
    event: "BLAST Open Lisbon 2025",
    time: "Finished",
    date: "23rd of March",
    stars: 4,
  },
  {
    id: "7",
    team1: { name: "ENCE", logo: "/placeholder.svg?height=30&width=30", score: 2 },
    team2: { name: "BIG", logo: "/placeholder.svg?height=30&width=30", score: 1 },
    event: "ESL Pro League Season 19",
    time: "Finished",
    date: "22nd of March",
    stars: 3,
  },
]

export default function MatchesPage() {

  const [liveMatch, setLiveMatch] = useState<any>([]);

  useEffect(() => {
    const fetchLiveMatchData = async () => {
      const response = await fetch("https://api.deadlock-api.com/v1/matches/active");
      const data = await response.json();
      const temp= data.slice(0,5);
      setLiveMatch(temp);
    };

    fetchLiveMatchData();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Matches</h1>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-[#2d3844] hover:bg-[#3d4957] text-white px-4 py-2 rounded-md text-sm">
            <Calendar className="w-4 h-4" />
            <span>Calendar</span>
          </button>

          <button className="flex items-center gap-2 bg-[#2d3844] hover:bg-[#3d4957] text-white px-4 py-2 rounded-md text-sm">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Matches */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Live Matches</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveMatch.map((match:any) => (
            <Link
              key={match.match_id}
              href={`/matches/${match.match_id}`}
              className="bg-[#2d3844] rounded-md overflow-hidden hover:bg-[#3d4957] transition-colors"
            >
              <div className="p-3 bg-[#c01e1e] text-white font-semibold flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  <span>{"LIVE"}</span>
                </div>
                <div className="flex items-center">
                  {/* <span className="text-sm mr-1">{match.map}</span> */}
                  {/* <div className="flex">
                    {Array.from({ length: match.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Image
                      src={match.net_worth_team_0.logo || "/placeholder.svg"}
                      alt={match.net_worth_team_0}
                      width={30}
                      height={30}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.net_worth_team_0}</span>
                  </div>
                  <span className="text-xl font-bold">{match.objectives_mask_team1}</span>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Image
                      src={match.net_worth_team_1.logo || "/placeholder.svg"}
                      alt={match.net_worth_team_1}
                      width={30}
                      height={30}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.net_worth_team_1}</span>
                  </div>
                  <span className="text-xl font-bold">{match.objectives_mask_team1}</span>
                </div>

                <div className="text-sm text-gray-400">{match.region_mode_parsed}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Upcoming Matches</h2>
        </div>

        <div className="bg-[#2d3844] rounded-md overflow-hidden">
          {upcomingMatches.map((match, index) => (
            <Link
              key={match.id}
              href={`/matches/${match.id}`}
              className={`flex flex-col md:flex-row md:items-center p-4 hover:bg-[#3d4957] transition-colors ${
                index !== upcomingMatches.length - 1 ? "border-b border-[#3d4957]" : ""
              }`}
            >
              <div className="flex-1 flex items-center mb-2 md:mb-0">
                <div className="w-20 text-sm text-gray-400">{match.date}</div>
                <div className="w-20 text-center font-medium">{match.time}</div>
                <div className="flex-1 flex items-center justify-end md:justify-start">
                  <div className="flex items-center mr-4">
                    <Image
                      src={match.team1.logo || "/placeholder.svg"}
                      alt={match.team1.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.team1.name}</span>
                  </div>
                  <span className="mx-2">vs</span>
                  <div className="flex items-center">
                    <Image
                      src={match.team2.logo || "/placeholder.svg"}
                      alt={match.team2.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.team2.name}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:w-64">
                <div className="text-sm text-gray-400">{match.event}</div>
                <div className="flex">
                  {Array.from({ length: match.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Results</h2>
          <Link href="/results" className="text-[#4c9fd8] hover:underline text-sm">
            View all results
          </Link>
        </div>

        <div className="bg-[#2d3844] rounded-md overflow-hidden">
          {recentResults.map((match, index) => (
            <Link
              key={match.id}
              href={`/matches/${match.id}`}
              className={`flex flex-col md:flex-row md:items-center p-4 hover:bg-[#3d4957] transition-colors ${
                index !== recentResults.length - 1 ? "border-b border-[#3d4957]" : ""
              }`}
            >
              <div className="flex-1 flex items-center mb-2 md:mb-0">
                <div className="w-28 text-sm text-gray-400">{match.date}</div>
                <div className="flex-1 flex items-center justify-end md:justify-start">
                  <div className="flex items-center mr-4">
                    <Image
                      src={match.team1.logo || "/placeholder.svg"}
                      alt={match.team1.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.team1.name}</span>
                  </div>
                  <div className="flex items-center mx-2">
                    <span
                      className={`font-bold ${match.team1.score > match.team2.score ? "text-green-500" : "text-red-500"}`}
                    >
                      {match.team1.score}
                    </span>
                    <span className="mx-1">-</span>
                    <span
                      className={`font-bold ${match.team2.score > match.team1.score ? "text-green-500" : "text-red-500"}`}
                    >
                      {match.team2.score}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={match.team2.logo || "/placeholder.svg"}
                      alt={match.team2.name}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                    <span className="font-medium">{match.team2.name}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:w-64">
                <div className="text-sm text-gray-400">{match.event}</div>
                <div className="flex">
                  {Array.from({ length: match.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
