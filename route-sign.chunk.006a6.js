(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IzxJ:function(n){n.exports={sign:"sign__2peUK",signBoxShadow:"signBoxShadow__1sWrC",topContainer:"topContainer__332xs",numberingContainerWithCode:"numberingContainerWithCode__fIoUJ",numberingContainer:"numberingContainer__1iW4c",numberingHeader:"numberingHeader__3T7X_",numberingCodeContainer:"numberingCodeContainer__kkVV4",numberingCode:"numberingCode__3dWn6",numberingSuffix:"numberingSuffix__1n5tv",topNameContainer:"topNameContainer__2s1h8",topNameHuge:"topNameHuge__3rWFS",topNameLetter:"topNameLetter__1p9mF",topOffsetNameContainer:"topOffsetNameContainer__2fSyH",bottomNameContainer:"bottomNameContainer__osVpT",stationLinesContainer:"stationLinesContainer__3p1mh",stationLineContainer:"stationLineContainer__2agpK",stationLineBar:"stationLineBar__3mmSY",stationLineBarTopName:"stationLineBarTopName__1RRy5",stationLineBarBottomNameContainer:"stationLineBarBottomNameContainer__Y_mMO",stationLineBarBottomName:"stationLineBarBottomName__7knZm",currentStationLineBar:"currentStationLineBar__Frjp-",stationHeadingLeftTriangle:"stationHeadingLeftTriangle__wBJIj",stationHeadingRightTriangle:"stationHeadingRightTriangle__3m-An",areaNotationsContainer:"areaNotationsContainer__2m6Mf",areaNotation:"areaNotation__3PYV3",areaNotationFilled:"areaNotationFilled__1lk5Z",stationLineBarNumberingRightContainer:"stationLineBarNumberingRightContainer__1hWeS",stationLineBarNumberingLeftContainer:"stationLineBarNumberingLeftContainer__2NXPi",smallNumberingCodeContainer:"smallNumberingCodeContainer__2lIXc",smallNumberingCode:"smallNumberingCode__mnNpq",smallNumberingSuffix:"smallNumberingSuffix__2EdAF"}},Ol7L:function(n){n.exports={signContainer:"signContainer__11b5J",signBoxShadow:"signBoxShadow__1O1_a"}},RhHR:function(n){n.exports={signContainer:"signContainer__3ZQzV",sign:"sign__1IDGT",signDark:"signDark__1WBCh",topContainer:"topContainer__1bnAU",logoContainer:"logoContainer__18mUq",topNameContainer:"topNameContainer__1vjQo",topNameHuge:"topNameHuge__22DzK",topNameLetter:"topNameLetter__1ywgb",topName:"topName__1kjQG",stationLinesContainer:"stationLinesContainer__3TcAy",directionArrow:"directionArrow__ZCIC_",stationLineContainer:"stationLineContainer__3_2Zo",stationLineContainerRight:"stationLineContainerRight__1-VOa",stationLineName:"stationLineName__M6Gek",stationLineBarTopName:"stationLineBarTopName__35Gsr",stationLineBarBottomNameContainer:"stationLineBarBottomNameContainer__iJ7x9",stationLineBarBottomName:"stationLineBarBottomName__34WyH",areaNotationsContainer:"areaNotationsContainer__H2Icd",areaNotation:"areaNotation__3t83I",areaNotationFilled:"areaNotationFilled__1vtVb"}},VNhY:function(n,t,e){"use strict";function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.r(t);var r=e("hosL"),s=e("IzxJ"),l=e.n(s),c=function(n){var t,e=n.line,a=n.align;return Object(r.h)("div",{class:l.a.stationLineContainer},e.heading&&"right"!==a?Object(r.h)("div",{style:e.color?"--color: "+e.color:"",class:l.a.stationHeadingLeftTriangle}):null,Object(r.h)("div",{class:l.a.stationLineBar,style:i(i({},e.color?{"--color":e.color}:{}),{},{textAlign:a})},Object(r.h)("div",{class:l.a.stationLineBarTopName},e.name.kanji),Object(r.h)("div",{class:l.a.stationLineBarBottomNameContainer},Object(r.h)("div",{class:l.a.stationLineBarBottomName},e.name.english)),Object(r.h)("div",{class:"right"===a?l.a.stationLineBarNumberingRightContainer:l.a.stationLineBarNumberingLeftContainer},e.heading?null==(t=e.trains)?void 0:t.map((function(n){var t=n.prefix,e=n.suffix,a=n.color;return Object(r.h)("div",{class:l.a.smallNumberingCodeContainer,style:a?{"--color":a}:{}},Object(r.h)("div",{class:l.a.smallNumberingCode},Object(r.h)("div",null,t),Object(r.h)("div",{class:l.a.smallNumberingSuffix},e)))})):null)),e.heading&&"right"===a?Object(r.h)("div",{style:e.color?{"--color":e.color}:{},class:l.a.stationHeadingRightTriangle}):null)},m=function(n){var t,e=n.sign;return Object(r.h)("div",{class:l.a.sign},Object(r.h)("div",{class:l.a.topContainer},Object(r.h)("div",{class:l.a.topNumberingContainer},e.numbering?Object(r.h)("div",{class:e.code?l.a.numberingContainerWithCode:l.a.numberingContainer},Object(r.h)("div",{class:l.a.numberingHeader},e.code),Object(r.h)("div",{class:l.a.numberingCodeContainer,style:e.numbering.color?{"--color":e.numbering.color}:{}},Object(r.h)("div",{class:l.a.numberingCode},Object(r.h)("div",null,e.numbering.prefix),Object(r.h)("div",{class:l.a.numberingSuffix},e.numbering.suffix)))):null),Object(r.h)("div",{class:l.a.topNameContainer},Object(r.h)("div",{class:l.a.topNameHuge},e.name.kanji.split("").map((function(n,t){return Object(r.h)("span",{class:l.a.topNameLetter,key:t},n)}))),Object(r.h)("div",null,e.name.hiragana)),Object(r.h)("div",{class:l.a.topOffsetNameContainer},e.name.hangul&&e.name.kanji.length<7?Object(r.h)(r.Fragment,null,Object(r.h)("div",null,e.name.jiantizi),Object(r.h)("div",null,e.name.hangul)):null)),Object(r.h)("div",{class:l.a.areaNotationsContainer},null==(t=e.areaNotations)?void 0:t.map((function(n){var t=n.letter,e=n.fill;return Object(r.h)("div",{class:e?l.a.areaNotationFilled:l.a.areaNotation},t)}))),Object(r.h)("div",{class:l.a.stationLinesContainer},e.left?Object(r.h)(c,{line:e.left}):Object(r.h)("div",{class:l.a.stationLineBar}),Object(r.h)("div",{class:l.a.currentStationLineBar,style:e.color?{"--color":e.color}:{}}),e.right?Object(r.h)(c,{line:e.right,align:"right"}):Object(r.h)("div",{class:l.a.stationLineBar})),Object(r.h)("div",{class:l.a.bottomNameContainer},Object(r.h)("div",null,e.name.english)))},g=e("jUMG"),b=e("RhHR"),h=e.n(b),u=function(n){var t=n.line,e=n.align;return Object(r.h)("div",{class:"right"===e?h.a.stationLineContainerRight:h.a.stationLineContainer},t.heading&&"right"!==e?Object(r.h)("div",{class:h.a.directionArrow},"←"):null,Object(r.h)("div",{class:h.a.stationLineName},Object(r.h)("div",{class:h.a.stationLineBarTopName},t.name.hiragana),Object(r.h)("div",{class:h.a.stationLineBarBottomNameContainer},Object(r.h)("div",{class:h.a.stationLineBarBottomName},t.name.english))),t.heading&&"right"===e?Object(r.h)("div",{class:h.a.directionArrow},"→"):null)},d=function(n){var t,e=n.sign,a=n.darkMode;return Object(r.h)("div",{class:a?h.a.signDark:h.a.sign},Object(r.h)("div",{class:h.a.topContainer},Object(r.h)("div",{class:h.a.logoContainer},Object(r.h)("img",{src:g.a+"/assets/logos/jr_west.svg"})),Object(r.h)("div",{class:h.a.topNameContainer},Object(r.h)("div",{class:h.a.topNameHuge},e.name.kanji.split("").map((function(n,t){return Object(r.h)("span",{class:h.a.topNameLetter,key:t},n)}))),Object(r.h)("div",{class:h.a.topName},Object(r.h)("div",null,e.name.hiragana),Object(r.h)("div",null,e.name.english))),Object(r.h)("div",null)),Object(r.h)("div",{class:h.a.areaNotationsContainer},null==(t=e.areaNotations)?void 0:t.map((function(n){var t=n.letter,e=n.fill;return Object(r.h)("div",{class:e?h.a.areaNotationFilled:h.a.areaNotation},t)}))),Object(r.h)("div",{class:h.a.stationLinesContainer,style:e.color?{"--color":e.color}:{}},e.left?Object(r.h)(u,{line:e.left}):Object(r.h)("div",{class:h.a.stationLineBar}),e.right?Object(r.h)(u,{line:e.right,align:"right"}):Object(r.h)("div",{class:h.a.stationLineBar})))},_=e("Lo1s"),O=e("Ol7L"),C=e.n(O);t.default=function(n){var t;switch(n.sign.company){case _.a.JR_EAST:t=m;break;case _.a.JR_WEST:t=d;break;default:throw new Error("Unsupported sign company: "+n.sign.company)}return Object(r.h)("div",{class:C.a.signContainer,style:{transform:"scale("+n.scale+")"}},Object(r.h)(t,n),n.boxShadow?Object(r.h)("div",{class:C.a.signBoxShadow}):null)}}}]);
//# sourceMappingURL=route-sign.chunk.006a6.js.map