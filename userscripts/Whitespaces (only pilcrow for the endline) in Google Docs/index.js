// ==UserScript==
// @name          Whitespaces (only pilcrow for the endline) in Google Docs
// @description   Adds whitespaces (only pilcrow for the endline) in Google Docs.
// @namespace     https://contributor.pw
// @domain        docs.google.com
// @include       http://docs.google.com/*
// @include       https://docs.google.com/*
// @author        Alex Ivanov <ai@contributor.pw>
// @developer     Alex Ivanov <ai@contributor.pw>
// @version       1.0.0-1
// @grant         GM_addStyle
// @icon          https://raw.githubusercontent.com/contributorpw/my-greasy-fork/master/userscripts/Whitespaces%20(only%20pilcrow%20for%20the%20endline)%20in%20Google%20Docs/ico.png
// @screenshot    https://raw.githubusercontent.com/contributorpw/my-greasy-fork/master/userscripts/Whitespaces%20(only%20pilcrow%20for%20the%20endline)%20in%20Google%20Docs/screenshot.png
// @license       MIT
// ==/UserScript==

var style =
  '.kix-lineview > .kix-lineview-content > span > .goog-inline-block.kix-lineview-text-block:last-child:after{content:"¶";}';
style +=
  'span[class="goog-inline-block"]{background:#CFD8DC;border-radius: 4px;border: 1px solid;margin-right:1px;}';
GM_addStyle(style);
