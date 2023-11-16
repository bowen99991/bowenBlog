import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-6cb23877.js";
const _imports_0 = "/bowenBlog/assets/image-20231101100918367-64813998.png";
const _imports_1 = "/bowenBlog/assets/image-20231101101418359-53e8228b.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="一-前端工程化-git" tabindex="-1"><a class="header-anchor" href="#一-前端工程化-git" aria-hidden="true">#</a> 一, 前端工程化-Git</h2><hr><h3 id="_1-什么是-git-提交" tabindex="-1"><a class="header-anchor" href="#_1-什么是-git-提交" aria-hidden="true">#</a> 1, 什么是 Git 提交？</h3><p>Git 提交是指将你的代码保存到 Git 本地存储库，就像用 Word 写长篇论文时进行保存文件一样。每次 Git 提交时都会创建一个唯一的版本，除了记录本次新增或发生修改的代码外，还可以包含提交信息，来概括自己这次提交的改动内容。</p><p>如下图,就是一次 git 提交</p><p><img src="' + _imports_0 + '" alt="image-20231101100918367"></p><h3 id="_2-git-提交的作用" tabindex="-1"><a class="header-anchor" href="#_2-git-提交的作用" aria-hidden="true">#</a> 2, Git 提交的作用</h3><p>Git 提交有很多作用，我将它分为 <strong>基础用法</strong> 和 其他妙用</p><p><strong>基本作用</strong></p><blockquote><p>Git 提交最基本的作用就是维护项目的历史记录。每次提交都会记录代码库的状态，包括文件的添加、修改和删除；还包括一些提交信息，比如提交时间、描述等。这使得我们可以通过查看所有的历史提交来追溯项目的开发进度和历程，了解每个提交中都发生了什么变化。</p></blockquote><p><strong>版本控制</strong></p><blockquote><p>另一个 Git 提交的基本作用是版本控制。每个提交都代表了代码库的一个版本，这意味着开发者可以随时切换代码版本进行开发，恢复旧版本的代码、或者撤销某次提交的代码改动。</p><p>推荐新手使用可视化工具而不是 Git 命令进行版本的切换和撤销提交，在不了解 Git 工作机制的情况下使用命令操作很容易出现问题。</p></blockquote><h2 id="二-git-约定式提交" tabindex="-1"><a class="header-anchor" href="#二-git-约定式提交" aria-hidden="true">#</a> 二, Git-约定式提交</h2><hr><p>概述</p>', 15);
const _hoisted_16 = {
  href: "http://semver.org/lang/zh-CN",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<p>提交说明的结构如下所示：</p><p>原文:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;[optional scope]: &lt;description&gt;\n\n[optional body]\n\n[optional footer(s)]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>译文:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;类型&gt;[可选 范围]: &lt;描述&gt;\n\n[可选 正文]\n\n[可选 脚注]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交说明包含了下面的结构化元素，以向类库使用者表明其意图：</p><p><img src="' + _imports_1 + '" alt="image-20231101101418359"></p><h3 id="_1-提交规范" tabindex="-1"><a class="header-anchor" href="#_1-提交规范" aria-hidden="true">#</a> 1, 提交规范</h3>', 8);
const _hoisted_25 = {
  href: "https://www.ietf.org/rfc/rfc2119.txt",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_26 = /* @__PURE__ */ createStaticVNode("<li>每个提交都<strong>必须</strong>使用类型字段前缀，它由一个名词构成，诸如 <code>feat</code> 或 <code>fix</code> ， 其后接<strong>可选的</strong>范围字段，<strong>可选的</strong> <code>!</code>，以及<strong>必要的</strong>冒号（英文半角）和空格。</li><li>当一个提交为应用或类库实现了新功能时，<strong>必须</strong>使用 <code>feat</code> 类型。</li><li>当一个提交为应用修复了 bug 时，<strong>必须</strong>使用 <code>fix</code> 类型。</li><li>范围字段<strong>可以</strong>跟随在类型字段后面。范围<strong>必须</strong>是一个描述某部分代码的名词，并用圆括号包围，例如： <code>fix(parser):</code></li><li>描述字段<strong>必须</strong>直接跟在 &lt;类型&gt;(范围) 前缀的冒号和空格之后。 描述指的是对代码变更的简短总结，例如： <em>fix: array parsing issue when multiple spaces were contained in string</em> 。</li><li>在简短描述之后，<strong>可以</strong>编写较长的提交正文，为代码变更提供额外的上下文信息。正文<strong>必须</strong>起始于描述字段结束的一个空行后。</li><li>提交的正文内容自由编写，并<strong>可以</strong>使用空行分隔不同段落。</li>", 7);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "可以",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "必须",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ":<space>",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<space>#",
  -1
  /* HOISTED */
);
const _hoisted_37 = {
  href: "https://git-scm.com/docs/git-interpret-trailers",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createStaticVNode("<li>脚注的令牌<strong>必须</strong>使用 <code>-</code> 作为连字符，比如 <code>Acked-by</code> (这样有助于 区分脚注和多行正文)。有一种例外情况就是 <code>BREAKING CHANGE</code>，它<strong>可以</strong>被认为是一个令牌。</li><li>脚注的值<strong>可以</strong>包含空格和换行，值的解析过程<strong>必须</strong>直到下一个脚注的令牌/分隔符出现为止。</li><li>破坏性变更<strong>必须</strong>在提交信息中标记出来，要么在 &lt;类型&gt;(范围) 前缀中标记，要么作为脚注的一项。</li><li>包含在脚注中时，破坏性变更<strong>必须</strong>包含大写的文本 <code>BREAKING CHANGE</code>，后面紧跟着冒号、空格，然后是描述，例如： <em>BREAKING CHANGE: environment variables now take precedence over config files</em> 。</li><li>包含在 &lt;类型&gt;(范围) 前缀时，破坏性变更<strong>必须</strong>通过把 <code>!</code> 直接放在 <code>:</code> 前面标记出来。 如果使用了 <code>!</code>，那么脚注中<strong>可以</strong>不写 <code>BREAKING CHANGE:</code>， 同时提交信息的描述中<strong>应该</strong>用来描述破坏性变更。</li><li>在提交说明中，<strong>可以</strong>使用 <code>feat</code> 和 <code>fix</code> 之外的类型，比如：<em>docs: updated ref docs.</em> 。</li><li>工具的实现必须<strong>不区分</strong>大小写地解析构成约定式提交的信息单元，只有 <code>BREAKING CHANGE</code> <strong>必须</strong>是大写的。</li><li>BREAKING-CHANGE 作为脚注的令牌时<strong>必须</strong>是 BREAKING CHANGE 的同义词。</li>", 8);
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<h3 id="_2-为什么使用约定式提交" tabindex="-1"><a class="header-anchor" href="#_2-为什么使用约定式提交" aria-hidden="true">#</a> 2, 为什么使用约定式提交</h3><ul><li>自动化生成 CHANGELOG。</li><li>基于提交的类型，自动决定语义化的版本变更。</li><li>向同事、公众与其他利益关系者传达变化的性质。</li><li>触发构建和部署流程。</li><li>让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><hr><h3 id="在初始开发阶段我该如何处理提交说明" tabindex="-1"><a class="header-anchor" href="#在初始开发阶段我该如何处理提交说明" aria-hidden="true">#</a> 在初始开发阶段我该如何处理提交说明？</h3><p>我们建议你按照假设你已发布了产品那样来处理。因为通常总 <em>有人</em> 使用你的软件，即便那是你软件开发的同事们。他们会希望知道诸如修复了什么、哪里不兼容等信息。</p><h3 id="提交标题中的类型是大写还是小写" tabindex="-1"><a class="header-anchor" href="#提交标题中的类型是大写还是小写" aria-hidden="true">#</a> 提交标题中的类型是大写还是小写?</h3><p>大小写都可以，但最好是一致的。</p><h3 id="如果提交符合多种类型我该如何操作" tabindex="-1"><a class="header-anchor" href="#如果提交符合多种类型我该如何操作" aria-hidden="true">#</a> 如果提交符合多种类型我该如何操作？</h3><p>回退并尽可能创建多次提交。约定式提交的好处之一是能够促使我们做出更有组织的提交和 PR。</p><h3 id="这不会阻碍快速开发和迭代吗" tabindex="-1"><a class="header-anchor" href="#这不会阻碍快速开发和迭代吗" aria-hidden="true">#</a> 这不会阻碍快速开发和迭代吗？</h3><p>它阻碍的是以杂乱无章的方式快速前进。它助你能在横跨多个项目以及和多个贡献者协作时长期地快速演进。</p><h3 id="约定式提交会让开发者受限于提交的类型吗-因为他们会想着已提供的类型" tabindex="-1"><a class="header-anchor" href="#约定式提交会让开发者受限于提交的类型吗-因为他们会想着已提供的类型" aria-hidden="true">#</a> 约定式提交会让开发者受限于提交的类型吗（因为他们会想着已提供的类型）？</h3><p>约定式提交鼓励我们更多地使用某些类型的提交，比如 <code>fixes</code>。除此之外，约定式提交的灵活性也允许你的团队使用自己的类型，并随着时间的推移更改这些类型。</p><h3 id="这和-semver-有什么关联呢" tabindex="-1"><a class="header-anchor" href="#这和-semver-有什么关联呢" aria-hidden="true">#</a> 这和 SemVer 有什么关联呢？</h3><p><code>fix</code> 类型提交应当对应到 <code>PATCH</code> 版本。<code>feat</code> 类型提交应该对应到 <code>MINOR</code> 版本。带有 <code>BREAKING CHANGE</code> 的提交不管类型如何，都应该对应到 <code>MAJOR</code> 版本。</p><h3 id="我对约定式提交做了形如-jameswomack-conventional-commit-spec-的扩展-该如何版本化管理这些扩展呢" tabindex="-1"><a class="header-anchor" href="#我对约定式提交做了形如-jameswomack-conventional-commit-spec-的扩展-该如何版本化管理这些扩展呢" aria-hidden="true">#</a> 我对约定式提交做了形如 <code>@jameswomack/conventional-commit-spec</code> 的扩展，该如何版本化管理这些扩展呢？</h3><p>我们推荐使用 SemVer 来发布你对于这个规范的扩展（并鼓励你创建这些扩展！）</p><h3 id="如果我不小心使用了错误的提交类型-该怎么办呢" tabindex="-1"><a class="header-anchor" href="#如果我不小心使用了错误的提交类型-该怎么办呢" aria-hidden="true">#</a> 如果我不小心使用了错误的提交类型，该怎么办呢？</h3><h4 id="当你使用了在规范中但错误的类型时-例如将-feat-写成了-fix" tabindex="-1"><a class="header-anchor" href="#当你使用了在规范中但错误的类型时-例如将-feat-写成了-fix" aria-hidden="true">#</a> 当你使用了在规范中但错误的类型时，例如将 <code>feat</code> 写成了 <code>fix</code></h4><p>在合并或发布这个错误之前，我们建议使用 <code>git rebase -i</code> 来编辑提交历史。而在发布之后，根据你使用的工具和流程不同，会有不同的清理方案。</p><h4 id="当使用了-不在-规范中的类型时-例如将-feat-写成了-feet" tabindex="-1"><a class="header-anchor" href="#当使用了-不在-规范中的类型时-例如将-feat-写成了-feet" aria-hidden="true">#</a> 当使用了 <em>不在</em> 规范中的类型时，例如将 <code>feat</code> 写成了 <code>feet</code></h4><p>在最坏的场景下，即便提交没有满足约定式提交的规范，也不会是世界末日。这只意味着这个提交会被基于规范的工具错过而已。</p><h3 id="所有的贡献者都需要使用约定式提交规范吗" tabindex="-1"><a class="header-anchor" href="#所有的贡献者都需要使用约定式提交规范吗" aria-hidden="true">#</a> 所有的贡献者都需要使用约定式提交规范吗？</h3><p>并不！如果你使用基于 squash 的 Git 工作流，主管维护者可以在合并时清理提交信息——这不会对普通提交者产生额外的负担。 有种常见的工作流是让 git 系统自动从 pull request 中 squash 出提交，并向主管维护者提供一份表单，用以在合并时输入合适的 git 提交信息。</p><h3 id="约定式提交规范中如何处理还原-revert-提交" tabindex="-1"><a class="header-anchor" href="#约定式提交规范中如何处理还原-revert-提交" aria-hidden="true">#</a> 约定式提交规范中如何处理还原（revert）提交?</h3><p>还原提交（Reverting）会比较复杂：你还原的是多个提交吗？如果你还原了一个功能模块，下次发布的应该是补丁吗？</p><p>约定式提交不能明确的定义还原行为。所以我们把这个问题留给工具开发者， 基于 <em>类型</em> 和 <em>脚注</em> 的灵活性来开发他们自己的还原处理逻辑。</p><p>一种建议是使用 <code>revert</code> 类型，和一个指向被还原提交摘要的脚注：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>revert: let us never again speak of the noodle incident\n\nRefs: 676104e, a215868\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 30);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("约定式提交规范是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更， 使这种惯例与 "),
        createBaseVNode("a", _hoisted_16, [
          createTextVNode("SemVer"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" 相互对应。")
      ])
    ]),
    _hoisted_17,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("本文中的关键词 “必须（MUST）”、“禁止（MUST NOT）”、“必要（REQUIRED）”、“应当（SHALL）”、“不应当（SHALL NOT）”、“应该（SHOULD）”、“不应该（SHOULD NOT）”、“推荐（RECOMMENDED）”、“可以（MAY）” 和 “可选（OPTIONAL）” ，其相关解释参考 "),
        createBaseVNode("a", _hoisted_25, [
          createTextVNode("RFC 2119"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" 。")
      ]),
      createBaseVNode("ol", null, [
        _hoisted_26,
        createBaseVNode("li", null, [
          createTextVNode("在正文结束的一个空行之后，"),
          _hoisted_33,
          createTextVNode("编写一行或多行脚注。每行脚注都"),
          _hoisted_34,
          createTextVNode("包含 一个令牌（token），后面紧跟 "),
          _hoisted_35,
          createTextVNode(" 或 "),
          _hoisted_36,
          createTextVNode(" 作为分隔符，后面再紧跟令牌的值（受 "),
          createBaseVNode("a", _hoisted_37, [
            createTextVNode("git trailer convention"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" 启发）。")
        ]),
        _hoisted_38
      ])
    ]),
    _hoisted_46
  ]);
}
const qianduangongchenghuaGit_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduangongchenghua-Git.html.vue"]]);
export {
  qianduangongchenghuaGit_html as default
};
