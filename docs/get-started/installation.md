---
title: Installation
description: Learn how to install OpenMadness in your project using your favorite package manager.
sidebarDepth: 2
editLink: true
---

## Installation 

Get started with OpenMadness by installing it in your development environment. This guide walks you through the steps to set it up for your project.

### Before You Begin

Make sure your environment meets these requirements:

-  Node.js **16.0.0** or later
-  A package manager (**npm**, **yarn**, or **pnpm**)
-  Basic familiarity with the **command line**

::: tip New to Node.js?
We recommend installing Node.js using **[Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)**.  
It lets you easily manage multiple Node.js versions on your machine.
:::

### Install Using a Package Manager

Pick your preferred package manager. Each will install the same version of OpenMadness.

::: tabs

@tab npm
```bash
npm install openmadness
@tab yarn

```bash
yarn add openmadness
@tab pnpm

```bash
pnpm add openmadness
:::

::: warning Warning
Avoid installing OpenMadness globally.
Local installation ensures each project uses its own version, prevents conflicts, and keeps your package.json dependencies clear for your team.
:::
### Project Structure
After installation, your project directory will look like this:
```psgsl
my-project/
├── node_modules/
│   └── openmadness/
├── src/
│   └── index.js
├── package.json
└── package-lock.json
```
#### Breakdown:
- `node_modules/openmadness/`: Contains the OpenMadness library files.

- `package.json`: Lists OpenMadness as a dependency.

- `package-lock.json`: Locks the exact versions for consistent installs.

### Verify Your Installation
Let’s quickly confirm OpenMadness is working:
- Verify the Package Import

Create a test file:
```js
// test-import.js
import openmadness from 'openmadness';

console.log('✓ Openmadness imported successfully');
console.log('Version:', openmadness.version);
```
Run it:
```bash
node test-import.js
```
Expected output:
```makefile
✓ Openmadness imported successfully
Version: 1.2.3
```
- Check Package Installation

Run this in your project directory:
```bash
npm list openmadness
```
It should display the installed version without errors.

- Validate project setup

Check that package.json includes OpenMadness:
```bash
grep -A 5 -B 5 "openmadness" package.json
```
You should see something like:
```json
"dependencies": {
  "openmadness": "^1.2.3"
}
```
### Troubleshooting
If things don’t work right away, try these steps:
- Clean Installation

Remove existing files:
```bash
rm -rf node_modules package-lock.json
```
Clear the npm cache:
```bash
npm cache clean --force
```
Reinstall your dependencies:
```bash
npm install
```
If your verification tests now pass, you’re ready to build with OpenMadness .
If not, check the Common Issues below.

### Common Issues
```bash
# "Module not found" error
- Ensure you're in the correct project directory.
- Run: npm ls openmadness
```
```bash
# Version conflicts
- Delete node_modules and the lock file:
  rm -rf node_modules package-lock.json
- Reinstall:
  npm install
```
That’s it. you have successfully installed OpenMadness in your project!   
You are now ready to start building powerful array operations and explore what OpenMadness can do.












