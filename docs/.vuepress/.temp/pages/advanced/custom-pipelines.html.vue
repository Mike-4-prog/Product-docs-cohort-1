<template><div><h1 id="openmadness-custom-pipelines" tabindex="-1"><a class="header-anchor" href="#openmadness-custom-pipelines"><span>OpenMadness Custom Pipelines</span></a></h1>
<p>This document explains how to create and use a custom data transformation pipeline in openMadness (om). A <code v-pre>pipeline</code> in openMadness is a chain of transformation functions that process data in sequential steps. It lets you chain a series of changes to an array, applying each one after the other. Each change is a self-contained function that takes an array, modifies it, and returns the new version without altering the original. This makes code more reusable and easier to manage.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><strong>WHAT YOU'LL COVER IN THIS SECTION:</strong></p>
<ul>
<li><strong>Architecture and Components of a Pipeline</strong></li>
<li><strong>How to create a Pipeline</strong></li>
<li><strong>Adding steps to the Pipeline</strong></li>
<li><strong>Executing the Pipeline</strong></li>
<li><strong>Using Built-in Transformations</strong></li>
<li><strong>Defining Custom Transformations</strong></li>
<li><strong>Example Use case</strong></li>
<li><strong>Error Handling and Validation</strong></li>
<li><strong>Best Practices</strong></li>
</ul>
</div>
<h2 id="architecture-and-components-of-a-pipeline" tabindex="-1"><a class="header-anchor" href="#architecture-and-components-of-a-pipeline"><span>Architecture and Components of a Pipeline</span></a></h2>
<p>The <code v-pre>pipeline</code> is a sequence of modular steps, each responsible for a specific task, designed to process <code v-pre>openMadness</code> arrays. The core components include:</p>
<ul>
<li><strong>Data Ingestion:</strong> Loads data from external sources (e.g., CSV, JSON) into an openMadness array.</li>
<li><strong>Transformers:</strong> Apply operations like standardization, filtering, or mathematical transformations.</li>
<li><strong>Validators:</strong> Ensure data quality by checking for outliers or invalid values.</li>
<li><strong>Output Handler:</strong> Exports the processed data to a file or external system.</li>
<li><strong>Pipeline Manager:</strong>  Manages the steps, ensuring proper data flow and error handling.</li>
</ul>
<h2 id="key-benefits-and-use-cases" tabindex="-1"><a class="header-anchor" href="#key-benefits-and-use-cases"><span>Key Benefits and Use Cases</span></a></h2>
<ul>
<li><strong>Data Preprocessing:</strong> Normalization, filtering, and feature extraction.</li>
<li><strong>Machine Learning:</strong> End-to-end training and evaluation.</li>
<li><strong>Batch Processing:</strong> Efficient handling of large datasets.</li>
</ul>
<h2 id="how-to-create-a-pipeline" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-pipeline"><span>How to Create a Pipeline</span></a></h2>
<p>You can create a pipeline by initialization of a new instance of the <code v-pre>Pipeline</code> class. This object manages a list of transformation functions.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Pipeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">openmadness</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>This sets up an empty pipeline ready to accept transformation steps.</p>
</div>
<h2 id="adding-steps-to-the-pipeline" tabindex="-1"><a class="header-anchor" href="#adding-steps-to-the-pipeline"><span>Adding Steps to the Pipeline</span></a></h2>
<p>Each step in the pipeline is a pure function that takes in an array and returns a transformed version. You can add as many steps as needed using the <code v-pre>.addStep()</code> method.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">   pipeline</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment">// Multiply all elements by 2</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment">// Subtract 1 from all elements</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment">// Keep elements greater than 5</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Start from index 0 and slice through by 2 steps </span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="executing-the-pipeline" tabindex="-1"><a class="header-anchor" href="#executing-the-pipeline"><span>Executing the Pipeline</span></a></h2>
<p>Run the pipeline using the <code v-pre>.run(input)</code> method. This will pass the input through all the added steps in order.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pipeline-breakdown" tabindex="-1"><a class="header-anchor" href="#pipeline-breakdown"><span>Pipeline Breakdown</span></a></h3>
<p>Let's break down the pipeline step by step with the given input [1, 5, 10, 15, 20]:</p>
<p><strong>Step 1: Multiply all elements by 2</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Result is [2, 10, 20, 30, 40]</p>
<p><strong>Step 2: Subtract 1 from all elements</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Result is [1, 9, 19, 29, 39]</p>
<p><strong>Step 3: Keep elements greater than 5</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Result is [9, 19, 29, 39]</p>
<p><strong>Step 4: Slice through by 2 steps starting from index 0</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Result is [9, 29]</p>
<h3 id="putting-it-all-together" tabindex="-1"><a class="header-anchor" href="#putting-it-all-together"><span>Putting it all together</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">   <span class="token keyword">import</span> <span class="token punctuation">{</span> Pipeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'openmadness'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                <span class="token comment">// Multiply all elements by 2</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                <span class="token comment">// Subtract 1 from all elements</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment">// Keep elements greater than 5</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">addStep</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Start from index 0 and slice through by 2 steps </span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [9, 29]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The final output after applying all pipeline steps is [9, 29].</p>
</div>
</div></template>


