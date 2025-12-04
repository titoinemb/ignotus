(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/hooks/useSubTitle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubtitles",
    ()=>useSubtitles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/parseSrt.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useSubtitles = (srt, srtUrl, videoId, offset)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "ae0df7c80f213a28b1645cf37d4741796342102159b8f4a70db2e3bbf1b77f6f") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae0df7c80f213a28b1645cf37d4741796342102159b8f4a70db2e3bbf1b77f6f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            cues: [],
            activeText: null,
            loading: true,
            error: false
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const shouldShowOverlay = srt !== null && srtUrl !== null;
    let t1;
    let t2;
    if ($[2] !== shouldShowOverlay || $[3] !== srt || $[4] !== srtUrl || $[5] !== state) {
        t1 = ()=>{
            let cancelled = false;
            const loadCues = async ()=>{
                if (!shouldShowOverlay) {
                    return setState({
                        cues: [],
                        activeText: null,
                        loading: false,
                        error: false
                    });
                }
                if (srt) {
                    return setState({
                        ...state,
                        cues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSrt"])(srt),
                        loading: false
                    });
                }
                if (srtUrl) {
                    ;
                    try {
                        const res = await fetch(srtUrl);
                        if (!res.ok) {
                            return setState({
                                ...state,
                                cues: [],
                                loading: false,
                                error: true
                            });
                        }
                        const txt = await res.text();
                        if (!cancelled) {
                            return setState({
                                ...state,
                                cues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSrt"])(txt),
                                loading: false
                            });
                        }
                    } catch (t3) {
                        if (!cancelled) {
                            return setState({
                                ...state,
                                cues: [],
                                loading: false,
                                error: true
                            });
                        }
                    }
                }
            };
            loadCues();
            return ()=>{
                cancelled = true;
            };
        };
        t2 = [
            srt,
            srtUrl,
            shouldShowOverlay,
            state
        ];
        $[2] = shouldShowOverlay;
        $[3] = srt;
        $[4] = srtUrl;
        $[5] = state;
        $[6] = t1;
        $[7] = t2;
    } else {
        t1 = $[6];
        t2 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[8] !== offset || $[9] !== shouldShowOverlay || $[10] !== state.cues || $[11] !== videoId) {
        t3 = ()=>{
            const video = document.getElementById(videoId);
            if (!video) {
                console.warn("Video element not found:", videoId);
                return;
            }
            if (!shouldShowOverlay || state.cues.length === 0) {
                return setState(_temp);
            }
            let raf = 0;
            const updateActiveText = ()=>{
                const currentTime = (video.currentTime || 0) + offset;
                const cue = state.cues.find((c)=>currentTime >= c.start && currentTime <= c.end);
                setState((prevState_0)=>({
                        ...prevState_0,
                        activeText: cue ? cue.text : null
                    }));
                raf = requestAnimationFrame(updateActiveText);
            };
            raf = requestAnimationFrame(updateActiveText);
            return ()=>cancelAnimationFrame(raf);
        };
        t4 = [
            videoId,
            state.cues,
            offset,
            shouldShowOverlay
        ];
        $[8] = offset;
        $[9] = shouldShowOverlay;
        $[10] = state.cues;
        $[11] = videoId;
        $[12] = t3;
        $[13] = t4;
    } else {
        t3 = $[12];
        t4 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[14] !== state.activeText) {
        t5 = {
            activeText: state.activeText
        };
        $[14] = state.activeText;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
};
_s(useSubtitles, "iQBCEooptG4mUqK0Zd1qDy8zLjs=");
function _temp(prevState) {
    return {
        ...prevState,
        activeText: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/SubTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubTitle",
    ()=>SubTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSubTitle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useSubTitle.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const SubTitle = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "3f9c2cb11e0a3951eda4d5cacb8712864f7a4d4908482dba034f2e6557af3e72") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3f9c2cb11e0a3951eda4d5cacb8712864f7a4d4908482dba034f2e6557af3e72";
    }
    const { videoId, srt, srtUrl, offset: t1, className } = t0;
    const offset = t1 === undefined ? 0 : t1;
    const { activeText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSubTitle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubtitles"])(srt, srtUrl, videoId, offset);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "6%",
            pointerEvents: "none",
            textAlign: "center",
            padding: "0 1rem"
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== activeText) {
        t3 = activeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "inline-block",
                background: "rgba(0,0,0,0.7)",
                color: "#fff",
                padding: "6px 10px",
                borderRadius: 6,
                whiteSpace: "pre-wrap",
                lineHeight: 1.2,
                fontSize: 16
            },
            dangerouslySetInnerHTML: {
                __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeSubtitleHtml"])(activeText)
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/SubTitle.tsx",
            lineNumber: 43,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = activeText;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-live": "polite",
            className: className,
            style: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/SubTitle.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = className;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
};
_s(SubTitle, "CQpYF2UUSFiMKS6MZa7CEQZdlto=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSubTitle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubtitles"]
    ];
});
_c = SubTitle;
var _c;
__turbopack_context__.k.register(_c, "SubTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_16b1e9c4._.js.map