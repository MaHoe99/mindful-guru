import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindful Guru - Achtsamkeit & Spirituelle Gespräche',
  description: 'Unterhalte dich mit Buddha, Jesus, Osho und Eckhart Tolle. Finde innere Ruhe und Achtsamkeit im Alltag.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
