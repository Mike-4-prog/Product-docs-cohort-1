---
home: true
heroText: ""
tagline: ""
footer: MIT Licensed | Copyright © 2025-present omArray Community
---

<section id="hero">
  <!-- <img id="uwu" alt="OmArray Logo" src="/images/logs.png"/> -->
  <h1 class="tagline">
    Build arrays the smart way with <br />
    <span class="accent">OmArray</span>
  </h1>
  <p class="description">
    A lightweight JavaScript array utility library built for performance and clarity.
  </p>

  <div class="action-cards">
    <a class="card accent-card" href="/get-started/introduction.html">
      <h3>🚀 Get Started</h3>
    </a>
  </div>
</section>

<style scoped>
#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 auto;
  max-width: 960px;
}

html:not(.dark) .accent,
.dark .tagline {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 20px;
  margin: 24px auto 40px;
  max-width: 720px;
  color: var(--vt-c-text-2);
}

.action-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
}

.card {
  display: block;
  width: 260px;
  padding: 3px;
  border-radius: 12px;
  background-color: navyblue;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.card h3 {
  margin-bottom: 8px;
  font-size: 25px;
  padding-bottom: 14px;
}

.card p {
  font-size: 14px;
  color: var(--vt-c-text-2);
}

/* Accent Button Style */
.accent-card {
  border: 2px solid transparent;
  background-image: linear-gradient(var(--vt-c-bg-soft), var(--vt-c-bg-soft)), 
    linear-gradient(315deg, #42d392, #647eff);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.accent-card.secondary {
  background-image: linear-gradient(var(--vt-c-bg-soft), var(--vt-c-bg-soft)), 
    linear-gradient(315deg, #647eff, #42d392);
}
a {
  text-decoration: none !important; 
}

.accent-card {
  background: linear-gradient(135deg, #42d392 0%, #647eff 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.accent-card:hover {
  background: linear-gradient(135deg, #3acb85 0%, #4d62ee 100%);
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.accent-card h3,
.accent-card p {
  color: #fff;
}
</style>
