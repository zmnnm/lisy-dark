// ==UserScript==
// @name         Lisy Dark Mode
// @namespace    http://zemann.hu/
// @version      1.1
// @downloadURL  https://github.com/zmnnm/lisy-dark/blob/main/index.user.js
// @description  Auto refresh and scroll for digicorp results page
// @author       ZMNN
// @match        https://lisy.ahrt.hu/*
// @grant        none
// @grant          GM.xmlHttpRequest
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM.info
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
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

addGlobalStyle('body {background-color: black;}')
addGlobalStyle('.BASICWINDOW, .BASICWINDOWBIG  {background-color: grey;}')
addGlobalStyle('.FALINORMAL, .FALIBELSO, .FALIFEJ, .DOBOZ, article {background-color: grey !important;}')
addGlobalStyle('.FELSOMENUDOBOZ, .BALMENU, .FEJLEC {background-color: #383838 !important;}')
addGlobalStyle('.BALMENU {background: #383838 !important;}')
addGlobalStyle('.FELSOMENUBUTTON {background-color: #404040 !important;}')
addGlobalStyle('.BALMENUBUTTON {background: #404040 !important;}')
addGlobalStyle('.prodjelentframe {background-color: grey;dropshadow: 3px 3px grey !important;color: white;}')
//document.getElementsByClassName('FELSOMENUDOBOZ')[1].style=document.getElementsByClassName('FELSOMENUDOBOZ')[1].style+'background-color: #383838 !important;'
})();

window.onload = function () {document.getElementsByClassName('FELSOMENUDOBOZ')[1].style.setProperty("background", "#F000000", "important");};
