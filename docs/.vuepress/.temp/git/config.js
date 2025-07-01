import { GitContributors } from "C:/Users/akshu/OneDrive/Desktop/TWMP_teamProj/Product-docs-cohort-1/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/akshu/OneDrive/Desktop/TWMP_teamProj/Product-docs-cohort-1/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
