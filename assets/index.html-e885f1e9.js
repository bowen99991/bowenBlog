import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createCommentVNode, b as createBaseVNode, d as createTextVNode } from "./app-dfc3dd77.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "文档搭建快速开始",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#文档搭建快速开始",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 文档搭建快速开始")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "npx")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createCommentVNode(" \n```bash\n# 初始化，并选择 2.x\nnpx @vuepress-reco/theme-cli init\n```\n\n**npm**\n\n```bash\n# 初始化，并选择 2.x\nnpm install @vuepress-reco/theme-cli@1.0.7 -g\ntheme-cli init\n```\n\n**yarn**\n\n```bash\n# 初始化，并选择 2.x\nyarn global add @vuepress-reco/theme-cli@1.0.7\ntheme-cli init\n``` ")
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
