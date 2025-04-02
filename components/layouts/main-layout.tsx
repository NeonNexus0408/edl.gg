import type React from "react"
import NavBar from "@/components/navigation/nav-bar"
import Footer from "@/components/navigation/footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#1e252d] text-white">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

