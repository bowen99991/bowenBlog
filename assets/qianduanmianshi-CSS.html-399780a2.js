import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-e9fe21f4.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="前段面试-css" tabindex="-1"><a class="header-anchor" href="#前段面试-css" aria-hidden="true">#</a> 前段面试-CSS</h1><hr><h2 id="_1-padding和margin有什么不同-字节" tabindex="-1"><a class="header-anchor" href="#_1-padding和margin有什么不同-字节" aria-hidden="true">#</a> 1. padding和margin有什么不同？（字节）</h2><p>padding内边距，<strong>作用与自身</strong></p><p>margin外边距，<strong>作用与外部对象</strong></p><p><strong>作用对象不同！</strong></p><h2 id="_2-vw和-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-vw和-有什么区别" aria-hidden="true">#</a> 2.vw和%有什么区别？</h2><p>% <strong>有继承关系</strong>，继承父级</p><p>vw 只和设备宽度有关系，<strong>无继承关系</strong></p><h2 id="_3-如何让谷歌浏览器支持小字体" tabindex="-1"><a class="header-anchor" href="#_3-如何让谷歌浏览器支持小字体" aria-hidden="true">#</a> 3.如何让谷歌浏览器支持小字体？</h2><p>如何实现一个0.5px的 竖线 |</p><p>采用css3缩放</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*0.5倍*/</span>\n<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token property">-webkit-transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用css画图形" tabindex="-1"><a class="header-anchor" href="#_4-使用css画图形" aria-hidden="true">#</a> 4.使用CSS画图形</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">.line</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">transform-origin</span><span class="token punctuation">:</span> top left<span class="token punctuation">;</span>\n      <span class="token comment">/* 定义了css变换的基准点 或变换的原点 */</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.circle</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.triangle</span> <span class="token punctuation">{</span>\n      <span class="token comment">/* 等腰直角三角形 */</span>\n      <span class="token comment">/* width: 0;\n      height: 0;\n      border-top: 0 solid transparent;\n      border-left: 70px solid transparent;\n      border-right: 70px solid transparent;\n      border-bottom: 70px solid red; */</span>\n      <span class="token comment">/* \n      直角三角形\n       width: 0;\n      height: 0;\n      border-top: 0 solid transparent;\n      border-left: 0px solid transparent;\n      border-right: 500px solid transparent;\n      border-bottom: 100px solid red; */</span>\n\n      <span class="token comment">/* \n      画一个朝下的三角形\n      */</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">border-top</span><span class="token punctuation">:</span> 70px solid red<span class="token punctuation">;</span>\n      <span class="token property">border-left</span><span class="token punctuation">:</span> 70px solid transparent<span class="token punctuation">;</span>\n      <span class="token property">border-right</span><span class="token punctuation">:</span> 70px solid transparent<span class="token punctuation">;</span>\n      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0px solid transparent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.halfCircle</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n      <span class="token comment">/* border-radius 控制朝向   按顺序左上角、右上角、右下角和左下角*/</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 100px 0 0<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/* 画一个半圆 */</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 画一个0.5px的线 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 画一个圆形 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- 画一个三角形  , 通过设置border-方向为0 就是三角形的顶角朝向 --&gt;</span>\n  <span class="token comment">&lt;!-- 直角三角形(其中两个方向为0,一个位 50 另一个为100,且这两个边需相连), 等腰直角三角形(三个方向的border都为同一个数) --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>triangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n\n\n  <span class="token comment">&lt;!-- 画一个半圆 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>halfCircle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const qianduanmianshiCSS_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-CSS.html.vue"]]);
export {
  qianduanmianshiCSS_html as default
};
