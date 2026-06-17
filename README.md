# Web Performance Demo

Diese Demo-Webseite wurde für einen Workshop zu Web Performance und den Core Web Vitals erstellt.  
Die Seite dient dazu, Performance mit verschiedenen Tools zu messen, Messergebnisse einzuordnen und anschließend gezielte Optimierungen vorzunehmen.

## Ziel der Übung

In der Übung soll eine Beispielseite analysiert und verbessert werden. Dabei geht es darum, typische Performance-Auffälligkeiten zu erkennen, passenden Metriken zuzuordnen und die Auswirkungen von Optimierungen durch erneutes Messen zu überprüfen.

### Aufgabe im Workshop
- Seite lokal starten
- Performance mit Lighthouse/Chrome DevTools messen
- Auffällige Werte und Hinweise notieren
- Beobachtete Probleme identifizieren
- Probleme den passenden Metriken zuordnen (Das machen wir gemeinsam)

Abhängig von der verhandenen Zeit werden wir gemeinsam oder einzelnd anschließend:
- Den Code gezielt optimieren
- Erneut messen und Ergebnisse vergleichen

## Technische Voraussetzungen

Vor dem Start sollten folgende Dinge installiert sein:

- Node.js
- npm
- Google Chrome oder ein Chromium-basierter Browser
- optional: Lighthouse CLI

**Installation prüfen:**

```bash
node -v
npm -v
```

Anschließend das Projekt klonen, öffnen und ins Vite-Projekt wechseln:
```bash
cd performance-blog-demo
```

Abhängigkeiten installieren und den Entwicklungsserver starten:
```bash
npm install
npm run dev
```