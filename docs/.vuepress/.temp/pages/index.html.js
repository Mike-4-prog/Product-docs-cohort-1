import comp from "C:/Users/Admin/Desktop/Clones/Product-docs-cohort-1/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"\",\"tagline\":\"\",\"footer\":\"MIT Licensed | Copyright © 2025-present omArray Community\"},\"headers\":[],\"git\":{\"updatedTime\":1750507911000,\"contributors\":[{\"name\":\"Richard-Emmanuel\",\"username\":\"Richard-Emmanuel\",\"email\":\"richardnuelofficial@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Richard-Emmanuel\"}],\"changelog\":[{\"hash\":\"8fdd7fc642897274d460b071cd9501cf91c37820\",\"time\":1750507911000,\"email\":\"richardnuelofficial@gmail.com\",\"author\":\"Richard-Emmanuel\",\"message\":\"Initial Project Setup\"}]},\"filePathRelative\":\"index.md\"}")
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
