(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/scripts/watch.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

window.addEventListener('load', async ()=>{
    let cleanupInit = null;
    const waitForElements = ()=>{
        const myDiv = document.getElementById("controls");
        const video = document.getElementById("video-player");
        if (myDiv) {
            init(myDiv, video);
            return true;
        }
        return false;
    };
    const observer = new MutationObserver(()=>{
        if (waitForElements()) {
            observer.disconnect();
        }
        ;
    });
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    waitForElements();
    function init(myDiv, video) {
        let timeout;
        const hideDiv = ()=>{
            if (video?.paused) return;
            myDiv.style.visibility = "hidden";
            myDiv.style.pointerEvents = "none";
        };
        const showDiv = ()=>{
            myDiv.style.visibility = "visible";
            myDiv.style.pointerEvents = "auto";
            myDiv.style.display = "block";
        };
        const resetTimeout = ()=>{
            if (video?.paused) return;
            if (getComputedStyle(myDiv).visibility === "visible") {
                if (timeout) window.clearTimeout(timeout);
                timeout = window.setTimeout(hideDiv, 1000);
            }
        };
        const onVideoPause = ()=>{
            if (timeout) window.clearTimeout(timeout);
            showDiv();
        };
        const onVideoPlay = ()=>{
            resetTimeout();
        };
        document.addEventListener("mousemove", showDiv);
        document.addEventListener("click", showDiv);
        document.addEventListener("mousemove", resetTimeout);
        document.addEventListener("click", resetTimeout);
        video?.addEventListener("pause", onVideoPause);
        video?.addEventListener("play", onVideoPlay);
        if (video?.paused) showDiv();
        else hideDiv();
        cleanupInit = ()=>{
            document.removeEventListener("mousemove", showDiv);
            document.removeEventListener("click", showDiv);
            document.removeEventListener("mousemove", resetTimeout);
            document.removeEventListener("click", resetTimeout);
            video?.removeEventListener("pause", onVideoPause);
            video?.removeEventListener("play", onVideoPlay);
            if (timeout) window.clearTimeout(timeout);
        };
    }
    ;
    return ()=>{
        observer.disconnect();
        if (cleanupInit) cleanupInit();
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/hooks/useWatch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatch",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-WWGJGFF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$adBlockDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/adBlockDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatTime.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useWatch = (lang)=>{
    _s();
    let config = JSON.parse(localStorage.getItem("setting") || "[]");
    let location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    let params = new URLSearchParams(location.search);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loading: true,
        error: false,
        error404: false,
        videoUrl: null,
        adblockStatut: false,
        langDispo: [],
        settings: '',
        duration: 0,
        currentTime: 0,
        time: '00:00:00',
        mySrt: null,
        totalTime: '00:00:00',
        quality: config.quality
    });
    const queryParams = {};
    const handleRangeChange = (event)=>{
        let newTime = Number(event.target.value);
        setState((prevState)=>({
                ...prevState,
                currentTime: newTime
            }));
        let video = document.getElementById("video-player");
        if (video) {
            video.currentTime = newTime;
            let rangeInput = event.target;
            let percentage = newTime / video.duration * 100;
            rangeInput.style.setProperty('--current-time', `${percentage}%`);
            let remainingTime = video.duration - newTime;
            let hours = Math.floor(remainingTime / 3600);
            let minutes = Math.floor(remainingTime % 3600 / 60);
            let seconds = Math.floor(remainingTime % 60);
            let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            setState((prevState_0)=>({
                    ...prevState_0,
                    time: formattedTime
                }));
        }
        ;
    };
    params.forEach((value, key)=>{
        queryParams[key] = value;
    });
    (async ()=>{
        let adblock = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$adBlockDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBlockDetector"])();
        return await setState((prevState_1)=>({
                ...prevState_1,
                adblockStatut: adblock
            }));
    })();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatch.useEffect": ()=>{
            ({
                "useWatch.useEffect": async ()=>{
                    try {
                        let response = await fetch('http://localhost:8080/item', {
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
                        let datarep = await response.json();
                        if (datarep.message !== "1") return setState({
                            "useWatch.useEffect": (prevState_3)=>({
                                    ...prevState_3,
                                    error404: true
                                })
                        }["useWatch.useEffect"]);
                        if (!response.ok || !datarep) return setState({
                            "useWatch.useEffect": (prevState_4)=>({
                                    ...prevState_4,
                                    error: true
                                })
                        }["useWatch.useEffect"]);
                        let sessionStorage = localStorage.getItem('session');
                        if (sessionStorage) {
                            let response3 = await fetch('http://localhost:8080/account/datas', {
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
                            const datarep3 = await response3.json();
                            if (!response3.ok || !datarep3 || datarep3.message !== "1") return setState({
                                "useWatch.useEffect": (prevState_5)=>({
                                        ...prevState_5,
                                        error: true
                                    })
                            }["useWatch.useEffect"]);
                            await setState({
                                "useWatch.useEffect": (prevState_6)=>({
                                        ...prevState_6,
                                        quality: datarep3.datas.settings.quality
                                    })
                            }["useWatch.useEffect"]);
                            await setState({
                                "useWatch.useEffect": (prevState_7)=>({
                                        ...prevState_7,
                                        settings: datarep3.datas.settings
                                    })
                            }["useWatch.useEffect"]);
                        } else {
                            setState({
                                "useWatch.useEffect": (prevState_8)=>({
                                        ...prevState_8,
                                        settings: JSON.parse(localStorage.getItem('setting'))
                                    })
                            }["useWatch.useEffect"]);
                        }
                        ;
                        //let CCStorage = JSON.parse(localStorage.getItem('setting') as string).cc;
                        //if (CCStorage !== "null") await setState(prevState => ({ ...prevState, mySrt: `http://localhost/files/${datarep.data.data?.[lang].cc}` }));
                        if (queryParams.e) {
                            await setState({
                                "useWatch.useEffect": (prevState_9)=>({
                                        ...prevState_9,
                                        langDispo: datarep.data.saisons[queryParams.e].episode[queryParams.e].data
                                    })
                            }["useWatch.useEffect"]);
                        } else {
                            await setState({
                                "useWatch.useEffect": (prevState_10)=>({
                                        ...prevState_10,
                                        langDispo: datarep.data.data
                                    })
                            }["useWatch.useEffect"]);
                        }
                        ;
                        await setState({
                            "useWatch.useEffect": (prevState_11)=>({
                                    ...prevState_11,
                                    videoUrl: `http://localhost/files/${datarep.data.data?.[lang]?.quality?.["p" + state.quality.replace(/p$/, '')]}`
                                })
                        }["useWatch.useEffect"]);
                    } catch (err) {
                        setState({
                            "useWatch.useEffect": (prevState_2)=>({
                                    ...prevState_2,
                                    error: true
                                })
                        }["useWatch.useEffect"]);
                    } finally{
                        setState({
                            "useWatch.useEffect": (prevState)=>({
                                    ...prevState,
                                    loading: false
                                })
                        }["useWatch.useEffect"]);
                    }
                    ;
                }
            })["useWatch.useEffect"]();
        }
    }["useWatch.useEffect"], [
        queryParams.i,
        queryParams.t,
        queryParams.e,
        queryParams.s,
        lang,
        state.quality
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatch.useEffect": ()=>{
            let video_0 = document.getElementById("video-player");
            if (video_0) {
                video_0.onloadedmetadata = ({
                    "useWatch.useEffect": ()=>{
                        setState({
                            "useWatch.useEffect": (prevState_12)=>({
                                    ...prevState_12,
                                    duration: video_0.duration
                                })
                        }["useWatch.useEffect"]);
                        setState({
                            "useWatch.useEffect": (prevState_13)=>({
                                    ...prevState_13,
                                    totalTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(video_0.duration)
                                })
                        }["useWatch.useEffect"]);
                    }
                })["useWatch.useEffect"];
                let updateCurrentTime = {
                    "useWatch.useEffect.updateCurrentTime": ()=>{
                        setState({
                            "useWatch.useEffect.updateCurrentTime": (prevState_14)=>({
                                    ...prevState_14,
                                    currentTime: video_0.currentTime
                                })
                        }["useWatch.useEffect.updateCurrentTime"]);
                        let rangeInput_0 = document.querySelector('input[type="range"]');
                        let percentage_0 = video_0.currentTime / video_0.duration * 100;
                        if (rangeInput_0) {
                            rangeInput_0.style.setProperty('--current-time', `${percentage_0}%`);
                        }
                        ;
                        let remainingTime_0 = video_0.currentTime;
                        let hours_0 = Math.floor(remainingTime_0 / 3600);
                        let minutes_0 = Math.floor(remainingTime_0 % 3600 / 60);
                        let seconds_0 = Math.floor(remainingTime_0 % 60);
                        setState({
                            "useWatch.useEffect.updateCurrentTime": (prevState_15)=>({
                                    ...prevState_15,
                                    time: `${String(hours_0).padStart(2, '0')}:${String(minutes_0).padStart(2, '0')}:${String(seconds_0).padStart(2, '0')}`
                                })
                        }["useWatch.useEffect.updateCurrentTime"]);
                    }
                }["useWatch.useEffect.updateCurrentTime"];
                video_0.addEventListener('timeupdate', updateCurrentTime);
                return ({
                    "useWatch.useEffect": ()=>{
                        video_0.removeEventListener('timeupdate', updateCurrentTime);
                    }
                })["useWatch.useEffect"];
            }
            ;
            return;
        }
    }["useWatch.useEffect"], [
        state.videoUrl
    ]);
    return {
        ...state,
        handleRangeChange,
        queryParams
    };
};
_s(useWatch, "NcZopJwnkaYlmr0o2ZifJWwNv4U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$WWGJGFF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/features/Watch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Watch",
    ()=>Watch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/layout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scripts$2f$watch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/scripts/watch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$pip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/pip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$fullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/fullscreen.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$paramWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/paramWindow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$controlsBtn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/controlsBtn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/features/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useWatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useWatch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const Watch = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(133);
    if ($[0] !== "c3ab4475b1e5712cf2cd9e75730b88309155fa8610033fe22da62a8f3e6991e4") {
        for(let $i = 0; $i < 133; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3ab4475b1e5712cf2cd9e75730b88309155fa8610033fe22da62a8f3e6991e4";
    }
    const { json, lang } = t0;
    const { adblockStatut, currentTime, duration, error, error404, langDispo, loading, mySrt, settings, time, totalTime, videoUrl, handleRangeChange, queryParams } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useWatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(lang);
    if (loading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 41,
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
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 51,
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
    if (error404 === true || !videoUrl) {
        let t1;
        if ($[5] !== json || $[6] !== lang) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$features$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error404"], {
                lang: lang,
                json: json
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 63,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[5] = json;
            $[6] = lang;
            $[7] = t1;
        } else {
            t1 = $[7];
        }
        return t1;
    }
    if (adblockStatut === true) {
        let t1;
        if ($[8] !== json || $[9] !== lang) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AntiAdBlock"], {
                lang: lang,
                json: json
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = json;
            $[9] = lang;
            $[10] = t1;
        } else {
            t1 = $[10];
        }
        return t1;
    }
    let t1;
    if ($[11] !== videoUrl) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            id: "video-player",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                src: videoUrl,
                type: "video/mp4"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 86,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = videoUrl;
        $[12] = t1;
    } else {
        t1 = $[12];
    }
    let t2;
    if ($[13] !== mySrt) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$layout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTitle"], {
            videoId: "video-player",
            srtUrl: mySrt
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = mySrt;
        $[14] = t2;
    } else {
        t2 = $[14];
    }
    let t3;
    if ($[15] !== json.watch.txt1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: json.watch.txt1
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = json.watch.txt1;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== settings.quality) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: settings.quality
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = settings.quality;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                fill: "gray",
                height: "17px",
                width: "17px",
                version: "1.1",
                id: "Capa_1",
                viewBox: "0 0 55.752 55.752",
                xmlSpace: "preserve",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 118,
                        columnNumber: 230
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 118,
                    columnNumber: 227
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 118,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "option",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t4;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== t3 || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                onClick: _temp,
                children: [
                    t3,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 133,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t3;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== json.watch.txt2) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: json.watch.txt2
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = json.watch.txt2;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== settings.langue) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: settings.langue
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = settings.langue;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                fill: "gray",
                height: "17px",
                width: "17px",
                version: "1.1",
                id: "Capa_1",
                viewBox: "0 0 55.752 55.752",
                xmlSpace: "preserve",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 158,
                        columnNumber: 231
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 158,
                    columnNumber: 228
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 158,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "option",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t9;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== t11 || $[33] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                onClick: _temp2,
                children: [
                    t8,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 173,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t11;
        $[33] = t8;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== json.watch.txt3) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: json.watch.txt3
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = json.watch.txt3;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    const t14 = settings.cc === null || settings.cc === "null" ? json.settings.txt4 : settings.cc;
    let t15;
    if ($[37] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "txt",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t14;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                fill: "gray",
                height: "17px",
                width: "17px",
                version: "1.1",
                id: "Capa_1",
                viewBox: "0 0 55.752 55.752",
                xmlSpace: "preserve",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 199,
                        columnNumber: 231
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 199,
                    columnNumber: 228
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 199,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "option",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t15;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== t13 || $[43] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                onClick: _temp3,
                children: [
                    t13,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 214,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t13;
        $[43] = t17;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== t12 || $[46] !== t18 || $[47] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "boxAll",
            className: "box",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: [
                    t7,
                    t12,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 223,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t12;
        $[46] = t18;
        $[47] = t7;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            display: "none"
        };
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            fill: "gray",
            height: "17px",
            width: "17px",
            version: "1.1",
            id: "Capa_1",
            viewBox: "0 0 55.752 55.752",
            xmlSpace: "preserve",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 242,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 242,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== json.watch.txt1) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            id: "linkId",
            onClick: _temp4,
            children: [
                t21,
                json.watch.txt1
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = json.watch.txt1;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 257,
                            columnNumber: 123
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 257,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0)),
                    "1080p"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 257,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 264,
                            columnNumber: 123
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 264,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0)),
                    "720p"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 264,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: [
                t23,
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "linkId",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25px",
                                height: "25px",
                                viewBox: "0 0 1024 1024",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "grey",
                                    d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/features/Watch.tsx",
                                    lineNumber: 271,
                                    columnNumber: 137
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Watch.tsx",
                                lineNumber: 271,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            "480p"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 271,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 271,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t22) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "boxQuality",
            className: "box box2",
            style: t20,
            children: [
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t22;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            display: "none"
        };
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            fill: "gray",
            height: "17px",
            width: "17px",
            version: "1.1",
            id: "Capa_1",
            viewBox: "0 0 55.752 55.752",
            xmlSpace: "preserve",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 295,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 295,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== json.watch.txt2) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            id: "linkId",
            onClick: _temp5,
            children: [
                t28,
                json.watch.txt2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = json.watch.txt2;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] !== langDispo) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: Object.entries(langDispo).map(_temp6)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 310,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = langDispo;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    let t31;
    if ($[64] !== t29 || $[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "boxlang",
            className: "box box2",
            style: t27,
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t29;
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            display: "none"
        };
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            fill: "gray",
            height: "17px",
            width: "17px",
            version: "1.1",
            id: "Capa_1",
            viewBox: "0 0 55.752 55.752",
            xmlSpace: "preserve",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 336,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 336,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t33;
    } else {
        t33 = $[68];
    }
    let t34;
    if ($[69] !== json.watch.txt3) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            id: "linkId",
            onClick: _temp7,
            children: [
                t33,
                json.watch.txt3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = json.watch.txt3;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25px",
            height: "25px",
            viewBox: "0 0 1024 1024",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "grey",
                d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 351,
                columnNumber: 102
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    let t36;
    if ($[72] !== json.settings.txt4) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "fr",
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: json.settings.txt4
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 358,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 358,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = json.settings.txt4;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    let t37;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "fr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 366,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 366,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Français"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 366,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 366,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t37;
    } else {
        t37 = $[74];
    }
    let t38;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "en",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 373,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 373,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "English"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 373,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 373,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t38;
    } else {
        t38 = $[75];
    }
    let t39;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "es",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 380,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 380,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Español"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 380,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 380,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t39;
    } else {
        t39 = $[76];
    }
    let t40;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "jp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 387,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 387,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "日本語"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 387,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 387,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "de",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 394,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 394,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Deutsch"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 394,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 394,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t41;
    } else {
        t41 = $[78];
    }
    let t42;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "it",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 401,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 401,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Italiano"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 401,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 401,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t42;
    } else {
        t42 = $[79];
    }
    let t43;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "pt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 408,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 408,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Português"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 408,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 408,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t43;
    } else {
        t43 = $[80];
    }
    let t44;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "ru",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 415,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 415,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Русский"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 415,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 415,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = t44;
    } else {
        t44 = $[81];
    }
    let t45;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "nl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 422,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 422,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Nederlands"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 422,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 422,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "sv",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 429,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 429,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Svenska"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 429,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 429,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    let t47;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "tr",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 436,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 436,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "Türkçe"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 436,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 436,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[84] = t47;
    } else {
        t47 = $[84];
    }
    let t48;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "ko",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 443,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 443,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "한국어"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 443,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 443,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t48;
    } else {
        t48 = $[85];
    }
    let t49;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "zh",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 450,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 450,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "中文"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 450,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 450,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = t49;
    } else {
        t49 = $[86];
    }
    let t50;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "ar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 457,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 457,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "العربية"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 457,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 457,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t50;
    } else {
        t50 = $[87];
    }
    let t51;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkId",
                "data-lang": "hi",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25px",
                        height: "25px",
                        viewBox: "0 0 1024 1024",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "grey",
                            d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/features/Watch.tsx",
                            lineNumber: 464,
                            columnNumber: 138
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 464,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-name",
                        children: "हिन्दी"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 464,
                        columnNumber: 308
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 464,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t51;
    } else {
        t51 = $[88];
    }
    let t52;
    if ($[89] !== t36) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: [
                t36,
                t37,
                t38,
                t39,
                t40,
                t41,
                t42,
                t43,
                t44,
                t45,
                t46,
                t47,
                t48,
                t49,
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t36;
        $[90] = t52;
    } else {
        t52 = $[90];
    }
    let t53;
    if ($[91] !== t34 || $[92] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "boxcc",
            className: "box box2",
            style: t32,
            children: [
                t34,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = t34;
        $[92] = t52;
        $[93] = t53;
    } else {
        t53 = $[93];
    }
    let t54;
    if ($[94] !== t19 || $[95] !== t26 || $[96] !== t31 || $[97] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "paramBox",
            children: [
                t19,
                t26,
                t31,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = t19;
        $[95] = t26;
        $[96] = t31;
        $[97] = t53;
        $[98] = t54;
    } else {
        t54 = $[98];
    }
    let t55;
    if ($[99] !== currentTime || $[100] !== duration || $[101] !== handleRangeChange) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "timeinput",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                id: "timeRange",
                min: 0,
                max: duration,
                value: currentTime,
                onChange: handleRangeChange
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 499,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = currentTime;
        $[100] = duration;
        $[101] = handleRangeChange;
        $[102] = t55;
    } else {
        t55 = $[102];
    }
    let t56;
    if ($[103] !== queryParams.i || $[104] !== queryParams.t) {
        t56 = ()=>{
            window.location.href = "/item?t=" + queryParams.t + "&i=" + queryParams.i;
        };
        $[103] = queryParams.i;
        $[104] = queryParams.t;
        $[105] = t56;
    } else {
        t56 = $[105];
    }
    let t57;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15px",
            height: "15px",
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 520,
                columnNumber: 110
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[106] = t57;
    } else {
        t57 = $[106];
    }
    let t58;
    if ($[107] !== t56) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            onClick: t56,
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 527,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[107] = t56;
        $[108] = t58;
    } else {
        t58 = $[108];
    }
    let t59;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            className: "playBtn secbtn",
            onClick: _temp8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#fff",
                width: "15px",
                height: "15px",
                viewBox: "0 0 32 32",
                version: "1.1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 535,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 535,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[109] = t59;
    } else {
        t59 = $[109];
    }
    let t60;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = {
            display: "none"
        };
        $[110] = t60;
    } else {
        t60 = $[110];
    }
    let t61;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            className: "pauseBtn secbtn",
            onClick: _temp9,
            style: t60,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "15px",
                height: "15px",
                viewBox: "0 0 24 24",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z",
                    fill: "#fff"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 551,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 551,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[111] = t61;
    } else {
        t61 = $[111];
    }
    let t62;
    if ($[112] !== time || $[113] !== totalTime) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "time secbtn nohover",
            children: [
                time,
                " / ",
                totalTime
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[112] = time;
        $[113] = totalTime;
        $[114] = t62;
    } else {
        t62 = $[114];
    }
    let t63;
    if ($[115] !== t58 || $[116] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "left",
            children: [
                t58,
                t59,
                t61,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[115] = t58;
        $[116] = t62;
        $[117] = t63;
    } else {
        t63 = $[117];
    }
    let t64;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$paramWindow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paramWindow"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "15px",
                height: "15px",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-settings w-5 h-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 576,
                        columnNumber: 278
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 576,
                        columnNumber: 856
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 576,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[118] = t64;
    } else {
        t64 = $[118];
    }
    let t65;
    if ($[119] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "linkId",
            className: "secbtn",
            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$pip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pip"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "15px",
                height: "15px",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-picture-in-picture2 w-6 h-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 583,
                        columnNumber: 300
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "10",
                        height: "7",
                        x: "12",
                        y: "13",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 583,
                        columnNumber: 369
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 583,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[119] = t65;
    } else {
        t65 = $[119];
    }
    let t66;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "right",
            children: [
                t64,
                t65,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "linkId",
                    className: "secbtn",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$fullscreen$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullscreen"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "15px",
                        height: "15px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "lucide lucide-maximize w-6 h-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 3H5a2 2 0 0 0-2 2v3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Watch.tsx",
                                lineNumber: 590,
                                columnNumber: 329
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 8V5a2 2 0 0 0-2-2h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Watch.tsx",
                                lineNumber: 590,
                                columnNumber: 364
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 16v3a2 2 0 0 0 2 2h3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Watch.tsx",
                                lineNumber: 590,
                                columnNumber: 401
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 21h3a2 2 0 0 0 2-2v-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/features/Watch.tsx",
                                lineNumber: 590,
                                columnNumber: 437
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/features/Watch.tsx",
                        lineNumber: 590,
                        columnNumber: 104
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 590,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[120] = t66;
    } else {
        t66 = $[120];
    }
    let t67;
    if ($[121] !== t63) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "btnlist",
            children: [
                t63,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[121] = t63;
        $[122] = t67;
    } else {
        t67 = $[122];
    }
    let t68;
    if ($[123] !== t55 || $[124] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bottom",
            children: [
                t55,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[123] = t55;
        $[124] = t67;
        $[125] = t68;
    } else {
        t68 = $[125];
    }
    let t69;
    if ($[126] !== t54 || $[127] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "controls",
            id: "controls",
            children: [
                t54,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[126] = t54;
        $[127] = t68;
        $[128] = t69;
    } else {
        t69 = $[128];
    }
    let t70;
    if ($[129] !== t1 || $[130] !== t2 || $[131] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "video-player",
            children: [
                t1,
                t2,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/features/Watch.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[129] = t1;
        $[130] = t2;
        $[131] = t69;
        $[132] = t70;
    } else {
        t70 = $[132];
    }
    return t70;
};
_s(Watch, "PhdMKoCYyNrlClCeaNwRi9NTsXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useWatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = Watch;
function _temp() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(1);
}
function _temp2() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(3);
}
function _temp3() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(4);
}
function _temp4() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(2);
}
function _temp5() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(2);
}
function _temp6(t0, idx) {
    const [lang_0] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "linkId",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "25px",
                height: "25px",
                viewBox: "0 0 1024 1024",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "grey",
                    d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/features/Watch.tsx",
                    lineNumber: 650,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/features/Watch.tsx",
                lineNumber: 650,
                columnNumber: 40
            }, this),
            lang_0
        ]
    }, lang_0, true, {
        fileName: "[project]/src/app/components/features/Watch.tsx",
        lineNumber: 650,
        columnNumber: 10
    }, this);
}
function _temp7() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsFunction"])(2);
}
function _temp8() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$controlsBtn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["controlsBtn"])(1);
}
function _temp9() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$controlsBtn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["controlsBtn"])(0);
}
var _c;
__turbopack_context__.k.register(_c, "Watch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_95e8a4c9._.js.map