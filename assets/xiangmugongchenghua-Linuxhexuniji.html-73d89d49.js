import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-0d7592ba.js";
const _imports_0 = "/bowenBlog/assets/image-20240119133127591-bc0f8565.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="linux-操作系统" tabindex="-1"><a class="header-anchor" href="#linux-操作系统" aria-hidden="true">#</a> Linux 操作系统</h2><h3 id="_1-linux系统根目录的常用命令和作用" tabindex="-1"><a class="header-anchor" href="#_1-linux系统根目录的常用命令和作用" aria-hidden="true">#</a> 1, Linux系统根目录的常用命令和作用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin 二进制可执行命令。该目录下存放着普通用户的命令\n/dev 系统的设备文件，即设备的驱动程序\n/home 存放用户文件的主目录，用户数据\n/lib 存放着和系统运行相关的库文件\n/mnt 存放临时的映射文件，通常是一些用来安装其他设备的子目录\n/boot 存放启动linux的核心文件\n/media 存放着可移除的设备，比如软盘，光盘\n/proc 存放着用户与内核的交互信息\n/sbin 系统的管理命令，这里存放的是系统管理员使用的程序\n/srv 系统启动服务时可以访问的数据库目录\n/tmp 临时文件，重启后自动清空\n/var 存放系统产生的经常变化的文件\n/etc 系统所有的配置文件都在这个目录中 （添加环境变量）\n/opt (option : 自由选择)主要给源码安装软件时选择的安装目录位置\n/root 超级用户的目录\n/selinux 主要用来加固操作系统，提高系统的安全性\n/sys 管理设备文件\n/usr 最大的目录，存放着应用程序和文件\n/lost-found 这个目录平时是空的，当系统非正常关机而留下的“无家可归”的文件便会储存\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-常用命令" tabindex="-1"><a class="header-anchor" href="#_2-常用命令" aria-hidden="true">#</a> 2, 常用命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一、服务类命令\n（1）systemctl start 服务名 - 开启服务\n（2）systemctl stop 服务名 - 关闭服务\n（3）systemctl restart 服务名 - 重启服务\n（4）systemctl status 服务名 - 查看服务\n\n二、文件目录类指令\n（1）pwd - 显示当前目录的绝对路径\n（2）ls - 显示当前路径下的文件和目录\n（3）cd - 切换至指定目录\n（4）mkdir - 创建目录\n（5）rmdir - 删除目录(空目录)\n（6）touch - 创建空文件\n（7）cp - 拷贝文件或目录到指定文件或目录\n（8）rm - 删除文件或目录\n（9）mv - 移动文件与目录或重命名\n（10）cat - 查看文件内容\n（11）more - 文本过滤器\n（12）less - 分屏查看文件内容\n（13）echo - 输出内容到控制台\n（14）head - 显示文件开头部分\n（15）tail - 显示文件尾部的部分\n（16）&gt; / &gt;&gt; - 输出重定向/追加\n（17）ln - 软链接\n（18）history - 查看执行过的的历史命令\n\n三、搜索查找类指令\n（1）find - 查找文件\n（2）locate - 定位文件路径\n（3）which - 定位指令路径\n（4）grep - 过滤查找\n\n四、压缩解压类指令\n（1）gzip - 压缩文件\n（2）gunzip - 解压文件\n（3）zip - 压缩文件或目录\n（4）unzip - 解压文件或目录\n（5）tar - 打包\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vmware-虚拟机" tabindex="-1"><a class="header-anchor" href="#vmware-虚拟机" aria-hidden="true">#</a> VMWare 虚拟机</h2><h3 id="_1-虚拟机工作的三种模式" tabindex="-1"><a class="header-anchor" href="#_1-虚拟机工作的三种模式" aria-hidden="true">#</a> 1, 虚拟机工作的三种模式</h3><ul><li>桥接模式</li><li>Nat模式</li><li>主机模式</li></ul><p>- bridged(桥接模式)：VMWare虚拟出来的操作系统就像是局域网中的一台独立的主机，它可以访问网内任何一台机器。需要手工为虚拟系统配置IP地址、子网掩码，而且还要和宿主机器处于同一网段，这样虚拟系统才能和宿主机器进行通信。</p><p>- NAT(网络地址转换模式)：让虚拟系统借助NAT(网络地址转换)功能，通过宿主机器所在的网络来访问公网。虚拟系统无法和本局域网中的其他真实主机进行通讯。</p><p>- host-only(主机模式)：所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔离开的。虚拟系统和宿主机器系统是可以相互通信的。如果想利用VMWare创建一个与网内其他机器相隔离的虚拟系统，进行某些特殊的网络调试工作，可选择host-only模式。</p><p><img src="' + _imports_0 + '" alt="image-20240119133127591"></p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
const xiangmugongchenghuaLinuxhexuniji_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "xiangmugongchenghua-Linuxhexuniji.html.vue"]]);
export {
  xiangmugongchenghuaLinuxhexuniji_html as default
};
