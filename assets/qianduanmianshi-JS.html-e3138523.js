import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app-e5bc8033.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="前端面试-javascript" tabindex="-1"><a class="header-anchor" href="#前端面试-javascript" aria-hidden="true">#</a> 前端面试-JavaScript</h2><h3 id="_1-js中的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1-js中的数据类型有哪些" aria-hidden="true">#</a> 1, JS中的数据类型有哪些</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基本类型：\n1）number\n2）string\n3）boolean\n4）null\n5）undefiend\n6）symbol\n\n引用类型：\n1）数组\n2）对象\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-i-和-i的区别" tabindex="-1"><a class="header-anchor" href="#_2-i-和-i的区别" aria-hidden="true">#</a> 2, i++和++i的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>++在前，整体是新值\n++在后，整体是旧值\n\ni的值都要加1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-说出-和-的区别" tabindex="-1"><a class="header-anchor" href="#_3-说出-和-的区别" aria-hidden="true">#</a> 3, 说出== 和 === 的区别?</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>== (普通相等)\n1)在类型不相同的情况下, 会将运算元先转成Number的值, 再进⾏⽐较(隐式转换)\n2)null⽐较特殊: null在进⾏⽐较的时候, 应该是会被当成⼀个对象和原⽣类型进⾏⽐较的\n\n=== (严格不等)\n1)在类型不同的情况下,直接返回false\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-什么是回调函数-什么是匿名函数" tabindex="-1"><a class="header-anchor" href="#_4-什么是回调函数-什么是匿名函数" aria-hidden="true">#</a> 4, 什么是回调函数?什么是匿名函数?</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回调函数：\n1)个函数作为另外⼀个函数的参数，称之为回调函数，也称为⾼阶函数\n\n匿名函数：\n1)如果在传⼊⼀个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-attribute和property的区别和关系" tabindex="-1"><a class="header-anchor" href="#_5-attribute和property的区别和关系" aria-hidden="true">#</a> 5, attribute和Property的区别和关系</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>attribute:\n1)浏览器解析HTML元素时 会将对应的属性(attribute)放在对应的元素对象上\n2)具体分为标准的属性和⾮标准的属性\n3)标准属性: id class href type value等等\n4)⾮标准属性(⾃定义) :abc age height\n\nProperty:\n1)对于标准的attribute 会在DOM对象上创建对应的property属性\n2)⼤多数情况下 他们是相互作⽤的 改变其中⼀个 另⼀个也会随之改变\n3)⼤多数情况 推荐获取attribute 使⽤property⽅式 因为它默认是有类型的\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-prefech-和-preload-的区别" tabindex="-1"><a class="header-anchor" href="#_6-prefech-和-preload-的区别" aria-hidden="true">#</a> 6, prefech 和 preload 的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&amp;lt;link rel=&quot;prefetch&quot; href=&quot;style.css&quot; as=&quot;style&quot; /&gt;\n&amp;lt;link rel=&quot;preload&quot; href=&quot;main.js&quot; as=&quot;script&quot; /&gt;\n\npreload 是⼀个声明式 fetch，可以强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源。 preload 顾名思义就是⼀种预加载的⽅式，它通过声明向浏览器声明⼀个需要提前加载的资源，当资源真正被使⽤的时候⽴即执⾏，就⽆需等待⽹络的消耗。\n\nprefetch 告诉浏览器这个资源将来可能需要，但是什么时间加载这个资源是由浏览器来决定的。若能预测到⽤户的⾏为，⽐如懒加载，点击到其它⻚⾯等则相当于提前预加载了需要的资源。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-闭包函数" tabindex="-1"><a class="header-anchor" href="#_7-闭包函数" aria-hidden="true">#</a> 7, 闭包函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在JavaScript中，当一个函数可以访问并操作其外部函数的变量时，就形成了闭包。</span>\n  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>       <span class="token comment">// 形成了闭包 ,封装了私有变量</span>\n      <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> inner\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> outer <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 调用这个函数</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8, null 和 undefined 的区别</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span>\n    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false </span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object </span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作者在设计JS的时候, 先设计的null\nnull 表示无 \n\n\n总结:\nnull表示一个被明确赋予的空值。\nundefined表示一个未定义或未赋值的变量。\nnull是一个特殊的对象类型，而undefined是一个原始类型。\n在条件语句中，它们都会被当作false，但在严格相等比较中它们是不相等的。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
const qianduanmianshiJS_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-JS.html.vue"]]);
export {
  qianduanmianshiJS_html as default
};
