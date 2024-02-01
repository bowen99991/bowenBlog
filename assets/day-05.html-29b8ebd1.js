import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-030547e9.js";
const _imports_0 = "/bowenBlog/assets/image-20230830212852342-a4e77daf.png";
const _imports_1 = "/bowenBlog/assets/image-20230830100159003-0564aa6b.png";
const _imports_2 = "/bowenBlog/assets/image-20230830212759914-0a77a5c0.png";
const _imports_3 = "/bowenBlog/assets/image-20230830212010702-ffc37833.png";
const _imports_4 = "/bowenBlog/assets/image-20230830212021226-7b4684ef.png";
const _imports_5 = "/bowenBlog/assets/image-20230830212034684-0b76b175.png";
const _imports_6 = "/bowenBlog/assets/image-20230830212043520-3e7e891b.png";
const _imports_7 = "/bowenBlog/assets/image-20230830212103255-1bd2f698.png";
const _imports_8 = "/bowenBlog/assets/image-20230830212119609-6a81ef7a.png";
const _imports_9 = "/bowenBlog/assets/image-20230830212143028-2c16079e.png";
const _imports_10 = "/bowenBlog/assets/image-20230830212154941-6bcebeee.png";
const _imports_11 = "/bowenBlog/assets/image-20230830212209030-0ecb53f7.png";
const _imports_12 = "/bowenBlog/assets/image-20230830212223051-36b6e1dd.png";
const _imports_13 = "/bowenBlog/assets/image-20230830212237187-6d0d73c8.png";
const _imports_14 = "/bowenBlog/assets/image-20230830212253499-f2e03069.png";
const _imports_15 = "/bowenBlog/assets/image-20230830212314225-a536ba13.png";
const _imports_16 = "/bowenBlog/assets/image-20230830212323851-a46a2c59.png";
const _imports_17 = "/bowenBlog/assets/image-20230830212338678-3550a10f.png";
const _imports_18 = "/bowenBlog/assets/image-20230830212346922-76053a2d.png";
const _imports_19 = "/bowenBlog/assets/image-20230830212406889-3104b670.png";
const _imports_20 = "/bowenBlog/assets/image-20230830212426488-8ae26c27.png";
const _imports_21 = "/bowenBlog/assets/image-20230830212522322-6efd4797.png";
const _imports_22 = "/bowenBlog/assets/image-20230830212531918-1bc09d52.png";
const _imports_23 = "/bowenBlog/assets/image-20230830212608853-1319d7b9.png";
const _imports_24 = "/bowenBlog/assets/image-20230830212656308-21cdcf66.png";
const _imports_25 = "/bowenBlog/assets/image-20231012222412999-cf31a665.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="九-定位" tabindex="-1"><a class="header-anchor" href="#九-定位" aria-hidden="true">#</a> 九，定位</h1><hr><h2 id="_1-定位介绍" tabindex="-1"><a class="header-anchor" href="#_1-定位介绍" aria-hidden="true">#</a> 1，定位介绍</h2><ol><li>默认情况下，元素都是按照normal flow（标准流、常规流、正常流、文档流【document flow】）进行排布</li><li>块级元素独占一行 → 垂直布局</li><li>行内元素/行内块元素一行显示多个 → 水平布局</li><li>默认情况下，互相之间不存在层叠现象</li><li>在标准流中，可以使用margin、padding对元素进行定位，其中margin还可以设置负数</li><li>设置一个元素的margin或者padding，通常会影响到标准流中其他元素的定位效果，不便于实现元素层叠的效果</li><li>如果我们希望一个元素可以跳出标准文档流,可以通过position属性来进行设置</li><li>定位可以让元素自由的摆放在网页的任意位置</li><li>一般用于盒子之间的层叠情况，定位之后的元素层级最高，可以层叠在其他盒子上面</li></ol><p>通过位置设置偏移量：</p><ul><li>top</li><li>bottom</li><li>left</li><li>right</li></ul><p><img src="' + _imports_0 + '" alt="image-20230830212852342"></p><h2 id="_2-相对定位" tabindex="-1"><a class="header-anchor" href="#_2-相对定位" aria-hidden="true">#</a> 2，相对定位</h2><ol><li>相对于自己之前的位置进行移动，对盒子的位置进行微调，可以使用相对定位。</li><li>可以通过left、right、top、bottom其中的两个属性来设置偏移量。</li><li>定位参照对象是元素自己原来的位置</li><li>在页面中占位置，没有脱标</li><li>应用场景：1）配合绝对定位组（子绝父相） 2）在不影响其他元素位置的前提下，对当前元素位置进行微调</li></ol><p>通过位置设置偏移量：</p><ul><li>top</li><li>bottom</li><li>left</li><li>right</li></ul><h2 id="_3-绝对定位" tabindex="-1"><a class="header-anchor" href="#_3-绝对定位" aria-hidden="true">#</a> 3，绝对定位</h2><ol><li>在页面中不占位置，元素脱离normal flow（脱离标准流、脱标）</li><li>参考点是需要手动设置的。代码：position:relative; 一般情况下，参考点都是父元素。子绝父相。</li><li>如果没有设置参考点，一级一级向上找，直到body。如果body也没有设置，就以body作为参考点。</li><li>可以通过left、right、top、bottom其中的两个属性来设置偏移量。</li><li>通过z-index可以改变绝对定位元素的层叠顺序，值越大，越在上面。</li></ol><p><strong>使用绝对定位让元素居中</strong></p><p><img src="' + _imports_1 + '" alt="image-20230830100159003"></p><h2 id="_4-固定定位" tabindex="-1"><a class="header-anchor" href="#_4-固定定位" aria-hidden="true">#</a> 4，固定定位</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>position:fix;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="' + _imports_2 + '" alt="image-20230830212759914"></p><ol><li>元素脱离标准流</li><li>通过left right 移动</li><li>元素内部的元素还是按照文档流排布</li><li>参考点是整个浏览器的视口；</li></ol><p>总结：</p><p>position值：</p><ol><li>静态</li><li>相对</li><li>绝对</li><li>固定</li></ol><hr><h1 id="十-布局套路" tabindex="-1"><a class="header-anchor" href="#十-布局套路" aria-hidden="true">#</a> 十，布局套路（）</h1><hr><h2 id="_1-table布局-淘汰" tabindex="-1"><a class="header-anchor" href="#_1-table布局-淘汰" aria-hidden="true">#</a> 1，table布局(淘汰)</h2><ul><li>父级容器—display: table</li><li>子级容器—display:table-cell</li></ul><p><img src="' + _imports_3 + '" alt="image-20230830212010702"></p><h2 id="_2-浮动布局" tabindex="-1"><a class="header-anchor" href="#_2-浮动布局" aria-hidden="true">#</a> 2，浮动布局</h2><ul><li>实现一侧布局，另一侧自适应</li><li>实现三列布局。左边固定，中间固定，右边自适应</li></ul><p><img src="' + _imports_4 + '" alt="image-20230830212021226"></p><h2 id="_3-inline-block布局-了解" tabindex="-1"><a class="header-anchor" href="#_3-inline-block布局-了解" aria-hidden="true">#</a> 3，inline-block布局（了解）</h2><p>使用这个布局，回车换行会导致间隙，需要把父元素的font-size设置为0，再单独给子元素设置font-size</p><p><img src="' + _imports_5 + '" alt="image-20230830212034684"></p><h2 id="_4-flex布局" tabindex="-1"><a class="header-anchor" href="#_4-flex布局" aria-hidden="true">#</a> 4，flex布局</h2><ul><li>实现水平垂直居中</li><li>实现一侧固定，另一侧自适应</li></ul><p><img src="' + _imports_6 + '" alt="image-20230830212043520"></p><p>使用flex，实现两列布局，一侧固定，一侧自适应，如下：<img src="' + _imports_7 + '" alt="image-20230830212103255"></p><h2 id="_5-网格布局grid" tabindex="-1"><a class="header-anchor" href="#_5-网格布局grid" aria-hidden="true">#</a> 5，网格布局grid</h2><p><img src="' + _imports_8 + '" alt="image-20230830212119609"></p><h2 id="_6-columns布局-了解" tabindex="-1"><a class="header-anchor" href="#_6-columns布局-了解" aria-hidden="true">#</a> 6，columns布局(了解)</h2><p>设置元素的列属</p><p>CSS属性 <strong>columns</strong> 用来设置元素的列宽和列数</p><p><img src="' + _imports_9 + '" alt="image-20230830212143028"></p><h2 id="_7-水平居中" tabindex="-1"><a class="header-anchor" href="#_7-水平居中" aria-hidden="true">#</a> 7，水平居中</h2><ol><li>文本的水平居中 text-align:center;</li><li>margin:0 auto;</li></ol><p><img src="' + _imports_10 + '" alt="image-20230830212154941"></p><p>一个男标签水平居中：</p><p><img src="' + _imports_11 + '" alt="image-20230830212209030"></p><p>多个男标签水平居中：</p><p><img src="' + _imports_12 + '" alt="image-20230830212223051"></p><p>已知父子宽高，使用绝对定位让一个男标签水平居中：</p><p><img src="' + _imports_13 + '" alt="image-20230830212237187"></p><p>已知父宽高，不知子宽高，让一个男标签水平居中：</p><p><img src="' + _imports_14 + '" alt="image-20230830212253499"></p><p>使用flex布局实现：</p><p><img src="' + _imports_15 + '" alt="image-20230830212314225"></p><h2 id="_8-垂直居中" tabindex="-1"><a class="header-anchor" href="#_8-垂直居中" aria-hidden="true">#</a> 8，垂直居中</h2><ol><li>单行文本的垂直居中</li><li>多行文本垂直居中</li><li>图片垂直居中</li></ol><p><img src="' + _imports_16 + '" alt="image-20230830212323851"></p><p><img src="' + _imports_17 + '" alt="image-20230830212338678"></p><p><img src="' + _imports_18 + '" alt="image-20230830212346922"></p><p>让男标签实现垂直居中：</p><ul><li>table布局（淘汰）</li><li>flex（display:flex; align-items:center; ）</li><li>定位（子绝父相） + margin负值 或 transfrom</li></ul><p><img src="' + _imports_19 + '" alt="image-20230830212406889"></p><p><strong>让过个盒子实现垂直居中</strong></p><p><img src="' + _imports_20 + '" alt="image-20230830212426488"></p><h2 id="_9-水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_9-水平垂直居中" aria-hidden="true">#</a> 9，水平垂直居中</h2><ol><li><p>position + margin/transform</p></li><li><p>flex + justify-content + align-items</p></li></ol><h2 id="_10-圣杯布局" tabindex="-1"><a class="header-anchor" href="#_10-圣杯布局" aria-hidden="true">#</a> 10，圣杯布局</h2><ol><li>圣杯布局是来源于该布局效果类似圣杯而得名。简单来说，就是指三行三列布局</li><li>圣杯布局核心：主要是实现中间主体部分中的左右定宽+中间自适应的布局效果</li><li>center 要放在前面原因是在样式加载慢或无样式的时候先向用户呈现主要内容</li></ol><p>三列布局，上中下固定，中间部分左右固定宽度，中间内容自适应</p><p><img src="' + _imports_21 + '" alt="image-20230830212522322"></p><ul><li>浮动 + position + margin</li><li>flex布局</li></ul><p><img src="' + _imports_22 + '" alt="image-20230830212531918"></p><h2 id="_11-双飞翼布局" tabindex="-1"><a class="header-anchor" href="#_11-双飞翼布局" aria-hidden="true">#</a> 11，双飞翼布局</h2><ol><li>双飞翼布局最早是淘宝团队提出，是针对圣杯布局的优化解决方案。 主要是优化了圣杯布局中开启定位的问题。</li></ol><p>左右固定，中间内容自适应大小。</p><ul><li>float</li></ul><p><img src="' + _imports_23 + '" alt="image-20230830212608853"></p><h2 id="_12-全屏布局" tabindex="-1"><a class="header-anchor" href="#_12-全屏布局" aria-hidden="true">#</a> 12，全屏布局</h2><ol><li>全屏布局就是指HTML页面铺满整个浏览器窗口，并且没有滚动条。而且还可以跟着浏览器的大小变化而变化；</li></ol><p>页面铺满整个窗口，没有滚动条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Header  头部撑满，固定高度\nLeft\nRight\nFooter\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n        <span class="token selector">*</span> <span class="token punctuation">{</span>\n            <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n            <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token selector">header</span> <span class="token punctuation">{</span>\n            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>\n            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token selector">footer</span> <span class="token punctuation">{</span>\n            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n            <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n            <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token selector">.content</span> <span class="token punctuation">{</span>\n            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>\n            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n            <span class="token property">right</span><span class="token punctuation">:</span> 0\n        <span class="token punctuation">}</span>\n\n        <span class="token selector">.content .left</span> <span class="token punctuation">{</span>\n            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n            <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token selector">.content .right</span> <span class="token punctuation">{</span>\n            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n            <span class="token property">background-color</span><span class="token punctuation">:</span> lawngreen<span class="token punctuation">;</span>\n            <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n            <span class="token property">left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n            <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="' + _imports_24 + '" alt="image-20230830212656308"></p><h1 id="十一-实战" tabindex="-1"><a class="header-anchor" href="#十一-实战" aria-hidden="true">#</a> 十一，实战</h1><p>https://yujingbo1023.github.io/xm/</p><p>小米商城演示</p><p>CSS 复习</p><p><img src="' + _imports_25 + '" alt="image-20231012222412999"></p><hr>', 94);
const _hoisted_95 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_95);
}
const day05_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "day-05.html.vue"]]);
export {
  day05_html as default
};
