"use strict";
(() => {
var exports = {};
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 1070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/feed.xml/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
;// CONCATENATED MODULE: external "assert"
const external_assert_namespaceObject = require("assert");
var external_assert_default = /*#__PURE__*/__webpack_require__.n(external_assert_namespaceObject);
// EXTERNAL MODULE: ./node_modules/cheerio/lib/esm/index.js + 67 modules
var esm = __webpack_require__(8850);
// EXTERNAL MODULE: ./node_modules/feed/lib/feed.js
var lib_feed = __webpack_require__(5965);
;// CONCATENATED MODULE: ./src/app/feed.xml/route.ts



async function GET(req) {
    let siteUrl = "https://mattglbrt.com";
    if (!siteUrl) {
        throw Error("Missing NEXT_PUBLIC_SITE_URL environment variable");
    }
    let author = {
        name: "Joe Davola",
        email: "crazy.joe@example.com"
    };
    let feed = new lib_feed/* Feed */.f({
        title: "Commit",
        description: "Open-source Git client for macOS minimalists",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/feed.xml`
        }
    });
    let html = await (await fetch(new URL("/", req.url))).text();
    let $ = esm/* load */.zD(html);
    $("article").each(function() {
        let id = $(this).attr("id");
        external_assert_default()(typeof id === "string");
        let url = `${siteUrl}/#${id}`;
        let heading = $(this).find("h2").first();
        let title = heading.text();
        let date = $(this).find("time").first().attr("datetime");
        // Tidy content
        heading.remove();
        $(this).find("h3 svg").remove();
        let content = $(this).find("[data-mdx-content]").first().html();
        external_assert_default()(typeof title === "string");
        external_assert_default()(typeof date === "string");
        external_assert_default()(typeof content === "string");
        feed.addItem({
            title,
            id: url,
            link: url,
            content,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(date)
        });
    });
    return new Response(feed.rss2(), {
        status: 200,
        headers: {
            "content-type": "application/xml",
            "cache-control": "s-maxage=31556952"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffeed.xml%2Froute&name=app%2Ffeed.xml%2Froute&pagePath=private-next-app-dir%2Ffeed.xml%2Froute.ts&appDir=%2FUsers%2Fmattglbrt%2FDocuments%2Fdev%2Fmattglbrt%2Fsrc%2Fapp&appPaths=%2Ffeed.xml%2Froute&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=mdx&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/feed.xml/route",
        pathname: "/feed.xml",
        filename: "route",
        bundlePath: "app/feed.xml/route"
    },
    resolvedPagePath: "/Users/mattglbrt/Documents/dev/mattglbrt/src/app/feed.xml/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/feed.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,128], () => (__webpack_exec__(1070)));
module.exports = __webpack_exports__;

})();