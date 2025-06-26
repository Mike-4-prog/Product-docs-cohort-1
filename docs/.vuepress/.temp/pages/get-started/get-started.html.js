import comp from "C:/Users/Admin/Desktop/Clones/Product-docs-cohort-1/docs/.vuepress/.temp/pages/get-started/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{\"updatedTime\":1750507911000,\"contributors\":[{\"name\":\"Richard-Emmanuel\",\"username\":\"Richard-Emmanuel\",\"email\":\"richardnuelofficial@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Richard-Emmanuel\"}],\"changelog\":[{\"hash\":\"8fdd7fc642897274d460b071cd9501cf91c37820\",\"time\":1750507911000,\"email\":\"richardnuelofficial@gmail.com\",\"author\":\"Richard-Emmanuel\",\"message\":\"Initial Project Setup\"}]},\"filePathRelative\":\"get-started/get-started.md\"}")
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
