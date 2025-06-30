---
tittle: chaining operations 
---
# Chaining Operations 

When working with numerical operations or transforming data, developers need to perform multiple steps in a specific order. Rather than writing repetitive and nested function calls, Openmadness supports method chaining, allowing developers to call multiple methods in a single, fluent line.
 Chaining  not only reduces the amount of code needed but also improves readability and maintains a clear flow of logic. 
<br>This guide demonstrates how to chain four key operations in Openmadness: `omArray()`,`add`,`multiply`and`reshape`


---

1.  ### `omArray()` – Creating a matrix from input

 Creates a matrix-like object with the values given:


```javascript
const matrix = omArray([1, 2, 3, 4]);
```
**Output**:
`[1, 2, 3, 4]`

 You can also chain additional operations immediately after creating the matrix:

 
 ```javascript
const result = omArray([1, 2, 3, 4])
  .add(5)
  .multiply(2)
  .reshape(2, 2);
  ```
 **Output:**

`[`
  `[12, 14],`
  `[16, 18]`
`]`

2.  ### `add()` – Adding a Value to Each Element

```javascript
const result = omArray([1, 2, 3]).add(5);
```
`Output:`
`[6, 7, 8]`


You can also combine add() with other operations:
```javascript
const result = omArray([1, 2, 3])
  .add(5)
  .multiply(2);
  ```
Output:
`[12, 14, 16]`

3. ### `multiply()` – Multiplyiing Each Element
Multiplies each element in the matrix by the provided number.
```javascript
const result = omArray([1, 2, 3]).multiply(3);
```
Output:


    `[3, 6, 9]`


This is when its used in a chain:
```javascript
const result = omArray([1, 2, 3])
  .multiply(3)
  .add(1);
  ```
**Output:**
`[4, 7, 10]`


4. ### `reshape()` – Changing the Matrix Dimensions
Reshapes a one-dimensional matrix into a multi-dimensional format.
```javascript
const result = omArray([1, 2, 3, 4]).reshape(2, 2);
```

**Output:**

 `[ [1, 2],[3, 4]]`


Reshape can also be used after other operations:
```javascript
const result = omArray([1, 2, 3, 4, 5, 6])
  .add(10)
  .reshape(2, 3);
  ```

**Output:**
`[[11, 12, 13],   [14, 15, 16]]`

### Complete Chaining Example
Let's Combine multiple operations in a single expression:

```javascript
const finalResult = omArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
  .add(1)
  .multiply(2)
  .reshape(3, 3);
  ```

**Output:**

`[[4, 6, 8],[10, 12, 14],[16, 18, 20]]`

::: warning
Be careful when chaining methods that return a primitive value, like `.sum()`, because it will break the chain.
:::






