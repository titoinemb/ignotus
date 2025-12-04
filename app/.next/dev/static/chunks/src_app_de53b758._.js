(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/hooks/useItem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useItem",
    ()=>useItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$findInTable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/findInTable.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useItem = ()=>{
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loading: true,
        error: false,
        data: null,
        saisonsSelect: [],
        castingsSelect: [],
        wishlistOption: 1,
        saisons: 0,
        activeContent: "saisons"
    });
    const contentBtn = (where)=>setState({
            ...state,
            activeContent: where
        });
    const handleChange = (event)=>setState({
            ...state,
            saisons: parseInt(event.target.value)
        });
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const params = new URLSearchParams(location.search);
    const queryParams = {};
    params.forEach((value, key)=>queryParams[key] = value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useItem.useEffect": ()=>{
            const fetchData = {
                "useItem.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch('http://localhost:8080/item', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                table: queryParams.t,
                                id: queryParams.i
                            })
                        });
                        if (!response.ok) throw new Error('Failed to fetch item');
                        const datarep = await response.json();
                        if (!datarep) throw new Error('No data received');
                        let wishlistOption = 1;
                        if (localStorage.getItem('session')) {
                            const response2 = await fetch('http://localhost:8080/account/datas', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                },
                                body: JSON.stringify({
                                    username: localStorage.getItem('username'),
                                    session: localStorage.getItem('session')
                                })
                            });
                            if (!response2.ok) throw new Error('Failed to fetch account data');
                            const datarep2 = await response2.json();
                            if (!datarep2 || datarep2.message !== "1") throw new Error('Invalid account data');
                            const wishlist = datarep2.datas.wishlist;
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$findInTable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findInTable"])(wishlist, {
                                table: queryParams.t,
                                id: queryParams.i
                            })) {
                                wishlistOption = 2;
                            }
                            ;
                        }
                        ;
                        if (!datarep.data.saisons) {
                            setState({
                                "useItem.useEffect.fetchData": (prevState_0)=>({
                                        ...prevState_0,
                                        activeContent: "castings"
                                    })
                            }["useItem.useEffect.fetchData"]);
                        }
                        ;
                        setState({
                            "useItem.useEffect.fetchData": (prevState_1)=>({
                                    ...prevState_1,
                                    data: datarep,
                                    castingsSelect: datarep.data.person,
                                    saisonsSelect: datarep.data.saisons,
                                    wishlistOption,
                                    loading: false
                                })
                        }["useItem.useEffect.fetchData"]);
                    } catch (error) {
                        setState({
                            "useItem.useEffect.fetchData": (prevState)=>({
                                    ...prevState,
                                    error: true,
                                    loading: false
                                })
                        }["useItem.useEffect.fetchData"]);
                    }
                    ;
                }
            }["useItem.useEffect.fetchData"];
            fetchData();
        }
    }["useItem.useEffect"], [
        queryParams.i,
        queryParams.t
    ]);
    return {
        ...state,
        contentBtn,
        handleChange,
        queryParams
    };
};
_s(useItem, "n8vfI1meo+m/oWgGAeH25i1sLaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/features/Item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$wishlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/wishlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/features/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useItem.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Item = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(110);
    if ($[0] !== "1a2a4ecae0262f81bf9fae54ae237a83349559c4e657f2996d8dada0107f4e1b") {
        for(let $i = 0; $i < 110; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a2a4ecae0262f81bf9fae54ae237a83349559c4e657f2996d8dada0107f4e1b";
    }
    const { json, lang } = t0;
    const { activeContent, castingsSelect, contentBtn, data, error, handleChange, loading, saisons, queryParams, saisonsSelect, wishlistOption } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItem"])();
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    if (error === true || data === null) {
        let t1;
        if ($[2] !== json || $[3] !== lang) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error404"], {
                lang: lang,
                json: json
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 46,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[2] = json;
            $[3] = lang;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        return t1;
    }
    let t1;
    if ($[5] !== data.data.picture) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: data.data.picture,
                    alt: "background"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Item.tsx",
                    lineNumber: 57,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 57,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = data.data.picture;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== data.data.picture) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: data.data.picture,
                alt: "pic"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 65,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = data.data.picture;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const t3 = data.data.data[lang];
    let t4;
    if ($[9] !== t3.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: t3.title
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3.title;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== data.data.note) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "note",
                children: [
                    data.data.note,
                    "/10"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 82,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = data.data.note;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = json.genres[data.data.genres[0]];
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                className: "genre",
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 91,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = json.genres[data.data.genres[1]];
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                className: "genre",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 100,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = json.genres[data.data.genres[2]];
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                className: "genre",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 109,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const t12 = data.data.saisons && Array.isArray(data.data.saisons) ? `${data.data.saisons.length} saisons` : data.data.time;
    let t13;
    if ($[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "time",
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 118,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t11 || $[22] !== t13 || $[23] !== t5 || $[24] !== t7 || $[25] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plus",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: [
                    t5,
                    t7,
                    t9,
                    t11,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 126,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
        $[22] = t13;
        $[23] = t5;
        $[24] = t7;
        $[25] = t9;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = data.data.data[lang];
    let t16;
    if ($[27] !== t15.description) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "description",
            children: t15.description
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t15.description;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== data.data[0]?.saisons || $[30] !== data.data._id.$oid || $[31] !== queryParams?.t) {
        t17 = ()=>{
            const t = encodeURIComponent(queryParams?.t ?? "");
            const id = encodeURIComponent(data?.data?._id.$oid ?? "");
            const suffix = data?.data?.[0]?.saisons ? "&e=0" : "";
            const suffix2 = data?.data?.[0]?.saisons ? "&s=0" : "";
            window.location.href = `/watch?t=${t}&i=${id}${suffix + suffix2}`;
        };
        $[29] = data.data[0]?.saisons;
        $[30] = data.data._id.$oid;
        $[31] = queryParams?.t;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== json.item.play || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            onClick: t17,
            children: json.item.play
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = json.item.play;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== json.item.btn3 || $[37] !== queryParams || $[38] !== wishlistOption) {
        t19 = localStorage.getItem("session") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            className: "wish",
            onClick: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$wishlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wishlist"])(queryParams.t, queryParams.i);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    id: "check",
                    style: {
                        display: wishlistOption === 2 ? "flex" : "none"
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "22px",
                    height: "22px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Vector",
                            d: "M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969",
                            stroke: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Item.tsx",
                            lineNumber: 176,
                            columnNumber: 107
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Item.tsx",
                        lineNumber: 176,
                        columnNumber: 104
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Item.tsx",
                    lineNumber: 174,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                json.item.btn3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 172,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = json.item.btn3;
        $[37] = queryParams;
        $[38] = wishlistOption;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t18 || $[41] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "btn",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t18;
        $[41] = t19;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== t14 || $[44] !== t16 || $[45] !== t20 || $[46] !== t4) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: [
                t4,
                t14,
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t14;
        $[44] = t16;
        $[45] = t20;
        $[46] = t4;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t2 || $[49] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "info",
            children: [
                t2,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t2;
        $[49] = t21;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== t1 || $[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "top",
            children: [
                t1,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t1;
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    const t24 = data.data?.saisons ? "flex" : "none";
    let t25;
    if ($[54] !== t24) {
        t25 = {
            display: t24
        };
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== contentBtn) {
        t26 = ()=>{
            contentBtn("saisons");
        };
        $[56] = contentBtn;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== json.item.btn1 || $[59] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t26,
            children: json.item.btn1
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = json.item.btn1;
        $[59] = t26;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    let t28;
    if ($[61] !== t25 || $[62] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            id: "saisons",
            style: t25,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t25;
        $[62] = t27;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== contentBtn) {
        t29 = ()=>{
            contentBtn("castings");
        };
        $[64] = contentBtn;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] !== json.item.btn4 || $[67] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "li",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t29,
                children: json.item.btn4
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 273,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = json.item.btn4;
        $[67] = t29;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== t28 || $[70] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "btns",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: [
                    t28,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 282,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t28;
        $[70] = t30;
        $[71] = t31;
    } else {
        t31 = $[71];
    }
    const t32 = data.data?.saisons ? activeContent === "saisons" ? "block" : "none" : "none";
    let t33;
    if ($[72] !== t32) {
        t33 = {
            display: t32
        };
        $[72] = t32;
        $[73] = t33;
    } else {
        t33 = $[73];
    }
    let t34;
    if ($[74] !== saisonsSelect) {
        t34 = saisonsSelect?.map(_temp);
        $[74] = saisonsSelect;
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: t34
        }, void 0, false);
        $[76] = t34;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] !== handleChange || $[79] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "saisons",
            id: "saisonsSelect",
            onChange: handleChange,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = handleChange;
        $[79] = t35;
        $[80] = t36;
    } else {
        t36 = $[80];
    }
    let t37;
    if ($[81] !== data.data._id.$oid || $[82] !== lang || $[83] !== saisons || $[84] !== saisonsSelect) {
        t37 = saisonsSelect?.[saisons]?.episode?.map((episode, i)=>{
            if (!episode) {
                return null;
            }
            const targetI = data?.data?._id.$oid;
            if (!targetI) {
                return null;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "episode",
                onClick: ()=>{
                    window.location.href = `/watch/?t=0&i=${targetI}&s=0&e=${i}&s=${saisons}`;
                },
                style: {
                    cursor: "pointer"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image",
                        children: episode.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: episode.picture,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Item.tsx",
                            lineNumber: 339,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Item.tsx",
                        lineNumber: 339,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "list",
                                children: [
                                    episode.time,
                                    " - ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(episode.date)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/features/Item.tsx",
                                lineNumber: 339,
                                columnNumber: 118
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                children: episode.data?.[lang]?.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Item.tsx",
                                lineNumber: 339,
                                columnNumber: 189
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "description",
                                children: episode.data?.[lang]?.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Item.tsx",
                                lineNumber: 339,
                                columnNumber: 247
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/features/Item.tsx",
                        lineNumber: 339,
                        columnNumber: 96
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 335,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[81] = data.data._id.$oid;
        $[82] = lang;
        $[83] = saisons;
        $[84] = saisonsSelect;
        $[85] = t37;
    } else {
        t37 = $[85];
    }
    let t38;
    if ($[86] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "episodes",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: t37
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = t37;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t33 || $[89] !== t36 || $[90] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "episodesContent",
            style: t33,
            children: [
                t36,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t33;
        $[89] = t36;
        $[90] = t38;
        $[91] = t39;
    } else {
        t39 = $[91];
    }
    const t40 = activeContent === "castings" ? "flex" : "none";
    let t41;
    if ($[92] !== t40) {
        t41 = {
            display: t40
        };
        $[92] = t40;
        $[93] = t41;
    } else {
        t41 = $[93];
    }
    let t42;
    if ($[94] !== castingsSelect) {
        t42 = castingsSelect.map(_temp2);
        $[94] = castingsSelect;
        $[95] = t42;
    } else {
        t42 = $[95];
    }
    let t43;
    if ($[96] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: t42
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[96] = t42;
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== t41 || $[99] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "castingsContent",
            className: "castingscontent",
            style: t41,
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[98] = t41;
        $[99] = t43;
        $[100] = t44;
    } else {
        t44 = $[100];
    }
    let t45;
    if ($[101] !== t39 || $[102] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content",
            children: [
                t39,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = t39;
        $[102] = t44;
        $[103] = t45;
    } else {
        t45 = $[103];
    }
    let t46;
    if ($[104] !== t31 || $[105] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bottom",
            children: [
                t31,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[104] = t31;
        $[105] = t45;
        $[106] = t46;
    } else {
        t46 = $[106];
    }
    let t47;
    if ($[107] !== t23 || $[108] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "item",
            children: [
                t23,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[107] = t23;
        $[108] = t46;
        $[109] = t47;
    } else {
        t47 = $[109];
    }
    return t47;
};
_s(Item, "+ilxCFUoGmqrXk0axxRUakDyM9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItem"]
    ];
});
_c = Item;
function _temp(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: idx,
        children: item.name
    }, idx, false, {
        fileName: "[project]/src/app/components/features/Item.tsx",
        lineNumber: 433,
        columnNumber: 10
    }, this);
}
function _temp2(item_0, idx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "linkId",
            className: "similar",
            onClick: ()=>window.location.href = item_0.link,
            style: {
                cursor: "pointer"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "cast",
                    src: item_0.picture,
                    alt: "cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Item.tsx",
                    lineNumber: 438,
                    columnNumber: 31
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Item.tsx",
                lineNumber: 438,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Item.tsx",
            lineNumber: 436,
            columnNumber: 26
        }, this)
    }, idx_0, false, {
        fileName: "[project]/src/app/components/features/Item.tsx",
        lineNumber: 436,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Item");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_de53b758._.js.map