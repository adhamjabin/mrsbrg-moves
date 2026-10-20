# MRSBRG moves – Website

Vite + React-Umsetzung des Designs (Desktop + Mobil) für das Fitnessstudio MRSBRG moves in Marsberg.

## Entwicklung

```bash
npm install
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Aufbau

- `src/App.jsx` – wählt je nach Bildschirmbreite (≤ 640 px) das Mobil- oder Desktop-Layout
- `src/components/desktop/` – Sektionen des Desktop-Layouts
- `src/components/mobile/MobileSite.jsx` – Mobil-Layout (Menü, Tarif-Umschalter, Wisch-Karten, Sticky-Leiste)
- `src/components/` – gemeinsam genutzte Bausteine (FAQ, Betreuungszeiten, Lauftext, Theme-Umschalter, Icons)
- `src/data.js` – Inhalte: Akzentfarbe, Angebote, FAQ, Betreuungszeiten, Links
- `src/styles/` – Theme-Tokens (hell/dunkel/System) und Layout-Styles
- `src/assets/` – Bilder

Offene Platzhalter aus dem Design: `[ENDDATUM EINTRAGEN]` in den FAQ, die Google-Maps-Karte sowie die Links zu Impressum und Datenschutz.
