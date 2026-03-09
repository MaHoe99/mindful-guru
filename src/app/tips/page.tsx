import MindfulnessTips from '@/components/MindfulnessTips'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link 
            href="/"
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              ✨ Achtsamkeits-Tipps
            </h1>
            <p className="text-slate-600 mt-2">
              Praktische Übungen für mehr Bewusstheit im Alltag
            </p>
          </div>
        </div>

        <MindfulnessTips />

        {/* Zusätzliche Info */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            🧘 Wie praktiziere ich Achtsamkeit?
          </h2>
          <div className="space-y-3 text-green-50">
            <p>
              <strong className="text-white">1. Beginne klein:</strong> Nur 5 Minuten täglich reichen am Anfang.
            </p>
            <p>
              <strong className="text-white">2. Sei regelmäßig:</strong> Besser täglich 5 Minuten als einmal 1 Stunde.
            </p>
            <p>
              <strong className="text-white">3. Sei geduldig:</strong> Achtsamkeit ist eine Fähigkeit, die sich entwickelt.
            </p>
            <p>
              <strong className="text-white">4. Nutze Alltag:</strong> Jede Tätigkeit kann achtsam ausgeführt werden.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
