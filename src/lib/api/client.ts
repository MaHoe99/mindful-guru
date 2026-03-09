// API Client - Wrapper für alle API Calls
// Kann später mit Expo geteilt werden

import type { Guru, Message } from '@/types'
import { sendMessageToGuru } from './openai'

export const api = {
  chat: {
    sendMessage: async (guru: Guru, messages: Message[], userMessage: string) => {
      return await sendMessageToGuru(guru, messages, userMessage)
    }
  },
  
  // Platzhalter für zukünftige Endpoints
  reminders: {
    getAll: async () => {
      // TODO: Backend API
      return []
    },
    create: async (reminder: any) => {
      // TODO: Backend API
      return reminder
    }
  },
  
  analytics: {
    trackEvent: (event: string, data?: any) => {
      // TODO: Analytics Integration
      console.log('Event:', event, data)
    }
  }
}
