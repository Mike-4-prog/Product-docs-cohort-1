# Multi-Dimensional Arrays

Multi-dimensional arrays in **Openmadness** represent nested JavaScript arrays—often visualized as matrices or higher-dimensional tensors. Simply put, a multidimensional array in JavaScript is an array that has other arrays as its elements.

> **Note:** Multi-dimensional arrays are essential for handling complex data structures, especially when working with grids, tables, or matrices.

This guide would walk you through how to effectively use and manipulate multi-dimensional arrays using Openmadness’s clean, intuitive methods.

## Example of a Multi-Dimensional Array?

A multi-dimensional array is essentially an array of arrays. Here is a simple example of a multidimensional array. Example:

```js
// multidimensional array
// contains 3 separate arrays as elements
const dataSet = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(data);

// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

::: details
Here, we created a multidimensional array named data with the following arrays as its elements: [1, 2, 3], [4, 5, 6], [7, 8, 9].
:::

## Using Existing Arrays as Elements

We can also create multidimensional arrays by nesting existing arrays within them. Example:

```js
// three predefined arrays
const userA = ['Alice', 30];
const userB = ['Bob', 28];
const userC = ['Clara', 27];

// create the multidimensional array
const users = [userA, userB, userC];

console.log(users);
// Output: [['Alice', 30], ['Bob', 28], ['Clara', 27]]
```

::: details
Here, we has three exisiting arrays: userA, userB and userC and then we nested them within the users array  to create our multidimensional array.
:::

## Accessing Elements of an Array

You can access the elements of a multidimensional array using array indexes. It follows the pattern of rows and columns in a spreadsheet.
Example:

```js
const records = [
  ['Alice', 30],
  ['Bob', 28],
  ['Clara', 27]
];

// access the first record item
console.log(records[0]);     // ['Alice', 30]

// access the first item of the first array in the records
console.log(records[0][0]);  // 'Alice'

// access the second item of the last array in the records
console.log(records[2][1]);  // 27
```

::: details
You can think of a multidimensional array (in this case, **records**), as a table with 3 rows and 2 columns.
:::

## Iterating Over Multidimensional Array

In JavaScript, you can use nested loops to go through a multidimensional array: one loop for the outer array and another loop inside it for the inner arrays. For example:

```js
const users = [['Alice', 30], ['Bob', 28]];

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < users[i].length; j++) {
    console.log(users[i][j]);
  }
}
```

### Use forEach() to Iterate Over Multidimensional Array

```js
users.forEach(user => {
  user.forEach(detail => {
    console.log(detail);
  });
});
```

::: warning
Be careful with index boundaries! Accessing an index outside the array's length will result in `undefined`.
:::

### Use Cases

- Representing grids or game boards
- Storing tabular data
- Image processing (pixels in rows and columns)

::: tip
Multi-dimensional arrays are widely used in games (like chess boards), spreadsheets, and scientific computing.
:::

## Adding Elements to a Multidimensional Array

You can either use an index notation or the push() method to add elements to a multidimensional array.

1. Using Index Notation

```js
const workers = [['Tom', 22], ['Jane', 21]];

// add "Present" as a third element
workers[1][2] = 'Present';

console.log(workers);

// Output: [['Tom', 22], ['Jane', 21, 'Present']]
```

2. Using the push() Method
The push() method inserts an element at the end of the array. Example:

```js
const workers = [['Tom', 22], ['Jane', 21]];

// add array [‘David’, 23] to the end of the workers array
workers.push(['David', 23]);

// add element “Enrolled”  to the end of the first array in the workers array
workers[0].push('Enrolled');

console.log(workers);
// [['Tom', 22, 'Enrolled'], ['Jane', 21], ['David', 23]]
```

## Removing Elements From a Multidimensional Array

You can either use the splice() method or the pop() method to remove an element from any position in the multidimensional array.

1. Using the splice method

```js
const data = [['Tom', 22], ['Jane', 21]];

data.splice(0, 1);

console.log(data);

// Output: [['Jane', 21]]
```

:::tip
In the above program, data.splice(0,1) removes the first element of the multidimensional array. Here,
0 - The start index from where to modify the array.
1 - The number of elements to delete.
If you want to delete both arrays, you can use the code studentsData.splice(0,2).
:::

2. Remove the last element using the pop() method.

```js
const data = [['Tom', 22], ['Jane', 21]];

data.pop();

console.log(data);

// Output: [['Tom', 22]]
```

### Higher Dimensions

You can create arrays with more than two dimensions:

```js
// 3D array example
const cube = [
    [
        [1, 2], [3, 4]
    ],
    [
        [5, 6], [7, 8]
    ]
];
```

::: details How to visualize higher dimensions?
A 3D array can be thought of as a collection of 2D matrices stacked together.
:::

## Some Core Transformations

| Operation      | Description                                              | Example                                                      |
|----------------|---------------------------------------------------------|--------------------------------------------------------------|
| `.flatten()`   | Convert any `omArray` into a 1D array                   | `omArray([[1,2],[3,4]]).flatten()` → `[1,2,3,4]`             |
| `.reshape(shape)` | Reorganize elements into a new shape (row-major by default) | `omArray([1,2,3,4]).reshape([2,2])` → `[[1,2],[3,4]]`        |
| `.transpose()` | Swap axes—commonly convert rows into columns for 2D matrices | `omArray([[1,2],[3,4]]).transpose()` → `[[1,3],[2,4]]`       |

## Code Examples

### 1. `.flatten()`

Populate a multi-dimensional array and flatten it:

```js
import { omArray } from 'openmadness';

const matrix = omArray([
    [1, 2],
    [3, 4],
    [5, 6]
]);

console.log(matrix.flatten().value); // [1, 2, 3, 4, 5, 6]
```

**Use case:** Quickly reduce data for summation, search, or plotting tasks.

---

### 2. `.reshape(shape)`

Change the structure of your data:

```js
const arr = omArray([1, 2, 3, 4, 5, 6]);
console.log(arr.reshape([2, 3]).value); // [[1, 2, 3], [4, 5, 6]]
console.log(arr.reshape([3, 2]).value); // [[1, 2], [3, 4], [5, 6]]
```

::: tip
The total number of elements must match (e.g., 6 = 2×3 or 3×2).
:::

---

### 3. `.transpose()`

Flip rows and columns (applies to 2D):

```js
const m = omArray([
    [1, 2, 3],
    [4, 5, 6]
]);
console.log(m.transpose().value); // [[1, 4], [2, 5], [3, 6]]
```

---

## Best Practices for Working with Multidimensional Arrays

- **Avoid Deep Nesting:** Minimize excessive nesting to keep your code maintainable.
- **Use Descriptive Variable Names:** Use clear, meaningful names for arrays to make your code more understandable.
- **Check Array Lengths:** Always check the array's length before accessing its elements to avoid errors and undefined values.

## Summary

Multi-dimensional arrays are powerful tools for organizing complex data structures. They are widely used in mathematics, data science, and many programming applications.

> **Note:** It is essential to ractice creating and manipulating multi-dimensional arrays to become comfortable with their structure and usage.
