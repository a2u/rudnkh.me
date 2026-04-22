---
title: "Binary Search — and how I kept getting it wrong"
date: 2026-03-02
type: writeups
platform: "Notes"
tags: ["binary-search", "algorithms"]
---

Binary search is the algorithm I've "known" the longest and written
incorrectly the most times. The issue is never the idea. It's the
off-by-one.

## The canonical bug

```python
# Wrong on the edges
def bs(nums, target):
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid          # ← infinite loop
        else:
            hi = mid
    return -1
```

`lo = mid` without `+ 1` stalls when `lo + 1 == hi`.

## The version I now write every time

```python
def bs(nums, target):
    lo, hi = 0, len(nums) - 1   # inclusive on both sides
    while lo <= hi:              # ≤, not <
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

## The mental model that finally stuck

At every step I maintain the invariant: **the answer, if it exists, is
somewhere in `nums[lo..hi]` inclusive.** That tells me:

- Loop condition: `lo <= hi` (if they cross, the range is empty).
- Updates: `lo = mid + 1` or `hi = mid - 1` (never `mid` itself — we've
  already checked it).

Once I started asking "what range could still contain the answer?" the
off-by-ones went away.
