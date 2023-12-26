import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-12e56767.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1><h2 id="一-基本" tabindex="-1"><a class="header-anchor" href="#一-基本" aria-hidden="true">#</a> 一, 基本</h2><hr><h3 id="_1-vue3-中-setup-语法糖" tabindex="-1"><a class="header-anchor" href="#_1-vue3-中-setup-语法糖" aria-hidden="true">#</a> 1, Vue3 中 setup 语法糖</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> \n  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">// 原本的选项式写法</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n		  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n 				 <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span> \n 				 <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>\n			<span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>num<span class="token punctuation">,</span>obj<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>深度解析:</p><blockquote><p>在 Vue 3 中，<code>setup</code> 函数是一个新的组件选项，用于替代 Vue 2 中的 <code>beforeCreate</code> 和 <code>created</code> 生命周期函数。<code>setup</code> 函数是一个特殊的函数，它在组件实例创建之前执行，并且在组件实例创建过程中扮演了关键角色。</p></blockquote><p>优点:</p><blockquote><ol><li><strong>单文件组件更简洁</strong>：使用 <code>&lt;script setup&gt;</code> 可以将组件的逻辑和选项统一放在一个区块中，使得代码更加紧凑和易读。相比于传统的组件选项和逻辑分散在不同区块的写法，<code>&lt;script setup&gt;</code> 可以减少重复的代码和样板代码。</li><li><strong>自动推断响应式</strong>：在 <code>&lt;script setup&gt;</code> 中，不需要显式地使用 <code>ref</code> 或 <code>reactive</code> 来创建响应式数据。Vue 3 会自动推断变量是否为响应式，并且会自动生成响应式的引用。这样可以简化响应式数据的创建和使用，提高开发效率。</li><li><strong>自动引入组件选项</strong>：在 <code>&lt;script setup&gt;</code> 中，不需要显式地引入组件选项，例如 <code>computed</code>、<code>methods</code>、<code>props</code> 等。Vue 3 会根据代码的上下文自动推断和引入这些选项，使得组件选项的使用更加简洁和直观。</li><li><strong>支持模块化组合</strong>：<code>&lt;script setup&gt;</code> 支持使用 <code>import</code> 和 <code>export</code> 语法来引入和导出变量、函数和组件，从而实现模块化的组合。这样可以更好地组织和复用代码，使得组件的结构更加清晰和可维护。</li><li><strong>更好的性能优化</strong>：由于 <code>&lt;script setup&gt;</code> 将组件的选项和逻辑集中在一个区块中，Vue 3 可以更好地进行编译和优化。这使得 Vue 3 在性能方面表现更出色，减少了运行时的开销和内存占用。</li></ol></blockquote>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
const qianduanmianshiVue3_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi-Vue3.html.vue"]]);
export {
  qianduanmianshiVue3_html as default
};
