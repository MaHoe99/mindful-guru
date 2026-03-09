import GuruChat from '@/components/GuruChat'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            🧘 Mindful Guru
          </h1>
          <p className="text-xl text-slate-600">
            Finde innere Ruhe durch Gespräche mit spirituellen Lehrern
          </p>
        </header>
        
        <GuruChat />
      </div>
    </main>
  )
}
