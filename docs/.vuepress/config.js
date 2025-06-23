import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  lang: "en-US",

  title: " ",
  description: " ",

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["meta", { name: "description", content: "" }],
  ],

  theme: defaultTheme({
    logo: "/images/logs.png",

    navbar: [
      {
        text: "API",
        link: "api/omArray",
      },

      {
        text: "GitHub",
        link: "https://github.com/Mike-4-prog/Product-docs-cohort-1.git",
      },
    ],
    sidebar: [
      {
        text: "Getting Started",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            text: "Introduction",
            link: "get-started/introduction",
          },
          {
            text: "Installation",
            link: "get-started/installation",
          },
          {
            text: " Basic Usage",
            link: "get-started/basic-usage",
          },
        ],
      },

      {
        text: "Guide",
        collapsable: true,
        sidebarDepth: 1,

        children: [
          {
            text: "Working with omArray",
            link: "guide/working-with-omArray",
          },
          {
            text: "Chaining Operations",
            link: "guide/chaining-operations",
          },
          {
            text: "Multi-dimensional Arrays",
            link: "guide/multi-dimensional-arrays",
          },
          {
            text: "Testing Locally",
            link: "guide/testing-locally",
          },
        ],
      },
      {
        text: "API Reference",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            text: "omArray",
            link: "api/omArray",
          },
          {
            text: "Operations",
            link: "api/operations",
          },
          {
            text: "Logical Masking and Filtering",
            link: "api/logical-masking-and-filtering",
          },
        ],
      },
      {
        text: "Advanced",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            text: "Custom Pipelines",
            link: "advanced/custom-pipelines",
          },
          {
            text: "Performance Tips",
            link: "advanced/performance-tips",
          },
          {
            text: "Contributing",
            link: "advanced/contribute",
          },
        ],
      },
      {
        text: "FAQ",
        link: "faq",
      },
      {
        text: "Troubleshooting",
        link: "/troubleshoot",
      },
    ],
  }),

  bundler: webpackBundler(),
});
