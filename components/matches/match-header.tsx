import Image from "next/image"
import Link from "next/link"

type Team = {
  name: string
  logo: string
  score: number
}

type Event = {
  name: string
  date: string
  status: string
}

type MatchHeaderProps = {
  team1: Team
  team2: Team
  score: string
  event: Event
}

export default function MatchHeader({ team1, team2, score, event }: MatchHeaderProps) {
  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Team 1 */}
        <div className="flex-1 bg-gradient-to-r from-[#1e3a5f] to-[#2d3844] p-6 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 mb-2">
            <Image
              src={team1.logo || "/placeholder.svg"}
              alt={team1.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-center">{team1.name}</h2>
          <div className="text-2xl font-bold text-red-500">{team1.score}</div>
        </div>

        {/* Match Info */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl font-bold mb-2">{score}</div>
          <div className="text-sm text-gray-400 mb-1">{event.date}</div>
          <Link href="#" className="text-[#4c9fd8] hover:underline text-sm mb-2">
            {event.name}
          </Link>
          <div className="text-gray-400 text-sm">{event.status}</div>
        </div>

        {/* Team 2 */}
        <div className="flex-1 bg-gradient-to-l from-[#1e3a5f] to-[#2d3844] p-6 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 mb-2">
            <Image
              src={team2.logo || "/placeholder.svg"}
              alt={team2.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-center">{team2.name}</h2>
          <div className="text-2xl font-bold text-green-500">{team2.score}</div>
        </div>
      </div>
    </div>
  )
}

