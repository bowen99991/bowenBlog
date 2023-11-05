import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-7a96b8c1.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="http-和-https" tabindex="-1"><a class="header-anchor" href="#http-和-https" aria-hidden="true">#</a> HTTP 和 HTTPS</h2><hr><h3 id="_1-http-和-https-的基本概念" tabindex="-1"><a class="header-anchor" href="#_1-http-和-https-的基本概念" aria-hidden="true">#</a> 1, http 和 https 的基本概念</h3><p><strong>http:</strong></p><p>是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的超文本传输协议。</p><p><strong>https:</strong></p><p>是以安全为目标的 HTTP 通道，即 <strong>HTTP 下 加入 SSL 层进行加密</strong>。其作用是：建立一个信息安全通道，来确保数据的传输，确保网站的真实性。</p><hr><h3 id="_2-http-和-https-的区别及优缺点" tabindex="-1"><a class="header-anchor" href="#_2-http-和-https-的区别及优缺点" aria-hidden="true">#</a> 2, http 和 https 的区别及优缺点？</h3><p>http 是超文本传输协议，信息是<strong>明文传输</strong>，HTTPS 协议要比 http 协议安全，https 是<strong>具有安全性的 ssl 加密传输协议</strong>，可防止数据在传输过程中被窃取、改变，确保数据的完整性(当然这种安全性并非绝对的，对于更深入的 Web 安全问题，此处暂且不表)。</p><p>http 协议的默认端口为 <strong>80</strong>，https 的默认端口为 <strong>443</strong>。</p><p>http 的连接很简单，是无状态的。https 握手阶段比较费时，会使页面加载时间延长 50%，增加 10%~20%的耗电。</p><p>https 缓存不如 http 高效，会增加数据开销。</p><p>Https 协议需要 ca 证书，费用较高，功能越强大的证书费用越高。</p><p>SSL 证书需要绑定 IP，不能再同一个 IP 上绑定多个域名，IPV4 资源支持不了这种消耗。</p><hr><h3 id="_3-https-协议的工作原理" tabindex="-1"><a class="header-anchor" href="#_3-https-协议的工作原理" aria-hidden="true">#</a> 3, https 协议的工作原理</h3><p>客户端在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤：</p><p>客户端使用 https url 访问服务器，则要求 web 服务器建立 ssl 链接。</p><p>web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），传输给客户端。</p><p>客户端和 web 服务器端开始协商 SSL 链接的安全等级，也就是加密等级。</p><p>客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。</p><p>web 服务器通过自己的私钥解密出会话密钥。</p><p>web 服务器通过会话密钥加密与客户端之间的通信。</p><h2 id="http-请求跨域问题" tabindex="-1"><a class="header-anchor" href="#http-请求跨域问题" aria-hidden="true">#</a> HTTP 请求跨域问题</h2><hr><h3 id="_1-跨域的原理" tabindex="-1"><a class="header-anchor" href="#_1-跨域的原理" aria-hidden="true">#</a> 1, 跨域的原理</h3><blockquote><p><strong>跨域</strong>，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的。</p><p><strong>同源策略</strong>,是浏览器对 JavaScript 实施的安全限制，只要协议、域名、端口有任何一个不同，都被当作是不同的域。</p><p><strong>跨域原理</strong>，即是通过各种方式，避开浏览器的安全限制。</p></blockquote><p><strong>跨域解决方案</strong>:</p><blockquote><p>最初做项目的时候，使用的是<strong>jsonp</strong>，但存在一些问题，使用get请求不安全，携带数据较小，后来也用过<strong>iframe</strong>，但只有主域相同才行，也是存在些问题，后来通过了解和学习发现<strong>使用代理和proxy代理配合</strong>起来使用比较方便，就引导后台按这种方式做下服务器配置，在开发中使用proxy，在服务器上使用nginx代理，这样开发过程中彼此都方便，效率也高；现在h5新特性还有 windows.postMessage()</p></blockquote><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> <strong>JSONP</strong></h3><blockquote><p><strong>ajax 请求受同源策略影响</strong>，不允许进行跨域请求，而 <strong>script 标签 src 属性中的链 接却可以访问跨域的 js 脚本</strong>，利用这个特性，服务端不再返回 JSON 格式的数据，而是 返回一段调用某个函数的 js 代码，在 src 中进行了调用，这样实现了跨域。</p></blockquote><p>步骤：</p><ol><li>去创建一个script标签</li><li>script的src属性设置接口地址</li><li>接口参数，必须要带一个自定义函数名，要不然后台无法返回数据</li><li>通过定义函数名去接受返回的数据</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//动态创建 script</span>\n <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token comment">// 设置回调函数 </span>\n<span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> \n\n<span class="token comment">//设置 script 的 src 属性，并设置请求地址 </span>\nscript<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000/?callback=getData&#39;</span><span class="token punctuation">;</span> \n\n<span class="token comment">// 让 script 生效 </span>\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JSONP 的缺点</strong></p><blockquote><p><strong>JSON 只支持 get</strong>，因为 <strong>script 标签只能使用 get 请求</strong>； JSONP 需要后端配合返回指定格式的数据。</p></blockquote><p><strong>解决跨域：</strong></p><ul><li><strong>document.domain</strong> 基础域名相同 子域名不同</li><li><strong>window.name</strong> 利用在一个浏览器窗口内，载入所有的域名都是共享一个window.name</li><li><strong>CORS</strong> CORS(Cross-origin resource sharing)跨域资源共享 服务器设置对CORS的支持原理：服务器设置Access-Control-Allow-Origin HTTP响应头之后，浏览器将会允许跨域请求</li><li><strong>proxy代理</strong> 目前常用方式,通过服务器设置代理</li><li><strong>window.postMessage()</strong> 利用h5新特性window.postMessage()</li></ul><h2 id="cookie-sessionstorage-localstorage-的区别" tabindex="-1"><a class="header-anchor" href="#cookie-sessionstorage-localstorage-的区别" aria-hidden="true">#</a> Cookie,sessionStorage,localStorage 的区别</h2><hr><p><strong>相同点:</strong></p><p><em>存储在客户端</em></p><p><strong>不同点</strong>：</p><ul><li><strong>cookie数据大小不能超过4k</strong>；sessionStorage和localStorage的存储比cookie大得多，<strong>可以达到5M+</strong></li><li>cookie设置的过期时间之前一直有效；<strong>localStorage永久存储</strong>，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage数据在当前浏览器窗口关闭后自动删除</li><li>cookie的数据会自动的传递到服务器；sessionStorage和localStorage数据保存在本地</li></ul><h2 id="粘包问题分析与对策" tabindex="-1"><a class="header-anchor" href="#粘包问题分析与对策" aria-hidden="true">#</a> 粘包问题分析与对策</h2><hr><blockquote><p>TCP粘包是指发送方发送的若干包数据到接收方接收时粘成一包，从接收缓冲区看，后一包数据的头紧接着前一包数据的尾。 <strong>粘包出现原因</strong> 简单得说，在流传输中出现，UDP不会出现粘包，因为它有<strong>消息边界</strong> 粘包情况有两种，一种是粘在一起的包都是完整的数据包，另一种情况是粘在一起的包有不完整的包。</p></blockquote><p>为了<strong>避免粘包</strong>现象，可采取以下几种措施：</p>', 50);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "（1）对于发送方引起的粘包现象，用户可通过编程设置来避免，TCP提供了强制数据立即传送的操作指令push，TCP软件收到该操作指令后，就立即将本段数据发送出去，而不必等待发送缓冲区满；",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "（2）对于接收方引起的粘包，则可通过优化程序设计、精简接收进程工作量、提高接收进程优先级等措施，使其及时接收数据，从而尽量避免出现粘包现象；",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "（3）由接收方控制，将一包数据按结构字段，人为控制分多次接收，然后合并，通过这种手段来避免粘包。分包多发。",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("以上提到的三种措施，都有其"),
    /* @__PURE__ */ createBaseVNode("strong", null, "不足之处"),
    /* @__PURE__ */ createTextVNode("。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "（1）第一种编程设置方法虽然可以避免发送方引起的粘包，但它关闭了优化算法，降低了网络发送效率，影响应用程序的性能，一般不建议使用。",
  -1
  /* HOISTED */
);
const _hoisted_56 = {
  href: "https://www.zhihu.com/search?q=%E7%B2%98%E5%8C%85&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B:,:2379426038%7D",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "（3）第三种方法虽然避免了粘包，但应用程序的效率较低，对实时应用的场合不适合。 一种比较周全的对策是：接收方创建一预处理线程，对接收到的数据包进行预处理，将粘连的包分开。实验证明这种方法是高效可行的。",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "从输入url到页面加载的全过程",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#从输入url到页面加载的全过程",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 从输入URL到页面加载的全过程")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      _hoisted_51,
      _hoisted_52,
      _hoisted_53,
      _hoisted_54,
      _hoisted_55,
      createBaseVNode("p", null, [
        createTextVNode("（2）第二种方法只能减少出现粘包的可能性，但并不能完全避免"),
        createBaseVNode("a", _hoisted_56, [
          createTextVNode("粘包"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("，当发送频率较高时，或由于网络突发可能使某个时间段数据包到达接收方较快，接收方还是有可能来不及接收，从而导致粘包。")
      ]),
      _hoisted_57
    ]),
    _hoisted_58
  ]);
}
const qianduanmianshi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qianduanmianshi.html.vue"]]);
export {
  qianduanmianshi_html as default
};
