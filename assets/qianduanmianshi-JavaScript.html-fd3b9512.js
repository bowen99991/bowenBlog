import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-030547e9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="前端面试-javascript" tabindex="-1"><a class="header-anchor" href="#前端面试-javascript" aria-hidden="true">#</a> 前端面试-JavaScript</h2><h3 id="_1-js中的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1-js中的数据类型有哪些" aria-hidden="true">#</a> 1, JS中的数据类型有哪些</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基本类型：\n1）number\n2）string\n3）boolean\n4）null\n5）undefiend\n6）symbol (es6新增数据类型, 2015年 ECMAScript6)\n7) bigInt (一些浏览器可能不支持 , 2019年新增)\n\n引用类型：\n1）数组 Array\n2）对象 Object\n3) 函数 Function\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-i-和-i的区别" tabindex="-1"><a class="header-anchor" href="#_2-i-和-i的区别" aria-hidden="true">#</a> 2, i++和++i的区别</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>++在前，整体是新值\n++在后，整体是旧值\n\ni的值都要加1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-说出-和-的区别" tabindex="-1"><a class="header-anchor" href="#_3-说出-和-的区别" aria-hidden="true">#</a> 3, 说出== 和 === 的区别?</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>== (普通相等)\n1)在类型不相同的情况下, 会将运算元先转成Number的值, 再进⾏⽐较(隐式转换)\n2)null⽐较特殊: null在进⾏⽐较的时候, 应该是会被当成⼀个对象和原⽣类型进⾏⽐较的\n\n=== (严格不等)\n1)在类型不同的情况下,直接返回false\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-什么是回调函数-什么是匿名函数" tabindex="-1"><a class="header-anchor" href="#_4-什么是回调函数-什么是匿名函数" aria-hidden="true">#</a> 4, 什么是回调函数?什么是匿名函数?</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回调函数：\n1)个函数作为另外⼀个函数的参数，称之为回调函数，也称为⾼阶函数\n\n匿名函数：\n1)如果在传⼊⼀个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-attribute和property的区别和关系" tabindex="-1"><a class="header-anchor" href="#_5-attribute和property的区别和关系" aria-hidden="true">#</a> 5, attribute和Property的区别和关系</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>attribute:\n1)浏览器解析HTML元素时 会将对应的属性(attribute)放在对应的元素对象上\n2)具体分为标准的属性和⾮标准的属性\n3)标准属性: id class href type value等等\n4)⾮标准属性(⾃定义) :abc age height\n\nProperty:\n1)对于标准的attribute 会在DOM对象上创建对应的property属性\n2)⼤多数情况下 他们是相互作⽤的 改变其中⼀个 另⼀个也会随之改变\n3)⼤多数情况 推荐获取attribute 使⽤property⽅式 因为它默认是有类型的\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-prefech-和-preload-的区别" tabindex="-1"><a class="header-anchor" href="#_6-prefech-和-preload-的区别" aria-hidden="true">#</a> 6, prefech 和 preload 的区别</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&amp;lt;link rel=&quot;prefetch&quot; href=&quot;style.css&quot; as=&quot;style&quot; /&gt;\n&amp;lt;link rel=&quot;preload&quot; href=&quot;main.js&quot; as=&quot;script&quot; /&gt;\n\npreload 是⼀个声明式 fetch，可以强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源。 preload 顾名思义就是⼀种预加载的⽅式，它通过声明向浏览器声明⼀个需要提前加载的资源，当资源真正被使⽤的时候⽴即执⾏，就⽆需等待⽹络的消耗。\n\nprefetch 告诉浏览器这个资源将来可能需要，但是什么时间加载这个资源是由浏览器来决定的。若能预测到⽤户的⾏为，⽐如懒加载，点击到其它⻚⾯等则相当于提前预加载了需要的资源。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-闭包函数" tabindex="-1"><a class="header-anchor" href="#_7-闭包函数" aria-hidden="true">#</a> 7, 闭包函数</h3><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在JavaScript中，当一个函数可以访问并操作其外部函数的变量时，就形成了闭包。</span>\n  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>       <span class="token comment">// 形成了闭包 ,封装了私有变量</span>\n      <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> inner\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> outer <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 调用这个函数</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>闭包的使用场景:</p><blockquote><ol><li><strong>保护变量</strong>：闭包可以创建一个封闭的作用域，将变量隐藏在函数内部，防止其被外部访问和修改。这有助于实现信息隐藏和数据封装。</li><li>记忆状态：闭包可以用于在函数调用之间保留状态。通过捕获外部函数中的变量，闭包可以保留对这些变量的引用，使得在后续的函数调用中可以继续访问和修改这些状态。</li><li><strong>创建私有变量和方法</strong>：通过使用闭包，可以模拟私有变量和方法的概念。外部无法直接访问闭包内部的变量和方法，只能通过暴露的公共接口进行操作。</li><li><strong>延迟执行</strong>：闭包可以用于创建延迟执行的函数。通过在闭包内部设置定时器或使用<code>setTimeout</code>函数，可以延迟函数的执行，从而实现定时任务或延迟回调。</li><li><strong>高阶函数和函数式编程</strong>：闭包在函数式编程和高阶函数中发挥着重要的作用。通过将函数作为参数传递给其他函数，可以创建具有动态行为的闭包，并实现函数的组合、柯里化等函数式编程概念。</li><li><strong>事件处理程序</strong>：闭包可以用于处理事件回调函数，将事件处理程序绑定到特定的上下文和状态。这样可以确保在事件发生时，仍然可以访问正确的变量和数据。</li></ol></blockquote><h3 id="_8-null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#_8-null-和-undefined-的区别" aria-hidden="true">#</a> 8, null 和 undefined 的区别</h3><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span>\n    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">null</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false </span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object </span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>作者在设计JS的时候, 先设计的null\nnull 表示无 \n\n总结:\nnull表示一个被明确赋予的空值。\nundefined表示一个未定义或未赋值的变量。\nnull是一个特殊的对象类型，而undefined是一个原始类型。\n在条件语句中，它们都会被当作false，但在严格相等比较中它们是不相等的。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-js中的内存泄漏怎么理解" tabindex="-1"><a class="header-anchor" href="#_9-js中的内存泄漏怎么理解" aria-hidden="true">#</a> 9, JS中的内存泄漏怎么理解</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS中已经分配内存地址的对象,但是由于长时间没有释放或者没有办法清除,造成长期占用内存的现象,让内存资源大幅,最终导致运行速度慢,甚至崩溃的情况\n垃圾回收机制\n\n导致的因素:\n未声明直接赋值的变量;\n一些未清空的定时器;\n过度的闭包;\n一些引用元素没有被清除;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-new操作符具体做了什么" tabindex="-1"><a class="header-anchor" href="#_10-new操作符具体做了什么" aria-hidden="true">#</a> 10, new操作符具体做了什么</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.创建了一个空对象\n2.把空对象和构造函数通过原型链接\n3.把构造函数的this绑定到新的空对象身上\n4.根据构建函数返回的类型判断,如果是值类型,则返回对象, 如果是引用类型,就要返回这个引用类型;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-js的设计原理是什么" tabindex="-1"><a class="header-anchor" href="#_11-js的设计原理是什么" aria-hidden="true">#</a> 11, JS的设计原理是什么</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS引擎 v8\n执行上下文\n调用栈 (单线程)\n事件循环(事件驱动)\n回调 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-settimeout-最小的执行时间" tabindex="-1"><a class="header-anchor" href="#_12-settimeout-最小的执行时间" aria-hidden="true">#</a> 12, setTimeout 最小的执行时间</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setTimeout的最小执行时间时4ms ,如果小于那么会强制调整为4ms,\n\nsetInterval 最小执行时间是10ms,如果小于那么会强制调整为10ms\n\n以上为HTML5规定的内容,(可能对于浏览器有不同的情况)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-es6的新特性" tabindex="-1"><a class="header-anchor" href="#_13-es6的新特性" aria-hidden="true">#</a> 13, ES6的新特性</h3><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.新增块级作用域 (let const)\n		1.不存在变量提升,\n		2.存在暂时性死区的问题\n		3.块级作用域的内容\n		4.不能再同一个作用域内反复声明\n		\n2.新增了定义类的语法糖 (class 类)\n3.新增了一种基本数据结构 (symbol)\n		1.不能用于四则运算\n		2.用它创建的数据一定是唯一的\n		3.它不是一个对象,所以无法new Symbol()\n		4.Symbol是一个用于创建唯一的、不可变的值的基本数据类型。\n		5.只需调用Symbol()函数即可创建Symbol数据\n		\n4.新增了解构赋值\n		1.从数组或者对象中取值,然后给变量赋值\n		\n5.新增了函数参数的默认值\n6.给数组新增了API\n7.对象和数组都新增了扩展运算符 (...)\n8.Promise\n		1.解决回调地狱的问题\n		2.自身有 all , reject , resolve , race 这些方法\n		3.原型上有 then , catch\n		4.把异步操作队列化\n		5.三种状态, pending(初始等待状态) , rejected(失败状态), fulfilled (成功状态) , pending =&gt; fulfilled;pending =&gt; rejected 一旦发生就会凝固,不会再变\n		6. async await   同步代码做异步的操作,两者必须搭配使用,async 表明函数内有异步操作,调用函数会返回promise, await是组成async的表达式,结果取决于它等待的内容, 如果是promise就是promise的结果,如果是普通函数就进行链式调用\n		await后的promise状态,那么整个async函数都会中断,后面的代码不执行\n		\n9.新增了模块化(import , export)\n10.新增了set 和 map 数据结构\n		1.set是不重复\n		2.map的key的类型不受限制\n\n11.新增了 generator (一种特殊的函数,可以产生一系列值)\n12.新增了箭头函数 !\n		1.不能作为构造函数使用,不用使用 new;\n		2.箭头函数没有 arguments;\n		3.箭头函数不能使用 call 和 apply 改变 this的指向;\n		4.this指向外层的第一个函数的this\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-请解释什么是跨域-如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#_14-请解释什么是跨域-如何解决跨域问题" aria-hidden="true">#</a> 14, 请解释什么是跨域？如何解决跨域问题？</h3><hr><blockquote><p>跨域（Cross-Origin）是指在浏览器中，当一个网页的脚本向不同源（域名、协议或端口）的服务器发送请求时，浏览器会阻止该请求，这就是跨域。跨域存在于浏览器的同源策略（Same-Origin Policy）中，该策略是为了保护用户信息安全而设计的。</p></blockquote><p><strong>解决跨域问题的方法有以下几种：</strong></p><ol><li>JSONP（JSON with Padding）：JSONP 是一种利用 <code>&lt;script&gt;</code> 标签实现的跨域技术。服务器返回的数据被包裹在一个回调函数中，以便客户端接收并执行这个函数，从而获得数据。</li><li>CORS（Cross-Origin Resource Sharing 跨域资源共享）：CORS 是一种基于 HTTP 头部的机制，通过在服务器响应中设置相应的头部信息，允许客户端发起跨域请求。服务端需要设置 Access-Control-Allow-Origin 头部来指定允许的源，也可以通过其他头部字段来控制请求的方法、头部信息等。</li><li>代理（Proxy）：可以在同源的服务器端设置代理，将跨域的请求转发到目标服务器上。客户端只需要向同源的服务器发起请求，由服务器端代理处理跨域请求，并将响应返回给客户端。</li><li>CORS Anywhere：CORS Anywhere 是一个使用Node.js实现的反向代理服务器，它添加了 CORS 头部以允许跨域请求。可以将客户端的请求发送到 CORS Anywhere 服务器，再由服务器向目标服务器发起请求，然后将响应返回给客户端。</li><li>WebSocket：WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，它不受同源策略的限制，因此可以通过 WebSocket 进行跨域通信。</li></ol><h3 id="_15-请解释什么是事件冒泡和事件捕获" tabindex="-1"><a class="header-anchor" href="#_15-请解释什么是事件冒泡和事件捕获" aria-hidden="true">#</a> 15, 请解释什么是事件冒泡和事件捕获？</h3><hr><blockquote><p>事件冒泡（Event Bubbling）和事件捕获（Event Capturing）都是指在页面中对于同一事件的处理过程中，事件的传播方式。</p></blockquote><p>事件冒泡是指事件从触发元素开始向上冒泡至其父级元素，一直传播至根节点（即<code>document</code>对象）。也就是说，事件会先在触发元素上触发，然后再沿着父级元素一直向上触发，直到最终触发到根节点。</p><p>事件捕获是指事件从根节点开始，经过父级元素一直捕获至触发元素之前。与事件冒泡相反，事件捕获是先从根节点开始向下捕获至触发元素的父级元素，最终再到达触发元素。</p><p>在浏览器的事件传播过程中，先执行捕获阶段，然后是目标阶段，最后是冒泡阶段。当一个元素触发了某个事件时，事件会依次经过捕获阶段、目标阶段和冒泡阶段。</p><p>可以通过<code>addEventListener</code>方法来指定在捕获阶段或冒泡阶段处理事件。其第三个参数可以指定是在捕获阶段（<code>true</code>）还是冒泡阶段（<code>false</code>或不指定）处理事件。默认情况下，<code>addEventListener</code>方法的第三个参数是<code>false</code>，即在冒泡阶段处理事件。</p><p>总结：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>事件冒泡和事件捕获是描述事件在页面中传播的方式。事件冒泡从触发元素向上传播至根节点，而事件捕获则从根节点向下捕获至触发元素的父级元素。在浏览器的事件传播过程中，先执行捕获阶段，然后是目标阶段，最后是冒泡阶段。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_16-解释下-addeventlistener-的第三个参数" tabindex="-1"><a class="header-anchor" href="#_16-解释下-addeventlistener-的第三个参数" aria-hidden="true">#</a> 16, 解释下 addEventListener 的第三个参数</h3><hr><blockquote><p><code>addEventListener</code>函数可以传入第三个参数。该参数是一个布尔值，用于指定事件是在捕获阶段还是冒泡阶段进行处理。默认情况下，该参数的值是<code>false</code>，表示在冒泡阶段处理事件。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的示例中，<code>addEventListener</code>函数的第三个参数设置为<code>true</code>，表示在捕获阶段处理<code>click</code>事件。如果将其设置为<code>false</code>或省略该参数，默认为在冒泡阶段处理事件。</p><p>需要注意的是，并非所有的事件都支持捕获阶段处理，只有部分事件（如<code>focus</code>和<code>blur</code>）支持在捕获阶段执行事件处理程序。</p><p>大多数情况下，我们使用的是默认的冒泡阶段来处理事件,所以一般都没有写第三个参数。</p><h3 id="_17-请解释什么是事件委托" tabindex="-1"><a class="header-anchor" href="#_17-请解释什么是事件委托" aria-hidden="true">#</a> 17, 请解释什么是事件委托</h3><hr><blockquote><p>事件委托（Event Delegation）是一种利用事件冒泡的特性来简化事件处理的技术。通过将事件处理程序绑定到一个父元素上，而不是绑定到每个子元素上，从而实现对多个子元素的事件处理。</p><p>当一个事件在子元素上触发时，事件会通过冒泡阶段向上传播至父元素。这时候，我们可以在父元素上捕获到事件，进而通过判断事件源（即触发事件的子元素）来执行相应的操作。</p><p>使用事件委托的好处是可以避免为每个子元素分别绑定事件处理程序，特别是当子元素动态添加或移除时，可以节省大量的代码。另外，事件委托还能够降低内存消耗，因为事件处理程序只需要绑定到一个元素上，而不是多个元素。</p></blockquote><p><strong>常见的应用场景包括:</strong></p><ol><li>列表或表格：对于动态加载的列表或表格，可以将事件处理程序绑定到它们的父元素上，以便处理子元素的事件。</li><li>动态元素：对于通过 JavaScript 动态生成的元素，可以将事件处理程序绑定到它们的父级元素上。</li><li>性能优化：当有大量相似的子元素时，使用事件委托可以减少内存占用和提高性能。</li></ol><p>使用事件委托时，需要在父元素上监听特定的事件，然后通过事件对象的<code>target</code>属性判断事件源，进而处理相应的操作。</p><p><em>事件委托技术是前端开发中常用的优化方法之一，能够简化代码，提高性能和可维护性。</em></p><h3 id="_18-请解释什么是原型链" tabindex="-1"><a class="header-anchor" href="#_18-请解释什么是原型链" aria-hidden="true">#</a> 18, 请解释什么是原型链？</h3><hr><blockquote><p>原型链（Prototype Chain）是 JavaScript 中实现继承的一种机制。</p><p>在 JavaScript 中，每个对象都有一个原型（prototype），原型是一个对象，它包含了共享属性和方法。当我们访问一个对象的属性或方法时，如果该对象本身没有该属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到匹配的属性或方法或者原型链的顶层（即<code>Object.prototype</code>）为止。</p><p>通过原型链，对象可以继承其原型对象的属性和方法。如果需要在对象实例中添加新的属性或方法，可以直接在该对象上进行添加，而这不会改变其原型链上的其他对象。</p></blockquote><p>例如，如果一个对象的原型上有一个名为<code>toString</code>的方法，我们可以通过该对象直接调用<code>toString</code>方法，而不需要在对象自身上定义该方法。</p><p><strong>原型链的顶端是<code>Object.prototype</code>，它是所有对象的原型对象</strong>。在原型链上还有其他原型对象，可以通过<code>Object.getPrototypeOf()</code>方法来获取对象的原型。</p><p>原型链在 JavaScript 中用于实现继承机制。当创建一个对象时，可以选择将它的原型设置为另一个对象，从而实现原型继承。这样，子对象可以访问父对象的属性和方法，实现了代码的重用和组织。</p><p><strong>需要注意的是，原型链的滥用可能会导致性能问题。</strong></p><p>在访问属性或方法时，需要在整个原型链上进行查找，如果原型链过深或包含过多对象，则会导致性能下降。因此，在设计对象和使用原型链时，应当权衡好继承的需求与性能的考虑。</p><h3 id="_19-请解释什么是防抖和节流" tabindex="-1"><a class="header-anchor" href="#_19-请解释什么是防抖和节流" aria-hidden="true">#</a> 19, 请解释什么是防抖和节流？</h3><hr><blockquote><p>防抖（Debounce）和节流（Throttle）都是一种优化高频触发事件的技术，用于限制事件处理程序的执行频率，减少不必要的计算和资源消耗。</p></blockquote><p><strong>防抖的原理</strong>是，在指定的时间间隔内，如果事件持续触发，那么只会执行一次事件处理程序。即当事件发生后，会设置一个定时器，在指定的时间间隔内如果再次触发事件，就会清除原来的定时器，并重新设置新的定时器。这样可以确保只有在事件停止触发一段时间后才会执行事件处理程序。常见的应用场景有搜索框输入、窗口大小调整等，以避免频繁地触发事件处理程序。</p><p><strong>节流的原理</strong>是，在指定的时间间隔内，无论事件触发多少次，只会执行一次事件处理程序。即当事件发生后，会立即执行事件处理程序，并设置一个定时器，在指定的时间间隔内，如果再次触发事件，不会执行事件处理程序，直到定时器到期后，再次触发事件才会重新执行事件处理程序。常见的应用场景有页面滚动、按钮点击等，以限制事件处理程序的执行频率。</p><p><strong>区别：</strong></p><ol><li>执行时机：防抖是在事件触发后等待一段时间后执行事件处理程序，而节流是触发事件后立即执行事件处理程序，然后在指定的时间间隔内不再执行，直到间隔时间过去后再次触发事件才会重新执行。</li><li>触发频率：防抖只会执行最后一次触发的事件处理程序，而节流则会根据指定的时间间隔执行多次事件处理程序。</li><li>响应速度：防抖在间隔时间内不会执行事件处理程序，直到事件停止触发一段时间才会执行，所以响应速度相对较慢；而节流会立即执行事件处理程序，但在指定的时间间隔内不会再次执行，所以响应速度相对较快，但可能丢失某些触发事件。</li></ol><p><em>需要根据具体的业务场景和要解决的问题来选择合适的防抖和节流策略。</em></p><h3 id="_20-delete-删除属性" tabindex="-1"><a class="header-anchor" href="#_20-delete-删除属性" aria-hidden="true">#</a> 20, delete 删除属性</h3><hr><blockquote><p>在JavaScript中，<code>delete</code>关键字用于删除对象的属性。它的语法是<code>delete object.property</code>，其中<code>object</code>是要删除属性的对象，<code>property</code>是要删除的属性名。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">delete</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">delete</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// 输出结果是？</span>\n<span class="token comment">// 答：true false</span>\n\n\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">property1</span><span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">property2</span><span class="token operator">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: { property1: &#39;value1&#39;, property2: &#39;value2&#39; }</span>\n<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>property1<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: { property2: &#39;value2&#39; }</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>深度解析:</p><blockquote><p><code>delete</code>操作符只删除对象本身的属性，而不会影响原型链上的属性。如果对象的属性是继承自原型对象的，那么删除操作只会断开对象与原型之间的关联，而不会删除原型上的属性。</p><p>并且有些属性是不可以删除的, 例如，通过<code>var</code>关键字声明的变量、内置对象的方法等通常是不可删除的。因此，使用<code>delete</code>操作符删除这些属性时会返回<code>false</code>。</p></blockquote><h3 id="_21-使用-function-的函数和箭头函数区别在哪" tabindex="-1"><a class="header-anchor" href="#_21-使用-function-的函数和箭头函数区别在哪" aria-hidden="true">#</a> 21, 使用 function 的函数和箭头函数区别在哪?</h3><blockquote><p>在 JavaScript 中，函数可以使用 <code>function</code> 关键字定义，也可以使用箭头函数（<code>=&gt;</code>）定义。</p></blockquote><p><strong>语法形式</strong></p><p>函数:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数 (ES6新特性)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>this 的指向</strong>:</p><ul><li><strong>函数</strong>：在每次函数调用时，<code>this</code> 的值会根据调用方式动态确定。如果函数作为对象的方法调用，<code>this</code> 将指向调用该方法的对象；如果函数作为普通函数调用，<code>this</code> 将指向全局对象（在浏览器中是 <code>window</code> 对象）。</li><li><strong>箭头函数</strong>：箭头函数没有自己的 <code>this</code> 值，它继承了外部作用域的 <code>this</code> 值。在箭头函数中，<code>this</code> 的值由外围最近一层非箭头函数决定。</li></ul><p><strong>arguments 对象</strong>：</p><ul><li>函数：可以使用 <code>arguments</code> 对象访问所有传递给函数的参数，包括未声明的参数。</li><li>箭头函数：箭头函数没有自己的 <code>arguments</code> 对象。如果需要访问参数列表，可以使用剩余参数（rest parameters）或通过解构赋值来获取参数。</li></ul><p><strong>构造函数</strong>：</p><ul><li>函数：函数可以用作构造函数，通过 <code>new</code> 关键字创建实例对象。</li><li>箭头函数：箭头函数不可以用作构造函数，不能使用 <code>new</code> 来创建实例对象。</li></ul><p><strong>返回值</strong>：</p><ul><li>函数：如果没有显式指定返回值，函数将返回 <code>undefined</code>。可以使用 <code>return</code> 关键字返回一个值或对象。</li><li>箭头函数：如果函数体只有一行，并且没有使用大括号 <code>{}</code> 包裹，则会将该行的值作为返回值。如果函数体使用了大括号包裹，需要使用 <code>return</code> 关键字来显式指定返回值。</li></ul>', 109);
const _hoisted_110 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_110);
}
const qianduanmianshiJavaScript_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-JavaScript.html.vue"]]);
export {
  qianduanmianshiJavaScript_html as default
};
