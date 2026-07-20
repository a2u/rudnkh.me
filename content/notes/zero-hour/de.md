---
title: "Von Zero-Day zu Zero-Hour"
date: 2026-07-18
translations:
  - lang: en
    url: /notes/zero-hour/
  - lang: ru
    url: /notes/zero-hour/ru/
  - lang: pt
    url: /notes/zero-hour/pt/
  - lang: fr
    url: /notes/zero-hour/fr/
---

![Illustration zum Beitrag „Von Zero-Day zu Zero-Hour“](/images/notes/zero-hour.png)

Ich erinnere mich an Zeiten, in denen Exploits erst Wochen,
manchmal Monate nach der Offenlegung einer Schwachstelle
auftauchten. Ein Patch landete, der Diff lag öffentlich einsehbar
da — und die Welt hatte trotzdem noch eine Gnadenfrist. Man stritt
über Responsible-Disclosure-Fristen, gemessen in Tagen.

Der WordPress-Core-Bug dieses Wochenendes, wp2shell,
[CVE-2026-63030](https://nvd.nist.gov/vuln/detail/CVE-2026-63030) in Kombination mit
[CVE-2026-60137](https://nvd.nist.gov/vuln/detail/CVE-2026-60137), ist ein gutes Beispiel.
Eine RCE (Remote Code Execution) nicht in einem vernachlässigten
Plugin, sondern im Core selbst — der Software, auf der ein großer
Teil des Webs läuft. Innerhalb weniger Stunden nach dem Advisory
fütterten Forschende das Problem bereits an Frontier-Modelle. Einer
meldete einen voll funktionierenden Proof of Concept in weniger als
einer Stunde.

Frontier-KI-Modelle machen es leichter, offengelegte Schwachstellen
in funktionierende Exploits zu verwandeln. Den Bug zu finden, verlangt
noch immer Können. Aus einem öffentlichen Patch einen funktionierenden
PoC zu bauen, verlangte früher dasselbe: Reverse Engineering, die
Kette zusammenfügen, die Payload feinschleifen. Aus dem Zero-Day wird
ein Zero-Hour: die Zeitspanne von Offenlegung bis Ausnutzung schrumpft
von Wochen auf Stunden.

Patch-Fenster sind schon länger deutlich kürzer geworden. Wir sind
bereits dort.
