import { CodeTabs } from "/Users/rianeks/Desktop/openmadness/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/rianeks/Desktop/openmadness/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/rianeks/Desktop/openmadness/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
