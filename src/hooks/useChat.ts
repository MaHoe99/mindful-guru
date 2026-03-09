'use client'

import { useState, useCallback } from 'react'
import type { Guru, Message } from '@/types'
import { api } from '@/lib/api/client'
import { storage } from '@/lib/storage/localStorage'

export function useChat(guru: Guru) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: guru.greeting,
      timestamp: new Date(),
      guruId: guru.id
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return

    // User Message hinzufügen
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
      guruId: guru.id
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      // API Call
      const response = await api.chat.sendMessage(guru, messages, content)

      // Assistant Message hinzufügen
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        guruId: guru.id
      }

      setMessages(prev => [...prev, assistantMessage])

      // Chat Session speichern
      const session = {
        id: `${guru.id}-${Date.now()}`,
        guruId: guru.id,
        messages: [...messages, userMessage, assistantMessage],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      storage.saveChatSession(session)

    } catch (error) {
      console.error('Fehler beim Senden:', error)
      // Fehler-Message anzeigen
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Entschuldigung, es gab einen Fehler. Bitte versuche es erneut.',
        timestamp: new Date(),
        guruId: guru.id
      }])
    } finally {
      setIsLoading(false)
    }
  }, [guru, messages, isLoading])

  const clearMessages = useCallback(() => {
    setMessages([{
      id: '1',
      role: 'assistant',
      content: guru.greeting,
      timestamp: new Date(),
      guruId: guru.id
    }])
  }, [guru])

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  }
}
