exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 3749:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 8104:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4554))

/***/ }),

/***/ 2120:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4423));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1072);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        disableTransitionOnChange: true,
        children: children
    });
}


/***/ }),

/***/ 4423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarField: () => (/* binding */ StarField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1170);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(motion__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ StarField auto */ 



const stars = [
    [
        4,
        4,
        true,
        true
    ],
    [
        4,
        44,
        true
    ],
    [
        36,
        22
    ],
    [
        50,
        146,
        true,
        true
    ],
    [
        64,
        43,
        true,
        true
    ],
    [
        76,
        30,
        true
    ],
    [
        101,
        116
    ],
    [
        140,
        36,
        true
    ],
    [
        149,
        134
    ],
    [
        162,
        74,
        true
    ],
    [
        171,
        96,
        true,
        true
    ],
    [
        210,
        56,
        true,
        true
    ],
    [
        235,
        90
    ],
    [
        275,
        82,
        true,
        true
    ],
    [
        306,
        6
    ],
    [
        307,
        64,
        true,
        true
    ],
    [
        380,
        68,
        true
    ],
    [
        380,
        108,
        true,
        true
    ],
    [
        391,
        148,
        true,
        true
    ],
    [
        405,
        18,
        true
    ],
    [
        412,
        86,
        true,
        true
    ],
    [
        426,
        210,
        true,
        true
    ],
    [
        427,
        56,
        true,
        true
    ],
    [
        538,
        138
    ],
    [
        563,
        88,
        true,
        true
    ],
    [
        611,
        154,
        true,
        true
    ],
    [
        637,
        150
    ],
    [
        651,
        146,
        true
    ],
    [
        682,
        70,
        true,
        true
    ],
    [
        683,
        128
    ],
    [
        781,
        82,
        true,
        true
    ],
    [
        785,
        158,
        true
    ],
    [
        832,
        146,
        true,
        true
    ],
    [
        852,
        89
    ]
];
const constellations = [
    [
        [
            247,
            103
        ],
        [
            261,
            86
        ],
        [
            307,
            104
        ],
        [
            357,
            36
        ]
    ],
    [
        [
            586,
            120
        ],
        [
            516,
            100
        ],
        [
            491,
            62
        ],
        [
            440,
            107
        ],
        [
            477,
            180
        ],
        [
            516,
            100
        ]
    ],
    [
        [
            733,
            100
        ],
        [
            803,
            120
        ],
        [
            879,
            113
        ],
        [
            823,
            164
        ],
        [
            803,
            120
        ]
    ]
];
function Star({ blurId, point: [cx, cy, dim, blur] }) {
    let groupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!groupRef.current || !ref.current) {
            return;
        }
        let delay = Math.random() * 2;
        let animations = [
            (0,motion__WEBPACK_IMPORTED_MODULE_3__.animate)(groupRef.current, {
                opacity: 1
            }, {
                duration: 4,
                delay
            }),
            (0,motion__WEBPACK_IMPORTED_MODULE_3__.animate)(ref.current, {
                opacity: dim ? [
                    0.2,
                    0.5
                ] : [
                    1,
                    0.6
                ],
                scale: dim ? [
                    1,
                    1.2
                ] : [
                    1.2,
                    1
                ]
            }, {
                delay,
                duration: Math.random() * 2 + 2,
                direction: "alternate",
                repeat: Infinity
            })
        ];
        return ()=>{
            for (let animation of animations){
                animation.cancel();
            }
        };
    }, [
        dim
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        ref: groupRef,
        className: "opacity-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
            ref: ref,
            cx: cx,
            cy: cy,
            r: 1,
            style: {
                transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
                opacity: dim ? 0.2 : 1,
                transform: `scale(${dim ? 1 : 1.2})`
            },
            filter: blur ? `url(#${blurId})` : undefined
        })
    });
}
function Constellation({ points, blurId }) {
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let uniquePoints = points.filter((point, pointIndex)=>points.findIndex((p)=>String(p) === String(point)) === pointIndex);
    let isFilled = uniquePoints.length !== points.length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref.current) {
            return;
        }
        let sequence = [
            [
                ref.current,
                {
                    strokeDashoffset: 0,
                    visibility: "visible"
                },
                {
                    duration: 5,
                    delay: Math.random() * 3 + 2
                }
            ]
        ];
        if (isFilled) {
            sequence.push([
                ref.current,
                {
                    fill: "rgb(255 255 255 / 0.02)"
                },
                {
                    duration: 1
                }
            ]);
        }
        let animation = (0,motion__WEBPACK_IMPORTED_MODULE_3__.timeline)(sequence);
        return ()=>{
            animation.cancel();
        };
    }, [
        isFilled
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                ref: ref,
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: `M ${points.join("L")}`,
                className: "invisible"
            }),
            uniquePoints.map((point, pointIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Star, {
                    point: point,
                    blurId: blurId
                }, pointIndex))
        ]
    });
}
function StarField({ className }) {
    let blurId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 881 211",
        fill: "white",
        "aria-hidden": "true",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("filter", {
                    id: blurId,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: ".5"
                    })
                })
            }),
            constellations.map((points, constellationIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Constellation, {
                    points: points,
                    blurId: blurId
                }, constellationIndex)),
            stars.map((point, pointIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Star, {
                    point: point,
                    blurId: blurId
                }, pointIndex))
        ]
    });
}


/***/ }),

/***/ 6921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-inter"}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_ = __webpack_require__(8284);
var layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"src/app/layout.tsx","import":"","arguments":[{"src":"../fonts/Mona-Sans.var.woff2","display":"swap","variable":"--font-mona-sans","weight":"200 900"}],"variableName":"monaSans"}
var Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_ = __webpack_require__(4310);
var Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_default = /*#__PURE__*/__webpack_require__.n(Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(7369);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mattglbrt/Documents/dev/mattglbrt/src/app/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(6092);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Matt Gilbert | Thoughts on entrepreneurship, marketing, sales, and fatherhood.",
    description: "I help people become business owners, and enable business owners to become successful entreprenuers.",
    alternates: {
        types: {
            "application/rss+xml": `${"https://mattglbrt.com"}/feed.xml`
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: clsx_default()("h-full antialiased", (layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).variable, (Mona_Sans_var_woff2_display_swap_variable_font_mona_sans_weight_200_900_variableName_monaSans_default()).variable),
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col bg-white dark:bg-gray-950",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 8275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IconLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2396);
/* harmony import */ var _components_StarField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9661);



function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative isolate flex flex-auto flex-col items-center justify-center overflow-hidden bg-gray-950 text-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                "aria-hidden": "true",
                className: "absolute left-1/2 top-[-10vh] -z-10 h-[120vh] w-[120vw] min-w-[60rem] -translate-x-1/2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                            id: "gradient",
                            cy: "0%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "0%",
                                    stopColor: "rgba(56, 189, 248, 0.3)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "53.95%",
                                    stopColor: "rgba(0, 71, 255, 0.09)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "100%",
                                    stopColor: "rgba(10, 14, 23, 0)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#gradient)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StarField__WEBPACK_IMPORTED_MODULE_2__/* .StarField */ .E, {
                className: "sm:-mt-16"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-display text-4xl/tight font-light text-white",
                children: "404"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mt-4 font-display text-xl/8 font-semibold text-white",
                children: "Page not found"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm/6 text-gray-300",
                children: "Sorry, we couldn’t find the page you’re looking for."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IconLink__WEBPACK_IMPORTED_MODULE_1__/* .IconLink */ .J, {
                href: "/",
                className: "mt-4",
                children: "Go back home"
            })
        ]
    });
}


/***/ }),

/***/ 2396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ IconLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



function IconLink({ children, className, compact = false, large = false, icon: Icon, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300", compact ? "gap-x-2" : "gap-x-3"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            }),
            Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex-none", large ? "h-6 w-6" : "h-4 w-4")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "self-baseline text-white",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 9661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mattglbrt/Documents/dev/mattglbrt/src/components/StarField.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["StarField"];


/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 6092:
/***/ (() => {



/***/ })

};
;