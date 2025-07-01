---
title: Glossary
---


### Glossary

This glossary defines essential terms and concepts used throughout the OpenMadness documentation. It includes short examples to help you understand how each term is applied in context.

#### A

##### Array-like Object
An object that resembles an array in structure (with `length` and numeric indexes), but isn't a true JavaScript array.  
**Example:**
```js
const nodeList = document.querySelectorAll('div');
console.log(Array.isArray(nodeList)); // false
```
#### B
##### Broadcasting
A method of applying operations to arrays of different shapes by automatically expanding one to match the other's dimensions.

Example:
```js
const a = new OMArray([1, 2, 3]);
const b = 2;
console.log(a.add(b)); // [3, 4, 5]
```
#### C
##### Chaining
Combining multiple operations in a single statement using dot notation.

Example:
```js
omArray.filter(x => x > 5).map(x => x * 2).sum();
```
#### D
##### Data Pipeline
A flow of transformations applied to data. In OpenMadness, pipelines are built by chaining OMArray methods.
```js
const result = new OMArray([2, 4, 6])
  .map(x => x + 1)
  .filter(x => x > 5)
  .toArray();
```
#### F
##### Filter
A method that returns only elements matching a condition.
```js
omArray.filter(x => x % 2 === 0); // Keeps only even numbers
```
#### L
##### Lazy Evaluation
Delayed computation for optimization:
```js
import { pipe } from 'openmadness';
const lazyPipeline = pipe(
  multiply(2),
  filter(gt(10))
// Only computes when called
```

##### Logical Masking
Selecting elements from an array using a Boolean array (mask).

Example:
```js
const arr = new OMArray([10, 20, 30]);
const mask = [true, false, true];
arr.applyMask(mask); // Returns [10, 30]
```
#### M
##### Matrix
A two-dimensional array of numbers, used in linear algebra operations.
```js
const matrix = new OMArray([[1, 2], [3, 4]]);
```
##### Matrix Multiplication
A linear algebra operation where rows of the first matrix are multiplied by columns of the second.

Example:
```js
const A = new OMArray([[1, 2], [3, 4]]);
const B = new OMArray([[5, 6], [7, 8]]);
const result = A.matMul(B); // [[19, 22], [43, 50]]
```
#### N
##### Normalization
Scaling data to a specific range (e.g., 0 to 1) to make it consistent for analysis.
```js
arr.normalize(); // Returns an OMArray with values scaled between 0 and 1
```
#### O
##### OMArray
The main class in OpenMadness that wraps a native array and provides powerful methods.
```js
const nums = new OMArray([1, 2, 3]);
nums.sum(); // 6
```
##### Outlier
A data point that differs significantly from other observations. OpenMadness may offer utility methods to detect/remove them.

#### P
##### Pipeline
A series of chained operations applied to data.
```js
new OMArray([1, 2, 3, 4])
  .filter(x => x > 2)
  .map(x => x * 10)
  .toArray(); // [30, 40]
```
#### R
##### Reduce
A method to accumulate values using a reducer function.
```js
omArray.reduce((acc, val) => acc + val, 0); // Sum
```
#### S
##### Shape
The structure of an array (number of dimensions and size of each).
```js
const a = new OMArray([[1, 2], [3, 4]]);
a.shape(); // [2, 2]

```
##### Slice
A portion of an array selected by index range.
```js
omArray.slice(0, 3); // Gets first 3 elements
```
##### Sum
Returns the total of all numerical values in an OMArray.
```js
omArray.sum(); // 10
```
#### T
##### Transformation
The process of changing data from one form to another (e.g., mapping, normalizing, reshaping).

##### Transpose
Swaps the rows and columns of a matrix.
```js
const matrix = new OMArray([[1, 2], [3, 4]]);
matrix.transpose(); // [[1, 3], [2, 4]]
```
#### V
##### Vector
A one-dimensional array.
```js
const vector = new OMArray([5, 10, 15]);
```
#### W
##### Wrapper
OMArray is a wrapper around native arrays that adds additional features like chaining, masking, and matrix ops.








