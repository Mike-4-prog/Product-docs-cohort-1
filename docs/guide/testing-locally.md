---
title:Testing Locally – Setting Up a Dev/Testing Environment
--- 
## Testing Locally – Setting Up a Dev/Testing Environment

Before making your first contribution or testing a new feature in
OpenMadness, it's important to set up your local environment properly.
In this guide, we will walk you through the process of getting
everything ready, running the project locally, and making sure your
changes don't break anything.


::: tip 
This guide assumes you are a bit familiar with using the terminal and
installing software on your computer. Don’t worry, we will keep things
beginner-friendly!
:::


### Prerequisites
Before you begin, make sure you have the following installed:

- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/en/)** (v18 or higher recommended)
- **[Yarn](https://yarnpkg.com/getting-started/install)** (we use Yarn
instead of npm)
- **A code editor**, like [VS Code](https://code.visualstudio.com/)
- **A modern browser**, like Chrome or Firefox

You can check if you have these tools installed by running:
```bash
git --version
node -v
yarn -v
```
If you see version numbers as output, you are good to go!
### Cloning the Project
Let’s start by downloading the OpenMadness project to your machine:
```bash
git clone https://github.com/openmadness/Product-docs-cohort-1.git
cd Product-docs-cohort-1
```

::: tip 
If you are working in a team or on a specific feature, make sure you are on the correct branch:
:::

```bash
git checkout your-feature-branch
```
### Setting Up a Local Test Environment
##### Initialize a Node.js Project
Create a new folder and run:
```bash
npm init -y
```
#### Install OpenMadness
Install openmadness via:
```bash
npm install openmadness-array --save-dev
```
#### Create a Test File
Make a test.js file and import OpenMadness:
```javascript
const { OMArray } = require('openmadness-array');
```
### Writing Tests for OpenMadness Arrays

#### Example 1: Basic Array Operations
Let us start by test-creating and manipulating an OpenMadness array:
```javascript
// Create an OpenMadness array
const numbers = new OMArray([1, 2, 3, 4, 5]);

// Test sum operation
const sum = numbers.sum(); // Hypothetical method
console.log(sum === 15 ? "✅ Sum test passed!" : "❌ Sum test failed!");
```
#### Example 2: Matrix Operations
OpenMadness supports matrix multiplication:
```javascript
const matrixA = new OMArray([[1, 2], [3, 4]]);
const matrixB = new OMArray([[5, 6], [7, 8]]);

const result = matrixA.matMul(matrixB); // Hypothetical method
console.log(result); // Should log [[19, 22], [43, 50]]
```

::: tip 
Use console.assert() for better test feedback:
:::

```javascript
console.assert(result.data[0][0] === 19, "❌ Matrix multiplication failed!");
```
### Running Tests
Execute your test file with Node.js:
```bash
node test.js
```
For better testing, consider using a test runner like:
- [Jest](https://jestjs.io/)
- [Mocha](https://mochajs.org/)

Example with Jest:
Install Jest:
```bash
npm install --save-dev jest
```
Write a test:
```javascript
test('OMArray sum works correctly', () => {
  const arr = new OMArray([10, 20, 30]);
  expect(arr.sum()).toBe(60);
});
```
Run tests:
```bash
npx jest
```
### Further Reading
- [JavaScript Array Documentation
(MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Jest Testing Bascis](https://jestjs.io/docs/getting-started)

Testing locally ensures your OpenMadness array operations work
correctly before moving to production. Try different methods, edge
cases, and integrate a test framework for smoother workflows!

Happy testing! 🚀