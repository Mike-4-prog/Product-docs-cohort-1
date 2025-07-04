---
title: Installation
description: This page is for installation of omArray
---

# Install Openmadness :rocket:

Get started with Openmadness by installing it in your development environment.

### Before you begin

Ensure you have:

- Node.js 16.0.0 or later
- A package manager (npm, yarn, or pnpm)
- Basic familiarity with the command line

**New to Node.js?** We recommend installing Node.js using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm), which lets you easily manage multiple Node.js versions.

### Install using a package manager

Choose your preferred package manager to install Openmadness. Each method will install the same version of Openmadness.

::: tabs#package_manager

@tab npm

```bash
npm install openmadness
```

@tab yarn

```bash
yarn add openmadness
```

@tab pnpm

```bash
pnpm add openmadness
```

:::

::: tip Tip
Avoid installing Openmadness globally to prevent version conflicts between projects. Local installation ensures each project uses its specific version and makes your dependencies explicit in `package.json` for better team collaboration.:smile:
:::

## Project Structure

After cloning the repository, your project structure should look like this:

```
my-project/ (your project root folder)
├── node_modules/
│   └── openmadness/
├── src/
│   └── index.js
├── package.json
└── package-lock.json
```

**Where:**

- **`node_modules/`** - Folder containing all installed npm packages (don't edit manually)
  - **`openmadness/`** - The installed openmadness package and its files
- **`src/`** - Contains your source code files
  - **`index.js`** - Your main JavaScript file where you'll use the openmadness package
- **`package.json`** - Project metadata, scripts, and dependency declarations
- **`package-lock.json`** - Auto-generated file ensuring consistent dependency versions

## Verify your installation

Verify that Openmadness is working correctly with these quick tests.

### Verify the package import

Create a test file to confirm Openmadness imports successfully:

```js
// test-import.js
import openmadness from "openmadness";

console.log("✓ Openmadness imported successfully");
console.log("Version:", openmadness.version);
```

Run the test:

```bash
node test-import.js
```

**Expected output:**

```
✓ Openmadness imported successfully
Version: 1.2.3
```

### Check package installation

Verify that Openmadness appears in your project dependencies:

```js
npm list openmadness
```

This command should display the installed version without errors.

### Validate project setup

Ensure your `package.json` includes Openmadness as a dependency:

```js
grep -A 5 -B 5 "openmadness" package.json
```

You should see an entry similar to:

```json
"dependencies": {
  "openmadness": "^1.2.3"
}
```

## Troubleshooting

If the verification steps above fail, try a clean installation.

### Remove existing files

```js
rm -rf node_modules package-lock.json
```

### Clear the npm cache

```js
npm cache clean --force
```

### Reinstall dependencies

```js
npm install
```

If these tests pass, you're ready to use Openmadness 🚀. If you encounter errors, see the common issues section below for specific solutions.

## Common issues

### "Module not found" error

- Ensure you're in the correct project directory
- Run `npm ls openmadness` to verify installation

### Version conflicts

- Clear your node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

## Next Steps

- 📖 Read the [Getting Started Guide](/get-started/get-started.md)
- 🚀 Check out [Basic Usage](/get-started/basic-usage.md)
- 📚 Try Openmadness out with the [Quick Start Guide](/get-started/quick-start.md)
