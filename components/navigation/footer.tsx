import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a1f26] border-t border-[#2d3844] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About EDL.GG</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stats" className="text-gray-400 hover:text-white text-sm">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/forums" className="text-gray-400 hover:text-white text-sm">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-gray-400 hover:text-white text-sm">
                  Matches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/discord" className="text-gray-400 hover:text-white text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-gray-400 hover:text-white text-sm">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="text-gray-400 hover:text-white text-sm">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="text-gray-400 hover:text-white text-sm">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/bugs" className="text-gray-400 hover:text-white text-sm">
                  Report a Bug
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-400 hover:text-white text-sm">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2d3844] text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EDL.GG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

