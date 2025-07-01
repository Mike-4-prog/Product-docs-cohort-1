import { CodeTabs } from "C:/Users/akshu/OneDrive/Desktop/TWMP_teamProj/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/akshu/OneDrive/Desktop/TWMP_teamProj/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/akshu/OneDrive/Desktop/TWMP_teamProj/Product-docs-cohort-1/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
