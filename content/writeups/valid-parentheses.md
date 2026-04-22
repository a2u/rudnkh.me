---
title: "Valid Parentheses"
date: 2026-01-04
type: writeups
platform: "LeetCode"
tags: ["stack", "string"]
---

## Problem

Given a string of brackets `()[]{}`, determine whether it is valid — every
opening bracket has a matching closing bracket, and they are properly
nested.

## Solution

Classic stack problem. Push opening brackets, pop and compare on closing.

```python
def isValid(s: str) -> bool:
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif not stack or stack.pop() != pairs[ch]:
            return False
    return not stack
```

## Complexity

- **Time:** O(n)
- **Space:** O(n) — worst case the stack is as long as the input.

## Key Insights

Two edge cases that trip people up:
1. Stack empty on a closing bracket — immediately invalid.
2. Stack non-empty at the end — unmatched openers, invalid.

Both are easy to forget if you only test the "happy" path.
