---
title: "From zero-day to zero-hour"
date: 2026-07-18
layout: single
---

![Illustration for "From zero-day to zero-hour"](/images/notes/zero-hour.png)

I remember when it took weeks, sometimes months, for exploits to
appear after a vulnerability was disclosed. A patch would land, the
diff would sit in public view, and the world still had a grace period.
People argued about responsible disclosure timelines measured in days.

This weekend's WordPress core bug, wp2shell, [CVE-2026-63030](https://nvd.nist.gov/vuln/detail/CVE-2026-63030) chained
with [CVE-2026-60137](https://nvd.nist.gov/vuln/detail/CVE-2026-60137), is a good example. An RCE (remote code
execution) in the software that runs a huge share of the web,
not a neglected plugin, the core itself. Within hours of the advisory,
researchers were feeding the issue to frontier models. One reported a
full working proof of concept in less than an hour.

Frontier AI models are making it easier to turn disclosed vulnerabilities
into working exploits. Finding the bug still takes talent. Turning a public
patch into a working PoC used to take the same kind of talent: reverse
engineering, framing the chain, polishing a payload. The zero-day is turning into a zero-hour: the
timeline from disclosure to exploitation is compressing from weeks
into hours.

Patch windows already got much shorter. We're already there.
