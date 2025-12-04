(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/functions/downloadUrl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "donwloadUrl",
    ()=>donwloadUrl
]);
const open = (url)=>{
    window.open(url, '_blank');
    return window.location.href;
};
const donwloadUrl = (who)=>{
    if (who === 1) {
        return open("https://duck.ai");
    } else if (who === 2) {
        return open("1");
    } else if (who === 3) {
        return open("1");
    } else if (who === 4) {
        return open("1");
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/findInTable.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findInTable",
    ()=>findInTable
]);
const findInTable = (table, search)=>{
    if (!Array.isArray(table)) return false;
    if (!search || typeof search !== 'object') return false;
    return table.some((item)=>Object.keys(search).every((key)=>item[key] === search[key]));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/formatDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return 'Date invalide';
    }
    ;
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('fr-CA', options);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/formatTime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTime",
    ()=>formatTime
]);
const formatTime = (seconds)=>{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/initSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSettings",
    ()=>initSettings
]);
const initSettings = async (raw)=>{
    if (!raw) {
        const newSettings = JSON.stringify({
            cc: "null",
            kidsMod: {
                actif: false,
                max: 5
            },
            langue: "en",
            quality: "1080p",
            skip: {
                intro: true,
                outro: true
            }
        });
        await Promise.resolve(localStorage.setItem("setting", newSettings));
        window.location.reload();
        return;
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/toggleScrollButtons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleScrollButtons",
    ()=>toggleScrollButtons
]);
const toggleScrollButtons = (list)=>{
    const upButton = document.getElementById('upscrollanimation');
    const downButton = document.getElementById('unscrollanimation');
    const actionUpButton = document.getElementById('upscrollaction');
    const actionDownButton = document.getElementById('unscrollaction');
    const adventureUpButton = document.getElementById('upscrolladventure');
    const adventureDownButton = document.getElementById('unscrolladventure');
    const comedyUpButton = document.getElementById('upscrollcomedy');
    const comedyDownButton = document.getElementById('unscrollcomedy');
    if (list) {
        if (list.id === 'animationlist') {
            if (list.scrollLeft === 0) {
                if (downButton) downButton.style.display = 'none';
            } else {
                if (downButton) downButton.style.display = 'block';
            }
            ;
            const maxScroll = list.scrollWidth - list.clientWidth;
            if (list.scrollLeft >= maxScroll) {
                if (upButton) upButton.style.display = 'none';
            } else {
                if (upButton) upButton.style.display = 'block';
            }
            ;
        }
        ;
        if (list.id === 'actionlist') {
            if (list.scrollLeft === 0) {
                if (actionDownButton) actionDownButton.style.display = 'none';
            } else {
                if (actionDownButton) actionDownButton.style.display = 'block';
            }
            ;
            const maxScroll = list.scrollWidth - list.clientWidth;
            if (list.scrollLeft >= maxScroll) {
                if (actionUpButton) actionUpButton.style.display = 'none';
            } else {
                if (actionUpButton) actionUpButton.style.display = 'block';
            }
            ;
        }
        ;
        if (list.id === 'adventurelist') {
            if (list.scrollLeft === 0) {
                if (adventureDownButton) adventureDownButton.style.display = 'none';
            } else {
                if (adventureDownButton) adventureDownButton.style.display = 'block';
            }
            const maxScroll = list.scrollWidth - list.clientWidth;
            if (list.scrollLeft >= maxScroll) {
                if (adventureUpButton) adventureUpButton.style.display = 'none';
            } else {
                if (adventureUpButton) adventureUpButton.style.display = 'block';
            }
            ;
        }
        ;
        if (list.id === 'comedylist') {
            if (list.scrollLeft === 0) {
                if (comedyDownButton) comedyDownButton.style.display = 'none';
            } else {
                if (comedyDownButton) comedyDownButton.style.display = 'block';
            }
            ;
            const maxScroll = list.scrollWidth - list.clientWidth;
            if (list.scrollLeft >= maxScroll) {
                if (comedyUpButton) comedyUpButton.style.display = 'none';
            } else {
                if (comedyUpButton) comedyUpButton.style.display = 'block';
            }
            ;
        }
        ;
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/smoothScroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smoothScroll",
    ()=>smoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-client] (ecmascript)");
;
const smoothScroll = (element, target, duration)=>{
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    const animateScroll = (currentTime)=>{
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        element.scrollLeft = start + change * progress;
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(element);
        }
        ;
    };
    requestAnimationFrame(animateScroll);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/setupButtonClickListener.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupButtonClickListener",
    ()=>setupButtonClickListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/smoothScroll.ts [app-client] (ecmascript)");
;
const setupButtonClickListener = (id, scrollAmount)=>{
    const list = document.getElementById(id);
    if (list) {
        const currentScrollPosition = list.scrollLeft;
        const targetPosition = currentScrollPosition + scrollAmount;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smoothScroll"])(list, targetPosition, 300);
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/homeclick.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeclick",
    ()=>homeclick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-client] (ecmascript)");
;
const homeclick = (event)=>{
    const target = event.target;
    if (target.id === 'upscrollanimation') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", 500);
    } else if (target.id === 'unscrollanimation') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", -500);
    } else if (target.id === 'upscrollaction') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", 500);
    } else if (target.id === 'unscrollaction') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", -500);
    } else if (target.id === 'upscrolladventure') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", 500);
    } else if (target.id === 'unscrolladventure') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", -500);
    } else if (target.id === 'upscrollcomedy') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", 500);
    } else if (target.id === 'unscrollcomedy') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", -500);
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/homeleanupEventListeners.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeleanupEventListeners",
    ()=>homeleanupEventListeners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeclick.ts [app-client] (ecmascript)");
;
const homeleanupEventListeners = ()=>{
    document.removeEventListener('click', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeclick"]);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/home/initScrollButtons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initScrollButtons",
    ()=>initScrollButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-client] (ecmascript)");
;
const initScrollButtons = ()=>{
    const upButton = document.getElementById('upscrollanimation');
    const downButton = document.getElementById('unscrollanimation');
    const actionUpButton = document.getElementById('upscrollaction');
    const actionDownButton = document.getElementById('unscrollaction');
    const adventureUpButton = document.getElementById('upscrolladventure');
    const adventureDownButton = document.getElementById('unscrolladventure');
    const comedyUpButton = document.getElementById('upscrollcomedy');
    const comedyDownButton = document.getElementById('unscrollcomedy');
    const list = document.getElementById('animationlist');
    const actionList = document.getElementById('actionlist');
    const adventureList = document.getElementById('adventurelist');
    const comedyList = document.getElementById('comedylist');
    if (list) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(list);
    }
    ;
    if (actionList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(actionList);
    }
    ;
    if (adventureList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(adventureList);
    }
    ;
    if (comedyList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(comedyList);
    }
    ;
    if (upButton && downButton) {
        upButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", 500);
        });
        downButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", -500);
        });
    }
    ;
    if (actionUpButton && actionDownButton) {
        actionUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", 500);
        });
        actionDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", -500);
        });
    }
    ;
    if (adventureUpButton && adventureDownButton) {
        adventureUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", 500);
        });
        adventureDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", -500);
        });
    }
    ;
    if (comedyUpButton && comedyDownButton) {
        comedyUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", 500);
        });
        comedyDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", -500);
        });
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/parseSrt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSrt",
    ()=>parseSrt
]);
const parseSrt = (srt)=>{
    return (srt || '').replace(/\r/g, '').split('\n\n').map((b)=>b.trim()).filter(Boolean).map((block)=>{
        const lines = block.split('\n').map((l)=>l.trim());
        if (/^\d+$/.test(lines[0])) lines.shift();
        const time = lines.shift() || '';
        const m = time.match(/(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})\s*--?>\s*(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})/);
        const toSec = (t)=>{
            const p = t.replace(',', '.').split(':');
            return +p[0] * 3600 + +p[1] * 60 + +parseFloat(p[2]);
        };
        return m ? {
            start: toSec(m[1]),
            end: toSec(m[2]),
            text: lines.join('\n')
        } : null;
    }).filter(Boolean);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeSubtitleHtml",
    ()=>sanitizeSubtitleHtml
]);
const sanitizeSubtitleHtml = (input)=>{
    const allowed = [
        'b',
        'i',
        'u',
        'font',
        'i',
        'b',
        'u',
        'span',
        'c'
    ];
    return input.replace(/<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g, (match, tag)=>{
        const t = String(tag).toLowerCase();
        if (allowed.includes(t)) {
            return match[1] === '/' ? `</${t}>` : `<${t}>`;
        }
        return '';
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/create.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAccount",
    ()=>createAccount,
    "saveKeys",
    ()=>saveKeys
]);
let keysTxt = "";
const createAccount = async ()=>{
    try {
        const response = await fetch('http://localhost:8080/account/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const datarep = await response.json();
        if (!response.ok || !datarep || datarep.message !== "1") return window.location.href = "";
        const keys = datarep.data.password || [];
        const username = datarep.data.username;
        for(let i = 0; i < keys.length; i++){
            keysTxt += (i === 0 ? "" : " ") + keys[i];
            const el = document.getElementById(`word0Reg`);
            if (!el) continue;
            el.value += (i === 0 ? "" : " ") + keys[i];
        }
        ;
        const el2 = document.getElementById('word2Reg');
        el2.value = username;
        const createReg = document.getElementById("createReg");
        if (createReg) createReg.style.display = "none";
        const security = document.getElementById("security");
        if (security) security.style.display = "none";
        const save = document.getElementById("save");
        if (save) save.style.display = "block";
        const words2 = document.getElementById("words2");
        if (words2) words2.style.removeProperty("display");
        const savebtn = document.getElementById("savebtn");
        if (savebtn) savebtn.style.display = "block";
        const words3 = document.getElementById("words3");
        if (words3) words3.style.removeProperty("display");
        const desc = document.getElementById("desc");
        if (desc) desc.style.removeProperty("display");
        const desc2 = document.getElementById("desc2");
        if (desc2) desc2.style.removeProperty("display");
        return;
    } catch (e) {
        return window.location.href = "";
    }
    ;
};
const saveKeys = async ()=>{
    if (!keysTxt) return;
    document.getElementById("saveok").style.display = "block";
    return await navigator.clipboard.writeText(keysTxt);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/deleteSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSession",
    ()=>deleteSession
]);
const deleteSession = async (session, username, id)=>{
    if (!session || !username) return;
    await fetch('http://localhost:8080/account/session/remove', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            session: session,
            username: username,
            sessionid: id
        })
    });
    return window.location.href = "";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/delete.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAccount",
    ()=>deleteAccount
]);
const deleteAccount = async ()=>{
    let username = localStorage.getItem("username");
    let session = localStorage.getItem("session");
    if (!username || !session) return;
    try {
        await fetch('http://localhost:8080/account/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session: session,
                username: username
            })
        });
    } catch (e) {
        return;
    } finally{
        return window.location.href = "";
    }
    //TURBOPACK unreachable
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/login.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "login",
    ()=>login
]);
function error2() {
    document.getElementById("error2").style.display = "block";
    document.getElementById("error1").style.display = "none";
    return;
}
const login = async ()=>{
    let input = document.getElementById(`word1`);
    let inputUsername = document.getElementById(`word2`);
    let keys = input.value.split(/\s+/).filter((s)=>s.length > 0);
    if (keys.length !== 12) return document.getElementById("error1").style.display = "block";
    try {
        const response = await fetch('http://localhost:8080/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: inputUsername.value,
                password: keys
            })
        });
        const datarep = await response.json();
        if (!response.ok || datarep.message !== "1") return error2();
        localStorage.setItem('session', datarep.token);
        localStorage.setItem('username', datarep.username);
        return window.location.href = "";
    } catch (e) {
        return error2();
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "session",
    ()=>session
]);
const session = async (session, username)=>{
    try {
        const response = await fetch('http://localhost:8080/account/session/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                session: session
            })
        });
        const datarep = await response.json();
        if (!response.ok || !datarep) return 0;
        if (datarep.message !== "1") return 0;
        return 1;
    } catch (e) {
        return 0;
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/wishlist.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wishlist",
    ()=>wishlist
]);
const wishlist = async (table, id)=>{
    let idStorage = localStorage.getItem('username');
    let sessionStorage = localStorage.getItem('session');
    let checkBox = document.getElementById("check");
    if (!sessionStorage || !table || !id || !idStorage) return;
    var what;
    if (checkBox.style.display === "flex") {
        checkBox.style.display = "none";
        what = "remove";
    } else {
        checkBox.style.display = "flex";
        what = "add";
    }
    ;
    return await fetch('http://localhost:8080/account/wishlist/' + what, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: idStorage,
            session: sessionStorage,
            data: {
                table: table,
                id: id
            }
        })
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/account/saveSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSettings",
    ()=>saveSettings
]);
const saveSettings = async (username)=>{
    const qualityEl = document.getElementById('qualitys');
    const langEl = document.getElementById('lang');
    const langCCEl = document.getElementById('langCC');
    const skipIntroEl = document.getElementById('skipIntro');
    const skipOutroEl = document.getElementById('skipoutro');
    let session = localStorage.getItem("session");
    const toBool = (s, defaultVal = false)=>{
        if (s == null) return defaultVal;
        switch(s.trim().toLowerCase()){
            case 'true':
                return true;
            case 'false':
                return false;
        }
        ;
    };
    const payload = {
        quality: qualityEl?.value,
        langue: langEl?.value,
        cc: langCCEl?.value,
        skip: {
            intro: toBool(skipIntroEl?.value, true),
            outro: toBool(skipOutroEl?.value, true)
        },
        kidsMod: {
            actif: false,
            max: 5
        }
    };
    if (session) {
        await fetch('http://localhost:8080/account/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session: session,
                username: username,
                datas: payload
            })
        });
    }
    ;
    await localStorage.setItem("setting", JSON.stringify(payload));
    await window.location.reload();
    return;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/adBlockDetector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdBlockDetector",
    ()=>AdBlockDetector
]);
const AdBlockDetector = ()=>{
    return false;
};
_c = AdBlockDetector;
var _c;
__turbopack_context__.k.register(_c, "AdBlockDetector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/controlsBtn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "controlsBtn",
    ()=>controlsBtn
]);
const controlsBtn = async (input)=>{
    let video = document.getElementById("video-player");
    if (!video) return;
    let pauseButton = document.querySelector(".pauseBtn");
    let playButton = document.querySelector(".playBtn");
    if (!pauseButton || !playButton) return;
    if (input === 1) {
        pauseButton.style.display = "block";
        playButton.style.display = "none";
        video.play();
    } else if (input === 0) {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
        video.pause();
    } else if (input === 2) {
        video.currentTime += 10;
    } else if (input === 3) {
        video.currentTime -= 10;
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/fullscreen.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullscreen",
    ()=>fullscreen
]);
const fullscreen = async ()=>{
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/paramWindow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paramWindow",
    ()=>paramWindow
]);
const paramWindow = async ()=>{
    let parambox = document.getElementById("paramBox");
    if (parambox.style.display === "block") {
        return parambox.style.display = "none";
    } else {
        return parambox.style.display = "block";
    }
    //TURBOPACK unreachable
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/pip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pip",
    ()=>pip
]);
const pip = async ()=>{
    let videoElement = document.getElementById('video-player');
    if (videoElement) {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await videoElement.requestPictureInPicture();
        }
        ;
    }
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/watch/settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "settingsFunction",
    ()=>settingsFunction
]);
const settingsFunction = async (what)=>{
    if (!what) return;
    let all = document.getElementById("boxAll");
    let quality = document.getElementById("boxQuality");
    let cc = document.getElementById("boxcc");
    let langue = document.getElementById("boxlang");
    if (what === 1) {
        all.style.display = "none";
        quality.style.display = "flex";
        return;
    }
    ;
    if (what === 2) {
        all.style.display = "block";
        quality.style.display = "none";
        cc.style.display = "none";
        langue.style.display = "none";
        return;
    }
    ;
    if (what === 3) {
        all.style.display = "none";
        langue.style.display = "flex";
        return;
    }
    ;
    if (what === 4) {
        all.style.display = "none";
        cc.style.display = "flex";
        return;
    }
    ;
    return;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$downloadUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/downloadUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$findInTable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/findInTable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatTime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$initSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/initSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/smoothScroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeclick.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeleanupEventListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeleanupEventListeners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$initScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/initScrollButtons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/parseSrt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$create$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/create.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$deleteSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/deleteSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/delete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$login$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/login.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$wishlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/wishlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$saveSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/saveSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$adBlockDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/adBlockDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$controlsBtn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/controlsBtn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$fullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/fullscreen.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$paramWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/paramWindow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$pip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/pip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/settings.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/scripts/home.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeclick.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeleanupEventListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeleanupEventListeners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$initScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/initScrollButtons.ts [app-client] (ecmascript)");
;
document.addEventListener('click', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeclick"]);
window.addEventListener('beforeunload', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeleanupEventListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homeleanupEventListeners"]);
window.addEventListener('load', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$initScrollButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initScrollButtons"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/layout/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AntiAdBlock",
    ()=>AntiAdBlock,
    "Error500",
    ()=>Error500,
    "Footer",
    ()=>Footer,
    "Header",
    ()=>Header,
    "Loading",
    ()=>Loading,
    "SubTitle",
    ()=>SubTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AntiAdBlock = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c = ()=>__turbopack_context__.A("[project]/src/app/components/layout/AntiAdBlock.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.AntiAdBlock
        })));
_c1 = AntiAdBlock;
const Error500 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c2 = ()=>__turbopack_context__.A("[project]/src/app/components/layout/Error500.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.Error500
        })));
_c3 = Error500;
const Footer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c4 = ()=>__turbopack_context__.A("[project]/src/app/components/layout/Footer.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.Footer
        })));
_c5 = Footer;
const Header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c6 = ()=>__turbopack_context__.A("[project]/src/app/components/layout/Header.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.Header
        })));
_c7 = Header;
const Loading = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c8 = ()=>__turbopack_context__.A("[project]/src/app/components/layout/Loading.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.Loading
        })));
_c9 = Loading;
const SubTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c10 = ()=>__turbopack_context__.A("[project]/src/app/components/layout/SubTitle.tsx [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.SubTitle
        })));
_c11 = SubTitle;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "AntiAdBlock$lazy");
__turbopack_context__.k.register(_c1, "AntiAdBlock");
__turbopack_context__.k.register(_c2, "Error500$lazy");
__turbopack_context__.k.register(_c3, "Error500");
__turbopack_context__.k.register(_c4, "Footer$lazy");
__turbopack_context__.k.register(_c5, "Footer");
__turbopack_context__.k.register(_c6, "Header$lazy");
__turbopack_context__.k.register(_c7, "Header");
__turbopack_context__.k.register(_c8, "Loading$lazy");
__turbopack_context__.k.register(_c9, "Loading");
__turbopack_context__.k.register(_c10, "SubTitle$lazy");
__turbopack_context__.k.register(_c11, "SubTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/hooks/useHome.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHome",
    ()=>useHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useHome = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "5cea246ae2ca3c242d45c7e75b92386a18a7f1066c55e75e56d4e00b0d61034b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5cea246ae2ca3c242d45c7e75b92386a18a7f1066c55e75e56d4e00b0d61034b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            loading: true,
            error: false,
            data: null,
            listAction: [],
            listAdventure: [],
            listCommedy: [],
            listAnim: []
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== state) {
        t1 = ()=>{
            const fetchData = async ()=>{
                ;
                try {
                    const response = await fetch("http://localhost:8080/home", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (!response.ok) {
                        setState({
                            ...state,
                            error: true
                        });
                        return;
                    }
                    const datarep = await response.json();
                    if (!datarep) {
                        setState({
                            ...state,
                            error: true
                        });
                        return;
                    }
                    setState({
                        error: false,
                        data: datarep,
                        listAction: datarep.data2,
                        listAdventure: datarep.data4,
                        listCommedy: datarep.data5,
                        listAnim: datarep.data3,
                        loading: false
                    });
                } catch (t3) {
                    setState({
                        ...state,
                        loading: false,
                        error: true
                    });
                }
            };
            fetchData();
        };
        t2 = [
            state
        ];
        $[2] = state;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return state;
};
_s(useHome, "JxtqLeQAOpJHyhwylfbSe2NhJoE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/features/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scripts$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/scripts/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useHome.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Home = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "4c6a30615572480a024cfa4a4756f3bd02dc85886743d73302998e37fc8f9b2d") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c6a30615572480a024cfa4a4756f3bd02dc85886743d73302998e37fc8f9b2d";
    }
    const { json, lang } = t0;
    const { data, error, loading, listAction, listAdventure, listAnim, listCommedy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHome"])();
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 32,
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
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error500"], {
                lang: lang,
                json: json
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 42,
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
    const t1 = data.data1[0].data[lang];
    let t2;
    if ($[5] !== t1.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: t1.title
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1.title;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z",
                stroke: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 62,
                columnNumber: 109
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== data.data1[0].note) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "note",
            children: [
                t3,
                data.data1[0].note,
                "/10"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = data.data1[0].note;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = json.genres[data.data1[0].genres[0]];
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 78,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const t7 = json.genres[data.data1[0].genres[1]];
    let t8;
    if ($[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 87,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = json.genres[data.data1[0].genres[2]];
    let t10;
    if ($[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 96,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t6 || $[18] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "genre",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: [
                    t6,
                    t8,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 104,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t6;
        $[18] = t8;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const t12 = data.data1[0].saisons && Array.isArray(data.data1[0].saisons) ? `${data.data1[0].saisons.length} saisons` : data.data1[0].time;
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "time",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t11 || $[23] !== t13 || $[24] !== t4) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "etc",
            children: [
                t4,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t11;
        $[23] = t13;
        $[24] = t4;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = data.data1[0].data[lang];
    let t16;
    if ($[26] !== t15.description) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "description",
            children: t15.description
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15.description;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== data.data1[0]._id.$oid || $[29] !== data.data1[0].saisons) {
        t17 = ()=>{
            let table = "series";
            if (!data.data1[0].saisons) {
                table = "movies";
            }
            window.location.href = "./item?t=" + table + "&i=" + data.data1[0]._id.$oid;
        };
        $[28] = data.data1[0]._id.$oid;
        $[29] = data.data1[0].saisons;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== json.home.text1 || $[32] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "btn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "linkId",
                onClick: t17,
                children: json.home.text1
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 157,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = json.home.text1;
        $[32] = t17;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== t14 || $[35] !== t16 || $[36] !== t18 || $[37] !== t2) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "info",
            children: [
                t2,
                t14,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t14;
        $[35] = t16;
        $[36] = t18;
        $[37] = t2;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== data.data1[0].picture) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: data.data1[0].picture,
                alt: "top"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 177,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = data.data1[0].picture;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t19 || $[42] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "top",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t19;
        $[42] = t20;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== json.home.text2 || $[45] !== listAction) {
        t22 = listAction && listAction.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.home.text2
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 194,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "list",
                    id: "actionlist",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                display: "none"
                            },
                            className: "btnscroll linkId",
                            id: "unscrollaction",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 194,
                            columnNumber: 159
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: listAction.map(_temp)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 196,
                            columnNumber: 75
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btnscroll btnscroll2 linkId",
                            id: "upscrollaction",
                            children: ">"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 196,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 194,
                    columnNumber: 121
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 194,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = json.home.text2;
        $[45] = listAction;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== json.home.text3 || $[48] !== listAnim) {
        t23 = listAnim && listAnim.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section section2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.home.text3
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 205,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "list",
                    id: "animationlist",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                display: "none"
                            },
                            className: "btnscroll linkId",
                            id: "unscrollanimation",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 205,
                            columnNumber: 167
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: listAnim.map(_temp2)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 207,
                            columnNumber: 78
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btnscroll btnscroll2 linkId",
                            id: "upscrollanimation",
                            children: ">"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 207,
                            columnNumber: 114
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 205,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 205,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = json.home.text3;
        $[48] = listAnim;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== json.home.text4 || $[51] !== listAdventure) {
        t24 = listAdventure && listAdventure.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section section2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.home.text4
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 216,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "list",
                    id: "adventurelist",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                display: "none"
                            },
                            className: "btnscroll linkId",
                            id: "unscrolladventure",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 216,
                            columnNumber: 177
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: listAdventure.map(_temp3)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 218,
                            columnNumber: 78
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btnscroll btnscroll2 linkId",
                            id: "upscrolladventure",
                            children: ">"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 218,
                            columnNumber: 119
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 216,
                    columnNumber: 136
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 216,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = json.home.text4;
        $[51] = listAdventure;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== json.home.text5 || $[54] !== listCommedy) {
        t25 = listCommedy && listCommedy.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section section2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: json.home.text5
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 227,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "list",
                    id: "comedylist",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                display: "none"
                            },
                            className: "btnscroll linkId",
                            id: "unscrollcomedy",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 227,
                            columnNumber: 170
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: listCommedy.map(_temp4)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 229,
                            columnNumber: 75
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btnscroll btnscroll2 linkId",
                            id: "upscrollcomedy",
                            children: ">"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 229,
                            columnNumber: 114
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/features/Home.tsx",
                    lineNumber: 227,
                    columnNumber: 132
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 227,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = json.home.text5;
        $[54] = listCommedy;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t22 || $[57] !== t23 || $[58] !== t24 || $[59] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mid",
            children: [
                t22,
                t23,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t22;
        $[57] = t23;
        $[58] = t24;
        $[59] = t25;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] !== t21 || $[62] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "app",
            children: [
                t21,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t21;
        $[62] = t26;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    return t27;
};
_s(Home, "QD5aujmwHVfgB7J87REQMBmqqAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHome"]
    ];
});
_c = Home;
function _temp(item) {
    const t = item.saisons ? "series" : "movies";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "linkId",
            id: item._id.$oid,
            role: "button",
            tabIndex: 0,
            onClick: ()=>{
                window.location.href = `/item/?t=${t}&i=${item._id.$oid}`;
            },
            onKeyDown: (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    window.location.href = `/item/?t=${t}&i=${item._id.$oid}`;
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
                        children: item.minipicture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.minipicture,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 268,
                            columnNumber: 76
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 268,
                        columnNumber: 31
                    }, this),
                    item.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.picture,
                        alt: "cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 268,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 268,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 260,
            columnNumber: 34
        }, this)
    }, item._id.$oid, false, {
        fileName: "[project]/src/app/components/features/Home.tsx",
        lineNumber: 260,
        columnNumber: 10
    }, this);
}
function _temp2(item_0) {
    const t_0 = item_0.saisons ? "series" : "movies";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "linkId",
            id: item_0._id.$oid,
            onClick: ()=>{
                window.location.href = `/item/?t=${t_0}&i=${item_0._id.$oid}`;
            },
            onKeyDown: (e_0)=>{
                if (e_0.key === "Enter" || e_0.key === " ") {
                    window.location.href = `/item/?t=${t_0}&i=${item_0._id.$oid}`;
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
                        children: item_0.minipicture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item_0.minipicture,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 280,
                            columnNumber: 78
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 280,
                        columnNumber: 31
                    }, this),
                    item_0.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item_0.picture,
                        alt: "cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 280,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 280,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 272,
            columnNumber: 36
        }, this)
    }, item_0._id.$oid, false, {
        fileName: "[project]/src/app/components/features/Home.tsx",
        lineNumber: 272,
        columnNumber: 10
    }, this);
}
function _temp3(item_1) {
    const t_1 = item_1.saisons ? "series" : "movies";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "linkId",
            id: item_1._id.$oid,
            role: "button",
            tabIndex: 0,
            onClick: ()=>{
                window.location.href = `/item/?t=${t_1}&i=${item_1._id.$oid}`;
            },
            onKeyDown: (e_1)=>{
                if (e_1.key === "Enter" || e_1.key === " ") {
                    window.location.href = `/item/?t=${t_1}&i=${item_1._id.$oid}`;
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
                        children: item_1.minipicture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item_1.minipicture,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 292,
                            columnNumber: 78
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 292,
                        columnNumber: 31
                    }, this),
                    item_1.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item_1.picture,
                        alt: "cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 292,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 292,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 284,
            columnNumber: 36
        }, this)
    }, item_1._id.$oid, false, {
        fileName: "[project]/src/app/components/features/Home.tsx",
        lineNumber: 284,
        columnNumber: 10
    }, this);
}
function _temp4(item_2) {
    const t_2 = item_2.saisons ? "series" : "movies";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "linkId",
            id: item_2._id.$oid,
            role: "button",
            tabIndex: 0,
            onClick: ()=>{
                window.location.href = `/item/?t=${t_2}&i=${item_2._id.$oid}`;
            },
            onKeyDown: (e_2)=>{
                if (e_2.key === "Enter" || e_2.key === " ") {
                    window.location.href = `/item/?t=${t_2}&i=${item_2._id.$oid}`;
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
                        children: item_2.minipicture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item_2.minipicture,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Home.tsx",
                            lineNumber: 304,
                            columnNumber: 78
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 304,
                        columnNumber: 31
                    }, this),
                    item_2.picture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item_2.picture,
                        alt: "cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Home.tsx",
                        lineNumber: 304,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Home.tsx",
                lineNumber: 304,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Home.tsx",
            lineNumber: 296,
            columnNumber: 36
        }, this)
    }, item_2._id.$oid, false, {
        fileName: "[project]/src/app/components/features/Home.tsx",
        lineNumber: 296,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/features/Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$initSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/initSettings.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Page() {
    _s();
    const [json, setJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const raw = localStorage.getItem("setting");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$initSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSettings"])(raw).finally({
                "Page.useEffect": ()=>{
                    const langSetting = raw ? JSON.parse(raw)?.langue : "en";
                    __turbopack_context__.f({
                        "../langs/ar": {
                            id: ()=>"[project]/src/langs/ar.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ar.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/ar.ts": {
                            id: ()=>"[project]/src/langs/ar.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ar.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/de": {
                            id: ()=>"[project]/src/langs/de.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/de.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/de.ts": {
                            id: ()=>"[project]/src/langs/de.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/de.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/en": {
                            id: ()=>"[project]/src/langs/en.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/en.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/en.ts": {
                            id: ()=>"[project]/src/langs/en.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/en.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/es": {
                            id: ()=>"[project]/src/langs/es.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/es.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/es.ts": {
                            id: ()=>"[project]/src/langs/es.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/es.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/fr": {
                            id: ()=>"[project]/src/langs/fr.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/fr.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/fr.ts": {
                            id: ()=>"[project]/src/langs/fr.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/fr.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/hi": {
                            id: ()=>"[project]/src/langs/hi.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/hi.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/hi.ts": {
                            id: ()=>"[project]/src/langs/hi.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/hi.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/it": {
                            id: ()=>"[project]/src/langs/it.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/it.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/it.ts": {
                            id: ()=>"[project]/src/langs/it.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/it.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/jp": {
                            id: ()=>"[project]/src/langs/jp.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/jp.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/jp.ts": {
                            id: ()=>"[project]/src/langs/jp.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/jp.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/ko": {
                            id: ()=>"[project]/src/langs/ko.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ko.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/ko.ts": {
                            id: ()=>"[project]/src/langs/ko.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ko.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/nl": {
                            id: ()=>"[project]/src/langs/nl.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/nl.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/nl.ts": {
                            id: ()=>"[project]/src/langs/nl.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/nl.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/pt": {
                            id: ()=>"[project]/src/langs/pt.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/pt.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/pt.ts": {
                            id: ()=>"[project]/src/langs/pt.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/pt.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/ru": {
                            id: ()=>"[project]/src/langs/ru.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ru.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/ru.ts": {
                            id: ()=>"[project]/src/langs/ru.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/ru.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/sv": {
                            id: ()=>"[project]/src/langs/sv.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/sv.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/sv.ts": {
                            id: ()=>"[project]/src/langs/sv.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/sv.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/tr": {
                            id: ()=>"[project]/src/langs/tr.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/tr.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/tr.ts": {
                            id: ()=>"[project]/src/langs/tr.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/tr.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/zh": {
                            id: ()=>"[project]/src/langs/zh.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/zh.ts [app-client] (ecmascript, async loader)")
                        },
                        "../langs/zh.ts": {
                            id: ()=>"[project]/src/langs/zh.ts [app-client] (ecmascript, async loader)",
                            module: ()=>__turbopack_context__.A("[project]/src/langs/zh.ts [app-client] (ecmascript, async loader)")
                        }
                    }).import(`../langs/${langSetting}`).then({
                        "Page.useEffect": (module)=>{
                            setJson(module.default);
                            setLang(langSetting);
                        }
                    }["Page.useEffect"]);
                }
            }["Page.useEffect"]);
        }
    }["Page.useEffect"], []);
    if (!json) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/app.tsx",
        lineNumber: 19,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Home"], {
        json: json,
        lang: lang
    }, void 0, false, {
        fileName: "[project]/src/app/app.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_s(Page, "l6QDo7PevBYpzyM/V3P9OZfXNFk=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_fd9c08f1._.js.map