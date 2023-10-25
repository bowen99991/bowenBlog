import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-dd1e581d.js";
const _imports_0 = "/bowenBlog/assets/image-20230929173143179-8f668ed0.png";
const _imports_1 = "/bowenBlog/assets/image-20230929173853220-48ca6008.png";
const _imports_2 = "/bowenBlog/assets/image-20230929175211381-396186d8.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "伙伴匹配系统",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#伙伴匹配系统",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 伙伴匹配系统")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "目的: 帮助大家找到志同道合的伙伴",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("em", null, "从 0 到 1 开发项目")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "gitee地址",
  -1
  /* HOISTED */
);
const _hoisted_6 = {
  href: "https://gitee.com/bowen1314/partner-matching-system",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2><ol><li>用户添加标签 , 标签分类</li><li>主动搜索</li><li>组队 <ol><li>创建队伍</li><li>加入</li><li>查询队伍</li><li>邀请其他人</li></ol></li><li>允许用户去修改标签</li><li>推荐 <ol><li>相似度计算算法 + 本地分布式计算</li></ol></li></ol><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈" aria-hidden="true">#</a> 技术栈</h2><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h3><ol><li>Vue3 开发框架(提高页面开发的效率)</li><li>VantUI (基于Vue 的移动端组件库)</li><li>Vite (打包工具 轻便快捷)</li><li>Nginx 单机部署</li></ol><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h3><ol><li>Java + springBoot 框架</li><li>SpringMVC + MyBatis + MyBatisPlus</li><li>MySQL</li><li>Redis 缓存</li></ol><h2 id="计划" tabindex="-1"><a class="header-anchor" href="#计划" aria-hidden="true">#</a> 计划</h2><ol><li>前端项目初始化</li><li>前段主页 + 组件概览</li></ol><h2 id="前端项目初始化" tabindex="-1"><a class="header-anchor" href="#前端项目初始化" aria-hidden="true">#</a> 前端项目初始化</h2><p>用脚手架初始化项目</p><p>Vue Cli 脚手架</p><p>vite 构建工具</p>', 13);
const _hoisted_20 = {
  href: "https://vant-contrib.gitee.io/vant/#/zh-CN/home",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<p>开发页面经验:</p><ol><li>参考</li><li>从整体到局部</li><li>了解清楚页面做成什么样子, 再写代码实现</li></ol><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create vite\n\n选择 Vue \nTypeScript\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>项目基本架构</strong></p><p><img src="' + _imports_0 + '" alt="image-20230929173143179"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;partner-frontend&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// dev 环境</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span> <span class="token comment">// (更接近与上线的环境)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  \n  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 开发中打包的依赖(实际部署并不会用到)</span>\n    <span class="token property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.3&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 适配Vue 框架 , 并为</span>\n    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.4.5&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vue-tsc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.8.5&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\n安装依赖包组件\nyarn install \n\n启动项目\nyarn dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_1 + '" alt="image-20230929173853220"></p><h3 id="_1-按需引入-vite-插件" tabindex="-1"><a class="header-anchor" href="#_1-按需引入-vite-插件" aria-hidden="true">#</a> 1, 按需引入 vite 插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add @vant/auto-import-resolver unplugin-vue-components -D\n\n\n相比于常规用法，这种方式可以按需引入组件的 CSS 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些。如果业务对 CSS 的体积要求不是特别极致，我们推荐使用更简便的常规用法。\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置插件" tabindex="-1"><a class="header-anchor" href="#_2-配置插件" aria-hidden="true">#</a> 2, 配置插件</h3><p>复制</p><p>引入的插件,</p><p><img src="' + _imports_2 + '" alt="image-20230929175211381"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>引入 vant 组件库\nnpm i vant  \n\n测试是否引入成功\n    &lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;\n    &lt;van-button type=&quot;success&quot;&gt;成功按钮&lt;/van-button&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端主页-组件概览-手" tabindex="-1"><a class="header-anchor" href="#前端主页-组件概览-手" aria-hidden="true">#</a> 前端主页 + 组件概览 手</h2><h3 id="设计" tabindex="-1"><a class="header-anchor" href="#设计" aria-hidden="true">#</a> 设计</h3><p>导航条: 展示当前页面名称</p><p>内容</p><p>tabbar (底部切换栏)</p><ul><li>主页 (推荐页 + 广告位 --- 商业利益) <ul><li>搜索框</li><li>banner</li><li>推荐信息流</li></ul></li><li>队伍页</li><li>用户页面 (我的xxx)</li></ul><h3 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h3><p>很多页面都要复用 组件复用 , 样式复用,所以抽象一个通用的布局 ( layouts )</p><h2 id="开发过程中遇到的问题" tabindex="-1"><a class="header-anchor" href="#开发过程中遇到的问题" aria-hidden="true">#</a> 开发过程中遇到的问题</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>问题:\nvolar 出现的问题, 导入路由报错 \n代码无法自动导入 import 引入组件(router文件中引入路由组件时报找不到模块或其相应的类型声明)\n\n\n解决方法:\n只需要在项目根目录下的env.d.ts文件加上一下代码即可，如果没有env.d.ts文件，在项目根目录下创建一个即可\ndeclare module &#39;*.vue&#39; {\n    import type { DefineComponent } from &#39;vue&#39;\n    const component: DefineComponent&lt;{}, {}, any&gt;\n    export default component\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 26);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_6, [
        createTextVNode("伙伴匹配系统: Vue3 (gitee.com)"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_20, [
        createTextVNode("介绍 - Vant 4 (gitee.io)"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_21
  ]);
}
const huobanpipeixitong_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "huobanpipeixitong.html.vue"]]);
export {
  huobanpipeixitong_html as default
};
