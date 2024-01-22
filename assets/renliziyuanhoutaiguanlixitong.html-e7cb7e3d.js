import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-0d7592ba.js";
const _imports_0 = "/bowenBlog/assets/image-20231209143913352-04af6b41.png";
const _imports_1 = "/bowenBlog/assets/image-20231222225143229-881d12c7.png";
const _imports_2 = "/bowenBlog/assets/image-20231222220507105-1bf867e3.png";
const _imports_3 = "/bowenBlog/assets/image-20231222220410418-0852e74b.png";
const _imports_4 = "/bowenBlog/assets/image-20231222221541666-d4cc0762.png";
const _imports_5 = "/bowenBlog/assets/image-20231222221458536-1aa7cecc.png";
const _imports_6 = "/bowenBlog/assets/image-20231222221838775-6e0e4b8a.png";
const _imports_7 = "/bowenBlog/assets/image-20231222221735238-18e493e2.png";
const _imports_8 = "/bowenBlog/assets/image-20231222224231023-fcc8fa42.png";
const _imports_9 = "/bowenBlog/assets/image-20231222224450037-99f15052.png";
const _imports_10 = "/bowenBlog/assets/image-20231222224846367-b7d19eca.png";
const _imports_11 = "/bowenBlog/assets/image-20231222225304833-5726e926.png";
const _imports_12 = "/bowenBlog/assets/image-20231222231158844-6a7c5644.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="后台管理系统" tabindex="-1"><a class="header-anchor" href="#后台管理系统" aria-hidden="true">#</a> 后台管理系统</h2><p>基于 Vue-admin-element 二次开发</p><h2 id="一-项目介绍" tabindex="-1"><a class="header-anchor" href="#一-项目介绍" aria-hidden="true">#</a> 一, 项目介绍</h2><hr><h3 id="_1-项目源码及接口" tabindex="-1"><a class="header-anchor" href="#_1-项目源码及接口" aria-hidden="true">#</a> 1, 项目源码及接口</h3><p>完整gitee项目代码地址: https://gitee.com/shuiruohanyu/heimahr/tree/master</p><p>项目接口文档地址: https://www.apifox.cn/apidoc/shared-e2644216-aad4-4529-a630-78f0631ab076/api-49562537</p><p>项目演示地址: https://heimahr.itheima.net/ 接口实际地址: 示例-https://heimahr.itheima.net/api/sys/login</p><p>项目演示备份地址: https://heimahr-t.itheima.net/</p><p>备份接口实际地址: 示例-https://heimahr-t.itheima.net/prod-api/sys/login</p><p>项目笔记地址(语雀-在线，线下笔记已经在资源中): https://www.yuque.com/shuiruohanyu/agxcua</p><p>登录密码：网络安全需要，密码以由原来的123456 变更为hm#qd@23! ， 管理员不可修改密码，新建用户的密码仍为123456</p><h3 id="_2-pull-项目代码" tabindex="-1"><a class="header-anchor" href="#_2-pull-项目代码" aria-hidden="true">#</a> 2. pull 项目代码</h3><ul><li>拉取命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone  https://github.com/PanJiaChen/vue-admin-template.git  heimahr\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>升级core-js版本到<strong>3.25.5</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> i core-js@3.25.5 <span class="token comment"># npm</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> core-js@3.25.5 <span class="token comment"># yarn</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装完整依赖</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> i <span class="token comment"># npm</span>\n$ <span class="token function">yarn</span>  <span class="token comment"># yarn</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动命令在package.json中查看</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>需要检查VsCode本身的插件ESLint 和 Vetur</li></ul><h3 id="_3-项目目录和入口文件介绍" tabindex="-1"><a class="header-anchor" href="#_3-项目目录和入口文件介绍" aria-hidden="true">#</a> 3. 项目目录和入口文件介绍</h3><ul><li>项目目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── src                        <span class="token comment"># 源代码目录</span>\n│   ├── api                    <span class="token comment"># 所有请求</span>\n│   ├── assets                 <span class="token comment"># 主题 字体等静态资源</span>\n│   ├── components             <span class="token comment"># 全局公用组件</span>\n│   ├── icons                  <span class="token comment"># 项目所有 svg icons</span>\n│   ├── layout                 <span class="token comment"># 全局 layout</span>\n│   ├── router                 <span class="token comment"># 路由</span>\n│   ├── store                  <span class="token comment"># 全局 store管理</span>\n│   ├── styles                 <span class="token comment"># 全局样式</span>\n│   ├── utils                  <span class="token comment"># 全局公用方法</span>\n│   ├── views                  <span class="token comment"># views 所有页面</span>\n│   ├── App.vue                <span class="token comment"># 入口页面</span>\n│   ├── main.js                <span class="token comment"># 入口文件 加载组件 初始化等</span>\n│   └── permission.js          <span class="token comment"># 权限管理</span>\n│   └── settings.js            <span class="token comment"># 配置文件</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>入口文件</li></ul><h3 id="_4-项目功能特点" tabindex="-1"><a class="header-anchor" href="#_4-项目功能特点" aria-hidden="true">#</a> 4, 项目功能特点</h3><p><img src="' + _imports_0 + '" alt="image-20231209143913352"></p><h2 id="二-项目开发" tabindex="-1"><a class="header-anchor" href="#二-项目开发" aria-hidden="true">#</a> 二, 项目开发</h2><hr><h2 id="项目部署上线" tabindex="-1"><a class="header-anchor" href="#项目部署上线" aria-hidden="true">#</a> 项目部署上线</h2><hr><p><strong>生成打包分析文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run preview -- <span class="token parameter variable">--report</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//localhost:9526/report.html</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件包体积报告预览网页</p><p><img src="' + _imports_1 + '" alt="image-20231222225143229"></p><h3 id="_1-执行打包命令" tabindex="-1"><a class="header-anchor" href="#_1-执行打包命令" aria-hidden="true">#</a> 1, <strong>执行打包命令</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是运行打包命令后的文件, 同时也是需要拷贝并部署的文件,</p><p>需要将文件拷贝放入 nginx 文件夹里面的 html 文件包里</p><p><img src="' + _imports_2 + '" alt="image-20231222220507105"></p><h3 id="_2-复制文件到-nginx" tabindex="-1"><a class="header-anchor" href="#_2-复制文件到-nginx" aria-hidden="true">#</a> 2, 复制文件到 nginx</h3><p>windows 系统需要安装 nginx 文件, 直接双击傻瓜式运行</p><p><img src="' + _imports_3 + '" alt="image-20231222220410418"></p><p>在 windows 环境下, 部署 nginx 的默认端口是 localhost:80</p><h3 id="_3-解决请求-404-配置" tabindex="-1"><a class="header-anchor" href="#_3-解决请求-404-配置" aria-hidden="true">#</a> 3, 解决请求 404 配置</h3><p>访问一下, 存在问题 404 错误, 因为我们请求的页面是本地 local</p><p><img src="' + _imports_4 + '" alt="image-20231222221541666"></p><p>解决方法</p><p><img src="' + _imports_5 + '" alt="image-20231222221458536"></p><h3 id="_4-修改配置" tabindex="-1"><a class="header-anchor" href="#_4-修改配置" aria-hidden="true">#</a> 4, 修改配置</h3><p>需要修改一下配置</p><blockquote><p>设置不论请求什么地址，都返回index.html</p></blockquote><p><img src="' + _imports_6 + '" alt="image-20231222221838775"></p><h3 id="_5-重启服务" tabindex="-1"><a class="header-anchor" href="#_5-重启服务" aria-hidden="true">#</a> 5, 重启服务</h3><p>重启 nginx 服务, 在 nginx 文件夹下执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用于重新加载 Nginx 服务器的配置文件并重启服务器。</span>\n./nginx <span class="token parameter variable">-s</span> reload  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_7 + '" alt="image-20231222221735238"></p><blockquote><p>如果遇到无法重启服务命令, 可以尝试手动任务台关闭 nginx 服务, 或重启电脑</p></blockquote><p>测试访问, 页面正常显示</p><p><img src="' + _imports_8 + '" alt="image-20231222224231023"></p><h3 id="_6-解决生产模式的跨域" tabindex="-1"><a class="header-anchor" href="#_6-解决生产模式的跨域" aria-hidden="true">#</a> 6, 解决生产模式的跨域</h3><p>当前请求的地址存在问题</p><p><img src="' + _imports_9 + '" alt="image-20231222224450037"></p><p>使用 nginx 配置代理</p><p><img src="' + _imports_10 + '" alt="image-20231222224846367"></p><p>在 nginx 配置代理解决生成环境跨域问题, 同样的在配置文件下添加以下的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     location / {\n               try_files $uri $uri/ /index.html;\n        }\n\n        location /prod-api {\n            proxy_pass https://heimahr-t.itheima.net\n        }\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_11 + '" alt="image-20231222225304833"></p><p>重新运行 nginx 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload  <span class="token comment"># 重启服务</span>\n\nnginx <span class="token parameter variable">-s</span> stop  <span class="token comment"># 停止nginx进程</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以能存在权限问题也会导致服务无法重启成功, 也会因为是 nginx 的版本问题导致</p></blockquote><p>解决以上问题后, 访问页面, 可以正常显示</p><p><img src="' + _imports_12 + '" alt="image-20231222231158844"></p><h3 id="_7-总结" tabindex="-1"><a class="header-anchor" href="#_7-总结" aria-hidden="true">#</a> 7, 总结</h3><blockquote><p>至此, 我们完成了使用 nginx 本地部署项目</p></blockquote><h2 id="使用-vercel-部署项目" tabindex="-1"><a class="header-anchor" href="#使用-vercel-部署项目" aria-hidden="true">#</a> 使用 vercel 部署项目</h2><h3 id="_1-全局安装-vercel" tabindex="-1"><a class="header-anchor" href="#_1-全局安装-vercel" aria-hidden="true">#</a> 1, 全局安装 vercel</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> vercel\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录 vercel</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vercel login \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入项目根路径, 运行 vercel</p>', 84);
const _hoisted_85 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_85);
}
const renliziyuanhoutaiguanlixitong_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "renliziyuanhoutaiguanlixitong.html.vue"]]);
export {
  renliziyuanhoutaiguanlixitong_html as default
};
