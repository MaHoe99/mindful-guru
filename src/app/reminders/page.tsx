'use client'

import { useState, useEffect } from 'react'
import { useReminders } from '@/hooks/useReminders'
import ReminderCard from '@/components/ReminderCard'
import { Bell, Plus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { spiritualQuotes } from '@/lib/gurus'

export default function RemindersPage() {
  const { reminders, notificationsEnabled, enableNotifications, createReminder } = useReminders()
  const [showForm, setShowForm] = useState(false)

  const handleEnableNotifications = async () => {
    const granted = await enableNotifications()
    if (granted) {
      alert('✅ Benachrichtigungen aktiviert!')
    } else {
      alert('❌ Benachrichtigungen wurden abgelehnt')
    }
  }

  const handleQuickReminder = async () => {
    const randomQuote = spiritualQuotes[Math.floor(Math.random() * spiritualQuotes.length)]
    const scheduledFor = new Date()
    scheduledFor.setHours(scheduledFor.getHours() + 1) // In 1 Stunde

    await createReminder({
      title: '💎 Spirituelle Weisheit',
      message: randomQuote.text,
      quote: randomQuote,
      scheduledFor,
      completed: false,
      type: 'quote'
    })

    alert('✅ Reminder erstellt für ' + scheduledFor.toLocaleTimeString('de-DE'))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <ArrowLeft size={24} className="text-slate-600" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                🔔 Erinnerungen
              </h1>
              <p className="text-slate-600 mt-2">
                Spirituelle Reminders für mehr Achtsamkeit im Alltag
              </p>
            </div>
          </div>
        </div>

        {/* Notification Status */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                Benachrichtigungen
              </h2>
              <p className="text-slate-600">
                {notificationsEnabled 
                  ? '✅ Aktiviert - Du erhältst Reminders' 
                  : '❌ Deaktiviert - Aktiviere sie für Reminders'}
              </p>
            </div>
            {!notificationsEnabled && (
              <button
                onClick={handleEnableNotifications}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Bell size={20} />
                Aktivieren
              </button>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleQuickReminder}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Schneller Reminder (in 1h)
          </button>
        </div>

        {/* Reminders Liste */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Geplante Reminders
          </h2>
          
          {reminders.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-md">
              <Bell size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-600 text-lg">
                Noch keine Reminders erstellt.
              </p>
              <p className="text-slate-500 mt-2">
                Erstelle deinen ersten Reminder mit dem Button oben!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reminders.map(reminder => (
                <ReminderCard key={reminder.id} reminder={reminder} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
