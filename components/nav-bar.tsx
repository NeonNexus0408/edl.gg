"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown, Settings } from "lucide-react"

const navItems = [
  { name: "News", href: "#" },
  { name: "Matches", href: "#" },
  { name: "Results", href: "#" },
  { name: "Events", href: "#", hasDropdown: true },
  { name: "Players", href: "#", hasDropdown: true },
  { name: "Stats", href: "#", hasDropdown: true },
  { name: "Fantasy", href: "#", hasDropdown: true },
  { name: "Forum", href: "#", hasDropdown: true },
  { name: "Media", href: "#", hasDropdown: true },
  { name: "Betting", href: "#", hasDropdown: true },
  { name: "Live", href: "#" },
]

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-[#1a1f26] border-b border-[#2d3844]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[45px]">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center h-full">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="h-full flex items-center px-3 hover:bg-[#2d3844] transition-colors text-sm text-gray-300"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300">Menu</button>

          {/* Search and Sign In */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#2d3844] rounded px-3 py-1 text-sm w-[180px] focus:outline-none"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Sign in
            </Link>
            <Settings className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* HLTV Logo Bar */}
      <div className="bg-[#2d3844] py-2">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block">
            <div className="flex items-center gap-2">
              <div className="bg-[#4c9fd8] w-10 h-10 flex items-center justify-center rounded">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-white font-bold text-2xl">HLTV</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

