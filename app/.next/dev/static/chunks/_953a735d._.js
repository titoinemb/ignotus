(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/hooks/useSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useSettings = ()=>{
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loading: true,
        error: false,
        settingss: [],
        idSession: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSettings.useEffect": ()=>{
            let sessionStorage = localStorage.getItem('session');
            ({
                "useSettings.useEffect": async ()=>{
                    try {
                        if (sessionStorage) {
                            const response = await fetch('http://localhost:8080/account/datas', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    username: localStorage.getItem('username'),
                                    session: sessionStorage
                                })
                            });
                            const datarep = await response.json();
                            if (!response.ok || !datarep || datarep.message !== "1") return setState({
                                "useSettings.useEffect": (prevState_0)=>({
                                        ...prevState_0,
                                        error: true
                                    })
                            }["useSettings.useEffect"]);
                            await setState({
                                "useSettings.useEffect": (prevState_1)=>({
                                        ...prevState_1,
                                        idSession: localStorage.getItem('username')
                                    })
                            }["useSettings.useEffect"]);
                            await setState({
                                "useSettings.useEffect": (prevState_2)=>({
                                        ...prevState_2,
                                        settingss: sessionStorage
                                    })
                            }["useSettings.useEffect"]);
                            return await setState({
                                "useSettings.useEffect": (prevState_3)=>({
                                        ...prevState_3,
                                        settingss: datarep.datas.settings
                                    })
                            }["useSettings.useEffect"]);
                        } else {
                            let settingsStorage = localStorage.getItem('setting');
                            if (!settingsStorage) {
                                let newSettings = JSON.stringify({
                                    cc: "null",
                                    kidsMod: {
                                        actif: false,
                                        max: 5
                                    },
                                    langue: "fr",
                                    quality: "1080p",
                                    skip: {
                                        intro: true,
                                        outro: true
                                    }
                                });
                                await localStorage.setItem('setting', newSettings);
                                return await setState({
                                    "useSettings.useEffect": (prevState_4)=>({
                                            ...prevState_4,
                                            settingss: JSON.parse(newSettings)
                                        })
                                }["useSettings.useEffect"]);
                            } else {
                                return await setState({
                                    "useSettings.useEffect": (prevState_5)=>({
                                            ...prevState_5,
                                            settingss: JSON.parse(settingsStorage)
                                        })
                                }["useSettings.useEffect"]);
                            }
                            //TURBOPACK unreachable
                            ;
                        }
                        //TURBOPACK unreachable
                        ;
                    } catch (e) {
                        console.log(e);
                        return setState({
                            "useSettings.useEffect": (prevState)=>({
                                    ...prevState,
                                    error: true
                                })
                        }["useSettings.useEffect"]);
                    } finally{
                        return setState({
                            "useSettings.useEffect": (prevState)=>({
                                    ...prevState,
                                    loading: false
                                })
                        }["useSettings.useEffect"]);
                    }
                    //TURBOPACK unreachable
                    ;
                }
            })["useSettings.useEffect"]();
        }
    }["useSettings.useEffect"], []);
    return state;
};
_s(useSettings, "1qR6jiEaz8UUYLJQ2+VJK+h1AXQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/features/Settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$saveSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/saveSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useSettings.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Settings = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(107);
    if ($[0] !== "e75f9061db212b85fb45368bf3e5f23e2f7b3e9a8841a684ea118442bc86bec7") {
        for(let $i = 0; $i < 107; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e75f9061db212b85fb45368bf3e5f23e2f7b3e9a8841a684ea118442bc86bec7";
    }
    const { json, lang } = t0;
    const { error, idSession, loading, settingss } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/components/features/Settings.tsx",
                lineNumber: 28,
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
                fileName: "[project]/src/app/components/features/Settings.tsx",
                lineNumber: 38,
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
    if ($[5] !== json.settings.txt1) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: json.settings.txt1
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = json.settings.txt1;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== json.watch.txt1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title2",
            children: json.watch.txt1
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = json.watch.txt1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "1080p",
            children: "1080p"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "720p",
            children: "720p"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "480p",
            children: "480p"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
    }
    let t6;
    if ($[12] !== settingss.quality) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "qualitys",
            id: "qualitys",
            defaultValue: settingss.quality,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = settingss.quality;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t2 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t2;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== json.watch.txt2) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title2",
            children: json.watch.txt2
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = json.watch.txt2;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ar",
            children: "العربية"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "de",
            children: "Deutsch"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "en",
            children: "English"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "es",
            children: "Español"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "fr",
            children: "Français"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "hi",
            children: "हिन्दी"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "it",
            children: "Italiano"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "jp",
            children: "日本語"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ko",
            children: "한국어"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "nl",
            children: "Nederlands"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "pt",
            children: "Português"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ru",
            children: "Русский"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "sv",
            children: "Svenska"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "tr",
            children: "Türkçe"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "zh",
            children: "中文"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t13;
        $[23] = t14;
        $[24] = t15;
        $[25] = t16;
        $[26] = t17;
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
        $[30] = t21;
        $[31] = t22;
        $[32] = t23;
        $[33] = t9;
    } else {
        t10 = $[19];
        t11 = $[20];
        t12 = $[21];
        t13 = $[22];
        t14 = $[23];
        t15 = $[24];
        t16 = $[25];
        t17 = $[26];
        t18 = $[27];
        t19 = $[28];
        t20 = $[29];
        t21 = $[30];
        t22 = $[31];
        t23 = $[32];
        t9 = $[33];
    }
    let t24;
    if ($[34] !== settingss.langue) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            defaultValue: settingss.langue,
            id: "lang",
            children: [
                t9,
                t10,
                t11,
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = settingss.langue;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== t24 || $[37] !== t8) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            children: [
                t8,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t24;
        $[37] = t8;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== json.watch.txt3) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title2",
            children: json.watch.txt3
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = json.watch.txt3;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== json.settings.txt4) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "null",
            children: json.settings.txt4
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = json.settings.txt4;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    let t29;
    let t30;
    let t31;
    let t32;
    let t33;
    let t34;
    let t35;
    let t36;
    let t37;
    let t38;
    let t39;
    let t40;
    let t41;
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ar",
            children: "العربية"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "de",
            children: "Deutsch"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "en",
            children: "English"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "es",
            children: "Español"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "fr",
            children: "Français"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "hi",
            children: "हिन्दी"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "it",
            children: "Italiano"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "jp",
            children: "日本語"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ko",
            children: "한국어"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "nl",
            children: "Nederlands"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "pt",
            children: "Português"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ru",
            children: "Русский"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "sv",
            children: "Svenska"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "tr",
            children: "Türkçe"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "zh",
            children: "中文"
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t28;
        $[44] = t29;
        $[45] = t30;
        $[46] = t31;
        $[47] = t32;
        $[48] = t33;
        $[49] = t34;
        $[50] = t35;
        $[51] = t36;
        $[52] = t37;
        $[53] = t38;
        $[54] = t39;
        $[55] = t40;
        $[56] = t41;
        $[57] = t42;
    } else {
        t28 = $[43];
        t29 = $[44];
        t30 = $[45];
        t31 = $[46];
        t32 = $[47];
        t33 = $[48];
        t34 = $[49];
        t35 = $[50];
        t36 = $[51];
        t37 = $[52];
        t38 = $[53];
        t39 = $[54];
        t40 = $[55];
        t41 = $[56];
        t42 = $[57];
    }
    let t43;
    if ($[58] !== settingss.cc || $[59] !== t27) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            defaultValue: settingss.cc,
            id: "langCC",
            children: [
                t27,
                t28,
                t29,
                t30,
                t31,
                t32,
                t33,
                t34,
                t35,
                t36,
                t37,
                t38,
                t39,
                t40,
                t41,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = settingss.cc;
        $[59] = t27;
        $[60] = t43;
    } else {
        t43 = $[60];
    }
    let t44;
    if ($[61] !== t26 || $[62] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            children: [
                t26,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t26;
        $[62] = t43;
        $[63] = t44;
    } else {
        t44 = $[63];
    }
    let t45;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            display: "none"
        };
        $[64] = t45;
    } else {
        t45 = $[64];
    }
    let t46;
    if ($[65] !== json.settings.txt2) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title2",
            children: json.settings.txt2
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = json.settings.txt2;
        $[66] = t46;
    } else {
        t46 = $[66];
    }
    let t47;
    if ($[67] !== json.yes) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "true",
            children: json.yes
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = json.yes;
        $[68] = t47;
    } else {
        t47 = $[68];
    }
    let t48;
    if ($[69] !== json.no) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "false",
            children: json.no
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = json.no;
        $[70] = t48;
    } else {
        t48 = $[70];
    }
    let t49;
    if ($[71] !== settingss.skip.intro || $[72] !== t47 || $[73] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "skipintro",
            id: "skipintro",
            defaultValue: settingss.skip.intro,
            children: [
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = settingss.skip.intro;
        $[72] = t47;
        $[73] = t48;
        $[74] = t49;
    } else {
        t49 = $[74];
    }
    let t50;
    if ($[75] !== t46 || $[76] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: t45,
            children: [
                t46,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t46;
        $[76] = t49;
        $[77] = t50;
    } else {
        t50 = $[77];
    }
    let t51;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = {
            display: "none"
        };
        $[78] = t51;
    } else {
        t51 = $[78];
    }
    let t52;
    if ($[79] !== json.settings.txt3) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title2",
            children: json.settings.txt3
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = json.settings.txt3;
        $[80] = t52;
    } else {
        t52 = $[80];
    }
    let t53;
    if ($[81] !== json.yes) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "true",
            children: json.yes
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = json.yes;
        $[82] = t53;
    } else {
        t53 = $[82];
    }
    let t54;
    if ($[83] !== json.no) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "false",
            children: json.no
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = json.no;
        $[84] = t54;
    } else {
        t54 = $[84];
    }
    let t55;
    if ($[85] !== settingss.skip.outro || $[86] !== t53 || $[87] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            name: "skipoutro",
            id: "skipoutro",
            defaultValue: settingss.skip.outro,
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = settingss.skip.outro;
        $[86] = t53;
        $[87] = t54;
        $[88] = t55;
    } else {
        t55 = $[88];
    }
    let t56;
    if ($[89] !== t52 || $[90] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            style: t51,
            children: [
                t52,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t52;
        $[90] = t55;
        $[91] = t56;
    } else {
        t56 = $[91];
    }
    let t57;
    if ($[92] !== t25 || $[93] !== t44 || $[94] !== t50 || $[95] !== t56 || $[96] !== t7) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "list",
            children: [
                t7,
                t25,
                t44,
                t50,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = t25;
        $[93] = t44;
        $[94] = t50;
        $[95] = t56;
        $[96] = t7;
        $[97] = t57;
    } else {
        t57 = $[97];
    }
    let t58;
    if ($[98] !== idSession) {
        t58 = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$saveSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSettings"])(idSession);
        };
        $[98] = idSession;
        $[99] = t58;
    } else {
        t58 = $[99];
    }
    let t59;
    if ($[100] !== json.account.txt6 || $[101] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t58,
            children: json.account.txt6
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[100] = json.account.txt6;
        $[101] = t58;
        $[102] = t59;
    } else {
        t59 = $[102];
    }
    let t60;
    if ($[103] !== t1 || $[104] !== t57 || $[105] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "app",
            children: [
                t1,
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Settings.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[103] = t1;
        $[104] = t57;
        $[105] = t59;
        $[106] = t60;
    } else {
        t60 = $[106];
    }
    return t60;
};
_s(Settings, "soEBME3YW1q7JprQfW1/tP9WMnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"]
    ];
});
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_953a735d._.js.map