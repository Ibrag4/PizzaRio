"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { GiFullPizza } from "react-icons/gi"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Cardápio", href: "https://drive.google.com/file/d/1a6oztZO-huv4SlTd-J5hKrvVUz4Ufq_8/view?usp=sharing" },
    { name: "Nossas Unidades", href: "https://drive.google.com/file/d/1m27OgeOSJGz03vchWBlRb8cAuf7wGDr1/view?usp=sharing" },
    { name: "Reservas", href: "/reservas" },
    { name: "Contato", href: "https://web.whatsapp.com/" },
  ]

  return (
    <header className="bg-red-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-white">
            <GiFullPizza className="w-7 h-7" />
            Pizza Rio
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botão Login Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              asChild
            >
              <Link href="/login">LOGIN</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">LOGIN</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
