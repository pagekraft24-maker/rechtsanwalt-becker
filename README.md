# rechtsanwalt-becker.eu

Statische Website für Rechtsanwalt Stephan Becker (Berlin), gehostet auf Vercel.

- Kein Build-Schritt: Vercel liefert die Dateien direkt aus (`cleanUrls`, Weiterleitungen und Security-Header in `vercel.json`).
- Schriften und Icons sind selbst gehostet (`/assets/fonts`), keine externen Anfragen außer dem Kontaktformular (Readdy-Formular-Endpunkt).
- SEO/KI: `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, JSON-LD (`Attorney`) auf allen Seiten.
