module.exports = [
"[project]/src/app/hooks/useSubTitle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSubtitles",
    ()=>useSubtitles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/parseSrt.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useSubtitles = (srt, srtUrl, videoId, offset)=>{
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        cues: [],
        activeText: null,
        loading: true,
        error: false
    });
    const shouldShowOverlay = srt !== null && srtUrl !== null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            ;
            if (srt) {
                return setState({
                    ...state,
                    cues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSrt"])(srt),
                    loading: false
                });
            }
            ;
            if (srtUrl) {
                try {
                    let res = await fetch(srtUrl);
                    if (!res.ok) return setState({
                        ...state,
                        cues: [],
                        loading: false,
                        error: true
                    });
                    let txt = await res.text();
                    if (!cancelled) return setState({
                        ...state,
                        cues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSrt"])(txt),
                        loading: false
                    });
                } catch (error) {
                    if (!cancelled) return setState({
                        ...state,
                        cues: [],
                        loading: false,
                        error: true
                    });
                }
                ;
            }
            ;
        };
        loadCues();
        return ()=>{
            cancelled = true;
        };
    }, [
        srt,
        srtUrl,
        shouldShowOverlay,
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = document.getElementById(videoId);
        if (!video) {
            console.warn('Video element not found:', videoId);
            return;
        }
        ;
        if (!shouldShowOverlay || state.cues.length === 0) return setState((prevState)=>({
                ...prevState,
                activeText: null
            }));
        let raf = 0;
        const updateActiveText = ()=>{
            const currentTime = (video.currentTime || 0) + offset;
            const cue = state.cues.find((c)=>currentTime >= c.start && currentTime <= c.end);
            setState((prevState)=>({
                    ...prevState,
                    activeText: cue ? cue.text : null
                }));
            raf = requestAnimationFrame(updateActiveText);
        };
        raf = requestAnimationFrame(updateActiveText);
        return ()=>cancelAnimationFrame(raf);
    }, [
        videoId,
        state.cues,
        offset,
        shouldShowOverlay
    ]);
    return {
        activeText: state.activeText
    };
};
}),
"[project]/src/app/components/layout/SubTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubTitle",
    ()=>SubTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSubTitle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useSubTitle.ts [app-ssr] (ecmascript)");
;
;
;
;
const SubTitle = ({ videoId, srt, srtUrl, offset = 0, className })=>{
    const { activeText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useSubTitle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSubtitles"])(srt, srtUrl, videoId, offset);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-live": "polite",
        className: className,
        style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '6%',
            pointerEvents: 'none',
            textAlign: 'center',
            padding: '0 1rem'
        },
        children: activeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'inline-block',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: 6,
                whiteSpace: 'pre-wrap',
                lineHeight: 1.2,
                fontSize: 16
            },
            dangerouslySetInnerHTML: {
                __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeSubtitleHtml"])(activeText)
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/layout/SubTitle.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/layout/SubTitle.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=src_app_91a5aa72._.js.map