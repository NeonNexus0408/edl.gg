import Image from "next/image"

const matches = [
  {
    id: 1,
    team1: { name: "Party Astronauts", flag: "us", logo: "/placeholder.svg?height=20&width=20" },
    team2: { name: "Wanted", flag: "us", logo: "/placeholder.svg?height=20&width=20" },
    score: "13:16",
  },
  {
    id: 2,
    team1: { name: "Vitality", flag: "fr", logo: "/placeholder.svg?height=20&width=20" },
    team2: { name: "Spirit", flag: "ru", logo: "/placeholder.svg?height=20&width=20" },
    score: "13:7",
  },
  {
    id: 3,
    team1: { name: "BESTIA", flag: "br", logo: "/placeholder.svg?height=20&width=20" },
    team2: { name: "ODDIK", flag: "br", logo: "/placeholder.svg?height=20&width=20" },
    score: "13:10",
  },
  {
    id: 4,
    team1: { name: "ShidenN", flag: "jp", logo: "/placeholder.svg?height=20&width=20" },
    team2: { name: "RED Canids", flag: "br", logo: "/placeholder.svg?height=20&width=20" },
    score: "10:13",
  },
  {
    id: 5,
    team1: { name: "Chicken Coop", flag: "us", logo: "/placeholder.svg?height=20&width=20" },
    team2: { name: "ILL", flag: "us", logo: "/placeholder.svg?height=20&width=20" },
    time: "19:00",
  },
]

export default function MatchesSection() {
  return (
    <div className="space-y-2">
      {matches.map((match) => (
        <div key={match.id} className="flex items-center hover:bg-[#3d4957] transition-colors p-1 rounded">
          <div className="flex flex-col items-end mr-2 w-1/2">
            <div className="flex items-center">
              <span className="text-xs mr-1">{match.team1.name}</span>
              <Image
                src={match.team1.logo || "/placeholder.svg"}
                alt={`${match.team1.name} flag`}
                width={16}
                height={16}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center w-12 text-xs">{match.score || match.time}</div>

          <div className="flex flex-col items-start ml-2 w-1/2">
            <div className="flex items-center">
              <Image
                src={match.team2.logo || "/placeholder.svg"}
                alt={`${match.team2.name} flag`}
                width={16}
                height={16}
                className="rounded-full mr-1"
              />
              <span className="text-xs">{match.team2.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

