"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

type NavItem = {
  name: string
  href: string
  items: { name: string; href: string }[]
}

type MobileMenuProps = {
  items: NavItem[]
  onClose: () => void
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  return (
    <div className="lg:hidden bg-[#1a1f26] border-b border-[#2d3844] overflow-y-auto max-h-[calc(100vh-93px)]">
      <nav className="container mx-auto px-4 py-2">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.name}>
              {item.items.length > 0 ? (
                <div>
                  <button
                    className={`w-full flex justify-between items-center py-2 px-3 rounded-md ${
                      pathname.startsWith(item.href) ? "bg-[#2d3844] text-white" : "text-gray-300"
                    }`}
                    onClick={() => toggleExpand(item.name)}
                    aria-expanded={expandedItems.includes(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(item.name) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedItems.includes(item.name) && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#3d4957] pl-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block py-2 px-3 rounded-md text-sm ${
                            pathname === subItem.href ? "bg-[#3d4957] text-white" : "text-gray-300"
                          }`}
                          onClick={onClose}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded-md ${
                    pathname === item.href ? "bg-[#2d3844] text-white" : "text-gray-300"
                  }`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

