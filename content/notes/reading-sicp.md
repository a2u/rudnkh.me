---
title: "Reading SICP, slowly"
date: 2025-11-28
---

Started working through *Structure and Interpretation of Computer Programs*
over the weekend. I bounced off it twice before — once in 2015, once in
2020. This time I'm giving myself permission to go slow. Maybe a chapter a
month.

The first time I picked it up, I skimmed the prose and jumped to exercises.
Felt like a waste because the exercises only land if you've sat with the
worldview. This time: read the prose twice, do every exercise, don't skip.

The substitution model in Section 1.1 is deceptively profound. I thought I
understood function application. I didn't, not really — I understood it the
way you understand a keyboard shortcut.

```scheme
(define (square x) (* x x))
(define (sum-of-squares x y) (+ (square x) (square y)))

(sum-of-squares 3 4)
;; => (+ (square 3) (square 4))
;; => (+ (* 3 3) (* 4 4))
;; => (+ 9 16)
;; => 25
```

Reading that expansion step-by-step does something to the brain that
"functions return values" never did.

More notes as I go.
