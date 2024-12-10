// ==UserScript==
// @name         Lisy Dark Mode
// @namespace    http://zemann.hu/
// @version      1.7.2
// @downloadURL  https://github.com/zmnnm/lisy-dark/raw/refs/heads/main/index.user.js
// @updateURL    https://github.com/zmnnm/lisy-dark/raw/refs/heads/main/index.user.js
// @description  Lisy Dark mode
// @author       ZMNN
// @match        https://lisy.ahrt.hu/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    //Desktop

    if (window.location.href == 'https://lisy.ahrt.hu/index.html') {
        addGlobalStyle("body {background-image: none !important; background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(pictures/Alap_hatter.jpg) !important;}}");
    }
    addGlobalStyle('body {background-color: black;}')
    addGlobalStyle('.prod1 {background-color: darkgrey;}')
    addGlobalStyle('.BASICWINDOW, .BASICWINDOWBIG  {background-color: grey;}')
    addGlobalStyle('.FALINORMAL, .FALIBELSO, .FALIFEJ, .DOBOZ, article, table {background-color: grey !important;}')
    addGlobalStyle('.FELSOMENUDOBOZ, .BALMENU, .FEJLEC {background-color: #383838 !important;}')
    addGlobalStyle('.BALMENU {background: #383838 !important;}')
    addGlobalStyle('.BUTTON, article, .FELSOMENUDOBOZ, .BALMENU, .FEJLEC {color: white !important;}')
    addGlobalStyle('.FELSOMENUBUTTON {background-color: #404040 !important;}')
    addGlobalStyle('.BUTTON, .FELSOALMENUBUTTON, .FELSOALMENUBUTTON2, .FELSOALMENUBUTTON3, .ALMENUBUTTONALKKVIEW, .ALMENUBUTTONAL2, .ALMENUBUTTONAL3, .ALMENUBUTTONAL11, .ALMENUBUTTONAL12,  .ALMENUBUTTONAL19, .ALMENUBUTTONAL52, .ALMENUBUTTONAL62, .ALMENUBUTTONAL2, .BALMENUBUTTON, .ALMENUBUTTON, .ALMENUBUTTON2, .ALMENUBUTTON3, .ALMENUBUTTON4, .ALMENUBUTTON5, .ALMENUBUTTON6, .ALMENUBUTTON7, .ALMENUBUTTON8, .ALMENUBUTTON9, .ALMENUBUTTON10, .ALMENUBUTTON11 {background: #404040 !important;}')
    addGlobalStyle('.prodjelentframe {background-color: grey;dropshadow: 3px 3px grey !important;color: white;}')
    addGlobalStyle(".postit2 { background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../pictures/postit2.png);}");
    addGlobalStyle("#BasicWindow {background-color: grey !important;};");
    document.getElementsByClassName('FELSOMENUDOBOZ')[1].style.setProperty("background", "linear-gradient(to right, #383838, #383838 93%, black 100%, black)");
    document.getElementById('serverinfo').style.setProperty("background-image", "linear-gradient(#383838, #000000)");
    document.getElementsByTagName('article')[0].style.setProperty("background-color", "black", "important");
    document.getElementsByTagName('article')[0].style.setProperty("color", "white");
    document.getElementsByTagName('article')[0].childNodes[0].innerText += "\nDarkmode by ZMNN v1.7.1"
    document.getElementsByTagName('iframe')[0].style.setProperty("box-shadow", "1px 3px grey");
    document.getElementsByName('infoment')[0].childNodes[5].childNodes[1].childNodes[5].style.setProperty("color", "white", "important");
    addGlobalStyle('.main {background-color: grey !important;};');

    //Mobile

    addGlobalStyle('.BASICWINDOWmobil {color: white !important; background-color: black !important; background-image: radial-gradient(circle, rgba(52,52,52,1) 50%, rgba(0,0,0,1) 100%) !important; box-shadow: none !important;}')



})();
