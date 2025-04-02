import Image from "next/image"

const teams = [
  { id: 1, name: "Spirit", flag: "ru", logo: "/placeholder.svg?height=20&width=20" },
  { id: 2, name: "Vitality", flag: "fr", logo: "/placeholder.svg?height=20&width=20" },
  { id: 3, name: "Natus Vincere", flag: "ua", logo: "/placeholder.svg?height=20&width=20" },
  { id: 4, name: "MOUZ", flag: "eu", logo: "/placeholder.svg?height=20&width=20" },
  { id: 5, name: "Eternal Fire", flag: "tr", logo: "/placeholder.svg?height=20&width=20" },
]

export default function TeamRanking() {
  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      {teams.map((team, index) => (
        <div
          key={team.id}
          className="flex items-center p-3 border-b border-[#3d4957] hover:bg-[#3d4957] transition-colors"
        >
          <div className="w-6 text-center text-gray-400">{index + 1}.</div>
          <div className="w-6 mx-2">
            <Image
              src={team.logo || "/placeholder.svg"}
              alt={`${team.name} flag`}
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 text-sm">{team.name}</div>
        </div>
      ))}

      <div className="bg-[#232c38] p-2 text-center text-sm text-gray-300 hover:bg-[#3d4957] transition-colors cursor-pointer">
        Complete ranking
      </div>

      <div className="bg-[#232c38] p-2 text-center text-sm text-gray-300 border-t border-[#3d4957]">
        Last updated: 24th of Mar
      </div>
    </div>
  )
}

