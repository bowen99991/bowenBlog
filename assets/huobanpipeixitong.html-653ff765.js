import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-834176f8.js";
const _imports_0 = "/bowenBlog/assets/image-20230929173143179-8f668ed0.png";
const _imports_1 = "/bowenBlog/assets/image-20230929173853220-48ca6008.png";
const _imports_2 = "/bowenBlog/assets/image-20230929175211381-396186d8.png";
const _imports_3 = "/bowenBlog/assets/image-20231029140023383-db08acac.png";
const _imports_4 = "/bowenBlog/assets/image-20231029200539102-9ee3823d.png";
const _imports_5 = "/bowenBlog/assets/image-20231029200547895-de7c271a.png";
const _imports_6 = "/bowenBlog/assets/image-20231029212052188-01024dca.png";
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
    id: "hello吧-伙伴匹配系统",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#hello吧-伙伴匹配系统",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" hello吧-伙伴匹配系统")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "目的: 帮助大家找到志同道合的伙伴",
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://gitee.com/bowen1314/partner-matching-system",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="一-项目介绍" tabindex="-1"><a class="header-anchor" href="#一-项目介绍" aria-hidden="true">#</a> 一, 项目介绍</h2><hr><h3 id="_1-需求分析" tabindex="-1"><a class="header-anchor" href="#_1-需求分析" aria-hidden="true">#</a> 1, 需求分析</h3><ol><li>用户添加标签 , 标签分类</li><li>主动搜索</li><li>组队 <ol><li>创建队伍</li><li>加入</li><li>查询队伍</li><li>邀请其他人</li></ol></li><li>允许用户去修改标签</li><li>推荐 <ol><li>相似度计算算法 + 本地分布式计算</li></ol></li></ol><hr><h3 id="_2-技术栈" tabindex="-1"><a class="header-anchor" href="#_2-技术栈" aria-hidden="true">#</a> 2, 技术栈</h3><p>前端</p><ol><li>Vue3 开发框架(提高页面开发的效率)</li><li>VantUI (基于Vue 的移动端组件库)</li><li>Vite (打包工具 轻便快捷)</li><li>Nginx 单机部署</li></ol><p>后端</p><ol><li>Java + springBoot 框架</li><li>SpringMVC + MyBatis + MyBatisPlus</li><li>MySQL</li><li>Redis 缓存</li></ol><hr><h3 id="_3-计划" tabindex="-1"><a class="header-anchor" href="#_3-计划" aria-hidden="true">#</a> 3, 计划</h3><ol><li>前端项目初始化</li><li>前段主页 + 组件概览</li></ol><p><strong>设计</strong></p><p>导航条: 展示当前页面名称</p><p>内容</p><p>tabbar (底部切换栏)</p><ul><li>主页 (推荐页 + 广告位 --- 商业利益) <ul><li>搜索框</li><li>banner</li><li>推荐信息流</li></ul></li><li>队伍页</li><li>用户页面 (我的xxx)</li></ul><p><strong>开发</strong></p><p>很多页面都要复用 组件复用 , 样式复用,所以抽象一个通用的布局 ( layouts )</p><hr><h3 id="_4-设计" tabindex="-1"><a class="header-anchor" href="#_4-设计" aria-hidden="true">#</a> 4, 设计</h3><p>导航条 : 展示当前页面的名称</p><p>主页搜索框, 搜索页</p><p>内容</p><p>tab 栏 :</p><ul><li>主页</li><li>队伍页</li><li>用户页</li></ul><h2 id="二-前端项目初始化" tabindex="-1"><a class="header-anchor" href="#二-前端项目初始化" aria-hidden="true">#</a> 二, 前端项目初始化</h2><hr><h3 id="_1-用脚手架初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-用脚手架初始化项目" aria-hidden="true">#</a> 1, 用脚手架初始化项目</h3><p><strong>Vue Cli 脚手架</strong></p><p><strong>vite 构建工具</strong></p><p><strong>vant 组件库</strong></p>', 33);
const _hoisted_39 = {
  href: "https://vant-contrib.gitee.io/vant/#/zh-CN/home",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<p>开发页面经验:</p><ol><li>参考</li><li>从整体到局部</li><li>了解清楚页面做成什么样子, 再写代码实现</li></ol><p><strong>创建项目:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create vite\n\n自定义选择 :\nVue \nTypeScript\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>初始项目 package.json 文件</strong></p><p><img src="' + _imports_0 + '" alt="image-20230929173143179"></p><p>package.json 简单分析</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;partner-frontend&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// dev 环境</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span> <span class="token comment">// (更接近与上线的环境)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  \n  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 开发中打包的依赖(实际部署并不会用到)</span>\n    <span class="token property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.3&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 适配Vue 框架 , 并为</span>\n    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.4.5&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vue-tsc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.8.5&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\n安装依赖包组件\nyarn install \n\n启动项目\nyarn dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_1 + '" alt="image-20230929173853220"></p><hr><h3 id="_2-按需引入-vite-插件" tabindex="-1"><a class="header-anchor" href="#_2-按需引入-vite-插件" aria-hidden="true">#</a> 2, 按需引入 vite 插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add @vant/auto-import-resolver unplugin-vue-components -D\n\n\n相比于常规用法，这种方式可以按需引入组件的 CSS 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些。如果业务对 CSS 的体积要求不是特别极致，我们推荐使用更简便的常规用法。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按需引入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vite-plugin-style-import@1.4.1 <span class="token parameter variable">-D</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="_3-配置插件" tabindex="-1"><a class="header-anchor" href="#_3-配置插件" aria-hidden="true">#</a> 3, 配置插件</h3><p>引入的插件,</p><p><img src="' + _imports_2 + '" alt="image-20230929175211381"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>\n\n<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 按需引入vant组件</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VantResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vant/auto-import-resolver&#39;</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// https://vitejs.dev/config/</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_4-引入-vant-组件库" tabindex="-1"><a class="header-anchor" href="#_4-引入-vant-组件库" aria-hidden="true">#</a> 4, 引入 vant 组件库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vant  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>测试是否引入成功\n    &lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;\n    &lt;van-button type=&quot;success&quot;&gt;成功按钮&lt;/van-button&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\n<span class="token keyword">import</span> BasicLayout <span class="token keyword">from</span> <span class="token string">&quot;./layouts/BasicLayout.vue&quot;</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicLayout</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BasicLayout.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> vant <span class="token keyword">from</span> <span class="token string">&quot;vant&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onClickLeft</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;左边&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onClickRight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;右边&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更换当前（那么）激活的值</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">标签 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- navbar --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-nav-bar</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">left-arrow</span>\n    <span class="token attr-name">@click-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickLeft<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@click-right</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickRight<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- slot --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-nav-bar</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- tabbar --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>主页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>team<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>队伍<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>friends-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>个人<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中, 移动端预览界面</p><p><img src="' + _imports_3 + '" alt="image-20231029140023383"></p><p>设置主页默认高亮</p><p>设置导航栏左箭头 回退功能</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">onClickLeft</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onClickRight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;右边&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 默认值</span>\n<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">标签 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 tabbar 标记</p><p><img src="' + _imports_4 + '" alt="image-20231029200539102"></p><p><img src="' + _imports_5 + '" alt="image-20231029200547895"></p><hr><h3 id="_5-引入-team-home-组件" tabindex="-1"><a class="header-anchor" href="#_5-引入-team-home-组件" aria-hidden="true">#</a> 5, 引入 Team Home 组件</h3><p><img src="' + _imports_6 + '" alt="image-20231029212052188"></p><p>内容插入到 Basic 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  <span class="token comment">&lt;!-- 内容 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active === &#39;index&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Index</span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active === &#39;team&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Team</span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-前端整合路由" tabindex="-1"><a class="header-anchor" href="#三-前端整合路由" aria-hidden="true">#</a> 三, 前端整合路由</h2><hr><p>下载路由插件</p><p>vue-router 4</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vue-router@4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 config 配置文件, 命名 route.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">&#39;../pages/Index.vue&#39;</span>\n<span class="token keyword">import</span> Team <span class="token keyword">from</span> <span class="token string">&#39;../pages/Team.vue&#39;</span>\n\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Index\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/team&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Team\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> routes\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 main.ts 中导入</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&#39;./config/route&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  routes\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tip-开发过程中遇到的问题" tabindex="-1"><a class="header-anchor" href="#tip-开发过程中遇到的问题" aria-hidden="true">#</a> tip: 开发过程中遇到的问题</h2><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>问题:\nvolar 出现的问题, 导入路由报错 \n代码无法自动导入 import 引入组件(router文件中引入路由组件时报找不到模块或其相应的类型声明)\n\n\n解决方法:\n只需要在项目根目录下的env.d.ts文件加上一下代码即可，如果没有env.d.ts文件，在项目根目录下创建一个即可\ndeclare module &#39;*.vue&#39; {\n    import type { DefineComponent } from &#39;vue&#39;\n    const component: DefineComponent&lt;{}, {}, any&gt;\n    export default component\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite 标出两个不同的组件同时引入一个样式, vite报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解决方法:\nvant组件  =&gt; 按绝对路径引入样式 (根据文档)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>', 56);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("伙伴匹配系统: Vue3 (gitee.com)"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_39, [
        createTextVNode("介绍 - Vant 4 (gitee.io)"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_40
  ]);
}
const huobanpipeixitong_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "huobanpipeixitong.html.vue"]]);
export {
  huobanpipeixitong_html as default
};
