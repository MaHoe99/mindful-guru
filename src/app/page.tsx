import GuruChat from '@/components/GuruChat'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { Sparkles, Bell } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              🧘 Mindful Guru
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Finde innere Ruhe durch Gespräche mit spirituellen Lehrern
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/tips"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Sparkles size={20} className="text-green-500" />
                <span className="text-slate-700">Achtsamkeits-Tipps</span>
              </Link>
              
              <Link
                href="/reminders"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Bell size={20} className="text-green-500" />
                <span className="text-slate-700">Reminders erstellen</span>
              </Link>
            </div>
          </header>
          
          <GuruChat />
          
          {/* Info Box */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              🌿 Wie funktioniert es?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🗣️</div>
                <h3 className="font-semibold text-slate-800 mb-2">1. Wähle einen Guru</h3>
                <p className="text-sm text-slate-600">
                  Buddha, Jesus, Osho oder Eckhart Tolle
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">💬</div>
                <h3 className="font-semibold text-slate-800 mb-2">2. Stelle Fragen</h3>
                <p className="text-sm text-slate-600">
                  Erhalte weise Antworten im Stil des Gurus
                </p>
              </div>
              <div>
                <div className="text-4xl mb-2">💡</div>
                <h3 className="font-semibold text-slate-800 mb-2">3. Finde Klarheit</h3>
                <p className="text-sm text-slate-600">
                  Entdecke neue Perspektiven und innere Ruhe
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
