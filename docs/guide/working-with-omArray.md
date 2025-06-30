---
title: Working with omArray
description: A guide on how to use omArray and its methods
---
# Introduction

`omArray` is a specialised javascript object that wraps an array of numbers. 

Using `omArray` is different from using a regular javascript array in the following ways:

- **Less repetition**: In regular arrays, you need to write code to make calculations. In omArray, common data properties such as ‘max’, ‘min’ or ‘length’ are instantly available without needing to write code. 
- **Fewer bugs**: miscalculations can occur in regular arrays because code is written manually.  Using `omArray`'s inbuilt functions, produces accurate calculations every time.
- **Inbuilt functionality**: With a regular array, you need to remember or look up how to do things, with `omArray`, you can explore all the inbuilt properties available.
- **Improved readability**: `omArray` is easier to read than the complex calculations in regular arrays.
- **Added functionality**: With `omArray` you can add functionality to your code without changing it. `omArray` will produce new outputs and won’t modify the original code.



## Properties in omArray

Properties give you instant information about your array without having to calculate anything yourself.

### Property Syntax 
To access a property, you will need to use the the syntax `object.property`

:::note
To check a **property** in omArray, use a **dot** (.) 

To check the length of an array, you would use: `numbers.length`
:::

### Basic properties
The basic properties of an `omArray` are listed below:

- `.length` - how many items are in the array
- `.first` -  first item
- `.last` - last item
- `.isEmpty` - true if no items

#### Basic Properties Example

```js
const numbers = omArray([10, 20, 30, 40, 50]);

// How many items?
console.log(numbers.length);    // 5

// Is it empty?
console.log(numbers.isEmpty);   // false

// First and last items
console.log(numbers.first);     // 10
console.log(numbers.last);      // 50
```

### Mathematical properties

The mathematical properties available in omArray are the following:

- `.max` - shows largest number
- `.min` - shows smallest number
- `.sum` - shows total of all numbers
- `.average` - shows mean value

#### Mathematical properties example

```js
const scores = omArray([85, 92, 78, 96, 88]);

// Get the total of all numbers
console.log(scores.sum);        // 439

// Get the average
console.log(scores.average);    // 87.8

// Find the highest and lowest
console.log(scores.max);        // 96
console.log(scores.min);        // 78
```

### Data Analysis Properties

The data analysis properties available in `omArray` are the following:

- `.isNumeric` - shows whether all data is numbers
- `.hasDuplicates` - shows items that appear more than once
- `.isSorted` - indicates whether the data is sorted 

#### Data analysis properties example

```js
const data = omArray([1, 2, 2, 3, 4]);

// Check if all items are numbers
console.log(data.isNumeric);      // true

// Check if there are duplicates
console.log(data.hasDuplicates);  // true (we have two 2's)

// Check if data is sorted
console.log(data.isSorted);       // true
