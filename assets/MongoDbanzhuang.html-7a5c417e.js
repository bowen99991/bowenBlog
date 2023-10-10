import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, e as createVNode, a as createStaticVNode } from "./app-cc3f963f.js";
const _imports_0 = "/bowenBlog/assets/image-20231005123023243-94911b9c.png";
const _imports_1 = "/bowenBlog/assets/image-20231005130921313-be446822.png";
const _imports_2 = "/bowenBlog/assets/image-20231005132210946-9896ba3e.png";
const _imports_3 = "/bowenBlog/assets/image-20231005132614152-154ba6de.png";
const _imports_4 = "/bowenBlog/assets/image-20231005132649389-589a8866.png";
const _imports_5 = "/bowenBlog/assets/image-20231005132739307-d54aab42.png";
const _imports_6 = "/bowenBlog/assets/image-20231005133256580-f4e06d36.png";
const _imports_7 = "/bowenBlog/assets/image-20231005134739012-6d1981b9.png";
const _imports_8 = "/bowenBlog/assets/image-20231005135318436-078c8179.png";
const _imports_9 = "/bowenBlog/assets/image-20231005135357213-4a9e5742.png";
const _imports_10 = "/bowenBlog/assets/image-20231005152253453-ca8aed7e.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "mongodb-的安装",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#mongodb-的安装",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" MongoDB 的安装")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "MongoDB 是由 C++ 语言编写的非关系型数据库，是一个基于分布式文件存储的开源数据库系统，其内容存储形式类似 JSON 对象，它的字段值可以包含其他文档、数组及文档数组，非常灵活。",
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://www.mongodb.com/try/download/community",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "MongoDB 安装包含两部分：一个是 MongoDB 安装。一个是可视化软件安装（Studio 3T）。如果你使用命令行操作 MongoDB，可以不安装 Studio 3T，但是本人建议你安装 Studio 3T，因为不需要在命令行输入繁琐的命令，直接在 Studio 3T 上操作即可，用起来很方便。",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "我所只用的系统是 windows10",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "_1-相关链接",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#_1-相关链接",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 1, 相关链接")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = {
  href: "https://www.mongodb.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://www.mongodb.com/docs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://github.com/mongodb",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://www.runoob.com/mongodb/mongodb-tutorial.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "官网的下载地址, 这里下载的是社区版本的,当前会推荐给你的系统合适的版本",
  -1
  /* HOISTED */
);
const _hoisted_13 = {
  href: "https://www.mongodb.com/try/download/community",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p><img src="' + _imports_0 + '" alt="image-20231005123023243"></p><p>这是我的安装路径:</p><p>C:\\Program Files\\MongoDB\\Server\\7.0\\bin</p><p>安装后,可能会提示重启, 找到安装的路径</p><p><img src="' + _imports_1 + '" alt="image-20231005130921313"></p><h3 id="mongodb安装步骤" tabindex="-1"><a class="header-anchor" href="#mongodb安装步骤" aria-hidden="true">#</a> MongoDB安装步骤</h3><ol><li>全程下一步，修改安装路径</li><li>配置环境变量, 将MongoDB的bin目录配置到系统变量Path中</li><li>可以去服务列表中打开服务，相当于开始服务器。</li></ol><p>配置系统变量</p><p><img src="' + _imports_2 + '" alt="image-20231005132210946"></p>', 9);
const _hoisted_23 = {
  href: "https://www.mongodb.com/try/download/shell",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>找到下载的文件解压，解压后找到 bin 文件打开，bin 文件下有 2 个文件， <strong>mongosh</strong> 文件和 <strong>mongosh_crypt_v1</strong> 文件，复制这 2 个文件到刚刚安装 MongoDB 路径下的 bin 文件里面。</p><p><img src="' + _imports_3 + '" alt="image-20231005132614152"></p><p><img src="' + _imports_4 + '" alt="image-20231005132649389"></p><p>复制后，在键盘上按 <code>Window + R</code> 打开运行窗口，输入 cmd，弹出命令提示符窗口，在命令提示符窗口输入 <strong>mongod</strong>，弹出以下内容后继续输入 <strong>mongosh</strong> ，弹出以下内容后继续输入 **show dbs</p><p><img src="' + _imports_5 + '" alt="image-20231005132739307"></p><p><strong>至此，MongoDB 安装完成</strong>。</p><hr><p>此时还需要一个可视化工具, 来更好的使用MongoDb</p><h3 id="安装可视化工具" tabindex="-1"><a class="header-anchor" href="#安装可视化工具" aria-hidden="true">#</a> 安装可视化工具</h3><p><strong>下载地址：</strong> https://www.mongodbmanager.com/</p><p><em>tips: 当前这个可视化工具只有14的免费体验....,如果需要长期使用,需要购买服务</em></p><p><img src="' + _imports_6 + '" alt="image-20231005133256580"></p><h2 id="mongodb-可视化工具的使用" tabindex="-1"><a class="header-anchor" href="#mongodb-可视化工具的使用" aria-hidden="true">#</a> MongoDB 可视化工具的使用</h2><ol><li>先链接到本地的服务器, localhost</li><li>并在本地服务器上,新建一个数据库bowenblog</li><li>在数据库上创建几个集合 (自定义名称)</li></ol><p><img src="' + _imports_7 + '" alt="image-20231005134739012"></p><p><img src="' + _imports_8 + '" alt="image-20231005135318436"></p><p>在Data中添加数据, 第一行的id 默认不变, 添加username 和 pwd</p><p><img src="' + _imports_9 + '" alt="image-20231005135357213"></p><p>基于nodeJS创建一个服务器:</p><p><img src="' + _imports_10 + '" alt="image-20231005152253453"></p>', 20);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("MongoDB 支持多种平台，包括 Windows、Linux、Mac OS、Solaris 等，在其官方网站（"),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("https://www.mongodb.com/try/download/communityopen in new window"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("）均可找到对应的安装包。")
    ]),
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("官方网站："),
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("https://www.mongodb.comopen in new window"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("官方文档："),
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("https://www.mongodb.com/docs/open in new window"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("GitHub："),
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("https://github.com/mongodbopen in new window"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("中文教程："),
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("https://www.runoob.com/mongodb/mongodb-tutorial.htmlopen in new window"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("Download MongoDB Community Server | MongoDB"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_14,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createTextVNode("进入 MongoDB 官网下载"),
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("MongoDB Shellopen in new window"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("：https://www.mongodb.com/try/download/shell")
      ])
    ]),
    _hoisted_24
  ]);
}
const MongoDbanzhuang_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MongoDbanzhuang.html.vue"]]);
export {
  MongoDbanzhuang_html as default
};
