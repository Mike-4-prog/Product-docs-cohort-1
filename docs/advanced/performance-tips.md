---
title: Performance Tips for OpenMadness
description: Pro tips for writing high-performance array operations using OpenMadness
---

## Performance Tips

Openmadness is designed to be fast, but when working with large datasets, every optimization counts! Here are some pro tips to squeeze maximum performance out of your array operations.

### Vectorize Your Operations

Always prefer built-in vectorized operations over loops:

```javascript
//  Slow way (avoid!)
let result = [];
for (let i = 0; i < bigArray.length; i++) {
  result.push(bigArray[i] * 2);
}

//  Fast way (vectorized)
import { multiply } from 'openmadness';
const result = multiply(bigArray, 2);
```
::: tip Why it matters
Vectorized operations use optimized C++ under the hood and avoid JavaScript's loop overhead.
:::
###  Chain Operations with Pipelines
Combine multiple operations into a single pipeline to minimize intermediate arrays:
```javascript
import { pipe, filter, multiply, sum } from 'openmadness';

// Good
const processData = pipe(
  filter(x => x > 100),
  multiply(1.2),
  sum
);
```
### Use Typed Arrays for Numeric Data
For pure numeric arrays, use JavaScript's `TypedArrays`:
```javascript
// Before
const regularArray = [1, 2, 3, ...]; 

// After (3–5x faster for numeric operations)
const typedArray = new Float64Array([1, 2, 3, ...]);

// OpenMadness works with both!
```
### Memory Management Tips
A. Reuse Arrays When Possible:
```javascript
// Instead of creating new arrays constantly:
let temp = operation1(bigArray);
temp = operation2(temp);

// Consider mutating when safe:
operation1InPlace(bigArray); // Modifies original
operation2InPlace(bigArray);
```
B. Watch for Memory Leaks:
```javascript
// When processing large batches:
function processBatch() {
  const data = getGiantArray();
  const result = transform(data);
  return result; // Only keep what you need!
}
```
### Parallel Processing (Experimental)
For CPU-bound tasks, consider using **Web Workers**:
```javascript
// main.js
const worker = new Worker('process.js');
worker.postMessage(bigData);
```
```javascript
// process.js
importScripts('openmadness.js');
self.onmessage = (e) => {
  const result = openmadness.heavyOperation(e.data);
  self.postMessage(result);
};
```
### Benchmarking Your Code
Always measure before optimizing:
```javascript
console.time('operation');
const result = expensiveOperation(bigData);
console.timeEnd('operation'); // Shows execution time
```
### When to Optimize?
::: warning Don't prematurely optimize!
Avoid optimizing small arrays (<10,000 elements). Focus your efforts where it counts.
:::
Do optimize when:

- Operations take >100ms

- You're processing frames in animation

- You're working on scientific/data applications
### Further Reading
- [MDN TypedArrays Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)

- [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

- [OpenMadness Performance Cookbook](/guides/performance-cookbook)

::: tip Final Thought
Write code first, optimize later — but only where it counts! 
:::










