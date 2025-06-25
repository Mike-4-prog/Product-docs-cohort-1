import comp from "C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/quick-start.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/quick-start.html\",\"title\":\"Quick Start\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Quick Start\",\"description\":\"Description of this page\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"get-started/quick-start.md\"}")
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
