---
title: OpenMadness Custom Pipelines
description: 
---

# OpenMadness Custom Pipelines
This document explains how to create and use a custom data transformation pipeline in openMadness (om). A `pipeline` in openMadness is a chain of transformation functions that process data in sequential steps. It lets you chain a series of changes to an array, applying each one after the other. Each change is a self-contained function that takes an array, modifies it, and returns the new version without altering the original. This makes code more reusable and easier to manage.

:::tip
**WHAT YOU'LL COVER IN THIS SECTION:**
- **Architecture and Components of a Pipeline**
- **How to create a Pipeline**
- **Adding steps to the Pipeline**
- **Executing the Pipeline**
- **Using Built-in Transformations**
- **Defining Custom Transformations**
- **Example Use case**
- **Error Handling and Validation**
- **Best Practices**

:::

## Architecture and Components of a Pipeline
The `pipeline` is a sequence of modular steps, each responsible for a specific task, designed to process `openMadness` arrays. The core components include:
- **Data Ingestion:** Loads data from external sources (e.g., CSV, JSON) into an openMadness array.
- **Transformers:** Apply operations like standardization, filtering, or mathematical transformations.
- **Validators:** Ensure data quality by checking for outliers or invalid values.
- **Output Handler:** Exports the processed data to a file or external system.
- **Pipeline Manager:**  Manages the steps, ensuring proper data flow and error handling.


## Key Benefits and Use Cases
- **Data Preprocessing:** Normalization, filtering, and feature extraction.
- **Machine Learning:** End-to-end training and evaluation.
- **Batch Processing:** Efficient handling of large datasets.

## How to Create a Pipeline
You can create a pipeline by initialization of a new instance of the `Pipeline` class. This object manages a list of transformation functions.

```js
import { Pipeline } from `openmadness`;
const pipeline = new Pipeline();
```

:::note 
This sets up an empty pipeline ready to accept transformation steps.
:::
 
## Adding Steps to the Pipeline
Each step in the pipeline is a pure function that takes in an array and returns a transformed version. You can add as many steps as needed using the `.addStep()` method.

```js
   pipeline
    .addStep(arr => arr.map(x => x * 2))             // Multiply all elements by 2
    .addStep(arr => arr.map(x => x - 1))             // Subtract 1 from all elements
    .addStep(arr => arr.filter(x => x > 5))          // Keep elements greater than 5
    .addStep(arr=> arr.filter(x,i) => i % 2 === 0);   // Start from index 0 and slice through by 2 steps 

```
## Executing the Pipeline
Run the pipeline using the `.run(input)` method. This will pass the input through all the added steps in order.
```js
  const input = [1, 5, 10, 15, 20];
  const result = pipeline.run(input);

  console.log(result); 
```

### Pipeline Breakdown
Let's break down the pipeline step by step with the given input [1, 5, 10, 15, 20]:

**Step 1: Multiply all elements by 2** 
```js
  arr.map(x => x * 2)
```
Result is [2, 10, 20, 30, 40]

**Step 2: Subtract 1 from all elements**
```js
  arr.map(x => x - 1)
```

Result is [1, 9, 19, 29, 39]

**Step 3: Keep elements greater than 5**
```js
  arr.filter(x => x > 5)
```
Result is [9, 19, 29, 39]

**Step 4: Slice through by 2 steps starting from index 0**
```js
  arr.filter((x, i) => i % 2 === 0)
```
Result is [9, 29]

### Putting it all together
```js
   import { Pipeline } from 'openmadness';

   const pipeline = new Pipeline()
  .addStep(arr => arr.map(x => x * 2))                // Multiply all elements by 2
  .addStep(arr => arr.map(x => x - 1))                // Subtract 1 from all elements
  .addStep(arr => arr.filter(x => x > 5))             // Keep elements greater than 5
  .addStep(arr => arr.filter((x, i) => i % 2 === 0)); // Start from index 0 and slice through by 2 steps 

  const input = [1, 5, 10, 15, 20];
  const result = pipeline.execute(input);

  console.log(result); // Output: [9, 29]
```

:::tip
The final output after applying all pipeline steps is [9, 29].
:::
