'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Bell, Sparkles, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Gespräche', icon: MessageCircle },
    { href: '/tips', label: 'Tipps', icon: Sparkles },
    { href: '/reminders', label: 'Reminders', icon: Bell },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <span className="text-2xl">🧘</span>
            Mindful Guru
          </Link>

          <div className="flex gap-1">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
