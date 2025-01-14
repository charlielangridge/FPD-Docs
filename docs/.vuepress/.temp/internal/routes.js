export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"FPD Docs"} }],
  ["/stafftrack/admin.html", { loader: () => import(/* webpackChunkName: "stafftrack_admin.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/admin.html.js"), meta: {"title":"Staff Track Admin Guide"} }],
  ["/stafftrack/management.html", { loader: () => import(/* webpackChunkName: "stafftrack_management.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/management.html.js"), meta: {"title":"Staff Track Management Guide"} }],
  ["/stafftrack/user.html", { loader: () => import(/* webpackChunkName: "stafftrack_user.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/stafftrack/user.html.js"), meta: {"title":"Staff Track Management Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/CharlieLangridge/Documents/GitHub/FPD-DOCS/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
