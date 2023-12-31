import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-0934bf90.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="git学习笔记" tabindex="-1"><a class="header-anchor" href="#git学习笔记" aria-hidden="true">#</a> Git学习笔记</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664808255147-83c7e7ce-4e9c-4e1c-b3be-fe795386c67f.png" alt="img"></p><p>可以把一个版本控制系统（缩写VCS）理解为一个“数据库”，在需要的时候，它可以帮你完整地保存一个项目的快照。当你需要查看一个之前的快照（称之为“版本” ）时，版本控制系统可以显示出当前版本与上一个版本之间的所有改动的细节。</p><h1 id="git和svn区别" tabindex="-1"><a class="header-anchor" href="#git和svn区别" aria-hidden="true">#</a> Git和SVN区别</h1><h4 id="svn集中式" tabindex="-1"><a class="header-anchor" href="#svn集中式" aria-hidden="true">#</a> SVN集中式</h4><p>集中式版本控制系统需要找一个服务器作为大本营，所有的代码都需要提交到服务器上进行统一的管理。当你需要对代码进行改动时，需要先从服务器上下载一份拷贝，修改完成之后，还需要上传回服务器。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664860795073-bc6d1122-a6fe-4795-8d24-0eff7e874ab9.png" alt="img"></p><p>SVN优缺点</p><p>优点：</p><ol><li>管理员也可以轻松掌控每个开发者的权限。</li><li>代码一致性非常高。</li><li>适合开发人数不多的项目开发。</li></ol><p>缺点：</p><ol><li>服务器压力太大，数据库容量暴增。</li><li>如果不能连接到服务器上，基本上不可以工作，看上面第二步，如果服务器不能连接上，就不能提</li><li>交，还原，对比等等</li></ol><h4 id="git分布式" tabindex="-1"><a class="header-anchor" href="#git分布式" aria-hidden="true">#</a> Git分布式</h4><p>在分布式版本控制系统中，大家都拥有一个完整的版本库，不需要联网也可以提交修改，所以中心服务器就显得不那么重要了。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664860886000-190ff380-0c46-48cf-91d2-12060100833b.png" alt="img"></p><p>注意：</p><p>Git记录版本历史只关心文件数据的整体是否发生变化。Git 不保存文件内容前后变化的差异数据。</p><p>Git优缺点</p><p>优点：</p><ol><li>适合分布式开发，强调个体。</li><li>公共服务器压力和数据量都不会太大。</li><li>速度快、灵活。</li><li>任意两个开发者之间可以很容易的解决冲突。</li><li>离线工作。</li></ol><p>缺点：</p><ol><li>学习周期相对而言比较长。</li><li>不符合常规思维。</li><li>易学难精，80/20</li></ol><h1 id="git工作流程" tabindex="-1"><a class="header-anchor" href="#git工作流程" aria-hidden="true">#</a> Git工作流程</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664862641188-5b41ccba-cf27-4fa1-a983-6b238827f209.png" alt="img"></p><h4 id="四个工作区域" tabindex="-1"><a class="header-anchor" href="#四个工作区域" aria-hidden="true">#</a> 四个工作区域</h4><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664862691483-506c2702-d306-4f15-b0c0-c1ad4d8de5db.png" alt="img"></p><p>Workspace： 工作区，就是你平时存放项目代码的地方</p><p>Index / Stage： 暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息</p><p>Repository： 仓库区（或版本库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本</p><p>Remote： 远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换</p><h4 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h4><p>Git的工作流程一般是这样的：</p><ol><li>在工作目录中添加、修改文件；</li><li>将需要进行版本管理的文件放入暂存区域；</li><li>将暂存区域的文件提交到git仓库。</li></ol><h1 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h1><h4 id="设置用户信息" tabindex="-1"><a class="header-anchor" href="#设置用户信息" aria-hidden="true">#</a> 设置用户信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;gemingjia&quot;\ngit config --global user.email &quot;gemingjia@163.com&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看配置信息" tabindex="-1"><a class="header-anchor" href="#查看配置信息" aria-hidden="true">#</a> 查看配置信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --list\ngit config user.name\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>通过上面的命令设置的信息会保存在~/.gitconfig文件中。</p><h1 id="初始化本地仓库" tabindex="-1"><a class="header-anchor" href="#初始化本地仓库" aria-hidden="true">#</a> 初始化本地仓库</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> tmp  <span class="token comment">#创建tmp目录</span>\n<span class="token function">git</span> init   <span class="token comment">#初始化这个目录让Git对这个目录开始进行版本控制。</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><p>git init 命令会在上述目录中创建一个名为 .git 的隐藏目录，并在其中创建一个版本库。该目录为文件，查看-&gt;显示隐藏目录。整个Git的精华都集中在这个目录中了，现在不先讲细节，只是体会一下使用Git的感觉，后续在详细介绍。</p><h1 id="文件的两种状态" tabindex="-1"><a class="header-anchor" href="#文件的两种状态" aria-hidden="true">#</a> 文件的两种状态</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664864652161-87ec408f-4795-49df-8b3e-731ba2802428.png" alt="img"></p><p>注意：</p><p>Git不关心文件两个版本之间的具体差别，而是关心文件的整体是否有改变，若文件被改变，在添加提交时就生成文件新版本的快照，而判断文件整体是否改变的方法就是用SHA-1算法计算文件的校验和。</p><h4 id="untracked未跟踪" tabindex="-1"><a class="header-anchor" href="#untracked未跟踪" aria-hidden="true">#</a> untracked未跟踪</h4><p>未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.</p><h4 id="tracked已跟踪" tabindex="-1"><a class="header-anchor" href="#tracked已跟踪" aria-hidden="true">#</a> tracked已跟踪</h4><p>被纳入版本控制</p><ul><li><code>Unmodified</code>文件已经入库，未修改,，即版本库中的文件快照内容与文件夹中完全一致.。这种类型的文件有两种去处，如果它被修改，而变为<code>Modified</code>，如果使用<code>git rm</code>移出版本库，则成为<code>Untracked</code>文件。</li><li><code>Modified</code>文件已修改，仅仅是修改，并没有进行其他的操作。这个文件也有两个去处，通过<code>git add</code>可进入暂存<code>staged</code>状态，使用<code>git checkout</code> 则丢弃修改过，返回<code>unmodify</code>状态，这个<code>git checkout</code>即从库中取出文件，覆盖当前修改。</li><li><code>Staged</code>暂存状态。执行<code>git commit</code>则将修改同步到库中，这时库中的文件和本地文件又变为一致，文件为<code>Unmodify</code>状态。执行<code>git reset HEAD filename</code>取消暂存，文件状态为<code>Modified</code>。</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664864881694-676d63c1-0190-49e0-8fd7-f1c118401d52.png" alt="img"></p><p>注意：</p><ul><li>新建文件---&gt;Untracked</li><li>使用add命令将新建的文件加入到暂存区---&gt;Staged</li><li>使用commit命令将暂存区的文件提交到本地仓库---&gt;Unmodified</li><li>如果对Unmodified状态的文件进行修改---&gt; modified</li><li>如果对Unmodified状态的文件进行remove操作---&gt;Untracked</li></ul><h4 id="查看文件状态命令" tabindex="-1"><a class="header-anchor" href="#查看文件状态命令" aria-hidden="true">#</a> 查看文件状态命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-s： 简洁输出</li></ul><h1 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令" aria-hidden="true">#</a> Git命令</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664865961630-21b26c41-8eb1-4d8f-9e86-03464a0a78b8.png" alt="img"></p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664866058168-0889e7d5-9b7e-4d35-ad35-a12396212cbc.png" alt="img"></p><h4 id="查看文件状态命令-1" tabindex="-1"><a class="header-anchor" href="#查看文件状态命令-1" aria-hidden="true">#</a> 查看文件状态命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status -s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="文件加入暂存区" tabindex="-1"><a class="header-anchor" href="#文件加入暂存区" aria-hidden="true">#</a> 文件加入暂存区</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add 文件名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git add .</code> 所有文件加入暂存区</p><h4 id="文件取消暂存区命令" tabindex="-1"><a class="header-anchor" href="#文件取消暂存区命令" aria-hidden="true">#</a> 文件取消暂存区命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset 文件名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="文件提交命令" tabindex="-1"><a class="header-anchor" href="#文件提交命令" aria-hidden="true">#</a> 文件提交命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m &quot;提交信息&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改commit记录" tabindex="-1"><a class="header-anchor" href="#修改commit记录" aria-hidden="true">#</a> 修改commit记录</h4><p>要改动Commit记录有几种方式。</p><ul><li>把.git目录整个删除（不建议）。</li><li>使用git rebase命令来改动历史记录。</li><li>先把 Commit用git reset命令删除，整理后再重新Commit。</li><li>使用--amend参数改动最后一次的Commit。</li></ul><h4 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --oneline\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数：</p><ul><li>--graph ： 查看分支合并图</li><li>--oneline : 标记把每一个提交压缩到了一行中</li></ul><h4 id="使用-amend参数进行commit" tabindex="-1"><a class="header-anchor" href="#使用-amend参数进行commit" aria-hidden="true">#</a> 使用--amend参数进行Commit</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend  -m &quot;welcome to facebook&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm 文件名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用命令会删除暂存区的文件，直接删除不会删除暂存区的文件。</p><p>注意：</p><p>删除的文件只是删除工作目录的文件，我们的版本库里面还是存在的。 删除文件会把这个文件直接放入暂存区。</p><h4 id="恢复被删除的文件或目录" tabindex="-1"><a class="header-anchor" href="#恢复被删除的文件或目录" aria-hidden="true">#</a> 恢复被删除的文件或目录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout index.html\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><p>当使用git checkout命令时，Git 会切换到指定的分支，但如果后面接的是文件名或路径，Git则不会切换分支，而是把文件从.git目录中复制一份到当前的工作目录。更精准地说，这个命令会把暂存区中的内容或文件拿来覆盖工作目录中。</p><h4 id="文件添加至忽略列" tabindex="-1"><a class="header-anchor" href="#文件添加至忽略列" aria-hidden="true">#</a> 文件添加至忽略列</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># / 表示当前文件所在的目录</span>\n\n<span class="token comment"># 忽略public下的所有目录及文件</span>\n/public/*\n\n<span class="token comment">#不忽略/public/assets，就是特例的意思，assets文件不忽略</span>\n<span class="token operator">!</span>/public/assets\n\n<span class="token comment"># 忽略具体的文件</span>\nindex.class\n\n<span class="token comment"># 忽略所有的class</span>\n*.class\n\n<span class="token comment"># 忽略 a.class b.class</span>\n<span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.class\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>#匹配规则和linux文件匹配一样</li><li>#以斜杠“/”开头表示目录</li><li>#以星号“*”通配多个字符</li><li>#以问号“?”通配单个字符</li><li>#以方括号“[]”包含单个字符的匹配列表</li><li>#以叹号“!”表示不忽略(跟踪)匹配到的文件或目录</li></ul><h4 id="获取执行过的命令" tabindex="-1"><a class="header-anchor" href="#获取执行过的命令" aria-hidden="true">#</a> 获取执行过的命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="比较文件差异" tabindex="-1"><a class="header-anchor" href="#比较文件差异" aria-hidden="true">#</a> 比较文件差异</h4><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664876920718-5b3c568e-c18b-45fc-966e-d68d16720f7a.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff [--cached]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>---：标记原始文件</li><li>+++：标记新文件</li><li>@@：两个不同文件版本的上下文行号。</li><li>-： 原始文件删除改行</li><li>+：原始文件增加一行</li></ul><p>本地工作区和暂存区的diff信息：<code>git diff</code>或者 <code>git diff file</code></p><p>暂存区和版本库的diff信息（使用git add 将工作区修改保存到了暂存区后）：<code>git diff --cached</code></p><p>版本库中不同commit、分支的diff信息（使用git commit 将暂存区修改提交到了版本库）：<code>git diff commit1 commit2</code> 或 <code>git diff branch1 branch2</code></p><h4 id="还原文件" tabindex="-1"><a class="header-anchor" href="#还原文件" aria-hidden="true">#</a> 还原文件</h4><p>对于修改的文件有三种情况：</p><ol><li>只是修改了文件，没有任何 Git 操作</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -- aaa.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>修改了文件，并提交到暂存区（即编辑之后，gitadd但没有gitadd但没有 git commit -m ....）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>   <span class="token comment"># 可以省略</span>\n$ <span class="token function">git</span> reset HEAD   <span class="token comment"># 回退到当前版本</span>\n$ <span class="token function">git</span> checkout -- aaa.txt   <span class="token comment"># aaa.txt为文件名</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>修改了文件，并提交到仓库区（即编辑之后，gitadd和gitadd和 git commit -m ....）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>   <span class="token comment"># 可以省略</span>\n$ <span class="token function">git</span> reset HEAD^   <span class="token comment"># 回退到上一个版本</span>\n$ <span class="token function">git</span> checkout -- aaa.txt   <span class="token comment"># aaa.txt为文件名</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="git远程仓库" tabindex="-1"><a class="header-anchor" href="#git远程仓库" aria-hidden="true">#</a> Git远程仓库</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1664975947288-84837d58-7b86-4dbc-a042-eb427b246fce.png" alt="img"></p><h4 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add &lt;项目名称&gt;&lt;url&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看远程仓库" tabindex="-1"><a class="header-anchor" href="#查看远程仓库" aria-hidden="true">#</a> 查看远程仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone 远程仓库地址url\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="移除无效的远程仓库" tabindex="-1"><a class="header-anchor" href="#移除无效的远程仓库" aria-hidden="true">#</a> 移除无效的远程仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote rm  远程仓库名字\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令只是从本地移除远程仓库的记录，并不会真正影响到远程仓库。</p><h4 id="远程仓库-推送" tabindex="-1"><a class="header-anchor" href="#远程仓库-推送" aria-hidden="true">#</a> 远程仓库_推送</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push [remote-name][branch-name]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从远程仓库中抓取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中抓取" aria-hidden="true">#</a> 从远程仓库中抓取</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><p>git fetch是从远程仓库获取最新版本到本地仓库，不会自动merge，想看见文件就需要手动进行合并文件 git merge 仓库名/分支。</p><h4 id="从远程仓库中拉取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中拉取" aria-hidden="true">#</a> 从远程仓库中拉取</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><p>git pull是从远程仓库获取最新版本到本地仓库，会自动merge。</p><h4 id="多人协作冲突问题" tabindex="-1"><a class="header-anchor" href="#多人协作冲突问题" aria-hidden="true">#</a> 多人协作冲突问题</h4><p>先pull再push</p><h4 id="ssh协议推送" tabindex="-1"><a class="header-anchor" href="#ssh协议推送" aria-hidden="true">#</a> SSH协议推送</h4><p>配置SSH协议</p><ol><li>使用命令ssh-keygen -t rsa生成公钥和私钥</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><p>执行完成后在window本地用户.ssh目录(C:\\Users\\用户名.ssh)下生成如下名称的公钥和私钥。</p><ol><li>复制公钥文件内容至服务器上</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665039356615-12b80c2e-4f57-4445-93ba-242da219c9d2.png" alt="img"></p><p>github/gitee添加ssh公钥</p><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h3><h4 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数：</p><ul><li>-r : 列出所有远程分支</li><li>-a ：列出所有本地分支和远程分支</li></ul><h4 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch 分支名字\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-m 修改分支名字</p><h4 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout ge1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h4><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665040579043-d4cda2bf-e468-4b07-b76b-dc1624cf8aa2.png" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge ge1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支Git干了什么</p><ol><li>更新暂存区和工作目录</li><li>变更HEAD的位置</li></ol><h4 id="删除本地仓库分支" tabindex="-1"><a class="header-anchor" href="#删除本地仓库分支" aria-hidden="true">#</a> 删除本地仓库分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d b1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665047985652-f542a5dd-9d0f-46b2-bdad-2f59a9bf175b.png" alt="img"></p><h4 id="恢复删除的分支" tabindex="-1"><a class="header-anchor" href="#恢复删除的分支" aria-hidden="true">#</a> 恢复删除的分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch new_cat 968a614\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除远程仓库分支" tabindex="-1"><a class="header-anchor" href="#删除远程仓库分支" aria-hidden="true">#</a> 删除远程仓库分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push 仓库名 -d 分支名字\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665048668362-2661e493-d515-46b7-8453-a6ed06cbf107.png" alt="img"></p><h4 id="列出已有标签" tabindex="-1"><a class="header-anchor" href="#列出已有标签" aria-hidden="true">#</a> 列出已有标签</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag 标签名字\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看标签信息" tabindex="-1"><a class="header-anchor" href="#查看标签信息" aria-hidden="true">#</a> 查看标签信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git show 标签名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="标签推送远程仓库" tabindex="-1"><a class="header-anchor" href="#标签推送远程仓库" aria-hidden="true">#</a> 标签推送远程仓库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push [remote] [tag]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="检出标签" tabindex="-1"><a class="header-anchor" href="#检出标签" aria-hidden="true">#</a> 检出标签</h4><p>新建一个分支，指向某个tag</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b [branch] [tag]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除本地标签" tabindex="-1"><a class="header-anchor" href="#删除本地标签" aria-hidden="true">#</a> 删除本地标签</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag -d [tag]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除远程标签" tabindex="-1"><a class="header-anchor" href="#删除远程标签" aria-hidden="true">#</a> 删除远程标签</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push 仓库名字:refs/tags/标签名字\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="git-flow" tabindex="-1"><a class="header-anchor" href="#git-flow" aria-hidden="true">#</a> Git Flow</h1><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665063732927-1b289b6e-210a-4b16-b547-47d2a1af9fad.png" alt="img"></p><p>解释：</p><ul><li>master 主干分支，开发完成的上线的项目版本</li><li>hotixes 热部署分支，进行主干分支的补丁操作</li><li>release 预部署分支，测试工程师的调用的分支</li><li>develop 开发分支，开发源代码分支</li><li>feature 功能分支，你们调用分支</li></ul><h3 id="master-devlop-分支" tabindex="-1"><a class="header-anchor" href="#master-devlop-分支" aria-hidden="true">#</a> Master/Devlop 分支</h3><p>所有在Master分支上的Commit应该打上Tag，一般情况下Master不存在Commit，Devlop分支基于Master分支创建</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665063732924-3a8891b0-9e86-405c-8d2a-af64474244c3.png" alt="img"></p><h3 id="feature-分支" tabindex="-1"><a class="header-anchor" href="#feature-分支" aria-hidden="true">#</a> Feature 分支</h3><p>Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，但是我们也可以保留。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665063732979-e9a0a8ff-8179-4834-a947-5b725a76426a.png" alt="img"></p><h3 id="release-分支" tabindex="-1"><a class="header-anchor" href="#release-分支" aria-hidden="true">#</a> Release 分支</h3><p>Release分支基于Develop分支创建，打完Release分之后，我们可以在这个Release分支上测试，修改Bug等。同时，其它开发人员可以基于开发新的Feature 发布Release分支时，合并Release到Master和Develop， 同时在Master分支上打个Tag记住Release版本号，然后可以删除Release分支了。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665063733111-9932851c-abfb-4ca9-82a9-9ec356e52e89.png" alt="img"></p><p>注意：</p><p>一旦打了Release分支之后不要从Develop分支上合并新的改动到Release分支。</p><h3 id="hotfix-分支" tabindex="-1"><a class="header-anchor" href="#hotfix-分支" aria-hidden="true">#</a> Hotfix 分支</h3><p>hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28233658/1665063732981-55f82ddf-0b34-493b-9128-cd2a90f66376.png" alt="img"></p>', 198);
const _hoisted_199 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_199);
}
const Gitxuexibiji_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Gitxuexibiji.html.vue"]]);
export {
  Gitxuexibiji_html as default
};
