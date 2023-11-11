import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-6e36b8cc.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><strong>阻止网页的copy事件</strong></p><blockquote><p>解决赋值专栏文章带有的版权信息后缀</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    item<span class="token punctuation">.</span><span class="token function-variable function">oncopy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ol><li><code>document.querySelectorAll(&#39;*&#39;)</code> 选择所有的元素，返回一个类似数组的 NodeList 对象。</li><li>使用扩展运算符 <code>[...document.querySelectorAll(&#39;*&#39;)]</code> 将 NodeList 转换为真正的数组。</li><li>使用 <code>forEach</code> 方法遍历数组中的每个元素。</li><li>对于每个元素，设置 <code>item.oncopy</code> 为一个函数。</li><li>在函数内部，<code>e.stopPropagation()</code> 阻止 <code>oncopy</code> 事件的冒泡传播。</li></ol></blockquote><h2 id="一-less介绍" tabindex="-1"><a class="header-anchor" href="#一-less介绍" aria-hidden="true">#</a> 一, Less介绍</h2><hr><blockquote><p>Less（Leaner Style Sheets）是一种动态样式语言，它扩展了 CSS，并提供了更多的功能和便利的语法，使得样式表的编写更加高效和灵活。</p><p>诞生于2009年 基于JS写的，<strong>编译快，入门简单，功能相差不大</strong>。</p></blockquote>', 7);
const _hoisted_8 = {
  href: "https://link.juejin.cn/?target=http%3A%2F%2Flesscss.cn%2F",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<p><strong>常见的 CSS 预处理语言</strong></p><ul><li>Sass 诞生于2007年 基于<code>Ruby </code>编写。</li><li>Less 诞生于2009年 基于JS写的，<strong>编译快，入门简单，功能相差不大</strong>。</li><li>Stylus 诞生于2021年 来自 <code>Node.js</code> 社区。</li></ul><h2 id="二-基本语法特性" tabindex="-1"><a class="header-anchor" href="#二-基本语法特性" aria-hidden="true">#</a> 二, 基本语法特性</h2><hr><h3 id="_1-嵌套" tabindex="-1"><a class="header-anchor" href="#_1-嵌套" aria-hidden="true">#</a> 1, 嵌套</h3><p>less 支持嵌套书写形式，反映层级和约束</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#app</span><span class="token punctuation">{</span>\n    <span class="token selector">#header</span><span class="token punctuation">{</span>\n        <span class="token selector">.logo</span><span class="token punctuation">{</span>      \n        <span class="token punctuation">}</span>\n        <span class="token selector">// &amp;:代表上一层选择器的名字，此例便是header\n        &amp;:after</span><span class="token punctuation">{</span>\n           <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-媒体查询" tabindex="-1"><a class="header-anchor" href="#_2-媒体查询" aria-hidden="true">#</a> 2, 媒体查询</h3><blockquote><p>媒体查询是一种用于根据设备特性或视口属性来应用不同样式规则的机制。通过使用媒体查询，可以根据设备的屏幕尺寸、屏幕方向、分辨率等条件，为不同的设备或视口应用不同的样式。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span>#adb<span class="token punctuation">;</span>\n    // &gt;=1200\n    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span><span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n       <span class="token property">background</span><span class="token punctuation">:</span>#6e4848<span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n    // &gt;=1200<span class="token punctuation">,</span>&lt;=900\n    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1200px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>900px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n        <span class="token property">background</span><span class="token punctuation">:</span>#baa<span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n    // &lt;900\n    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>900px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n        <span class="token property">background</span><span class="token punctuation">:</span>#abd<span class="token punctuation">;</span> \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-变量" tabindex="-1"><a class="header-anchor" href="#_3-变量" aria-hidden="true">#</a> 3, 变量</h3><blockquote><p>减少重复代码的书写</p></blockquote><p><strong>值变量</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">:</span>#adf<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@fontSize</span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@wrap</span><span class="token punctuation">:</span>1156px；\n\nheader</span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">;</span></span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@fontSize</span><span class="token punctuation">;</span></span>\n    <span class="token property">width</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@wrap</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>名称要求： 字母、数字、下划线、中横线</li><li>首字母可以为数字，可以为纯数字</li><li>区分大小写</li><li>变量值随意</li></ul><p><strong>变量运算</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">header</span><span class="token punctuation">{</span>\n    height<span class="token punctuation">:</span>100px+200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">section</span><span class="token punctuation">{</span>\n    height<span class="token punctuation">:</span>100px*2<span class="token punctuation">;</span>  // 200px<span class="token punctuation">;</span> \n    width<span class="token punctuation">:</span>900/33px<span class="token punctuation">;</span>   //27.2727px<span class="token punctuation">;</span>\n    // 如果只有一个有单位，则使用该单位\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-混合方法" tabindex="-1"><a class="header-anchor" href="#_4-混合方法" aria-hidden="true">#</a> 4, 混合方法</h3><blockquote><p>将重复使用的代码封装到一个类中，在需要使用的地方调用。</p></blockquote><p><strong>普通混合</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">getBG</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@picname</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    background-image<span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;/static/module/class/content/img/@{picname}&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>  // 直接<span class="token punctuation">(</span>接受传参<span class="token punctuation">)</span>\n    background-size<span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    background-position<span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#header</span><span class="token punctuation">{</span>\n    .<span class="token function">getBG</span><span class="token punctuation">(</span>01.png<span class="token punctuation">)</span>     //  传递查询\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.<span class="token function">ellipsis</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@rows</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>   // 省略\n    overflow<span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n    text-overflow<span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n    display<span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>\n    -webkit-line-clamp<span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@rows</span><span class="token punctuation">;</span></span>\n    -webkit-box-orient<span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数混合</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// 定义混合\n.<span class="token function">border</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@border_color</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n    border<span class="token punctuation">:</span>2px solid <span class="token atrule"><span class="token rule">@border_color</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">// 使用混合\n.div</span><span class="token punctuation">{</span>\n    .<span class="token function">border</span><span class="token punctuation">(</span>#f60<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    // 使用时我们需要传入一个参数进去\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数默认值</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// 定义混合\n.<span class="token function">border</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@border_color</span><span class="token punctuation">:</span>#f60<span class="token punctuation">;</span></span><span class="token selector">)</span><span class="token punctuation">{</span>\n    border<span class="token punctuation">:</span>2px solid <span class="token atrule"><span class="token rule">@border_color</span><span class="token punctuation">;</span></span>\n<span class="token punctuation">}</span>\n<span class="token selector">// 使用混合\n.div</span><span class="token punctuation">{</span>\n    .<span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条件混合</strong></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Less `没有 `if else`，可是它有 `when\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// and 运算符 ，相当于 与运算 &amp;&amp;，必须条件全部符合才会执行\n.<span class="token function">border</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@width</span><span class="token punctuation">,</span>@color<span class="token punctuation">,</span>@style<span class="token punctuation">)</span> when <span class="token punctuation">(</span>@width&gt;100px<span class="token punctuation">)</span> <span class="token keyword">and</span><span class="token punctuation">(</span>@color=#999<span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span><span class="token atrule"><span class="token rule">@style</span> <span class="token atrule"><span class="token rule">@color</span> <span class="token atrule"><span class="token rule">@width</span><span class="token punctuation">;</span></span></span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>循环方法</strong></p><blockquote><p><code>Less </code>并没有提供 <code>for</code> 循环功能，是使用递归去实现。 下面是官网中的一个 Demo，模拟了生成栅格系统。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>Less复制代码<span class="token comment">/* Less */</span>\n.<span class="token function">generate-columns</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n.<span class="token function">generate-columns</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@n</span><span class="token punctuation">,</span> @<span class="token property">i</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span> when <span class="token punctuation">(</span>@i =&lt; @n<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">.column-@</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@i</span> * 100% / <span class="token atrule"><span class="token rule">@n</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>\n  <span class="token punctuation">}</span>\n  .<span class="token function">generate-columns</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@n</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@i</span> + 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* 生成后的 CSS */</span>\n<span class="token selector">.column-1</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.column-2</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.column-3</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.column-4</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_5-函数" tabindex="-1"><a class="header-anchor" href="#_5-函数" aria-hidden="true">#</a> 5, 函数</h3><p>函数和混合的区分：</p><ul><li>混合相当于是自定义函数</li><li>函数相当于是内置函数</li></ul><p>数学函数</p><ul><li>ceil 向上取整</li><li>floor 向下取整</li><li>percentage 将小数转化为 『百分比』</li></ul><p>颜色操作</p><ul><li>lighten 加亮</li><li>darken 加暗</li><li>fadein 提高透明度</li><li>fadeout 降低透明度</li></ul><hr><h3 id="_6-继承" tabindex="-1"><a class="header-anchor" href="#_6-继承" aria-hidden="true">#</a> 6, 继承</h3><blockquote><p>类似混合方法，混合是直接把代码结果拿出来，而<code>extend</code>是把选择器提取出来，公共的代码写到一起。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.animation</span><span class="token punctuation">{</span>\n    <span class="token property">transition</span><span class="token punctuation">:</span> all .3s ease-out<span class="token punctuation">;</span>\n    <span class="token selector">.hide</span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#main</span><span class="token punctuation">{</span>\n    &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.animation<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#con</span><span class="token punctuation">{</span>\n    &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.animation .hide<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* 生成后的 CSS */</span>\n<span class="token selector">.animation,#main</span><span class="token punctuation">{</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> all .3s ease-out<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.animation .hide , #con</span><span class="token punctuation">{</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_7-导入" tabindex="-1"><a class="header-anchor" href="#_7-导入" aria-hidden="true">#</a> 7, 导入</h3><p><code>Less</code> 支持组件化，对一些公共文件进行复用，从而优化css文件目录结构</p><ul><li>导入less 文件后缀可省略</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span></span> \n//等价于\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;base.less&quot;</span><span class="token punctuation">;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入css 文件需要加文件后缀</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;common.css&quot;</span><span class="token punctuation">;</span></span> \n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@import</code> 的位置可随意放置</p>', 55);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("中文网址: "),
      createBaseVNode("a", _hoisted_8, [
        createTextVNode("lesscss.cn/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_9
  ]);
}
const Less_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Less.html.vue"]]);
export {
  Less_html as default
};
