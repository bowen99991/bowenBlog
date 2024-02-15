import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-a4e641d3.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="git-的使用" tabindex="-1"><a class="header-anchor" href="#git-的使用" aria-hidden="true">#</a> Git 的使用</h2><h2 id="一-介绍" tabindex="-1"><a class="header-anchor" href="#一-介绍" aria-hidden="true">#</a> 一, 介绍</h2><h3 id="_1-什么是git-以及-git工作原理" tabindex="-1"><a class="header-anchor" href="#_1-什么是git-以及-git工作原理" aria-hidden="true">#</a> 1, 什么是Git 以及 Git工作原理</h3><p><strong>Git是一个分布式版本控制系统，用于跟踪文件的更改并协调多人协作开发。</strong></p><p><strong>工作原理</strong></p><p>Git将代码仓库视为一个存储所有文件历史记录的快照数据库，每次提交会创建一个新的快照，并记录一个指向该快照的指针。Git使用哈希算法来生成每个提交的唯一标识。Git还使用分支来支持并行开发，每个分支都是指向提交的指针。</p><h3 id="_1-git的分支管理" tabindex="-1"><a class="header-anchor" href="#_1-git的分支管理" aria-hidden="true">#</a> 1, Git的分支管理</h3><p>Git的分支管理是非常灵活的，每个分支可以独立开展工作，不同分支之间的内容可以合并。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 创建分支：通过命令git branch &lt;branch-name&gt;可以创建一个新的分支，分支名可以自定义。\n- 切换分支：通过命令git checkout &lt;branch-name&gt;可以切换到指定的分支，Git会自动将工作区的文件更新到指定分支的最新提交状态。\n- 合并分支：通过命令git merge &lt;branch-name&gt;可以将指定分支的内容合并到当前分支，Git会尝试自动合并变化，如果有冲突则需要手动解决。\n- 删除分支：通过命令git branch -d &lt;branch-name&gt;可以删除指定的分支。\n- 查看分支：通过命令git branch可以查看所有分支，当前分支会以特殊符号标识。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-git中的-head" tabindex="-1"><a class="header-anchor" href="#_2-git中的-head" aria-hidden="true">#</a> 2, Git中的 Head</h3><p>HEAD是Git中的一个特殊指针，用来指向当前分支的最新提交。HEAD的指向可以通过切换分支或者执行提交操作来改变。 Git切换版本，底层其实是移动的HEAD指针。</p><h3 id="_3-git中的暂存区" tabindex="-1"><a class="header-anchor" href="#_3-git中的暂存区" aria-hidden="true">#</a> 3, Git中的暂存区</h3><p>暂存区是Git中的一个重要概念，它是用来存放待提交的文件 的区域。当我们修改了工作区的文件后，可以通过命令git add (file) 将修改的文件添加到暂存区，然后通过命令git commit将暂存区的内容提交到当前分支。</p><h3 id="_4-git中如何撤销操作-你知道的有哪些" tabindex="-1"><a class="header-anchor" href="#_4-git中如何撤销操作-你知道的有哪些" aria-hidden="true">#</a> 4, Git中如何撤销操作？你知道的有哪些？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>···\n\n撤销修改：通过命令git checkout -- &lt;file&gt;可以撤销对工作区文件的修改，恢复到最近一次提交的状态。\n\n撤销暂存：通过命令git reset HEAD &lt;file&gt;可以将暂存区的修改撤销，重新放回到工作区。\n\n撤销提交：通过命令git revert &lt;commit&gt;可以创建一个新的提交，将指定提交的修改撤销。\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-git中如何解决冲突合并" tabindex="-1"><a class="header-anchor" href="#_5-git中如何解决冲突合并" aria-hidden="true">#</a> 5, Git中如何解决冲突合并</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>合并冲突是在将分支内容合并时可能遇到的问题，\n可以通过以下步骤解决：\n执行合并操作：通过命令git merge &lt;branch-name&gt;将指定分支的内容合并到当前分支。 \n\n例如，git merge feature将会将feature分支合并到当前分支。\nGit无法自动解决冲突时，会提示合并冲突，并在冲突文件中标记出冲突的部分。\n手动解决冲突：打开冲突文件，根据标记修改文件内容，解决冲突。\n解决冲突后，通过命令git add &lt;file&gt;将冲突文件标记为已解决。\n最后，执行命令git commit完成合并提交。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-常用命令" tabindex="-1"><a class="header-anchor" href="#二-常用命令" aria-hidden="true">#</a> 二, 常用命令</h2><h3 id="_1-git-常用操作命令" tabindex="-1"><a class="header-anchor" href="#_1-git-常用操作命令" aria-hidden="true">#</a> 1, git 常用操作命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init：\n作用：将当前目录初始化为一个Git仓库。\n解释：通过执行该命令，Git会在当前目录创建一个新的空的Git仓库，用于跟踪管理项目的版本。\ngit clone [url]：\n作用：从远程仓库克隆代码到本地。\n解释：该命令用于将远程仓库中的代码完整地复制到本地，创建一个本地的Git仓库副本，并与远程仓库保持同步。\ngit add [文件/目录]：\n作用：将文件添加到Git的暂存区。\n解释：执行该命令后，Git会将指定的文件或目录添加到暂存区，以便在后续的提交中包含它们。\ngit commit -m &quot;提交信息&quot;：\n作用：提交暂存区中的文件到本地仓库。\n解释：该命令用于将暂存区中的文件提交到本地仓库，同时可以附加一条提交信息，用于描述本次提交的内容。\ngit push：\n作用：将本地仓库的代码推送到远程仓库。\n解释：执行该命令后，Git会将本地仓库的代码推送到与之关联的远程仓库，以使得远程仓库与本地仓库保持同步。\ngit pull：\n作用：从远程仓库拉取最新的代码到本地。\n解释：该命令用于从与之关联的远程仓库拉取最新的代码，以使得本地仓库与远程仓库保持同步。\ngit branch：\n作用：列出所有分支。\n解释：执行该命令后，Git会返回当前仓库中存在的所有分支列表，并且会高亮显示当前所在的分支。\ngit checkout [分支名]：\n作用：切换到指定的分支。\n解释：该命令用于从当前分支切换到指定的分支，以便开始在该分支上进行开发或其他操作。\ngit merge [分支名]：\n作用：合并指定分支到当前分支。\n解释：执行该命令后，Git会将指定分支的代码合并到当前分支中，以便将两个分支的修改内容合并在一起。\ngit log：\n作用：显示提交日志。\n解释：执行该命令后，Git会返回当前分支的所有提交记录，包括每个提交的作者、日期、提交信息等详细信息。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const xiangmugongchenghuaGit_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "xiangmugongchenghua-Git.html.vue"]]);
export {
  xiangmugongchenghuaGit_html as default
};
