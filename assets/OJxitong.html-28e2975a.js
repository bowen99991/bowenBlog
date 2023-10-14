import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-b76021f5.js";
const _imports_0 = "/bowenBlog/assets/image-20230828154534417-54dc7f1f.png";
const _imports_1 = "/bowenBlog/assets/image-20230828163416045-84955ca6.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="oj项目" tabindex="-1"><a class="header-anchor" href="#oj项目" aria-hidden="true">#</a> OJ项目</h1><hr><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> <strong>环境搭建</strong></h2><p>node js 版本：18 或 16</p><p>16.18.1</p><p>切换和管理node版本工具： https://github.com/nvm-sh/nvm</p><p>npm版本：9</p><p>npm 8</p><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vue-cli</p><p>版本5.0.8</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue create oj-frontend\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="' + _imports_0 + '" alt="image-20230828154534417"></p><h2 id="eslint-和-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-和-prettier" aria-hidden="true">#</a> ESlint 和 prettier</h2><hr><p>ESlint 专注于代码规范，prettier专注于代码fengge</p><h3 id="解决eslint-和-prettier冲突" tabindex="-1"><a class="header-anchor" href="#解决eslint-和-prettier冲突" aria-hidden="true">#</a> 解决Eslint 和 prettier冲突</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在eslintrc.js文件中extends添加了以下：\n\n &#39;@vue/typescript/recommended&#39;,\n    &#39;@vue/prettier&#39;,\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引起第一个问题</p><p><img src="' + _imports_1 + '" alt="image-20230828163416045"></p><p>解决方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @vue/eslint-config-prettier @vue/eslint-config-typescript -D\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslintrc-js配置文" tabindex="-1"><a class="header-anchor" href="#eslintrc-js配置文" aria-hidden="true">#</a> eslintrc.js配置文</h2><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;@vue/typescript/recommended&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;plugin:prettier/recommended&#39;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span>\n      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span>\n      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 前置条件</span>\n    <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 单引号</span>\n        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 无分号</span>\n        <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token comment">// 每行宽度最多80字符   120  150 都适合</span>\n        <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 不假对象 数组最后逗号</span>\n        <span class="token literal-property property">ednOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span> <span class="token comment">// 换行符号不限制 win mac不一致</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// Eslint 关注与规范</span>\n    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span> <span class="token comment">// vue组件名称多单词组成 忽略index vue</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;vue/no-setup-props-destructure&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 关闭props结构的校验</span>\n    <span class="token comment">// // 添加未定义变量错误的提示</span>\n    <span class="token string-property property">&#39;no-undef&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue组件库-安装引入" tabindex="-1"><a class="header-anchor" href="#vue组件库-安装引入" aria-hidden="true">#</a> vue组件库-安装引入</h2><hr>', 29);
const _hoisted_30 = {
  href: "https://arco.design/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createStaticVNode('<p>Vue 版本</p><p>vue &gt;= 3.2.0</p><p><strong>注意</strong>：由于 <code>Vue3</code> 不再支持 IE 浏览器环境，ArcoVue 也不再支持 IE 浏览器环境。</p><p>Acro design 组件库安装</p><div class="language-lang line-numbers-mode" data-ext="lang"><pre class="language-lang"><code>npm install --save-dev @arco-design/web-vue\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>完整引入</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ArcoVue <span class="token keyword">from</span> <span class="token string">&#39;@arco-design/web-vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@arco-design/web-vue/dist/arco.css&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ArcoVue<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_30, [
        createTextVNode("Arco Design - 企业级产品的完整设计和开发解决方案"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_31
  ]);
}
const OJxitong_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OJxitong.html.vue"]]);
export {
  OJxitong_html as default
};
