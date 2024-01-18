import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app-4f14d05c.js";
const _imports_0 = "/bowenBlog/assets/image-20231130194229405-7e8ffd63.png";
const _imports_1 = "/bowenBlog/assets/image-20231130194512803-696e6259.png";
const _imports_2 = "/bowenBlog/assets/image-20231130194551877-a265ded6.png";
const _imports_3 = "/bowenBlog/assets/image-20231130194609986-66a4193b.png";
const _imports_4 = "/bowenBlog/assets/image-20231130194627775-ebb68f66.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<hr><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="一-javascript-语法" tabindex="-1"><a class="header-anchor" href="#一-javascript-语法" aria-hidden="true">#</a> 一, JavaScript 语法</h2><hr><ul><li><p>var 声明一个变量</p></li><li><p>let 声明一个块级作用域的局部变量</p></li><li><p>const 声明一个只读的常量</p></li><li><p>if 条件语句</p></li><li><p>else if 语句的另一部分</p></li><li><p>for 循环语句, 用于创建一个循环</p></li><li><p>while 创建一个当指定的条件为真时的循环</p></li><li><p>do 用于创建一个至少执行一次的循环</p></li><li><p>switch 选择语句, 用于执行多个代码块之一</p></li><li><p>case switch 语句中的一个条件</p></li><li><p>default switch 语句中的默认代码块</p></li><li><p>break 用于跳出循环或 switch 语句</p></li><li><p>continue 跳过循环的剩余部分进行下一次循环</p></li><li><p>function 声明一个函数</p></li><li><p>return 指定函数的返回值</p></li><li><p>try 定义一个测试块</p></li><li><p>catch 定义当 try 发生错误时执行的代码块</p></li><li><p>finally 无论 try 是否发生错误, 都执行的代码</p></li><li><p>throw 抛出一个异常</p></li><li><p>class 声明一个类</p></li><li><p>extends 用于类继承</p></li><li><p>super 用于应用父类的构造函数</p></li><li><p>import 引入模块</p></li><li><p>export 导出模块</p></li><li><p>new 创建一个对象</p></li><li><p>this 引用当前对象</p></li><li><p>delete 删除对象的属性</p></li><li><p>typeof 返回变量的类型</p></li><li><p>instanceof 检测对象是否为某个构造函数的实例</p></li><li><p>in 检测对象是否具有指定的属性</p></li><li><p>void 用于指定没有返回值的表达式</p></li><li><p>yield 暂停和恢复一个生成器函数</p></li><li><p>async 声明一个异步函数</p></li><li><p>await 暂停异步函数的执行, 等待 promise 的解决; 用于等待一个 async 函数的结果</p></li><li><p>abstract 用于定义抽象类或在类内定义抽象方法</p></li><li><p>arguments 引用函数的参数集合</p></li><li><p>boolean 基本数据类型之一</p></li><li><p>byte 表示一个子节的数据类型</p></li><li><p>char 表示一个字符的数据类型</p></li><li><p>double 双精度浮点数据类型</p></li><li><p>enum 用于定义一组命名常量</p></li><li><p>eval 执行字符串表示的 JavaScript 代码</p></li><li><p>final 使变量, 方法或类不能被更改</p></li><li><p>float 浮点数据类型</p></li><li><p>goto 用于跳转到程序中的标记位置</p></li><li><p>implements 用于实现一个或多个接口</p></li><li><p>int 整型数据类型</p></li><li><p>interface 用于定义接口</p></li><li><p>long 长整型数据类型</p></li><li><p>native 声明一个方法由非 JavaScript 代码实现</p></li><li><p>package 用于定义代码的命名空间</p></li><li><p>private 使类成员变为私有</p></li><li><p>protected 使类成员受保护</p></li><li><p>public 使类成员变为公开</p></li><li><p>short 短整型数据类型</p></li><li><p>static 定义类的静态方法或属性</p></li><li><p>synchronized 用于标记代码块在多线程中同步执行</p></li><li><p>throws 声明一个方法可能抛出的异常</p></li><li><p>transient 指示某个字段不是该对象的持久部分</p></li><li><p>volatile 标识字段可能被多个线程同时访问</p></li><li><p>function* 定义一个生成器函数</p></li><li><p>null 表示空值或 &#39;无&#39;</p></li><li><p>true false 布尔类型的真值假值</p></li><li><p>undefined 表示未定义的值</p></li><li><p>NaN 表示 &#39;不是一个数字 not a number&#39;</p></li><li><p>infinity 表示无穷大 -infinity 表示负的无穷大(表示一个比任何实数都小的数值)</p></li><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 输出: Infinity</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: -Infinity</span>\n<span class="token comment">// 正无穷大（Infinity）表示一个比任何实数都大的数值，而负无穷大（-Infinity）表示一个比任何实数都小的数值。</span>\n\n<span class="token comment">// 然而，在 JavaScript 中没有直接表示无穷小的特殊值。如果需要表示无穷小，可以使用负无穷大的倒数（1/-Infinity）来近似表示。请注意，这只是一种近似的表示方式，因为在实际数学中，无穷小不等于负无穷大的倒数。</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: 0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>of 在迭代如数组等集合对象时</p></li></ul><h2 id="二-javascript-函数" tabindex="-1"><a class="header-anchor" href="#二-javascript-函数" aria-hidden="true">#</a> 二, JavaScript 函数</h2><hr><ul><li><p>alert() 显示警告对话框</p></li><li><p>prompt() 显示提示框以获取用户输入</p></li><li><p>confirm() 显示确认对话框</p></li><li><p>parseInt() 将字符串转换为整数</p></li><li><p>parseFloat() 将字符串转换为浮点数</p></li><li><p>isNaN() 检查值是否为 NaN</p></li><li><p>isFinite() 检查值是否为有限数</p></li><li><p>decodeURI() 解码统一资源标识符</p></li><li><p>decodeURIComponent() 解码 URI 组件</p></li><li><p>encodeURI() 编码为合法的 URI</p></li><li><p>encodeURIComponent() 编码 URI 组件</p></li><li><p>escape() 对字符串进行编码</p></li><li><p>unescape() 对字符串进行编码</p></li><li><p>eval() 执行字符串表示的 JavaScript 代码</p></li><li><p>setTimeout() 设置延时执行函数</p></li><li><p>clearTimeout () 清除由 setTimeout () 设置的延时</p></li><li><p>setInterval () 设置定时重复执行的函数</p></li><li><p>clearInterval () 清除由... 设置的定时器</p></li><li><p>console.log() 在控制台输出信息</p></li><li><p>console.error() 在控制台输出错误信息</p></li><li><p>console.warn() 在控制台输出警告信息</p></li><li><p>console.info() 在控制台输出信息</p></li><li><p>console.debug() 输出调试信息</p></li><li><p>console.clean () 清除控制台信息</p></li><li><p>Date() 创建一个新的日期对象</p></li><li><p>Date.parse() 解析日期字符串</p></li><li><p>Date.UTC () 返回一个基于UTC 的时间戳</p></li></ul><p><strong>Math 有关的 AP</strong>I</p><ul><li>Math.random () 返回一个随机数</li><li>max 返回最大值</li><li>min 返回最小值</li><li>round 四舍五入到最接近的整数</li><li>ceil 向上取整</li></ul><p><img src="' + _imports_0 + '" alt="image-20231130194229405"></p><p><strong>Number 有关的 API</strong></p><ul><li>Number () 将对象转换为数字</li><li>isFinite 检查数字是否有限</li><li>isInteger 检查数字是否为整数</li><li><img src="' + _imports_1 + '" alt="image-20231130194512803"></li></ul><p><strong>Sting 有关的 API</strong></p><p><img src="' + _imports_2 + '" alt="image-20231130194551877"></p><p><img src="' + _imports_3 + '" alt="image-20231130194609986"></p><p><strong>Array 有关的 API</strong></p><p><img src="' + _imports_4 + '" alt="image-20231130194627775"></p><h2 id="三-javascript-数组" tabindex="-1"><a class="header-anchor" href="#三-javascript-数组" aria-hidden="true">#</a> 三, JavaScript 数组*</h2><hr><ol><li><p><strong>迭代数组元素</strong>：</p><ul><li><p><code>forEach(callback(element, index, array))</code>：对数组的每个元素执行一个回调函数。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>该方法没有返回值，仅用于迭代数组。</li></ul></li><li><p><code>map(callback(element, index, array))</code>：根据数组的每个元素生成一个新的数组。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回一个新的数组，数组中的每个元素是回调函数的返回值。</li></ul></li><li><p><code>filter(callback(element, index, array))</code>：根据指定条件过滤数组的元素，生成一个新的包含符合条件的元素的数组。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回一个新的数组，该数组包含符合条件的元素。</li></ul></li><li><p><code>reduce(callback(accumulator, currentValue, index, array), initialValue)</code>：对数组的元素进行累积计算，返回一个累积结果。</p><ul><li><code>callback</code>：要执行的回调函数，接受四个参数：累加器（上一次回调的返回值或初始值）、当前元素、当前元素的索引和数组本身。</li><li><code>initialValue</code>（可选）：作为初始累加器的值。如果未提供，则使用数组的第一个元素作为初始值。</li><li>返回最后的累积结果。</li></ul></li></ul></li><li><p><strong>修改数组</strong>：</p><ul><li><p><code>push(element1, element2, ..., elementN)</code>：向数组末尾添加一个或多个元素，并返回新数组的长度。</p></li><li><p><code>pop()</code>：从数组末尾移除并返回最后一个元素。</p></li><li><p><code>shift()</code>：从数组开头移除并返回第一个元素。</p></li><li><p><code>unshift(element1, element2, ..., elementN)</code>：向数组开头添加一个或多个元素，并返回新数组的长度。</p></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>splice(start, deleteCount, item1, item2, ..., itemN)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：从数组中删除、替换或插入元素，并返回被删除的元素组成的数组。</p><ul><li><code>start</code>：指定开始操作的索引。</li><li><code>deleteCount</code>：要删除的元素个数。</li><li><code>item1, item2, ..., itemN</code>（可选）：要插入到数组中的元素。</li></ul></li></ul></li><li><p><strong>查询和查找</strong>：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>indexOf(searchElement, fromIndex)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：返回指定元素在数组中首次出现的索引，如果不存在则返回 -1。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：从指定索引开始搜索，默认为 0。</li></ul></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lastIndexOf(searchElement, fromIndex)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：返回指定元素在数组中最后一次出现的索引，如果不存在则返回 -1。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：从指定索引开始反向搜索，默认为数组的末尾。</li></ul></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>includes(searchElement, fromIndex)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：判断数组是否包含指定元素，返回布尔值。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：从指定索引开始搜索，默认为 0。</li></ul></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find(callback(element, index, array))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：返回符合指定条件的第一个元素，如果不存在则返回undefined。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回满足条件的第一个元素，如果不存在则返回 <code>undefined</code>。</li></ul></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>findIndex(callback(element, index, array))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：返回符合指定条件的第一个元素的索引，如果不存在则返回 -1。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回满足条件的第一个元素的索引，如果不存在则返回 -1。</li></ul></li></ul></li><li><p><strong>转换和连接</strong>：</p><ul><li><p><code>join(separator)</code>：将数组的所有元素连接成一个字符串。</p><ul><li><code>separator</code>（可选）：指定元素之间的分隔符，默认为逗号 <code>,</code>。</li><li>返回由数组元素组成的字符串。</li></ul></li><li><p><code>concat(array1, array2, ..., arrayN)</code>：合并两个或多个数组，生成一个新的数组。</p><ul><li><code>array1, array2, ..., arrayN</code>（可选）：要合并的数组。</li><li>返回合并后的新数组。</li></ul></li><li><p><code>slice(start, end)</code>：返回指定索引范围内的元素，生成一个新的数组。</p><ul><li><code>start</code>：指定起始索引。</li><li><code>end</code>（可选）：指定结束索引（不包含在结果中）。</li><li>返回包含指定范围内元素的新数组。</li></ul></li></ul></li><li><p><strong>排序和反转</strong></p><ul><li><p><code>sort(compareFunction)</code>：对数组元素进行排序，默认按照 Unicode 码点进行排序，并修改原始数组。</p><ul><li><code>compareFunction</code>（可选）：用于定义排序顺序的比较函数。如果未提供，则元素会被转换为字符串并按照 Unicode 码点进行排序。</li><li>返回排序后的数组。</li></ul></li><li><p><code>reverse()</code>：颠倒数组元素的顺序，并修改原始数组。</p><ul><li>返回反转后的数组。</li></ul></li></ul></li><li><p><strong>去重</strong>：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.from(new Set(array))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：去除数组中的重复元素，并返回一个新的数组。</p><ul><li><code>Set</code> 是 JavaScript 中的一种数据结构，它只包含唯一的值。</li></ul></li></ul></li><li><p><strong>切换元素位置</strong>：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>swap(array, index1, index2)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：交换数组中指定索引位置的两个元素。</p><ul><li><code>array</code>：要进行操作的数组。</li><li><code>index1</code>：第一个元素的索引。</li><li><code>index2</code>：第二个元素的索引。</li></ul></li></ul></li><li><p><strong>数组长度和元素个数</strong>：</p><ul><li><p><code>length</code>：获取数组的长度，即元素的个数。</p><ul><li>返回数组的长度。</li></ul></li><li><p><code>Array.isArray(array)</code>：检查一个值是否为数组。</p><ul><li><code>array</code>：要检查的值。</li><li>如果值是数组，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li></ul></li><li><p><strong>其他常用方法</strong>：</p><ul><li><code>some(callback(element, index, array))</code>：检查数组中是否至少有一个元素满足指定条件，返回布尔值。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>如果至少有一个元素满足条件，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li><li><code>every(callback(element, index, array))</code>：检查数组中的所有元素是否都满足指定条件，返回布尔值。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>如果所有元素都满足条件，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li><li><code>slice()</code> 方法还可以用于浅拷贝数组，即创建一个新的数组，其中包含原始数组的相同元素。</li></ul></li><li><p><strong>判断数组元素</strong></p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.isArray(array)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：检查一个值是否为数组。</p><ul><li><code>array</code>：要检查的值。</li><li>如果值是数组，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li></ul></li><li><p><strong>数组元素转化</strong></p><ul><li><p><code>toString()</code>：将数组转换为字符串，并返回结果。</p><ul><li>返回由数组元素组成的字符串。</li></ul></li><li><p><code>toLocaleString()</code>：将数组转换为本地化格式的字符串，并返回结果。</p><ul><li>返回由数组元素组成的本地化字符串。</li></ul></li><li><p><code>join(separator)</code>：将数组的所有元素连接成一个字符串。</p><ul><li><code>separator</code>（可选）：指定元素之间的分隔符，默认为逗号 <code>,</code>。</li><li>返回由数组元素组成的字符串。</li></ul></li></ul></li><li><p><strong>修改数组</strong></p><ul><li><p><code>push(element1, element2, ..., elementN)</code>：向数组末尾添加一个或多个元素，并返回新数组的长度。</p></li><li><p><code>pop()</code>：从数组末尾移除并返回最后一个元素。</p></li><li><p><code>shift()</code>：从数组开头移除并返回第一个元素。</p></li><li><p><code>unshift(element1, element2, ..., elementN)</code>：向数组开头添加一个或多个元素，并返回新数组的长度。</p></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>splice(start, deleteCount, item1, item2, ..., itemN)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：从数组中删除、替换或插入元素，并返回被删除的元素组成的数组。</p><ul><li><code>start</code>：指定开始操作的索引。</li><li><code>deleteCount</code>：要删除的元素个数。</li><li><code>item1, item2, ..., itemN</code>（可选）：要插入到数组中的元素。</li></ul></li></ul></li><li><p><strong>数组拷贝</strong>：</p><ul><li><p><code>slice(start, end)</code>：返回指定索引范围内的元素，生成一个新的数组。</p><ul><li><code>start</code>：指定起始索引。</li><li><code>end</code>（可选）：指定结束索引（不包含在结果中）。</li><li>返回包含指定范围内元素的新数组。</li></ul></li><li><p><code>concat(array1, array2, ..., arrayN)</code>：合并两个或多个数组，生成一个新的数组。</p><ul><li><code>array1, array2, ..., arrayN</code>（可选）：要合并的数组。</li><li>返回合并后的新数组。</li></ul></li><li><p><code>Array.from(array)</code>：将类似数组或可迭代对象转换为真正的数组，并返回结果。</p><ul><li><code>array</code>：要转换的类似数组或可迭代对象。</li><li>返回转换后的真正数组。</li></ul></li><li><p><code>[...array]</code>：使用扩展运算符 <code>...</code> 进行数组拷贝。</p><ul><li><code>array</code>：要拷贝的数组。</li><li>返回拷贝后的新数组。</li></ul></li></ul></li><li><p><strong>迭代数组元素</strong>：</p><ul><li><code>forEach(callback(element, index, array))</code>：对数组的每个元素执行一个回调函数。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>该方法没有返回值，仅用于迭代数组。</li></ul></li><li><code>map(callback(element, index, array))</code>：根据数组的每个元素生成一个新的数组。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回一个新的数组，数组中的每个元素是回调函数的返回值。</li></ul></li><li><code>filter(callback(element, index, array))</code>：根据指定条件过滤数组的元素，生成一个新的包含符合条件的元素的数组。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回一个新的数组，该数组包含符合条件的元素。</li></ul></li><li><code>reduce(callback(accumulator, currentValue, index, array), initialValue)</code>：对数组的元素进行累积计算，返回一个累积结果。 <ul><li><code>callback</code>抱歉，由于回答的长度限制，我无法在一次回复中提供完整的解释。以下是上一条回复中未完成的部分：</li><li><code>callback</code>：要执行的回调函数，接受四个参数：累积器（accumulator）、当前值（currentValue）、当前索引和数组本身。</li><li><code>accumulator</code>：累积器的初始值或上一次回调函数的返回值。</li><li><code>initialValue</code>（可选）：累积器的初始值。</li><li>返回累积计算的结果。</li></ul></li><li><code>reduceRight(callback(accumulator, currentValue, index, array), initialValue)</code>：与 <code>reduce()</code> 方法类似，但是从数组的末尾开始累积计算。</li></ul></li><li><p><strong>搜索和匹配</strong>：</p><ul><li><p><code>indexOf(searchElement, fromIndex)</code>：在数组中从前往后搜索指定元素，并返回第一个匹配的索引。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：指定搜索的起始位置，默认为 0。</li><li>返回匹配的元素的索引，如果未找到匹配的元素，则返回 -1。</li></ul></li><li><p><code>lastIndexOf(searchElement, fromIndex)</code>：在数组中从后往前搜索指定元素，并返回最后一个匹配的索引。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：指定搜索的起始位置，默认为数组末尾。</li><li>返回匹配的元素的索引，如果未找到匹配的元素，则返回 -1。</li></ul></li><li><p><code>find(callback(element, index, array))</code>：返回数组中满足指定条件的第一个元素。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回满足条件的第一个元素，如果未找到匹配的元素，则返回 <code>undefined</code>。</li></ul></li><li><p><code>findIndex(callback(element, index, array))</code>：返回数组中满足指定条件的第一个元素的索引。</p><ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回满足条件的第一个元素的索引，如果未找到匹配的元素，则返回 -1。</li></ul></li><li><p><code>includes(searchElement, fromIndex)</code>：检查数组是否包含指定元素。</p><ul><li><code>searchElement</code>：要搜索的元素。</li><li><code>fromIndex</code>（可选）：指定搜索的起始位置，默认为 0。</li><li>如果数组包含指定的元素，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li></ul></li><li><p><strong>复杂操作</strong>：</p><ul><li><code>flat(depth)</code>：将嵌套的数组展开为单层数组。 <ul><li><code>depth</code>（可选）：指定展开的深度，默认为 1。</li><li>返回展开后的单层数组。</li></ul></li><li><code>flatMap(callback(element, index, array))</code>：先使用指定的回调函数对数组的每个元素进行映射，然后将结果展开为单层数组。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>返回映射和展开后的单层数组。</li></ul></li><li><code>reduce(callback(accumulator, currentValue, index, array), initialValue)</code>：对数组的元素进行累积计算，返回一个累积结果。 <ul><li><code>callback</code>：要执行的回调函数，接受四个参数：累积器（accumulator）、当前值（currentValue）、当前索引和数组本身。</li><li><code>accumulator</code>：累积器的初始值或上一次回调函数的返回值。</li><li><code>initialValue</code>（可选）：累积器的初始值。</li><li>返回累积计算的结果。</li></ul></li><li><code>some(callback(element, index, array))</code>：检查数组中是否至少有一个元素满足指定条件。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>如果至少有一个元素满足条件，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li><li><code>every(callback(element, index, array))</code>：检查数组中的所有元素是否都满足指定条件。 <ul><li><code>callback</code>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。</li><li>如果所有元素都满足条件，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul></li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">flat(depth)</span><span class="token template-punctuation string">`</span></span>：将嵌套的数组展开为单层数组。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">depth</span><span class="token template-punctuation string">`</span></span>（可选）：指定展开的深度，默认为 <span class="token number">1</span>。\n  <span class="token operator">-</span> 返回展开后的单层数组。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">flatMap(callback(element, index, array))</span><span class="token template-punctuation string">`</span></span>：先使用指定的回调函数对数组的每个元素进行映射，然后将结果展开为单层数组。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">callback</span><span class="token template-punctuation string">`</span></span>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。\n  <span class="token operator">-</span> 返回映射和展开后的单层数组。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">reduce(callback(accumulator, currentValue, index, array), initialValue)</span><span class="token template-punctuation string">`</span></span>：对数组的元素进行累积计算，返回一个累积结果。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">callback</span><span class="token template-punctuation string">`</span></span>：要执行的回调函数，接受四个参数：累积器（accumulator）、当前值（currentValue）、当前索引和数组本身。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">accumulator</span><span class="token template-punctuation string">`</span></span>：累积器的初始值或上一次回调函数的返回值。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">initialValue</span><span class="token template-punctuation string">`</span></span>（可选）：累积器的初始值。\n  <span class="token operator">-</span> 返回累积计算的结果。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">some(callback(element, index, array))</span><span class="token template-punctuation string">`</span></span>：检查数组中是否至少有一个元素满足指定条件。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">callback</span><span class="token template-punctuation string">`</span></span>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。\n  <span class="token operator">-</span> 如果至少有一个元素满足条件，则返回 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">true</span><span class="token template-punctuation string">`</span></span>，否则返回 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">false</span><span class="token template-punctuation string">`</span></span>。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">every(callback(element, index, array))</span><span class="token template-punctuation string">`</span></span>：检查数组中的所有元素是否都满足指定条件。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">callback</span><span class="token template-punctuation string">`</span></span>：要执行的回调函数，接受三个参数：当前元素、当前元素的索引和数组本身。\n  <span class="token operator">-</span> 如果所有元素都满足条件，则返回 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">true</span><span class="token template-punctuation string">`</span></span>，否则返回 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">false</span><span class="token template-punctuation string">`</span></span>。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">sort(compareFunction)</span><span class="token template-punctuation string">`</span></span>：对数组元素进行排序，返回排序后的数组。\n  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">compareFunction</span><span class="token template-punctuation string">`</span></span>（可选）：用于指定排序顺序的比较函数。\n    <span class="token operator">-</span> 如果未提供比较函数，则元素将按照转换为字符串的 Unicode 代码点进行排序。\n    <span class="token operator">-</span> 如果提供了比较函数，则该函数应该接受两个参数，并根据它们的值返回一个负数、零或正数，表示它们的相对顺序。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">reverse()</span><span class="token template-punctuation string">`</span></span>：颠倒数组中元素的顺序，返回颠倒后的数组。\n\n<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">toString()</span><span class="token template-punctuation string">`</span></span>、<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">toLocaleString()</span><span class="token template-punctuation string">`</span></span> 和 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">join(separator)</span><span class="token template-punctuation string">`</span></span>：用于将数组转换为字符串。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 23);
const _hoisted_24 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_24);
}
const JSAPI_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JS-API.html.vue"]]);
export {
  JSAPI_html as default
};
