import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-e244f97e.js";
const _imports_0 = "/bowenBlog/assets/image-20230913162937793-d52af04f.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [tip]\nBom 的学习\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 打游戏</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 学习</li></ul><h2 id="一-bom-介绍" tabindex="-1"><a class="header-anchor" href="#一-bom-介绍" aria-hidden="true">#</a> 一. Bom 介绍</h2><h3 id="_1-什么是-bom" tabindex="-1"><a class="header-anchor" href="#_1-什么是-bom" aria-hidden="true">#</a> 1，什么是 Bom</h3><p>浏览器对象模型</p><h3 id="_2-window-对象" tabindex="-1"><a class="header-anchor" href="#_2-window-对象" aria-hidden="true">#</a> 2，window 对象</h3><ol><li>全局对象</li><li>浏览器窗口对象， 提供饿了浏览器操作相关API</li></ol><p>js运行环境 2个</p><ol><li>浏览器 把js代码运行在浏览器上， 全局对象是window</li><li>Node node是一个全局环境，<strong>全局对象是global</strong>，在node 中没有window</li></ol><ul><li>window.open()</li><li>window.close()</li><li>window.outerHeight 获取整个窗口内容区的高度 +边框和菜单栏</li><li>window,innerHeight 获取整个窗口内容区的高度</li></ul><p>获取焦点和失去焦点</p><p>window.onfocus</p><p>window.onblur</p><h3 id="_3-location-对象" tabindex="-1"><a class="header-anchor" href="#_3-location-对象" aria-hidden="true">#</a> 3，location 对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n  <span class="token comment">// location 对象用于表示 window 上当前链接到 URL 的信息</span>\n    <span class="token comment">// url 统一资源定位器，指定信息位置</span>\n\n    <span class="token comment">// URL 组成</span>\n    <span class="token comment">// https://www.baidu.com:443/admin?name=:&quot;lubenwei&quot;#index</span>\n\n    <span class="token comment">// host 主机地址通过主基地去寻找 ip 地址</span>\n    <span class="token comment">// :443 https 的默认端口号  ----  http 默认端口号是 80</span>\n    <span class="token comment">// admin  路径 path</span>\n    <span class="token comment">// ?name= xxx   查询字符串</span>\n    <span class="token comment">// #index   hash值   ---锚点</span>\n\n  <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>\n    btn<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// assign 打开一个新的 url，保留之前的页面，可以点击返回操作</span>\n      location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    btn<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// replace 打开一个新的url 替换之前的页面，不能点击返回</span>\n      location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    btn<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// reload   重新加载页面 ==ctrl + f5   -- 清空缓存，并硬性重新加载</span>\n      location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>location.href 去往指定页面</li></ul><h3 id="_4-history-对象" tabindex="-1"><a class="header-anchor" href="#_4-history-对象" aria-hidden="true">#</a> 4，history 对象</h3><ul><li>go(-1) 回到上一页 ,数字为正去往下一页</li><li>forward</li><li>back</li></ul><p><strong>out页面</strong></p><h3 id="_5-navigator" tabindex="-1"><a class="header-anchor" href="#_5-navigator" aria-hidden="true">#</a> 5，navigator</h3><p><img src="' + _imports_0 + '" alt="image-20230913162937793"></p><h3 id="_6-screen-对象" tabindex="-1"><a class="header-anchor" href="#_6-screen-对象" aria-hidden="true">#</a> 6，screen 对象</h3><p>主要记录的是浏览器窗口外面的客户端显示器的信息</p><h3 id="_7-localstorage-和-sessionstorage" tabindex="-1"><a class="header-anchor" href="#_7-localstorage-和-sessionstorage" aria-hidden="true">#</a> 7，localStorage 和 sessionStorage</h3><p><code>localStorage</code> 和 <code>sessionStorage</code> 都是 Web 浏览器提供的用于在客户端存储数据的 API，它们具有以下特点和区别：</p><p><strong>共同特点：</strong></p><ol><li><strong>客户端存储：</strong> <code>localStorage</code> 和 <code>sessionStorage</code> 的数据都存储在客户端（浏览器）而不是服务器上。</li><li><strong>容量限制：</strong> 存储容量有限，通常为 5MB 或更大，但具体容量限制可能因浏览器而异。</li></ol><p><strong>区别：</strong></p><ol><li><strong>数据生命周期：</strong><ul><li><code>localStorage</code>：存储在 <code>localStorage</code> 的数据没有过期时间，除非主动删除或清除浏览器缓存，否则数据会一直存在。</li><li><code>sessionStorage</code>：存储在 <code>sessionStorage</code> 的数据仅在当前会话（当前标签页或窗口）有效，关闭标签页或窗口后数据将被清除。</li></ul></li><li><strong>跨会话访问：</strong><ul><li><code>localStorage</code>：存储在 <code>localStorage</code> 中的数据可以在同源的不同会话（不同标签页或窗口）间共享访问。</li><li><code>sessionStorage</code>：存储在 <code>sessionStorage</code> 中的数据只能在同一个会话中的不同页面间共享访问。</li></ul></li><li><strong>共享访问：</strong><ul><li><code>localStorage</code> 和 <code>sessionStorage</code> 的数据只能在同源页面（同一协议、主机和端口）中访问。不同源的页面无法直接访问对方的存储数据，这是为了保护用户的隐私和安全。</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n<span class="token comment">// 使用 localStorage 存储数据</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> username <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用 sessionStorage 存储数据</span>\nsessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> token <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nsessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：存储在 <code>localStorage</code> 或 <code>sessionStorage</code> 中的数据都以字符串形式存储，如果需要存储和获取其他数据类型，需要进行适当的转换。</p><h3 id="登录守卫案例" tabindex="-1"><a class="header-anchor" href="#登录守卫案例" aria-hidden="true">#</a> 登录守卫案例</h3><h2 id="二-定时器" tabindex="-1"><a class="header-anchor" href="#二-定时器" aria-hidden="true">#</a> 二. 定时器</h2><h3 id="_1-一次性定时器-settimeout" tabindex="-1"><a class="header-anchor" href="#_1-一次性定时器-settimeout" aria-hidden="true">#</a> 1. 一次性定时器 setTimeout</h3><ul><li><code>setTimeout</code> 函数用于在指定的延迟时间后执行一次代码。</li><li>语法：<code>setTimeout(function, delay)</code></li><li><code>function</code> 是要执行的函数或要执行的代码块，可以是函数名称或匿名函数。</li><li><code>delay</code> 是延迟执行的时间，单位是毫秒。</li><li><code>setTimeout</code> 函数返回一个定时器标识，可以通过调用 <code>clearTimeout</code> 函数来取消定时器。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello bom &#39;</span><span class="token punctuation">)</span>   \n <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// 第一个参数传递一个回调函数 第二个参数传递一个延迟时间(ms)  1s = 1000ms</span>\n        <span class="token comment">// setTimeout(function () {</span>\n        <span class="token comment">//     console.log(111);</span>\n        <span class="token comment">// }, 5000)		</span>\n\n\n\n  <span class="token comment">// 点击</span>\n        <span class="token keyword">var</span> timer<span class="token punctuation">;</span>\n        btn1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n   <span class="token comment">// 取消定时器</span>\n        btn2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>取消定时器, clearTimeout()</strong></p><ul><li>可以使用 <code>clearTimeout</code> 取消 <code>setTimeout</code>，或使用 <code>clearInterval</code> 取消 <code>setInterval</code>。</li></ul><p>对于一直存在于浏览器中的定时器,会一直占用浏览器的资源,从而导致消耗内存,对性能造成影响,所以需要清空废弃的定时器.</p><h3 id="_2-循环定时器-setinterval" tabindex="-1"><a class="header-anchor" href="#_2-循环定时器-setinterval" aria-hidden="true">#</a> 2. 循环定时器 setInterval</h3><ul><li><code>setInterval</code> 函数用于按照指定的时间间隔重复执行代码。</li><li>语法：<code>setInterval(function, delay)</code></li><li><code>function</code> 是要执行的函数或要执行的代码块，可以是函数名称或匿名函数。</li><li><code>delay</code> 是每次执行之间的时间间隔，单位是毫秒。</li><li><code>setInterval</code> 函数返回一个定时器标识，可以通过调用 <code>clearInterval</code> 函数来取消定时器。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        btn1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 点击</span>\n        <span class="token keyword">var</span> timer<span class="token punctuation">;</span>\n        btn1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 取消定时器</span>\n        btn2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-轮播图" tabindex="-1"><a class="header-anchor" href="#三-轮播图" aria-hidden="true">#</a> 三. 轮播图</h2><p>综合版本</p><p>​ 需求:</p><ul><li><em>需要实现每隔一定时间的轮播图</em></li><li><em>点击左右按钮,切换图片</em></li><li><em>显示当前位置的小圆点</em></li><li><em>可以点击小圆点切换图片</em></li><li><em>鼠标进入轮播图区域内,停止轮播并显示左右的切换按钮</em></li></ul><p>swiper JS 插件</p>', 48);
const _hoisted_49 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_49);
}
const Bom_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Bom.html.vue"]]);
export {
  Bom_html as default
};
