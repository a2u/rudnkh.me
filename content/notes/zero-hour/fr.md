---
title: "Du zero-day au zero-hour"
date: 2026-07-18
translations:
  - lang: en
    url: /notes/zero-hour/
  - lang: ru
    url: /notes/zero-hour/ru/
  - lang: pt
    url: /notes/zero-hour/pt/
  - lang: de
    url: /notes/zero-hour/de/
---

![Illustration pour la note « Du zero-day au zero-hour »](/images/notes/zero-hour.png)

Je me souviens d'une époque où les exploits mettaient des semaines,
parfois des mois, à apparaître après la divulgation d'une vulnérabilité.
Un correctif sortait, le diff restait visible de tous — et le monde
disposait encore d'un délai de grâce. On se disputait sur les délais
de responsible disclosure, comptés en jours.

Le bug du cœur de WordPress de ce week-end, wp2shell,
[CVE-2026-63030](https://nvd.nist.gov/vuln/detail/CVE-2026-63030) enchaîné avec
[CVE-2026-60137](https://nvd.nist.gov/vuln/detail/CVE-2026-60137), en est un bon exemple.
Une RCE (exécution de code à distance) non pas dans un plugin
négligé, mais dans le core lui-même — le logiciel qui fait tourner
une part énorme du web. En quelques heures après l'advisory, des
chercheurs nourrissaient déjà le problème aux modèles frontier. L'un
d'eux a annoncé une preuve de concept pleinement fonctionnelle en
moins d'une heure.

Les modèles d'IA frontier facilitent la transformation des
vulnérabilités divulguées en exploits qui marchent. Trouver le bug
demande encore du talent. Transformer un correctif public en PoC
fonctionnel exigeait autrefois le même genre de talent : reverse
engineering, construction de la chaîne, polissage du payload. Le
zero-day devient zero-hour : le délai entre divulgation et exploitation
se comprime de semaines en heures.

Les fenêtres de patching se sont déjà beaucoup réduites. Nous y
sommes déjà.
