---
lang: en-US
title: Basic Usage
description: Description of this page
---
# Basic Usage
Openmadness is an open-source JavaScript library designed to make mathematical and array-based operations easier. It is inspired by NumPy but designed with JavaScript developers in mind. Openmadness provides a clean, chainable API for working with numbers, arrays, and basic data manipulation. This section will help you understand and use the core features.
## How to Install Openmadness
You can check the details to install the package at [Installation](#installation).
## How to Import Openmadness
You can import the library in your JavaScript file as follows:
```
import {omArray } from 'openmadness';
```
## Why Use Openmadness?
It simplifies math operations in JavaScript.
It supports chaining and expressive syntax.
It reduces code complexity for beginners.
It’s great for learning and teaching array logic.
## Reading the Example Code
Code snippets in this document are written in modern JavaScript. All example code should be used inside a script file or Node.js environment. For example:
```
const data = omArray([1, 2, 3]);
const result = data.add(2).sum();
console.log(result);
```
This example creates an array, adds 2 to each value, and then sums the results.
## What is an Array?
In programming, an array is a collection of values stored in sequence. For example, [1, 2, 3] is an array with three values. Openmadness uses arrays as the base structure for operations such as addition, multiplication, and transformation.
### Why use arrays for computation?
Arrays are ideal for numerical and matrix computations because they allow operations to be applied to entire collections of data at once. This approach avoids the need for writing complex loops, and improves performance through optimized operations. Libraries like Openmadness and NumPy use arrays because they can represent vectors, matrices, and higher-dimensional data in a compact and efficient format.
## Creating an Array in Openmadness
You can create a one-dimensional array using the omArray() function. The following example creates an array with three numbers and prints it to the console:
```
const a = omArray ([10, 20, 30]);
console.log(a);
```

## Basic Array Operations
Here’s how you perform simple operations:
```
 const data = omArray ([1, 2, 3]);
 const total = data.add(1).multiply(2).sum();
 console.log(total);
 ```

## What is a Matrix?
A matrix is a 2D array: it has rows and columns. For example, [[1, 2], [3, 4]] is a 2x2 matrix. Openmadness supports creating and manipulating matrices.
## Matrix Operations in Openmadness

To work with two-dimensional data, you can use omArray() to create a matrix. The following example shows how to create a 2x2 matrix and transpose it (i.e., swap rows and columns):
```
const matrix = omArray([
   [1, 2],
   [3, 4]
 ]);
 const transposed = matrix.transpose();console.log(transposed);
```
# Openmadness Operations – Code Examples
This section explains the working examples of openmadness library. The examples are grouped by one-dimensional arrays and multi-dimensional matrices.Use these to better understand how each function behaves and what kind of inputs and outputs to expect.

## Array Operations
Arrays are the foundation of data handling in Openmadness. The following examples show how to create and manipulate one-dimensional arrays using built-in methods like sum(), mean(), reshape(), and more.

**omArray()** 

Use omArray() to build a one-dimensional array. It wraps your data and provides useful methods.
```
const arr = omArray([1, 2, 3]);
```
**sum()**

Adds all numbers in the array and gives a total.
```
const result = omArray([1, 2, 3]).sum();  // result is 6
```
**mean()**

Finds the average of all elements in the array.
```
const avg = omArray([2, 4, 6]).mean();  // result is 4
```
**max()**

Returns the highest number from the array.
```
const maxVal = omArray([1, 7, 3]).max();  // result is 7
```
**min()**

Returns the smallest number from the array.
```
const minVal = omArray([1, 7, 3]).min(); // result is 1
```

**reshape()**

Turns a 1D array into a matrix with defined rows and columns.
```
const reshaped = omArray([1, 2, 3, 4]).reshape(2, 2);
```
**flatten()**

Turns a 2D matrix into a 1D array.
```
const flat = omArray([[1, 2], [3, 4]]).flatten(); // result is [1, 2, 3, 4]
```

**dot()**

Performs a dot product (vector multiplication) on two equal-length arrays.
```
const a = omArray([1, 2]); const b = omArray([3, 4]); const dot = a.dot(b);  // result is 11
```
**add()**

Adds a number to each element in the array.
```
const added = omArray([1, 2]).add(2); //result is [3, 4]
```
**subtract()**

Subtracts a number from each element in the array.
```
const sub = omArray([5, 4]).subtract(1); 
// result is [4, 3]
```
**multiply()**

Multiplies each element in the array by a number.
```
const times = omArray([2, 3]).multiply(3); 
// result is [6, 9]
```
**divide()**

Divides each element in the array by a number.
```
const div = omArray([10, 20]).divide(10);   
// result is [1, 2]
```
**Logical Masking (filter)**

Keep only the items that match your condition.
```
const result = omArray([10, 20, 30]).filter(x => x > 15);
// result is [20, 30]
```

## Matrix Operations

**omArray()**
Use omArray() with nested arrays to create a matrix (2D structure).
```
const matrix = omArray([[1, 2], [3, 4]]);
```

**transpose()**

Switches rows with columns in a matrix.
```
const t = omArray([[1, 2], [3, 4]]).transpose();
```
**sum() on Transposed Matrix**

Adds all elements of the transposed matrix.
```
const result = omArray([[1, 2], [3, 4]]).transpose().sum();   
// result is 10
```
**dot() for Matrices**

Performs matrix multiplication.
```
const A = omArray([[1, 2], [3, 4]]);
const B = omArray([[5, 6], [7, 8]]);
const C = A.dot(B);
```
**reshape() for Matrix**

Changes the structure of a matrix (e.g. 1x4 to 2x2).
```
const reshaped = omArray([1, 2, 3, 4]).reshape(2, 2);
```

**flatten() for Matrix**

Turns a matrix into a single row (1D array).
```
const flat = omArray([[1, 2], [3, 4]]).flatten();
```
The Openmadness library offers a beginner-friendly, JavaScript-first approach to handling array and matrix operations. From simple one-dimensional arrays to complex multi-dimensional matrices, it allows you to perform powerful mathematical operations using clean, chainable methods.

Whether you're adding numbers, reshaping data, or calculating means and dot products, Openmadness helps you write efficient and readable code without the need for loops or manual data handling.