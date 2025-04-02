"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search, ChevronDown, Menu, X, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import NavDropdown from "./nav-dropdown"
import MobileMenu from "./mobile-menu"

// Define navigation structure with routes and dropdowns
const navItems = [
  {
    name: "News",
    href: "/news",
    items: [],
  },
  {
    name: "Matches",
    href: "/matches",
    items: [],
  },
  {
    name: "Results",
    href: "/results",
    items: [],
  },
  {
    name: "Events",
    href: "/events",
    items: [
      { name: "Ongoing Events", href: "/events/ongoing" },
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
      { name: "Event Calendar", href: "/events/calendar" },
    ],
  },
  {
    name: "Players",
    href: "/players",
    items: [
      { name: "Top Players", href: "/players/top" },
      { name: "Player Rankings", href: "/players/rankings" },
      { name: "Player Stats", href: "/players/stats" },
    ],
  },
  {
    name: "Stats",
    href: "/stats",
    items: [
      { name: "Team Rankings", href: "/stats/teams" },
      { name: "Player Statistics", href: "/stats/players" },
      { name: "Event Statistics", href: "/stats/events" },
      { name: "Maps", href: "/stats/maps" },
    ],
  },
  {
    name: "Fantasy",
    href: "/fantasy",
    items: [
      { name: "Create Team", href: "/fantasy/create" },
      { name: "My Teams", href: "/fantasy/my-teams" },
      { name: "Leaderboards", href: "/fantasy/leaderboards" },
    ],
  },
  {
    name: "Forum",
    href: "/forums",
    items: [
      { name: "General", href: "/forums/general" },
      { name: "CS2 Discussion", href: "/forums/cs2" },
      { name: "Tournaments", href: "/forums/tournaments" },
      { name: "Teams & Players", href: "/forums/teams-players" },
    ],
  },
  {
    name: "Media",
    href: "/media",
    items: [
      { name: "Videos", href: "/media/videos" },
      { name: "Galleries", href: "/media/galleries" },
      { name: "Demos", href: "/media/demos" },
    ],
  },
  {
    name: "Betting",
    href: "/betting",
    items: [
      { name: "Betting Advice", href: "/betting/advice" },
      { name: "Betting Sites", href: "/betting/sites" },
      { name: "Betting Stats", href: "/betting/stats" },
    ],
  },
  {
    name: "Live",
    href: "/live",
    items: [],
  },
]

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
    // Navigate to search results page
    // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#1a1f26] border-b border-[#2d3844]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[45px]">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center h-full" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative h-full">
                {item.items.length > 0 ? (
                  <button
                    className={`h-full flex items-center px-3 hover:bg-[#2d3844] transition-colors text-sm ${
                      pathname.startsWith(item.href) ? "text-white" : "text-gray-300"
                    } ${activeDropdown === item.name ? "bg-[#2d3844]" : ""}`}
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`h-full flex items-center px-3 hover:bg-[#2d3844] transition-colors text-sm ${
                      pathname === item.href ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items.length > 0 && activeDropdown === item.name && <NavDropdown items={item.items} />}
              </div>
            ))}
          </nav>

          {/* Search and Sign In */}
          <div className="flex items-center gap-2 ml-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#2d3844] rounded px-3 py-1 text-sm w-[120px] md:w-[180px] focus:outline-none focus:ring-1 focus:ring-[#4c9fd8]"
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Submit search"
              >
                <Search className="w-4 h-4 text-gray-400" />
              </button>
            </form>
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link href="/settings" className="text-gray-400 hover:text-white transition-colors" aria-label="Settings">
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* EDL.GG Logo Bar */}
      <div className="bg-[#2d3844] py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="inline-block">
            <div className="flex items-center gap-2">
              <div className="bg-[#4c9fd8] w-10 h-10 flex items-center justify-center rounded">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-white font-bold text-2xl">EDL.GG</span>
            </div>
          </Link>

          {/* Additional elements can be added here */}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu items={navItems} onClose={() => setMobileMenuOpen(false)} />}
    </header>
  )
}

