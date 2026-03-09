// Zentrale Types - können später mit Expo geteilt werden

export interface Guru {
  id: string
  name: string
  emoji: string
  era: string
  description: string
  greeting: string
  style: string
  systemPrompt?: string
}

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  guruId?: string
}

export interface ChatSession {
  id: string
  guruId: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export interface Reminder {
  id: string
  title: string
  message: string
  quote?: Quote
  scheduledFor: Date
  completed: boolean
  type: 'quote' | 'tip' | 'custom'
}

export interface Quote {
  author: string
  text: string
  category?: 'mindfulness' | 'wisdom' | 'compassion' | 'presence'
}

export interface MindfulnessTip {
  id: string
  title: string
  description: string
  category: 'breathing' | 'meditation' | 'awareness' | 'movement'
  duration?: number // in minutes
  emoji: string
}

export interface UserPreferences {
  favoriteGuru?: string
  reminderFrequency: 'low' | 'medium' | 'high' // 1x, 3x, 5x pro Tag
  reminderTimes?: string[] // ['09:00', '14:00', '20:00']
  notificationsEnabled: boolean
}
