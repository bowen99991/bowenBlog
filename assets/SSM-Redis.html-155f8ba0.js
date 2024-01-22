import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-0d7592ba.js";
const _imports_0 = "/bowenBlog/assets/image-20240115104646427-4121d417.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="一-redis-简介" tabindex="-1"><a class="header-anchor" href="#一-redis-简介" aria-hidden="true">#</a> 一, Redis 简介</h2><hr><h3 id="_1-什么是-redis" tabindex="-1"><a class="header-anchor" href="#_1-什么是-redis" aria-hidden="true">#</a> 1, 什么是 redis</h3><p><strong>Redis</strong>是由C语言编写的开源、基于内存、支持多种数据结构、高性能的<strong>Key-Value</strong>数据库。</p><p>Redis（Remote Dictionary Server）是一个开源的内存数据库和缓存系统，它以键值对（key-value）的形式存储数据。Redis支持多种数据结构，包括字符串、哈希表、列表、集合和有序集合等。</p><p>Redis被设计为高性能的键值存储系统，它的数据存储在内存中，因此具有非常快速的读写速度。同时，Redis还提供了持久化功能，可以将内存中的数据定期写入磁盘，以防止数据丢失。</p><p>Redis还具备其他功能，如发布订阅系统、事务支持、Lua脚本执行、分布式锁和地理空间索引等。它的特点包括简单、灵活、可扩展和高性能，使得它在缓存、会话存储、排行榜、消息队列、实时统计和分布式应用等场景中被广泛使用。</p><p>Redis提供了多种语言的客户端库，使得开发者可以使用各种编程语言与Redis进行交互，包括Java、Python、Node.js、C#等。通过这些客户端库，开发者可以方便地连接到Redis服务器并执行各种操作，如设置键值对、获取值、执行命令等。</p><p><strong>总结</strong></p><p>Redis是一个功能丰富、高性能的键值存储系统，广泛应用于缓存、数据存储和分布式应用等场景，以提供快速、可靠的数据存储和访问。</p><p><strong>Spring版本</strong></p><p>Spring 6</p><h2 id="二-ioc-和-di" tabindex="-1"><a class="header-anchor" href="#二-ioc-和-di" aria-hidden="true">#</a> 二, IOC 和 DI</h2><hr><h3 id="_1-ioc-入门案例" tabindex="-1"><a class="header-anchor" href="#_1-ioc-入门案例" aria-hidden="true">#</a> 1, IOC 入门案例</h3><p>入门案例思路分析</p><ol><li>管理什么？(Service与Dao)</li><li>如何将被管理的对象告知IOC容器？(配置文件)</li><li>被管理的对象交给IOC容器，如何获取到IoC容器？(接口)</li><li>IOC容器得到后，如何从容器中获取bean？(接口方法)</li><li>使用Spring导入哪些坐标？(pom.xml)</li></ol><h4 id="_1-引入spring框架" tabindex="-1"><a class="header-anchor" href="#_1-引入spring框架" aria-hidden="true">#</a> 1, 引入Spring框架</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!--导入spring的坐标spring-context，对应版本是5.2.10.RELEASE--&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-引入spring管理类的接口" tabindex="-1"><a class="header-anchor" href="#_2-引入spring管理类的接口" aria-hidden="true">#</a> 2, 引入Spring管理类的接口</h4><h4 id="_3-创建spring配置文件-配置对应类作为spring管理的bean对象" tabindex="-1"><a class="header-anchor" href="#_3-创建spring配置文件-配置对应类作为spring管理的bean对象" aria-hidden="true">#</a> 3, 创建Spring配置文件，配置对应类作为Spring管理的bean对象</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>// 定义applicationContext.xml配置文件并配置BookServiceImpl\n\n<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>\n       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>\n       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n \n    <span class="token comment">&lt;!--\n		bean标签：表示配置bean\n    id属性：表示给bean起名字，bean定义时id属性在同一个上下文中(IOC容器中)不能重复\n    class属性：表示给bean定义类型\n	--&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>交给Spring管理这两个对象, Spring内部帮我们创建对应的对象, 并且放在Spring的容器中</p></blockquote><h4 id="_4-初始化ioc容器" tabindex="-1"><a class="header-anchor" href="#_4-初始化ioc容器" aria-hidden="true">#</a> 4, 初始化IOC容器</h4><p>（Spring核心容器/Spring容器），通过容器获取Bean对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//1.创建IoC容器对象，加载spring核心配置文件</span>\n        <span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//2 从IOC容器中获取Bean对象(BookDao对象)</span>\n        <span class="token class-name">BookDao</span> bookDao<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookDao</span><span class="token punctuation">)</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookDao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BookService</span> bookService<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//3 调用Bean对象(BookDao对象)的方法</span>\n        bookDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        bookService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-di入门案例" tabindex="-1"><a class="header-anchor" href="#_2-di入门案例" aria-hidden="true">#</a> 2，DI入门案例</h3><p>DI入门案例思路分析</p><ol><li>基于IOC管理bean</li><li>Service中使用new形式创建的Dao对象是否保留？(否)</li><li>Service中需要的Dao对象如何进入到Service中？(提供方法)</li><li>Service与Dao间的关系如何描述？(配置)</li></ol><p>下面的代码是基于上面案例的基础上实现的。</p><p>实现步骤</p><h4 id="_1-打算按时" tabindex="-1"><a class="header-anchor" href="#_1-打算按时" aria-hidden="true">#</a> 1, 打算按时</h4><h4 id="_2-在applicationcontext-xml中配置service与dao之间的关系" tabindex="-1"><a class="header-anchor" href="#_2-在applicationcontext-xml中配置service与dao之间的关系" aria-hidden="true">#</a> 2, 在applicationContext.xml中配置service与dao之间的关系</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>\n       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>\n       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!--\n		bean标签：表示配置bean\n    	id属性：表示给bean起名字\n    	class属性：表示给bean定义类型\n	--&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!--配置server与dao的关系\n			property标签：表示配置当前bean的属性\n        	name属性：表示配置哪一个具体的属性。name属性对应setXxx方法去掉set后首字母小写部分。\n        	ref属性：表示参照哪一个bean\n		--&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>bean 配置当前bean的属性</p></blockquote><h2 id="三-bean-的基础配置" tabindex="-1"><a class="header-anchor" href="#三-bean-的基础配置" aria-hidden="true">#</a> 三, Bean 的基础配置</h2><hr><h3 id="_1-bean的基础配置" tabindex="-1"><a class="header-anchor" href="#_1-bean的基础配置" aria-hidden="true">#</a> 1, Bean的基础配置</h3><p><img src="' + _imports_0 + '" alt="image-20240115104646427"></p><p>参考：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-bean的别名配置" tabindex="-1"><a class="header-anchor" href="#_2-bean的别名配置" aria-hidden="true">#</a> 2, Bean的别名配置</h3><p>下面的代码还是基于上面的案例实现的。</p><p>别名配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--name:为bean指定别名，别名可以有多个，使用逗号，分号，空格进行分隔--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dao bookDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>service,bookServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.malu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码示例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//BookService bookService= (BookService)ctx.getBean(&quot;service&quot;);</span>\n        <span class="token class-name">BookService</span> bookService<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookServiceImpl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        bookService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果名字不存在，会报如下的错误</p><h3 id="_3-bean作用范围配置" tabindex="-1"><a class="header-anchor" href="#_3-bean作用范围配置" aria-hidden="true">#</a> 3, Bean作用范围配置</h3><p>作用范围配置：</p><p>​</p><p><strong>结论</strong></p><blockquote><p>从容器中获取的对象, 是同一个对象 ; 所以默认情况下, Spring放置的对象是单例的,</p><p>如果需要配置多例, 需要配置 scoped 属性</p></blockquote><p>注意细节：</p><ul><li>在我们的实际开发当中，绝大部分的Bean是单例的，也就是说绝大部分Bean不需要配置scope属性。</li><li>适合交给容器进行管理的Bean有：表现层对象，业务层对象，数据层对象，工具对象</li><li>不适合交给容器进行管理的Bean有：封装实体的域对象</li></ul><h2 id="四-bean-的实例化" tabindex="-1"><a class="header-anchor" href="#四-bean-的实例化" aria-hidden="true">#</a> 四, Bean 的实例化</h2><hr><p>bean本质就是对象。创建出这个对象有多种方式。</p><h3 id="_1-构造方法实例化" tabindex="-1"><a class="header-anchor" href="#_1-构造方法实例化" aria-hidden="true">#</a> 1, 构造方法实例化</h3><p>bean本质上就是对象，<strong>创建bean使用构造方法完成</strong>。BookDaoImpl实现类如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">BookDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;book dao constructor is running ....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;book dao save ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml配置：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--方式一：构造方法实例化bean--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.itheima.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="_2-静态工厂方式实例化" tabindex="-1"><a class="header-anchor" href="#_2-静态工厂方式实例化" aria-hidden="true">#</a> 2, 静态工厂方式实例化</h3><h3 id="_3-实例工厂方式实例化" tabindex="-1"><a class="header-anchor" href="#_3-实例工厂方式实例化" aria-hidden="true">#</a> 3, 实例工厂方式实例化</h3><h3 id="_4-通过-factorybean-创建对象" tabindex="-1"><a class="header-anchor" href="#_4-通过-factorybean-创建对象" aria-hidden="true">#</a> 4, 通过 FactoryBean 创建对象</h3>', 68);
const _hoisted_69 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_69);
}
const SSMRedis_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SSM-Redis.html.vue"]]);
export {
  SSMRedis_html as default
};
