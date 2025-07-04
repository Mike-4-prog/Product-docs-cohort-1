---
title: OpenMadness FAQ 
description: Frequently Asked Questions about the OpenMadness array operations library
---

## OpenMadness FAQ 

Welcome to the OpenMadness Frequently Asked Questions! Here we answer common questions about our JavaScript array operations library inspired by NumPy.

---

### General Questions

`Q: What makes OpenMadness different from regular JavaScript arrays?`

OpenMadness provides NumPy-style operations that are:

- Optimized for performance  
- Chainable via pipelines  
- More expressive for math/data tasks   

```javascript
// Regular JS
[1, 2, 3].map(x => x * 2).filter(x => x > 3);

// OpenMadness
import { multiply, filter, gt, pipe } from 'openmadness';
pipe(
  multiply(2),
  filter(gt(3))
)([1, 2, 3]);
```
`Q: How big can my arrays be?`

Openmadness handles arrays up to 1 million elements efficiently. For larger datasets:

- Use typed arrays (Float64Array)

- Process in chunks

- Consider Web Workers for parallel processing
### Installation Issues
`Q: Getting "Module not found" errors?`
Try these fixes:

1. Reinstall:
```bash
npm uninstall openmadness && npm install openmadness
```
2. Check your import:
```javascript
// Correct
import { sum } from 'openmadness';

// Wrong
import sum from 'openmadness/sum';
```
### Common Operations
`Q: How do I filter arrays by multiple conditions?`

Use `and()`/`or()` combiners:
```javascript
import { gt, lt, and } from 'openmadness';

const data = [1, 5, 10, 15, 20];
const mask = and(gt(data, 5), lt(data, 15));
// [false, false, true, false, false]
```
`Q: What's the equivalent of NumPy's where()?`

We have two options:
```javascript
import { where, setWhere } from 'openmadness';

// 1. Get values where condition is true
where([1, 2, 3], [true, false, true]); // [1, 3]

// 2. Replace values
setWhere([1, 2, 3], [true, false, true], 0); 
// [0, 2, 0]
```
### Performance Questions
`Q: Why is my operation slower than vanilla JS?`

For small arrays (<100 elements), vanilla JS might be faster. OpenMadness shines when:
- Working with >1,000 elements

- Chaining multiple operations

- Using typed arrays
::: tip
Always benchmark with `console.time()`!
:::
### Troubleshooting
`Q: My pipeline isn't working as expected`

Try debugging with `log()`:
```javascript
import { pipe, log } from 'openmadness';

pipe(
  log('Input:'),
  multiply(2),
  log('After multiply:'),
  filter(gt(10))
)([5, 6, 7]);
```
### Community & Support
`Q: Where can I ask questions not covered here?`

We are happy to help! Try:

-  [GitHub Discussions](https://github.com/openmadness/openmadness/discussions)
-  [Stack Overflow](https://stackoverflow.com/questions/tagged/openmadness)
-  [Join our Discord Community](https://discord.gg/openmadness)

"The only bad question is the unasked one!"  Happy coding!






