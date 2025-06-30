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


---
## Properties in omArray

Properties give you instant information about your array without having to calculate anything yourself.

### Property Syntax 
To access a property, you will need to use the the syntax `object.property`

:::note
To check a **property** in omArray, use a **dot** (.) 

To check the length of an array, you would use: `numbers.length`
:::

---

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

---

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

---

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
```

---

## Methods in omArray

Methods are actions you perform on your omArray. 

A method:
- Executes a function on your data
- Returns a new omArray as an output 
- Transforms your data. 

:::note
Methods do not modify your original data.
:::

### Methods Syntax
When using methods, use the following syntax: `object.method()`

:::note
Always use parentheses when calling a method in `omArray`
:::

For example: 
```js
numbers.toArray()
```

---
### Basic Methods

Some basic methods in omArray are: 

- `.toArray()`-Converts the omArray back to a regular JavaScript array.
- `.push(item)` - adds an item to the end of the omArray 
- `.isEmpty()`-Checks if the omArray is empty

#### Basic methods examples
```js
const numbers = omArray([1, 2, 3, 4, 5]);

// Convert back to a regular array
const regularArray = numbers.toArray();
console.log(regularArray);  // [1, 2, 3, 4, 5]

// Add a new number to the end
numbers.push(6);
console.log(numbers.data);  // [1, 2, 3, 4, 5, 6]

//Checks if the array is empty
omArray([]).isEmpty(); // true
omArray([1]).isEmpty(); // false

```

---

### Filter and Transform Methods

Some methods for filtering and transforming data in omArray are:

- `.filter(callback)` - Filters elements based on a condition, returning a new omArray.
- `.map(callback)` - Applies a function to each element, returning a new omArray.

#### Filter and transform methods examples

```js
const numbers = omArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Get only even numbers (creates a new omArray)
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers.data);  // [2, 4, 6, 8, 10]

// Double all numbers (creates a new omArray)
const doubled = numbers.map(x => x * 2);
console.log(doubled.data);      // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

---

### Chaining Methods Together

In `omArray`, you can do multiple operations in a row at once. This is called chaining.

### Method Chaining Syntax
Use dots to chain methods together.

To chain 2 methods, use the syntax: `object.method().method()`

To chain a property after a method, use the syntax: `object.method().property`

#### Chaining Methods example

```js
const numbers = omArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Chain methods together
const result = numbers
  .filter(x => x > 5)        // omArray([6, 7, 8, 9, 10])
  .map(x => x * 2)           // omArray([12, 14, 16, 18, 20])
  .filter(x => x < 18);      // omArray([12, 14, 16])

// Get property at the end of chain
const sum = numbers
  .filter(x => x % 2 === 0)  // omArray([2, 4, 6, 8, 10])
  .sum;                      // 30 (property, no parentheses)

```

:::note
More detailed informatin about chaining methods in omArray can be found in Chaining Operations 
:::

---

## Common errors


**Mistake 1: Using parentheses () on a data property**

Incorrect syntax
```js
const arr = omArray([1, 2, 3]);
arr.sum()  // ❌ Wrong - this will cause an error
```

Correct syntax
```js
const arr = omArray([1, 2, 3]);
arr.sum    // ✅ Correct - sum is a property, no brackets
```

Reasoning:

Brackets are used when performing a method on an array. When looking up a data property, you should use dots.


**Mistake 2: Forgetting omArray is different from regular arrays**

Incorrect Syntax
```js
// ❌ Wrong - regular array doesn't have .sum
const regularArray = [1, 2, 3];
console.log(regularArray.sum);  // undefined
```

```js
Correct Syntax
// ✅ Correct - omArray has .sum
const omArr = omArray([1, 2, 3]);
console.log(omArr.sum);  // 6
```

Reasoning:

`.sum` is a property only available in omArray. In a regular javascript array, you need to do the calculations in order to obtain the sum of the array.


**Mistake 3: Expecting methods to change the original**

```js
const numbers = omArray([1, 2, 3]);

// ❌ Wrong assumption - filter creates a NEW omArray
const filtered = numbers.filter(x => x > 1);
console.log(numbers.data);   // Still [1, 2, 3]
console.log(filtered.data);  // [2, 3]
```

## Summary

Remember:
- Properties give you information about an `omArray`. Use a dot `.` when calling a property.
- Methods perform actions on an `omArray`. Use parentheses `()` when calling a method.
- Most methods return new `omArray`s
- You can chain methods together
- Use `.data` to see the actual array content
