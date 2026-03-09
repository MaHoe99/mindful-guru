# 🧘 Mindful Guru

Eine moderne Achtsamkeits-App zum Führen von Gesprächen mit spirituellen Lehrern.

## ✨ Features

### 👥 Spirituelle Gespräche
Unterhalte dich mit:
- **Buddha** - Der Erleuchtete (563-483 v. Chr.)
- **Jesus Christus** - Lehren über Liebe und Vergebung (4 v. Chr. - 30 n. Chr.)
- **Osho** - Kontroverse Weisheiten (1931-1990)
- **Eckhart Tolle** - Moderne Achtsamkeit (geb. 1948)

### 🤖 AI-Integration
- Echte Gespräche mit OpenAI GPT-4
- Jeder Guru hat seinen eigenen Persönlichkeits-Stil
- Intelligente, kontextbezogene Antworten
- Fallback auf Platzhalter-Antworten ohne API-Key

### 🔔 Smart Reminders
- Browser-Benachrichtigungen
- Spirituelle Zitate zur richtigen Zeit
- Anpassbare Reminder-Frequenz
- Lokale Speicherung

### ✨ Achtsamkeits-Tipps
- 8+ praktische Übungen
- Kategorien: Atmung, Meditation, Bewegung, Bewusstheit
- Alltagstauglich und leicht umsetzbar

### 💾 Monorepo-Ready
- Saubere Code-Struktur
- Geteilte Types und Business-Logik
- Vorbereitet für Expo/React Native
- Einfache Erweiterung zur nativen App

## 🚀 Quick Start

```bash
# Repository klonen
git clone https://github.com/MaHoe99/mindful-guru.git
cd mindful-guru

# Dependencies installieren
npm install

# Environment Variables (optional)
cp .env.example .env.local
# Füge deinen OpenAI API Key hinzu (optional)

# Development Server starten
npm run dev
```

Die App ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## 🔑 API Keys (Optional)

### OpenAI Integration

Für echte AI-Gespräche:

1. Erstelle einen Account bei [OpenAI](https://platform.openai.com)
2. Generiere einen API Key
3. Füge ihn zu `.env.local` hinzu:

```bash
NEXT_PUBLIC_OPENAI_API_KEY=sk-...
```

**Ohne API Key:** Die App funktioniert mit vordefinierten Platzhalter-Antworten.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI**: OpenAI GPT-4
- **Storage**: LocalStorage (Web) / AsyncStorage (Native - später)
- **Deployment**: Vercel

## 📝 Projektstruktur

```
mindful-guru/
├── src/
│   ├── app/              # Next.js Pages (App Router)
│   │   ├── page.tsx      # Hauptseite (Guru-Chat)
│   │   ├── tips/         # Achtsamkeits-Tipps
│   │   └── reminders/    # Reminders-Seite
│   ├── components/       # React Komponenten
│   │   ├── GuruChat.tsx
│   │   ├── Navigation.tsx
│   │   ├── ReminderCard.tsx
│   │   └── MindfulnessTips.tsx
│   ├── hooks/            # Custom React Hooks
│   │   ├── useChat.ts
│   │   └── useReminders.ts
│   ├── lib/              # Business-Logik (teilbar mit Expo)
│   │   ├── api/          # API Clients
│   │   ├── storage/      # Storage Wrapper
│   │   ├── utils/        # Utilities
│   │   └── gurus.ts      # Guru-Daten
│   └── types/            # TypeScript Types (teilbar)
├── public/            # Statische Assets
└── package.json
```

## 📱 Auf dem Handy testen

### Option 1: Vercel Deploy (Empfohlen)
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Lokales Netzwerk
```bash
npm run dev -- -H 0.0.0.0
# Dann auf Handy: http://DEINE-IP:3000
```

## 📅 Roadmap

### Phase 1: Web App (Aktuell) ✅
- [x] Projekt-Setup
- [x] Guru-Chat Interface
- [x] AI-Integration (OpenAI)
- [x] Reminder-System (Browser)
- [x] Achtsamkeits-Tipps
- [x] Navigation
- [x] Monorepo-ready Struktur

### Phase 2: PWA Features
- [ ] Service Worker
- [ ] Offline-Support
- [ ] Installierbar auf Homescreen
- [ ] Push-Benachrichtigungen (Web)

### Phase 3: Native App (Expo)
- [ ] Monorepo einrichten
- [ ] Expo-Projekt erstellen
- [ ] Code-Sharing implementieren
- [ ] Native Push-Notifications
- [ ] Wearable-Integration
- [ ] App Store Release

### Phase 4: Backend & Advanced
- [ ] Supabase/Firebase Backend
- [ ] User Authentication
- [ ] Cloud-Sync
- [ ] Erweiterte Analytics
- [ ] Premium Features

## 🤝 Contribution

Beiträge sind willkommen! Bitte:
1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 Lizenz

MIT License - siehe [LICENSE](LICENSE)

## 👤 Autor

Markus Höcherl ([@MaHoe99](https://github.com/MaHoe99))

## 💙 Danke

Dank an alle spirituellen Lehrer, die uns den Weg zur Achtsamkeit gezeigt haben.

---

**Made with ❤️ and 🧘 for mindfulness**
