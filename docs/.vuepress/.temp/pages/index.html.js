import comp from "C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"FPD Docs\",\"lang\":\"en-GB\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MailCoach\",\"slug\":\"mailcoach\",\"link\":\"#mailcoach\",\"children\":[]},{\"level\":2,\"title\":\"StaffTrack\",\"slug\":\"stafftrack\",\"link\":\"#stafftrack\",\"children\":[]}],\"git\":{\"updatedTime\":1736880837000,\"contributors\":[{\"name\":\"Charlie Langridge\",\"username\":\"Charlie Langridge\",\"email\":\"charlie@charlielangridge.com\",\"commits\":2,\"url\":\"https://github.com/Charlie Langridge\"}]},\"filePathRelative\":\"README.md\"}")
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
