module.exports = [
"[project]/src/app/functions/downloadUrl.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/findInTable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/formatDate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/formatTime.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/initSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/home/toggleScrollButtons.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/home/smoothScroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smoothScroll",
    ()=>smoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-ssr] (ecmascript)");
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(element);
        }
        ;
    };
    requestAnimationFrame(animateScroll);
};
}),
"[project]/src/app/functions/home/setupButtonClickListener.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupButtonClickListener",
    ()=>setupButtonClickListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/smoothScroll.ts [app-ssr] (ecmascript)");
;
const setupButtonClickListener = (id, scrollAmount)=>{
    const list = document.getElementById(id);
    if (list) {
        const currentScrollPosition = list.scrollLeft;
        const targetPosition = currentScrollPosition + scrollAmount;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothScroll"])(list, targetPosition, 300);
    }
    ;
};
}),
"[project]/src/app/functions/home/homeclick.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeclick",
    ()=>homeclick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-ssr] (ecmascript)");
;
const homeclick = (event)=>{
    const target = event.target;
    if (target.id === 'upscrollanimation') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", 500);
    } else if (target.id === 'unscrollanimation') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", -500);
    } else if (target.id === 'upscrollaction') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", 500);
    } else if (target.id === 'unscrollaction') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", -500);
    } else if (target.id === 'upscrolladventure') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", 500);
    } else if (target.id === 'unscrolladventure') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", -500);
    } else if (target.id === 'upscrollcomedy') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", 500);
    } else if (target.id === 'unscrollcomedy') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", -500);
    }
    ;
};
}),
"[project]/src/app/functions/home/homeleanupEventListeners.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homeleanupEventListeners",
    ()=>homeleanupEventListeners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeclick.ts [app-ssr] (ecmascript)");
;
const homeleanupEventListeners = ()=>{
    document.removeEventListener('click', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeclick"]);
};
}),
"[project]/src/app/functions/home/initScrollButtons.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initScrollButtons",
    ()=>initScrollButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-ssr] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(list);
    }
    ;
    if (actionList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(actionList);
    }
    ;
    if (adventureList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(adventureList);
    }
    ;
    if (comedyList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleScrollButtons"])(comedyList);
    }
    ;
    if (upButton && downButton) {
        upButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", 500);
        });
        downButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("animationlist", -500);
        });
    }
    ;
    if (actionUpButton && actionDownButton) {
        actionUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", 500);
        });
        actionDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("actionlist", -500);
        });
    }
    ;
    if (adventureUpButton && adventureDownButton) {
        adventureUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", 500);
        });
        adventureDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("adventurelist", -500);
        });
    }
    ;
    if (comedyUpButton && comedyDownButton) {
        comedyUpButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", 500);
        });
        comedyDownButton.addEventListener('click', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupButtonClickListener"])("comedylist", -500);
        });
    }
    ;
};
}),
"[project]/src/app/functions/parseSrt.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/create.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/deleteSession.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/delete.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/login.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/session.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/wishlist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/account/saveSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/watch/adBlockDetector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdBlockDetector",
    ()=>AdBlockDetector
]);
const AdBlockDetector = ()=>{
    return false;
};
}),
"[project]/src/app/functions/watch/controlsBtn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/watch/fullscreen.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/watch/paramWindow.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/watch/pip.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/watch/settings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/functions/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$downloadUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/downloadUrl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$findInTable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/findInTable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatDate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$formatTime$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/formatTime.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$initSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/initSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$smoothScroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/smoothScroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$toggleScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/toggleScrollButtons.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$setupButtonClickListener$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/setupButtonClickListener.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeclick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeclick.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$homeleanupEventListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/homeleanupEventListeners.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$home$2f$initScrollButtons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/home/initScrollButtons.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$parseSrt$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/parseSrt.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$sanitizeSubtitleHtml$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/sanitizeSubtitleHtml.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$create$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/create.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$deleteSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/deleteSession.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$delete$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/delete.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$login$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/login.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$session$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/session.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$wishlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/wishlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$account$2f$saveSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/account/saveSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$adBlockDetector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/adBlockDetector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$controlsBtn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/controlsBtn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$fullscreen$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/fullscreen.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$paramWindow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/paramWindow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$pip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/pip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$functions$2f$watch$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/functions/watch/settings.ts [app-ssr] (ecmascript)");
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
}),
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

//# sourceMappingURL=src_app_e0de52b7._.js.map