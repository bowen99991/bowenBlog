import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-dcdda7af.js";
const _imports_0 = "/bowenBlog/assets/image-20231007093945180-68a56d34.png";
const _imports_1 = "/bowenBlog/assets/image-20231007093211588-29b1a2f3.png";
const _imports_2 = "/bowenBlog/assets/image-20231007095318760-7bf58bed.png";
const _imports_3 = "/bowenBlog/assets/image-20231007100149456-78ef4b08.png";
const _imports_4 = "/bowenBlog/assets/image-20231007100238853-d2d7032d.png";
const _imports_5 = "/bowenBlog/assets/image-20231007102956875-1632ab60.png";
const _imports_6 = "/bowenBlog/assets/image-20231007093717270-f8887986.png";
const _imports_7 = "/bowenBlog/assets/image-20231007093650129-d2b41274.png";
const _imports_8 = "/bowenBlog/assets/image-20231007142431724-7158cf52.png";
const _imports_9 = "/bowenBlog/assets/image-20231007212006356-17c124bd.png";
const _imports_10 = "/bowenBlog/assets/image-20231007212107492-e559cd0e.png";
const _imports_11 = "/bowenBlog/assets/image-20231007212407377-3f233150.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="一-node介绍" tabindex="-1"><a class="header-anchor" href="#一-node介绍" aria-hidden="true">#</a> 一. Node介绍</h2><hr><h3 id="_1-什么是node" tabindex="-1"><a class="header-anchor" href="#_1-什么是node" aria-hidden="true">#</a> 1, 什么是Node</h3><p><em>官方对Node.js的定义：Node.js是一个基于V8 JavaScript引擎的JavaScript运行时环境。</em></p><ul><li>中文网：https://nodejs.org/zh-cn/</li><li>Node.js基于V8引擎来执行JavaScript的代码</li><li>在Node.js中我们也需要进行一些额外的操作，比如文件系统读/写、网络IO、加密、压缩解压文件等操作</li><li>在Chrome浏览器中，还需要解析、渲染HTML、CSS等相关渲染引擎，另外还需要提供支持浏览器操作的API、浏览器自己的事件循环等</li></ul><p><strong>Node的构架</strong></p><ul><li>我们编写的JavaScript代码会经过V8引擎，再通过Node.js的Bindings，将任务放到Libuv的事件循环中；</li><li>libuv（Unicorn Velociraptor—独角伶盗龙）是使用C语言编写的库；</li><li>libuv提供了事件循环、文件系统读写、网络IO、线程池等等内容；</li></ul><h3 id="_2-node的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-node的应用场景" aria-hidden="true">#</a> 2, Node的应用场景</h3><ul><li>Node.js的快速发展也让企业对Node.js技术越来越重视，在前端招聘中通常会对Node.js有一定的要求，特别对于高级前端开发工程师，Node.js更是必不可少的技能，总之一句话，Node是每一个前端程序员必须掌握的技能</li></ul><p><strong>应用场景</strong></p><ul><li>前端开发的库都是以node包的形式进行管理，后面会学习大量的库</li><li>npm、yarn工具成为前端开发使用最多的工具</li><li>使用Node.js作为web服务器开发、中间件、代理服务器</li><li>服务端渲染，借助Node.js完成前后端渲染的同构应用</li><li>使用Node可以编写一些脚本工具</li><li>使用Electron来开发桌面应用程序，是需要使用Node</li><li>Node也可以开API接口</li></ul><h3 id="_3-node安装和管理" tabindex="-1"><a class="header-anchor" href="#_3-node安装和管理" aria-hidden="true">#</a> 3, <strong>Node安装和管理</strong></h3><p><strong>Node.js是在2009年诞生的，目前最新的版本是分别是LTS 16.15.1以及Current 18.4.0</strong></p><ul><li>LTS版本：（Long-term support, 长期支持）相对稳定一些，推荐线上环境使用该版本，建议选择此版本</li><li>Current版本：最新的Node版本，包含很多新特性</li></ul><p><strong>最直接的安装方法</strong></p><ul><li>直接下载对应的安装包下载安装</li><li>window选择.msi安装包，Mac选择.pkg安装包</li><li>安装过程中会配置环境变量</li><li>会自动安装npm（Node Package Manager）工具</li></ul><p><strong>安装了Node,会自动安装npm</strong></p><p><img src="' + _imports_0 + '" alt="image-20231007093945180"></p><h3 id="_4-node的版本工具" tabindex="-1"><a class="header-anchor" href="#_4-node的版本工具" aria-hidden="true">#</a> 4, <strong>Node的版本工具</strong></h3><p><em>可以在电脑上安装不同版本的Node，使用时，可以切换不同的版本。</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm的常用命令:\n- nvm：Node Version Manager\n- 通过 nvm install latest 安装最新的node版本\n- 通过 nvm list 展示目前安装的所有版本\n- 通过 nvm use 切换版本\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_1 + '" alt="image-20231007093211588"></p><h4 id="_1-nvm的安装" tabindex="-1"><a class="header-anchor" href="#_1-nvm的安装" aria-hidden="true">#</a> <strong>1, Nvm的安装</strong></h4><hr><p>下载地址</p><p>https://github.com/coreybutler/nvm-windows/releases</p><p><img src="' + _imports_2 + '" alt="image-20231007095318760"></p><h4 id="_2-添加国内的镜像源" tabindex="-1"><a class="header-anchor" href="#_2-添加国内的镜像源" aria-hidden="true">#</a> 2, 添加国内的镜像源</h4><p><strong>nvm地址</strong></p><p><img src="' + _imports_3 + '" alt="image-20231007100149456"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setting文件中,添加国内源,目的是为了提高下载速度\n\nnode_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_4 + '" alt="image-20231007100238853"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm命令\n————————————————\nnvm -v 查看当前版本\nnvm --config\nnvm list available 查看网络可以安装的node版本\nnvm list 查看已安装node版本列表\nnvm install 版本号 下载对应node版本\nnvm use 版本号 切换node版本\nnvm on 开启nvm\nnvm off 关闭nvm\n————————————————\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-环境变量的配置" tabindex="-1"><a class="header-anchor" href="#_3-环境变量的配置" aria-hidden="true">#</a> 3, 环境变量的配置</h4><ul><li>点击计算机</li><li>右击点击属性</li><li>选择高级系统设置</li></ul><p><img src="' + _imports_5 + '" alt="image-20231007102956875"></p><hr><h3 id="_5-node环境中运行js代码" tabindex="-1"><a class="header-anchor" href="#_5-node环境中运行js代码" aria-hidden="true">#</a> 5, Node环境中运行JS代码</h3><p><strong>两个环境，可以运行JS代码</strong></p><ul><li>浏览器</li><li>node环境（可以通过终端命令node js文件的方式来载入和执行对应的js文件）</li></ul><p><strong>安装VScode插件,来运行JS代码</strong></p><p><strong>Code Runner</strong></p><p><img src="' + _imports_6 + '" alt="image-20231007093717270"></p><p><img src="' + _imports_7 + '" alt="image-20231007093650129"></p><h3 id="_6-node传递参数" tabindex="-1"><a class="header-anchor" href="#_6-node传递参数" aria-hidden="true">#</a> 6, Node传递参数</h3><p><strong>执行node程序的过程中，可以给node传递一些参数</strong></p><ul><li>node index.js env=development wangcai</li><li>在程序中通过process内置对象可以获取到传递的参数</li><li>在process内置对象的argv属性中存储着我们写的参数</li></ul><h3 id="_7-node安装可能出现的问题" tabindex="-1"><a class="header-anchor" href="#_7-node安装可能出现的问题" aria-hidden="true">#</a> 7, Node安装可能出现的问题</h3><p><strong>重装 Node 步骤</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 在程序和功能中, 卸载Node\n2. 在本地文件夹中完全删除Node的文件, \n   - npm文件\n   - npm-cache文件\n3. nvm install xxxxx\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装完成之后可能在项目里npm run dev时报错npm不是内部或外部命令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）出现原因：\n在使用nvm版本管理工具之前，你本地是安装过node的，这个时候需要把 你之前安装的node文件全部删除，先在程序里去卸载你安装的node，再检查一下环境变量中，node的环境变量是否已经移除，然后去C盘user文件夹下APPdata/roaming/以及local文件夹下找到npm-cache和node_moudel文件夹，全部删除\n（2）然后把nvm文件夹删除，重新安装nvm就不会报错啦\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-安装其他yarn-nrm" tabindex="-1"><a class="header-anchor" href="#_8-安装其他yarn-nrm" aria-hidden="true">#</a> 8, 安装其他yarn nrm</h3><p>在nvm下安装yarn，nrm</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//安装yarn\nnpm install -g yarn\n//安装nrm\nnpm install nrm -g\n\n\n----------------------\n安装nrm时报错\n\n原因：应该使用 open 的 CommonJs 规范的包，现在 open v9.0.0 是 ES Module 版本的包。将安装nrm的命令换成npm install -g nrm open@8.4.2 --save 之后nrm就安装好了\n\nnpm install -g nrm open@8.4.2 --save\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-在node中运行js" tabindex="-1"><a class="header-anchor" href="#_9-在node中运行js" aria-hidden="true">#</a> 9, 在node中运行JS</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方式一：打开JS文件所在文件夹，在输入框，输出cmd，按回车。\n方式二：vscode中，打开cmd窗口\n方式三：安装一个vscode插件 Code Runner\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-node事件环" tabindex="-1"><a class="header-anchor" href="#_10-node事件环" aria-hidden="true">#</a> 10, node事件环</h3><p>之前node事件环和浏览器事件环还是不一样的，现在基本上一样了。面试时，可能会问到。回顾一个浏览器的事件环：</p><ul><li>代码从上到下执行，遇到宏任务，就放到宏任务队列，遇到微任务，就放到微任务队列，先把所有的同步代码执行完毕。</li><li>清空微任务队列</li><li>从宏任务队列中取出一个宏任务，执行，执行时，还可能遇到宏任务或微任务，重复第一步。</li><li>一个宏任务执行完毕，清空微任务队列，再取一个宏任务执行，也就是说在执行宏任务时，微任务队列需要清空。</li></ul><h2 id="二-模块化" tabindex="-1"><a class="header-anchor" href="#二-模块化" aria-hidden="true">#</a> 二. 模块化</h2><hr><h3 id="_1-什么是模块化" tabindex="-1"><a class="header-anchor" href="#_1-什么是模块化" aria-hidden="true">#</a> 1, 什么是模块化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在node中一个 js 文件就是一个模块\n模块内部代码对于外部来说都是不可见的，可以通过两种方式向外部暴露\n模块化（组件化）指的就是将一个大的功能拆分为一个一个小的模块，通过不同的模块的组合来实现一个大功能。\n优点：1. 复用性 2. 维护性\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// b.js 文件</span>\n<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;xq&#39;</span>\n<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">17</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">,</span>\n  age\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js 文件</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b.js&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 通过require 函数导入</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命名冲突的问题</strong></p><p><img src="' + _imports_8 + '" alt="image-20231007142431724"></p><p>以上这种情况会直接报错, 变量已被声明.</p><p>早期的时候, 会利用IIFE 解决命名冲突的问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>总结一下：\n\n- 第一，必须记得每一个模块中返回对象的命名，才能在其他模块使用过程中正确的使用\n- 第二，代码写起来混乱不堪，每个文件中的代码都需要包裹在一个匿名函数中来编写；\n- 第三，在没有合适的规范情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况；\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-commonjs规范" tabindex="-1"><a class="header-anchor" href="#_2-commonjs规范" aria-hidden="true">#</a> 2, CommonJS规范</h3><p>CommonJS是一个规范，简称为CJS，Node是CommonJS在服务器端一个具有代表性的实现</p><ul><li>Node在服务器端实现了这个规范</li><li>webpack打包工具具备对CommonJS的支持和转换</li></ul><p><strong>CommonJS规范要求</strong></p><ul><li><p>在Node中每一个js文件都是一个单独的模块</p></li><li><p>模块中包括CommonJS规范的核心变量：==exports==、==module.exports==、==require==，使用这些变量来方便的进行模块化开发</p></li><li><p>exports和module.exports可以负责对模块中的内容进行导出</p></li><li><p>require函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容</p></li></ul><h3 id="_3-exports-导出" tabindex="-1"><a class="header-anchor" href="#_3-exports-导出" aria-hidden="true">#</a> 3, exports 导出</h3><p><strong>exports导出</strong></p><ul><li>exports是一个对象，我们可以在这个对象中添加很多个属性，添加的属性会导出</li><li>另外一个文件中可以导入，require通过各种查找方式，最终找到了exports这个对象，将这个exports对象赋值给一个变量</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 两者指向同一个对象</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports  <span class="token operator">==</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>module.exports导出</strong></p><ul><li>CommonJS中是没有module.exports的概念的</li><li>但是为了实现模块的导出，Node中使用的是Module的类，每一个模块都是Module的一个实例，也就是module</li><li>所以在Node中真正用于导出的其实根本不是exports，而是module.exports，module才是导出的真正实现者</li><li>之所以exports也可以导出，是因为module对象的exports属性是exports对象的一个引用</li><li>就是说 module.exports = exports</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>总结导出数据：\n\n- 方式一： exports.a = a; exports.b = b; 在源码中是这样的： exprots = module.exports\n- 方式二： module.exports.a = a; module.exports.b = b;\n- 方式三： module.exports = { a, b }\n- 不能这样写：exports = { a, b };\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-require-导入" tabindex="-1"><a class="header-anchor" href="#_4-require-导入" aria-hidden="true">#</a> 4, require 导入</h3><p><strong>require 是一个函数,可以帮助我们引入一个文件</strong></p><p><em>当我们去reuire一个模块时，它会把模块中的代码全部执行，require多次时，也是执行一次，因为第1次去执行时，就把结果放到缓存中了，第二次再去require时，直接从缓存中获取结果，不会再去模块中的代码</em></p><p>模块分类：</p><ul><li>自定义模块，就是程序员自己写的模块 a.js。必须以./或../打头。</li><li>系统模块 node中提供好的模块，不需要下载，也叫核心模块，这些模块在安装node时，就安装到你电脑上了。</li><li>第三方模块 一些大牛自已开发的模块，上传上网上，我们用的时候，就需要下载安装</li></ul><p><strong>require 函数的解析流程:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 情况一：require(&quot;x&quot;) x是一个Node系统模块，比如path、http\n  - 直接去你电脑上找系统模块，找到了，就停止查找。\n- 情况二：X是以 ./ 或 ../ 或 /（根目录）开头的，表示是自定义模块\n  - require(&quot;./x.js&quot;) 如果有后缀名，直接找对应的文件。\n  - require(&quot;./x&quot;) 没有后缀名，查找顺序：\n    - 1，直接查找文件x\n    - 2，查找x.js文件\n    - 3，查找x.json文件\n    - 4，查找x.node文件\n    - 如果还没有找到对应的文件，会把x当成目录，查找目录下的文件\n      - 1，查找x/index.js文件\n      - 2，查找x/index.json文件\n      - 3，查找x/index.node文件\n  - 如果没有找到，那么报错：not found\n- 情况三：require(&quot;x&quot;) x不是一个系统模块，就是一个第三方模块\n  - 会在用户电脑上查找这个第三方模块，会在多个地方查找，如果找不到，就报错\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-es6-module-规范" tabindex="-1"><a class="header-anchor" href="#_5-es6-module-规范" aria-hidden="true">#</a> 5, ES6 Module 规范</h3><p><strong>ECMA推出自己的模块化系统，弥补了JavaScript没有模块化一直是它的痛点</strong></p><ul><li>CommonJS、AMD、CMD等，仅仅是JS社区的规范，并不是官方的</li><li>采用ES Module将自动采用严格模式：use strict</li></ul><p><strong>ES Module模块采用export和import关键字来实现模块化</strong></p><ul><li>export负责将模块内的内容导出</li><li>import负责从其他模块导入内容</li></ul><p><strong>规范：</strong></p><ul><li>每一个文件，都是一个模块，模块与模块之间天生隔离</li><li>你想让别人使用你的数据，你就需要导出去</li><li>你想用别人的数据，就需要导入进来</li></ul><p><strong>代码演示</strong></p><p>说明浏览器默认也不支持es6module，需要告诉浏览器，我们要采用模块化</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="_6-import-函数" tabindex="-1"><a class="header-anchor" href="#_6-import-函数" aria-hidden="true">#</a> 6, import 函数</h3><p><code>import()</code>函数是一个动态导入模块的函数。它是ES6模块的一种方式，用于异步地加载和使用模块。</p><p>在传统的ES6模块语法中，模块的导入是在模块的顶部进行静态解析的，这意味着你不能在运行时根据条件或动态值导入模块。然而，<code>import()</code>函数的出现改变了这一点，它可以接受一个模块的路径作为参数，并返回一个Promise，该Promise在模块加载完成后进行解析。</p><p><code>import()</code>函数返回一个包含默认导出和具名导出的模块对象，可以使用<code>then()</code>方法来处理它。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认导出的内容</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>namedExport<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 具名导出的内容</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加载模块失败：&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>import()</code>函数可以实现在运行时根据条件加载模块，或者根据动态值确定要导入的模块。这在需要按需加载模块或动态加载模块时非常有用。</p><p>需要注意的是，<code>import()</code>函数是异步的，因此需要使用Promise的异步方式来处理模块的加载和使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> say <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./b.js&#39;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//</span>\n<span class="token comment">// console.log(a);</span>\n\n<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token comment">// await 在最新的语法中不需要写async </span>\n    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span> <span class="token comment">// res是一个 Module,它是一个对象类型</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ......Symbol..</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Object</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上总结:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将res打印为typeof res时，它返回的是&quot;object&quot;，这表明res是一个JavaScript对象类型。\n\n当你使用res instanceof Object时，它返回false,这意味着res不是Object的实例,这是因为在ECMAScript规范中，模块对象（例如使用import()动态导入的对象）不是Object的实例，而是继承自ModuleRecord。\n\n注意，尽管res不是Object的实例，但它仍然是一个有效的JavaScript对象。你仍然可以使用res来访问模块导出的内容，只是instanceof运算符在这种情况下并不适用。\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-包管理" tabindex="-1"><a class="header-anchor" href="#三-包管理" aria-hidden="true">#</a> 三. 包管理</h2><hr><h3 id="_1-包管理工具" tabindex="-1"><a class="header-anchor" href="#_1-包管理工具" aria-hidden="true">#</a> 1, 包管理工具</h3><p>上在的演示的模块都是自定义模块，除了自定义模块，还有系统模块和第三方模块，系统模块我们先不讲。现在我们研究一下第三方模块，第三方模块都是一些大牛开发的模块，会放到网上，我们使用时，需要下载，通过放在npm网上.</p><p>在下载第三方模块，需要使用npm下载工具。这个工具，你在安装node时，就安装好了。npm叫==<strong>Node Package Manager</strong>==，就是包管理工具。通过 NPM 可以对 Node 的工具包进行搜索、下载、安装、删除、上传。通过where npm就可以查看你的npm安装在哪里，如下：</p><p><img src="' + _imports_9 + '" alt="image-20231007212006356"></p><hr><h3 id="_2-初始化配置文件" tabindex="-1"><a class="header-anchor" href="#_2-初始化配置文件" aria-hidden="true">#</a> 2, 初始化配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> jquery   install可以简写成i\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装的依赖有很多版本，默认安装是最新版.</p><p>一个项目，可以有N个第三方模块，我们需要生成一个配置文件，去记录这些第三方模块。你在安装第三方依赖时，它会生成一个叫package.json文件，这个文件，就是项目的配置文件。它里面记录了，项目所用到的依赖。</p><p><img src="' + _imports_10 + '" alt="image-20231007212107492"></p><p>一个项目，有非常多的包，我们需要通过一个配置文件（package.json）来管理这些包，配置文件会记录着你项目的名称、版本号、项目描述，项目所依赖的其他库的信息和依赖库的版本号，可以生成配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>   <span class="token comment"># -y 表示所有选项都采用默认</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>总结一个package.json文件，如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodetest&quot;</span><span class="token punctuation">,</span>      #包的名字(注意生成的包名不能使用中文，大写 ！！！ 不能使用 npm 作为包的名字)\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>   #包的版本\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>    #包的描述\n  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>   #包的入口文件\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>			#脚本配置\n    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>			#作者\n  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>		#版权声明\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更加详细的配置：</p><ul><li>name是项目的名称，必填</li><li>version是当前项目的版本号，必填</li><li>description是描述信息，很多时候是作为项目的基本描述</li><li>author是作者相关信息（发布时用到）</li><li>license是开源协议（发布时用到） <ul><li>http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html(关于开源证书扩展阅读)</li></ul></li><li>private属性记录当前的项目是否是私有的，当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式</li><li>main属性，设置程序的入口，实际上是找到对应的main属性查找文件的</li><li>scripts属性用于配置一些脚本命令，以键值对的形式存在，配置后我们可以通过 npm run 命令的key来执行这个命令 <ul><li>npm start和npm run start 它们是等价的，对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行；</li></ul></li><li>dependencies属性 <ul><li>dependencies属性是指定无论开发环境还是生成环境都需要依赖的包</li><li>项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios等</li></ul></li><li>devDependencies属性 <ul><li>在生成环境是不需要的，比如webpack、babel等</li><li>通过 npm install webpack --save-dev，将它安装到devDependencies属性中</li></ul></li></ul><p>版本：</p><ul><li>X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）</li><li>Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）</li><li>Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）</li><li>x.y.z：表示一个明确的版本号</li><li>^x.y.z：表示x是保持不变的，y和z永远安装最新的版本</li><li>~x.y.z：表示x和y保持不变的，z永远安装最新的版本</li><li>package-lock.json 是包版本的锁文件，专门来固定包的版本的，不要手动修改</li></ul><hr><h3 id="_3-换源" tabindex="-1"><a class="header-anchor" href="#_3-换源" aria-hidden="true">#</a> 3, 换源</h3><p>默认情况下，你安装的第三方依赖，是去国外下载的，速度比较慢，并且容易被墙掉，说白了就是安装不成功。我们可以把下载源换成国内下载源，通过一个工具，叫nrm来实现换源，所以现在我们需要安装一个nrm工具，通过npm i xxx -g。 -g表示全局安装，全局安装就是以工具的形式安装。说白了，安装完后，就可以使用这个工具了</p><p>安装 nrm 源管理工具</p><p>在开发过程中，使用npm命令安装依赖项时，默认情况下会从npm官方源（https://registry.npmjs.org/）下载包。然而，有时候从官方源下载速度较慢，而其他第三方源（如淘宝镜像源、cnpm等）可能提供更快的下载速度。</p><p>nrm允许开发人员通过命令行界面管理npm源。它提供了一组命令来列出可用的源、切换当前使用的源，以及添加或删除源。例如，以下是nrm的一些常用命令：</p><ul><li><code>nrm ls</code>：列出可用的npm源。</li><li><code>nrm use &lt;registry&gt;</code>：切换到指定的npm源。</li><li><code>nrm add &lt;registry&gt; &lt;url&gt;</code>：添加一个新的npm源。</li><li><code>nrm del &lt;registry&gt;</code>：删除指定的npm源。</li></ul><p>使用nrm，开发人员可以根据网络环境的不同选择合适的npm源来加快包的下载速度，从而提高开发效率</p><p><img src="' + _imports_11 + '" alt="image-20231007212407377"></p><hr><h3 id="_4-全局安装和局部安装" tabindex="-1"><a class="header-anchor" href="#_4-全局安装和局部安装" aria-hidden="true">#</a> 4, 全局安装和局部安装</h3><p>上面已经把下载源换成了国内的下载源。开始安装依赖，安装分全局安装和局部安装，先说一下全局安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> 工具名称（nrm） <span class="token parameter variable">-g</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>讲局部安装，局部安装，就是不加-g，项目中用到的依赖，需要局部安装。依赖分两类：</p><ul><li>生产依赖（写代码用到的依赖） <ul><li>npm i xxx</li><li>npm i xxx -S -S表示安装成生成依赖</li><li>npm i xxx --save --save表示安装成生成依赖</li></ul></li><li>开发依赖（写代码用不到依赖，和环境有关的依赖） <ul><li>npm i xxx -D -D表示开发依赖</li><li>npm i xxx --save-dev --save-dev表示开依赖</li></ul></li></ul><hr><h3 id="_5-生产依赖和开发依赖" tabindex="-1"><a class="header-anchor" href="#_5-生产依赖和开发依赖" aria-hidden="true">#</a> 5, 生产依赖和开发依赖</h3><p>不管是生产依赖还是开发依赖都是安装在 node_modules 文件夹中</p><p>跑环境，把项目发给别人，一般是不会发node_modules中，这个node_modules在我电脑上没有问题，在你电脑可以有问题，并且这个文件夹，里在文件非常多，copy的话，很容易出问题。你拿到代码后，你需要安装项目中所需要的依赖，通过一个命令，叫npm i就可以把所有的依赖都安装了，这个过程叫跑环境</p><p>总结：</p><ul><li>不管是生产依赖还是开发依赖，安装的依赖都会放在node_modules文件夹下面</li><li>全局安装是把这个依赖当成工具，npm i cnpm -g cnpm就是一个工具。</li><li>局部安装分开发依赖和生产依赖</li><li>npm install(i) axios 默认安装生产依赖</li><li>npm install(i) axios --save（-S） 生产依赖</li><li>npm install(i) webpack --save-dev（-D） 开发依赖</li><li>npm install(i) 安装package.json中的依赖包(跑环境)</li><li>npm install(i) --production // 只安装 dependencies 中的依赖</li><li>npm uninstall axios 删除某个依赖</li><li>npm uninstall axios -S</li><li>npm search(s) vue 搜索依赖</li><li>npm cache clean 清除缓存</li></ul><hr><h3 id="_6-cnpm-和-yarn" tabindex="-1"><a class="header-anchor" href="#_6-cnpm-和-yarn" aria-hidden="true">#</a> 6, cnpm 和 yarn</h3><p>npm工具，是我们在安装node时，就已经安装好了，npm这个工具，叫下载工具，就是用来下载一些第三方依赖。除了npm这个下载工具之外，还有一个下载工具：</p><ul><li>cnpm</li><li>yarn</li><li>pnpm</li></ul><p>yarn:</p><ul><li>yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具</li><li>早期的npm存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题</li><li>从npm5版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用yarn</li><li>yarn 安装 npm install yarn -g</li><li>yarn 修改仓库地址 yarn config set registry https://registry.npm.taobao.org</li></ul><p>yarn相关的命令：</p><ul><li>yarn --version 检测是否安装成功</li><li>yarn init 初始化，生成package.json</li><li>yarn global add package 全局安装</li><li>yarn global remove less 全局删除</li><li>yarn add package 局部安装</li><li>yarn add package --dev (相当于npm中的-D)</li><li>yarn remove package 删除局部包文件</li><li>yarn 安装package.json中的所有依赖</li><li>yarn info packageName 获取包的有关信息 几乎不用</li></ul><p>要有兴趣的话，自己打一下这些命令，目前先把npm 相关的命令掌握就OK。</p><p><strong>cnpm</strong>:</p><ul><li>npm install -g cnpm</li><li>cnpm 相关的命令和npm命令基本上是一样的</li></ul><p><strong>pnpm</strong>:</p><ul><li>后面大家自学</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\npnpm是一个快速、省空间的包管理工具，用于管理Node.js项目中的依赖项。与npm和Yarn不同，pnpm采用一种新的依赖管理策略，称为&quot;逻辑链接&quot;（link-alternative）。这种策略通过在全局存储位置为每个依赖项创建一个符号链接，而不是将每个依赖项复制到每个项目中，来减少磁盘空间的使用和加速安装过程。\n\n以下是pnpm的一些特点和优势：\n\n1.快速安装速度： 由于采用了链接替代复制的策略，pnpm可以显著减少安装和更新依赖项所需的时间，尤其是在项目有大量共享的依赖项时。\n\n2.节省磁盘空间： pnpm只在全局存储位置下载和保存每个依赖项的一份副本，然后通过创建符号链接将其链接到每个项目中。这种方式可以极大地减少磁盘空间的使用，尤其在有多个项目且它们依赖相同的包时。\n\n3.更好的本地缓存： pnpm使用一个统一的本地缓存来存储已下载的包，这使得多个项目可以共享已下载的依赖项。这种共享可以减少重复下载的情况，提高包的重用性。\n\n4.完全兼容npm和Yarn： pnpm支持大多数npm和Yarn命令和功能，可以无缝地与现有的npm和Yarn项目集成。\n\n总之，pnpm旨在提供一种更高效、占用空间更少的方式来管理Node.js项目的依赖项，从而加快构建和部署过程，并减少磁盘空间的使用。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>7, 发布 npm 包(第三方模块)</p><p>所谓的发包，就是你开发一个很NB依赖，上传到npm官网，让别人使用。</p><ol><li>修改为官方的地址 ( npm config set registry https://registry.npmjs.org/ 也可以通过nrm )</li><li>创建文件夹，并创建文件 index.js， 在文件中声明函数，使用 module.exports 暴露</li><li>npm 初始化工具包，package.json 填写包的信息 （越复杂越容易提上去）</li><li>账号npm注册（激活账号）,==完成邮箱验证==</li><li>命令行下 『npm login』 填写相关用户信息 (一定要在包的文件夹下运行)</li><li>命令行下『 npm publish』 提交包 👌</li><li>npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交，可以尝试改一下包的名称来解决这个问题</li><li>还可以添加项目的说明文件，(READEME)</li></ol>', 170);
const _hoisted_171 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_171);
}
const Node_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Node.html.vue"]]);
export {
  Node_html as default
};
