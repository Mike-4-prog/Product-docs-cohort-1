export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
<<<<<<< HEAD
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/troubleshoot.html", { loader: () => import(/* webpackChunkName: "troubleshoot.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/troubleshoot.html.js"), meta: {"title":""} }],
  ["/advanced/contribute.html", { loader: () => import(/* webpackChunkName: "advanced_contribute.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/contribute.html.js"), meta: {"title":""} }],
  ["/advanced/custom-pipelines.html", { loader: () => import(/* webpackChunkName: "advanced_custom-pipelines.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/custom-pipelines.html.js"), meta: {"title":""} }],
  ["/advanced/performance-tips.html", { loader: () => import(/* webpackChunkName: "advanced_performance-tips.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/performance-tips.html.js"), meta: {"title":""} }],
  ["/api/logical-masking-and-filtering.html", { loader: () => import(/* webpackChunkName: "api_logical-masking-and-filtering.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/logical-masking-and-filtering.html.js"), meta: {"title":""} }],
  ["/api/omArray.html", { loader: () => import(/* webpackChunkName: "api_omArray.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/omArray.html.js"), meta: {"title":""} }],
  ["/api/operations.html", { loader: () => import(/* webpackChunkName: "api_operations.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/operations.html.js"), meta: {"title":""} }],
  ["/get-started/basic-usage.html", { loader: () => import(/* webpackChunkName: "get-started_basic-usage.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/basic-usage.html.js"), meta: {"title":"Basic Usage"} }],
  ["/get-started/get-started.html", { loader: () => import(/* webpackChunkName: "get-started_get-started.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/get-started/installation.html", { loader: () => import(/* webpackChunkName: "get-started_installation.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/installation.html.js"), meta: {"title":"Installation"} }],
  ["/get-started/introduction.html", { loader: () => import(/* webpackChunkName: "get-started_introduction.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/get-started/quick-start.html", { loader: () => import(/* webpackChunkName: "get-started_quick-start.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/quick-start.html.js"), meta: {"title":"Quick Start"} }],
  ["/guide/chaining-operations.html", { loader: () => import(/* webpackChunkName: "guide_chaining-operations.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/chaining-operations.html.js"), meta: {"title":""} }],
  ["/guide/multi-dimensional-arrays.html", { loader: () => import(/* webpackChunkName: "guide_multi-dimensional-arrays.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/multi-dimensional-arrays.html.js"), meta: {"title":""} }],
  ["/guide/testing-locally.html", { loader: () => import(/* webpackChunkName: "guide_testing-locally.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/testing-locally.html.js"), meta: {"title":""} }],
  ["/guide/working-with-omArray.html", { loader: () => import(/* webpackChunkName: "guide_working-with-omArray.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/working-with-omArray.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/user/Product-docs-cohort-1/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
=======
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/troubleshoot.html", { loader: () => import(/* webpackChunkName: "troubleshoot.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/troubleshoot.html.js"), meta: {"title":""} }],
  ["/api/logical-masking-and-filtering.html", { loader: () => import(/* webpackChunkName: "api_logical-masking-and-filtering.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/logical-masking-and-filtering.html.js"), meta: {"title":""} }],
  ["/api/omArray.html", { loader: () => import(/* webpackChunkName: "api_omArray.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/omArray.html.js"), meta: {"title":""} }],
  ["/api/operations.html", { loader: () => import(/* webpackChunkName: "api_operations.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/api/operations.html.js"), meta: {"title":""} }],
  ["/advanced/contribute.html", { loader: () => import(/* webpackChunkName: "advanced_contribute.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/contribute.html.js"), meta: {"title":""} }],
  ["/advanced/custom-pipelines.html", { loader: () => import(/* webpackChunkName: "advanced_custom-pipelines.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/custom-pipelines.html.js"), meta: {"title":""} }],
  ["/advanced/performance-tips.html", { loader: () => import(/* webpackChunkName: "advanced_performance-tips.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/advanced/performance-tips.html.js"), meta: {"title":""} }],
  ["/get-started/basic-usage.html", { loader: () => import(/* webpackChunkName: "get-started_basic-usage.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/basic-usage.html.js"), meta: {"title":"Basic Usage"} }],
  ["/get-started/get-started.html", { loader: () => import(/* webpackChunkName: "get-started_get-started.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/get-started/installation.html", { loader: () => import(/* webpackChunkName: "get-started_installation.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/installation.html.js"), meta: {"title":"Installation"} }],
  ["/get-started/introduction.html", { loader: () => import(/* webpackChunkName: "get-started_introduction.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/get-started/quick-start.html", { loader: () => import(/* webpackChunkName: "get-started_quick-start.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/quick-start.html.js"), meta: {"title":"Quick Start"} }],
  ["/guide/chaining-operations.html", { loader: () => import(/* webpackChunkName: "guide_chaining-operations.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/chaining-operations.html.js"), meta: {"title":""} }],
  ["/guide/multi-dimensional-arrays.html", { loader: () => import(/* webpackChunkName: "guide_multi-dimensional-arrays.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/multi-dimensional-arrays.html.js"), meta: {"title":""} }],
  ["/guide/testing-locally.html", { loader: () => import(/* webpackChunkName: "guide_testing-locally.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/testing-locally.html.js"), meta: {"title":""} }],
  ["/guide/working-with-omArray.html", { loader: () => import(/* webpackChunkName: "guide_working-with-omArray.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/guide/working-with-omArray.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
>>>>>>> origin/Product-docs-cohort-1-Group3
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
