import { GitContributors } from "/Users/rianeks/Desktop/openmadness/Product-docs-cohort-1/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/rianeks/Desktop/openmadness/Product-docs-cohort-1/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
