---
title: "De zero-day a zero-hour"
date: 2026-07-18
translations:
  - lang: en
    url: /notes/zero-hour/
  - lang: ru
    url: /notes/zero-hour/ru/
  - lang: de
    url: /notes/zero-hour/de/
  - lang: fr
    url: /notes/zero-hour/fr/
---

![Ilustração para a nota «De zero-day a zero-hour»](/images/notes/zero-hour.png)

Lembro-me de quando os exploits demoravam semanas, por vezes meses,
a aparecer depois de uma vulnerabilidade ser divulgada. Um patch
saía, o diff ficava à vista de todos — e o mundo ainda tinha um
período de graça. Discutia-se prazos de responsible disclosure
medidos em dias.

O bug do core do WordPress deste fim de semana, wp2shell,
[CVE-2026-63030](https://nvd.nist.gov/vuln/detail/CVE-2026-63030) encadeado com
[CVE-2026-60137](https://nvd.nist.gov/vuln/detail/CVE-2026-60137), é um bom exemplo.
Uma RCE (execução remota de código) não num plugin abandonado, mas
no próprio core — o software que faz correr uma fatia enorme da web.
Poucas horas após o advisory, investigadores já alimentavam o
problema a modelos frontier. Um reportou uma proof of concept
totalmente funcional em menos de uma hora.

Os modelos de IA frontier facilitam transformar vulnerabilidades
divulgadas em exploits que funcionam. Encontrar o bug ainda exige
talento. Transformar um patch público numa PoC funcional exigia
antes o mesmo tipo de talento: reverse engineering, montar a
cadeia, afinar o payload. O zero-day está a tornar-se zero-hour:
o prazo entre divulgação e exploração comprime-se de semanas para
horas.

As janelas de patching já tinham encolhido muito. Já lá estamos.
