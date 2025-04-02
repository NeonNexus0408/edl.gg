import Link from "next/link"

const activities = [
  {
    id: 1,
    text: "CS2 + WWE",
    count: 16,
  },
  {
    id: 2,
    text: "Vitality vs Spirit",
    count: 551,
  },
  {
    id: 3,
    text: "Mezii",
    count: 10,
  },
  {
    id: 4,
    text: "Mathe",
    count: 5,
  },
  {
    id: 5,
    text: "Why Spirit picked Ancient",
    count: 2,
  },
  {
    id: 6,
    text: "Ninjas in Pyjamas vs ...",
    count: 22,
  },
  {
    id: 7,
    text: 'donk "entry"',
    count: 26,
  },
  {
    id: 8,
    text: "Short news: Week 13",
    count: 391,
  },
  {
    id: 9,
    text: "How",
    count: 31,
  },
  {
    id: 10,
    text: "Blast should innovate",
    count: 57,
  },
]

export default function RecentActivity() {
  return (
    <div className="space-y-1">
      {activities.map((activity) => (
        <Link
          key={activity.id}
          href="#"
          className="flex justify-between items-center p-1 hover:bg-[#3d4957] transition-colors rounded text-sm"
        >
          <span className="truncate">{activity.text}</span>
          <span className="text-gray-400 text-xs">{activity.count}</span>
        </Link>
      ))}
    </div>
  )
}

