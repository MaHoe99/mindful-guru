'use client'

import { useState } from 'react'
import { gurus } from '@/lib/gurus'
import { MessageCircle, Loader2, RotateCcw } from 'lucide-react'
import { useChat } from '@/hooks/useChat'
import type { Guru } from '@/types'

export default function GuruChat() {
  const [selectedGuru, setSelectedGuru] = useState<Guru | null>(null)
  const [input, setInput] = useState('')
  
  const { messages, isLoading, sendMessage, clearMessages } = useChat(
    selectedGuru || gurus[0]
  )

  const handleGuruSelect = (guru: Guru) => {
    setSelectedGuru(guru)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const message = input
    setInput('')
    await sendMessage(message)
  }

  const handleReset = () => {
    clearMessages()
    setInput('')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!selectedGuru ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gurus.map((guru) => (
            <button
              key={guru.id}
              onClick={() => handleGuruSelect(guru)}
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
                <span className="text-5xl">{selectedGuru.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedGuru.name}</h2>
                  <p className="text-green-100">{selectedGuru.era}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="p-2 hover:bg-green-600 rounded-lg transition-colors"
                  title="Gespräch zurücksetzen"
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={() => setSelectedGuru(null)}
                  className="px-4 py-2 hover:bg-green-600 rounded-lg transition-colors"
                >
                  Zurück
                </button>
              </div>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 rounded-2xl flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-slate-600" />
                  <span className="text-slate-600">Denkt nach...</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Stelle deine Frage..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <MessageCircle size={20} />
                )}
                Senden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
