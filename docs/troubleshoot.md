---
title: Troubleshooting OpenMadness 
description: Diagnose and fix common issues when using OpenMadness for array operations, from import errors to unexpected pipeline behavior.
---

## Troubleshooting OpenMadness 

Even the best libraries can run into rough patches — and OpenMadness is no exception. Whether you are hitting import errors, struggling with pipeline logic, or seeing unexpected results, this guide walks you through practical solutions to the most common problems.

Let’s get you back to smooth coding. 
### Common Issues and Solutions
1. "Function is not defined" Errors
**Problem**: You see `ReferenceError: sum is not defined`

Solution: Check your imports!
```javascript
// ✅ Correct
import { sum } from 'openmadness';

// ❌ Wrong (common mistake)
import sum from 'openmadness'; // Missing curly braces!
```
::: tip
 **Remember:** OpenMadness uses **named exports** for all functions.
:::
2. Unexpected NaN Values

**Problem**: Operations return `NaN` unexpectedly

**Checklist**:

1. Verify your input data:
```javascript
console.log(yourArray.some(isNaN)); // Check for NaN values
```
2. Handle empty arrays:
```javascript
import { safeDivide } from 'openmadness';
safeDivide([1, 2, 3], [1, 0, 2]); // [1, 0, 1.5]
```
### Performance Bottlenecks
Signs:
- Operations feel slow

- Browser freezes with large arrays

Optimization Tips:
```javascript
// Before (slow for big arrays)
const result = hugeArray.map(x => complexCalculation(x));

// After (faster)
import { vectorize } from 'openmadness';
const fastCalculation = vectorize(complexCalculation);
const result = fastCalculation(hugeArray);
```
### Debugging Pipelines
Using the `log()` Helper

Trace pipeline steps easily:
```javascript
import { pipe, log, multiply, filter } from 'openmadness';

pipe(
  log('Input:'),
  multiply(2),
  log('After multiply:'),
  filter(x => x > 10),
  log('Final result:')
)([5, 6, 7]);
```
### Visualizing Array Shapes
When working with multi-dimensional arrays:
```javascript
import { shape } from 'openmadness';

const matrix = [[1, 2], [3, 4], [5, 6]];
console.log(shape(matrix)); // [3, 2]
```
### Error Messages Decoded

| **Error**                | **Likely Cause**                    | **Fix**                                        |
|--------------------------|-------------------------------------|------------------------------------------------|
| `Invalid dimensions`     | Array shapes don't match            | Check with `shape()`                           |
| `Cannot read property`   | Trying to use non-array input       | Add type check: `Array.isArray(input)`         |
| `Maximum call stack`     | Recursive operation gone wild       | Use iterative approach instead                 |

### Browser-Specific Issues
**Webpack Configuration**

If you see bundler errors, try adding to your webpack.config.js:
```javascript
resolve: {
  fallback: {
    "buffer": require.resolve("buffer/")
  }
}
```
### CDN Usage
When loading from CDN:
```html
<!-- Check the global variable name -->
<script src="https://unpkg.com/openmadness"></script>
<script>
  console.log(window.OpenMadness.sum([1, 2, 3])); // Note PascalCase
</script>
```
### Still Stuck? Try This!
1. Isolate the Problem:
```javascript
// Create minimal test case
const testInput = [1, 2, 3]; // Simplest possible input
const testOutput = problematicFunction(testInput);
```
2. #### Check the Docs:
- [API Reference](/reference/)  
- [Examples Gallery](/examples/)

3. #### Ask the Community:
- [GitHub Discussions](https://github.com/openmadness/openmadness/discussions)  
- [Stack Overflow](https://stackoverflow.com/questions/tagged/openmadness)

::: tip
When asking for help, include:

- OpenMadness version (npm list openmadness)

- Minimal reproducible example

- Expected vs. actual output
:::

**Remember**: Every bug you solve makes you a better developer!  Happy debugging!

