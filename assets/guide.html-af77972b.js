import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, e as createTextVNode, f as createVNode, b as createStaticVNode } from "./app-8d5d7f91.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg",
      alt: "vuepress"
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg",
      alt: "leancloud-storage"
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://img.shields.io/badge/valine-1.3.4-blue.svg",
      alt: "valine"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      /* @__PURE__ */ createBaseVNode("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }),
      /* @__PURE__ */ createBaseVNode("path", { d: "M12 8h.01" }),
      /* @__PURE__ */ createBaseVNode("path", { d: "M11 12h1v4h1" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "介绍",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；"),
    /* @__PURE__ */ createBaseVNode("br")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；"),
    /* @__PURE__ */ createBaseVNode("br")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "http://recoluan.gitlab.io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><p><strong>Build</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build\n\n<span class="token comment"># or</span>\n\n<span class="token function">yarn</span> build\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev\n\n<span class="token comment"># or</span>\n\n<span class="token function">yarn</span> dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2><h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3><p><code>vuepress-theme-reco@0.x</code> 是基于 <code>vuepress@0.x</code> 的博客主题。</p><p><code>vuepress@0.x</code> 功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下，<code>vuepress-theme-reco@0.x</code> 的第一个版本经过一个通宵而产生。</p><p>主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。</p><p>因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 <strong>简洁</strong> 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。</p><h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3><p>随着不断有用户过来询问：为什么 <code>vuepress-theme-reco@0.x</code> 不能在 <code>vuepress@1.x</code> 上使用？本来只是打算对 <code>vuepress-theme-reco@0.x</code> 进行简单的bug修复的我，终究还是忍不住，开始了 <code>vuepress-theme-reco@1.x</code> 的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开始了。</p><p>主题升级的关键也就是 <code>@vuepress/plugin-blog</code> 这款官方插件，它不需要再去麻烦地过滤数据，将分类和标签的相关信息直接存在 <code>$categories</code> 和 <code>$tags</code> 这两个全局变量中。借助于 <code>@vuepress/plugin-blog</code>，分类和标签功能更容易实现，但也有了一些局限。接下来两三天的时间，都是在进行功能的迁移和一些bug的修复。</p><p><code>vuepress-theme-reco@0.x</code> 的开发中，更加深刻地明白了模块化和组件化编程的重要性，如果当初没有把一些功能进行封装，而是直接简单的复制，这次升级也不会这么顺利。模块拆分的越细，使用就会越灵活。</p><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><p>还是衷心地希望能有更多的朋友参与进来，更快地去完善它。接下来时间允许的情况下，我会开源一款自动生成博客的脚手架，略过配置步骤，直接书写优质内容，这也是我后来逐渐形成的一种信念，就是希望能让这款主题，功能越完善，使用越来越简单。</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>', 18);
const _hoisted_26 = {
  href: "https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      _hoisted_4,
      createBaseVNode("ol", null, [
        _hoisted_5,
        _hoisted_6,
        createBaseVNode("li", null, [
          createTextVNode("你可以打开 "),
          createBaseVNode("a", _hoisted_7, [
            createTextVNode("午后南杂"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" 来查看效果。")
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_26, [
        createTextVNode("MIT"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const guide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "guide.html.vue"]]);
export {
  guide_html as default
};
