'use client'

import { useState } from 'react'
import { gurus } from '@/lib/gurus'
import { MessageCircle, Sparkles } from 'lucide-react'

export default function GuruChat() {
  const [selectedGuru, setSelectedGuru] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{role: 'user' | 'guru', text: string}>>([])
  const [input, setInput] = useState('')

  const handleGuruSelect = (guruId: string) => {
    setSelectedGuru(guruId)
    setMessages([
      {
        role: 'guru',
        text: gurus.find(g => g.id === guruId)?.greeting || 'Willkommen'
      }
    ])
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { role: 'user', text: input }])
    setInput('')
    
    // TODO: Hier später AI-Integration einbauen
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'guru',
        text: 'Dies ist eine Platzhalter-Antwort. Die AI-Integration folgt in Kürze.'
      }])
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!selectedGuru ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gurus.map((guru) => (
            <button
              key={guru.id}
              onClick={() => handleGuruSelect(guru.id)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-6xl mb-4">{guru.emoji}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{guru.name}</h3>
              <p className="text-slate-600 mb-4">{guru.era}</p>
              <p className="text-sm text-slate-500">{guru.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">
                  {gurus.find(g => g.id === selectedGuru)?.emoji}
                </span>
                <div>
                  <h2 className="text-2xl font-bold">
                    {gurus.find(g => g.id === selectedGuru)?.name}
                  </h2>
                  <p className="text-green-100">
                    {gurus.find(g => g.id === selectedGuru)?.era}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedGuru(null)}
                className="text-white hover:text-green-100"
              >
                Zurück
              </button>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Stelle deine Frage..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Senden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
