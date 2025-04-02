"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItem = {
  name: string
  href: string
}

type NavDropdownProps = {
  items: NavItem[]
}

export default function NavDropdown({ items }: NavDropdownProps) {
  const pathname = usePathname()

  return (
    <div className="absolute top-full left-0 bg-[#2d3844] min-w-[200px] rounded-b-md shadow-lg overflow-hidden z-50">
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 text-sm hover:bg-[#3d4957] transition-colors ${
              pathname === item.href ? "bg-[#3d4957] text-white" : "text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

