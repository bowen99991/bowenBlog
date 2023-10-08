import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app-edc55e3a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="前端面试-javascript" tabindex="-1"><a class="header-anchor" href="#前端面试-javascript" aria-hidden="true">#</a> 前端面试-JavaScript</h2><h3 id="_1-js中的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1-js中的数据类型有哪些" aria-hidden="true">#</a> 1, JS中的数据类型有哪些</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基本类型：\n1）number\n2）string\n3）boolean\n4）null\n5）undefiend\n6）symbol (es6新增数据类型, 2015年 ECMAScript6)\n7) bigInt (一些浏览器可能不支持 , 2019年新增)\n\n引用类型：\n1）数组 Array\n2）对象 Object\n3) 函数 Function\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-i-和-i的区别" tabindex="-1"><a class="header-anchor" href="#_2-i-和-i的区别" aria-hidden="true">#</a> 2, i++和++i的区别</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>++在前，整体是新值\n++在后，整体是旧值\n\ni的值都要加1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-说出-和-的区别" tabindex="-1"><a class="header-anchor" href="#_3-说出-和-的区别" aria-hidden="true">#</a> 3, 说出== 和 === 的区别?</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>== (普通相等)\n1)在类型不相同的情况下, 会将运算元先转成Number的值, 再进⾏⽐较(隐式转换)\n2)null⽐较特殊: null在进⾏⽐较的时候, 应该是会被当成⼀个对象和原⽣类型进⾏⽐较的\n\n=== (严格不等)\n1)在类型不同的情况下,直接返回false\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-什么是回调函数-什么是匿名函数" tabindex="-1"><a class="header-anchor" href="#_4-什么是回调函数-什么是匿名函数" aria-hidden="true">#</a> 4, 什么是回调函数?什么是匿名函数?</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回调函数：\n1)个函数作为另外⼀个函数的参数，称之为回调函数，也称为⾼阶函数\n\n匿名函数：\n1)如果在传⼊⼀个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-attribute和property的区别和关系" tabindex="-1"><a class="header-anchor" href="#_5-attribute和property的区别和关系" aria-hidden="true">#</a> 5, attribute和Property的区别和关系</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>attribute:\n1)浏览器解析HTML元素时 会将对应的属性(attribute)放在对应的元素对象上\n2)具体分为标准的属性和⾮标准的属性\n3)标准属性: id class href type value等等\n4)⾮标准属性(⾃定义) :abc age height\n\nProperty:\n1)对于标准的attribute 会在DOM对象上创建对应的property属性\n2)⼤多数情况下 他们是相互作⽤的 改变其中⼀个 另⼀个也会随之改变\n3)⼤多数情况 推荐获取attribute 使⽤property⽅式 因为它默认是有类型的\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-prefech-和-preload-的区别" tabindex="-1"><a class="header-anchor" href="#_6-prefech-和-preload-的区别" aria-hidden="true">#</a> 6, prefech 和 preload 的区别</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&amp;lt;link rel=&quot;prefetch&quot; href=&quot;style.css&quot; as=&quot;style&quot; /&gt;\n&amp;lt;link rel=&quot;preload&quot; href=&quot;main.js&quot; as=&quot;script&quot; /&gt;\n\npreload 是⼀个声明式 fetch，可以强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源。 preload 顾名思义就是⼀种预加载的⽅式，它通过声明向浏览器声明⼀个需要提前加载的资源，当资源真正被使⽤的时候⽴即执⾏，就⽆需等待⽹络的消耗。\n\nprefetch 告诉浏览器这个资源将来可能需要，但是什么时间加载这个资源是由浏览器来决定的。若能预测到⽤户的⾏为，⽐如懒加载，点击到其它⻚⾯等则相当于提前预加载了需要的资源。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-闭包函数" tabindex="-1"><a class="header-anchor" href="#_7-闭包函数" aria-hidden="true">#</a> 7, 闭包函数</h3><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在JavaScript中，当一个函数可以访问并操作其外部函数的变量时，就形成了闭包。</span>\n  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>       <span class="token comment">// 形成了闭包 ,封装了私有变量</span>\n      <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> inner\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> outer <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 调用这个函数</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#_8-null-和-undefined-的区别" aria-hidden="true">#</a> 8, null 和 undefined 的区别</h3><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span>\n    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false </span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object </span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作者在设计JS的时候, 先设计的null\nnull 表示无 \n\n\n总结:\nnull表示一个被明确赋予的空值。\nundefined表示一个未定义或未赋值的变量。\nnull是一个特殊的对象类型，而undefined是一个原始类型。\n在条件语句中，它们都会被当作false，但在严格相等比较中它们是不相等的。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-js中的内存泄漏怎么理解" tabindex="-1"><a class="header-anchor" href="#_9-js中的内存泄漏怎么理解" aria-hidden="true">#</a> 9, JS中的内存泄漏怎么理解</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS中已经分配内存地址的对象,但是由于长时间没有释放或者没有办法清除,造成长期占用内存的现象,让内存资源大幅,最终导致运行速度慢,甚至崩溃的情况\n垃圾回收机制\n\n导致的因素:\n未声明直接赋值的变量;\n一些未清空的定时器;\n过度的闭包;\n一些引用元素没有被清除;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-new操作符具体做了什么" tabindex="-1"><a class="header-anchor" href="#_10-new操作符具体做了什么" aria-hidden="true">#</a> 10, new操作符具体做了什么</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.创建了一个空对象\n2.把空对象和构造函数通过原型链接\n3.把构造函数的this绑定到新的空对象身上\n4.根据构建函数返回的类型判断,如果是值类型,则返回对象, 如果是引用类型,就要返回这个引用类型;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-js的设计原理是什么" tabindex="-1"><a class="header-anchor" href="#_11-js的设计原理是什么" aria-hidden="true">#</a> 11, JS的设计原理是什么</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS引擎 v8\n执行上下文\n调用栈 (单线程)\n事件循环(事件驱动)\n回调 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-settimeout-最小的执行时间" tabindex="-1"><a class="header-anchor" href="#_12-settimeout-最小的执行时间" aria-hidden="true">#</a> 12, setTimeout 最小的执行时间</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout的最小执行时间时4ms ,如果小于那么会强制调整为4ms,\n\nsetInterval 最小执行时间是10ms,如果小于那么会强制调整为10ms\n\n以上为HTML5规定的内容,(可能对于浏览器有不同的情况)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-es6的新特性" tabindex="-1"><a class="header-anchor" href="#_13-es6的新特性" aria-hidden="true">#</a> 13, ES6的新特性</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.新增块级作用域 (let const)\n		1.不存在变量提升,\n		2.存在暂时性死区的问题\n		3.块级作用域的内容\n		4.不能再同一个作用域内反复声明\n		\n2.新增了定义类的语法糖 (class 类)\n3.新增了一种基本数据结构 (symbol)\n		1.不能用于四则运算\n		2.用它创建的数据一定是唯一的\n		3.它不是一个对象,所以无法new Symbol()\n		4.Symbol是一个用于创建唯一的、不可变的值的基本数据类型。\n		5.只需调用Symbol()函数即可创建Symbol数据\n		\n4.新增了解构赋值\n		1.从数组或者对象中取值,然后给变量赋值\n		\n5.新增了函数参数的默认值\n6.给数组新增了API\n7.对象和数组都新增了扩展运算符 (...)\n8.Promise\n		1.解决回调地狱的问题\n		2.自身有 all , reject , resolve , race 这些方法\n		3.原型上有 then , catch\n		4.把异步操作队列化\n		5.三种状态, pending(初始等待状态) , rejected(失败状态), fulfilled (成功状态) , pending =&gt; fulfilled;pending =&gt; rejected 一旦发生就会凝固,不会再变\n		6. async await   同步代码做异步的操作,两者必须搭配使用,async 表明函数内有异步操作,调用函数会返回promise, await是组成async的表达式,结果取决于它等待的内容, 如果是promise就是promise的结果,如果是普通函数就进行链式调用\n		await后的promise状态,那么整个async函数都会中断,后面的代码不执行\n		\n9.新增了模块化(import , export)\n10.新增了set 和 map 数据结构\n		1.set是不重复\n		2.map的key的类型不受限制\n\n11.新增了 generator (一种特殊的函数,可以产生一系列值)\n12.新增了箭头函数 !\n		1.不能作为构造函数使用,不用使用 new;\n		2.箭头函数没有 arguments;\n		3.箭头函数不能使用 call 和 apply 改变 this的指向;\n		4.this指向外层的第一个函数的this\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 42);
const _hoisted_43 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_43);
}
const qianduanmianshiJavaScript_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-JavaScript.html.vue"]]);
export {
  qianduanmianshiJavaScript_html as default
};