import Image from "next/image"

const events = [
  {
    id: 1,
    name: "BLAST Open Lisbon",
    logo: "/placeholder.svg?height=30&width=30",
    type: "ongoing",
  },
  {
    id: 2,
    name: "PGL Bucharest",
    logo: "/placeholder.svg?height=30&width=30",
    days: 8,
    type: "upcoming",
  },
  {
    id: 3,
    name: "IEM Melbourne",
    logo: "/placeholder.svg?height=30&width=30",
    days: 23,
    type: "upcoming",
  },
  {
    id: 4,
    name: "BLAST Rivals",
    logo: "/placeholder.svg?height=30&width=30",
    days: 32,
    type: "upcoming",
  },
  {
    id: 5,
    name: "PGL Astana",
    logo: "/placeholder.svg?height=30&width=30",
    days: 42,
    type: "upcoming",
  },
]

export default function EventsList() {
  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      <div className="bg-[#232c38] p-2 text-center text-sm text-gray-300">EVENTS</div>

      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center p-3 border-b border-[#3d4957] hover:bg-[#3d4957] transition-colors"
        >
          <div className="w-8 h-8 mr-3 flex-shrink-0">
            <Image src={event.logo || "/placeholder.svg"} alt={event.name} width={30} height={30} className="rounded" />
          </div>
          <div className="flex-1">
            <div className="text-sm">{event.name}</div>
            {event.type === "upcoming" && <div className="text-xs text-gray-400">{event.days} days</div>}
          </div>
        </div>
      ))}

      <div className="bg-[#232c38] p-2 text-center text-sm text-gray-300 hover:bg-[#3d4957] transition-colors cursor-pointer">
        Event calendar
      </div>
    </div>
  )
}

