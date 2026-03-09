// LocalStorage Wrapper - für Web
// In Expo wird das später durch AsyncStorage ersetzt

import type { ChatSession, Reminder, UserPreferences } from '@/types'

const STORAGE_KEYS = {
  CHAT_SESSIONS: 'mindful-guru:chat-sessions',
  REMINDERS: 'mindful-guru:reminders',
  PREFERENCES: 'mindful-guru:preferences'
}

export const storage = {
  // Chat Sessions
  getChatSessions: (): ChatSession[] => {
    if (typeof window === 'undefined') return []
    const data = localStorage.getItem(STORAGE_KEYS.CHAT_SESSIONS)
    return data ? JSON.parse(data) : []
  },
  
  saveChatSession: (session: ChatSession) => {
    if (typeof window === 'undefined') return
    const sessions = storage.getChatSessions()
    const index = sessions.findIndex(s => s.id === session.id)
    if (index >= 0) {
      sessions[index] = session
    } else {
      sessions.push(session)
    }
    localStorage.setItem(STORAGE_KEYS.CHAT_SESSIONS, JSON.stringify(sessions))
  },

  // Reminders
  getReminders: (): Reminder[] => {
    if (typeof window === 'undefined') return []
    const data = localStorage.getItem(STORAGE_KEYS.REMINDERS)
    return data ? JSON.parse(data) : []
  },
  
  saveReminder: (reminder: Reminder) => {
    if (typeof window === 'undefined') return
    const reminders = storage.getReminders()
    reminders.push(reminder)
    localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders))
  },

  // User Preferences
  getPreferences: (): UserPreferences => {
    if (typeof window === 'undefined') {
      return {
        reminderFrequency: 'medium',
        notificationsEnabled: false
      }
    }
    const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES)
    return data ? JSON.parse(data) : {
      reminderFrequency: 'medium',
      notificationsEnabled: false
    }
  },
  
  savePreferences: (prefs: UserPreferences) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs))
  }
}
