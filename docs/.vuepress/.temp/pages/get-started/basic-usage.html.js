import comp from "C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/basic-usage.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/basic-usage.html\",\"title\":\"Basic Usage\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Basic Usage\",\"description\":\"Description of this page\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"get-started/basic-usage.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
