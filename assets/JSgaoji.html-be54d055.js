import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-e62bcb45.js";
const _imports_0 = "/bowenBlog/assets/image-20230915093047479-1abe2a1c.png";
const _imports_1 = "/bowenBlog/assets/image-20230915102733671-fa4fad55.png";
const _imports_2 = "/bowenBlog/assets/image-20230915102236204-16947445730781-272dc5ca.png";
const _imports_3 = "/bowenBlog/assets/image-20230915143543810-9dc1bfcc.png";
const _imports_4 = "/bowenBlog/assets/image-20230915144553131-33d94ca3.png";
const _imports_5 = "/bowenBlog/assets/image-20230915151246063-d16c6edf.png";
const _imports_6 = "/bowenBlog/assets/image-20230915152321699-ebc2c767.png";
const _imports_7 = "/bowenBlog/assets/image-20230915153707470-f6d685a1.png";
const _imports_8 = "/bowenBlog/assets/image-20230915154957642-4e841e66.png";
const _imports_9 = "/bowenBlog/assets/image-20230915163637986-f427c919.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="js高级" tabindex="-1"><a class="header-anchor" href="#js高级" aria-hidden="true">#</a> JS高级</h1><h2 id="一-代码段和作用域" tabindex="-1"><a class="header-anchor" href="#一-代码段和作用域" aria-hidden="true">#</a> 一. 代码段和作用域</h2><p>什么是代码段?</p><ul><li>一个script就是一个代码段</li><li>一个js文件也是一个代码段</li></ul><p>代码段的特点:</p><ul><li>代码段之间互不影响</li><li>上面代码段定义的代码,下面的代码可以使用</li><li>下面定义的变量,上面的代码段不可以使用</li><li>一个页面中 可以存在多个代码段,每一个js文件都是一个代码段</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	 <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n\n    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n\n    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a is not defined</span>\n        <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用域</strong></p><ul><li>全局变量的作用范围是全局</li><li>局部变量的作用范围是局部</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>\n<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">100</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 100</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用域链</strong></p><p>向上查找的过程叫做链式过程</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>     <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n        <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n            c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>\n            <span class="token keyword">function</span> <span class="token function">gn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//20</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//30</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//40</span>\n            <span class="token punctuation">}</span>\n            <span class="token function">gn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// 全局变量  a  c</span>\n        <span class="token comment">// 局部变量  b  d</span>\n        <span class="token comment">// 寻找变量的过程 叫作用域链 链式过程</span>\n        <span class="token comment">// 按照作用域往上寻找 需要按照定义处的范围去寻找</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-预解析" tabindex="-1"><a class="header-anchor" href="#二-预解析" aria-hidden="true">#</a> 二. 预解析</h2><p>JS代码的执行</p><ul><li>预解析</li><li>执行 (预解析结束后才会进入到执行阶段)</li></ul><p><img src="' + _imports_0 + '" alt="image-20230915093047479"></p><p><em>浏览器执行代码时,会对代码进行清洗,把重复的代码一部分进行清洗</em></p><p><strong>变量提升</strong></p><p><img src="' + _imports_1 + '" alt="image-20230915102733671"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 未声明直接使用的变量 会直接报错 a is not defined</span>\n\n<span class="token comment">// 只声明未赋值不会报错</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token comment">// var 声明的变量存在提升</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预解析期间:</p><ul><li>把变量提升, 使用 var 的变量</li><li>函数内部的局部变量,提升导函数打的前面</li></ul><p><img src="' + _imports_2 + '" alt="image-20230915102236204"></p><h2 id="三-执行上下文" tabindex="-1"><a class="header-anchor" href="#三-执行上下文" aria-hidden="true">#</a> 三. 执行上下文</h2><p><strong>内存的概念</strong></p><p>内存 =&gt; 电脑的内存 -</p><p>基本数据类型 =&gt; 存放在栈区 (先进后出)</p><ul><li>Number</li><li>Boolean</li><li>String</li><li>Undefined</li><li>Null</li></ul><p>引用数据类型: <u>存放在堆区堆空间有一个对应的 堆地址 和 变量名还是存放在栈区</u></p><ul><li>function</li><li>object</li><li>Array</li></ul><p><strong>EC execution context</strong></p><p><em>执行上下文是 JavaScript 引擎在执行代码时创建的一个环境，用于管理变量、函数和作用域等信息。每当 JavaScript 代码执行时，都会创建一个新的执行上下文</em>。</p><p><strong>代码从浏览器解析之后,形成了执行上下文</strong></p><ul><li>EC -- 入栈 -- 执行 -- 出栈(出栈=&gt; 销毁 释放内存)</li><li>ECS 栈空间 (执行上下文栈)</li><li>ECG - - 全局代码执行的时候产生 =&gt; GO (装入全局代码)</li><li>ECFn - - 调用一个函数产生 , 调用多次产生多个 ECF1....ECF2....... , ECF1 中有一个Ao (转入局部代码)</li><li>堆空间 - - 引用数据类型存放, 并产生堆地址=&gt;存放于ECG中</li></ul><p><img src="' + _imports_3 + '" alt="image-20230915143543810"></p><p>入栈 =&gt; 执行 =&gt; 出栈 (出栈即销毁 释放内存)</p><p>JS执行代码时:</p><ol><li>先执行去全局代码, 就会产生EC(G), 这个EC(G) 就要入栈</li><li>当我们调用一个函数时,这个局部执行 EC(fn) 也需要入栈</li><li>当函数调用完毕,这个EC(fn)在堆内没有引用就要出栈 =&gt; 释放内存,</li><li>调用其他函数后, 又进入其他EC(fn),执行完毕后又出, 以此类推,当全局代码执行完毕,EC(G)也要出栈.</li></ol><p><strong>练习1</strong></p><p><img src="' + _imports_4 + '" alt="image-20230915144553131"></p><p><strong>练习2</strong></p><p><img src="' + _imports_5 + '" alt="image-20230915151246063"></p><p>练习3</p><p><img src="' + _imports_6 + '" alt="image-20230915152321699"></p><p>练习4</p><p><img src="' + _imports_7 + '" alt="image-20230915153707470"></p><h2 id="四-声明var和不声明var的变量区别" tabindex="-1"><a class="header-anchor" href="#四-声明var和不声明var的变量区别" aria-hidden="true">#</a> 四. 声明var和不声明var的变量区别</h2><p>声明var:</p><ul><li>预解析存在提升,</li></ul><p>不声明:</p><ul><li>预解析不会提升</li></ul><p>不管是否声明var,都会挂载在GO windows中</p><p><img src="' + _imports_8 + '" alt="image-20230915154957642"></p><h2 id="五-使用let的变量" tabindex="-1"><a class="header-anchor" href="#五-使用let的变量" aria-hidden="true">#</a> 五. 使用let的变量</h2><p>特点:</p><ol><li>let声明的变量不会提升 (提升了但是没有初始化, 报错不同)</li><li>let 与{} 会生成块级作用域</li><li>使用let声明的变量不会挂载在window上</li><li>不能重复声明</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n<span class="token keyword">var</span> i \n<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_9 + '" alt="image-20230915163637986"></p>', 60);
const _hoisted_61 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_61);
}
const JSgaoji_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JSgaoji.html.vue"]]);
export {
  JSgaoji_html as default
};
