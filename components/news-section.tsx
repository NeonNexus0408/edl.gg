import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "BLAST Open Lisbon highlights",
    type: "highlight",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "donk 4k locks down Nuke for Spirit",
    time: "13 minutes ago",
    comments: 32,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Short: NIP to meet AMKAL in Astana qualifier",
    time: "11 minutes ago",
    comments: 591,
    type: "short",
  },
  {
    id: 4,
    title: 'torzsi: "This could be my year, but I hope this will be the MOUZ year"',
    time: "an hour ago",
    comments: 18,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    title: "MOUZ make third final in a row by beating EF",
    time: "3 hours ago",
    comments: 28,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    title: "Lynn Vision forfeit Rare Atom match after raising VRS integrity concern",
    time: "4 hours ago",
    comments: 40,
    image: "/placeholder.svg?height=100&width=200",
  },
]

export default function NewsSection() {
  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      <div className="p-2 bg-[#c01e1e] text-white font-semibold flex items-center">
        <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
        BLAST Open Lisbon highlights
      </div>

      <div className="divide-y divide-[#3d4957]">
        {newsItems.slice(1).map((item) => (
          <div key={item.id} className="p-3 hover:bg-[#3d4957] transition-colors">
            <div className="flex gap-3">
              {item.image && (
                <div className="w-24 h-16 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={100}
                    height={60}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              )}

              <div className="flex-1">
                <Link href="#" className="text-sm hover:text-[#c01e1e]">
                  {item.type === "short" && <span className="text-[#c01e1e] font-semibold mr-1">Short:</span>}
                  {item.title}
                </Link>

                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <span>{item.time}</span>
                  <span className="mx-1">•</span>
                  <span>{item.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-[#232c38] text-sm text-gray-300 hover:bg-[#3d4957] transition-colors cursor-pointer">
        Yesterday's news
      </div>
    </div>
  )
}

