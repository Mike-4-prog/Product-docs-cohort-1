export const themeData = JSON.parse("{\"logo\":\"/images/logs.png\",\"navbar\":[{\"text\":\"API\",\"link\":\"api/omArray\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/Mike-4-prog/Product-docs-cohort-1.git\"}],\"sidebar\":[{\"text\":\"Getting Started\",\"collapsable\":false,\"sidebarDepth\":1,\"children\":[{\"text\":\"Introduction\",\"link\":\"get-started/introduction\"},{\"text\":\"Installation\",\"link\":\"get-started/installation\"},{\"text\":\" Basic Usage\",\"link\":\"get-started/basic-usage\"}]},{\"text\":\"Guide\",\"collapsable\":true,\"sidebarDepth\":1,\"children\":[{\"text\":\"Working with omArray\",\"link\":\"guide/working-with-omArray\"},{\"text\":\"Chaining Operations\",\"link\":\"guide/chaining-operations\"},{\"text\":\"Multi-dimensional Arrays\",\"link\":\"guide/multi-dimensional-arrays\"},{\"text\":\"Testing Locally\",\"link\":\"guide/testing-locally\"}]},{\"text\":\"API Reference\",\"collapsable\":true,\"sidebarDepth\":1,\"children\":[{\"text\":\"omArray\",\"link\":\"api/omArray\"},{\"text\":\"Operations\",\"link\":\"api/operations\"},{\"text\":\"Logical Masking and Filtering\",\"link\":\"api/logical-masking-and-filtering\"}]},{\"text\":\"Advanced\",\"collapsable\":true,\"sidebarDepth\":1,\"children\":[{\"text\":\"Custom Pipelines\",\"link\":\"advanced/custom-pipelines\"},{\"text\":\"Performance Tips\",\"link\":\"advanced/performance-tips\"},{\"text\":\"Contributing\",\"link\":\"advanced/contribute\"}]},{\"text\":\"FAQ\",\"link\":\"faq\"},{\"text\":\"Troubleshooting\",\"link\":\"/troubleshoot\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
