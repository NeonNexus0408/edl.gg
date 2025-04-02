import Image from "next/image"

export default function PlayerOfTheWeek() {
  return (
    <div className="bg-[#2d3844] rounded-md overflow-hidden">
      <div className="relative">
        <Image src="/placeholder.svg?height=200&width=350" alt="yuurih" width={350} height={200} className="w-full" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">yuurih</h3>
          <p className="text-sm text-gray-300">Player of the week</p>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center">
        <div className="text-4xl font-bold text-white">81.8%</div>
        <p className="text-sm text-gray-300">Opening duels won</p>
      </div>

      <div className="bg-[#232c38] p-2 text-center text-sm text-gray-300">RANKING</div>
    </div>
  )
}

