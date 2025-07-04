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
- **Machine Learning Workflow**
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

## Using Built-in Transformations
`openMadness` comes with a rich set of built-in transformation functions that simplify data preprocessing and manipulation. These transformations are designed to be:

- **Composable:** You can chain multiple transformations in a pipeline.
- **Pure:** They don’t mutate input arrays; instead, they return new arrays.
- **Reusable:** Many transformations are parameterized and can be used across different datasets.

Built-in transformations are accessible via the `transforms` module.

### Importing Built-in Transforms
To use the built-in functions, import the `transforms` object from the library:
```js
  import {transforms} from 'openMadness';
```
#### Common Built-in Transformations

1. `transforms.normalize()`: Performs min-max normalization, scaling all values in the array to fall within the [0, 1] range.

**Example: Normalize temperature readings for model training**
```js
  const data = [10, 20, 30, 40, 50];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.normalize());

  console.log(pipeline.run());
  // Output: [0, 0.25, 0.5, 0.75, 1]

```

2. `transforms.standardize()`: Applies z-score standardization, transforming values to have a mean of 0 and standard deviation of 1.

**Example: Prepare data for algorithms that assume standardized input, like logistic regression.**
```js
  const data = [5, 10, 15, 20];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.standardize());

  console.log(pipeline.run());
  // Output: [-1.1619, -0.3873, 0.3873, 1.1619] (approx.)

```

3. `transforms.scale(factor)`: Multiplies each value in the array by the specified `factor`.

**Example: Convert units, such as meters to centimeters (×100).**

```js
  const data = [1, 2, 3, 4];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.scale(100));

  onsole.log(pipeline.run());
  // Output: [100, 200, 300, 400]

```

4. `transforms.clip(min, max)`: Constrains all values to fall within the range `[min, max]`.

**Example: Limit outlier values that exceed a defined threshold.**

```js
  const data = [-5, 0, 10, 15, 25];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.clip(0, 20));

  console.log(pipeline.run());
  // Output: [0, 0, 10, 15, 20]

```

5. `transforms.fillMissing(strategy, value)`: Handles missing values (`null`, `undefined`, `NaN`) using various strategies:
- `"mean"` – replaces missing values with mean of array.
- `"constant"` – replaces with a specific value.

**Example: Ensure completeness of data for model input.** Fill with mean

```js
  const data = [10, null, 30, undefined, 50];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.fillMissing("mean"));

  console.log(pipeline.run());
  // Output: [10, 30, 30, 30, 50] (mean = 30)

```
Alternatively, you can fill them with a constatnt

```js
  const pipeline = new Pipeline()
    .addStep(() =>[10, null, 30, undefined, 50];
    .addStep(transforms.fillMissing("constant", 0));

  console.log(pipeline.run());
  // Output: [10, 0, 30, o, 50]

```

6. `transforms.removeDuplicates()`: Removes all duplicate values from the array while preserving the original order.

**Example: Avoid repeated entries in datasets that can skew results.**

```js
  const data = [2, 4, 4, 6, 2, 8];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.removeDuplicates());

  console.log(pipeline.run());
  // Output: [2, 4, 6, 8]

```

7. `transforms.round(decimals)`: Rounds each value in the array to a fixed number of decimal places.

**Example: Display or export results with fixed precision.**

```js
  const data = [1.2345, 2.3456, 3.4567];

  const pipeline = new Pipeline()
    .addStep(() => data)
    .addStep(transforms.round(2));

  console.log(pipeline.run());
  // Output: [1.23, 2.35, 3.46]

```

### Composing Multiple Built-in Transforms
Built-in transformations are designed to be chained together:
```js
  const pipeline = new Pipeline()
    .addStep(() => [5, 10, 15, 20])
    .addStep(transforms.normalize())
    .addStep(transforms.scale(100))
    .addStep(transforms.round(1));

  console.log(pipeline.run());
  // Output: [0, 33.3, 66.7, 100]

```


## Using Custom Transformation
A custom transformation is a user-defined function that transforms input data in a specific way. While openMadness provides built-in transformations like normalize() or clip(), custom transformations give you the flexibility to:

- Apply domain-specific logic
- Handle complex data manipulations
- Extend your pipeline with behavior that isn’t covered by built-ins
 
```js
  function transformFn(inputArray) => outputArray
```
They must:
- Accept an array (or matrix) as input
- Return a transformed array
- Be pure (no side effects unless explicitly needed)

### Example Use Cases
1. **Square Each Element:** You're working with a numerical dataset and want to add a squared feature to each element.

```js
  function squareElements(arr) {
   return arr.map(x => x ** 2);
  }

  const pipeline = new Pipeline()
    .addStep(() => [1, 2, 3, 4, 5])
    .addStep(squareElements);

  console.log(pipeline.run()); 
  // Output: [1, 4, 9, 16, 25]

```

2. **Apply Thresholding (Binary Classification):** Convert numerical scores into binary categories (e.g., 1 if score ≥ 0.5, else 0).
```js
  function thresholdBinary(arr, threshold = 0.5) {
    return arr.map(x => (x >= threshold ? 1 : 0));
  }
  const pipeline = new Pipeline()
    .addStep(() => [0.1, 0.6, 0.4, 0.9])
    .addStep(makeThresholdFn(0.5));

  console.log(pipeline.run()); 
  // Output: [0, 1, 0, 1]

```

3. **Remove Outliers Based on Standard Deviation:** Filter out values that are more than 2 standard deviations from the mean.

```js
  function removeOutliers(arr) {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    const std = Math.sqrt(arr.reduce((acc, x) => acc + (x - mean) ** 2, 0) / arr.length);
    return arr.filter(x => Math.abs(x - mean) <= 2 * std);
  }
  const pipeline = new Pipeline()
    .addStep(() => [10, 12, 13, 11, 100]) // 100 is an outlier
    .addStep(removeOutliers);

  console.log(pipeline.run());
  // Output: [10, 12, 13, 11]

```
4. **Tokenize Text:** You're analyzing user input or natural language data and need to tokenize it (split by whitespace).
```js
  function tokenizeText(arr) {
    return arr.map(str => str.toLowerCase().split(/\s+/));
  }
  const pipeline = new Pipeline()
    .addStep(() => ["Hello World", "OpenMadness is powerful"])
    .addStep(tokenizeText);

  console.log(pipeline.run());
  // Output: [['hello', 'world'], ['openmadness', 'is', 'powerful']]

```
5. **Normalize Range to [-1, 1]:** Scale values between -1 and 1 instead of the usual 0–1.
```js
  function normalizeToUnitRange(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return arr.map(x => (2 * (x - min)) / (max - min) - 1);
  }
  const pipeline = new Pipeline()
    .addStep(() => [10, 20, 30, 40, 50])
    .addStep(normalizeToUnitRange);

  console.log(pipeline.run());
  // Output: [-1, -0.5, 0, 0.5, 1]

```

## Machine Learning Workflow
### Data Ingestion
This step is responsible for loading or parsing the raw data. In most cases, this could be reading from a file, converting CSV, or pulling from an API.

```js
  const loadData = () => [10, 15, 20, null, 25, 30];

  pipeline.addStep(loadData);

```
You can also validate in this step:

```js
  const cleanNulls = (arr) => arr.filter(x => x !== null);

  pipeline.addStep(cleanNulls);

```
### Data Preprocessing
Preprocessing transforms the raw data into a clean and consistent format ensuring data quality, consistency, and reliability before you proceed with transformations, modeling, or analysis..
```js
  import { transforms } from 'openmadness';

  // Normalize to [0, 1]
  pipeline.addStep(transforms.normalize());

  // Clip extreme values
  pipeline.addStep(transforms.clip(0, 1));

```
#### Removing Duplicates
Removing duplicates is a common preprocessing step to ensure that repeated values or rows do not skew analysis, especially in statistical calculations or training machine learning models.
```js
  import { Pipeline } from 'openmadness';

  const pipeline = new Pipeline()
    .addStep(() => [2, 4, 4, 6, 2, 8, 10]) // Initial data with duplicates
    .addStep(removeDuplicates);

  const result = pipeline.run();
  console.log(result); // Output: [2, 4, 6, 8, 10]

```
:::note
 Result is: [2, 4, 6, 8, 10]
:::

#### Handling Missing Values
Missing values (e.g., `null`, `undefined`, or `NaN`) can break transformations or skew model training. You should either:
- Remove them
- Replace them (impute) with defaults like mean or zero

```js
  const pipeline = new Pipeline()
    .addStep(() => [2, null, 4, undefined, 6, NaN, 8])
    .addStep(dropMissing);

  const result = pipeline.run();
  console.log(result); // Output: [2, 4, 6, 8]

```
:::note
Result is: [2, 4, 6, 8]
:::

#### Standardizing formats
Standardizing formats ensures that values follow a consistent type or representation. This is crucial when:

- You mix numbers and strings (e.g., `"2"` vs `2`).
- You receive data from various inconsistent sources.

```js
  const pipeline = new Pipeline()
    .addStep(() => ["2", 4, "6", "08", 10])
    .addStep(standardizeToNumber);

  const result = pipeline.run();
  console.log(result); // Output: [2, 4, 6, 8, 10]

```
:::note
Result is: [2, 4, 6, 8]
:::

### Feature Engineering
Feature engineering is the process of transforming raw data into meaningful input for models. It plays a critical role in determining the success of any machine learning pipeline, by helping models understand data better, reduce noise, and often lead to significant performance improvements.

Common Techniques for Feature Engineering include:
- Aggregating existing data
- Applying domain logic
- Encoding categorical values

#### Aggregating existing data
Aggregation involves summarizing or combining values from multiple rows or columns into a single or smaller number of features. It’s useful when:

- Working with grouped data (e.g., by time, region)
- Reducing dimensionality
- Creating statistical summaries like mean, max, count, etc.

**Calculate the average of tensor readings**
```js 
  const readings = [10, 20, 30, 40, 50];

  const average = arr => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const mean = sum / arr.length;
    return [mean]; // Return as array for pipeline compatibility
  };

  const pipeline = new Pipeline()
    .addStep(() => readings)
    .addStep(average);

  console.log(pipeline.run()); // Output: [30]

```
#### Applying Domain Logic
Domain logic refers to encoding knowledge from the specific problem domain into your features. This could mean:
- Creating risk scores
- Categorizing based on rules
- Deriving conditions that models would find hard to infer directly

**F**

```js 
  const ages = [15, 22, 35, 48, 67];

  const ageGroup = (arr) => arr.map(age => {
   if (age < 18) return 'Minor';
   if (age < 40) return 'Adult';
   return 'Senior';
  });

  const pipeline = new Pipeline()
   .addStep(() => ages)
   .addStep(ageGroup);

  console.log(pipeline.run()); 
  // Output: ['Minor', 'Adult', 'Adult', 'Senior', 'Senior']

```
#### Encoding Categorical Values
Machine learning models typically require numerical inputs. Encoding converts categorical (non-numeric) data like labels, gender, or countries into numeric formats. Common techniques are:

- Label Encoding – map categories to integers
- One-Hot Encoding – convert categories into binary vectors

**Label Encoding of Colors**
```js 
  const colors = ['red', 'blue', 'green', 'red', 'blue'];

  const labelEncode = (arr) => {
    const labels = [...new Set(arr)];
    const map = Object.fromEntries(labels.map((v, i) => [v, i]));
    return arr.map(v => map[v]);
  };

  const pipeline = new Pipeline()
    .addStep(() => colors)
    .addStep(labelEncode);

  console.log(pipeline.run()); 
  // Output: [0, 1, 2, 0, 1]

```

### Model Training
Model training is the process of training a machine learning model using the preprocessed data. This step is essential in developing a predictive model that can make accurate predictions.

```js
  class DummyModel {
   train(inputs, targets) {
     this.coefficient = 0.5; // Mock logic
    }
  }

  const model = new DummyModel();

  pipeline.addStep(inputs => {
    const targets = [5, 10, 15, 20]; // Example target values
     model.train(inputs, targets);
     return inputs;
  });
  console.log(model.coefficient); // Output: 0.5
```
### Model Evaluation
Model evaluation is the process of assessing the performance of the trained model. This step is crucial in determining the model's accuracy and reliability. Evaluation computes metrics like accuracy, Mean Squared Error (MSE), etc., and optionally logs or returns them.

```js 
  pipeline.addStep(inputs => {
   const predictions = inputs.map(x => x * model.coefficient);
   const labels = [5, 10, 15, 20];

  const mse = labels.reduce((sum, actual, i) => {
    const error = predictions[i] - actual;
    return sum + error ** 2;
  }, 0) / labels.length;

  console.log('Mean Squared Error:', mse);
  return inputs;
});

```
### Model Deployment
Model deployment is the process of deploying the trained model in a production environment. This step is essential in making the model available for use in real-world applications. Deployment may involve exporting the model, serializing weights, or making predictions live.

```js
  pipeline.addStep(inputs => {
    const predictions = inputs.map(x => x * model.coefficient);
    console.log('Deployed Predictions:', predictions);
    return predictions;
 });

```
:::note
You could also store the model in a database or write to a file, depending on your app environment.
:::
