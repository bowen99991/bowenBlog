import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-c9c19bdf.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h3 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和" aria-hidden="true">#</a> 1, 两数之和</h3><blockquote><p>两数之和算法是一种用于在给定数组中找到两个数之和等于目标值的算法。</p></blockquote><p>算法步骤如下：</p><ol><li>创建一个空的哈希表（也可以用对象来实现）。</li><li>遍历给定数组，对于每个元素执行以下操作： <ul><li>计算目标值与当前元素的差值：<code>diff = target - nums[i]</code>。</li><li>检查哈希表中是否存在这个差值。如果存在，说明前面已经遍历过的元素中有一个与当前元素之和等于目标值。返回这两个元素的索引。</li><li>如果不存在，将当前元素和索引存储到哈希表中，以便后续查找。</li></ul></li><li>如果遍历完整个数组都没有找到满足条件的两个数，则返回一个空数组或者抛出一个错误。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> diff <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析:</strong></p><blockquote><p>在这个例子中，我们使用了一个 Map 来存储已经遍历过的数字和它们的索引。我们遍历数组，对于每个元素，计算目标值与当前元素的差值，并查看哈希表中是否存在这个差值。如果存在，我们将返回这两个数的索引；否则，我们将当前元素和索引存储到哈希表中，以便以后的查找。</p><p>这种算法的时间复杂度为 O(n)，其中 n 是给定数组的长度。它在一次遍历中就可以解决问题，因此效率较高。而使用哈希表可以快速查找已经遍历过的元素，因此这种算法的时间复杂度是线性的。</p></blockquote>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
const suanfaLianxi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "suanfa-lianxi.html.vue"]]);
export {
  suanfaLianxi_html as default
};
