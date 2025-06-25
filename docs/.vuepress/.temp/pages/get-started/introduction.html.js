import comp from "C:/Users/Admin/Downloads/Docs/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/introduction.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Introduction\",\"description\":\"Description of this page\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"get-started/introduction.md\"}")
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
