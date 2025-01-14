export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"FPD Docs"} }],
  ["/mailcoach/", { loader: () => import(/* webpackChunkName: "mailcoach_index.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/mailcoach/index.html.js"), meta: {"title":"Mail Coach Guide"} }],
  ["/stafftrack/admin.html", { loader: () => import(/* webpackChunkName: "stafftrack_admin.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/admin.html.js"), meta: {"title":"Staff Track Admin Guide"} }],
  ["/stafftrack/management.html", { loader: () => import(/* webpackChunkName: "stafftrack_management.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/management.html.js"), meta: {"title":"Staff Track Management Guide"} }],
  ["/stafftrack/user.html", { loader: () => import(/* webpackChunkName: "stafftrack_user.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/user.html.js"), meta: {"title":"Staff Track Management Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
