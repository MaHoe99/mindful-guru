// Notification Utilities - Browser Notifications
// In Expo wird das durch Expo Notifications ersetzt

import type { Quote } from '@/types'

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    console.log('Browser unterstützt keine Benachrichtigungen')
    return false
  }

  if (Notification.permission === 'granted') {
    return true
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }

  return false
}

export function showNotification(title: string, body: string, icon?: string) {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: icon || '/icon-192.png',
      badge: '/badge-72.png',
      tag: 'mindful-guru',
      requireInteraction: false
    })
  }
}

export function scheduleReminder(quote: Quote, delay: number = 3600000) { // 1 Stunde default
  setTimeout(() => {
    showNotification(
      `💎 ${quote.author}`,
      quote.text
    )
  }, delay)
}

// Für später: Service Worker für richtige scheduled notifications
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registriert:', registration)
      })
      .catch(error => {
        console.error('Service Worker Registrierung fehlgeschlagen:', error)
      })
  }
}
