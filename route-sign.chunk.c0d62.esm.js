(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IzxJ:function(n){n.exports={sign:"sign__2peUK",signBoxShadow:"signBoxShadow__1sWrC",topContainer:"topContainer__332xs",numberingContainerWithCode:"numberingContainerWithCode__fIoUJ",numberingContainer:"numberingContainer__1iW4c",numberingHeader:"numberingHeader__3T7X_",numberingCodeContainer:"numberingCodeContainer__kkVV4",numberingCode:"numberingCode__3dWn6",numberingSuffix:"numberingSuffix__1n5tv",topNameContainer:"topNameContainer__2s1h8",topNameHuge:"topNameHuge__3rWFS",topNameLetter:"topNameLetter__1p9mF",topOffsetNameContainer:"topOffsetNameContainer__2fSyH",bottomNameContainer:"bottomNameContainer__osVpT",stationLinesContainer:"stationLinesContainer__3p1mh",stationLineContainer:"stationLineContainer__2agpK",stationLineBar:"stationLineBar__3mmSY",stationLineBarTopName:"stationLineBarTopName__1RRy5",stationLineBarBottomNameContainer:"stationLineBarBottomNameContainer__Y_mMO",stationLineBarBottomName:"stationLineBarBottomName__7knZm",currentStationLineBar:"currentStationLineBar__Frjp-",stationHeadingLeftTriangle:"stationHeadingLeftTriangle__wBJIj",stationHeadingRightTriangle:"stationHeadingRightTriangle__3m-An",areaNotationsContainer:"areaNotationsContainer__2m6Mf",areaNotation:"areaNotation__3PYV3",areaNotationFilled:"areaNotationFilled__1lk5Z",stationLineBarNumberingRightContainer:"stationLineBarNumberingRightContainer__1hWeS",stationLineBarNumberingLeftContainer:"stationLineBarNumberingLeftContainer__2NXPi",smallNumberingCodeContainer:"smallNumberingCodeContainer__2lIXc",smallNumberingCode:"smallNumberingCode__mnNpq",smallNumberingSuffix:"smallNumberingSuffix__2EdAF"}},Ol7L:function(n){n.exports={signContainer:"signContainer__11b5J",signBoxShadow:"signBoxShadow__1O1_a"}},RhHR:function(n){n.exports={signContainer:"signContainer__3ZQzV",sign:"sign__1IDGT",signDark:"signDark__1WBCh",topContainer:"topContainer__1bnAU",logoContainer:"logoContainer__18mUq",topNameContainer:"topNameContainer__1vjQo",topNameHuge:"topNameHuge__22DzK",topNameLetter:"topNameLetter__1ywgb",topName:"topName__1kjQG",stationLinesContainer:"stationLinesContainer__3TcAy",directionArrow:"directionArrow__ZCIC_",stationLineContainer:"stationLineContainer__3_2Zo",stationLineContainerRight:"stationLineContainerRight__1-VOa",stationLineName:"stationLineName__M6Gek",stationLineBarTopName:"stationLineBarTopName__35Gsr",stationLineBarBottomNameContainer:"stationLineBarBottomNameContainer__iJ7x9",stationLineBarBottomName:"stationLineBarBottomName__34WyH",areaNotationsContainer:"areaNotationsContainer__H2Icd",areaNotation:"areaNotation__3t83I",areaNotationFilled:"areaNotationFilled__1vtVb"}},VNhY:function(n,e,t){"use strict";function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.r(e);var r=t("hosL");var s=t("IzxJ"),l=t.n(s);const c=({line:n,align:e})=>{var t;return Object(r.h)("div",{class:l.a.stationLineContainer},n.heading&&"right"!==e?Object(r.h)("div",{style:n.color?"--color: "+n.color:"",class:l.a.stationHeadingLeftTriangle}):null,Object(r.h)("div",{class:l.a.stationLineBar,style:i(i({},n.color?{"--color":n.color}:{}),{},{textAlign:e})},Object(r.h)("div",{class:l.a.stationLineBarTopName},n.name.kanji),Object(r.h)("div",{class:l.a.stationLineBarBottomNameContainer},Object(r.h)("div",{class:l.a.stationLineBarBottomName},n.name.english)),Object(r.h)("div",{class:"right"===e?l.a.stationLineBarNumberingRightContainer:l.a.stationLineBarNumberingLeftContainer},n.heading?null==(t=n.trains)?void 0:t.map(({prefix:n,suffix:e,color:t})=>Object(r.h)("div",{class:l.a.smallNumberingCodeContainer,style:t?{"--color":t}:{}},Object(r.h)("div",{class:l.a.smallNumberingCode},Object(r.h)("div",null,n),Object(r.h)("div",{class:l.a.smallNumberingSuffix},e)))):null)),n.heading&&"right"===e?Object(r.h)("div",{style:n.color?{"--color":n.color}:{},class:l.a.stationHeadingRightTriangle}):null)},m=({sign:n})=>{var e;return Object(r.h)("div",{class:l.a.sign},Object(r.h)("div",{class:l.a.topContainer},Object(r.h)("div",{class:l.a.topNumberingContainer},n.numbering?Object(r.h)("div",{class:n.code?l.a.numberingContainerWithCode:l.a.numberingContainer},Object(r.h)("div",{class:l.a.numberingHeader},n.code),Object(r.h)("div",{class:l.a.numberingCodeContainer,style:n.numbering.color?{"--color":n.numbering.color}:{}},Object(r.h)("div",{class:l.a.numberingCode},Object(r.h)("div",null,n.numbering.prefix),Object(r.h)("div",{class:l.a.numberingSuffix},n.numbering.suffix)))):null),Object(r.h)("div",{class:l.a.topNameContainer},Object(r.h)("div",{class:l.a.topNameHuge},n.name.kanji.split("").map((n,e)=>Object(r.h)("span",{class:l.a.topNameLetter,key:e},n))),Object(r.h)("div",null,n.name.hiragana)),Object(r.h)("div",{class:l.a.topOffsetNameContainer},n.name.hangul&&n.name.kanji.length<7?Object(r.h)(r.Fragment,null,Object(r.h)("div",null,n.name.jiantizi),Object(r.h)("div",null,n.name.hangul)):null)),Object(r.h)("div",{class:l.a.areaNotationsContainer},null==(e=n.areaNotations)?void 0:e.map(({letter:n,fill:e})=>Object(r.h)("div",{class:e?l.a.areaNotationFilled:l.a.areaNotation},n))),Object(r.h)("div",{class:l.a.stationLinesContainer},n.left?Object(r.h)(c,{line:n.left}):Object(r.h)("div",{class:l.a.stationLineBar}),Object(r.h)("div",{class:l.a.currentStationLineBar,style:n.color?{"--color":n.color}:{}}),n.right?Object(r.h)(c,{line:n.right,align:"right"}):Object(r.h)("div",{class:l.a.stationLineBar})),Object(r.h)("div",{class:l.a.bottomNameContainer},Object(r.h)("div",null,n.name.english)))};var g=t("jUMG"),b=t("RhHR"),h=t.n(b);const d=({line:n,align:e})=>Object(r.h)("div",{class:"right"===e?h.a.stationLineContainerRight:h.a.stationLineContainer},n.heading&&"right"!==e?Object(r.h)("div",{class:h.a.directionArrow},"←"):null,Object(r.h)("div",{class:h.a.stationLineName},Object(r.h)("div",{class:h.a.stationLineBarTopName},n.name.hiragana),Object(r.h)("div",{class:h.a.stationLineBarBottomNameContainer},Object(r.h)("div",{class:h.a.stationLineBarBottomName},n.name.english))),n.heading&&"right"===e?Object(r.h)("div",{class:h.a.directionArrow},"→"):null),_=({sign:n,darkMode:e})=>{var t;return Object(r.h)("div",{class:e?h.a.signDark:h.a.sign},Object(r.h)("div",{class:h.a.topContainer},Object(r.h)("div",{class:h.a.logoContainer},Object(r.h)("img",{src:g.a+"/assets/logos/jr_west.svg"})),Object(r.h)("div",{class:h.a.topNameContainer},Object(r.h)("div",{class:h.a.topNameHuge},n.name.kanji.split("").map((n,e)=>Object(r.h)("span",{class:h.a.topNameLetter,key:e},n))),Object(r.h)("div",{class:h.a.topName},Object(r.h)("div",null,n.name.hiragana),Object(r.h)("div",null,n.name.english))),Object(r.h)("div",null)),Object(r.h)("div",{class:h.a.areaNotationsContainer},null==(t=n.areaNotations)?void 0:t.map(({letter:n,fill:e})=>Object(r.h)("div",{class:e?h.a.areaNotationFilled:h.a.areaNotation},n))),Object(r.h)("div",{class:h.a.stationLinesContainer,style:n.color?{"--color":n.color}:{}},n.left?Object(r.h)(d,{line:n.left}):Object(r.h)("div",{class:h.a.stationLineBar}),n.right?Object(r.h)(d,{line:n.right,align:"right"}):Object(r.h)("div",{class:h.a.stationLineBar})))};var u=t("Lo1s"),O=t("Ol7L"),C=t.n(O);e.default=n=>{let e;switch(n.sign.company){case u.a.JR_EAST:e=m;break;case u.a.JR_WEST:e=_;break;default:throw new Error("Unsupported sign company: "+n.sign.company)}return Object(r.h)("div",{class:C.a.signContainer,style:{transform:`scale(${n.scale})`}},Object(r.h)(e,n),n.boxShadow?Object(r.h)("div",{class:C.a.signBoxShadow}):null)}}}]);
//# sourceMappingURL=route-sign.chunk.c0d62.esm.js.map