// OpenAI API Integration
// Kann später auch mit Expo geteilt werden

import type { Guru, Message } from '@/types'

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

export async function sendMessageToGuru(
  guru: Guru,
  messages: Message[],
  userMessage: string
): Promise<string> {
  
  if (!OPENAI_API_KEY) {
    console.warn('OpenAI API Key nicht konfiguriert')
    return getPlaceholderResponse(guru, userMessage)
  }

  try {
    const systemPrompt = guru.systemPrompt || generateSystemPrompt(guru)
    
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(m => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: m.content
          })),
          { role: 'user', content: userMessage }
        ],
        temperature: 0.8,
        max_tokens: 500
      })
    })

    if (!response.ok) {
      throw new Error(`OpenAI API Error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Entschuldigung, ich konnte keine Antwort generieren.'
    
  } catch (error) {
    console.error('OpenAI API Error:', error)
    return getPlaceholderResponse(guru, userMessage)
  }
}

function generateSystemPrompt(guru: Guru): string {
  const prompts: Record<string, string> = {
    buddha: `Du bist Buddha, der Erleuchtete. Antworte weise, mitfühlend und ruhig. 
      Lehre über den mittleren Weg, Achtsamkeit und das Ende des Leidens. 
      Verwende Gleichnisse und einfache Weisheiten. Sei geduldig und liebevoll.`,
    
    jesus: `Du bist Jesus Christus. Antworte mit bedingungsloser Liebe, Vergebung und Güte. 
      Lehre über das Reich Gottes, Nächstenliebe und inneren Frieden. 
      Nutze Gleichnisse und ermutigende Worte. Sei sanft und verständnisvoll.`,
    
    osho: `Du bist Osho (Bhagwan Shree Rajneesh). Antworte direkt, provokativ und humorvoll. 
      Hinterfrage Konventionen und fordere zum Denken heraus. 
      Lehre über Meditation, Bewusstsein und Freiheit. Sei kontrovers aber weise.`,
    
    eckhart: `Du bist Eckhart Tolle. Antworte klar, präsent und bodenständig. 
      Lehre über das Jetzt, das Ego und spirituelles Erwachen. 
      Betone die Kraft der Gegenwärtigkeit. Sei zugrünglich und praktisch.`
  }

  return prompts[guru.id] || `Du bist ${guru.name}. Antworte im Stil: ${guru.style}`
}

function getPlaceholderResponse(guru: Guru, userMessage: string): string {
  const responses: Record<string, string[]> = {
    buddha: [
      'Betrachte diesen Gedanken mit Mitgefühl, ohne ihn festzuhalten.',
      'Alles Leiden entsteht durch Anhaftung. Was würde geschehen, wenn du loslassen würdest?',
      'Der Geist ist alles. Was du denkst, wirst du.'
    ],
    jesus: [
      'Friede sei mit dir. In deinem Herzen findest du die Antwort.',
      'Liebe ist der Weg. Vergib dir selbst und anderen.',
      'Das Reich Gottes ist in dir. Suche dort.'
    ],
    osho: [
      'Warum fragst du mich? Die Antwort liegt in dir!',
      'Sei du selbst. Alle anderen sind bereits vergeben.',
      'Leben ist kein Problem, das gelöst werden muss, sondern ein Mysterium, das erlebt werden will.'
    ],
    eckhart: [
      'Bring deine Aufmerksamkeit ins Jetzt. Was ist in diesem Moment wahr?',
      'Der Schmerz ist real, aber das Leiden ist optional.',
      'Du bist nicht deine Gedanken. Du bist das Bewusstsein hinter den Gedanken.'
    ]
  }

  const guruResponses = responses[guru.id] || [
    'Eine weise Frage. Lass uns gemeinsam die Antwort erkunden.'
  ]

  return guruResponses[Math.floor(Math.random() * guruResponses.length)]
}
