import Image from "next/image"

const transfers = [
  {
    id: 1,
    player: {
      name: "Player 1",
      image: "/placeholder.svg?height=40&width=40",
      role: "COACH",
    },
    fromTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
    toTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
  },
  {
    id: 2,
    player: {
      name: "Player 2",
      image: "/placeholder.svg?height=40&width=40",
      role: "COACH",
    },
    fromTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
    toTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
  },
  {
    id: 3,
    player: {
      name: "Player 3",
      image: "/placeholder.svg?height=40&width=40",
      role: "BENCH",
    },
    fromTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
    toTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
  },
  {
    id: 4,
    player: {
      name: "Player 4",
      image: "/placeholder.svg?height=40&width=40",
      role: "",
    },
    fromTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
    toTeam: {
      logo: "/placeholder.svg?height=30&width=30",
    },
  },
]

export default function TopTransfers() {
  return (
    <div className="space-y-2">
      {transfers.map((transfer) => (
        <div
          key={transfer.id}
          className="flex items-center justify-between p-1 hover:bg-[#3d4957] transition-colors rounded"
        >
          <div className="flex items-center">
            <Image
              src={transfer.player.image || "/placeholder.svg"}
              alt={transfer.player.name}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={transfer.fromTeam.logo || "/placeholder.svg"}
              alt="From team"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-gray-400">→</span>
            <Image
              src={transfer.toTeam.logo || "/placeholder.svg"}
              alt="To team"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>

          {transfer.player.role && <div className="text-xs bg-[#3d4957] px-2 py-1 rounded">{transfer.player.role}</div>}
        </div>
      ))}
    </div>
  )
}

