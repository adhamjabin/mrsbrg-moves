import krafttraining from './assets/krafttraining.jpg'
import cardio from './assets/cardio.jpg'
import betreuung from './assets/betreuung.jpg'
import insta1 from './assets/insta-1.jpg'
import insta2 from './assets/insta-2.jpg'
import insta3 from './assets/insta-3.jpg'
import insta4 from './assets/insta-4.jpg'

// Akzentfarbe der Seite. Alternativen aus dem Design: #D4FF3A, #FFC21A, #4DA3FF
export const ACCENT = '#FF5A1F'

export const INSTAGRAM_URL = 'https://www.instagram.com/mrsbrg_moves/'
export const ROUTE_URL =
  'https://www.google.com/maps/dir/?api=1&destination=M%C3%B6nchstra%C3%9Fe%2050%2C%2034431%20Marsberg'

export const offers = [
  {
    title: 'Krafttraining',
    img: krafttraining,
    alt: 'Kurzhanteln und Hantelscheibe auf dem Studioboden',
    text: 'Freihanteln und Geräte – für Muskelaufbau, Kraft und Stabilität. Egal ob Einsteiger oder erfahren.',
    short: 'Freihanteln und Geräte – für Muskelaufbau, Kraft und Stabilität.',
  },
  {
    title: 'Cardio',
    img: cardio,
    alt: 'Battle Ropes und Kettlebell',
    text: 'Ausdauer aufbauen, warm werden oder nach einem langen Tag einfach abschalten.',
    short: 'Ausdauer aufbauen, warm werden oder einfach abschalten.',
  },
  {
    title: 'Betreuung',
    img: betreuung,
    alt: 'Trainingsplan auf Klemmbrett, Stoppuhr und Kurzhantel',
    text: 'Einweisung und Tipps, wenn jemand vor Ort ist – damit du sicher und mit Plan startest.',
    short: 'Einweisung und Tipps, wenn jemand vor Ort ist.',
  },
]

export const instagramPosts = [
  { img: insta1, alt: 'Gestapelte Hantelscheiben' },
  { img: insta2, alt: 'Kettlebells in Schwarz und Orange' },
  { img: insta3, alt: 'Kurzhantel-Ablage' },
  { img: insta4, alt: 'Langhantel mit oranger Hantelscheibe' },
]

export const faqsDesktop = [
  { q: 'Was kostet das Startpaket?', a: 'Das Startpaket kostet einmalig 49 € bei Vertragsbeginn und gilt für beide Laufzeiten.' },
  { q: 'Welche Laufzeiten gibt es?', a: '12 Monate für 29,90 € pro Monat oder 3 Monate für 34,90 € pro Monat – ideal zum Ausprobieren.' },
  { q: 'Ist immer jemand zur Betreuung da?', a: 'Einweisung und Tipps gibt es, wenn jemand vor Ort ist. Die Betreuungszeiten findest du unten – Änderungen posten wir auf Instagram.' },
  { q: 'Wie lange gelten die Gründer-Tarife?', a: 'Die Gründer-Tarife gibt es nur für kurze Zeit zur Eröffnung. [ENDDATUM EINTRAGEN]' },
  { q: 'Wie werde ich Mitglied?', a: 'Komm einfach in der Mönchstraße 50 vorbei oder schreib uns auf Instagram an @mrsbrg_moves.' },
]

export const faqsMobile = [
  { q: 'Was kostet das Startpaket?', a: 'Einmalig 49 € bei Vertragsbeginn – gilt für beide Laufzeiten.' },
  { q: 'Welche Laufzeiten gibt es?', a: '12 Monate für 29,90 € pro Monat oder 3 Monate für 34,90 € pro Monat.' },
  { q: 'Ist immer jemand zur Betreuung da?', a: 'Einweisung und Tipps gibt es, wenn jemand vor Ort ist. Die Zeiten stehen unten – Änderungen auf Instagram.' },
  { q: 'Wie lange gelten die Gründer-Tarife?', a: 'Nur für kurze Zeit zur Eröffnung. [ENDDATUM EINTRAGEN]' },
  { q: 'Wie werde ich Mitglied?', a: 'Komm in der Mönchstraße 50 vorbei oder schreib uns auf Instagram an @mrsbrg_moves.' },
]

export const hoursRange = '03.09. – 11.09.'

export const hours = [
  { day: 'Donnerstag', short: 'Do', date: '03.09.', time: '9:00 – 13:00 · 18:00 – 20:00', timeShort: '9–13 · 18–20 Uhr' },
  { day: 'Freitag', short: 'Fr', date: '04.09.', time: '9:00 – 14:00', timeShort: '9–14 Uhr' },
  { day: 'Montag', short: 'Mo', date: '07.09.', time: '9:00 – 20:00', timeShort: '9–20 Uhr' },
  { day: 'Dienstag', short: 'Di', date: '08.09.', time: '9:00 – 13:00', timeShort: '9–13 Uhr' },
  { day: 'Mittwoch', short: 'Mi', date: '09.09.', time: '9:00 – 20:00', timeShort: '9–20 Uhr' },
  { day: 'Donnerstag', short: 'Do', date: '10.09.', time: '9:00 – 20:00', timeShort: '9–20 Uhr' },
  { day: 'Freitag', short: 'Fr', date: '11.09.', time: 'Keine Betreuung', timeShort: 'Keine Betreuung', closed: true },
]

export function todayString() {
  const now = new Date()
  return String(now.getDate()).padStart(2, '0') + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.'
}
