import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-6e36b8cc.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="工作-环境部署" tabindex="-1"><a class="header-anchor" href="#工作-环境部署" aria-hidden="true">#</a> 工作-环境部署</h2><h3 id="刚到一个新的公司-如何快速搭建开发环境并让应用跑起来" tabindex="-1"><a class="header-anchor" href="#刚到一个新的公司-如何快速搭建开发环境并让应用跑起来" aria-hidden="true">#</a> 刚到一个新的公司, 如何快速搭建开发环境并让应用跑起来</h3><hr><p>新人入职新上手项目，如何把它跑起来，这是所有人都会碰到的问题：所有人都是从新手开始的。</p><p>有可能你会脱口而出：<code>npm run dev/npm start</code>，但实际工作中，处处藏坑，往往没这么简单。</p><blockquote><ol><li>查看是否有 <code>CI/CD</code>，如果有跟着 <code>CI/CD</code> 部署的脚本跑命令</li><li>查看是否有 <code>dockerfile</code>，如果有跟着 <code>dockerfile</code> 跑命令</li><li>查看 npm scripts 中是否有 dev/start，尝试 <code>npm run dev/npm start</code></li><li>查看是否有文档，如果有跟着文档走。为啥要把文档放到最后一个？(公司提供的文档并不一定是最佳的文档,除非有人会专门的去迭代这个文档, 否则文档并不会随着开发环境的变化而变化,所以会衍生许多未知的错误)</li></ol></blockquote><p>但即便是十分谨慎，也有可能遇到以下几个叫苦不迭、浪费了一下午时间的坑:</p><ol><li>前端有可能在<strong>本地环境启动时需要依赖前端构建时所产生的文件</strong>，所以有时需要<strong>先正常部署一遍，再试着按照本地环境启动 (即需要先 <code>npm run build</code> 一下，再 <code>npm run dev/npm start</code>)</strong>。(比如，一次我们的项目 npm run dev 时需要 webpack DllPlugin 构建后的东西）</li><li>别忘了设置环境变量或者配置文件 (.env/consul/k8s-configmap)</li></ol><p>因此，设置一个少的 script，可以很好地避免后人踩坑，更重要的是，可以避免后人骂你，</p><p>此时可设置 script hooks，如 <code>prepare</code>、<code>postinstall</code> 自动执行脚本，来完善该项目的基础设施</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node assets &amp;&amp; node config&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 设置一个钩子，在 npm install 后自动执行，此处有可能不是必须的</span>\n    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --inline --progress&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一个<strong>纯生成静态页面打包</strong>的前端项目而言，它们是没有多少区别的：生产环境的部署只依赖于构建生成的资源，更不依赖 npm scripts。</p><p>使用 <code>create-react-app</code> 生成的项目，它的 npm script 中只有 <code>npm start</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts start&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts build&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts test&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;eject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts eject&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>vuepress</code> 生成的项目，它的 npm script 中只有 <code>npm run dev</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在一个<strong>面向服务端</strong>的项目中，如 <code>next</code>、<code>nuxt</code> 与 <code>nest</code>。dev 与 start 的区别趋于明显，一个为生产环境，一个为开发环境</p><ul><li>dev: 在开发环境启动项目，一般带有 watch 选项，监听文件变化而重启服务，此时会耗费大量的 CPU 性能，不宜放在生产环境</li><li>start: 在生产环境启动项目</li></ul><p>在 <code>nest</code> 项目中进行配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nest start&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nest start --watch&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而我的意见和楼上相反，应该先大概看一遍文档…… 文档中会描述本地环境的配置方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看是否有 CI/CD，如果有跟着 CI/CD 部署的脚本跑命令\n查看是否有 dockerfile，如果有跟着 dockerfile 跑命令\n查看 npm scripts 中是否有 dev/start，尝试 npm run dev/npm start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>npm run dev 和 npm run start 的区别</strong></p><blockquote><p>首先, 他们都是 npm 常见的脚本命令, 通常用于开发和启动应用程序。</p></blockquote><ol><li>npm run dev: <ul><li><code>dev</code>通常代表&quot;development&quot;，指的是开发环境。</li><li>运行<code>npm run dev</code>会执行在<code>package.json</code>中配置的<code>dev</code>脚本命令。</li><li><code>dev</code>脚本通常用于启动开发服务器，实时编译和热重载，以方便开发人员在开发应用程序时进行调试和实时预览。</li><li>通常，在<code>dev</code>模式下会开启更多的开发者工具和功能，例如代码热刷新、调试模式、构建错误提示等。</li></ul></li><li>npm run start: <ul><li><code>start</code>通常代表&quot;start&quot;，指的是启动应用程序。</li><li>运行<code>npm run start</code>会执行在<code>package.json</code>中配置的<code>start</code>脚本命令。</li><li><code>start</code>脚本通常用于启动生产模式下的应用程序。</li><li>在生产模式下，通常会进行一些优化和压缩，以提高应用程序的性能和加载速度。</li></ul></li></ol>', 27);
const _hoisted_28 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_28);
}
const ruhekuaisushangshougongsihuanjing_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ruhekuaisushangshougongsihuanjing.html.vue"]]);
export {
  ruhekuaisushangshougongsihuanjing_html as default
};
