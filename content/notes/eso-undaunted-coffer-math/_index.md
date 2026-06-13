---
title: "ESO Undaunted Coffer Math"
date: 2026-06-13
layout: single
math: true
---

![A pencil illustration of eight small coffers lined up beneath one larger ornate coffer, drawn like specimens on a naturalist's plate.](/images/notes/eso-undaunted-coffer-math.png)

<style>
body.notes-single article hr.tldr-sep { max-width: 100%; margin: 2em 0; opacity: 0.3; }
body.notes-single article hr.tldr-sep + p { color: var(--fg); font-size: 1em; text-indent: 1.6em; margin-top: 0; }
</style>

**TL;DR.** I'm writing this on a weekend, mostly for fun — to play
with the probability math. You probably don't need any of it. If
you play ESO and just want the answer for your own collection, the
[ESO coffer calculator](/tools/eso-coffer-calculator/) does the
work for you.

<hr class="tldr-sep">

I love RPGs, especially the ones with real math behind the
mechanics. This post is about a small probability problem that came
up in *The Elder Scrolls Online* (ESO).

Quick context. ESO has a faction called the Undaunted with three
vendors known as **Pledge Masters**: Glirion the Redbeard, Maj
al-Ragath, and Urgarlag Chief-bane. You earn **keys** by completing
daily dungeon quests and spend those keys at the Pledge Masters on
loot boxes ("coffers") that drop shoulder armor pieces. Different
vendors sell different sets.

Each Pledge Master offers two kinds of coffer:

- **Mystery coffer** — costs 1 key, rolls one random shoulder from
  any of the vendor's sets.
- **Curated coffer** — costs 8 keys, rolls one random shoulder from
  a single set you choose.

Neither has duplicate protection: you can roll a piece you already
own.

The question: per 8 keys spent, which option gives me more new
pieces on average?

**Setup.** A Pledge Master sells $k$ sets. Set $i$ contains $t_i$
shoulder pieces, of which $u_i$ are still unknown to you. Define:

$$N = \sum_{i=1}^{k} t_i \qquad U = \sum_{i=1}^{k} u_i$$

so $N$ is the total pool and $U$ is everything you still need.

**Mystery.** A single mystery coffer rolls uniformly over all $N$
pieces, so:

$$\Pr(\text{new from one mystery}) = \frac{U}{N}$$

Eight mystery coffers cost the same as one curated. For the
expected number of *distinct* new pieces from 8 pulls we use
linearity of expectation: each of the $U$ unknown pieces is rolled
at least once with probability $1 - ((N-1)/N)^8$, so

$$E_{\text{mystery}} = U \cdot \left[1 - \left(\frac{N-1}{N}\right)^8\right]$$

(The linear shortcut $8U/N$ overcounts when the same unknown is
rolled twice in 8 pulls — the formula above is the strict version.)

**Curated.** A curated coffer of set $i$ rolls uniformly over the
$t_i$ pieces in that set. Of those, $u_i$ are still unknown. So:

$$E_{\text{curated}}(i) = \frac{u_i}{t_i}$$

You pick the set that maximizes this:

$$E_{\text{curated}}^{*} = \max_{i} \frac{u_i}{t_i}$$

**The rule.** Mystery wins when:

$$U \cdot \left[1 - \left(\frac{N-1}{N}\right)^8\right] \; > \; \max_{i} \frac{u_i}{t_i}$$

**A useful observation.** Per-key analysis is the cleanest way to
see why mystery is so dominant for the standard ESO structure.

- **Mystery, per key:** one pull, probability of a new piece $U/N$.
- **Curated of set $i$, per key:** $1/8$ of a pull, probability of a
  new piece per key is therefore $u_i / (8 t_i)$.

Mystery wins per key when:

$$\frac{U}{N} > \frac{u_i}{8 t_i} \;\;\Longleftrightarrow\;\; 8 \cdot t_i \cdot U > N \cdot u_i$$

For the standard Pledge Master structure ($k = 6$ sets, $t_i = 6$
each, $N = 36$), this simplifies to $8 U > 6 \, u_i$, i.e.
$U > 0.75 \, u_i$. Since $u_i \le U$ always, this holds whenever
$U > 0$. In other words, **for a standard 6×6 vendor, mystery
coffers are mathematically the better buy as long as you still need
anything at all** — even when only one piece is left in the entire
36-item pool.

The threshold flips only when the vendor has more than 8 sets — then
the mystery pool is diluted enough that targeting via curated
becomes worthwhile.

**Glirion the Redbeard, worked example.** Glirion sells 6 curated
coffers, 6 pieces each, so $N = 36$. My current state across the
six sets:

| Set | $t_i$ | $u_i$ | $u_i / t_i$ |
| --- | --- | --- | --- |
| City of Ash | 6 | 2 | 33.3% |
| Crypt of Hearts | 6 | 4 | 66.7% |
| Frigid Crucible | 6 | 5 | **83.3%** |
| Sands and Madness | 6 | 4 | 66.7% |
| Serpents and Sailors | 6 | 4 | 66.7% |
| Winds and Webs | 6 | 2 | 33.3% |

$$U = 21, \quad E_{\text{mystery}} = 21 \cdot \left[1 - (35/36)^8\right] \approx 4.24$$

Best curated bet is Frigid Crucible at $5/6 \approx 0.833$. So 8
keys spent on mystery coffers yields about $4.24$ new pieces in
expectation; 8 keys spent on the best curated yields about $0.83$.
Mystery wins by a factor of ~$5.1$.

Edge case sanity check — when only $U = 1$ piece is left anywhere on
the vendor:

$$E_{\text{mystery}} = 1 \cdot \left[1 - (35/36)^8\right] \approx 0.202$$

vs. best curated (the set containing that one piece, $1/6 \approx
0.167$). Mystery still wins by ~3.5 percentage points.

**Urgarlag Chief-bane, the exception.** As of June 2026 Urgarlag's
lineup is **17 sets** at 6 pieces each, so $N = 102$. With $k = 17
\gt 8$, the per-key rule no longer holds automatically. Plugging
into $U \gt (k/8) \cdot u_{\max}$:

$$U > \frac{17}{8} \cdot u_{\max} \approx 2.125 \cdot u_{\max}$$

Read that as: mystery is the better buy *only* while your unknowns
are spread thinly across many sets. The moment most of what you're
missing concentrates in a single set — i.e. $u_{\max}$ creeps close
to $U$ — switch to a curated of that set.

Concrete example: if I still need 10 pieces total and 7 of them sit
inside one set, $u_{\max} = 7$ and the threshold demands $U > 14.875$.
With $U = 10$, mystery loses; the curated of that one rich set is
the better play. If those same 10 unknowns are spread one-per-set
across 10 different sets, $u_{\max} = 1$, the threshold drops to
$U > 2.125$, and mystery comfortably wins.

**How many keys to fully clear a vendor?** This is the classic
[coupon collector's problem](https://en.wikipedia.org/wiki/Coupon_collector%27s_problem).
Starting from zero pieces, drawing one per mystery coffer, the
expected number of pulls (= keys) to collect all $N$ pieces is:

$$E[\text{keys}] = N \cdot H_N \approx N \cdot (\ln N + \gamma)$$

where $H_N = \sum_{k=1}^{N} 1/k$ is the $N$-th harmonic number and
$\gamma \approx 0.5772$ is the Euler–Mascheroni constant. Plugging in:

| Vendor | $N$ | Expected keys |
| --- | --- | --- |
| Glirion the Redbeard | 36 | ≈ 150 |
| Maj al-Ragath | 36 | ≈ 150 |
| Urgarlag Chief-bane | 102 | ≈ 531 |

These numbers assume pure mystery-only play. For Glirion and Maj
al-Ragath that's also the optimal strategy — the per-key rule above
proves mystery dominates everywhere. For Urgarlag the optimum cuts
in some curated purchases toward the end (once one set carries most
of the remaining unknowns), so the real total comes in somewhat
below 531; coupon collector still gives the right order of magnitude.

**Takeaways.**

- **Mystery wins almost always.** For the two standard 6-set
  vendors (Glirion the Redbeard, Maj al-Ragath), it's the
  mathematically better buy as long as you still need anything at
  all — even down to one missing piece out of 36.
- **Urgarlag Chief-bane is the exception.** With 17 sets, mystery
  still wins when your unknowns are spread thinly, but the moment
  most of what you need concentrates in a single set, the curated
  of that set beats mystery.
- **Curated feels targeted, but it isn't a guarantee.** It still
  rolls randomly inside the chosen set (1/6 per pull). One curated
  for 8 keys rarely beats 8 mystery pulls.
- **Clearing a vendor from scratch costs ~150 keys** for Glirion
  or Maj al-Ragath, and **~531 keys** for Urgarlag — by the
  coupon-collector formula above.

I made a calculator that does the table and rule above for
arbitrary vendor configurations:
[**ESO coffer calculator →**](/tools/eso-coffer-calculator/)
