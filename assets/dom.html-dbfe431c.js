import{_ as n,o as s,c as a,d as t}from"./app-f7daed6a.js";const e="/bowenBlog/assets/image-20230911193940526-9258a128.png",l={},p=t(`<hr><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1><h2 id="_1-dom介绍" tabindex="-1"><a class="header-anchor" href="#_1-dom介绍" aria-hidden="true">#</a> 1. DOM介绍</h2><hr><p>1.1 认识DOM</p><p><strong>JavaScript是一门编程语言，它的运行环境有两个，一个是浏览器，一个是node，前面我们学的JS必于ECMAScript中的语法，浏览器的JS有三部分组成：</strong></p><ul><li>ECMAScript</li><li>DOM</li><li>BOM</li></ul><blockquote><p>ECMAScript并不能和和网页进行交互，操作浏览器（网页），就需要给我们提供一个API，我们去调用API，实现操作，学习DOM和BOM就是学习浏览器给我们提供的API，所以说，DOM和BOM操作，也叫WebAPI。</p></blockquote><p><strong>深入理解DOM</strong></p><ul><li>浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象</li><li>所有这些对象都可以通过JavaScript来对其进行访问，那么我们就可以通过JavaScript来操作页面</li><li>将这个抽象过程称之为 文档对象模型（Document Object Model）</li></ul><p><strong>DOM：Docuemnt Object Model 文档对象模型</strong></p><ul><li>文档：html文档 之前的html文件就可以称一个文档</li><li>Object: 对象 一切都是对象 所有的元素都是对象</li><li>Model：模型 树模型 所有的元素，要形成一个树模型</li></ul><p><strong>整个文档被抽象到 document 对象中</strong></p><ul><li>如document.documentElement对应的是html元素</li><li>如document.body对应的是body元素</li><li>如document.head对应的是head元素</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 下面的一行代码可以让整个页面变成红色</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&quot;gold&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DOM树</strong></p><ul><li>在html结构中，最终会形成一个树结构</li></ul><p><img src="`+e+`" alt="image-20230911193940526"></p><p>1.2 重新认识window</p><p><strong>前面我们学习了一个window的全局对象，window上事实上就包含了这些内容</strong></p><ul><li>JavaScript语法部分的Object、Array、Date等</li><li>DOM</li><li>BOM</li></ul><h2 id="_2-document对象" tabindex="-1"><a class="header-anchor" href="#_2-document对象" aria-hidden="true">#</a> 2. document对象</h2><p><strong>Document节点表示的整个载入的网页，它的实例是全局的document对象</strong></p><ul><li>对DOM的所有操作都是从 document 对象开始的</li><li>它是DOM的 入口点，可以从document开始去访问任何节点元素</li></ul><p><strong>对于最顶层的html、head、body元素，我们可以直接在document对象中获取到</strong></p><ul><li>document.documentElement 得到 html元素</li><li>document.body 得到 body元素</li><li>document.head 得到 head元素</li><li>document.doctype 得到 文档声明元素</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// document是内置对象  也是GO中的</span>
        <span class="token comment">// 一个节点就是一个对象</span>
        <span class="token comment">// 对象是属性和方法的无序集合  api</span>
        <span class="token comment">// 学习DOM操作就学习一个对象中的属性或方法  api</span>
        <span class="token comment">// console.dir(document);</span>

        <span class="token comment">// 获取head元素节点</span>
        <span class="token comment">// console.log(document.head);</span>

        <span class="token comment">// 获取title元素节点中的文本节点</span>
        <span class="token comment">// console.log(document.title);</span>

        <span class="token comment">// 获取body元素节点</span>
        <span class="token comment">// console.log(document.body);</span>

        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;Hello DOM&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-节点与节点关系" tabindex="-1"><a class="header-anchor" href="#_3-节点与节点关系" aria-hidden="true">#</a> 3. 节点与节点关系</h2><p><strong>节点分类：</strong></p><ul><li>元素节点</li><li>文本节点</li><li>属性节点</li><li>注释节点</li><li>...</li></ul><p><strong>注意点：</strong></p><ul><li>在DOM树上，只需要关注元素节点和文本节点，在DOM上，没有属性节点。</li><li>我们只需要关注三种节点：1）元素节点 2）文本节点 3）属性节点</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我是一个注释 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>haha<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个DIV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度一下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// nodeType判断一个节点的类型</span>
        <span class="token comment">// 如果是元素节点  它的nodeType是1</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1 </span>

        <span class="token comment">// 要获取属性节点，必须先得到元素节点</span>
        <span class="token comment">// 通过打点的形式，就可以获取属性节点</span>
        <span class="token comment">// console.log(oDiv.title); // haha</span>

        <span class="token comment">// getAttribute 根据属性名获取属性值的</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// haha</span>
        <span class="token comment">// getAttributeNode 获取属性节点</span>
        <span class="token keyword">let</span> attr <span class="token operator">=</span> oDiv<span class="token punctuation">.</span><span class="token function">getAttributeNode</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> text <span class="token operator">=</span> oDiv<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 我是一个DIV</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点之间的关系一：</strong>**</p><ul><li>获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的关系</li><li>父节点：parentNode</li><li>前兄弟节点：previousSibling</li><li>后兄弟节点：nextSibling</li><li>子节点：childNodes</li><li>第一个子节点：firstChild</li><li>最后一个子节点：lastChild</li></ul><p><strong>节点之间的关系二：</strong></p><ul><li>获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的关系</li><li>父节点：parentElement</li><li>前兄弟节点：previousElementSibling</li><li>后兄弟节点：nextElementSibling</li><li>子节点：children</li><li>第一个子节点：firstElementChild</li><li>最后一个子节点：lastElementChild</li></ul><p><strong>节点关系总结（加粗的是需要记的）：</strong></p><ul><li><strong>parentNode</strong> 获取父元素节点 没有兼容性问题</li><li><strong>parentElement</strong> 获取父元素节点 没有兼容性问题</li><li>firstChild 获取第一个子节点 会考虑换行节点和注释节点 不要用</li><li><strong>firstElementChild</strong> 获取第一个子元素节点 可以使用</li><li>lastChild 获取最后一个子节点 会考虑换行节点和注释节点 不要用</li><li><strong>lastElementChild</strong> 获取最后一个子元素节点 可以使用</li><li>nextSibling 获取下一个兄弟节点 会考虑换行节点和注释节点 不要用</li><li><strong>nextElementSibling</strong> 获取下一个兄弟元素节点 可以使用</li><li>previousSibling 获取上一个兄弟节点 会考虑换行节点和注释节点 不要用</li><li><strong>previousElementSibling</strong> 获取上一个兄弟元素节点 可以使用</li></ul><h2 id="_4-获取元素节点的方法" tabindex="-1"><a class="header-anchor" href="#_4-获取元素节点的方法" aria-hidden="true">#</a> 4. 获取元素节点的方法</h2><p>通过节点关系可以得到某个元素，但是，在实际开发中，我们希望可以任意的获取到某一个元素应该如何操作呢？</p><p><strong>DOM为我们提供了获取元素的方法：</strong></p><p><strong>最常用的几个方法如下：</strong></p><ul><li>document.getElementById</li><li>document.getElementsByTagName</li><li>document.querySelectorAll</li><li>document.querySelector</li></ul><h2 id="_5-节点的属性" tabindex="-1"><a class="header-anchor" href="#_5-节点的属性" aria-hidden="true">#</a> 5. 节点的属性</h2><p>​ 5,1节点的属性之nodeType</p><p><strong>不同的节点类型有可能有不同的属性，但它们有共有属性：</strong></p><ul><li>nodeType 属性提供了一种获取节点类型的方法</li><li>其他类型可以查看MDN文档： https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType</li></ul><p><strong>常见的节点类型有如下：</strong></p><p>5,2节点的属性之nodeName</p><ul><li>nodeName：获取node节点的名字；</li><li>tagName：获取元素的标签名词；</li></ul><p><strong>tagName 和 nodeName 之间有什么不同呢？</strong></p><ul><li>tagName 属性仅适用于 Element 节点；</li><li>nodeName 是为任意 Node 定义的</li><li>nodeName 对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；</li><li>nodeName 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；</li></ul><p>5.3 节点的属性之innerHTML和textContent</p><p><strong>innerHTML 属性</strong></p><ul><li>将元素中的 HTML 获取为字符串形式</li><li>设置元素中的内容；</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我是一个注释 --&gt;</span>
    我是文本
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是一个H2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> bodyChildNodes <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
        <span class="token keyword">let</span> commentNode <span class="token operator">=</span> bodyChildNodes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> textNode <span class="token operator">=</span> bodyChildNodes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> divNode <span class="token operator">=</span> bodyChildNodes<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取div标签中的内容</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>divNode<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置div标签中的内容</span>
        divNode<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;strong&gt;我是一个Strong标签&lt;/strong&gt;&quot;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>outerHTML 属性</strong></p><ul><li>包含了元素的完整 HTML</li><li>innerHTML 加上元素本身一样；</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 我是一个注释 --&gt;</span>
    我是文本
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是一个H2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">let</span> bodyChildNodes <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
        <span class="token keyword">let</span> divNode <span class="token operator">=</span> bodyChildNodes<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取div标签中的内容  outerHTML相比innerHTML来说，带上自己本身</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>divNode<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 对于设置来说，使用innerHTML多一点</span>
        divNode<span class="token punctuation">.</span>outerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;strong&gt;我是一个Strong标签&lt;/strong&gt;&quot;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>textContent 属性</strong></p><ul><li>仅仅获取元素中的文本内容；</li></ul><p><strong>innerHTML和textContent的区别：</strong></p><ul><li>使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。</li><li>使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。</li></ul><p>5.4 节点的属性之nodeValue</p><ul><li>用于获取非元素节点的文本内容</li></ul><p>5.5 节点的属性之hidden</p><ul><li>用于设置元素隐藏</li></ul><h2 id="_6-创建和挂载节点" tabindex="-1"><a class="header-anchor" href="#_6-创建和挂载节点" aria-hidden="true">#</a> 6. 创建和挂载节点</h2><p><strong>我们想要插入一个元素，通常会按照如下步骤：</strong></p><ul><li>步骤一：创建一个元素；</li><li>步骤二：插入元素到DOM的某一个位置；</li></ul><p><strong>创建节点：</strong></p><ul><li>createElement 创建元素节点</li><li>createTextNode 创建文本节点</li><li>createComment 创建注释节点</li><li>createAttribute 创建属性节点</li></ul><p><strong>挂载节点：</strong></p><ul><li>node.append(...nodes or strings) —— 在 node 末尾 插入节点或字符串，</li><li>node.prepend(...nodes or strings) —— 在 node 开头 插入节点或字符串，</li><li>node.before(...nodes or strings) —— 在 node 前面 插入节点或字符串，</li><li>node.after(...nodes or strings) —— 在 node 后面 插入节点或字符串，</li><li>node.replaceWith(...nodes or strings) —— 将 node 替换为给定的节点或字符串。</li></ul><h2 id="_7-删除-替换-克隆节点" tabindex="-1"><a class="header-anchor" href="#_7-删除-替换-克隆节点" aria-hidden="true">#</a> 7. 删除，替换，克隆节点</h2><p><strong>删除节点：</strong></p><ul><li>removeChild 只有父元素才有资格删除一个子元素</li><li>remove 移除元素我们可以调用元素本身的remove方法：</li></ul><p><strong>替换节点：</strong></p><ul><li>replaceChild</li></ul><p><strong>如果我们想要复制一个现有的元素，可以通过cloneNode方法克隆节点：</strong></p><ul><li>可以传入一个Boolean类型的值，来决定是否是深度克隆；</li><li>深度克隆会克隆对应元素的子元素，否则不会</li></ul>`,82),o=[p];function i(c,u){return s(),a("div",null,o)}const r=n(l,[["render",i],["__file","dom.html.vue"]]);export{r as default};
