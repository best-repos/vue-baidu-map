webpackJsonp([24],{"2T6i":function(s,t,a){var n=a("VU/8")(a("qASo"),a("BWDA"),null,null);s.exports=n.exports},BWDA:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Custom Control")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("Add a custom control on the map")]),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{zoom:s.zoom,center:{lng:116.404,lat:39.915}}},[a("bm-control",[a("button",{on:{click:function(t){s.addZoom(19)}}},[s._v("Zoom Max")]),s._v(" "),a("button",{on:{click:function(t){s.addZoom(10)}}},[s._v("Reset")]),s._v(" "),a("button",{on:{click:function(t){s.addZoom(3)}}},[s._v("Zoom Min")])])],1)],1)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmControl")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("anchor")]),s._v(" "),a("td",[s._v("ControlAnchor")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The location of the control.")])]),s._v(" "),a("tr",[a("td",[s._v("offset")]),s._v(" "),a("td",[s._v("Size")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The offset of the control.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(19)"')]),s._v(">")]),s._v("缩放至最大"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(10)"')]),s._v(">")]),s._v("还原"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"addZoom(3)"')]),s._v(">")]),s._v("缩放至最小"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    addZoom (level) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".zoom = level\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},Qtnn:function(s,t,a){s.exports=a("2T6i")},qASo:function(s,t,a){var n,v,_;!function(a,l){v=[s,t],n=l,void 0!==(_="function"==typeof n?n.apply(t,v):n)&&(s.exports=_)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{zoom:10}},methods:{addZoom:function(s){this.zoom=s}}},s.exports=t.default})}});