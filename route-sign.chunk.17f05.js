(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ol7L:function(e){e.exports={sign:"sign__3LTsn",numberingContainerWithCode:"numberingContainerWithCode__3OztG",numberingContainer:"numberingContainer__eYaZW",numberingHeader:"numberingHeader__34JSf",numberingCodeContainer:"numberingCodeContainer__PADQ2",numberingCode:"numberingCode__3GjeE",numberingSuffix:"numberingSuffix__2r0iw",topNameContainer:"topNameContainer__35_Rr",topNameHuge:"topNameHuge__2I6xy",topNameLetter:"topNameLetter__2j82t",topOffsetNameContainer:"topOffsetNameContainer__f0PCu",bottomNameContainer:"bottomNameContainer__19NhB",emptyStationLine:"emptyStationLine__3aICr",stationLinesContainer:"stationLinesContainer__1g04E",stationLineContainer:"stationLineContainer__1e2Mx",stationLineBar:"stationLineBar__3rBKR",stationLineBarTopName:"stationLineBarTopName__1eDRF",stationLineBarBottomNameContainer:"stationLineBarBottomNameContainer__bhzCb",stationLineBarBottomName:"stationLineBarBottomName__3ib2Q",currentStationLineBar:"currentStationLineBar__1Gom7",stationHeadingLeftTriangle:"stationHeadingLeftTriangle__2hwfD",stationHeadingRightTriangle:"stationHeadingRightTriangle__3VTTg",areaNotationsContainer:"areaNotationsContainer__oqS1k",areaNotation:"areaNotation__2WE8X",areaNotationFilled:"areaNotationFilled__2UQTW",stationLineBarNumberingRightContainer:"stationLineBarNumberingRightContainer__3QRRH",stationLineBarNumberingLeftContainer:"stationLineBarNumberingLeftContainer__2sRw_",smallNumberingCodeContainer:"smallNumberingCodeContainer__3Bh67",smallNumberingCode:"smallNumberingCode__1KQG7",smallNumberingSuffix:"smallNumberingSuffix__1crQ3"}},VNhY:function(e,n,t){"use strict";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n);var o=t("hosL"),s=t("Ol7L"),l=t.n(s),c=function(e){var n,t=e.line,i=e.align;return Object(o.h)("div",{class:l.a.stationLineContainer},t.heading&&"right"!==i?Object(o.h)("div",{style:t.color?"--color: "+t.color:"",class:l.a.stationHeadingLeftTriangle}):null,Object(o.h)("div",{class:l.a.stationLineBar,style:a(a({},t.color?{"--color":t.color}:{}),{},{textAlign:i})},Object(o.h)("div",{class:l.a.stationLineBarTopName},t.name.kanji),Object(o.h)("div",{class:l.a.stationLineBarBottomNameContainer},Object(o.h)("div",{class:l.a.stationLineBarBottomName},t.name.english)),Object(o.h)("div",{class:"right"===i?l.a.stationLineBarNumberingRightContainer:l.a.stationLineBarNumberingLeftContainer},t.heading?null==(n=t.trains)?void 0:n.map((function(e){var n=e.prefix,t=e.suffix,i=e.color;return Object(o.h)("div",{class:l.a.smallNumberingCodeContainer,style:i?{"--color":i}:{}},Object(o.h)("div",{class:l.a.smallNumberingCode},Object(o.h)("div",null,n),Object(o.h)("div",{class:l.a.smallNumberingSuffix},t)))})):null)),t.heading&&"right"===i?Object(o.h)("div",{style:t.color?{"--color":t.color}:{},class:l.a.stationHeadingRightTriangle}):null)};n.default=function(e){var n,t=e.sign,i=e.scale,a=void 0===i?1:i;return Object(o.h)("div",{class:l.a.sign,style:{transform:"scale("+a+")"}},t.numbering?Object(o.h)("div",{class:t.code?l.a.numberingContainerWithCode:l.a.numberingContainer},Object(o.h)("div",{class:l.a.numberingHeader},t.code),Object(o.h)("div",{class:l.a.numberingCodeContainer,style:t.numbering.color?{"--color":t.numbering.color}:{}},Object(o.h)("div",{class:l.a.numberingCode},Object(o.h)("div",null,t.numbering.prefix),Object(o.h)("div",{class:l.a.numberingSuffix},t.numbering.suffix)))):null,Object(o.h)("div",{class:l.a.topNameContainer},Object(o.h)("div",{class:l.a.topNameHuge},t.name.kanji.split("").map((function(e,n){return Object(o.h)("span",{class:l.a.topNameLetter,key:n},e)}))),Object(o.h)("div",null,t.name.hiragana)),Object(o.h)("div",{class:l.a.topOffsetNameContainer},Object(o.h)("div",null,t.name.jiantizi),Object(o.h)("div",null,t.name.hangul)),Object(o.h)("div",{class:l.a.areaNotationsContainer},null==(n=t.areaNotations)?void 0:n.map((function(e){var n=e.letter,t=e.fill;return Object(o.h)("div",{class:t?l.a.areaNotationFilled:l.a.areaNotation},n)}))),Object(o.h)("div",{class:l.a.stationLinesContainer},t.left?Object(o.h)(c,{line:t.left}):Object(o.h)("div",{class:l.a.emptyStationLine}),Object(o.h)("div",{class:l.a.currentStationLineBar,style:t.color?{"--color":t.color}:{}}),t.right?Object(o.h)(c,{line:t.right,align:"right"}):Object(o.h)("div",{class:l.a.emptyStationLine})),Object(o.h)("div",{class:l.a.bottomNameContainer},Object(o.h)("div",null,t.name.english)))}}}]);
//# sourceMappingURL=route-sign.chunk.17f05.js.map