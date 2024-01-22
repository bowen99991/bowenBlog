import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-0d7592ba.js";
const _imports_0 = "/bowenBlog/assets/image-20231126205147407-24696964.png";
const _imports_1 = "/bowenBlog/assets/image-20231126205529864-873f13a5.png";
const _imports_2 = "/bowenBlog/assets/image-20231126210428445-2173d637.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="前段面试-css" tabindex="-1"><a class="header-anchor" href="#前段面试-css" aria-hidden="true">#</a> 前段面试-CSS</h1><hr><h2 id="_1-padding和margin有什么不同-字节" tabindex="-1"><a class="header-anchor" href="#_1-padding和margin有什么不同-字节" aria-hidden="true">#</a> 1. padding和margin有什么不同？（字节）</h2><p>padding内边距，<strong>作用与自身</strong></p><p>margin外边距，<strong>作用与外部对象</strong></p><p><strong>作用对象不同！</strong></p><h2 id="_2-vw和-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-vw和-有什么区别" aria-hidden="true">#</a> 2.vw和%有什么区别？</h2><p>% <strong>有继承关系</strong>，继承父级</p><p>vw 只和设备宽度有关系，<strong>无继承关系</strong></p><h2 id="_3-如何让谷歌浏览器支持小字体" tabindex="-1"><a class="header-anchor" href="#_3-如何让谷歌浏览器支持小字体" aria-hidden="true">#</a> 3.如何让谷歌浏览器支持小字体？</h2><p>如何实现一个0.5px的 竖线 |</p><p>采用css3缩放</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*0.5倍*/</span>\n<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token property">-webkit-transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用css画图形" tabindex="-1"><a class="header-anchor" href="#_4-使用css画图形" aria-hidden="true">#</a> 4.使用CSS画图形</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">.line</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">transform-origin</span><span class="token punctuation">:</span> top left<span class="token punctuation">;</span>\n      <span class="token comment">/* 定义了css变换的基准点 或变换的原点 */</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.circle</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.triangle</span> <span class="token punctuation">{</span>\n      <span class="token comment">/* 等腰直角三角形 */</span>\n      <span class="token comment">/* width: 0;\n      height: 0;\n      border-top: 0 solid transparent;\n      border-left: 70px solid transparent;\n      border-right: 70px solid transparent;\n      border-bottom: 70px solid red; */</span>\n      <span class="token comment">/* \n      直角三角形\n       width: 0;\n      height: 0;\n      border-top: 0 solid transparent;\n      border-left: 0px solid transparent;\n      border-right: 500px solid transparent;\n      border-bottom: 100px solid red; */</span>\n\n      <span class="token comment">/* \n      画一个朝下的三角形\n      */</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">border-top</span><span class="token punctuation">:</span> 70px solid red<span class="token punctuation">;</span>\n      <span class="token property">border-left</span><span class="token punctuation">:</span> 70px solid transparent<span class="token punctuation">;</span>\n      <span class="token property">border-right</span><span class="token punctuation">:</span> 70px solid transparent<span class="token punctuation">;</span>\n      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0px solid transparent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.halfCircle</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n      <span class="token comment">/* border-radius 控制朝向   按顺序左上角、右上角、右下角和左下角*/</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 100px 0 0<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/* 画一个半圆 */</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 画一个0.5px的线 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 画一个圆形 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- 画一个三角形  , 通过设置border-方向为0 就是三角形的顶角朝向 --&gt;</span>\n  <span class="token comment">&lt;!-- 直角三角形(其中两个方向为0,一个位 50 另一个为100,且这两个边需相连), 等腰直角三角形(三个方向的border都为同一个数) --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>triangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n\n\n  <span class="token comment">&lt;!-- 画一个半圆 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>halfCircle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-css-清除浮动-出现了-haslayout-zoom" tabindex="-1"><a class="header-anchor" href="#_5-css-清除浮动-出现了-haslayout-zoom" aria-hidden="true">#</a> 5, CSS 清除浮动, 出现了 hasLayout? *zoom</h2><p>清除浮动是一种很常见的操作，最常用的一种方案如下：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>\n  <span class="token operator">*</span><span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n\n  <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>\n    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">// 可见, 隐藏</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tips : <code>visibility: hidden;</code> 是CSS中的一个属性，用于控制元素的可见性。当设置为<code>hidden</code>时，元素在页面上仍然占据空间，但其内容将不可见，即元素被隐藏起来。</p></blockquote><p>解析:</p><p>在 <code>clearfix</code> 类中添加 <code>after</code> 伪元素，并在伪元素中使用 <code>clear: both</code> 是很常见的一种清除浮动的方法，但上面的代码中还有一些额外的操作需要注意：</p><ul><li><p><strong>为什么 <code>content</code> 不直接设置为空字符串？</strong></p><p>首先，在伪元素中，如果没有 <code>content</code> 属性，或者 <code>content</code> 属性值为 <code>none</code> 或者 <code>normal</code> 时，伪元素是不会产生的。 然而在一些老版本的浏览器中，<code>content</code> 值为空字符时也不会产生伪元素，所以为了兼容性，这里是<strong>随便设置</strong>一个 <code>content</code> 值，然后后面使用<code>font-size: 0;height: 0;visibility: hidden;</code>来消除这个 <code>content</code> 的影响。</p></li><li><p><strong>为什么 <code>clearfix</code> 类中还要使用 <code>*zoom: 1;</code>？</strong></p><p>这是本篇文章的重点，往下看！</p></li></ul><h3 id="zoom-是什么" tabindex="-1"><a class="header-anchor" href="#zoom-是什么" aria-hidden="true">#</a> <strong>zoom 是什么?</strong></h3><p><code>zoom</code> 属性最初只是 IE 浏览器上的私有属性，但之后也被一些浏览器所支持，支持情况如下：</p><p><img src="' + _imports_0 + '" alt="image-20231126205147407"></p><p><code>zoom</code> 属性主要是用于控制元素的缩放比例，与 <code>transform: scale()</code> 类似，但它会影响元素的布局大小（同样会影响周围元素的布局，会触发回流），效果如下：</p><p><img src="' + _imports_1 + '" alt="image-20231126205529864"></p><p>网上都说这个属性没什么意义，但我个人认为它还是有一定的使用场景的，如果您正在使用 typora 写 markdown，您可以试试插入图片后调整图片大小，然后再查看源码，您会发现 <strong>typora 就是使用 zoom 属性来缩放您的图片的</strong> ！</p><h3 id="为什么使用-zoom" tabindex="-1"><a class="header-anchor" href="#为什么使用-zoom" aria-hidden="true">#</a> <strong>为什么使用 zoom ?</strong></h3><p>多加一个 <code>zoom</code> 属性，无非就是两点原因：</p><ol><li>一些老版本 IE 浏览器对伪元素或者一些属性的支持情况不太友好，导致无法使用伪元素来实现清除伪类。</li><li><code>zoom</code> 属性可以在老版本 IE 中起到清除浮动的作用。</li></ol><p>为何 <code>zoom</code> 可以在老版本 IE 中起到清除浮动的作用？这就要说起 IE 中对元素布局具有深远影响的 <code>hasLayout</code> 属性！</p><h3 id="什么是-haslayout" tabindex="-1"><a class="header-anchor" href="#什么是-haslayout" aria-hidden="true">#</a> 什么是 hasLayout ?</h3><blockquote><p>绝大部分情况下，我们不需要了解 hasLayout 的任何信息，但本着提升自己、扩展知识、提升职业素养的想法，多了解自己领域内的知识，百利而无一害！</p></blockquote><p>其实在 IE 中，<code>hasLayout</code> 并不是一个可以被开发者直接控制的 CSS 属性，它是 IE 渲染引擎的内部属性，主要用来<strong>表示元素以何种方式进行渲染</strong>。</p><p>在 IE 中，元素主要有两种渲染方式：</p><ol><li>元素负责调整自身以及后代元素的内容的大小和排列，此时元素对应的 <code>hasLayout</code> 属性为 <code>true</code>（这时可以简单称该元素具有“独立布局”）</li><li>元素依赖父元素来调整其内容的大小和排列，此时元素对应的 <code>hasLayout</code> 属性为 <code>false</code></li></ol><p>只有一部分元素，如：<code>body</code>、<code>html</code>(标准模式，非怪异模式)、<code>table</code>、<code>img</code>、<code>button</code>、<code>input</code>、<code>iframe</code>等的 <code>hasLayout</code> 属性默认为 <code>true</code></p><blockquote><p>之所以不让所有元素默认都具有“独立布局”的主要原因是“性能和简单性”，如果所有元素都有独立布局，则会对性能和内存使用产生不利影响。</p></blockquote><p>对于 <code>hasLayout</code> 属性为 <code>false</code> 的不具有“独立布局”的元素，因为受限与父元素，在使用时可能会发生一些 BUG。事实上 IE 中很多 CSS 的 BUG 确实是由于这种机制所导致，所以大部分 BUG 也都能通过触发 <code>hasLayout</code> 来解决。</p><h3 id="如何触发-haslayout" tabindex="-1"><a class="header-anchor" href="#如何触发-haslayout" aria-hidden="true">#</a> 如何触发 hasLayout ?</h3><p>当一个元素设置了 <code>width</code> 或者 <code>height</code> （除 <code>auto</code> 之外的值）时，该元素的 <code>hasLayout</code> 就会变成 <code>true</code>，如果不想指定元素宽高，也可以使用以下方式来触发：</p>', 43);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("设置元素为行块盒（"),
    /* @__PURE__ */ createBaseVNode("code", null, "inline-block"),
    /* @__PURE__ */ createTextVNode("）")
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "设置浮动",
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "设置绝对定位",
  -1
  /* HOISTED */
);
const _hoisted_47 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "writing-mode: tb-rl",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "tb-rl",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "设置zoom")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createStaticVNode('<p>IE7 中，<code>min-height</code>、<code>max-height</code>、<code>min-width</code>、<code>max-width</code>、<code>overflow</code>、固定定位等也都可以触发 <code>hasLayout</code>。</p><p>以上属性，最常用的就是使用 <code>zoom:1</code>，因为它几乎不会产生什么副作用，这也是我们使用 <code>zoom</code> 的原因之一。</p><blockquote><p><strong>为何是之一？</strong></p><p>因为还有一个原因：早期时它不是有效的 CSS 属性（非标准，且是 IE 私有的），因此其他浏览器会忽略它。但之后这个属性也被 Chrome 、Safari 等其它一些浏览器给支持了，现在如果我们不想让除 IE 之外的浏览器识别 <code>zoom</code>，可以在其前面添加<code>*</code>前缀（原因后面说）</p></blockquote><p>其实看到这，您应该可以想到 IE 中的 <code>hasLayout</code> 与我们当下流行的块级格式化上下文（BFC）有些许相像，它们都是创建一个独立环境来完成布局，从而避免影响外界或者被外界影响，所以说在 IE 中触发 <code>hasLayout</code> 就能清除浮动也就很好理解了。</p><h3 id="为什么-zoom-前加-前缀" tabindex="-1"><a class="header-anchor" href="#为什么-zoom-前加-前缀" aria-hidden="true">#</a> 为什么 zoom 前加 * 前缀?</h3><p>上面已经提到了，如果我们不想让除 IE 之外的浏览器识别 <code>zoom</code>，可以在其前面添加<code>*</code>前缀，这是因为只有 IE7 及以下版本的浏览器才支持<strong>具有非字母数字下划线前缀</strong>的属性！现代浏览器是无法识别带这种前缀的属性的，并且在 CSS 中直接使用这种前缀时 VS Code 会直接爆红（在 less 中写这种前缀则不会爆红）：</p><p><img src="' + _imports_2 + '" alt="image-20231126210428445"></p><blockquote><p>其实个人感觉现在这个 <code>*</code> 前缀加不加无所谓，因为即使被一些浏览器所识别，<code>zoom:1</code> 的设置也不会产生什么明显的副作用。不加的话，还可以避免在直接写 CSS 时 VSCode 爆红，不知各位大佬有何观点？</p></blockquote><h2 id="_6-介绍下-webkit-引擎" tabindex="-1"><a class="header-anchor" href="#_6-介绍下-webkit-引擎" aria-hidden="true">#</a> 6, 介绍下 WebKit 引擎</h2><blockquote><p>许多浏览器中的<code>-webkit</code>前缀是用于支持WebKit引擎的特定CSS属性和功能。WebKit引擎主要用于浏览器如Chrome和Safari, 以下是一些常见的功能</p><ol><li><code>-webkit-border-radius</code>：用于设置元素的圆角边框半径。</li><li><code>-webkit-box-shadow</code>：用于添加元素的阴影效果。</li><li><code>-webkit-transition</code>：用于创建平滑过渡效果，可以在属性值发生变化时应用动画效果。</li><li><code>-webkit-transform</code>：用于对元素进行旋转、缩放、倾斜等变换操作。</li><li><code>-webkit-animation</code>：用于创建动画效果，可以定义关键帧和动画属性。</li><li><code>-webkit-appearance</code>：用于改变表单元素的默认外观样式。</li><li><code>-webkit-overflow-scrolling</code>：用于在移动设备上启用平滑滚动效果。</li><li><code>-webkit-text-size-adjust</code>：用于控制移动设备上文本的自动调整大小行为。</li><li><code>-webkit-backface-visibility</code>：用于控制元素的背面可见性，在进行3D变换时可以防止背面显示。</li></ol></blockquote>', 10);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      _hoisted_44,
      _hoisted_45,
      _hoisted_46,
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_47, [
          _hoisted_48,
          createTextVNode("open in new window"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" ("),
        _hoisted_49,
        createTextVNode("值目前来说虽已弃用，但这里针对的老版本浏览器还都是支持的)")
      ]),
      _hoisted_50
    ]),
    _hoisted_51
  ]);
}
const qianduanmianshiCSS_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-CSS.html.vue"]]);
export {
  qianduanmianshiCSS_html as default
};
