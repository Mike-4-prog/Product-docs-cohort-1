import comp from "/Users/user/Openmadness/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/basic-usage.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/basic-usage.html\",\"title\":\"Basic Usage\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Basic Usage\",\"description\":\"Description of this page\"},\"headers\":[],\"git\":{\"updatedTime\":1750507911000,\"contributors\":[{\"name\":\"Richard-Emmanuel\",\"username\":\"Richard-Emmanuel\",\"email\":\"richardnuelofficial@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Richard-Emmanuel\"}],\"changelog\":[{\"hash\":\"8fdd7fc642897274d460b071cd9501cf91c37820\",\"time\":1750507911000,\"email\":\"richardnuelofficial@gmail.com\",\"author\":\"Richard-Emmanuel\",\"message\":\"Initial Project Setup\"}]},\"filePathRelative\":\"get-started/basic-usage.md\"}")
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
