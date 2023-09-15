import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-7302e3ad.js";
const _imports_0 = "/bowenBlog/assets/image-20230913162937793-d52af04f.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [tip]\nBom 的学习\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 打游戏</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 学习</li></ul><h2 id="一-bom-介绍" tabindex="-1"><a class="header-anchor" href="#一-bom-介绍" aria-hidden="true">#</a> 一，Bom 介绍</h2><h3 id="_1-什么是-bom" tabindex="-1"><a class="header-anchor" href="#_1-什么是-bom" aria-hidden="true">#</a> 1，什么是 Bom</h3><p>浏览器对象模型</p><h3 id="_2-window-对象" tabindex="-1"><a class="header-anchor" href="#_2-window-对象" aria-hidden="true">#</a> 2，window 对象</h3><ol><li>全局对象</li><li>浏览器窗口对象， 提供饿了浏览器操作相关API</li></ol><p>js运行环境 2个</p><ol><li>浏览器 把js代码运行在浏览器上， 全局对象是window</li><li>Node node是一个全局环境，<strong>全局对象是global</strong>，在node 中没有window</li></ol><ul><li>window.open()</li><li>window.close()</li><li>window.outerHeight 获取整个窗口内容区的高度 +边框和菜单栏</li><li>window,innerHeight 获取整个窗口内容区的高度</li></ul><p>获取焦点和失去焦点</p><p>window.onfocus</p><p>window.onblur</p><h3 id="_3-location-对象" tabindex="-1"><a class="header-anchor" href="#_3-location-对象" aria-hidden="true">#</a> 3，location 对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n  <span class="token comment">// location 对象用于表示 window 上当前链接到 URL 的信息</span>\n    <span class="token comment">// url 统一资源定位器，指定信息位置</span>\n\n    <span class="token comment">// URL 组成</span>\n    <span class="token comment">// https://www.baidu.com:443/admin?name=:&quot;lubenwei&quot;#index</span>\n\n    <span class="token comment">// host 主机地址通过主基地去寻找 ip 地址</span>\n    <span class="token comment">// :443 https 的默认端口号  ----  http 默认端口号是 80</span>\n    <span class="token comment">// admin  路径 path</span>\n    <span class="token comment">// ?name= xxx   查询字符串</span>\n    <span class="token comment">// #index   hash值   ---锚点</span>\n\n  <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>\n    btn<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// assign 打开一个新的 url，保留之前的页面，可以点击返回操作</span>\n      location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    btn<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// replace 打开一个新的url 替换之前的页面，不能点击返回</span>\n      location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    btn<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// reload   重新加载页面 ==ctrl + f5   -- 清空缓存，并硬性重新加载</span>\n      location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>location.href 去往指定页面</li></ul><h3 id="_4-history-对象" tabindex="-1"><a class="header-anchor" href="#_4-history-对象" aria-hidden="true">#</a> 4，history 对象</h3><ul><li>go(-1) 回到上一页 ,数字为正去往下一页</li><li>forward</li><li>back</li></ul><h3 id="_5-navigator" tabindex="-1"><a class="header-anchor" href="#_5-navigator" aria-hidden="true">#</a> 5，navigator</h3><p><img src="' + _imports_0 + '" alt="image-20230913162937793"></p><h3 id="_6-screen-对象" tabindex="-1"><a class="header-anchor" href="#_6-screen-对象" aria-hidden="true">#</a> 6，screen 对象</h3><p>主要记录的是浏览器窗口外面的客户端显示器的信息</p>', 23);
const _hoisted_24 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_24);
}
const dom_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "dom.html.vue"]]);
export {
  dom_html as default
};