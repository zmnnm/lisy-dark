// ==UserScript==
// @name         Lisy Dark Mode
// @namespace    http://zemann.hu/
// @version      2.6.0
// @downloadURL  https://github.com/zmnnm/lisy-dark/raw/refs/heads/main/index.user.js
// @updateURL    https://github.com/zmnnm/lisy-dark/raw/refs/heads/main/index.user.js
// @description  Lisy Dark mode
// @author       ZMNN
// @match        https://lisy.ahrt.hu/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function addGlobalStyle(css) {
        var head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    if (window.location.href === 'https://lisy.ahrt.hu/index.html') {
        addGlobalStyle(`
            body {
                background-image: none !important;
                background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(pictures/Alap_hatter.jpg) !important;
            }
        `);
    }

    addGlobalStyle(`
    :root {
        --ls-bg-page:      #121212;
        --ls-bg-panel:     #1a1a1a;
        --ls-bg-panel-2:   #232323;
        --ls-bg-panel-3:   #2e2e2e;
        --ls-bg-chrome:    #202020;
        --ls-border:       #3a3a3a;

        --ls-text:         #e8e6e2;
        --ls-text-dim:     #a8a49c;
        --ls-text-muted:   #766f66;
        --ls-text-on-accent: #1a1509;

        --ls-accent:        #d99a4e;
        --ls-accent-hover:  #f0b464;

        --ls-accent-danger:    #ff6b6b;
        --ls-accent-warn-bg:   #4a3b00;
        --ls-accent-ok:        #163a1c;
        --ls-accent-ok-text:   #9be89b;
        --ls-accent-purple-bg: #3a1a3a;
        --ls-accent-purple-text:#e6b8e6;

        --ls-bg-input:      #171717;
        --ls-input-border:  var(--ls-border);
        --ls-focus-ring:    rgba(217, 154, 78, 0.35);
    }

    body { background-color: var(--ls-bg-page) !important; color: var(--ls-text) !important; }

    .BASICWINDOW, .BASICWINDOWBIG, .BASICWINDOWVERYBIG {
        background-color: var(--ls-bg-panel) !important;
    }

    .BASICWINDOWmobil {
        color: var(--ls-text) !important;
        background-color: var(--ls-bg-panel-2) !important;
        background-image: radial-gradient(circle, #303030 50%, #000 100%) !important;
        box-shadow: none !important;
    }

    /* Both the top menu bar AND the top-right user-info box share this
       class; the latter has an inline light gradient we flatten here
       instead of patching it via JS. */
    .FELSOMENUDOBOZ {
        background-image: none !important;
        background: var(--ls-bg-chrome) !important;
        border-bottom: 2px solid var(--ls-accent) !important;
    }

    #serverinfo {
        background-image: linear-gradient(var(--ls-bg-panel-2), #000) !important;
    }

    iframe { box-shadow: 1px 3px rgba(0,0,0,0.6) !important; }

    .BALMENU, .BALMENUmobil {
        background: var(--ls-bg-chrome) !important;
    }

    .FEJLEC, .DOBOZ, .DOBOZ2, #BasicWindow, .main {
        background-color: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }

    article { color: var(--ls-text) !important; }

    table { background-color: var(--ls-bg-panel-2) !important; }

    .BUTTON, .BUTTONFINA, .ALMENUBUTTON, .ALMENUBUTTON2, .ALMENUBUTTON3,
    .ALMENUBUTTON4, .ALMENUBUTTON5, .ALMENUBUTTON6, .ALMENUBUTTON7,
    .ALMENUBUTTON8, .ALMENUBUTTON9, .ALMENUBUTTON10, .ALMENUBUTTON11,
    .ALMENUBUTTONAL2, .ALMENUBUTTONAL11, .ALMENUBUTTONAL12, .ALMENUBUTTONAL19,
    .ALMENUBUTTONAL52, .ALMENUBUTTONAL62, .FELSOALMENUBUTTON,
    .FELSOALMENUBUTTON2, .FELSOALMENUBUTTON3, .FELSOMENUBUTTON,
    .BALMENUBUTTON, .SAJATMENUBUTTON {
        background: var(--ls-bg-chrome) !important;
        background-color: var(--ls-bg-chrome) !important;
        color: var(--ls-text) !important;
    }
    .BUTTON:hover, .BUTTONFINA:hover, .ALMENUBUTTON:hover, .ALMENUBUTTON2:hover,
    .ALMENUBUTTON3:hover, .ALMENUBUTTON4:hover, .ALMENUBUTTON5:hover,
    .ALMENUBUTTON6:hover, .ALMENUBUTTON7:hover, .ALMENUBUTTON8:hover,
    .ALMENUBUTTON9:hover, .ALMENUBUTTON10:hover, .ALMENUBUTTON11:hover,
    .ALMENUBUTTONAL2:hover, .ALMENUBUTTONAL11:hover, .ALMENUBUTTONAL12:hover,
    .ALMENUBUTTONAL19:hover, .ALMENUBUTTONAL52:hover, .ALMENUBUTTONAL62:hover,
    .FELSOALMENUBUTTON:hover, .FELSOALMENUBUTTON2:hover, .FELSOALMENUBUTTON3:hover,
    .FELSOMENUBUTTON:hover, .BALMENUBUTTON:hover, .SAJATMENUBUTTON:hover {
        background: var(--ls-accent) !important;
        background-color: var(--ls-accent) !important;
        color: var(--ls-text-on-accent) !important;
    }
    .SAJATMENUBUTTONURES { background: var(--ls-bg-panel-2) !important; color: var(--ls-text-muted) !important; }

    #falidoboz input[type="button"] {
        background-color: var(--ls-bg-chrome) !important;
        color: var(--ls-text) !important;
    }

    .myIMG:hover { background: var(--ls-bg-panel-3) !important; }

    .FALINORMAL          { background: var(--ls-bg-panel-2) !important; color: var(--ls-text-dim) !important; }
    .FALINORMAL:hover     { background: var(--ls-bg-panel-3) !important; color: var(--ls-text) !important; }
    .FALIBELSO            { background: var(--ls-bg-panel-2) !important; color: var(--ls-text) !important; }
    .FALIBELSO:hover      { background: var(--ls-bg-panel-3) !important; }
    .FALIFEJ               { background-color: var(--ls-bg-panel-3) !important; color: var(--ls-accent) !important; }
    .FALIUJ                { background: var(--ls-bg-panel-2) !important; color: var(--ls-text-dim) !important; border-color: var(--ls-accent-danger) !important; }
    .FALIUJ:hover          { background: var(--ls-bg-panel-3) !important; color: var(--ls-text) !important; }

    A.fali:link, A.fali:visited, A.fali:active   { color: var(--ls-accent) !important; }
    A.fali:hover                                  { color: var(--ls-accent-hover) !important; }
    A.tabla:link, A.tabla:visited, A.tabla:active { color: var(--ls-text) !important; }
    A.tabla:hover                                  { color: var(--ls-accent) !important; }
    A.tabla2:link, A.tabla2:visited, A.tabla2:active { color: var(--ls-accent) !important; }
    A.tabla2:hover                                  { color: var(--ls-accent-hover) !important; }
    A.mtars:link, A.mtars:visited, A.mtars:active   { color: var(--ls-accent) !important; }
    A.diszpo:link, A.diszpo:visited, A.diszpo:active { color: var(--ls-text) !important; }
    .postit2                      { background: var(--ls-bg-panel-2) !important; }
    .postit2 > font                { color: var(--ls-accent-danger) !important; }
    .postit2 font[color='black']   { color: var(--ls-text) !important; }
    .postit2 font[color='dimgrey'] { color: var(--ls-text-dim) !important; }

    .flex-container { background-color: var(--ls-bg-panel) !important; }

    .dobozfent, .dobozfentsarga, .dobozfentfekete {
        background: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }
    .dobozfent:hover, .dobozfentsarga:hover, .dobozfentfekete:hover {
        background: var(--ls-accent) !important;
        color: var(--ls-text-on-accent) !important;
    }

    #sajatmenu {
        background-color: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }
    #sajatmenu legend { color: var(--ls-text) !important; }

    #falidoboz { background: var(--ls-bg-panel-3) !important; }

    #dkomment {
        background-color: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }

    #kisfoto, #nagyfoto { background: var(--ls-bg-panel-2) !important; }

    .prodjeldiv { color: var(--ls-text) !important; }
    .prodjeldiv:hover { color: var(--ls-accent-hover) !important; }

    textarea[name='szoveg2'] {
        background-color: var(--ls-bg-input) !important;
        color: var(--ls-text) !important;
    }
    .tddoboz { background-color: var(--ls-bg-panel-2) !important; }
    #kklist  { background-color: var(--ls-bg-panel-2) !important; }
    .kkviewspan { color: var(--ls-text) !important; border-color: var(--ls-border) !important; }
    A.tabla { border-color: var(--ls-border) !important; }
    .tablakiir, .tablakiirright, .tablakiir2, .tablakiirleft { color: var(--ls-text) !important; }

    input[type="text"], input[type="date"], input[type="number"],
    input[type="password"], textarea, select {
        background-color: var(--ls-bg-input) !important;
        color: var(--ls-text) !important;
        border: 1px solid var(--ls-input-border) !important;
        border-radius: 3px;
        outline: none;
        transition: border-color 0.12s ease, box-shadow 0.12s ease;
    }
    input[type="text"]:read-only, input[type="date"]:read-only,
    input[type="number"]:read-only, textarea:read-only {
        color: var(--ls-text-dim) !important;
        border-color: var(--ls-border) !important;
    }
    input[type="text"]:focus, input[type="date"]:focus, input[type="number"]:focus,
    input[type="password"]:focus, textarea:focus, select:focus {
        border-color: var(--ls-accent) !important;
        box-shadow: 0 0 0 2px var(--ls-focus-ring) !important;
    }
    input[type="text"]:read-only:focus, input[type="date"]:read-only:focus,
    input[type="number"]:read-only:focus, textarea:read-only:focus {
        border-color: var(--ls-border) !important;
        box-shadow: none !important;
    }

    .tablazat, .tablazatmtars, .PRODBUTTONAKTIV, .mmtars, .ADMINMENU,
    .adminmenusor, .tododiv, .leltartabla, .leltarcsop, .MUSZVEZKKBUTTON,
    .prodjelentbutton, .jellegszoveg, .alvsfo, .kisablakuzenet,
    .prodjelentframe, .projectframe, .MtTable tr, #kiadas tr:nth-child(even),
    .hibastatusz, .napijelent, .prodtablatr, .css3-tabstrip li > div,
    .css3-tabstrip input[type="radio"]:checked + label {
        background-color: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }

    .input, .input2, .input3, .input4, .inputszam, .FINAinput,
    .mi, .mi2, .mm, .alapigeny, .todoinput {
        background-color: var(--ls-bg-input) !important;
        color: var(--ls-text) !important;
    }

    .prod1, .prod2, .prod6 { background: var(--ls-accent-ok) !important; color: var(--ls-accent-ok-text) !important; }
    .prod4                  { background: var(--ls-accent-purple-bg) !important; color: var(--ls-accent-purple-text) !important; }
    .prod0                  { background: var(--ls-bg-panel-2) !important; color: var(--ls-text) !important; }
    .specprod1, .specprod3 { background-color: var(--ls-bg-panel-2) !important; color: var(--ls-text) !important; }

    .FALIMOBIL, .MOBILKOMMENT, .button2, .MOBILMENU, .MOBILDISZPO,
    .MOBILSAJAT, .MOBILKIIR, .MOBILPROD, .MOBILSZALLITO1, .MOBILSZALLITO2,
    .MOBILSZALLITO3, .MOBILSZALLITO4, .MOBILMENETLEVEL, .uzifelado,
    .uzifejlec, .Buttongray:hover {
        background-color: var(--ls-bg-panel-2) !important;
        color: var(--ls-text) !important;
    }

    A.nologin:link, A.nologin:visited, A.nologin:active {
        background-color: var(--ls-accent-warn-bg) !important;
        color: var(--ls-text) !important;
    }
    `);

    function safe(fn, label) {
        try { fn(); } catch (e) { console.debug('[Lisy Dark] skipped "' + label + '":', e); }
    }

    safe(function () {
        var article = document.getElementsByTagName('article')[0];
        if (article && article.childNodes[0]) {
            article.childNodes[0].innerText += '\nDarkmode by ZMNN v2.6.0';
        }
    }, 'version signature append');

    safe(function () {
        var infoment = document.getElementsByName('infoment')[0];
        var target = infoment && infoment.childNodes[5] &&
                     infoment.childNodes[5].childNodes[1] &&
                     infoment.childNodes[5].childNodes[1].childNodes[5];
        if (target) { target.style.setProperty('color', 'white', 'important'); }
    }, 'infoment inner text color');

    safe(function () {
        var checkbox = document.querySelector('input[type="checkbox"][name="ID17"]');
        var targetDiv = checkbox && checkbox.closest('div');
        if (targetDiv) { targetDiv.style.backgroundColor = '#262626'; }
    }, 'ID17 checkbox container');

    safe(function () {
        var isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform);
        if (isMobileUA) {
            var mobilkep = document.getElementById('mobilkep');
            if (mobilkep) { mobilkep.style.visibility = 'visible'; }
            var menu = document.getElementById('menu');
            if (menu && screen.width < 1300) { menu.className = 'BALMENUmobil'; }
        }
    }, 'mobile UA adjustments');

    function lsRelLuminance(r, g, b) {
        var a = [r, g, b].map(function (v) {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    }

    var lsColorProbe = null;
    function lsParseColor(str) {
        if (!str) { return null; }
        var m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (m) { return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)]; }
        if (!lsColorProbe) {
            lsColorProbe = document.createElement('div');
            lsColorProbe.style.display = 'none';
            document.documentElement.appendChild(lsColorProbe);
        }
        lsColorProbe.style.color = '';
        lsColorProbe.style.color = str;
        var resolved = getComputedStyle(lsColorProbe).color;
        var m2 = resolved.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        return m2 ? [parseInt(m2[1], 10), parseInt(m2[2], 10), parseInt(m2[3], 10)] : null;
    }

    function lsToHsl(rgb) {
        var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) { h = (g - b) / d + (g < b ? 6 : 0); }
            else if (max === g) { h = (b - r) / d + 2; }
            else { h = (r - g) / d + 4; }
            h /= 6;
        }
        return [h, s, l];
    }

    var LS_MIN_CHROMA = 20;

    function lsAdjustPreservingHue(rgb, targetLPercent, maxS) {
        var chroma = Math.max(rgb[0], rgb[1], rgb[2]) - Math.min(rgb[0], rgb[1], rgb[2]);
        if (chroma < LS_MIN_CHROMA) {
            return 'hsl(0, 0%, ' + targetLPercent + '%)';
        }
        var hsl = lsToHsl(rgb);
        var newS = Math.round(Math.min(hsl[1], maxS) * 100);
        return 'hsl(' + Math.round(hsl[0] * 360) + ', ' + newS + '%, ' + targetLPercent + '%)';
    }

    var LS_BG_TOO_LIGHT = 0.35;
    var LS_FG_TOO_DARK  = 0.35;

    function neutralizeInlineStyles(root) {
        if (!root || !root.querySelectorAll) { return; }
        var els = root.querySelectorAll('[style], [bgcolor], [color]');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.dataset.lsDarkDone) { continue; }

            var bg = el.style.backgroundColor || el.getAttribute('bgcolor');
            var bgWasDarkened = false;
            if (bg) {
                var rgb = lsParseColor(bg);
                if (rgb && lsRelLuminance(rgb[0], rgb[1], rgb[2]) > LS_BG_TOO_LIGHT) {
                    el.style.setProperty('background-color', lsAdjustPreservingHue(rgb, 16, 0.45), 'important');
                    bgWasDarkened = true;
                }
            }

            var fg = el.style.color || el.getAttribute('color');
            if (fg) {
                var frgb = lsParseColor(fg);
                if (frgb && lsRelLuminance(frgb[0], frgb[1], frgb[2]) < LS_FG_TOO_DARK) {
                    el.style.setProperty('color', lsAdjustPreservingHue(frgb, 82, 0.55), 'important');
                }
            } else if (bgWasDarkened) {
                var inherited = lsParseColor(getComputedStyle(el).color);
                if (!inherited || lsRelLuminance(inherited[0], inherited[1], inherited[2]) < 0.5) {
                    el.style.setProperty('color', '#e8e6e2', 'important');
                }
            }


            if (el.style.backgroundImage && el.style.backgroundImage !== 'none') {
                el.style.setProperty('background-blend-mode', 'multiply', 'important');
                el.style.setProperty('background-color', 'rgba(10,10,10,0.6)', 'important');
            }

            var bd = el.style.borderColor;
            if (bd) {
                var brgb = lsParseColor(bd);
                if (brgb && lsRelLuminance(brgb[0], brgb[1], brgb[2]) > LS_BG_TOO_LIGHT) {
                    el.style.setProperty('border-color', lsAdjustPreservingHue(brgb, 30, 0.3), 'important');
                }
            }

            el.dataset.lsDarkDone = '1';
        }
    }

    safe(function () {
        neutralizeInlineStyles(document.body);

        var pending = false;
        var observer = new MutationObserver(function () {
            if (pending) { return; }
            pending = true;
            requestAnimationFrame(function () {
                pending = false;
                neutralizeInlineStyles(document.body);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }, 'inline style scrubber + observer');

})();
