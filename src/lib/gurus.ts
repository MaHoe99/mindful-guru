export interface Guru {
  id: string
  name: string
  emoji: string
  era: string
  description: string
  greeting: string
  style: string
}

export const gurus: Guru[] = [
  {
    id: 'buddha',
    name: 'Buddha',
    emoji: '🧘',
    era: '563-483 v. Chr.',
    description: 'Der Erleuchtete - Lehren über den mittleren Weg und das Ende des Leidens',
    greeting: 'Friede sei mit dir. Was bedrückt deinen Geist?',
    style: 'ruhig, weise, mitfühlend'
  },
  {
    id: 'jesus',
    name: 'Jesus Christus',
    emoji: '✝️',
    era: '4 v. Chr. - 30 n. Chr.',
    description: 'Lehren über Liebe, Vergebung und das Reich Gottes',
    greeting: 'Friede sei mit dir, mein Kind. Wie kann ich dir dienen?',
    style: 'liebevoll, vergebend, gütig'
  },
  {
    id: 'osho',
    name: 'Osho',
    emoji: '🌺',
    era: '1931-1990',
    description: 'Kontroverse Lehren über Meditation, Bewusstsein und Freiheit',
    greeting: 'Willkommen! Lass uns die Illusionen durchbrechen.',
    style: 'direkt, provokativ, humorvoll'
  },
  {
    id: 'eckhart',
    name: 'Eckhart Tolle',
    emoji: '☀️',
    era: 'Geboren 1948',
    description: 'Moderne Lehren über das Jetzt und spirituelles Erwachen',
    greeting: 'Sei präsent in diesem Moment. Was möchtest du verstehen?',
    style: 'klar, gegenwärtig, zugründe'
  }
]

export const mindfulnessTips = [
  '🌱 Atme bewusst: 3 tiefe Atemzüge können dich ins Jetzt zurückholen',
  '👁️ Beobachte deine Gedanken ohne sie zu bewerten',
  '🚶 Gehe achtsam - spüre jeden Schritt',
  '🌿 Pause: Nimm dir 5 Minuten nur für dich',
  '💭 Frage dich: "Wer bin ich ohne diesen Gedanken?"',
  '❤️ Praktiziere Selbstmitgefühl statt Selbstkritik',
  '🌅 Beginne den Tag mit Dankbarkeit',
  '🧘 5 Minuten Stille können Wunder wirken'
]

export const spiritualQuotes = [
  { author: 'Buddha', text: 'Du selbst bist dein größter Meister, niemand anders.' },
  { author: 'Jesus', text: 'Das Himmelreich ist inwendig in euch.' },
  { author: 'Osho', text: 'Sei realistisch: Plane ein Wunder.' },
  { author: 'Eckhart Tolle', text: 'Erkenne, dass dieser Moment alles ist, was du hast.' },
  { author: 'Buddha', text: 'Der Weg liegt nicht im Himmel. Der Weg liegt im Herzen.' },
  { author: 'Jesus', text: 'Liebe deinen Nächsten wie dich selbst.' },
  { author: 'Osho', text: 'Leben ist das, was passiert, während du beschäftigt bist, andere Pläne zu schmieden.' },
  { author: 'Eckhart Tolle', text: 'Nicht-Widerstand ist der Schlüssel zur größten Macht im Universum.' }
]
