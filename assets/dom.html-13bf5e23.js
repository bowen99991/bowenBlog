import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-646b2c32.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [tip]\nBom 的学习\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 打游戏</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 学习</li></ul><h2 id="一-bom介绍" tabindex="-1"><a class="header-anchor" href="#一-bom介绍" aria-hidden="true">#</a> 一，Bom介绍</h2><h3 id="_1-什么是bom" tabindex="-1"><a class="header-anchor" href="#_1-什么是bom" aria-hidden="true">#</a> 1，什么是Bom</h3><p>浏览器对象模型</p><h3 id="_2-window对象" tabindex="-1"><a class="header-anchor" href="#_2-window对象" aria-hidden="true">#</a> 2，window对象</h3><ol><li>全局对象</li><li>浏览器窗口对象， 提供饿了浏览器操作相关API</li></ol><p>js运行环境 2个</p><ol><li>浏览器 把js代码运行在浏览器上， 全局对象是window</li><li>Node node是一个全局环境，<strong>全局对象是global</strong>，在node 中没有window</li></ol><ul><li>window.open()</li><li>window.close()</li><li>window.outerHeight 获取整个窗口内容区的高度 +边框和菜单栏</li><li>window,innerHeight 获取整个窗口内容区的高度</li></ul><p>获取焦点和失去焦点</p><p>window.onfocus</p><p>window.onblur</p>', 14);
const _hoisted_15 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
const dom_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "dom.html.vue"]]);
export {
  dom_html as default
};
