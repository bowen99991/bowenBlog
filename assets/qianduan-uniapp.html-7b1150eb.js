import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-01d350d9.js";
const _imports_0 = "/bowenBlog/assets/image-20231120212822534-4468b539.png";
const _imports_1 = "/bowenBlog/assets/image-20231120164055042-de82cee8.png";
const _imports_2 = "/bowenBlog/assets/image-20231120213437253-4f944a0c.png";
const _imports_3 = "/bowenBlog/assets/image-20231120213533073-f02050c8.png";
const _imports_4 = "/bowenBlog/assets/image-20231120213632254-2dbc6ab1.png";
const _imports_5 = "/bowenBlog/assets/image-20231120213815687-ea1ac565.png";
const _imports_6 = "/bowenBlog/assets/image-20231120214131321-13c32ee5.png";
const _imports_7 = "/bowenBlog/assets/image-20231120214331351-534c62e5.png";
const _imports_8 = "/bowenBlog/assets/image-20231120214700337-663bb692.png";
const _imports_9 = "/bowenBlog/assets/image-20231120214734956-db6db194.png";
const _imports_10 = "/bowenBlog/assets/image-20231120214803570-0248f93c.png";
const _imports_11 = "/bowenBlog/assets/image-20231120214821080-dd214330.png";
const _imports_12 = "/bowenBlog/assets/image-20231120214940530-a14a7f57.png";
const _imports_13 = "/bowenBlog/assets/image-20231120215011012-13ba94a3.png";
const _imports_14 = "/bowenBlog/assets/image-20231120215027369-3115f264.png";
const _imports_15 = "/bowenBlog/assets/image-20231120215037837-97703b4d.png";
const _imports_16 = "/bowenBlog/assets/image-20231120215104037-542d76e0.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="一-uniapp-介绍" tabindex="-1"><a class="header-anchor" href="#一-uniapp-介绍" aria-hidden="true">#</a> 一, uniapp 介绍</h2><hr><h3 id="_1-产品分类" tabindex="-1"><a class="header-anchor" href="#_1-产品分类" aria-hidden="true">#</a> 1, 产品分类</h3><p><strong>web开发：</strong></p><ul><li>特点：运行在浏览器中的应用</li><li>官网，管理系统，webapp，H5</li></ul><p><strong>App开发：</strong></p><ul><li>原生App，指Anrdoid和iOS</li><li>跨平台App，特点：写一套代码可以在多端运行，uniapp，RN，Flutter，桌面应用，小程序</li><li>混合App（Hybrid），特点：原生App+Web开发 在原生App中嵌套Web页面</li></ul><p><img src="' + _imports_0 + '" alt="image-20231120212822534"></p><p><strong>Native APP</strong></p><ul><li>Native APP又称原生APP，就是我们平时说的手机/桌面应用软件。</li><li>原生APP 是针对IOS、Android、Windows、鸿蒙等不同的手机操作系统要采用不同的语言和框架进行开发出来的，通常是由“服务器数据+APP应用客户端”两部份构成。</li><li>实现技术：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  iOS: swift（雨燕）/ Object-C\n  Android: java / kotlin\n  HarmonyOS: JS, Java和C++\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优缺点：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    优点：\n      1)体验好，用户无法上网也可访问APP应用中以前下载的数据\n      2)性能稳定，可调用手机的硬件设备（语音、摄像头、短信、GPS、重力感应等）和本地资源（通讯录，相册等）\n      3)操作速度快，能够实现出色的动效，转场动画完美\n\n    缺点：\n      1)开发周期长，开发人员工资起点高。\n      2)用户要使用原生APP，必须通过安装到手机里面才行，而且APP软件体积大，占用较多手机内存容量\n      3)更新缓慢，根据不同平台，提交–审核–上线流程较复杂。\n      4)要获取最新功能，需要升级应用，所以会容易出现有些用户不升级，导致多个不同功能版本出现，维护成本大\n      5)跨平台差，每种平台都需要独立的开发语言。Java(安卓),swift(iOS), HarmonyOS(java、C++、js)等等\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Web APP</strong></p><ul><li>Web APP本质上是为移动浏览器设计的网站，可以在各种智能设备的浏览器上运行。</li><li>实现技术：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    HTML5+Javascript+CSS3\n    react.js\n    vue.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优缺点：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>优点：\n	    1)一套代码到处运行，可以同时在 PC、Android、iPhone、鸿蒙系统上的浏览器上访问\n	    2)开发者不需要发布到应用市场审核，用户不需要下载、安装和更新\n	    3)开发周期短，维护成本低\n	    4)用户不需用户手动更新，可以自动更新，直接使用最新版本\n缺点：\n	    1)转场表现略差，要求联网\n	    2)用户体验没那么炫。图片和动画支持性不高\n	    3)没法在应用市场中下载、无法通过应用下载获得盈利机会\n	    4)对手机功能应用缺乏，有限制（蓝牙、网络、本地文件等）\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Hybrid APP</strong></p><ul><li>Hybrid App就是混合APP，就是Native结合Web的混合开发，就是内部本质是Web网页，使用外壳打包软件给它套一层原生APP的外壳。</li><li>实现技术：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  APICloud -&gt; apicloud template ---&gt; APICloud编辑器 ---&gt; 混合APP\n  DCloud的uni-app -&gt;Hbuilder编辑器 -&gt; 混合APP\n  RN -&gt; 利用React技术开发App\n  Flutter -&gt; 使用Dart语言也可以开发安卓和iOS\n  ...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优缺点：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    优点：\n        1)集众家之长，既可以调用丰富的手机设备API，也能拥有WebAPP的跨平台能力\n        2)可以在应用商店发布，实现收费下载\n        3)内部是网页结构，可以自主更新，做到开发一次，所有平台生效\n    4)降低开发成本和技术成本，降低维护和开发周期\n    缺点：\n        1)本质上就是一个Web APP使用了原生APP的壳，所以体验比不上原生APP，但是比webAPP强\n        2)开发难度比Web APP高，有一定的学习成本，开发周期比Web APP长，但是比原生APP肯定要短。\n        3)混合APP发布有可能无法通过审核，需要多次调整，才能发布\n        4)依赖开发框架本身提供的手机设备API，少部分设备功能还是只能借助原生语言进行调用才可以\n        5)对团队技术栈要求相对高，既要懂web开发的，也要懂原生APP开发的\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_1 + '" alt="image-20231120164055042"></p><h3 id="_2-uniapp-介绍" tabindex="-1"><a class="header-anchor" href="#_2-uniapp-介绍" aria-hidden="true">#</a> 2, uniapp 介绍</h3><p><strong>介绍：</strong></p><ul><li>在2018年9月份才诞生的。官网：https://uniapp.dcloud.net.cn/</li><li>是一个跨平台技术，一套代码，通过不同的打包方法，可以将期编译运行到多个平台上。</li><li>通常在公司中，我们使用uniapp来做微信小程序和安卓。</li><li>跨平台技术，听上去非常高大上，只要是跨平台，就意味着有很多的坑，不要滥用。</li></ul><h3 id="_3-搭建uniapp的开发环境" tabindex="-1"><a class="header-anchor" href="#_3-搭建uniapp的开发环境" aria-hidden="true">#</a> 3, 搭建uniapp的开发环境</h3><p>开发uniapp，最好使用人家提供的编译器，叫hbuildX，如下：</p><p>安装 HbuildX</p><p>下载完后，得到一个压缩包，解压，</p><p>然后，就可以双击打开，做一些设置，如下：</p><ol><li>快捷键按照习惯设置为 vscode</li><li>颜色主题</li></ol><p><img src="' + _imports_2 + '" alt="image-20231120213437253"></p><p>可以把项目运行在不同的平台，先运行到浏览器中，第1次运行比较慢一点，如下：</p><p><img src="' + _imports_3 + '" alt="image-20231120213533073"></p><p>你需要告诉hbuildx，你的谷歌浏览器在什么地方，并把路径配置好</p><p><img src="' + _imports_4 + '" alt="image-20231120213632254"></p><h3 id="_4-uniapp后台系统" tabindex="-1"><a class="header-anchor" href="#_4-uniapp后台系统" aria-hidden="true">#</a> 4, uniapp后台系统</h3><p>看一下微信小程序的后台系统，如下：</p><p>如果使用uniapp开发微信小程序，也需要appid，</p><p><img src="' + _imports_5 + '" alt="image-20231120213815687"></p><p>同现，uniapp也对应了一个管理系统，也有一个appid。</p><p>地址：https://dev.dcloud.net.cn/pages/common/login?uniIdRedirectUrl=%252Fpages%252Fapp%252Flist</p><p>管理后台如下</p><p><img src="' + _imports_6 + '" alt="image-20231120214131321"></p><p>创建一个项目，需要创建一个应用</p><p><img src="' + _imports_7 + '" alt="image-20231120214331351"></p><p>如果改了appid，需要重启服务</p><h3 id="_5-目录结构" tabindex="-1"><a class="header-anchor" href="#_5-目录结构" aria-hidden="true">#</a> 5, 目录结构</h3><p>uniapp代码风格 = vue代码风格 + 微信小程序代码风格。在写uniapp代码时，就感觉是在写vue和原生小程序。</p><p><strong>目录结构：</strong></p><p><img src="' + _imports_8 + '" alt="image-20231120214700337"></p><p>说明：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>├─pages            业务页面文件存放的目录\n│  └─index\n│     └─index.vue  index页面\n├─static           存放应用引用的本地静态资源的目录(注意：静态资源只能存放于此)\n├─unpackage        非工程代码，一般存放运行或发行的编译结果\n├─index.html       H5端页面\n├─main.js          Vue初始化入口文件\n├─App.vue          配置App全局样式、监听应用生命周期\n├─pages.json       **配置页面路由、导航栏、tabBar等页面类信息**\n├─manifest.json    **配置appid**、应用名称、logo、版本等打包信息\n└─uni.scss         uni-app内置的常用样式变量\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-运行到微信小程序" tabindex="-1"><a class="header-anchor" href="#_6-运行到微信小程序" aria-hidden="true">#</a> 6, 运行到微信小程序</h3><p>HBuildeX和微信小程序工具的关系：</p><p><img src="' + _imports_9 + '" alt="image-20231120214734956"></p><p>需要先打开微信开发者工具，开放端口，如下：</p><p><img src="' + _imports_10 + '" alt="image-20231120214803570"></p><p>在hbuildx中配置微信开发者工具的路径</p><p><img src="' + _imports_11 + '" alt="image-20231120214821080"></p><h3 id="_7-运行在安卓系统手机端" tabindex="-1"><a class="header-anchor" href="#_7-运行在安卓系统手机端" aria-hidden="true">#</a> 7, 运行在安卓系统手机端</h3><blockquote><p><strong>步骤：</strong></p><p>华为手机鸿蒙系统直接用数据线连接电脑和手机，在真机模式列表是找不到设备的，需要手动配置一下，步骤如下： 1、使用数据线将电脑和手机连接；选择传输文件; 2、在手机的设置项，拉倒底部，找到并点击“关于手机”； 3、连续点击《版本号》次，然后再返回设置，拉倒底部，找到并点击“系统和更新”； 4、在当前页面就可以看到《开发人员选项》了，点击进入； 5、在当前页面的调试栏开启《USB调试》； 6、在网络栏目，《选择USB配置》换成《音频来源》； 7、这个时候会有一个点击确认的弹窗，点击确定即可； 8、然后回到uniapp，点击菜单栏的《运行》-&gt;《运行到手机或模拟器》-&gt;《运行到Android APP基座》； 9、这个时候就可以在列表里找到你的手机设备了； 10、完。</p></blockquote><h3 id="_8-切换-vue-vue3" tabindex="-1"><a class="header-anchor" href="#_8-切换-vue-vue3" aria-hidden="true">#</a> 8, 切换 Vue / Vue3</h3><p>安装uni-app vue3编译器插件：</p><p><img src="' + _imports_12 + '" alt="image-20231120214940530"></p><p>开发uniapp: vue2/vue3风格 + 原生微信小程序风格。vue3的写法是从2021年下半年才开始支持，也就1年半的时候。现在开发uniapp是有两种选择。</p><p><img src="' + _imports_13 + '" alt="image-20231120215011012"></p><p>我们选择vue3，看一下入口文件，如下</p><p><img src="' + _imports_14 + '" alt="image-20231120215027369"></p><p>看一下首页面，如下：</p><p><img src="' + _imports_15 + '" alt="image-20231120215037837"></p><p>在微信开发者工具中，测试如下：</p><h3 id="_9-ui组件库的选择" tabindex="-1"><a class="header-anchor" href="#_9-ui组件库的选择" aria-hidden="true">#</a> 9, UI组件库的选择</h3><p>一般情况下，我们会使用uView，地址：https://www.uviewui.com/</p><p><img src="' + _imports_16 + '" alt="image-20231120215104037"></p><p>总结使用uniapp开发小程序的选择：</p><ul><li>vue2语法 + 小程序语法 + uView</li><li>vue3语法 + 小程序语法 + 目前还没找到合适的ui组件库</li></ul><h2 id="二-uniapp-开发" tabindex="-1"><a class="header-anchor" href="#二-uniapp-开发" aria-hidden="true">#</a> 二, uniapp 开发</h2><hr><h3 id="_1-uni-app和原生小程序开发区别" tabindex="-1"><a class="header-anchor" href="#_1-uni-app和原生小程序开发区别" aria-hidden="true">#</a> 1，uni-app和原生小程序开发区别</h3><p>uni-app 项目每个页面是一个 <code>.vue</code> 文件，数据绑定及事件处理同 <code>Vue.js</code> 规范：</p><ol><li>属性绑定 <code>src=&quot;{ { url }}&quot;</code> 升级成 <code>:src=&quot;url&quot;</code></li><li>事件绑定 <code>bindtap=&quot;eventName&quot;</code> 升级成 <code>@tap=&quot;eventName&quot;</code>，<strong>支持（）传参</strong></li><li>支持 Vue 常用<strong>指令</strong> <code>v-for</code>、<code>v-if</code>、<code>v-show</code>、<code>v-model</code> 等</li></ol><p><strong>其他区别补充</strong></p><ol><li>调用接口能力，<strong>建议前缀</strong> <code>wx</code> 替换为 <code>uni</code> ，养成好习惯，<strong>支持多端开发</strong>。</li><li><code>style</code> 页面样式不需要写 <code>scoped</code>，小程序是多页面应用，<strong>页面样式自动隔离</strong>。</li><li><strong>生命周期分三部分</strong>：应用生命周期(小程序)，页面生命周期(小程序)，组件生命周期(Vue)</li></ol><p>案例：</p><ul><li>滑动轮播图</li><li>点击大图预览</li></ul><h3 id="_2-路由" tabindex="-1"><a class="header-anchor" href="#_2-路由" aria-hidden="true">#</a> 2, 路由</h3><p>在uniapp中路由是内置的，不需要使用vue-router，和微信小程序中路由风格是一样的。</p>', 90);
const _hoisted_91 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_91);
}
const qianduanUniapp_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduan-uniapp.html.vue"]]);
export {
  qianduanUniapp_html as default
};
