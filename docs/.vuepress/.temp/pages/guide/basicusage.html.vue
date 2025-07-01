<template><div><h1 id="openmadness-basic-usage" tabindex="-1"><a class="header-anchor" href="#openmadness-basic-usage"><span><strong>Openmadness: Basic Usage</strong></span></a></h1>
<p>Openmadness is an open-source JavaScript library designed to make mathematical and array-based operations easier. It is inspired by NumPy but designed with JavaScript developers in mind. Openmadness provides a clean, chainable API for working with numbers, arrays, and basic data manipulation. This section will help you understand and use the core features.</p>
<h2 id="how-to-install-openmadness" tabindex="-1"><a class="header-anchor" href="#how-to-install-openmadness"><span><strong>How to Install Openmadness</strong></span></a></h2>
<p>You can check the details to install the package at <strong>How to Install Openmadness</strong></p>
<p><strong>How to Import Openmadness</strong></p>
<p>You can import the library in your JavaScript file as follows:</p>
<table>
<thead>
<tr>
<th style="text-align:left">import {omArray } from 'openmadness';</th>
</tr>
</thead>
</table>
<h2 id="why-use-openmadness" tabindex="-1"><a class="header-anchor" href="#why-use-openmadness"><span><strong>Why Use Openmadness?</strong></span></a></h2>
<ul>
<li>It simplifies math operations in JavaScript.</li>
<li>It supports chaining and expressive syntax.</li>
<li>It reduces code complexity for beginners.</li>
<li>It’s great for learning and teaching array logic.</li>
</ul>
<h2 id="reading-the-example-code" tabindex="-1"><a class="header-anchor" href="#reading-the-example-code"><span><strong>Reading the Example Code</strong></span></a></h2>
<p>Code snippets in this document are written in modern JavaScript. All example code should be used inside a script file or Node.js environment. For example:</p>
<table>
<thead>
<tr>
<th style="text-align:left">const data = omArray([1, 2, 3]);const result = data.add(2).sum();console.log(result);</th>
</tr>
</thead>
</table>
<p>This example creates an array, adds 2 to each value, and then sums the results.</p>
<h2 id="what-is-an-array" tabindex="-1"><a class="header-anchor" href="#what-is-an-array"><span><strong>What is an Array?</strong></span></a></h2>
<p>In programming, an array is a collection of values stored in sequence. For example, [1, 2, 3] is an array with three values. Openmadness uses arrays as the base structure for operations such as addition, multiplication, and transformation.</p>
<h3 id="why-use-arrays-for-computation" tabindex="-1"><a class="header-anchor" href="#why-use-arrays-for-computation"><span><strong>Why use arrays for computation?</strong></span></a></h3>
<p>Arrays are ideal for numerical and matrix computations because they allow operations to be applied to entire collections of data at once. This approach avoids the need for writing complex loops, and improves performance through optimized operations. Libraries like Openmadness and NumPy use arrays because they can represent vectors, matrices, and higher-dimensional data in a compact and efficient format.</p>
<h2 id="creating-an-array-in-openmadness" tabindex="-1"><a class="header-anchor" href="#creating-an-array-in-openmadness"><span><strong>Creating an Array in Openmadness</strong></span></a></h2>
<p>You can create a one-dimensional array using the omArray() function. The following example creates an array with three numbers and prints it to the console:</p>
<table>
<thead>
<tr>
<th style="text-align:left">const a = omArray ([10, 20, 30]);console.log(a);</th>
</tr>
</thead>
</table>
<h2 id="basic-array-operations" tabindex="-1"><a class="header-anchor" href="#basic-array-operations"><span><strong>Basic Array Operations</strong></span></a></h2>
<p>Here’s how you perform simple operations:</p>
<table>
<thead>
<tr>
<th style="text-align:left">const data = omArray ([1, 2, 3]); const total = data.add(1).multiply(2).sum(); console.log(total);</th>
</tr>
</thead>
</table>
<h2 id="what-is-a-matrix" tabindex="-1"><a class="header-anchor" href="#what-is-a-matrix"><span><strong>What is a Matrix?</strong></span></a></h2>
<p>A matrix is a 2D array: it has rows and columns. For example, [[1, 2], [3, 4]] is a 2x2 matrix. Openmadness supports creating and manipulating matrices.</p>
<h2 id="matrix-operations-in-openmadness" tabindex="-1"><a class="header-anchor" href="#matrix-operations-in-openmadness"><span><strong>Matrix Operations in Openmadness</strong></span></a></h2>
<p>To work with two-dimensional data, you can use <code v-pre>omArray()</code> to create a matrix. The following example shows how to create a 2x2 matrix and transpose it (i.e., swap rows and columns):</p>
<table>
<thead>
<tr>
<th style="text-align:left">const matrix = omArray([   [1, 2],   [3, 4] ]); const transposed = matrix.transpose();console.log(transposed);</th>
</tr>
</thead>
</table>
<h1 id="openmadness-operations-–-code-examples" tabindex="-1"><a class="header-anchor" href="#openmadness-operations-–-code-examples"><span><strong>Openmadness Operations – Code Examples</strong></span></a></h1>
<p>This section explains the working examples of openmadness library. The examples are grouped by one-dimensional arrays and multi-dimensional matrices.Use these to better understand how each function behaves and what kind of inputs and outputs to expect.</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<h2 id="array-operations" tabindex="-1"><a class="header-anchor" href="#array-operations"><span><strong>Array Operations</strong></span></a></h2>
<p>Arrays are the foundation of data handling in Openmadness. The following examples show how to create and manipulate one-dimensional arrays using built-in methods like sum(), mean(), reshape(), and more.</p>
<p><strong>omArray()</strong></p>
<p>Use omArray() to build a one-dimensional array. It wraps your data and provides useful methods.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const arr = omArray([1, 2, 3]);</th>
</tr>
</thead>
</table>
<p><strong>sum()</strong></p>
<p>Adds all numbers in the array and gives a total.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const result = omArray([1, 2, 3]).sum();  // result is 6</th>
</tr>
</thead>
</table>
<p><strong>mean()</strong></p>
<p>Finds the average of all elements in the array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const avg = omArray([2, 4, 6]).mean();  // result is 4</th>
</tr>
</thead>
</table>
<p><strong>max()</strong></p>
<p>Returns the highest number from the array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const maxVal = omArray([1, 7, 3]).max();  // result is 7</th>
</tr>
</thead>
</table>
<p><strong>min()</strong></p>
<p>Returns the smallest number from the array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const minVal = omArray([1, 7, 3]).min(); // result is 1</th>
</tr>
</thead>
</table>
<p><strong>reshape()</strong></p>
<p>Turns a 1D array into a matrix with defined rows and columns.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const reshaped = omArray([1, 2, 3, 4]).reshape(2, 2);</th>
</tr>
</thead>
</table>
<p><strong>flatten()</strong></p>
<p>Turns a 2D matrix into a 1D array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const flat = omArray([[1, 2], [3, 4]]).flatten(); // result is [1, 2, 3, 4]</th>
</tr>
</thead>
</table>
<p><strong>dot()</strong></p>
<p>Performs a dot product (vector multiplication) on two equal-length arrays.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const a = omArray([1, 2]); const b = omArray([3, 4]); const dot = a.dot(b);  // result is 11</th>
</tr>
</thead>
</table>
<p><strong>add()</strong></p>
<p>Adds a number to each element in the array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const added = omArray([1, 2]).add(2); //result is [3, 4]</th>
</tr>
</thead>
</table>
<p><strong>subtract()</strong></p>
<p>Subtracts a number from each element in the array.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const sub = omArray([5, 4]).subtract(1);  // result is [4, 3]</th>
</tr>
</thead>
</table>
<p><strong>multiply()</strong></p>
<p>Multiplies each element in the array by a number.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const times = omArray([2, 3]).multiply(3);  // result is [6, 9]</th>
</tr>
</thead>
</table>
<p><strong>divide()</strong></p>
<p>Divides each element in the array by a number.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const div = omArray([10, 20]).divide(10);    // result is [1, 2]</th>
</tr>
</thead>
</table>
<p><strong>Logical Masking (filter)</strong></p>
<p>Keep only the items that match your condition.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const result = omArray([10, 20, 30]).filter(x =&gt; x &gt; 15); // result is [20, 30]</th>
</tr>
</thead>
</table>
<h2 id="matrix-operations" tabindex="-1"><a class="header-anchor" href="#matrix-operations"><span><strong>Matrix Operations</strong></span></a></h2>
<p><strong>omArray()</strong></p>
<p>Use omArray() with nested arrays to create a matrix (2D structure).</p>
<table>
<thead>
<tr>
<th style="text-align:left">const matrix = omArray([[1, 2], [3, 4]]);</th>
</tr>
</thead>
</table>
<p><strong>transpose()</strong></p>
<p>Switches rows with columns in a matrix.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const t = omArray([[1, 2], [3, 4]]).transpose();</th>
</tr>
</thead>
</table>
<p><strong>sum() on Transposed Matrix</strong></p>
<p>Adds all elements of the transposed matrix.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const result = omArray([[1, 2], [3, 4]]).transpose().sum();    // result is 10</th>
</tr>
</thead>
</table>
<p>// 10</p>
<p><strong>dot() for Matrices</strong></p>
<p>Performs matrix multiplication.</p>
<table>
<thead>
<tr>
<th style="text-align:left">const A = omArray([[1, 2], [3, 4]]);const B = omArray([[5, 6], [7, 8]]);const C = A.dot(B);</th>
</tr>
</thead>
</table>
<p><strong>reshape() for Matrix</strong></p>
<p>Changes the structure of a matrix (e.g. 1x4 to 2x2).</p>
<table>
<thead>
<tr>
<th style="text-align:left">const reshaped = omArray([1, 2, 3, 4]).reshape(2, 2);</th>
</tr>
</thead>
</table>
<p><strong>flatten() for Matrix</strong></p>
<p>Turns a matrix into a single row (1D array).</p>
<table>
<thead>
<tr>
<th style="text-align:left">const flat = omArray([[1, 2], [3, 4]]).flatten();</th>
</tr>
</thead>
</table>
<p>The Openmadness library offers a beginner-friendly, JavaScript-first approach to handling array and matrix operations. From simple one-dimensional arrays to complex multi-dimensional matrices, it allows you to perform powerful mathematical operations using clean, chainable methods.</p>
<p>Whether you're adding numbers, reshaping data, or calculating means and dot products, Openmadness helps you write efficient and readable code without the need for loops or manual data handling.</p>
</div></template>


