import { GitContributors } from "C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/.yarn/__virtual__/@vuepress-plugin-git-virtual-8a7e6cda08/4/AppData/Local/Yarn/Berry/cache/@vuepress-plugin-git-npm-2.0.0-rc.88-eea6d1b7ec-10c0.zip/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/.yarn/__virtual__/@vuepress-plugin-git-virtual-8a7e6cda08/4/AppData/Local/Yarn/Berry/cache/@vuepress-plugin-git-npm-2.0.0-rc.88-eea6d1b7ec-10c0.zip/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
