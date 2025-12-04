(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/hooks/useAccount.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccount",
    ()=>useAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/session.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useAccount = (json)=>{
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        idsession: null,
        loading: true,
        error: false,
        sessionsHtml: [],
        storageId: '',
        premiumStatut: '',
        listWishList: [],
        listwatchList: [],
        itemsData: []
    });
    const queryParams = {};
    let location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    let params = new URLSearchParams(location.search);
    params.forEach((value, key)=>{
        queryParams[key] = value;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAccount.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let cancelled = false;
            const sleep = {
                "useAccount.useEffect.sleep": (ms)=>new Promise({
                        "useAccount.useEffect.sleep": (res)=>setTimeout(res, ms)
                    }["useAccount.useEffect.sleep"])
            }["useAccount.useEffect.sleep"];
            const maxAttempts = 3;
            const run = {
                "useAccount.useEffect.run": async ()=>{
                    const rawSession = localStorage.getItem("session");
                    const rawId = localStorage.getItem("username");
                    if (!rawSession || !rawId) return;
                    for(let attempt = 1; attempt <= maxAttempts && !cancelled; attempt++){
                        try {
                            const timeoutMs = 3000;
                            const sessionPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["session"])(rawSession, rawId);
                            const sessionData = await Promise.race([
                                sessionPromise,
                                new Promise({
                                    "useAccount.useEffect.run": (_, rej)=>setTimeout({
                                            "useAccount.useEffect.run": ()=>rej(new Error("timeout"))
                                        }["useAccount.useEffect.run"], timeoutMs)
                                }["useAccount.useEffect.run"])
                            ]);
                            if (sessionData === 1) {
                                if (!cancelled) {
                                    setState({
                                        "useAccount.useEffect.run": (s)=>({
                                                ...s,
                                                idsession: rawSession
                                            })
                                    }["useAccount.useEffect.run"]);
                                }
                                return;
                            }
                            if (attempt < maxAttempts) {
                                await sleep(500 * 2 ** (attempt - 1));
                                continue;
                            }
                            if (!cancelled) {
                                localStorage.removeItem("session");
                                localStorage.removeItem("username");
                                window.location.href = "";
                            }
                            return;
                        } catch  {
                            if (attempt === maxAttempts) {
                                if (!cancelled) {
                                    localStorage.removeItem("session");
                                    localStorage.removeItem("username");
                                    window.location.href = "";
                                }
                                return;
                            }
                            await sleep(500 * 2 ** (attempt - 1));
                        }
                    }
                }
            }["useAccount.useEffect.run"];
            run();
            const fetchData = {
                "useAccount.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch('http://localhost:8080/ping', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!response.ok) {
                            return setState({
                                "useAccount.useEffect.fetchData": (s_1)=>({
                                        ...s_1,
                                        error: true
                                    })
                            }["useAccount.useEffect.fetchData"]);
                        }
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
                            if (!response2.ok) {
                                return setState({
                                    "useAccount.useEffect.fetchData": (s_2)=>({
                                            ...s_2,
                                            error: true
                                        })
                                }["useAccount.useEffect.fetchData"]);
                            }
                            const datarep2 = await response2.json();
                            if (!datarep2 || datarep2.message !== "1") {
                                return setState({
                                    "useAccount.useEffect.fetchData": (s_3)=>({
                                            ...s_3,
                                            error: true
                                        })
                                }["useAccount.useEffect.fetchData"]);
                            }
                            const raw = datarep2.datas.premium;
                            const p = typeof raw === 'string' ? new Date(raw) : raw;
                            const days = Math.ceil((+p - Date.now()) / 86400000);
                            setState({
                                "useAccount.useEffect.fetchData": (s_4)=>({
                                        ...s_4,
                                        sessionsHtml: datarep2.datas.session,
                                        storageId: localStorage.getItem('username'),
                                        listWishList: datarep2.datas.wishlist,
                                        listwatchList: datarep2.datas.watchList,
                                        premiumStatut: days < 0 ? json.account.txt16 : json.account.txt17 + " " + days
                                    })
                            }["useAccount.useEffect.fetchData"]);
                        }
                    } catch  {
                        setState({
                            "useAccount.useEffect.fetchData": (s_0)=>({
                                    ...s_0,
                                    error: true
                                })
                        }["useAccount.useEffect.fetchData"]);
                    } finally{
                        setState({
                            "useAccount.useEffect.fetchData": (s)=>({
                                    ...s,
                                    loading: false
                                })
                        }["useAccount.useEffect.fetchData"]);
                    }
                }
            }["useAccount.useEffect.fetchData"];
            fetchData();
            return ({
                "useAccount.useEffect": ()=>{
                    cancelled = true;
                }
            })["useAccount.useEffect"];
        }
    }["useAccount.useEffect"], [
        json.account
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAccount.useEffect": ()=>{
            let mounted = true;
            ({
                "useAccount.useEffect": async ()=>{
                    if (!state.listWishList || state.listWishList.length === 0) {
                        setState({
                            "useAccount.useEffect": (s_5)=>({
                                    ...s_5,
                                    itemsData: []
                                })
                        }["useAccount.useEffect"]);
                        return;
                    }
                    try {
                        const results = [];
                        for (const item of state.listWishList){
                            const res_0 = await fetch('http://localhost:8080/item', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                },
                                body: JSON.stringify({
                                    table: item.table,
                                    id: item.id
                                })
                            });
                            if (!res_0.ok) throw new Error();
                            const json_0 = await res_0.json();
                            if (!json_0) throw new Error();
                            results.push({
                                id: item.id,
                                data: json_0
                            });
                        }
                        if (mounted) {
                            setState({
                                "useAccount.useEffect": (s_7)=>({
                                        ...s_7,
                                        itemsData: results
                                    })
                            }["useAccount.useEffect"]);
                        }
                    } catch  {
                        if (mounted) {
                            setState({
                                "useAccount.useEffect": (s_6)=>({
                                        ...s_6,
                                        error: true
                                    })
                            }["useAccount.useEffect"]);
                        }
                    }
                }
            })["useAccount.useEffect"]();
            return ({
                "useAccount.useEffect": ()=>{
                    mounted = false;
                }
            })["useAccount.useEffect"];
        }
    }["useAccount.useEffect"], [
        state.listWishList
    ]);
    return {
        ...state,
        queryParams
    };
};
_s(useAccount, "VhgGOiKvYAKcQGSZjHlrtmrCGIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/features/Account.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Account",
    ()=>Account
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$deleteSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/deleteSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$login$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/login.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/delete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$create$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/create.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useAccount.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Account = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(96);
    if ($[0] !== "d4a2dd4a34eda298b58f29891784221ce905772ccd9ab581d3a7cc1533eddb8b") {
        for(let $i = 0; $i < 96; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4a2dd4a34eda298b58f29891784221ce905772ccd9ab581d3a7cc1533eddb8b";
    }
    const { json, lang } = t0;
    const { error, idsession, itemsData, listWishList, listwatchList, loading, premiumStatut, sessionsHtml, storageId, queryParams } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])(json);
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    if (error === true) {
        let t1;
        if ($[2] !== json || $[3] !== lang) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error500"], {
                lang: lang,
                json: json
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
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
    if (!idsession) {
        if (!queryParams.i) {
            let t1;
            if ($[5] !== json.account.txt1) {
                t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.account.txt1
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 59,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[5] = json.account.txt1;
                $[6] = t1;
            } else {
                t1 = $[6];
            }
            let t2;
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desc",
                    children: "Username"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 67,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[7] = t2;
            } else {
                t2 = $[7];
            }
            let t3;
            if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "words",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "word2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 74,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 74,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[8] = t3;
            } else {
                t3 = $[8];
            }
            let t4;
            if ($[9] !== json.account.txt2) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desc",
                    children: json.account.txt2
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 81,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[9] = json.account.txt2;
                $[10] = t4;
            } else {
                t4 = $[10];
            }
            let t5;
            if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "words",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "word1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 89,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 89,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[11] = t5;
            } else {
                t5 = $[11];
            }
            let t6;
            if ($[12] !== json.account.txt8) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "error",
                    id: "error1",
                    children: json.account.txt8
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 96,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[12] = json.account.txt8;
                $[13] = t6;
            } else {
                t6 = $[13];
            }
            let t7;
            if ($[14] !== json.account.txt9) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "error",
                    id: "error2",
                    children: json.account.txt9
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 104,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[14] = json.account.txt9;
                $[15] = t7;
            } else {
                t7 = $[15];
            }
            let t8;
            if ($[16] !== json.account.txt1) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$login$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"],
                    children: json.account.txt1
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 112,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[16] = json.account.txt1;
                $[17] = t8;
            } else {
                t8 = $[17];
            }
            let t9;
            if ($[18] !== json.account.txt3) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "create",
                    onClick: _temp,
                    children: json.account.txt3
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 120,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[18] = json.account.txt3;
                $[19] = t9;
            } else {
                t9 = $[19];
            }
            let t10;
            if ($[20] !== t1 || $[21] !== t4 || $[22] !== t6 || $[23] !== t7 || $[24] !== t8 || $[25] !== t9) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "app",
                    children: [
                        t1,
                        t2,
                        t3,
                        t4,
                        t5,
                        t6,
                        t7,
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[20] = t1;
                $[21] = t4;
                $[22] = t6;
                $[23] = t7;
                $[24] = t8;
                $[25] = t9;
                $[26] = t10;
            } else {
                t10 = $[26];
            }
            return t10;
        } else {
            let t1;
            if ($[27] !== json.account.txt3) {
                t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.account.txt3
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 143,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[27] = json.account.txt3;
                $[28] = t1;
            } else {
                t1 = $[28];
            }
            let t2;
            if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desc",
                    id: "desc",
                    style: {
                        display: "none"
                    },
                    children: "Username"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 151,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[29] = t2;
            } else {
                t2 = $[29];
            }
            let t3;
            if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "words words2",
                    id: "words3",
                    style: {
                        display: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "word2Reg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 162,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 160,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[30] = t3;
            } else {
                t3 = $[30];
            }
            let t4;
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "desc2",
                    id: "desc",
                    style: {
                        display: "none"
                    },
                    children: "password"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 169,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[31] = t4;
            } else {
                t4 = $[31];
            }
            let t5;
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "words words2",
                    id: "words2",
                    style: {
                        display: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        id: "word0Reg",
                        readOnly: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 180,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 178,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[32] = t5;
            } else {
                t5 = $[32];
            }
            let t6;
            if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = {
                    display: "none"
                };
                $[33] = t6;
            } else {
                t6 = $[33];
            }
            let t7;
            if ($[34] !== json.account.txt6) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "savebtn",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$create$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveKeys"],
                    style: t6,
                    children: json.account.txt6
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 196,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[34] = json.account.txt6;
                $[35] = t7;
            } else {
                t7 = $[35];
            }
            let t8;
            if ($[36] !== json.account.txt7) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "saveok",
                    id: "saveok",
                    children: json.account.txt7
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 204,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[36] = json.account.txt7;
                $[37] = t8;
            } else {
                t8 = $[37];
            }
            let t9;
            if ($[38] !== json.account.txt5) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "save",
                    id: "save",
                    children: json.account.txt5
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 212,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[38] = json.account.txt5;
                $[39] = t9;
            } else {
                t9 = $[39];
            }
            let t10;
            if ($[40] !== json.account.txt4) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "security",
                    className: "security",
                    children: json.account.txt4
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 220,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[40] = json.account.txt4;
                $[41] = t10;
            } else {
                t10 = $[41];
            }
            let t11;
            if ($[42] !== json.account.txt3) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "createReg",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$create$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAccount"],
                    children: json.account.txt3
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 228,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[42] = json.account.txt3;
                $[43] = t11;
            } else {
                t11 = $[43];
            }
            let t12;
            if ($[44] !== json.account.txt1) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "create",
                    onClick: _temp2,
                    children: json.account.txt1
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 236,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[44] = json.account.txt1;
                $[45] = t12;
            } else {
                t12 = $[45];
            }
            let t13;
            if ($[46] !== t1 || $[47] !== t10 || $[48] !== t11 || $[49] !== t12 || $[50] !== t7 || $[51] !== t8 || $[52] !== t9) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "app",
                    children: [
                        t1,
                        t2,
                        t3,
                        t4,
                        t5,
                        t7,
                        t8,
                        t9,
                        t10,
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 244,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
                $[46] = t1;
                $[47] = t10;
                $[48] = t11;
                $[49] = t12;
                $[50] = t7;
                $[51] = t8;
                $[52] = t9;
                $[53] = t13;
            } else {
                t13 = $[53];
            }
            return t13;
        }
    } else {
        let t1;
        if ($[54] !== json.account.txt10) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: json.account.txt10
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 261,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[54] = json.account.txt10;
            $[55] = t1;
        } else {
            t1 = $[55];
        }
        let t2;
        if ($[56] !== json.account.txt14) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "session",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "statut",
                    children: json.account.txt14
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Account.tsx",
                    lineNumber: 269,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 269,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[56] = json.account.txt14;
            $[57] = t2;
        } else {
            t2 = $[57];
        }
        let t3;
        if ($[58] !== json.account.txt18) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "statut",
                children: json.account.txt18
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 277,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[58] = json.account.txt18;
            $[59] = t3;
        } else {
            t3 = $[59];
        }
        let t4;
        if ($[60] !== premiumStatut || $[61] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "premium",
                children: [
                    t3,
                    premiumStatut
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 285,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[60] = premiumStatut;
            $[61] = t3;
            $[62] = t4;
        } else {
            t4 = $[62];
        }
        let t5;
        if ($[63] !== json.account.txt12 || $[64] !== listwatchList) {
            t5 = listwatchList && listwatchList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "title",
                        children: json.account.txt12
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 294,
                        columnNumber: 78
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "items",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {}, void 0, false, {
                            fileName: "[project]/src/app/components/features/Account.tsx",
                            lineNumber: 294,
                            columnNumber: 150
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 294,
                        columnNumber: 127
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 294,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0));
            $[63] = json.account.txt12;
            $[64] = listwatchList;
            $[65] = t5;
        } else {
            t5 = $[65];
        }
        let t6;
        if ($[66] !== itemsData || $[67] !== json.account.txt11 || $[68] !== listWishList) {
            t6 = listWishList && listWishList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "title",
                        children: json.account.txt11
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 303,
                        columnNumber: 76
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wishlist",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: itemsData.map(_temp3)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Account.tsx",
                            lineNumber: 303,
                            columnNumber: 151
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 303,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 303,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0));
            $[66] = itemsData;
            $[67] = json.account.txt11;
            $[68] = listWishList;
            $[69] = t6;
        } else {
            t6 = $[69];
        }
        let t7;
        if ($[70] !== json.account.txt13) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: json.account.txt13
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 313,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[70] = json.account.txt13;
            $[71] = t7;
        } else {
            t7 = $[71];
        }
        let t8;
        if ($[72] !== json.account.txt14 || $[73] !== json.account.txt15 || $[74] !== sessionsHtml || $[75] !== storageId) {
            let t9;
            if ($[77] !== json.account.txt14 || $[78] !== json.account.txt15 || $[79] !== storageId) {
                t9 = (item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "linkId",
                        id: item_0.token,
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$deleteSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSession"])(localStorage.getItem("session") || "", storageId, index.toString());
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                children: [
                                    json.account.txt14,
                                    " ",
                                    item_0.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/features/Account.tsx",
                                lineNumber: 325,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desc",
                                children: json.account.txt15
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Account.tsx",
                                lineNumber: 325,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item_0.token, true, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 323,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0));
                $[77] = json.account.txt14;
                $[78] = json.account.txt15;
                $[79] = storageId;
                $[80] = t9;
            } else {
                t9 = $[80];
            }
            t8 = sessionsHtml.map(t9);
            $[72] = json.account.txt14;
            $[73] = json.account.txt15;
            $[74] = sessionsHtml;
            $[75] = storageId;
            $[76] = t8;
        } else {
            t8 = $[76];
        }
        let t9;
        if ($[81] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "items",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: t8
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 344,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[81] = t8;
            $[82] = t9;
        } else {
            t9 = $[82];
        }
        let t10;
        if ($[83] !== t7 || $[84] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec",
                children: [
                    t7,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 352,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[83] = t7;
            $[84] = t9;
            $[85] = t10;
        } else {
            t10 = $[85];
        }
        let t11;
        if ($[86] !== json.account.txt19) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "linkId",
                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAccount"],
                children: json.account.txt19
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 361,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[86] = json.account.txt19;
            $[87] = t11;
        } else {
            t11 = $[87];
        }
        let t12;
        if ($[88] !== t1 || $[89] !== t10 || $[90] !== t11 || $[91] !== t2 || $[92] !== t4 || $[93] !== t5 || $[94] !== t6) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app2",
                children: [
                    t1,
                    t2,
                    t4,
                    t5,
                    t6,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[88] = t1;
            $[89] = t10;
            $[90] = t11;
            $[91] = t2;
            $[92] = t4;
            $[93] = t5;
            $[94] = t6;
            $[95] = t12;
        } else {
            t12 = $[95];
        }
        return t12;
    }
};
_s(Account, "r4NFxXDKabqSdNY9QBYbWG0M5rY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"]
    ];
});
_c = Account;
function _temp() {
    window.location.href = "/account?i=1";
}
function _temp2() {
    window.location.href = "/account";
}
function _temp3(it) {
    const item = it.data.data[0];
    const t = item.saisons ? 0 : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "linkId",
            onClick: ()=>{
                window.location.href = `/item/?t=${t}&i=${item._id}`;
            },
            onKeyDown: (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    window.location.href = `/item/?t=${t}&i=${item._id}`;
                }
            },
            style: {
                cursor: "pointer"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.minipicture,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Account.tsx",
                            lineNumber: 401,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 401,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.picture,
                        alt: "cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Account.tsx",
                        lineNumber: 401,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Account.tsx",
                lineNumber: 401,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Account.tsx",
            lineNumber: 393,
            columnNumber: 29
        }, this)
    }, item._id, false, {
        fileName: "[project]/src/app/components/features/Account.tsx",
        lineNumber: 393,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Account");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_19b0ab01._.js.map