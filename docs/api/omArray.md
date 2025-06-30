# 📘 Array Reconstructor

## Overview

The **Array Reconstructor** is a utility function used to restore an original array from a compressed or transformed format. It is particularly useful in scenarios where data has been optimized for storage, performance, or transmission and needs to be converted back into a usable array structure.

This function is frequently applied in frontend applications, caching layers, or data manipulation scripts where arrays are encoded and later decoded for display or processing.

### Parameters

| Parameter       | Type  | Description                                                                       |
| --------------- | ----- | --------------------------------------------------------------------------------- |
| compressedArray | Array | An array representing compressed input. The format depends on the encoding logic. |

### Returns

| Type  | Description                                    |
| ----- | ---------------------------------------------- |
| Array | A reconstructed array based on the input logic |

## Functionality

### How It Works

The function processes a compressed input (e.g., using key-value pairs or run-length encoding) and rebuilds the array to reflect its original structure. A common implementation might expect input like:

```js
[[value, count], [value, count], ...]
```

This means value appears count times in sequence. The function loops through each pair and expands the array accordingly.
Examples

1. Reconstructing a Run-Length Encoded Array

```js
function reconstructArray(compressed) {
	const result = [];
	for (const [value, count] of compressed) {
		for (let i = 0; i < count; i++) {
			result.push(value);
		}
	}
	return result;
}

const input = [
	[1, 3],
	[2, 2],
	[5, 1],
];
const original = reconstructArray(input);

console.log(original); // Output: [1, 1, 1, 2, 2, 5]
```

2. Handling Single Entry

```js
const single = [[7, 5]];
console.log(reconstructArray(single)); // Output: [7, 7, 7, 7, 7]
```

## ⚠️ Common Issues

| Issue               | Cause                                | Solution                            |
| ------------------- | ------------------------------------ | ----------------------------------- |
| Empty result array  | Invalid or empty input array         | Validate input before processing    |
| Unexpected behavior | Non-numeric count or malformed pairs | Add error handling and input checks |
| Performance issues  | Very large counts in compression     | Optimize loop logic if needed       |

## Parameters

### Parameters

- element1, …, elementN
  Initializes an array with the provided elements unless a single numeric argument is passed.

- arrayLength
  If only one numeric argument is provided (between 0 and 2³² - 1), creates an array of that length with empty slots.

## Exceptions

- RangeError
  Thrown when arrayLength is not an integer or is outside the accepted range.

## Examples

1. **Array Literal**
   const fruits = ["Apple", "Banana"];
   console.log(fruits.length); // 2
   console.log(fruits[0]); // "Apple"

2. **Single Numeric Parameter**
   const arrayEmpty = new Array(3);
   console.log(arrayEmpty.length); // 3
   console.log(0 in arrayEmpty); // false (empty slot)

3. **Single String Parameter**
   const arrayOfOne = new Array("3");
   console.log(arrayOfOne.length); // 1
   console.log(arrayOfOne[0]); // "3"

4. **Multiple Elements**
   const mixed = new Array("a", "b", "c");
   console.log(mixed.length); // 3

## Specification

ECMAScript® 2026 Language Specification
Array Constructor – ECMAScript Spec

## Browser Compatibility

The Array() constructor is fully supported across all modern browsers.
