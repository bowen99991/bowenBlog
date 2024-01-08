import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-760425e8.js";
const _imports_0 = "/bowenBlog/assets/image-20240104092016354-cc76e3f8.png";
const _imports_1 = "/bowenBlog/assets/image-20240104092217966-68628eb6.png";
const _imports_2 = "/bowenBlog/assets/image-20240104112834521-feafbf77.png";
const _imports_3 = "/bowenBlog/assets/image-20240104112905075-55ee85f3.png";
const _imports_4 = "/bowenBlog/assets/image-20240104092731596-78b0c434.png";
const _imports_5 = "/bowenBlog/assets/image-20240104093021578-bd9b6ec3.png";
const _imports_6 = "/bowenBlog/assets/image-20240104114024318-854146aa.png";
const _imports_7 = "/bowenBlog/assets/image-20240104093255319-2bdc5f97.png";
const _imports_8 = "/bowenBlog/assets/image-20240104093341397-9ba89c8c.png";
const _imports_9 = "/bowenBlog/assets/image-20240104114348034-b91391d1.png";
const _imports_10 = "/bowenBlog/assets/image-20240104114523048-2e9fb944.png";
const _imports_11 = "/bowenBlog/assets/image-20240104095421286-086d7e9b.png";
const _imports_12 = "/bowenBlog/assets/image-20240104114557901-8cf7056b.png";
const _imports_13 = "/bowenBlog/assets/image-20240104114652602-b78253ac.png";
const _imports_14 = "/bowenBlog/assets/image-20240104114807727-1a6dbc89.png";
const _imports_15 = "/bowenBlog/assets/image-20240104114843129-b4f5cc92.png";
const _imports_16 = "/bowenBlog/assets/image-20240104114905421-cddd5f45.png";
const _imports_17 = "/bowenBlog/assets/image-20240104114924953-5e29e22c.png";
const _imports_18 = "/bowenBlog/assets/image-20240104105019338-3d4e1598.png";
const _imports_19 = "/bowenBlog/assets/image-20240104115326425-e9e8c717.png";
const _imports_20 = "/bowenBlog/assets/image-20240104115438044-adbb8c60.png";
const _imports_21 = "/bowenBlog/assets/image-20240104115507882-dcf31847.png";
const _imports_22 = "/bowenBlog/assets/image-20240104130718412-5f43c1d1.png";
const _imports_23 = "/bowenBlog/assets/image-20240104130731936-71ffa59b.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="一-maven-介绍" tabindex="-1"><a class="header-anchor" href="#一-maven-介绍" aria-hidden="true">#</a> 一, Maven 介绍</h2><h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1, 介绍</h3><p>Apache Maven 是一个项目管理和构建工具，它基于项目对象模型(POM)的概念，通过一小段描述信息来管理项目的构建、报告和文档。官网：http://maven.apache.org/</p><p><strong>Maven是专门用于管理和构建Java项目的工具</strong>，它的主要功能有：</p><ul><li>提供了一套标准化的项目结构，所有IDE使用Maven构建的项目结构完全一样，所有IDE创建的Maven项目可以通用</li><li>提供了一套标准化的构建流程（<strong>编译</strong>，<strong>测试</strong>，<strong>打包</strong>，<strong>发布</strong>……）</li><li>提供了一套<strong>依赖管理机制</strong></li></ul><p><img src="' + _imports_0 + '" alt="image-20240104092016354"></p><p><img src="' + _imports_1 + '" alt="image-20240104092217966"></p><h3 id="_2-maven-模型" tabindex="-1"><a class="header-anchor" href="#_2-maven-模型" aria-hidden="true">#</a> 2, Maven 模型</h3><p>Maven 模型：</p><p><img src="' + _imports_2 + '" alt="image-20240104112834521"></p><p>说明：</p><ul><li>项目对象模型 (Project Object Model)</li><li>依赖管理模型(Dependency)</li><li>插件(Plugin)</li></ul><h3 id="_3-仓库" tabindex="-1"><a class="header-anchor" href="#_3-仓库" aria-hidden="true">#</a> 3, 仓库</h3><p><img src="' + _imports_3 + '" alt="image-20240104112905075"></p><p>仓库分类：</p><ul><li>本地仓库：自己计算机上的一个目录</li><li>中央仓库：由Maven团队维护的全球唯一的仓库，地址：https://repo1.maven.org/maven2/</li><li>远程仓库(私服)：一般由公司团队搭建的私有仓库</li></ul><p>当项目中使用坐标引入对应依赖jar包后，<strong>首先会查找本地仓库中是否有对应的jar包</strong>：</p><ul><li>如果有，则在项目直接引用;</li><li><strong>如果没有，则去中央仓库中下载对应的jar包到本地仓库</strong>。</li></ul><p>还可以搭建远程仓库，将来jar包的查找顺序则变为：</p><ul><li>本地仓库=&gt;远程仓库=&gt;中央仓库</li></ul><h2 id="二-maven安装和配置" tabindex="-1"><a class="header-anchor" href="#二-maven安装和配置" aria-hidden="true">#</a> 二, Maven安装和配置</h2><h3 id="_1-安装和配置" tabindex="-1"><a class="header-anchor" href="#_1-安装和配置" aria-hidden="true">#</a> 1, 安装和配置</h3><p>配置步骤如下：</p><ul><li><p>解压 apache-maven-3.6.1.rar 既安装完成 (可以放在 D盘等)</p></li><li><p><strong>配置环境变量</strong> MAVEN_HOME 为安装路径的bin目录</p><ul><li><p><img src="' + _imports_4 + '" alt="image-20240104092731596"></p></li><li><p>配置Java 的path环境<img src="' + _imports_5 + '" alt="image-20240104093021578"></p></li><li><p>JAVA_HOME也配置一下，没有就点击新建<img src="' + _imports_6 + '" alt="image-20240104114024318"></p></li></ul></li><li><p><strong>配置本地仓库</strong>：修改 conf/settings.xml 中的 localRepository 为一个指定目录</p><ul><li><img src="' + _imports_7 + '" alt="image-20240104093255319"></li><li><img src="' + _imports_8 + '" alt="image-20240104093341397"></li></ul></li><li><p>配置阿里云私服：修改 conf/settings.xml 中的 mirrors标签，为其添加如下子标签：</p></li></ul><p>配置阿里云私服(更换阿里源)：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>  \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>  \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>  \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>          \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-maven-的基本使用" tabindex="-1"><a class="header-anchor" href="#三-maven-的基本使用" aria-hidden="true">#</a> 三, Maven 的基本使用</h2><h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1, 基本使用</h3><p>常用命令：</p><ul><li>compile ：编译</li><li>clean：清理</li><li>test：测试</li><li>package：打包</li><li>install：安装</li></ul><p>生命周期讲解：Maven 构建项目生命周期描述的是一次构建过程经历经历了多少个事件。Maven 对项目构建的生命周期划分为3套：</p><ul><li>clean：清理工作</li><li>default：核心工作，例如编译，测试，打包，安装等</li><li>site：产生报告，发布站点等</li></ul><p><strong>idea 右侧 Maven 的目录结构</strong></p><p><img src="' + _imports_9 + '" alt="image-20240104114348034"></p><h2 id="四-idea配置maven" tabindex="-1"><a class="header-anchor" href="#四-idea配置maven" aria-hidden="true">#</a> 四, IDEA配置Maven</h2><h3 id="_1-idea配置maven环境" tabindex="-1"><a class="header-anchor" href="#_1-idea配置maven环境" aria-hidden="true">#</a> 1, IDEA配置Maven环境</h3><p>第一步：选择 IDEA中 File =&gt; Settings</p><p><img src="' + _imports_10 + '" alt="image-20240104114523048"></p><p>创建 Maven 的项目结构</p><p><img src="' + _imports_11 + '" alt="image-20240104095421286"></p><h3 id="_2-maven坐标详解" tabindex="-1"><a class="header-anchor" href="#_2-maven坐标详解" aria-hidden="true">#</a> 2, Maven坐标详解</h3><p>什么是坐标？</p><ul><li><strong>Maven 中的坐标是资源的唯一标识</strong></li><li>使用坐标来定义项目或引入项目中需要的依赖</li></ul><p>Maven 坐标主要组成</p><ul><li>groupId：定义当前Maven项目隶属组织名称（通常是域名反写，例如：com.malu）</li><li>artifactId：定义当前Maven项目名称（通常是模块名称，例如 order-service、goods-service）</li><li>version：定义当前项目版本号</li></ul><p><img src="' + _imports_12 + '" alt="image-20240104114557901"></p><h3 id="_3-idea创建基于maven的项目" tabindex="-1"><a class="header-anchor" href="#_3-idea创建基于maven的项目" aria-hidden="true">#</a> 3, IDEA创建基于Maven的项目</h3><p>第一步：先创建一个空的项目，并配置JDK</p><p><img src="' + _imports_13 + '" alt="image-20240104114652602"></p><p>第二步：创建模块，选择Maven，点击Next</p><p>第三步：填写模块名称，坐标信息，点击finish，创建完成</p><p><img src="' + _imports_14 + '" alt="image-20240104114807727"></p><p>创建完毕后，对应的目录结构如下：</p><p><img src="' + _imports_11 + '" alt="image-20240104095421286"></p><p>编写 HelloWorld，并运行</p><h3 id="_4-idea导入别人的maven项目" tabindex="-1"><a class="header-anchor" href="#_4-idea导入别人的maven项目" aria-hidden="true">#</a> 4, IDEA导入别人的Maven项目</h3><p>第一步：选择右侧Maven面板，点击 + 号</p><p><img src="' + _imports_15 + '" alt="image-20240104114843129"></p><p>第二步：选中对应项目的pom.xml文件，双击即可</p><p><img src="' + _imports_16 + '" alt="image-20240104114905421"></p><p>第三步：<strong>如果没有Maven面板</strong>，选择View=&gt;Appearance=&gt;Tool Window Bars</p><p><img src="' + _imports_17 + '" alt="image-20240104114924953"></p><h3 id="_5-dea配置maven插件" tabindex="-1"><a class="header-anchor" href="#_5-dea配置maven插件" aria-hidden="true">#</a> 5, DEA配置Maven插件</h3><p>第一步：选择 IDEA中 File --&gt; Settings</p><p>第二步：选择 Plugins</p><p>第三步：搜索 Maven，选择第一个 Maven Helper，点击Install安装，弹出面板中点击Accept</p><p>第四步：重启 IDEA</p><h2 id="五-依赖管理" tabindex="-1"><a class="header-anchor" href="#五-依赖管理" aria-hidden="true">#</a> 五, 依赖管理</h2><h3 id="_1-使用坐标导入jar包" tabindex="-1"><a class="header-anchor" href="#_1-使用坐标导入jar包" aria-hidden="true">#</a> 1, 使用坐标导入jar包</h3><p>依赖坐标：https://mvnrepository.com/</p><p>使用步骤：</p><p>第一步：在 pom.xml 中编写 dependencies标签</p><p>第二步：在 dependencies 标签中 使用 dependency引入坐标，定义坐标的 groupId，artifactId，version。点击刷新按钮，使坐标生效</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在标签中填入相关坐标信息, 点击刷新即安装 jar包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_18 + '" alt="image-20240104105019338"></p><p>从maven面板中查看：</p><p><img src="' + _imports_19 + '" alt="image-20240104115326425"></p><h3 id="_2-快捷键方式" tabindex="-1"><a class="header-anchor" href="#_2-快捷键方式" aria-hidden="true">#</a> 2, 快捷键方式</h3><p>第一步：在 pom.xml 中 按 alt + insert，选择 Dependency</p><p>第二步：在弹出的面板中搜索对应坐标，然后双击选中对应坐标</p><p>第三步：点击刷新按钮，使坐标生效</p><h3 id="_3-依赖范围" tabindex="-1"><a class="header-anchor" href="#_3-依赖范围" aria-hidden="true">#</a> 3, 依赖范围</h3><p>通过设置坐标的依赖范围(scope)，可以设置 对应jar包的作用范围：编译环境、测试环境、运行环境。</p><p>通过设置坐标的依赖范围(scope)，可以设置 对应jar包的作用范围：编译环境、测试环境、运行环境。</p><p><img src="' + _imports_20 + '" alt="image-20240104115438044"></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.19<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖范围解释（scope默认值：compile）：</p><p><img src="' + _imports_21 + '" alt="image-20240104115507882"></p><h2 id="六-maven构建项目" tabindex="-1"><a class="header-anchor" href="#六-maven构建项目" aria-hidden="true">#</a> 六, Maven构建项目</h2><h3 id="_1-maven构建项目" tabindex="-1"><a class="header-anchor" href="#_1-maven构建项目" aria-hidden="true">#</a> 1，Maven构建项目</h3><p>常用命令：</p><ul><li>compile ：编译</li><li>clean：清理</li><li>test：测试</li><li>package：打包</li><li>install：安装</li></ul><p><strong>生命周期</strong>讲解：Maven 构建项目生命周期描述的是一次构建过程经历经历了多少个事件。Maven 对项目构建的生命周期划分为3套：</p><ul><li>clean：清理工作</li><li>default：核心工作，例如<strong>编译</strong>，<strong>测试</strong>，<strong>打包</strong>，<strong>安装</strong>等</li><li>site：产生报告，发布站点等</li></ul><p><img src="' + _imports_22 + '" alt="image-20240104130718412"></p><p>default构建生命周期：</p><p><img src="' + _imports_23 + '" alt="image-20240104130731936"></p><p>演示编译命令：</p><p>演示清理命令：</p><p>演示测试命令：</p><p>演示打包命令：</p><p>演示安装命令，所谓的安装，就是把你写的项目安装到本地仓库：</p>', 105);
const _hoisted_106 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_106);
}
const JavaMavenjichu_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java-Mavenjichu.html.vue"]]);
export {
  JavaMavenjichu_html as default
};
