'use client'

import { useState, useEffect } from 'react'
import type { Reminder } from '@/types'
import { storage } from '@/lib/storage/localStorage'
import { showNotification, requestNotificationPermission } from '@/lib/utils/notifications'

export function useReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  useEffect(() => {
    // Load reminders from storage
    const stored = storage.getReminders()
    setReminders(stored)

    // Check notification permission
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationsEnabled(Notification.permission === 'granted')
    }
  }, [])

  const createReminder = async (reminder: Omit<Reminder, 'id'>) => {
    const newReminder: Reminder = {
      ...reminder,
      id: Date.now().toString()
    }
    
    storage.saveReminder(newReminder)
    setReminders(prev => [...prev, newReminder])

    // Schedule notification wenn aktiviert
    if (notificationsEnabled && newReminder.scheduledFor > new Date()) {
      const delay = newReminder.scheduledFor.getTime() - Date.now()
      setTimeout(() => {
        showNotification(newReminder.title, newReminder.message)
      }, delay)
    }

    return newReminder
  }

  const enableNotifications = async () => {
    const granted = await requestNotificationPermission()
    setNotificationsEnabled(granted)
    return granted
  }

  return {
    reminders,
    notificationsEnabled,
    createReminder,
    enableNotifications
  }
}
