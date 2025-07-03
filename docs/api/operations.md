---
title: Operations
description: Reference for arithmetic, logical, and reduction operations on omArray instances in OpenMadness.
sidebar_position: 3
---

## Operations

This page provides a complete reference to all supported operations available on `omArray` instances in Openmadness. These include arithmetic, logical, reduction, and filtering operations.

All operations are **non-destructive** by default—each method returns a new `omArray`, leaving the original unchanged.

For usage examples and real-world workflows, see [Basic Usage](http://localhost:8080/get-started/basic-usage.html) and [Working with omArray](http://localhost:8080/guide/working-with-omArray.html).


### Categories of Operations

Operations are organized into the following groups:

#### 1. Arithmetic Operations

Perform element-wise computations between two arrays or an array and a scalar.

| Method        | Description                   |
|---------------|-------------------------------|
| `add()`       | Element-wise addition         |
| `subtract()`  | Element-wise subtraction      |
| `multiply()`  | Element-wise multiplication   |
| `divide()`    | Element-wise division         |
| `mod()`       | Element-wise modulo operation |
| `pow()`       | Element-wise exponentiation   |

**Example:**

```js
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);

const result = a.add(b); // [5, 7, 9]
```
2. #### Logical Operations
Perform comparison-based operations that return boolean arrays.
| Method           | Description                |
|------------------|----------------------------|
| `equal()`        | Element-wise equality check |
| `notEqual()`     | Element-wise inequality check |
| `greater()`      | Greater than comparison     |
| `less()`         | Less than comparison        |
| `greaterEqual()` | Greater than or equal       |
| `lessEqual()`    | Less than or equal          |

Example:
```javascript
const a = omArray([1, 2, 3]);
const b = omArray([1, 0, 3]);

const result = a.equal(b); // [true, false, true]
```
These return boolean `omArray` instances and are commonly used with [Logical Masking and Fltering](http://localhost:8080/api/logical-masking-and-filtering.html)

3. #### Reduction Operations
Compute a single result (or reduced shape) from an entire array.
| Method     | Description                |
|------------|----------------------------|
| `sum()`    | Total sum of elements      |
| `mean()`   | Average value              |
| `min()`    | Minimum element            |
| `max()`    | Maximum element            |
| `argMin()` | Index of the minimum value |
| `argMax()` | Index of the maximum value |

Example:
```javascript
const a = omArray([10, 20, 5, 8]);

const total = a.sum();      // 43
const index = a.argMin();   // 2
```
::: warning
Use `argMin()` and `argMax()` only with 1D arrays for now. Multi-dimensional support is planned in a future release.
:::

#### 4. Broadcasting
OpenMadness supports broadcasting between arrays of different shapes, following simplified NumPy-style rules.
```javascript
const a = omArray([1, 2, 3]);
const b = omArray([[10], [20]]);

const result = b.multiply(a);

// result.toArray():
// [
//   [10, 20, 30],
//   [20, 40, 60]
// ]
```
#### 5. Logical Masking and Filtering
Use boolean masks to select or filter array values based on conditions.
| Method     | Description                            |
| ---------- | -------------------------------------- |
| `mask()`   | Apply a boolean mask to extract values |
| `where()`  | Return indices where condition is true |
| `select()` | Select values by condition or index    |

Example:
```javascript
const a = omArray([10, 20, 30]);
const condition = a.greater(15); // [false, true, true]

const filtered = a.mask(condition); // [20, 30]
```
See [Logical Masking and Filtering](http://localhost:8080/api/logical-masking-and-filtering.html) for advanced usage

### Notes
::: warning Shape Compatibility
All operations require shape compatibility. If shapes are incompatible, an error will be thrown.
:::

::: tip Immutability
All methods are immutable unless explicitly stated. In-place operations are planned in a future release.
:::

::: info Scalar Support
Scalar operations are supported automatically. Example: `a.add(5)` adds 5 to each element.
:::






