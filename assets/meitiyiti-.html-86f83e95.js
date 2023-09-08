import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app-8244b32d.js";
const _imports_0 = "/bowenBlog/assets/image-20230901181526350-ca8f116f.png";
const _imports_1 = "/bowenBlog/assets/image-20230902170120550-f35096eb.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>categories 文件包名\ntags  标签名\ntitle 文件标题名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="day01" tabindex="-1"><a class="header-anchor" href="#day01" aria-hidden="true">#</a> Day01</h1><hr><h2 id="_1-要改变元素的宽高而不造成回流的方法-reflow" tabindex="-1"><a class="header-anchor" href="#_1-要改变元素的宽高而不造成回流的方法-reflow" aria-hidden="true">#</a> 1,要改变元素的宽高而不造成回流的方法（reflow）</h2><p>1，使用 CSS 的 <code>transform</code> 属性：使用 <code>transform</code> 属性可以对元素进行缩放、旋转、平移等变换，而不会触发回流。例如，通过设置 <code>scale</code> 来改变元素的宽高，如 <code>transform: scale(0.5);</code>，即将元素的宽高缩小为原来的一半。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2，使用 CSS 的 <code>position</code> 属性：通过将元素的 <code>position</code> 属性设置为 <code>absolute</code> 或 <code>fixed</code>，并结合 <code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code> 属性来进行定位，可以改变元素的位置和尺寸，而不会引起回流。</p><p>css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3，在改变元素尺寸前先隐藏元素：可以先将元素的 <code>display</code> 属性设置为 <code>none</code>，然后进行尺寸调整，最后再将 <code>display</code> 属性设置回原来的值，这样可以避免回流的发生。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nelement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 进行宽高调整操作</span>\n\nelement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述方法，可以避免频繁的回流操作，提高性能。但需要注意的是，对于大量元素的同时操作，仍可能引起回流。因此，在进行元素尺寸调整时，尽量合理规划操作，减少对页面布局的影响。</p><h2 id="_2-什么是回流和重绘" tabindex="-1"><a class="header-anchor" href="#_2-什么是回流和重绘" aria-hidden="true">#</a> 2，什么是回流和重绘</h2><p><strong>回流</strong>指的是浏览器为了计算并确定元素在页面中的准确位置和大小而重新构建部分或整个页面布局的过程。当页面布局发生变化时（例如添加、删除、修改元素的尺寸、位置、内容等），浏览器需要重新计算元素的几何属性（例如宽度、高度、位置）和页面的布局，然后重新绘制受影响的区域，这个过程就是回流。回流会导致页面重新布局，消耗较多的计算资源，因此较为耗时。</p><p><strong>重绘</strong>指的是在回流完成后，浏览器根据更新后的元素样式信息重新绘制页面的可见部分。当元素的样式（例如颜色、背景、边框等）发生变化时，浏览器会重新绘制受影响的区域，但不会重新计算元素的几何属性和页面布局。重绘的代价相对较低，因为它只涉及像素颜色的改变。</p><p>回流和重绘的发生往往是相互关联的，一次回流通常会引起一次重绘。因此，频繁的回流和重绘操作会对页面性能产生负面影响，导致页面渲染速度变慢。为了优化页面性能，我们应该尽量避免不必要的回流和重绘操作，合理规划和批量处理样式和布局的修改，使用合适的技术手段（如使用 CSS3 的 transform 属性、使用文档片段等）来减少回流和重绘的次数。</p><h2 id="_3-doctype-html-的作用" tabindex="-1"><a class="header-anchor" href="#_3-doctype-html-的作用" aria-hidden="true">#</a> 3，&lt;!doctype html&gt; 的作用</h2><p><code>&lt;!doctype html&gt;</code> 是用于指定 HTML 文档的文档类型（Document Type）的声明。它位于 HTML 文档的开头，用于告诉浏览器当前文档遵循的 HTML 版本和规范。</p><ol><li>标识 HTML 版本：<code>&lt;!doctype html&gt;</code> 声明指示当前文档使用 HTML5 标准进行编写和解析。HTML5 是最新的 HTML 版本，引入了许多新的元素、属性和特性，提供了更强大和灵活的功能。</li><li>规范浏览器解析模式：不同的文档类型声明会触发不同的浏览器解析模式。在 HTML5 中，<code>&lt;!doctype html&gt;</code> 声明会使浏览器进入标准模式（standards mode），这意味着浏览器会按照 HTML5 规范进行解析和渲染页面。与之相对的是怪异模式（quirks mode），它会使浏览器以一种与旧版本浏览器兼容的方式解析页面，以支持过时的 HTML 语法和布局。</li><li>提高兼容性和一致性：使用 <code>&lt;!doctype html&gt;</code> 声明可以确保不同浏览器对 HTML 文档的解析行为一致，并按照标准规范进行渲染。这有助于减少浏览器之间的兼容性问题，并确保网页在不同浏览器中呈现一致的效果。</li></ol><p><code>&lt;!doctype html&gt;</code> 的作用是告知浏览器当前文档使用 HTML5 标准，并规范浏览器的解析行为，以提高兼容性和一致性。</p><h2 id="_4-什么是事件冒泡和事件捕获" tabindex="-1"><a class="header-anchor" href="#_4-什么是事件冒泡和事件捕获" aria-hidden="true">#</a> 4，什么是事件冒泡和事件捕获</h2><p>事件冒泡（Event Bubbling）和事件捕获（Event Capturing）是描述浏览器处理事件传播的两种不同的机制。</p><p>事件冒泡是指当一个元素触发了某个事件，该事件会首先在触发元素上被处理，然后逐级向上冒泡传播到父元素，直至传播到文档根节点（即 <code>&lt;html&gt;</code> 元素）。这意味着触发元素的事件处理程序会在父元素的事件处理程序之前被调用。事件冒泡机制使得事件可以在整个元素层次结构中传递，允许更容易地对嵌套元素的事件进行处理。</p><p>事件捕获是指与事件冒泡相反的传播方式。当一个元素触发了某个事件，事件会从文档根节点开始，逐级向下捕获传播到触发元素。换句话说，事件捕获会首先调用文档根节点上的事件处理程序，然后逐级向下传播到触发元素。事件捕获机制很少被使用，因为大多数情况下事件冒泡能够满足需求。</p><p>在现代浏览器中，事件传播过程分为三个阶段：</p><ol><li>事件捕获阶段（Capture Phase）：事件从文档根节点向下传播，直到达到触发事件的元素的父级元素。</li><li>目标阶段（Target Phase）：事件到达触发事件的元素，并在该元素上执行事件处理程序。</li><li>事件冒泡阶段（Bubble Phase）：事件从触发元素开始向上冒泡，传播到父级元素，直到达到文档根节点。</li></ol><p>在实际应用中，事件冒泡是默认的事件传播机制，并且更常用。可以通过调用事件对象的 <code>stopPropagation()</code> 方法来阻止事件继续传播。同时，可以使用 <code>addEventListener</code> 方法的第三个参数来指定事件处理程序是在捕获阶段还是冒泡阶段执行（<code>true</code> 表示捕获阶段，<code>false</code> 或省略表示冒泡阶段）。</p><p>总结起来，事件冒泡和事件捕获是描述浏览器中事件传播机制的两种方式，分别从触发元素开始向上冒泡和从文档根节点开始向下捕获。默认情况下，浏览器使用事件冒泡机制，但可以通过指定参数来选择使用事件捕获机制。</p><h2 id="_5-css如何实现一个0-5px的线" tabindex="-1"><a class="header-anchor" href="#_5-css如何实现一个0-5px的线" aria-hidden="true">#</a> 5，css如何实现一个0.5px的线</h2><ol><li>使用缩放（scale）：通过对元素应用CSS的<code>transform: scale()</code>属性来缩放元素。例如，可以将一个1px的线条元素缩放为0.5倍，使其看起来像是0.5px。但需要注意的是，这种方法只是视觉上的近似，实际上仍然是1个物理像素。</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.line</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2，使用伪元素和边框：可以通过在元素的伪元素上应用边框，并将边框宽度设置为0.5px来实现看起来像是0.5px的线。这种方法也是近似效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.line::before</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0.5px solid black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在低分辨率屏幕上，一些浏览器可能会将0.5px的线条进行四舍五入，显示为1px，因此无法实现真正的0.5px线条。</p><h2 id="_6-background-size有哪些属性" tabindex="-1"><a class="header-anchor" href="#_6-background-size有哪些属性" aria-hidden="true">#</a> 6，background-size有哪些属性</h2><p>1，<code>auto</code>：默认值，背景图片按照其原始大小进行显示，不进行缩放。</p><p>2，<code>cover</code>：将背景图片等比例缩放，使其完全覆盖背景区域。可能会裁剪部分图片，以保持宽高比例，并确保背景区域完全填充。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;image.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n```\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3，<code>contain</code>：将背景图片等比例缩放，以便完整显示在背景区域内。图片的某些部分可能不会填满整个背景区域，可能会出现背景区域留白的情况。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;image.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n```\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li><code>cover</code> 会缩放背景图片，保持宽高比例，并将其完全覆盖背景区域。</li><li><code>contain</code> 会缩放背景图片，保持宽高比例，并确保完整显示在背景区域内。</li><li>其他可能的值包括 <code>auto</code>（原始大小）和具体的长度值，用于指定背景图片的尺寸。</li></ul><p>7，输出代码</p><p><img src="' + _imports_0 + '" alt="image-20230901181526350"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token operator">++</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> func1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> func2 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 0 </span>\n<span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 1</span>\n<span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-flex-basis的作用" tabindex="-1"><a class="header-anchor" href="#_7-flex-basis的作用" aria-hidden="true">#</a> 7，flex-basis的作用</h2><p>当 <code>flex-basis</code> 设置为一个具体的长度值时，该值将作为 flex 项的初始主轴尺寸。例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.flex-item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码将 flex 项的初始主轴尺寸设置为 200 像素。</p><p>如果将 <code>flex-basis</code> 设置为 <code>auto</code>，则 flex 项将根据其内容自动决定初始主轴尺寸。这意味着 flex 项的大小将根据其内部内容来确定，而不是通过设置固定的长度值。例如</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.flex-item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，flex 项的初始主轴尺寸将由其内容的大小决定。</p><p>需要注意的是，<code>flex-basis</code> 只是在 flex 容器的初始布局阶段设置 flex 项的尺寸，并且在后续的弹性伸缩调整中可能会被覆盖。如果需要更精确地控制 flex 项的尺寸，可以结合使用 <code>flex-grow</code> 和 <code>flex-shrink</code> 属性。</p><h2 id="_8-git如何创建一个新的分支" tabindex="-1"><a class="header-anchor" href="#_8-git如何创建一个新的分支" aria-hidden="true">#</a> 8，git如何创建一个新的分支</h2><p>Git 中创建一个新的分支，可以使用 <code>git branch</code> 命令。下面是基本的步骤：</p><ol><li>首先，确保你已经在你的 Git 项目目录中打开了命令行终端。</li><li>运行以下命令来创建一个新的分支：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch &lt;branchname&gt;\n```\n其中 `&lt;branchname&gt;` 是你想要创建的分支的名称。请确保使用一个描述性的名称，以便于理解和识别。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行以下命令来切换到新创建的分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout &lt;branchname&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，你可以结合创建和切换分支的操作，使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;branchname&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在你已经成功创建并切换到了新的分支。你可以在该分支上进行开发、提交更改等操作，而不会影响到主分支或其他分支。</p><p>要查看所有分支及当前所在的分支，可以运行 <code>git branch</code> 命令。当前所在的分支会有一个 <code>*</code> 标记。</p><h2 id="_9-为什么var关键字逐渐淘汰" tabindex="-1"><a class="header-anchor" href="#_9-为什么var关键字逐渐淘汰" aria-hidden="true">#</a> 9，为什么var关键字逐渐淘汰</h2><p><code>var</code> 在 ES6（ECMAScript 2015）--（es6）之后逐渐被 <code>let</code> 和 <code>const</code> 所取代</p><ol><li><strong>变量作用域问题</strong>：使用 <code>var</code> 声明的变量存在函数作用域，而不是块级作用域。这意味着 <code>var</code> 声明的变量在整个函数内部都是可见的，而不仅仅局限于声明它的代码块。这可能导致意外的变量覆盖或泄漏问题。</li><li>变量提升问题：使用 <code>var</code> 声明的变量会发生变量提升（hoisting），即变量的声明会被提升到函数或全局作用域的顶部。这意味着你可以在变量声明之前访问它，但其值将是 <code>undefined</code>。这种行为可能导致代码可读性和维护性的问题。</li><li><strong>重复声明问题</strong>：使用 <code>var</code> 声明同名变量不会引发错误，而是会将变量重新定义。这可能导致意外的变量覆盖和错误。</li></ol><p>相比之下**，<code>let</code> 和 <code>const</code> 提供了块级作用域，**并解决了上述问题：</p><ul><li><code>let</code> 允许在块级作用域内声明变量，并且不会发生变量提升的情况。它拥有更严格的作用域规则，避免了变量泄漏和重复声明的问题。</li><li><code>const</code> 用于声明常量，它具有 <code>let</code> 的所有特性，但其值在声明后不能再次被修改。</li></ul><p>由于 <code>let</code> 和 <code>const</code> 提供了更好的变量作用域和更严格的语法规则，使得代码更可靠、更易于理解和调试，所以在现代 JavaScript 开发中，推荐使用 <code>let</code> 和 <code>const</code> 来代替 <code>var</code>。然而，由于历史原因和向后兼容性的考虑，<code>var</code> 仍然可以在某些情况下使用。</p><h2 id="_10-闭包的特性-什么是闭包" tabindex="-1"><a class="header-anchor" href="#_10-闭包的特性-什么是闭包" aria-hidden="true">#</a> 10，闭包的特性，什么是闭包</h2><p>闭包（Closure）是指在函数内部创建的函数，它可以访问和操作包含它的函数的作用域及其上层作用域中的变量、参数和函数。换句话说，闭包是函数以及它所创建的词法环境的组合体</p><p><strong>闭包的特性，</strong></p><p>内部函数可以保留对外部函数作用域的访问权，并且外部函数中的变量在内部函数中可以被持续引用和修改。每次调用外部函数时，都会创建一个新的闭包环境，使得每个闭包都拥有自己的独立状态。</p><p><u>闭包是 JavaScript 中强大且常用的特性，通过创建函数嵌套和共享词法作用域，它可以实现封装、模块化和状态保持等功能</u></p><h1 id="day02" tabindex="-1"><a class="header-anchor" href="#day02" aria-hidden="true">#</a> Day02</h1><hr><h2 id="_1-opacity和rgba有什么区别" tabindex="-1"><a class="header-anchor" href="#_1-opacity和rgba有什么区别" aria-hidden="true">#</a> 1，opacity和rgba有什么区别</h2><p>代码演示：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">.box1</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n      <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.box2</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这是box1的效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这是box2的效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_1 + '" alt="image-20230902170120550"></p><p>从这可以看到，使用opacity属性，会让整体的透明度都会变化，</p><p>而 rgba 的 a 透明度控制，只会让背景色bgc变化，不会影响到div中的文本内容。</p><p>总结：</p><ul><li>opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承不透明属性</li></ul>', 85);
const _hoisted_86 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_86);
}
const meitiyiti__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "meitiyiti-.html.vue"]]);
export {
  meitiyiti__html as default
};
