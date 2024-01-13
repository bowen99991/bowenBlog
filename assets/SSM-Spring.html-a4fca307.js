import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-243414ea.js";
const _imports_0 = "/bowenBlog/assets/image-20240113103151666-0317f67e.png";
const _imports_1 = "/bowenBlog/assets/image-20240113103204636-d6e411a4.png";
const _imports_2 = "/bowenBlog/assets/image-20240113103222569-96dde986.png";
const _imports_3 = "/bowenBlog/assets/image-20240113103408311-c608f22e.png";
const _imports_4 = "/bowenBlog/assets/image-20240113103542958-51ac9529.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="一-初识spring框架" tabindex="-1"><a class="header-anchor" href="#一-初识spring框架" aria-hidden="true">#</a> 一，初识Spring框架</h2><h3 id="_1-为什么要学框架" tabindex="-1"><a class="header-anchor" href="#_1-为什么要学框架" aria-hidden="true">#</a> 1, 为什么要学框架</h3><p>Spring技术是JavaEE开发必备技能，企业开发技术选型命中率&gt;90%。有的优势</p><ul><li><strong>简化开发</strong>，降低企业级开发的复杂性 <ul><li>IOC 反转控制</li><li>AOP 面向切面编程 <ul><li>事务处理</li></ul></li></ul></li><li><strong>框架整合</strong>，高效整合其他技术，提高企业级应用开发与运行效率 <ul><li>MyBatis</li><li>MyBatis-plus</li><li>Struts</li><li>Struts2</li><li>Hibernate</li><li>.......</li></ul></li></ul><h3 id="_2-认识spring" tabindex="-1"><a class="header-anchor" href="#_2-认识spring" aria-hidden="true">#</a> 2, 认识Spring</h3><ul><li>官网：https://spring.io</li><li>Spring发展到今天已经形成了一种开发的生态圈，Spring提供了若干个项目，每个项目用于完成特定的功能。</li></ul><p><img src="' + _imports_0 + '" alt="image-20240113103151666"></p><p><strong>Spring发展史</strong></p><p><img src="' + _imports_1 + '" alt="image-20240113103204636"></p><p><strong>系统架构图</strong></p><p>Spring Framework是Spring生态圈中最基础的项目，是其他项目的根基</p><p><img src="' + _imports_2 + '" alt="image-20240113103222569"></p><p>目前我们的代码存在什么问题以及怎么解决这些问题？</p><ul><li>代码耦合度偏高</li></ul><p><img src="' + _imports_3 + '" alt="image-20240113103408311"></p><p>解决方案：使用对象时，在程序中不要主动使用new产生对象，转换为由外部提供对象</p><p><strong>核心概念：</strong></p><ul><li>IOC（Inversion of Control）控制反转。使用对象时，由主动new产生对象转换为由外部提供对象，此过程中对象创建控制权由程序转移到外部，此思想称为<strong>控制反转</strong>。通俗的讲就是“将new对象的权利交给Spring，我们从Spring中获取对象使用即可”</li><li>Spring技术对IOC思想进行了实现。**Spring提供了一个容器，称为IOC容器，用来充当IOC思想中的“外部”。**IOC容器负责对象的创建、初始化等一系列工作，被创建或被管理的对象在IoC容器中统称为Bean</li><li>DI（Dependency Injection）依赖注入。在容器中建立bean与bean之间的依赖关系的整个过程，称为<strong>依赖注入</strong>。</li></ul><p><img src="' + _imports_4 + '" alt="image-20240113103542958"></p><p>这样做的目录是充分解耦，使用IOC容器管理bean，在IOC容器内将有依赖关系的bean进行关系绑定（DI）。最终使用对象时不仅可以直接从IoC容器中获取，并且获取到的bean已经绑定了所有的依赖关系。</p><p><strong>Spring Framework学习路线</strong></p><ol><li>核心容器，IOC/DI，容器的基本操作</li><li>AOP，AOP基础操作，AOP实用开发</li><li>事务</li><li>整合MyBatis</li></ol><h2 id="二-ioc和di入门案例【重点】" tabindex="-1"><a class="header-anchor" href="#二-ioc和di入门案例【重点】" aria-hidden="true">#</a> 二，==IOC和DI入门案例【重点】==</h2><h3 id="_1-ioc入门案例" tabindex="-1"><a class="header-anchor" href="#_1-ioc入门案例" aria-hidden="true">#</a> 1, IOC入门案例</h3><p>入门案例思路分析</p><ol><li>管理什么？(Service与Dao)</li><li>如何将被管理的对象告知IOC容器？(配置文件)</li><li>被管理的对象交给IOC容器，如何获取到IoC容器？(接口)</li><li>IOC容器得到后，如何从容器中获取bean？(接口方法)</li><li>使用Spring导入哪些坐标？(pom.xml)</li></ol>', 27);
const _hoisted_28 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_28);
}
const SSMSpring_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SSM-Spring.html.vue"]]);
export {
  SSMSpring_html as default
};
