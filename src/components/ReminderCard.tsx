'use client'

import type { Reminder } from '@/types'
import { Clock, Bell } from 'lucide-react'

interface ReminderCardProps {
  reminder: Reminder
}

export default function ReminderCard({ reminder }: ReminderCardProps) {
  const timeString = reminder.scheduledFor.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-100 rounded-lg">
          <Bell size={24} className="text-green-600" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            {reminder.title}
          </h3>
          
          <p className="text-slate-600 mb-3">
            {reminder.message}
          </p>
          
          {reminder.quote && (
            <div className="bg-slate-50 rounded-lg p-3 mb-3 border-l-4 border-green-500">
              <p className="text-slate-700 italic mb-1">
                "{reminder.quote.text}"
              </p>
              <p className="text-sm text-slate-500">
                — {reminder.quote.author}
              </p>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock size={16} />
            <span>{timeString}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
