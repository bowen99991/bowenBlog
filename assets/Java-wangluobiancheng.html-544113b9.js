import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, e as createVNode, d as createStaticVNode } from "./app-0bcd8dca.js";
const _imports_0 = "/bowenBlog/assets/image-20231224205155512-96f3d647.png";
const _imports_1 = "/bowenBlog/assets/image-20231224205202730-7598efe6.png";
const _imports_2 = "/bowenBlog/assets/image-20231224205213010-242365a7.png";
const _imports_3 = "/bowenBlog/assets/image-20231224205704059-fa1d5e81.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2><hr><h3 id="网络编程三要素" tabindex="-1"><a class="header-anchor" href="#网络编程三要素" aria-hidden="true">#</a> 网络编程三要素</h3><p>网络编程三要素，分别是IP地址、端口号、通信协议。</p><ul><li>IP地址：表示设备在网络中的地址，是网络中设备的唯一标识</li><li>端口号：应用程序在设备中唯一的标识</li><li>协议：连接和数据在网络中传输的规则。</li></ul><p>如下图所示：假设现在要从一台电脑中的微信上，发一句“你愁啥？”到其他电脑的微信上，流程如下</p><ul><li>先通过ip地址找到对方的电脑</li><li>再通过端口号找到对方的电脑上的应用程序</li><li>按照双方约定好的规则发送、接收数据</li></ul><h3 id="客户端和服务器" tabindex="-1"><a class="header-anchor" href="#客户端和服务器" aria-hidden="true">#</a> 客户端和服务器</h3><p><strong>客户端：</strong> Client 客户所使用的电脑中安装的应用程序。</p><p><strong>服务端：</strong> Server 存放网页，客户端程序，数据处理程序，数据库的电脑。</p><h3 id="bs架构和cs架构" tabindex="-1"><a class="header-anchor" href="#bs架构和cs架构" aria-hidden="true">#</a> BS架构和CS架构</h3><p><strong>BS架构</strong></p><ul><li>Browser/Server(浏览器/服务器), 利用浏览器去呈现界面，浏览器提供浏览器所需要的数据</li><li>优点：无需安装客户端软件，只需要有浏览器，无需升级客户端。</li><li>缺点：浏览器的兼容性可能有问题，功能性相对弱一点，安全性弱，交互性弱。</li></ul><p><strong>CS架构</strong></p><ul><li>Client/Server 将应用程序放到一个软件中，可以是Android也可以是iOS，服务器给客户端软件提供它需要的数据。</li><li>优点：界面丰富，交互性强，响应速度快，安全性强。</li><li>缺点：开发成本高，需要下载安装，维护成本高，升级麻烦。</li></ul><h3 id="http的概念" tabindex="-1"><a class="header-anchor" href="#http的概念" aria-hidden="true">#</a> HTTP的概念</h3><p><strong>HTTP：HyperText Transfer Protocol 超文本传输协议</strong>：</p><ul><li>客户端和与服务器之间传递数据的规范</li><li>HTTP请求：按照HTTP协议（规则），由客户端（浏览器）向服务器发出请求</li><li>HTTP响应：按照HTTP协议（规则），由服务器给出响应</li></ul><p><strong>HTTPS:</strong> HyperText Transfer Protocol Secure 超文本传输安全协议。</p><ul><li>HTTP的安全版本（安全的基础是SSL/TLS）</li><li>SSL: Secure Sockets Layer 安全套接层</li><li>TLS：transport Layer Security 传输层安全</li><li>说白了，就是为了网络通信提供的一种安全协议，对网络连接进行加密</li></ul><h3 id="http和https的区别" tabindex="-1"><a class="header-anchor" href="#http和https的区别" aria-hidden="true">#</a> <strong>HTTP和HTTPS的区别</strong></h3><ul><li>HTTP是不安全 HTTPS可以防止攻击</li><li>HTTP协议传输的内容是明文，直接在TCP连接上传递，客户端和服务器都无法验证对方的身份</li><li>HTTPS协议的传输内容都是被SSL/TLS加密，且运行在SSL/TLS，SSL/TLS运行在TCP连接上，所以传递的数据是安全</li></ul><h3 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文" aria-hidden="true">#</a> HTTP报文</h3><p>HTTP是基于TCP通信协议来传递数据。通过一个可靠的连接来交换信息。在交换信息之前，客户端和服务器之间需要有规则。</p><p><strong>HTTP通信包含两部分</strong></p><ul><li>HTTP请求 Request</li><li>HTTP响应 Response</li></ul><p><img src="' + _imports_0 + '" alt="image-20231224205155512"></p><p>在HTTP请求和HTTP响应中，都包含了HTTP报文，报文也是一块数据，在客户端与服务器之间发送的数据块。这些报文也是在客户端与服务器之间流行。所以HTTP报文也叫报文流。</p><p><strong>HTTP请求报文组成部分</strong></p><ul><li>对报文进行描述的起始行</li><li>HTTP各种头（header），也叫http报文头，不同的头含义是不一样的</li><li>请求体（请求正文）（可选的），就是客户端给服务器的数据</li></ul><p><img src="' + _imports_1 + '" alt="image-20231224205202730"></p><p><strong>HTTP响应报文组成部分</strong></p><ul><li>响应行（起始行） HTTP/1.0 200表示状态码 OK叫状态描述符</li><li>响应头 header</li><li>响应体 服务器给客户端响应的数据</li></ul><p><img src="' + _imports_2 + '" alt="image-20231224205213010"></p><h3 id="http协议版本" tabindex="-1"><a class="header-anchor" href="#http协议版本" aria-hidden="true">#</a> HTTP协议版本</h3><p><strong>HTTP/0.9</strong></p><ol><li>仅支持GET请求</li><li>仅能请求HTML资源</li><li>发布于1991年</li></ol><p><strong>HTTP/1.0</strong></p><ol><li>增加了POST请求和HEAD请求</li><li>支持多种数据格式的请求和访问</li><li>添加了缓存的功能</li><li>增加了状态码，内容编码</li><li>浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗</li><li>也就是说早期的HTTP1.0是不支持长连接（持久化连接）的，只支持串行连接</li><li>后期的HTTP1.0添加了Connection:keep-alive字段，开始支持持久化连接</li><li>发布于1996年</li></ol><p><strong>HTTP/1.1(目前使用最广泛的版本)</strong></p><ol><li>采用持久连接(Connection: keep-alive)，多个请求可以共用同一个TCP连接</li><li>增加PUT/PATC/OPTION/DELETE等请求方式</li><li>增加了host字段，指定服务器域名</li><li>增加了100状态码，支持只发送头信息</li><li>支持内容传递，只传递一部分和文件断点继传</li><li>发布于1997年；</li></ol><p><strong>HTTP/2.0</strong></p><ol><li>增加了双工模式 客户端同时发送N个请求，服务器同时处理N个请求</li><li>服务器推送 服务器可以主动推送数据给客户端</li><li>发布于2015年</li></ol><h3 id="http的请求方式" tabindex="-1"><a class="header-anchor" href="#http的请求方式" aria-hidden="true">#</a> HTTP的请求方式</h3><p><strong>GET</strong>：GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。 <strong>HEAD</strong>：HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。比如在准备下载一个文件前，先获取文件的大小，再决定是否进行下载； <strong>POST</strong>：POST 方法用于将实体提交到指定的资源。 <strong>PUT</strong>：PUT 方法用请求有效载荷（payload）替换目标资源的所有当前表示； <strong>DELETE</strong>：DELETE 方法删除指定的资源； <strong>PATCH</strong>：PATCH 方法用于对资源应部分修改； <strong>CONNECT</strong>：CONNECT 方法建立一个到目标资源标识的服务器的隧道，通常用在代理服务器，网页开发很少用到。 <strong>TRACE</strong>：TRACE 方法沿着到目标资源的路径执行一个消息环回测试。</p><p><strong>在开发中使用最多的是GET、POST请求</strong></p><ul><li>GET主要是用来获取数据</li><li>GET也可以传递数据给服务器，通过查询字符串，就是在URL中把数据扔给服务器</li><li>POST可以对数据进行添加，删除，修改，数据是放在FormData</li></ul><p><strong>GET和POST区别（面试题）</strong></p><ul><li>post更安全：get请求是把数据放在url，每个人都可以看到，相对来说，不安全。</li><li>get请求，数据放在url，url的长度是有限，get请求传递给服务器的数据大小是有限的</li><li>post请求，传递给服务器的数据理论上来说是无限的</li><li>get请求只能发送ASCII字符数据，post请求能发送更多的数据类型</li><li>post比get速度慢，post接收数据之前会先将请求头发送给服务器确认，然后发送数据</li><li>get请求会进行数据缓存，post没有</li></ul><p><strong>GET过程</strong></p><ol><li>第三次握手，浏览器确认并发送请求头和数据</li><li>服务器返回200 OK响应</li></ol><p><strong>POST过程</strong></p><ol><li>第三次握手，浏览器确认并发送post请求头</li><li>服务器返回状态码100后，continue响应</li><li>浏览器开始扔数据到服务器</li><li>服务器返回200 OK响应</li></ol><h3 id="请求头和响应头" tabindex="-1"><a class="header-anchor" href="#请求头和响应头" aria-hidden="true">#</a> 请求头和响应头</h3><blockquote><p><strong>作用</strong>: 用于在客户端和服务器之间传递关于请求和响应的元数据信息。</p></blockquote><p><strong>请求头（Request Header）</strong>： 请求头是客户端发送给服务器的一部分 HTTP 请求的元数据信息。它包含了客户端的一些附加信息，以指示服务器如何处理请求。以下是请求头的一些常见字段和用途：</p><ul><li><strong>User-Agent</strong>：标识客户端的软件代理（如浏览器）和版本信息。</li><li><strong>Accept</strong>：指定客户端可以接受的响应内容的 MIME 类型。</li><li><strong>Content-Type</strong>：指定请求体的数据类型和编码方式。</li><li><strong>Authorization</strong>：提供客户端的身份验证凭据，用于访问受保护的资源。</li><li><strong>Cookie</strong>：包含客户端的会话标识或其他状态信息。</li><li><strong>Referer</strong>：指示请求的来源 URL。</li><li><strong>Cache-Control</strong>：指定缓存控制策略，如缓存过期时间或重新验证。</li><li><strong>Host</strong>：指定服务器的主机名和端口号。</li></ul><p><strong>响应头（Response Header）</strong>： 响应头是服务器发送给客户端的一部分 HTTP 响应的元数据信息。它包含了关于响应的一些附加信息，以指示客户端如何处理响应。以下是响应头的一些常见字段和用途：</p><ul><li><strong>Content-Type</strong>：指定响应体的数据类型和编码方式。</li><li><strong>Cache-Control</strong>：指定缓存控制策略，如缓存过期时间或重新验证。</li><li><strong>Set-Cookie</strong>：在响应中设置客户端的 Cookie。</li><li><strong>Location</strong>：指示重定向的目标 URL。</li><li><strong>ETag</strong>：提供用于缓存验证的实体标签。</li><li><strong>Access-Control-Allow-Origin</strong>：指定允许访问响应的来源。</li><li><strong>Content-Length</strong>：指定响应体的字节长度。</li><li><strong>Server</strong>：标识服务器的软件和版本信息。</li></ul><h3 id="response响应状态码" tabindex="-1"><a class="header-anchor" href="#response响应状态码" aria-hidden="true">#</a> Response响应状态码</h3><ul><li>Http状态码（Http Status Code）是用来表示Http响应状态的数字代码</li><li>Http状态码非常多，可以根据不同的情况，给客户端返回不同的状态码</li><li>MDN响应码解析地址：https://developer.mozilla.org/zh-CN/docs/web/http/status</li></ul><p><img src="' + _imports_3 + '" alt="image-20231224205704059"></p><p><strong>HTTP状态码列表:</strong></p>', 64);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "状态码"),
      /* @__PURE__ */ createBaseVNode("th", null, "状态码英文名称"),
      /* @__PURE__ */ createBaseVNode("th", null, "中文描述")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "100")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Continue")
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "继续。",
  -1
  /* HOISTED */
);
const _hoisted_69 = {
  href: "http://www.dreamdu.com/webbuild/client_vs_server/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "应继续其请求",
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "101")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Switching Protocols")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td")
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "200")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "OK")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "请求成功。一般用于GET与POST请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "201")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Created")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "已创建。成功请求并创建了新的资源")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "202")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Accepted")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "已接受。已经接受请求，但未处理完成")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "203")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Non-Authoritative Information")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "204")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "No Content")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "205")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Reset Content")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "206")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Partial Content")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "部分内容。服务器成功处理了部分GET请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "300")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Multiple Choices")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "301")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Moved Permanently")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "302")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Found")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "303")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "See Other")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "查看其它地址。与301类似。使用GET和POST请求查看")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "304")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Not Modified")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "305")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Use Proxy")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "使用代理。所请求的资源必须通过代理访问")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "306")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Unused")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "已经被废弃的HTTP状态码")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "307")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Temporary Redirect")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "临时重定向。与302类似。使用GET请求重定向")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td")
  ],
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "400")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Bad Request")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端请求的语法错误，服务器无法理解")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "401")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Unauthorized")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "请求要求用户的身份认证")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "402")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Payment Required")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "保留，将来使用")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "403")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Forbidden")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器理解请求客户端的请求，但是拒绝执行此请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "404")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Not Found")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, '服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面')
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "405")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Method Not Allowed")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端请求中的方法被禁止")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "406")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Not Acceptable")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器无法根据客户端请求的内容特性完成请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "407")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Proxy Authentication Required")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "408")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Request Time-out")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器等待客户端发送的请求时间过长，超时")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "409")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Conflict")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "410")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Gone")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "411")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Length Required")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器无法处理客户端发送的不带Content-Length的请求信息")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "412")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Precondition Failed")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端请求信息的先决条件错误")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "413")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Request Entity Too Large")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "414")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Request-URI Too Large")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "请求的URI过长（URI通常为网址），服务器无法处理")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "415")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Unsupported Media Type")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器无法处理请求附带的媒体格式")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "416")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Requested range not satisfiable")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "客户端请求的范围无效")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "417")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Expectation Failed")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器无法满足Expect的请求头信息")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td"),
    /* @__PURE__ */ createBaseVNode("td")
  ],
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "500")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Internal Server Error")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器内部错误，无法完成请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "501")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Not Implemented")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器不支持请求的功能，无法完成请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "502")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Bad Gateway")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "充当网关或代理的服务器，从远端服务器接收到了一个无效的请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "503")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Service Unavailable")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "504")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Gateway Time-out")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "充当网关或代理的服务器，未及时从远端服务器获取请求")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "505")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "HTTP Version not supported")
    ]),
    /* @__PURE__ */ createBaseVNode("td", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "服务器不支持请求的HTTP协议的版本，无法完成处理")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_115 = /* @__PURE__ */ createStaticVNode('<h3 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h3><p><strong>同源策略：Same Origin Policy SOP 是浏览器的策略</strong></p><ul><li>同源策略(Same-Origin Policy)最早由 Netscape 公司提出，是浏览器的一种安全策略</li><li>规定：只允许两个页面有相同的源时，一个页面才可以去访问另一个页面中的数据。</li><li>源：说白了，就是指域名 相同的源指的是有相同的域名</li><li>换句话说，jd.com不能去获取taobao.com下面的数据</li></ul><p>有一个这样的域名：http://www.wangcai.com</p><ul><li>http://zhidao.wangcai.com 不同源</li><li>http://www.wangcai.com:8080 不同源</li><li>https://www.wangcai.com 不同源</li><li>http://www.wangcai.com/phone/index.html 同源</li><li>http://www.wangcai.com/phone/huawei/index.html 同源</li></ul><p><strong>总结</strong></p><ul><li>源：协议 + 域名 + 端口</li><li>同源：相同的协议 &amp;&amp; 相同域名 &amp;&amp; 相同的端口</li><li>不同源：不同的协议 || 不同的域名 || 不同的端口</li></ul><p><strong>不受同源策略的限制</strong></p><ul><li>资源的引入 如：img标签的src link标签的href script标签的src</li><li>页面中的超连接 a标签中的href</li><li>表单的提交</li><li>重定向页面</li></ul><h3 id="开源接口" tabindex="-1"><a class="header-anchor" href="#开源接口" aria-hidden="true">#</a> 开源接口</h3><p>如果请求的url，得到的是一个json数据，通常这个url叫API接口。</p><p>开源接口：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//docs.tenapi.cn/</span></span>\n<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.free-api.com/</span></span>\n<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//api.aa1.cn/</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端接口的主要功能包括：</p><ol><li><strong>数据交互</strong>：后端接口向前端或其他应用程序提供数据交换的渠道。通过接口，可以进行数据的查询、添加、修改和删除等操作，以实现数据的读取和更新。</li><li><strong>业务逻辑处理</strong>：后端接口包含了后端服务器的业务逻辑实现。它可以处理请求参数、进行数据验证、执行业务规则、与数据库或其他服务进行交互等操作。</li><li><strong>安全性和身份验证</strong>：后端接口通常涉及敏感数据和操作，因此安全性是一个重要考虑因素。接口可以实现身份验证和权限验证，以确保只有经过授权的用户才能访问和操作相应的资源。</li><li><strong>错误处理和异常处理</strong>：后端接口负责处理请求中的错误和异常情况，并返回适当的错误码和错误信息给客户端。这样客户端可以根据返回的信息进行相应的处理和反馈。</li><li><strong>版本管理和演进</strong>：后端接口可能需要进行版本管理，以便在接口发生变化或升级时兼容旧版本的客户端。版本管理可以保证接口的稳定性和向后兼容性。</li></ol><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> ==高频面试题==</h2><h3 id="_1-什么是socket-如何在java中使用socket进行网络通信" tabindex="-1"><a class="header-anchor" href="#_1-什么是socket-如何在java中使用socket进行网络通信" aria-hidden="true">#</a> 1, 什么是Socket？如何在Java中使用Socket进行网络通信？</h3><p>Socket (套接字 socket) 是一种网络编程的抽象，它提供了一种机制，使计算机之间能够进行通信。</p><p>在Java中，可以使用Socket类和ServerSocket类来创建套接字，通过调用相应的方法来建立连接、发送和接收数据。</p><p><strong>代码示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SocketExample</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 服务器端代码</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 创建服务器套接字，监听指定端口</span>\n            <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 接受客户端连接</span>\n            <span class="token class-name">Socket</span> clientSocket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 在此处进行与客户端的通信</span>\n            \n            <span class="token comment">// 关闭服务器套接字</span>\n            serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 客户端代码</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 创建客户端套接字，连接到指定的服务器和端口</span>\n            <span class="token class-name">Socket</span> clientSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 在此处进行与服务器的通信</span>\n            \n            <span class="token comment">// 关闭客户端套接字</span>\n            clientSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-tcp和udp有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-tcp和udp有什么区别" aria-hidden="true">#</a> 2, TCP和UDP有什么区别？</h3><p><strong>TCP</strong>（Transmission Control Protocol）是面向连接的可靠传输协议，它通过三次握手建立可靠的连接，保证数据的有序和可靠传输。</p><p><strong>UDP</strong>（User Datagram Protocol）是无连接的不可靠传输协议，它不对数据传输的可靠性进行保证，更适用于实时性要求高的场景。</p><h3 id="_3-java中的多线程编程如何应用于网络编程" tabindex="-1"><a class="header-anchor" href="#_3-java中的多线程编程如何应用于网络编程" aria-hidden="true">#</a> 3, Java中的多线程编程如何应用于网络编程？</h3><p>Java中的多线程编程可以用于处理并发的网络请求。每个连接可以创建一个线程，单独处理该连接的请求和响应。Java的并发包提供了Executor框架和线程池等工具类，可以方便地管理和调度多个线程。</p><h3 id="_4-url和uri有什么区别" tabindex="-1"><a class="header-anchor" href="#_4-url和uri有什么区别" aria-hidden="true">#</a> 4, URL和URI有什么区别？</h3><p>URL（Uniform Resource Locator <strong>统一资源定位器</strong>）是指向互联网上资源（如网页、图片等）的地址，它包含了协议、主机名、端口号、路径和查询参数等信息。</p><p>而URI（Uniform Resource Identifier）<strong>是统一资源标识符</strong>，是一种用于标识某个资源的字符串。</p><h3 id="_5-java中如何实现http客户端和服务端" tabindex="-1"><a class="header-anchor" href="#_5-java中如何实现http客户端和服务端" aria-hidden="true">#</a> 5, Java中如何实现HTTP客户端和服务端？</h3><p><strong>实现客户端</strong>: 在Java中，可以使用HttpURLConnection类或HttpClient库来实现HTTP客户端，通过发送HTTP请求并接收响应来实现与服务器的通信。</p><p><strong>实现服务端</strong>: 而实现HTTP服务端可以通过使用Java内置的HttpServer类或使用开源框架如Spring Boot来创建HTTP服务器。</p><h3 id="_6-websocket是什么-如何在java中实现websocket通信" tabindex="-1"><a class="header-anchor" href="#_6-websocket是什么-如何在java中实现websocket通信" aria-hidden="true">#</a> 6, WebSocket是什么？如何在Java中实现WebSocket通信？</h3><p>WebSocket是一种基于TCP协议的全双工通信协议，可以在浏览器和服务器之间创建持久的连接。</p><p>在Java中，可以使用javax.websocket包提供的API来实现WebSocket通信，通过编写WebSocket Endpoint来处理WebSocket的连接、消息收发等操作。</p><h3 id="_7-如何确保网络通信的安全性" tabindex="-1"><a class="header-anchor" href="#_7-如何确保网络通信的安全性" aria-hidden="true">#</a> 7, 如何确保网络通信的安全性？</h3><p>可以使用SSL/TLS协议来确保网络通信的安全性。在Java中，可以使用javax.net.ssl包提供的API来实现使用SSL/TLS进行加密通信。可以配置服务器端的证书和客户端的信任链，确保通信双方的身份认证和数据加密。</p><h3 id="_8-如何处理网络异常和超时" tabindex="-1"><a class="header-anchor" href="#_8-如何处理网络异常和超时" aria-hidden="true">#</a> 8, 如何处理网络异常和超时？</h3><p>在Java中，可以使用try-catch块来捕捉网络异常，并进行相应的处理。可以设置Socket的读写超时时间，确保在网络操作超时后能够及时返回。</p><h3 id="_9-如何实现文件传输" tabindex="-1"><a class="header-anchor" href="#_9-如何实现文件传输" aria-hidden="true">#</a> 9, 如何实现文件传输?</h3><p>可以使用Java的IO流或者NIO来实现文件传输。可以通过Socket将文件数据分片发送，或者通过文件传输协议如FTP、SFTP等来实现文件传输。</p><h3 id="_10-如何进行网络性能调优" tabindex="-1"><a class="header-anchor" href="#_10-如何进行网络性能调优" aria-hidden="true">#</a> 10, 如何进行网络性能调优？</h3><ul><li>可以使用<strong>线程池</strong>来管理并发请求，避免频繁创建和销毁线程。</li><li>可以使用<strong>NIO</strong>来实现非阻塞IO，提高网络通信的效率。</li><li>可以优化<strong>网络协议</strong>和<strong>通信方式</strong>，减少数据传输的开销。</li><li>还可以使用网络性能分析工具来定位瓶颈并进行优化。</li></ul><h3 id="_11-什么是-httponly-为什么要设置" tabindex="-1"><a class="header-anchor" href="#_11-什么是-httponly-为什么要设置" aria-hidden="true">#</a> 11, 什么是 HttpOnly ? 为什么要设置 ?</h3><p><strong>HttpOnly是一个用于设置HTTP响应中的Cookie属性的标志。</strong></p><p>当将Cookie标记为HttpOnly时，它只能通过HTTP协议传输，不可通过JavaScript访问。这意味着在浏览器中运行的JavaScript代码无法读取或修改带有HttpOnly标志的Cookie。</p><p>HttpOnly标志的目的是<strong>增加Web应用程序的安全性</strong>，特别是在防止跨站点脚本攻击（XSS）方面。XSS攻击利用恶意脚本注入到受攻击网站中，然后这些脚本可以读取和窃取包括Cookie在内的敏感信息。通过将关键的会话Cookie标记为HttpOnly，可以防止攻击者通过JavaScript访问这些Cookie，从而降低XSS攻击的风险。</p><blockquote><p>设置Cookie为HttpOnly，可以在HTTP响应头中添加&quot;Set-Cookie&quot;标头，并包含&quot;HttpOnly&quot;属性。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Set</span><span class="token operator">-</span><span class="token class-name">Cookie</span><span class="token operator">:</span> sessionid<span class="token operator">=</span>abc123<span class="token punctuation">;</span> <span class="token class-name">HttpOnly</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_12-什么是-xss-攻击-如何防范" tabindex="-1"><a class="header-anchor" href="#_12-什么是-xss-攻击-如何防范" aria-hidden="true">#</a> 12, 什么是 XSS 攻击 ? 如何防范 ?</h3><p><strong>跨站脚本攻击</strong></p><p>XSS（Cross-Site Scripting）攻击是一种常见的Web应用程序安全漏洞，它允许攻击者将恶意脚本注入到受攻击网站的页面中，然后在用户浏览器中执行这些恶意脚本。</p><p><strong>场景</strong></p><p>XSS攻击通常发生在具有<strong>用户交互功能</strong>的网页应用程序中，如留言板、评论系统、搜索框等。攻击者通过在输入字段或参数中插入恶意脚本，利用了浏览器对Web页面的信任，使其将恶意脚本当作正常的脚本执行。当用户浏览受感染的页面时，恶意脚本将在其浏览器中执行，可能导致以下问题：</p><ol><li><strong>盗取用户信息</strong>：攻击者可以利用XSS攻击窃取用户的敏感信息，如登录凭据、会话令牌、个人资料等。</li><li><strong>会话劫持</strong>：通过获取用户的会话令牌，攻击者可以伪造用户身份，访问或操作用户的账户。</li><li><strong>篡改网页内容</strong>：攻击者可以修改受感染页面的内容，包括用户看到的文本、图像或链接。这可能导致误导用户、传播恶意软件或进行其他恶意活动</li></ol><p><strong>解决方案</strong></p><p>为了防止XSS攻击，开发人员应采取以下安全措施：</p><ul><li>对用户输入进行严格的验证和过滤，确保只接受预期的输入。</li><li>对于输出到页面的内容，进行适当的编码，以防止恶意脚本的执行。</li><li>使用安全的编程框架和库，并及时更新和修补已知的漏洞。</li><li>实施内容安全策略（Content Security Policy）来限制页面中可执行的脚本和资源。</li><li>对于敏感操作和会话管理，使用安全的会话机制和安全的Cookie配置。</li></ul><h3 id="_13-说一下转发和重定向的区别" tabindex="-1"><a class="header-anchor" href="#_13-说一下转发和重定向的区别" aria-hidden="true">#</a> 13, 说一下转发和重定向的区别 ?</h3><ul><li>1、请求次数： 转发一次，重定向两次</li><li>2、浏览器地址：转发不变，重定向改变</li><li>3、使用request域共享数据：转发是一次请求可以共享数据，重定向浏览器发起两次请求，不能共享数据</li><li>4、相对路径： 转发地址不变会造成转发后的页面中的相对位置发生改变引起相对路径失效，重定向不会</li><li>5、效率：转发浏览器一次请求效率高，重定向效率低</li><li>6、WEB-INF下资源：转发可以访问，重定向不可以</li></ul><h3 id="_14-和-的区别" tabindex="-1"><a class="header-anchor" href="#_14-和-的区别" aria-hidden="true">#</a> 14, == 和 === 的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>区别：“==”表示相等，“===”表示严格相等。\n\n“==”运算符会在进行相等比较之前先进行必要值的类型转换；而“===”运算符不会执行类型转换，因此如果两个值类型不同，那么比较时，直接返回false。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-http-常见的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#_15-http-常见的状态码有哪些" aria-hidden="true">#</a> 15, Http 常见的状态码有哪些?</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>200		ok 客户端请求成功\n\n301		Moved Permanently 永久移除，请求的 URL 已移走。Response 中应该包含一个 Location URL, 说明资源现在所处的位置\n\n302  found 重定向\n\n400  Bad Request //客户端请求有语法错误，不能被服务器所理解\n\n401  Unauthorized //请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用\n\n403  Forbidden //服务器收到请求，但是拒绝提供服务\n\n404  Not Found //请求资源不存在，eg：输入了错误的 URL\n\n500  Internal Server Error //服务器发生不可预期的错误\n\n503  Server Unavailable //服务器当前不能处理客户端的请求，一段时间后可能恢复正常\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-http-请求由哪三部分组成" tabindex="-1"><a class="header-anchor" href="#_16-http-请求由哪三部分组成" aria-hidden="true">#</a> 16, Http 请求由哪三部分组成</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http协议报文\n    1.请求报文(请求行/请求头/请求数据/空行)\n        请求行\n            求方法字段、URL字段和HTTP协议版本\n            例如：GET /index.html HTTP/1.1\n                get方法将数据拼接在url后面，传递参数受限\n            请求方法：\n                GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT\n        请求头(key value形式)\n            User-Agent：产生请求的浏览器类型。\n            Accept：客户端可识别的内容类型列表。\n            Host：主机地址\n        请求数据\n            post方法中，会把数据以key value形式发送请求\n        空行\n            发送回车符和换行符，通知服务器以下不再有请求头\n            \n    2.响应报文(状态行、消息报头、响应正文)\n        状态行\n        消息报头\n        响应正文\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 65);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("table", null, [
      _hoisted_65,
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          _hoisted_66,
          _hoisted_67,
          createBaseVNode("td", null, [
            _hoisted_68,
            createBaseVNode("a", _hoisted_69, [
              createTextVNode("客户端 (opens new window) (opens new window)"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            _hoisted_70
          ])
        ]),
        _hoisted_71,
        _hoisted_72,
        _hoisted_73,
        _hoisted_74,
        _hoisted_75,
        _hoisted_76,
        _hoisted_77,
        _hoisted_78,
        _hoisted_79,
        _hoisted_80,
        _hoisted_81,
        _hoisted_82,
        _hoisted_83,
        _hoisted_84,
        _hoisted_85,
        _hoisted_86,
        _hoisted_87,
        _hoisted_88,
        _hoisted_89,
        _hoisted_90,
        _hoisted_91,
        _hoisted_92,
        _hoisted_93,
        _hoisted_94,
        _hoisted_95,
        _hoisted_96,
        _hoisted_97,
        _hoisted_98,
        _hoisted_99,
        _hoisted_100,
        _hoisted_101,
        _hoisted_102,
        _hoisted_103,
        _hoisted_104,
        _hoisted_105,
        _hoisted_106,
        _hoisted_107,
        _hoisted_108,
        _hoisted_109,
        _hoisted_110,
        _hoisted_111,
        _hoisted_112,
        _hoisted_113,
        _hoisted_114
      ])
    ]),
    _hoisted_115
  ]);
}
const JavaWangluobiancheng_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java-wangluobiancheng.html.vue"]]);
export {
  JavaWangluobiancheng_html as default
};
