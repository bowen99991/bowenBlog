import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-39d7f69b.js";
const _imports_0 = "/bowenBlog/assets/image-20231208183103226-9c04b06e.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="一-react-18-基础" tabindex="-1"><a class="header-anchor" href="#一-react-18-基础" aria-hidden="true">#</a> 一, React 18 基础</h2><h3 id="_1-react-介绍" tabindex="-1"><a class="header-anchor" href="#_1-react-介绍" aria-hidden="true">#</a> 1, React 介绍</h3><blockquote><p>React 是一个用于构建用户界面的 JavaScript 库，它由 Facebook 开发并开源。React 的设计目标是提供高效、灵活和可维护的方式来构建交互式的用户界面。</p><p>React 的核心思想是将 UI 拆分为独立的可复用组件，每个组件具有自己的状态（state）和生命周期方法，可以根据输入的数据（props）来渲染 UI。React 使用虚拟 DOM（Virtual DOM）作为中间层，通过比较虚拟 DOM 的变化来高效地更新实际 DOM，以提高性能和渲染效率。</p></blockquote><p><strong>React 的主要特点包括：</strong></p><ol><li><strong>组件化</strong>：React 提倡将 UI 拆分为小而独立的组件，使得代码可复用、可测试和可维护性更强。</li><li><strong>虚拟 DOM</strong>：React 使用虚拟 DOM 来管理和跟踪 UI 的变化，并通过 Diff 算法高效地更新实际 DOM，减少不必要的重绘和重新渲染。</li><li><strong>单向数据流</strong>：React 的数据流是单向的，从父组件传递到子组件，子组件通过 props 接收数据，并通过回调函数通知父组件进行状态更新。</li><li><strong>生命周期方法</strong>：React 组件具有生命周期方法，可以在组件的不同阶段执行特定的操作，例如组件的挂载、更新和卸载。</li><li><strong>JSX 语法</strong>：React 使用 JSX 语法，它是一种将 HTML 结构和 JavaScript 代码组合在一起的语法，使得编写组件更直观和易于理解。</li></ol><blockquote><p>React 和 Vue 两个目前流行的框架</p></blockquote><p><strong>React 和 Vue 它们有一些区别：</strong></p><ol><li><strong>语法</strong>：React 使用 JSX 语法，将 HTML 结构和 JavaScript 代码组合在一起。而 Vue 使用模板语法，将 HTML 和 JavaScript 分离，通过指令来控制渲染逻辑。</li><li><strong>学习曲线</strong>：React 的学习曲线相对较陡峭，需要理解组件化思想、虚拟 DOM 和一些附加概念。Vue 的学习曲线相对较平缓，上手较快。</li><li><strong>生态系统</strong>：React 有一个庞大的生态系统，包括丰富的第三方库和工具，适用于大型和复杂的应用程序开发。Vue 的生态系统相对较小，但也有一些优秀的插件和工具。</li><li><strong>状态管理</strong>：React 使用上下文（Context）和状态提升（lifting state）等技术来管理组件之间的状态共享。Vue 提供了内置的状态管理工具 Vuex，使得状态管理更加简单和直观。</li><li><strong>生命周期</strong>：React 和 Vue 的生命周期方法有一些不同，具体的命名和触发时机略有差异。</li></ol><h3 id="_2-react-脚手架" tabindex="-1"><a class="header-anchor" href="#_2-react-脚手架" aria-hidden="true">#</a> 2, React 脚手架</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-react-app xxxx<span class="token punctuation">(</span>项目名称<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>安装脚手架时间 3-5 分钟</em></p><p><strong>分析主要项目文件</strong></p><p>index.js 文件如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span> <span class="token comment">// 根组件</span>\n<span class="token keyword">import</span> reportWebVitals <span class="token keyword">from</span> <span class="token string">&#39;./reportWebVitals&#39;</span>\n\n<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nroot<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token comment">// 使用严格模式, react定义的组件必须大写</span>\n  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>\n<span class="token punctuation">)</span>\n\n<span class="token comment">// If you want to start measuring performance in your app, pass a function</span>\n<span class="token comment">// to log results (for example: reportWebVitals(console.log))</span>\n<span class="token comment">// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals</span>\n\n<span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 用于报告网页性能指标的函数</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.js 文件如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">&#39;./logo.svg&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// JSX语法(模板语法)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token string">&quot;App-header&quot;</span><span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>img\n          src<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span>\n          className<span class="token operator">=</span><span class="token string">&quot;App-logo&quot;</span>\n          alt<span class="token operator">=</span><span class="token string">&quot;logo&quot;</span>\n        <span class="token operator">/</span><span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\n          Edit <span class="token operator">&lt;</span>code<span class="token operator">&gt;</span>src<span class="token operator">/</span>App<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">&gt;</span> and save to reload<span class="token punctuation">.</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>a\n          className<span class="token operator">=</span><span class="token string">&quot;App-link&quot;</span>\n          href<span class="token operator">=</span><span class="token string">&quot;https://reactjs.org&quot;</span>\n          target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span>\n          rel<span class="token operator">=</span><span class="token string">&quot;noopener noreferrer&quot;</span><span class="token operator">&gt;</span>\n          Learn React\n        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JSX 语法的部分注意事项</strong>:</p><blockquote><p>return 所返回的 () 是必须要书写的, 单行可以省略, 所以建议全部统一书写()</p><p>JSX只能 return 有且只有一个 div 根元素</p><p><strong>两种方式</strong>:</p><ol><li>使用 div 作为根元素</li><li>使用 &lt;&gt; 作为空的根元素, 它不会产生多余的父级元素</li></ol><p>标签必须要进行标签闭合的一个处理</p></blockquote><h3 id="_3-jsx-插值" tabindex="-1"><a class="header-anchor" href="#_3-jsx-插值" aria-hidden="true">#</a> 3, JSX 插值</h3><p>JSX 语法的插值, 是在 { } 中插入一个变量, 并渲染到 DOM</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function App() {\n  // JSX语法(模板语法)\n\n  const title = &#39;hello React~&#39;\n  return (\n    &lt;div&gt;\n      &lt;h2 title={title}&gt;{title}&lt;/h2&gt; \n    &lt;/div&gt;\n  )\n}\n\nexport default App\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_0 + '" alt="image-20231208183103226"></p><blockquote><p>如果在标签中添加属性, 那么就是 title = {title} , 需要注意的是不能加&#39;&#39; , 否则最终显示的是一个普通的文本属性值, 而不是我们绑定的变量</p></blockquote><h3 id="_4-条件渲染" tabindex="-1"><a class="header-anchor" href="#_4-条件渲染" aria-hidden="true">#</a> 4, 条件渲染</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function App() {\n  const flag = false\n  let content = &#39;&#39;\n  if (flag) {\n    content = &lt;span&gt;hello React&lt;/span&gt;\n  } else {\n    content = &lt;h2&gt;hello React&lt;/h2&gt;\n  }\n  return (\n    &lt;div&gt;\n      &lt;p&gt;{content}&lt;/p&gt;\n    &lt;/div&gt;\n  )\n}\n\nexport default App\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-循环遍历" tabindex="-1"><a class="header-anchor" href="#_5-循环遍历" aria-hidden="true">#</a> 5, 循环遍历</h3><blockquote><p>下面会讲到 Fragment 组件的使用</p></blockquote><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n\n  <span class="token keyword">const</span> newList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n    <span class="token comment">// 由于 key 不能在&lt;&gt; 这里使用, 因为它是一个空的元素最终不会渲染, 并且会报错</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">-----------</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>newList<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Example\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下</p><h3 id="_6-fragment-组件" tabindex="-1"><a class="header-anchor" href="#_6-fragment-组件" aria-hidden="true">#</a> 6, Fragment 组件</h3><blockquote><p>在 React 中，Fragment 是一种特殊的组件，它允许你在不添加额外节点的情况下，将多个子元素分组在一起。使用 Fragment 可以避免创建不必要的额外 DOM 节点，从而提高性能并保持代码的整洁性。</p></blockquote><p>在 JSX 中使用 Fragment 非常简单。你可以使用空标签 <code>&lt;&gt;&lt;/&gt;</code> 或 <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code> 来表示一个 Fragment。以下是一个使用 Fragment 的示例：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, JSX!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">This is an example of using Fragment.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Example<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-onclick-方法" tabindex="-1"><a class="header-anchor" href="#_7-onclick-方法" aria-hidden="true">#</a> 7, onClick 方法</h3><blockquote><p>在 JSX 中, 属性都是以驼峰式书写的</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleFunction<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">count++</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_8-usestate-状态" tabindex="-1"><a class="header-anchor" href="#_8-usestate-状态" aria-hidden="true">#</a> 8, useState 状态</h3><blockquote><p>在 React 中，<code>useState</code> 是一个内置的 Hook 方法，用于在函数组件中添加状态管理功能。它接受一个初始状态值作为参数，并返回一个包含当前状态和更新状态的函数的数组。</p></blockquote><p>使用实例:</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>  <span class="token comment">// 自动引入</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于对象的响应式处理, 修改单个键的值, 需要全部写入所有的对象的键, 这时, 可以使用展开运算符... 来简化我们的写法</p><p><strong>实现一个计数器</strong></p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState } from &#39;react&#39;\nfunction App() {\n  let num = 100\n  const [count, setCount] = useState(num)\n  const increment = () =&gt; {\n    setCount(count + 1)\n  }\n  return (\n    &lt;div&gt;\n      &lt;h2&gt;{count}&lt;/h2&gt;\n      &lt;button onClick={increment}&gt;增加&lt;/button&gt;\n    &lt;/div&gt;\n  )\n}\n\nexport default App\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引入一个 demo 组件</strong></p><p>App.js</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import Demo from &#39;./utils/demo.jsx&#39; // 引入一个jsx组件\nfunction App() {\n  return (\n    &lt;div&gt;\n      &lt;Demo&gt;&lt;/Demo&gt;\n    &lt;/div&gt;\n  )\n}\n\nexport default App\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo.jsx</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;\n\nfunction Example() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Hello, JSX!&lt;/h1&gt;\n      &lt;p&gt;This is an example of a JSX file.&lt;/p&gt;\n    &lt;/div&gt;\n  )\n}\n\nexport default Example\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 47);
const _hoisted_48 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_48);
}
const React_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "React.html.vue"]]);
export {
  React_html as default
};
