import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-bd53c79f.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>验证数字：^[0-9]*$\n\n验证n位的数字：^\\d{n}$\n\n验证至少n位数字：^\\d{n,}$\n\n验证m-n位的数字：^\\d{m,n}$\n\n验证零和非零开头的数字：^(0|[1-9][0-9]*)$\n\n验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$\n\n验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$\n\n验证非零的正整数：^\\+?[1-9][0-9]*$\n\n验证非零的负整数：^\\-[1-9][0-9]*$\n\n验证非负整数（正整数 + 0）  ^\\d+$\n\n验证非正整数（负整数 + 0）  ^((-\\d+)|(0+))$\n\n验证长度为3的字符：^.{3}$\n\n验证由26个英文字母组成的字符串：^[A-Za-z]+$\n\n验证由26个大写英文字母组成的字符串：^[A-Z]+$\n\n验证由26个小写英文字母组成的字符串：^[a-z]+$\n\n验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$\n\n验证由数字、26个英文字母或者下划线组成的字符串：^\\w+$\n\n验证用户密码:^[a-zA-Z]\\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。\n\n验证是否含有 ^%&amp;&#39;,;=?$\\&quot; 等字符：[^%&amp;&#39;,;=?$\\x22]+\n\n验证汉字：^[\\u4e00-\\u9fa5],{0,}$\n\n验证Email地址：^\\w+[-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$\n\n验证InternetURL：^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$\n\n验证电话号码：^(\\d3,4|\\d{3,4}-)?\\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。\n\n验证身份证号（15位或18位数字）：^\\d{15}|\\d{}18$\n\n验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”\n\n验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$    正确格式为：01、09和1、31。\n\n整数：^-?\\d+$\n\n非负浮点数（正浮点数 + 0）：^\\d+(\\.\\d+)?$\n\n正浮点数   ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$\n\n非正浮点数（负浮点数 + 0） ^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$\n\n负浮点数  ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$\n\n浮点数  ^(-?\\d+)(\\.\\d+)?$\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const changyongzhengzebiaodashi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "changyongzhengzebiaodashi.html.vue"]]);
export {
  changyongzhengzebiaodashi_html as default
};
