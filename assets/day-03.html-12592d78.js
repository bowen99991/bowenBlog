import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-0934bf90.js";
const _imports_0 = "/bowenBlog/assets/1692757719950.24782057-04f6a345.png";
const _imports_1 = "/bowenBlog/assets/image-20230824111215944-62eb43e1.png";
const _imports_2 = "/bowenBlog/assets/image-20230824150510519-17d838f0.png";
const _imports_3 = "/bowenBlog/assets/image-20230824154839070-548bdcfe.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="day03" tabindex="-1"><a class="header-anchor" href="#day03" aria-hidden="true">#</a> day03</h1><h1 id="一、初识css" tabindex="-1"><a class="header-anchor" href="#一、初识css" aria-hidden="true">#</a> 一、初识CSS</h1><hr><h2 id="_1-认识css" tabindex="-1"><a class="header-anchor" href="#_1-认识css" aria-hidden="true">#</a> 1,认识css</h2><p>层叠样式表，美化网页</p><p>CSS表示层叠样式表（Cascading Style Sheet，简称：CSS，又称为又称串样式列表、级联样式表、串接样式表、阶层式样式表）是为网页添加样式的代码。CSS并不是一门编程语言，是样式语言。作用就是进行网页布局和美化网页。</p><p><strong>版本</strong></p><ul><li>CSS2 CSS3 先学习CSS2 后面学习CSS3</li><li>HTML1~5 前面也是先学习4 后面学习5</li></ul><p>先快速体验一把CSS，css写在style标签中的，style标签是放在head标签里面，title标签下面，如下：</p><p><img src="' + _imports_0 + '" alt="1692757719950"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">*</span> <span class="token punctuation">{</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">body</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">p</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-三种写法" tabindex="-1"><a class="header-anchor" href="#_2-三种写法" aria-hidden="true">#</a> 2.三种写法</h2><p>写CSS，有三种写法：</p><ul><li>内部式：CSS 写在style标签中, 提示：style标签虽然可以写在页面任意位置，但是通常约定写在 head 标签中</li><li>外部式：CSS 写在一个单独的.css文件中, 提示：需要通过link标签在网页中引入</li><li>行内式：CSS 写在标签的style属性中, 提示：之后会配合js使用</li></ul><p><strong>行内样式（inline style）</strong>:</p><ol><li>行内样式（inline style），也有人翻译成行内联式</li><li>行内样式表存在于HTML元素的style属性之中</li><li>CSS样式之间用分号;隔开，建议每条CSS样式后面都加上分号</li><li>在原生的HTML编写过程中确实这种写法是不推荐的，之后会配合JS使用</li></ol><h1 id="二-css选择器" tabindex="-1"><a class="header-anchor" href="#二-css选择器" aria-hidden="true">#</a> 二,CSS选择器</h1><hr><p><strong>选择器的作用</strong>：</p><ol><li>选择页面中对应的标签（找她），方便后续设置样式（改她）</li></ol><p><strong>选择器的种类繁多，大概可以这么归类</strong>：</p><ol><li>通用选择器（universal selector）</li><li>元素选择器（type selectors）</li><li>类选择器（class selectors）</li><li>id选择器（id selectors）</li><li>属性选择器（attribute selectors）</li><li>组合（combinators）</li><li>伪类（pseudo-classes）</li><li>伪元素（pseudo-elements）</li></ol><hr>', 25);
const _hoisted_26 = {
  id: "_1-css基础选择器",
  tabindex: "-1"
};
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#_1-css基础选择器",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_28 = {
  href: "https://yujingbo1023.github.io/javablog/public/blogs/base/02.html#_1-css%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createStaticVNode('<p><strong>通用选择器</strong>：</p><ol><li>结构：* { css属性名：属性值； }</li><li>通用选择器（universal selector）</li><li>所有的元素都会被选中;</li><li>一般用来给所有元素作一些通用性的设置，比如内边距、外边距，比如重置一些内容</li><li>效率比较低，尽量不要使用;</li></ol><hr><h2 id="_2-css高级选择器" tabindex="-1"><a class="header-anchor" href="#_2-css高级选择器" aria-hidden="true">#</a> 2，css高级选择器</h2><ol><li>属性选择器（attribute selectors）</li><li>组合（combinators）</li><li>伪类（pseudo-classes）</li><li>伪元素（pseudo-elements）</li></ol><p><strong>属性选择器(attribute selectors)</strong>：</p><ol><li>拥有某一个属性 [att]</li><li>属性等于某个值 [att=val]</li><li>[attr*=val]: 属性值包含某一个值val （了解）</li><li>[attr^=val]: 属性值以val开头 （了解）</li><li>[attr$=val]: 属性值以val结尾 （了解）</li><li>[attr|=val]: 属性值等于val或者以val开头后面紧跟连接符 （了解）</li><li>[attr~=val]: 属性值包含val, 如果有其他值必须以空格和val分割 （了解）</li></ol><hr><h2 id="_3-后代选择器" tabindex="-1"><a class="header-anchor" href="#_3-后代选择器" aria-hidden="true">#</a> 3，后代选择器</h2><ol><li>后代选择器一: 所有的后代(直接/间接的后代)，选择器之间以空格分割</li><li>后代选择器二: 直接子代选择器(必须是直接子代)</li></ol><hr><h2 id="_4-兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_4-兄弟选择器" aria-hidden="true">#</a> 4，兄弟选择器</h2><p>+表示紧挨着的兄弟</p><p>.item~li 表示所有的的选择器</p><ol><li>兄弟选择器一:相邻兄弟选择器， 使用符号 + 连接</li><li>兄弟选择器二: 普遍兄弟选择器， 使用符号 ~ 连接</li></ol><hr><h2 id="_5-交集选择器" tabindex="-1"><a class="header-anchor" href="#_5-交集选择器" aria-hidden="true">#</a> 5，交集选择器</h2><p>li.box 选择了li下面的class名为box的标签</p><ol><li>交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)</li><li>在开发中通常为了精准的选择某一个元素</li></ol><hr><h2 id="_6-并集选择器" tabindex="-1"><a class="header-anchor" href="#_6-并集选择器" aria-hidden="true">#</a> 6，并集选择器</h2><ol><li>并集选择器: 符合一个选择器条件即可(两个选择器以,号分割)</li><li>在开发中通常为了给多个元素设置相同的样式;</li></ol><hr><h2 id="_7-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_7-伪类选择器" aria-hidden="true">#</a> 7，伪类选择器</h2><p>:hover 鼠标经过</p><p>可以添加新特性</p><p><strong>动态伪类（dynamic pseudo-classes)</strong>：</p><ol><li>a:hover 鼠标挪动到链接上(重要)</li><li>除了a元素，:hover也能用在其他元素上</li><li>选中鼠标悬停在元素上的状态，设置样式</li><li>伪类选择器选中的元素的某种状态</li></ol><hr><p>常用的选择器：</p><ul><li>标签</li><li>类选择器</li><li>id</li><li>后代</li><li>并集</li><li>交集</li><li>hover</li></ul><h1 id="三-字体和文本相关的属性" tabindex="-1"><a class="header-anchor" href="#三-字体和文本相关的属性" aria-hidden="true">#</a> 三，字体和文本相关的属性</h1><hr><h2 id="_1-css颜色表示法" tabindex="-1"><a class="header-anchor" href="#_1-css颜色表示法" aria-hidden="true">#</a> 1，css颜色表示法</h2><ul><li>单词表示 white green blue ， 无法表示所有颜色、</li><li>RGB颜色</li></ul><p>使用RGB，也有两种形式表示</p><p>​ a是透明度</p><ul><li>RGB函数 或者 RGBA 函数 rgba（255,255,0，0.5）</li><li>16进制表示</li></ul><h2 id="_2-开发者调试工具-熟练掌握" tabindex="-1"><a class="header-anchor" href="#_2-开发者调试工具-熟练掌握" aria-hidden="true">#</a> 2，开发者调试工具（熟练掌握）</h2><p>选择某个元素 快捷键 ctrl + shift + c</p><p>移动端设备切换</p><p>elements 元素</p><p>console 控制台</p><p>network 网络</p><p>.........</p><p>选中一个盒子后，分三类</p><ol><li>当前元素的样式</li><li>默认样式</li><li>继承别人的样式</li></ol><p>调试: 增删改查</p><p>样式展示模块：</p><ol><li>高亮表示属性可以继承，</li><li>没有高亮的样式表示，无法继承</li></ol><hr><h2 id="_3-字体相关样式" tabindex="-1"><a class="header-anchor" href="#_3-字体相关样式" aria-hidden="true">#</a> 3，字体相关样式</h2><h3 id="font-size" tabindex="-1"><a class="header-anchor" href="#font-size" aria-hidden="true">#</a> font-size</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">.font</span> <span class="token punctuation">{</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>\n      <span class="token comment">/* 具有继承属性  子元素可以继承父元素的属性 */</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">.son</span> <span class="token punctuation">{</span>\n      <span class="token comment">/* 自身优先级高于 */</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello world <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello world <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="font-family" tabindex="-1"><a class="header-anchor" href="#font-family" aria-hidden="true">#</a> font-family</h3><ol><li>用于设置文字的字体名称</li></ol><h3 id="font-weight" tabindex="-1"><a class="header-anchor" href="#font-weight" aria-hidden="true">#</a> font-weight</h3><ol><li>用于设置文字的粗细</li></ol><h3 id="font-style" tabindex="-1"><a class="header-anchor" href="#font-style" aria-hidden="true">#</a> font-style</h3><ol><li>用于设置文字的常规，样式</li></ol><h3 id="font-variant" tabindex="-1"><a class="header-anchor" href="#font-variant" aria-hidden="true">#</a> font-variant</h3><ol><li><code>font-variant: normal;</code>：默认值，表示不应用任何字体变体。</li><li><code>font-variant: small-caps;</code>：将字母显示为小型大写字母。大写字母将显示为更大的字母，而小写字母将显示为稍微小一些的大写字母。</li><li><code>font-variant: inherit;</code>：继承父元素的字体变体属性。</li><li><code>font-variant: initial;</code>：将字体变体属性重置为初始值。</li><li><code>font-variant: unset;</code>：将字体变体属性重置为继承值或初始值。</li></ol><h3 id="line-height" tabindex="-1"><a class="header-anchor" href="#line-height" aria-hidden="true">#</a> line-height</h3><p>区分height 和 line-height 的区别</p><h3 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h3><ul><li>它是一个缩写属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token comment">/* 通常给body设置字体属性 */</span>\n    <span class="token selector">body</span> <span class="token punctuation">{</span>\n      <span class="token property">font</span><span class="token punctuation">:</span> 12px/2 tahoma<span class="token punctuation">,</span> arial<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-文本的相关样式" tabindex="-1"><a class="header-anchor" href="#_4-文本的相关样式" aria-hidden="true">#</a> 4,文本的相关样式</h2><h3 id="text-decoration" tabindex="-1"><a class="header-anchor" href="#text-decoration" aria-hidden="true">#</a> text-decoration</h3><ul><li>用于设置文本装饰线</li></ul><h3 id="text-transform" tabindex="-1"><a class="header-anchor" href="#text-transform" aria-hidden="true">#</a> text-transform</h3><p><code>text-transform</code> 是一个 CSS 属性，用于控制文本的大小写转换效果。它可以应用于文本内容，包括块级元素和内联元素，用于改变文本的大小写形式。</p><p><code>text-transform</code> 属性有以下几个可选值：</p><ol><li><code>none</code>：默认值，表示不对文本进行大小写转换。</li><li><code>capitalize</code>：将每个单词的首字母转换为大写。例如，&quot;hello world&quot; 将被转换为 &quot;Hello World&quot;。</li><li><code>uppercase</code>：将文本中的所有字母都转换为大写。例如，&quot;hello world&quot; 将被转换为 &quot;HELLO WORLD&quot;。</li><li><code>lowercase</code>：将文本中的所有字母都转换为小写。例如，&quot;HELLO WORLD&quot; 将被转换为 &quot;hello world&quot;。</li><li><code>full-width</code>：将英文和数字字符转换为全角字符，使其占用相同的宽度，类似于中文字符的宽度。例如，&quot;hello world&quot; 将被转换为 &quot;ｈｅｌｌｏ ｗｏｒｌｄ&quot;。</li></ol><p>以下是示例用法：</p><p>css</p><p>Copy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {\n  text-transform: uppercase;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例将 <code>&lt;p&gt;</code> 元素中的文本内容转换为大写形式。</p><p>需要注意的是，<code>text-transform</code> 属性仅影响文本的显示，而不会更改实际的文本内容。另外，该属性对于非拉丁字符集（如中文、日文等）通常不会产生任何效果。</p><hr><h3 id="text-indent" tabindex="-1"><a class="header-anchor" href="#text-indent" aria-hidden="true">#</a> text-indent</h3><ul><li>用于设置文本的首行缩进</li></ul><p><img src="' + _imports_1 + '" alt="image-20230824111215944"></p><p>可以用与logo h1 标题中的缩进</p><hr><h3 id="text-align" tabindex="-1"><a class="header-anchor" href="#text-align" aria-hidden="true">#</a> text-align</h3><p>设置文本的对齐方式</p><ul><li>justify 两端对齐属性 （只对英文有效）</li><li>center 让元素水平（文本 女标签 span input）居中，并且具有继承性</li></ul><hr><h3 id="letter-spacing-、word-spacing" tabindex="-1"><a class="header-anchor" href="#letter-spacing-、word-spacing" aria-hidden="true">#</a> letter-spacing 、word-spacing</h3><p><code>letter-spacing</code> 和 <code>word-spacing</code> 都是 CSS 属性，用于控制文本中字符间距和单词间距的样式。</p><ol><li><p>css</p><p>Copy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {\n  letter-spacing: 2px;\n}\n```\n\n上述示例将 `&lt;p&gt;` 元素中的文本字符间距增加为 2 像素。\n\n````\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>word-spacing</code>：用于设置单词间距。它同样可以应用于任何文本内容。通过指定一个长度值来控制单词之间的间距。</p><p>css</p><p>Copy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p {\n  word-spacing: 5px;\n}\n```\n\n上述示例将 `&lt;p&gt;` 元素中的单词间距增加为 5 像素。\n\n````\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这两个属性的取值可以是正值、负值或零。正值会增加间距，负值会减小间距，而零值表示默认的间距。</p><p>可能会影响文本的可读性和排版效果。过大或过小的间距可能会使文本难以阅读或导致排版紊乱。因此，在使用这些属性时应根据实际需求和设计考虑合适的间距值。</p><hr><h2 id="_5-继承性" tabindex="-1"><a class="header-anchor" href="#_5-继承性" aria-hidden="true">#</a> 5，继承性</h2><p>继承性</p><p>继承样式与默认样式</p><p><img src="' + _imports_2 + '" alt="image-20230824150510519"></p><p>强制继承 （基本上不用）</p><p>border:inherit;</p><p>继承失效的特殊情况：</p><ol><li><p>显式设置：如果子元素通过 CSS 属性为特定属性设置了显式的值，那么它将覆盖继承的值。例如，如果子元素的颜色属性（color）设置为红色（red），则不会继承父元素的颜色值。</p></li><li><p>inherit 关键字：如果在子元素中明确使用了 inherit 关键字作为属性值，那么它将显式地继承父元素的属性值，无论父元素是否设置了该属性。这种情况下，继承不会失效。</p></li><li><p>不可继承属性：有一些 CSS 属性是不可继承的，意味着它们不会被子元素继承。例如，width、height、background 等属性就不可继承，子元素需要自己设置这些属性的值。</p></li><li><p>display 属性的影响：display 属性可以影响继承的行为。例如，如果子元素的 display 属性设置为 inline 或 inline-block，那么它只会继承部分属性，而不是全部属性。另外，如果子元素的 display 属性设置为 none，那么它将不会显示，自然也无法继承其他属性。</p></li><li><p>浮动和定位：子元素的浮动（float）和定位（position）属性值可能会导致继承失效。当子元素浮动或定位时，它们的布局方式会发生变化，继承的属性值可能会受到影响。</p></li></ol><hr><h2 id="_6-css层叠性" tabindex="-1"><a class="header-anchor" href="#_6-css层叠性" aria-hidden="true">#</a> 6，CSS层叠性</h2><p>层叠性</p><ol><li>给同一个标签设置不同的样式，此时样式会层叠叠加</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对于同一个元素，设置了不同的样式，会共同作用在标签上\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css的优先级：</p><ol><li>行内样式 1000</li><li>id选择器 100</li><li>类选择器 10</li><li>标签选择器 1</li><li>通配符选择器 * 0</li><li>继承</li></ol><p>!important 无穷大</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器对css的渲染是由上到下的，\n\n可以通过 !impotent 来提高优先级；\n\n\n写项目时，如果效果和例子不一样，此时需要考虑继承性和层叠性！！！\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于后代选择器。需要考虑权重值</p><hr><h2 id="_7-元素的类型" tabindex="-1"><a class="header-anchor" href="#_7-元素的类型" aria-hidden="true">#</a> 7，元素的类型</h2><p><img src="' + _imports_3 + '" alt="image-20230824154839070"></p><h3 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素；</h3><ol><li>独占一行（一行只能显示一个）</li><li>宽度默认是父元素的宽度，高度默认由内容撑开</li><li>可以设置宽高</li><li>标签：div、p、h系列、ul、li、dl、dt、dd、form、header、nav、footer……</li></ol><h3 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h3><ol><li>一行可以显示多个 ，并排显示</li><li>宽度和高度默认由内容撑开</li><li>不可以设置宽高</li><li>标签：a、span 、b、u、i、s、strong、ins、em、del……</li></ol><h3 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h3><ol><li>一行可以显示多个 ，并排显示。除了可以并排显示之外，其它特性和男标签一样。</li><li>可以设置宽高</li><li>特殊情况：img标签有行内块元素特点，但是Chrome调试工具中显示结果是inline</li><li>标签：input、textarea、button、select……</li></ol><h3 id="display属性" tabindex="-1"><a class="header-anchor" href="#display属性" aria-hidden="true">#</a> display属性</h3><p>通过一个属性，可以改变标签的性别</p><p>display属性常见的值</p><ol><li><code>block</code>：将元素显示为块级元素，占据父容器的整个宽度，并在垂直方向上排列。例如：<code>&lt;div&gt;</code></li><li><code>inline</code>：将元素显示为内联元素，只占据内容所需的宽度，并在同一行内排列。例如：<code>&lt;span&gt;</code></li><li><code>inline-block</code>：将元素显示为内联块级元素，占据内容所需的宽度，但可以设置宽度、高度和内外边距。例如：<code>&lt;input&gt;</code></li><li><code>none</code>：将元素隐藏，不显示在页面上，占据空间。例如：<code>&lt;style&gt;</code> 或 <code>&lt;script&gt;</code></li><li><code>flex</code>：将元素显示为弹性盒子容器，弹性盒子的子元素将根据弹性盒子的规则进行排列。例如：<code>&lt;div style=&quot;display: flex;&quot;&gt;</code></li><li><code>grid</code>：将元素显示为网格容器，网格容器的子元素将根据网格的规则进行排列。例如：<code>&lt;div style=&quot;display: grid;&quot;&gt;</code></li><li><code>table</code>：将元素显示为表格，具有表格的布局特性。例如：<code>&lt;table&gt;</code></li><li><code>inline-table</code>：将元素显示为内联表格，具有表格的布局特性，但在同一行内排列。例如：<code>&lt;table style=&quot;display: inline-table;&quot;&gt;</code></li><li><code>table-row</code>：将元素显示为表格行，在表格中创建行。例如：<code>&lt;tr&gt;</code></li><li><code>table-cell</code>：将元素显示为表格单元格，在表格行中创建单元格。例如：<code>&lt;td&gt;</code></li><li><code>list-item</code>：将元素显示为列表项，通常与 <code>&lt;ul&gt;</code> 或 <code>&lt;ol&gt;</code> 结合使用。例如：<code>&lt;li&gt;</code></li></ol><h1 id="四-作业" tabindex="-1"><a class="header-anchor" href="#四-作业" aria-hidden="true">#</a> 四, 作业</h1><hr><p>第一次作业</p><p>第二次作业</p><h1 id="五-总结" tabindex="-1"><a class="header-anchor" href="#五-总结" aria-hidden="true">#</a> 五，总结</h1><hr><ol><li>ul标签中只能包含li标签</li><li>input 表单需等表单标签需要添加到 form表单中</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input&gt;：用于创建各种输入字段，如文本框、复选框、单选按钮等。\n\n&lt;textarea&gt;：用于创建多行文本输入框。\n\n&lt;select&gt;：用于创建下拉列表框。\n\n&lt;option&gt;：用于定义 &lt;select&gt; 下拉列表的选项。\n\n&lt;button&gt;：用于创建按钮，可以是提交按钮或重置按钮。\n\n&lt;label&gt;：用于为表单元素定义标签，并与之关联。\n\n&lt;fieldset&gt;：用于将相关的表单元素分组到一个字段集中。\n\n&lt;legend&gt;：用于为 &lt;fieldset&gt; 定义一个标题。\n\n&lt;datalist&gt;：用于创建输入框的预定义选项列表。\n\n&lt;optgroup&gt;：用于将 &lt;select&gt; 元素中的选项分组。\n\n&lt;output&gt;：用于显示计算结果或脚本的输出。\n\n&lt;progress&gt;：用于显示任务的进度。\n\n&lt;meter&gt;：用于显示度量标准的值。\n\n&lt;form&gt;：嵌套在另一个 &lt;form&gt; 元素中，用于创建嵌套的表单。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>行内样式调整背景可以直接添加 bgcolor 来修改背景颜色</li><li>女标签不能包男标签，男标签可以包女标签</li></ol>', 137);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("h2", _hoisted_26, [
      _hoisted_27,
      createTextVNode(),
      createBaseVNode("a", _hoisted_28, [
        createTextVNode("#"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("1，CSS基础选择器")
    ]),
    _hoisted_29
  ]);
}
const day03_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "day-03.html.vue"]]);
export {
  day03_html as default
};
