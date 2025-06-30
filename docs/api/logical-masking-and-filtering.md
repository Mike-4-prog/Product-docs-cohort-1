---
title: Logical Masking and Filtering
---
## Logical Masking and Filtering
Openmadness makes it easy to filter and manipulate arrays using logical masking—a powerful technique inspired by NumPy. Whether you're cleaning data, selecting specific elements, or applying conditions, logical masking helps you do it efficiently.
### What is Logical Masking?
Logical masking lets you use boolean conditions (true/false) to filter or modify arrays. Instead of writing complex loops, you can apply a condition directly to an array to get the values you need.
##### Basic Example: Filtering Numbers:
```javascript
import { filter } from 'openmadness';  

const numbers = [10, 20, 30, 40, 50];  
const mask = numbers.map(num => num > 25); // [false, false, true, true, true]  
const filteredNumbers = filter(numbers, mask); // [30, 40, 50]  
```
::: tip NOTE
Think of it like a stencil: The mask acts as a filter, letting only true values pass through.
:::

### Creating Masks Dynamically
Instead of manually writing conditions, OpenMadness provides helper functions:
```javascript
import { gt, where } from 'openmadness';  

const temperatures = [22, 18, 25, 30, 15];  
const hotDays = gt(temperatures, 25); // [false, false, false, true, false]  
const filteredTemps = where(temperatures, hotDays); // [30]  
```
##### Common Masking Operations:

| Function | Example | Description |
|----------|---------|-------------|
| `eq(a, b)` | `eq(arr, 5)` | Values **equal to** 5 |
| `gt(a, b)` | `gt(arr, 10)` | Values **greater than** 10 |
| `lt(a, b)` | `lt(arr, 0)` | Values **less than** 0 |
| `and(mask1, mask2)` | `and(maskA, maskB)` | Combine masks (logical AND) |
| `or(mask1, mask2)` | `or(maskA, maskB)` | Combine masks (logical OR) |

::: tip NOTE
These functions work with both arrays and scalar values!
:::

### Advanced: Modifying Masked Values
You can also replace values based on a mask:
```javascript
import { setWhere } from 'openmadness';  

const scores = [85, 92, 45, 67, 88];  
const failing = lt(scores, 60);  
const updatedScores = setWhere(scores, failing, 60); // [85, 92, 60, 67, 88]  
```
🚀 Pro Tip: Use setWhere for data cleaning (e.g., replacing outliers or invalid entries).

Practical Use Cases:
- Data Cleaning – Filter out invalid or missing values.

- Conditional Calculations – Apply operations only to selected elements.

- Feature Selection – Extract specific parts of a dataset.

Example - Filtering User Data:
```javascript
const users = [  
  { name: "Alice", age: 25 },  
  { name: "Bob", age: 17 },  
  { name: "Charlie", age: 30 }  
];  

const adults = users.filter(user => user.age >= 18);  
// OpenMadness equivalent (if working with arrays of objects)  
```

##### Key Takeaways
✔ No more manual loops – Apply conditions directly.

✔ Combine masks for complex filtering.

✔ Modify selected values without altering the whole array.

Logical masking makes array filtering clean, fast, and readable. Try it in your next project! 🎯





