'use client'

import { mindfulnessTips } from '@/lib/gurus'
import { Sparkles } from 'lucide-react'

export default function MindfulnessTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mindfulnessTips.map((tip, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
              <Sparkles size={24} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed">
                {tip}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
