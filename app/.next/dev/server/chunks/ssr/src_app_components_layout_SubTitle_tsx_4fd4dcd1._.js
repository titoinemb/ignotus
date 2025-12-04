module.exports = [
"[project]/src/app/components/layout/SubTitle.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubTitle",
    ()=>SubTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../functions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../../hooks/useSubTitle'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const SubTitle = ({ videoId, srt, srtUrl, offset = 0, className })=>{
    const { activeText } = useSubtitles(srt, srtUrl, videoId, offset);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: activeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                __html: sanitizeSubtitleHtml(activeText)
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

//# sourceMappingURL=src_app_components_layout_SubTitle_tsx_4fd4dcd1._.js.map