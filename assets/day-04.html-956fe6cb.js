import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, e as createTextVNode, f as createVNode, b as createStaticVNode } from "./app-4ad51ddc.js";
const _imports_0 = "/bowenBlog/assets/image-20230829092442213-97cbe65b.png";
const _imports_1 = "/bowenBlog/assets/image-20230829093632782-519d0dbe.png";
const _imports_2 = "/bowenBlog/assets/image-20230829152459106-92a62ac5.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="五、盒子模型" tabindex="-1"><a class="header-anchor" href="#五、盒子模型" aria-hidden="true">#</a> 五、盒子模型</h1><hr><p>盒子模型（Box Model）</p><p>是用于布局和定位 HTML 元素的基本概念。它描述了一个元素在页面中所占空间的特性，包括元素的内容区域、内边距、边框和外边距。</p><h2 id="_1-盒子模型介绍" tabindex="-1"><a class="header-anchor" href="#_1-盒子模型介绍" aria-hidden="true">#</a> 1，盒子模型介绍</h2><p>盒子模型可以分为以下几个部分：</p><ol><li>内容区域（Content）：元素的实际内容，例如文本、图像等。它的大小由元素的宽度（width）和高度（height）属性决定。</li><li>内边距（Padding）：内容区域与边框之间的空白区域。可以使用 CSS 的 <code>padding</code> 属性来控制内边距大小。</li><li>边框（Border）：内边距和外边距之间的边界线。可以使用 CSS 的 <code>border</code> 属性来设置边框的样式、宽度和颜色。</li><li>外边距（Margin）：边框与相邻元素之间的空白区域。可以使用 CSS 的 <code>margin</code> 属性来控制外边距的大小。</li></ol><p>在默认情况下，这些部分的尺寸会相互影响，从而决定了元素在页面中所占的总空间。例如，元素的总宽度可以计算为：<code>width + padding-left + padding-right + border-left + border-right + margin-left + margin-right</code>。</p><p>盒子模型的特性对于元素的布局和样式设置非常重要。通过调整盒子模型的各个部分，我们可以控制元素在页面中的大小、间距和边框样式，从而实现所需的布局效果。</p><p>需要注意的是，CSS 盒子模型有两种盒子模型：标准盒子模型（content-box）和IE 盒子模型（border-box）。在标准盒子模型中，元素的宽度和高度只包括内容区域，而在IE 盒子模型中，宽度和高度包括了内边距和边框。可以使用 CSS 的 <code>box-sizing</code> 属性来指定使用哪种盒子模型。</p><hr><h2 id="_2-内容的宽高" tabindex="-1"><a class="header-anchor" href="#_2-内容的宽高" aria-hidden="true">#</a> 2，内容的宽高</h2><p>width具有默认值，默认是auto</p><p>表示宽度交给浏览器去计算，去决定</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">/* 用于消除浏览器默认样式的影响，以获得更一致的跨浏览器渲染效果。 */</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-内边距" tabindex="-1"><a class="header-anchor" href="#_3-内边距" aria-hidden="true">#</a> 3，内边距</h2><p>padding</p><ol><li>用于设置盒子的内边距，通常用于设置边框和内容之间的内边距</li></ol><h2 id="_4-边框" tabindex="-1"><a class="header-anchor" href="#_4-边框" aria-hidden="true">#</a> 4，边框</h2><p>border</p><p>可以通过边框来实现三角形</p><h2 id="_5-圆角" tabindex="-1"><a class="header-anchor" href="#_5-圆角" aria-hidden="true">#</a> 5，圆角</h2><p>border-radius</p><h2 id="_6-外边距" tabindex="-1"><a class="header-anchor" href="#_6-外边距" aria-hidden="true">#</a> 6，外边距</h2><p>margin</p><p>margin 塌陷</p><ol><li>margin有重叠问题，也称为margin塌陷；</li><li>兄弟元素之间的margin塌陷，之间的间隙，取决最大的margin</li><li>父子元素之间的margin塌陷也是取最大值；</li></ol><p>如何解决父子元素之间的margin塌陷</p><p>父子元素之间的margin塌陷</p><p>解决方法：</p><ol><li>overflow : hidden</li></ol><h2 id="_7-外轮廓" tabindex="-1"><a class="header-anchor" href="#_7-外轮廓" aria-hidden="true">#</a> 7，外轮廓</h2><p>一般会给input 轮廓去掉外轮廓</p><h2 id="_8-盒子阴影" tabindex="-1"><a class="header-anchor" href="#_8-盒子阴影" aria-hidden="true">#</a> 8，盒子阴影</h2><p>box-shadow</p><h2 id="_9-文本阴影" tabindex="-1"><a class="header-anchor" href="#_9-文本阴影" aria-hidden="true">#</a> 9，文本阴影</h2><h2 id="_10-新的盒子模型" tabindex="-1"><a class="header-anchor" href="#_10-新的盒子模型" aria-hidden="true">#</a> 10，新的盒子模型</h2><p>box-sizing : border-box</p><h2 id="_11-盒子背景" tabindex="-1"><a class="header-anchor" href="#_11-盒子背景" aria-hidden="true">#</a> 11，盒子背景</h2><p><strong>背景颜色</strong></p><p>bgcolor</p><p>background</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>\n    <span class="token selector">.box1</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>\n      <span class="token property">border</span><span class="token punctuation">:</span> 5px dotted red<span class="token punctuation">;</span>\n      <span class="token comment">/* 插入图片路径 */</span>\n      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../../imgs/1.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n      <span class="token comment">/* 设置图片位置 */</span>\n      <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token selector">.box2</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n      <span class="token comment">/* background 复合属性 */</span>\n      <span class="token property">background</span><span class="token punctuation">:</span> red <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../../imgs/2.png<span class="token punctuation">)</span></span> repeat center<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-字体图标" tabindex="-1"><a class="header-anchor" href="#_12-字体图标" aria-hidden="true">#</a> 12, 字体图标</h2><p>阿里的图标网</p><p>iconfont.cn</p><h2 id="_13-精灵图" tabindex="-1"><a class="header-anchor" href="#_13-精灵图" aria-hidden="true">#</a> 13，精灵图</h2><p>制作网站：topal.com</p><hr><h1 id="六-flex布局" tabindex="-1"><a class="header-anchor" href="#六-flex布局" aria-hidden="true">#</a> 六，flex布局</h1><p>弹性布局，目的就是为了让块级标签并排显示</p><h2 id="_1-flex-布局介绍" tabindex="-1"><a class="header-anchor" href="#_1-flex-布局介绍" aria-hidden="true">#</a> 1，flex 布局介绍</h2><p>flex目的就是为了让块级标签，可以并排显示。也叫弹性布局。之前让块级标签并排显示，使用浮动比较多，现在使用flex布局比较多。</p><p><strong>几个概念：</strong></p><ul><li><p>如果给一个元素设置了display:flex。那么就开启了flex布局。</p></li><li><p>添加display:flex; 这个标签，叫容器。</p></li><li><p>容器中的直接子元素叫项目。那么它的性别就变了，变成男标签</p></li><li><p>项目默认就是在主轴上排列的。</p></li><li><p>和主轴垂直那个轴叫交叉轴。</p></li></ul><hr><h2 id="_2-容器相关属性" tabindex="-1"><a class="header-anchor" href="#_2-容器相关属性" aria-hidden="true">#</a> 2，容器相关属性</h2><ol><li>flex-direction 决定主轴的方向</li><li>flex-wrap 项目压缩时，是否换行</li><li>flex-flow 是direction和wrap的简写</li><li>justify-content 处理主轴的富余空间</li><li>align-items 一行项目时，处理交叉轴的富余空间</li><li>align-content 多根主轴在交叉轴上的排序顺序（多行项目，处理交叉轴的富余空间）</li></ol><p><strong>flex-direction</strong> 改变主轴方向 默认row 从左往右</p><ul><li>row-reverse 从右往左</li><li>colum 从上到下</li><li>colum-reverse 从下往上</li></ul><p><strong>flex-wrap</strong></p><ul><li>决定主轴是多根还是一根，或者是决定项目是否换行</li><li>fnowrap（默认）：单行</li><li>wrap：多行</li><li>wrap-reverse：多行（对比 wrap，cross start 与 cross end 相反）</li></ul><p><strong>flex-flow</strong></p><ol><li>flex-flow 属性是 flex-direction 和 flex-wrap 的简写</li><li>顺序任何, 并且都可以省略</li></ol><p><strong>justify-content</strong></p><p>决定项目在主轴上面的排列顺序</p><ol><li>justify-content决定项目在主轴的排列顺序</li><li>flex-start（默认值）：与 main start 对齐</li><li>flex-end：与 main end 对齐</li><li>center：居中对齐</li><li>space-between： <ul><li>flex items 之间的距离相等</li><li>与 main start、main end两端对齐</li></ul></li><li>space-around： <ul><li>flex items 之间的距离相等</li><li>flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半</li></ul></li><li>space-evenly： <ul><li>flex items 之间的距离相等</li><li>flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离</li></ul></li></ol><p><strong>align-item</strong></p><p>决定项目在交叉轴上的</p><ul><li>决定项目在交叉轴上的对齐方式</li><li>normal：在弹性布局中，效果和stretch一样</li><li>stretch：当 flex items 在 cross axis 方向的 size 为 auto 时，会自动拉伸至填充 flex container</li><li>flex-start：与 cross start 对齐</li><li>flex-end：与 cross end 对齐</li><li>center：居中对齐</li><li>baseline：与基准线对齐</li></ul><p><strong>align-content</strong></p><p><code>align-content</code> 是 CSS 中用于设置弹性容器（flex container）中多行子元素（flex lines）在交叉轴（cross axis）上的对齐方式的属性。它用于控制子元素在容器中的垂直方向上的位置。</p><p>该属性可以应用于具有 <code>display: flex</code> 或 <code>display: inline-flex</code> 属性的父容器上，并且容器内至少存在两行以上的子元素。以下是 <code>align-content</code> 可能的取值和它们的作用：</p><ol><li><code>flex-start</code>：多行子元素在容器的起始位置对齐。</li><li><code>flex-end</code>：多行子元素在容器的末尾位置对齐。</li><li><code>center</code>：多行子元素在容器的垂直中心位置对齐。</li><li><code>space-between</code>：多行子元素平均分布在容器内，使它们之间的间距相等，首行子元素贴着容器的起始位置，末行子元素贴着容器的末尾位置。</li><li><code>space-around</code>：多行子元素平均分布在容器内，使它们之间的间距相等，同时在首行子元素之前和末行子元素之后都有一半的间距。</li><li><code>stretch</code>：多行子元素被拉伸以填充容器的整个交叉轴空间。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-1具体介绍" tabindex="-1"><a class="header-anchor" href="#flex-1具体介绍" aria-hidden="true">#</a> flex:1具体介绍</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个很多字div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个更多字而且第三个div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.container</span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.div</span><span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex: 1; 确实实现了三个不同内容的 div 平分空间</strong></p><ul><li>第一个参数表示: <strong>flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大</strong></li><li>第二个参数表示: <strong>flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小</strong></li><li>第三个参数表示: <strong>flex-basis****给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小</strong></li></ul><p><strong>flex: 1; !== flex: 1 1 auto;</strong></p><p><strong>flex: 1; === flex: 1 1 0;</strong></p><h2 id="_3-项目相关的属性" tabindex="-1"><a class="header-anchor" href="#_3-项目相关的属性" aria-hidden="true">#</a> 3, 项目相关的属性</h2><hr><p>项目属性之order</p><ol><li>决定了 flex items 的排布顺序</li><li>可以设置任意整数（正整数、负整数、0），值越小就越排在前面</li><li>默认值是 0</li></ol><p><strong>align-self</strong></p><ul><li>center 单独设置项目的交叉轴上的对齐方式</li></ul><p><strong>flex-grow</strong></p><ol><li>决定了 flex items 如何扩展(拉伸/成长)</li><li>可以设置任意非负数字（正小数、正整数、0），默认值是 0</li><li>前提是有富余空间的情况下，才能拉伸/成长</li><li>富余空间size * flex-grow / sum</li></ol><p>flex-shrink</p><ol><li>设置压缩比例</li><li>可以设置任意非负数字（正小数、正整数、0），默认值是 1</li><li>flex items 超出 flex container 的 size * 收缩比例 / 所有 flex items 的收缩比例之和</li></ol><p>flex-basis</p><ol><li>设置项目在主轴上的宽度</li><li>auto（默认值）、具体的宽度数值（100px）</li><li>flex-basis的优先级是高于width</li></ol><p><strong>flex</strong></p><p>通常在 Flexbox 布局中使用 <code>flex: 1</code> 是为了实现弹性项（flex item）的自动伸缩，并使它们平均地填充剩余空间。</p><p>当将 <code>flex: 1</code> 应用于弹性项时，它会将弹性项的伸缩因子（flex grow factor）和收缩因子（flex shrink factor）都设置为相同的值为 1。这意味着弹性项会根据可用空间自动拉伸或收缩，以填充或释放剩余空间。</p><p>具体而言，<code>flex: 1</code> 的作用是：</p><ol><li>弹性项将在主轴上自动扩展以填充剩余空间。如果存在多个具有相同 <code>flex: 1</code> 属性的弹性项，则它们将平均地分配剩余空间，使它们的宽度（或高度）相等。</li><li>弹性项将根据需要自动收缩以适应容器的空间不足。如果容器空间不足以容纳所有弹性项，具有 <code>flex: 1</code> 属性的项将根据其初始尺寸和伸缩因子进行适当的收缩，以使它们能够适应容器。</li></ol><p>通过使用 <code>flex: 1</code>，可以实现弹性项的自动伸缩和平均分配剩余空间的效果，从而创建灵活且响应式的布局。当需要让弹性项占据可用空间的大部分，并且根据容器尺寸的变化自动调整时，<code>flex: 1</code> 是一个常用的选择。</p><h1 id="pxcook使用-像素大厨" tabindex="-1"><a class="header-anchor" href="#pxcook使用-像素大厨" aria-hidden="true">#</a> Pxcook使用-像素大厨</h1><hr>', 102);
const _hoisted_103 = {
  href: "https://www.fancynode.com.cn/pxcook",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_104 = /* @__PURE__ */ createStaticVNode('<p>其优势在于小巧、操作简单，页面简洁，可以知道设计图中各个元素的尺寸、颜色、其中字体大小颜色和与其他元素的距离，同时选中元素后会展示相关书写网页代码所需的元素信息以及对应的css样式，当然最让人开心的是可以免费使用</p><p>在不知道该软件前我是用的ps来对设计图进行相关元素信息的获取，但是知道该软件后果断使用PxCook</p><p>PS相对于PxCook功能更强大，但PS占用空间大和需要付费，在有网页设计图的情况下，PxCook足够可以让我们来书写前端代码~~~</p><p>注：</p><ol><li><h4 id="对图片进行移动时要按住空格键再点击鼠标左键进行移动-只点击鼠标左键或者滚动鼠标都不会使图片移动" tabindex="-1"><a class="header-anchor" href="#对图片进行移动时要按住空格键再点击鼠标左键进行移动-只点击鼠标左键或者滚动鼠标都不会使图片移动" aria-hidden="true">#</a> 对图片进行移动时要按住空格键再点击鼠标左键进行移动，只点击鼠标左键或者滚动鼠标都不会使图片移动</h4></li><li><h4 id="快捷键-一起按住-ctrl-和-放大图片-一起按住-ctrl-和-缩小图片" tabindex="-1"><a class="header-anchor" href="#快捷键-一起按住-ctrl-和-放大图片-一起按住-ctrl-和-缩小图片" aria-hidden="true">#</a> 快捷键 一起按住 ”ctrl“和 ”+“放大图片 一起按住”ctrl“和”-“ 缩小图片</h4></li></ol><h1 id="八-浮动布局" tabindex="-1"><a class="header-anchor" href="#八-浮动布局" aria-hidden="true">#</a> 八，浮动布局</h1><hr><h2 id="_1-浮动布局" tabindex="-1"><a class="header-anchor" href="#_1-浮动布局" aria-hidden="true">#</a> 1，浮动布局</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\nfloat:left;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有了flex布局，基本上干死了浮动布局，现在不管是写PC端的网页还是移动端的网页，基本上都是清一色的flex布局。对于浮动布局，了解。浮动布局的作用也是让男标签并排显示。</p><h2 id="_2-浮动的特点" tabindex="-1"><a class="header-anchor" href="#_2-浮动的特点" aria-hidden="true">#</a> 2，浮动的特点</h2><p>浮动布局（Floating Layout）是一种常用的网页布局技术，具有以下特点：</p><ol><li>元素浮动：通过将元素的 <code>float</code> 属性设置为 <code>left</code> 或 <code>right</code>，使元素脱离正常的文档流，并浮动到其容器的左侧或右侧。浮动元素会尽可能地靠近容器的边缘，并允许其他内容环绕它。</li><li>文字环绕效果：浮动元素会导致其他内容环绕它，特别是文本内容。文本会自动环绕浮动元素的周围，使布局呈现出文字环绕效果。</li><li>宽度自适应：浮动元素默认情况下会根据内容的宽度自适应。如果没有显式设置宽度，浮动元素的宽度将根据内容的大小进行调整。</li><li>元素堆叠顺序：浮动元素具有较低的堆叠顺序，意味着其他未浮动的元素将覆盖浮动元素。</li><li>容器塌陷：浮动元素会导致其容器的高度塌陷，容器无法自动适应包含浮动元素的高度。这时需要使用额外的技术（如清除浮动）来解决容器塌陷的问题。</li><li>父容器的包裹性：浮动元素会使其父容器的宽度自动缩小到适应浮动元素的宽度，从而形成包裹性效果。</li></ol><p>浮动布局常用于实现多栏布局、图文混排以及创建网页导航栏等。然而，由于浮动布局的一些特点会带来一些问题（如容器塌陷、清除浮动等），在现代网页布局中，更常使用 CSS 弹性盒布局（Flexbox）和网格布局（Grid Layout）来取代浮动布局。</p><h2 id="_3-清除浮动的方式" tabindex="-1"><a class="header-anchor" href="#_3-清除浮动的方式" aria-hidden="true">#</a> 3，清除浮动的方式</h2><ol><li>添加高度 添高法</li><li>overflow:hidden; 溢出隐藏 （BFC）</li><li>clear:both; 内墙法 (清除对兄弟元素造成的影响！)</li><li>伪元素-在元素内部的最后面加入一个假标签 ::after{display:block; content:&quot;&quot;; clear:both; overflow:hidden; height:0}</li></ol><h1 id="网页实战-拉勾网" tabindex="-1"><a class="header-anchor" href="#网页实战-拉勾网" aria-hidden="true">#</a> 网页实战-拉勾网</h1><hr><p>项目结构</p><p><img src="' + _imports_0 + '" alt="image-20230829092442213"></p><p>index.css</p><p>common.css</p><p>logo区域方便</p><p><img src="' + _imports_1 + '" alt="image-20230829093632782"></p><p>main区域</p><p><img src="' + _imports_2 + '" alt="image-20230829152459106"></p><p>省略号{</p><p>white-space:nowrap;</p><p>overflow:hidden;</p><p>text-overflow:ellipsis;</p><p>}</p>', 31);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("下载地址 "),
      createBaseVNode("a", _hoisted_103, [
        createTextVNode("PxCook - 高效易用的自动标注工具,生成前端代码,设计研发协作利器 (fancynode.com.cn)"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_104
  ]);
}
const day04_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "day-04.html.vue"]]);
export {
  day04_html as default
};
