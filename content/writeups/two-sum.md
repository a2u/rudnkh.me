---
title: "Two Sum"
date: 2025-11-22
type: writeups
platform: "LeetCode"
tags: ["array", "hash-table"]
---

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

## Solution

The brute force approach would be O(n²), but we can optimize it using a hash table to achieve O(n) time complexity.

```python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

## Complexity

- **Time:** O(n) - single pass through the array
- **Space:** O(n) - hash table storage

## Key Insights

Using a hash table allows us to look up complements in constant time, reducing the overall complexity from O(n²) to O(n).

