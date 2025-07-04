目录结构

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [TypeScript](#typescript)
- [Node](#node)
- [浏览器](#浏览器)
- [计算机网络](#计算机网络)
- [MVVM框架](#MVVM框架)
- [前端工程化](#前端工程化)
- [前端性能](#前端性能)
- [前端监控](#前端监控)
- [前端安全](#前端安全)
- [跨端开发](#跨端开发)
- [测试](#测试)
- [运维](#运维)
- [数据结构与算法](#数据结构与算法)
- [设计模式](#设计模式)
- [操作系统](#操作系统)
- [前端手写题](#前端手写题)
- 面试题链接：https://juejin.cn/post/6940945178899251230
-

## HTML

### DOCTYPE有什么作用？

文档类型声明；DOCTYPE是一种指示浏览器以何种HTML或XHTML规范来解析文档的声明。它能够告知浏览器网页文档使用的标记语言的类型以及版本，从而确保浏览器能够正确地展示网页内容。DOCTYPE声明通常位于HTML文档的开头，是HTML文档的必须部分。

### img标签的title和alt属性有什么区别

`alt`属性用于为图像提供替代文本，即使图像无法加载，也可以描述图像内容，提高网页的可访问性和可用性。`title`属性则提供有关图像的额外信息，可以通过鼠标悬停或使用辅助技术来查看。它通常用于提供更多的上下文或补充描述，但并不是必需的。

### 简述一下src与href的区别

在 HTML 中，`src` 属性是用来指定外部资源的 URL，如图像、脚本或嵌入式对象的位置。例如，`<img>` 标签中的 `src` 属性指定图像的 URL。

而 `href` 属性则用来指定超文本链接的目标资源的位置，如超链接或 `link` 标记中的外部样式表。例如，`<a>` 标签中的 `href` 属性指定了链接目标的 URL。

### iframe有哪些优缺点？

`iframe`（内联框架）是一种 HTML 元素，它允许在当前文档中嵌入另一个独立的 HTML 文档。`iframe` 有一些优点和缺点：

优点：

1. **内容隔离**：`iframe` 可以将不同来源的内容隔离开来，使得它们在不同的上下文中运行。这有助于保护当前文档免受潜在的安全风险，并确保不同来源的内容不会互相干扰。
2. **异步加载**：`iframe` 中的内容可以异步加载，这意味着页面主体内容可以在 `iframe` 加载完成之前呈现。这有助于提高页面加载速度。
3. **独立滚动**：`iframe` 内的内容可以独立滚动，而不会影响主页面的滚动。这有助于在需要展示大量内容的情况下，提高用户体验。
4. **跨域资源访问**：在一定程度上，`iframe` 可以用于访问跨域资源，例如嵌入来自其他域的网页或应用。

缺点：

1. **性能影响**：`iframe` 的使用可能会导致性能下降，因为它需要浏览器加载额外的文档资源。每个嵌入的 `iframe` 都需要额外的 HTTP 请求，这可能会延长页面加载时间。
2. **复杂性增加**：`iframe` 的使用可能会使页面结构更加复杂，导致维护困难。而且，在 `iframe` 和主页面之间进行通信可能会涉及到跨域问题，这会增加开发难度。
3. **SEO 不友好**：搜索引擎可能无法完全索引 `iframe` 中的内容，这会影响到网页的搜索引擎优化（SEO）。
4. **可访问性问题**：`iframe` 在某些情况下可能导致可访问性问题。例如，屏幕阅读器可能无法正确解析 `iframe` 中的内容，导致部分用户无法访问这些内容。

综上所述，`iframe` 有一些优点，如内容隔离、异步加载和独立滚动等。然而，它也有一些缺点，如性能影响、复杂性增加、SEO 不友好和可访问性问题等。在使用 `iframe` 时，需要权衡这些优缺点，确保它适用于你的需求。

### 常用的meta标签有哪些？

`meta` 标签提供了有关 HTML 文档的元数据，如描述、关键词、作者等。以下是一些常用的 `meta` 标签：

1. **字符集声明**：声明文档使用的字符编码，通常为 UTF-8。

   ```html
   <meta charset="UTF-8">
   ```
2. **视口设置**：控制页面在移动设备上的显示方式，如缩放级别和页面宽度。

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
3. **页面描述**：提供页面的简短描述，有助于搜索引擎了解页面内容。

   ```html
   <meta name="description" content="A brief description of the page.">
   ```
4. **关键词**：设置页面关键词，有助于搜索引擎优化（SEO）。但请注意，大多数现代搜索引擎不再使用此标签。

   ```html
   <meta name="keywords" content="keyword1, keyword2, keyword3">
   ```
5. **作者**：指定页面作者。

   ```html
   <meta name="author" content="Author Name">
   ```
6. **禁止缓存**：告诉浏览器不要缓存页面。

   ```html
   <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
   <meta http-equiv="Pragma" content="no-cache">
   <meta http-equiv="Expires" content="0">
   ```
7. **自动刷新**：设置页面在特定时间间隔后自动刷新。

   ```html
   <meta http-equiv="refresh" content="30">
   ```
8. **跳转到其他页面**：在指定的时间间隔后，自动将用户重定向到其他页面。

   ```html
   <meta http-equiv="refresh" content="5; URL=https://example.com/new-page.html">
   ```
9. **兼容模式**：指定浏览器（如 Internet Explorer）使用特定的渲染模式。

   ```html
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   ```
10. **搜索引擎索引控制**：指示搜索引擎是否应索引页面和跟踪链接。

    ```html
    <meta name="robots" content="index, follow">
    ```

这些常用的 `meta` 标签可以帮助你控制页面的显示、搜索引擎优化和其他功能。根据页面需求，可以根据需要添加更多的 `meta` 标签。

### H5和H4有什么不同？

- 语义化标签: `header`、`footer`、`nav`、`section`、`article`、`aside` 等
- 增强型表单：`date`(从一个日期选择器选择一个日期) 、`email`(包含 e-mail 地址的输入域) 、`number`(数值的输入域) 、`range`(一定范围内数字值的输入域) 、`search`(用于搜索域) 、`tel`(定义输入电话号码字段) 等
- 视频和音频：`audio`、`video`
- `Canvas`绘图、 `SVG`绘图
- 地理定位：`Geolocation`
- 拖放API：`drag`
- `web worker`：是运行在后台的 `JavaScript`，独立于其他脚本，不会影响页面的性能
- `web storage`: `localStorage`、`sessionStorage`
- `WebSocket`: `HTML5` 开始提供的一种在单个 `TCP` 连接上进行全双工通讯的协议

### SVG和CANVAS的区别？

SVG和Canvas都是用于在web上绘制图形的技术，但它们有几个主要区别:

1. SVG是基于矢量图的，而Canvas是基于像素图的。
2. 在SVG中，每个绘制的元素都是一个独立的DOM对象，并且可以轻松地与JavaScript交互。 在Canvas中，所有绘制都被放置在一个画布中，并且只能与像素级别进行交互。
3. SVG通常适用于静态图形，而Canvas适用于动态图形，例如游戏和数据可视化。

简而言之，SVG适用于需要与DOM交互并具有复杂动画和交互的情况，而Canvas则适用于创建大量图形对象和复杂动画。

### defer 和 async 的区别 ?

defer 和 async 都是用于脚本加载和执行的关键字，两者的主要区别如下：

1. defer 脚本会在 HTML 文档解析完成后执行，而 async 脚本会在下载完毕后立即执行。
2. defer 脚本会按照它们在文档中的顺序执行，而 async 脚本是在下载完成后尽快执行，可能会打乱它们在文档中的顺序。
3. defer 脚本会在 DOMContentLoaded 事件之后运行，而 async 脚本则不一定。

因此，如果需要按顺序执行脚本并且不想阻塞 DOM 的解析，可以使用 defer。如果脚本的执行不依赖于其他脚本或 DOM，可以使用 async 加快加载速度。

### style标签prefetch和preload区别？

`<style>`标签的`prefetch`和`preload`属性都用于优化CSS资源的加载，但它们有不同的行为和目的：

- `prefetch`属性告诉浏览器这个CSS资源可能在未来的某个时刻需要被加载，但并不需要立即加载。浏览器会在空闲时间异步加载这个资源，以便在需要时能够立即使用。`prefetch`适用于那些当前不需要但是可能在未来会需要使用的资源。
- `preload`属性则告诉浏览器这个CSS资源在当前页面中必须被使用，因此应该立即加载和执行。浏览器会在主HTML文档下载和解析完成之前加载这个资源。`preload`适用于那些当前需要使用的资源。

<hr />

### 盒模型*

- 组成: 内容(content),内边距(padding),边框(border),外边框(margin)
- w3c官方盒子(标准盒子)
  - \- 实际宽度=外边距+边框+内边距+内容
- 怪异盒子
  - \- 实际宽度=内部(内容+内边距+边框)+外边距

box-sizing： content-box;

- `width` = 内容的宽度
- `height` = 内容的高度

box-sizing： border-box;    一般使用border-box更加方便计算

- `width` = border + padding + 内容的宽度
- `height` = border + padding + 内容的高度

### vue使用rem适配*

使用 postcss-pxtorem插件，并写js文件配置

```
//基准大小
const baseSize = 37.5
// 设置 rem 函数
function setRem() {
 const salepro = document.documentElement.clientWidth / 750
 // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改.
 // 设置页面根节点字体大小
 document.documentElement.style.fontSize = (baseSize * Math.min(salepro, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
 setRem()
}
```

## CSS

### CSS 属性是否区分大小写？

CSS 属性名和属性值在大多数情况下是不区分大小写的，但也有少数例外情况，如 font-variant 和 text-decoration 等属性与其值中的某些字母是区分大小写的。建议在编写 CSS 代码时还是严格遵守大小写以避免不必要的错误。

### CSS的盒模型?（+1）

CSS 盒模型包括标准盒模型和IE盒模型。其中标准盒模型（box-sizing: content-box;）的宽度和高度只包括内容的宽度和高度；而IE盒模型（box-sizing: border-box;）的宽度和高度则包括了内容、内边距和边框的宽度和高度。这两种盒模型的主要区别在于计算元素宽度和高度时所涉及的内容不同。

```
// 相关属性
box-sizing: content-box | border-box

```

### link与@import的区别

`<link>`和`@import`都可以用来引入外部资源，如CSS文件，但是它们之间有以下区别：

1. 引入方式：`<link>`是HTML标签，`@import`是CSS提供的一种方式。
2. 加载顺序和性能：`<link>`在页面载入时同时加载，`@import`在页面载入完成后加载。
3. 定义方式：`<link>`可以在文档头部定义，也可以在文档中任何地方定义，`@import`只能在样式表中定义。
4. 加载方式：`<link>`可以同时加载多个外部样式表，而`@import`必须一条一条地执行。
5. 附加功能：`link`标签支持添加一些额外属性，如`media`、`title`等，用于指定媒体类型或提供样式表的描述。`@import`不支持这些附加功能。
6. 可控性：`<link>`支持动态插入，而`@import`不支持。

用link会更好一些，link标签，加载文件顺序按照编写时候来。但是@import的加载不是按照从上到下的顺序

### 元素垂直居中的方式有哪些？

1. 使用flexbox布局，通过设置父元素的align-items属性为center实现元素垂直居中。
2. 使用grid布局，可以通过设置网格项的align-self属性为center实现元素垂直居中。
3. 使用position和transform属性，设置元素的top和left属性为50%，并使用transform属性的translate()函数将元素向上和左移动自身高度和宽度的一半，就可以实现元素垂直居中。
4. 使用表格布局，将元素放入一个单元格中，并设置单元格的vertical-align属性为middle实现元素垂直居中。

### 文本垂直居中的方式有哪些？

1. 使用行高（line-height）属性，将行高设置为等于容器的高度减去文本行高，再将文本的行高设置为容器高度。
2. 使用弹性盒子（flexbox）布局，在容器上设置 display:flex 和 align-items:center 属性。
3. 使用网格布局（grid）将文本放置在居中单元格中。
4. 使用绝对定位（absolute positioning）属性，并将文本的 top 和 bottom 都设置为 0，再设置 margin:auto 来水平居中

### CSS 选择器的优先级是如何计算的？（+1）

1. !important优先级最高
2. 标签内样式：即在 HTML 标签内部使用 style 属性设置的样式，优先级第二高。
3. ID选择器：以 # 符号开头，指定某个元素的唯一标识符，比如 #header，优先级第三高。
4. 类选择器、属性选择器和伪类选择器：包括 .class、[attr]、:hover 等，优先级第四高。
5. 元素选择器和伪元素选择器：包括 div、span、:before 等，优先级最低。

在比较优先级时，遵循“从左到右，从高到低”的原则，也就是选择器中每增加一项就会降低一级别的优先级。如果两个选择器的优先级相同，则后面的选择器优先级更高。

**！important > 行内样式 > id > class 属性 伪类 > 元素 伪元素**

### 请阐述块格式化上下文（Block Formatting Context）、工作原理以及形成条件？

**块格式化上下文**（Block Formatting Context，BFC）是一个独立的渲染区域，在这个区域内，元素的布局和外部元素互不影响。BFC是 Web 页面布局中的一种重要机制，主要用于控制块级元素的布局及其内部元素的排列方式。

BFC的工作原理：

1. 内部的块级盒子会在垂直方向一个接一个放置。
2. 块级盒子的垂直间距（margin）会发生折叠。相邻的块级盒子的上下外边距会取最大值，而非相加。
3. BFC的区域不会与浮动盒子重叠。在计算布局时，BFC会考虑浮动元素的占用空间，从而避免与浮动元素重叠。
4. 计算BFC的高度时，浮动元素也参与计算。
5. BFC是一个独立的容器，外部元素对其内部元素布局没有影响；同样，BFC内部元素的布局也不会影响外部元素。

形成BFC的条件：

要创建一个BFC，需要满足以下条件之一：

1. 根元素（`<html>`）。
2. 浮动元素（`float`属性为`left`或`right`）。
3. 绝对定位元素（`position`属性为`absolute`或`fixed`）。
4. 内联块（`display`属性为`inline-block`）。
5. 表格单元格（`display`属性为`table-cell`）。
6. 表格标题（`display`属性为`table-caption`）。
7. 匿名表格单元格（`display`属性为`table`、`table-row`、`table-row-group`、`table-header-group`、`table-footer-group`、`table-column`、`table-column-group`）。
8. 元素的`overflow`属性值不为`visible`（例如，`auto`、`scroll`、`hidden`）。
9. 弹性盒子（`display`属性为`flex`或`inline-flex`）。
10. 网格容器（`display`属性为`grid`或`inline-grid`）。
11. 多列容器（`column-count`或`column-width`属性不为`auto`）。
12. `contain`属性值为`layout`、`paint`或`strict`。

通过满足以上条件之一，可以创建BFC，实现独立渲染区域。在实际应用中，BFC有助于解决外边距折叠、浮动元素引起的布局问题等。

### 请阐述z-index属性，并说明如何形成层叠上下文（stacking context）

`z-index`属性是CSS中用于控制元素在页面中的堆叠顺序（即在z轴上的顺序）的属性。具有较高`z-index`值的元素会覆盖较低`z-index`值的元素。需要注意的是，`z-index`属性只适用于具有定位属性（`position`属性值为`relative`、`absolute`或`fixed`）的元素。

层叠上下文（Stacking Context）是一个抽象概念，它定义了一个元素在z轴上的层次。在同一个层叠上下文中，元素的堆叠顺序由`z-index`属性控制。层叠上下文可以嵌套，形成一个层叠上下文树。层叠上下文解决了多个元素重叠时的优先级显示。

形成层叠上下文的条件：

1. 根元素（`<html>`）。
2. `z-index`值不为`auto`的定位元素（`position`属性值为`relative`、`absolute`或`fixed`）。
3. `z-index`值不为`auto`的弹性盒子（`display`属性值为`flex`或`inline-flex`）的直接子元素。
4. `z-index`值不为`auto`的网格容器（`display`属性值为`grid`或`inline-grid`）的直接子元素。
5. `opacity`属性值小于1的元素。
6. `transform`属性值不为`none`的元素。
7. `filter`属性值不为`none`的元素。
8. `perspective`属性值不为`none`的元素。
9. `will-change`属性值指定了任意形成层叠上下文的属性的元素。
10. `contain`属性值为`paint`或`strict`的元素。
11. `mix-blend-mode`属性值不为`normal`的元素。
12. `isolation`属性值为`isolate`的元素。

满足以上任意条件之一的元素都会创建一个新的层叠上下文。在层叠上下文中，元素会根据其`z-index`值和其他因素进行堆叠。层叠上下文有助于更好地控制元素的堆叠顺序，解决元素覆盖和遮挡的问题。

### CSS 有哪些继承属性？

1. 文本和字体相关属性：
   - `color`
   - `font-family`
   - `font-size`
   - `font-weight`
   - `font-style`
   - `font-variant`
   - `letter-spacing`
   - `line-height`
   - `text-align`
   - `text-indent`
   - `text-transform`
   - `white-space`
   - `word-spacing`
2. 列表样式相关属性：
   - `list-style-type`
   - `list-style-position`
   - `list-style-image`
3. 表格布局相关属性：
   - `border-collapse`
   - `border-spacing`
   - `caption-side`
   - `empty-cells`
   - `table-layout`
4. 其他可继承属性：
   - `visibility`
   - `cursor`
   - `quotes`
   - `text-decoration`
   - `text-shadow`
   - `word-break`
   - `word-wrap`
   - `writing-mode`
   - `direction`

### 有哪些清除浮动的技术，都适用哪些情况？*

1. 使用`clear`属性： 在浮动元素后添加一个空元素，然后使用CSS的`clear`属性来清除浮动。适用于简单布局和较早的浏览器版本。

   ```css
   <div style="float: left;">...</div>
   <div style="clear: both;"></div>
   ```
2. 父元素使用`overflow`属性： 为父元素添加`overflow: auto`或`overflow: hidden`属性。此方法可以使父元素自动计算其高度，包括浮动元素。适用于不需要显示滚动条的布局。

   ```css
   .container {
     overflow: hidden;
   }
   ```
3. 使用伪元素`::after`： 为父元素添加`::after`伪元素，并设置`clear: both`。这种方法不需要额外的HTML元素。适用于现代浏览器和简洁的HTML结构。

   ```css
   .clearfix::after{
       /*伪元素是行内元素 正常浏览器清除浮动方法*/
       content: "";
       display: block;
       height: 0;
       clear:both;
       visibility: hidden;
   }
   ```
4. 使用Flexbox布局： 将父元素的`display`属性设置为`flex`。这会使所有子元素成为弹性项，并且不再需要清除浮动。适用于现代浏览器和需要使用弹性布局的场景。

   ```css
   .container {
     display: flex;
   }
   ```
5. 使用Grid布局： 将父元素的`display`属性设置为`grid`。这会使所有子元素成为网格项，并且不再需要清除浮动。适用于现代浏览器和需要使用网格布局的场景。

   ```css
   .container {
     display: grid;
   }
   ```

在实际项目中，选择哪种清除浮动的技术取决于项目的具体需求、浏览器兼容性和布局类型。现代项目通常更倾向于使用Flexbox或Grid布局来解决浮动问题。

### 响应式布局有哪些

响应式布局是一种使网站能够自动适应不同屏幕尺寸和设备类型的设计方法。以下是一些常见的响应式布局技术：

1. 流式布局（Fluid Layout）： 使用百分比来定义元素的宽度，使元素随浏览器窗口大小变化而自动调整宽度。这种布局可以在一定程度上适应不同屏幕尺寸，但在极小或极大屏幕上可能无法提供最佳用户体验。
2. 弹性布局（Flexible Layout）： 使用CSS3中的弹性盒子（Flexbox）布局模型，可以轻松创建自适应大小和顺序的布局。弹性布局可以根据屏幕尺寸自动调整元素的大小和排列，提供更好的响应式体验。
3. 网格布局（Grid Layout）： 使用CSS3中的网格布局（Grid）模型，可以创建复杂的二维布局。网格布局允许在水平和垂直方向上自由排列和调整元素，从而实现高度自适应的响应式设计。
4. 媒体查询（Media Queries）： 使用CSS3的媒体查询功能，可以针对不同屏幕尺寸、分辨率和设备类型应用特定的样式。结合流式布局、弹性布局和网格布局，媒体查询可以实现更精确和全面的响应式设计。
5. 自适应图片（Responsive Images）： 使用`srcset`、`sizes`属性和`<picture>`元素，可以让浏览器根据设备像素比（DPR）和屏幕尺寸选择合适的图片资源。这样可以在不同设备上加载适当大小的图片，提高性能并保持视觉效果。
6. 移动优先设计（Mobile-first Design）： 从移动设备的视角开始设计，然后逐步扩展到平板和桌面设备。这种设计方法强调简单、清晰和高效，可以提高跨设备的用户体验。

在实际项目中，通常会综合运用以上技术来实现响应式布局。这些技术可以使网站在不同设备和屏幕尺寸下保持良好的用户体验和视觉效果。

### 讲一下三栏布局实现？圣杯布局、双飞翼布局和flex布局

三栏布局是指一个网页由三个栏目组成的布局，分别是左栏、右栏和中间栏。下面是三种实现三栏布局的方法：

1. 圣杯布局

圣杯布局是一种使用浮动和负边距实现的三栏布局。中间栏先放在html结构中，使用负边距将左右栏移动到中间栏的两侧，再使用相对定位将左右栏拉回原来的位置。这种布局可以使得中间栏优先渲染，兼顾SEO和用户体验。

2. 双飞翼布局

双飞翼布局也是一种使用浮动和负边距实现的三栏布局。与圣杯布局不同的是，左右栏使用margin负值撑开中间栏的宽度。这种布局与圣杯布局相比，代码更简单易懂。

3. Flex布局

Flex布局是CSS3引入的一种新的布局方式，通过flex容器和flex项目的属性设置，可以轻松实现三栏布局。设置左右栏的宽度为固定值，中间栏的宽度使用flex-grow属性自动填充。这种布局适用于移动端和PC端，具有响应式的特点。

### 使用过哪些CSS预处理器？它们有什么优劣？

Less和Sass这两个常见的CSS预处理器。它们的优势是可以使用变量、嵌套规则和函数等功能，可以更简单更高效地编写CSS代码。缺点是需要进行额外的预处理工作，增加了开发成本。

scss:

```
https://www.freecodecamp.org/chinese/news/the-beginners-guide-to-sass/

$符号引入变量；嵌套选择器；&的父选择器；用mixin封装同一组样式；
```

```
@mixin flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #ccc;
}

.card {
  @include flex-container;
}

.aside {
  @include flex-container;
}
```

less：只有变量、嵌套、运算

### 如何解决CSS样式在不同浏览器中的兼容性问题？

解决CSS样式在不同浏览器中的兼容性问题可以使用一些通用的方法，如使用CSS Reset，避免使用CSS Hack和浏览器前缀，使用标准的组件库，尽量使用标准的CSS属性和属性值等。

### 如何制作一个自适应的正方形？

在外层容器内创建一个正方形元素，并设置`padding-bottom`为100%。这里的关键是`padding-bottom`以父元素的宽度为基准计算，因此当设置为100%时，它将等于父元素的宽度，从而保证正方形的宽高相等。

```html
<div class="square-container">
  <div class="square"></div>
</div>
```

```css
.square {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 100%; /* 确保正方形的高度等于宽度 */
  background-color: #f00; /* 设置背景颜色以便观察效果 */
}
```

### 讲讲margin塌陷和margin合并以及解决方案？

**margin塌陷** 和 **margin合并** 都是 CSS 中描述 margin 行为的术语。它们分别指 margin 在不同场景下的特殊表现。

1. **Margin塌陷**：Margin塌陷是指当一个元素的上外边距（margin-top）和相邻的另一个元素的下外边距（margin-bottom）相遇时，它们之间的距离实际上等于两个外边距中的较大值，而不是它们的总和。这种现象主要发生在具有相邻兄弟元素的块级元素之间。
2. **Margin合并**：Margin合并是指在父子元素之间发生的现象。当一个元素的外边距与其父元素的外边距相遇时，它们之间的距离实际上等于两个外边距中的较大值，而不是它们的总和。Margin合并通常发生在没有边框、内边距或行内内容分隔的父元素与其第一个或最后一个子元素之间。

解决方案：

针对 margin 塌陷和合并的现象，有以下几种解决方案：

1. **使用内边距（padding）**：如果适用，可以使用内边距代替外边距来调整元素之间的距离。内边距不会发生塌陷或合并。
2. **添加边框（border）或内边距（padding）**：在父子元素间的 margin 合并问题上，可以通过给父元素添加一个边框或一个很小的内边距来阻止 margin 合并。
3. **使用 BFC（块格式化上下文）**：创建一个新的 BFC（如通过设置 `overflow` 属性为 `auto` 或 `hidden`）可以防止父子元素间的 margin 合并。
4. **使用伪元素**：可以通过在两个相邻的兄弟元素之间插入一个透明的伪元素（如 `::before` 或 `::after`），并为其添加 `display: inline-block;` 属性来防止兄弟元素间的 margin 塌陷。
5. **避免使用外边距**：在某些情况下，可以使用其他布局技术（如 Flexbox 或 Grid）来调整元素之间的距离，从而避免 margin 塌陷和合并的问题。

了解 margin 塌陷和合并现象以及如何解决这些问题可以帮助你更好地控制布局和元素间距。

### 如何实现一个三角形*？

使用 CSS 创建一个三角形的常见方法是利用边框（border）属性。具体操作如下：

1. 首先，创建一个宽高为0的元素（如 `div`），这样它的内容区域将不占据任何空间。
2. 为该元素设置透明边框，这样它的边框也不会显示出来。
3. 根据你需要的三角形方向，设置一个边框颜色，使该边框变得可见。

以下是一个创建向上的三角形的示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
  }
</style>
</head>
<body>
  <div class="triangle"></div>
</body>
</html>
```

在这个示例中，我们创建了一个名为 `.triangle` 的 `div` 元素。我们将其宽度和高度设置为 0，然后为其添加了左、右和底边框。左右边框设置为透明，底边框设置为红色。这将创建一个向上的红色三角形。

### 如何画一条0.5px的线

要在屏幕上绘制一条 0.5px 的线，可以使用 CSS 的伪元素 `::before` 或 `::after`，并设置它们的尺寸和缩放（scale）。以下是一个绘制 0.5px 水平线的示例：

```css
.half-pixel-line {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 1px;
}
  
.half-pixel-line::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: black;
    transform-origin: left top;
    transform: scaleY(0.5);
}
```

### 视差滚动效果的原理？

视差滚动效果（Parallax Scrolling）是一种视觉设计技巧，通过在页面滚动时以不同速度移动前景和背景元素，从而产生深度感和动态效果。这种效果可以使网页看起来更有趣、更具吸引力。

视差滚动效果的原理在于，当用户滚动页面时，页面上的不同元素（例如前景、背景、文字等）以不同的速度移动。这些速度差使得靠近观察者的元素（前景）看起来移动得更快，而远离观察者的元素（背景）看起来移动得更慢。这种相对运动产生了一种错觉，使用户感觉到页面的不同部分之间有深度关系，从而增强了视觉体验。

要实现视差滚动效果，可以使用以下方法之一：

1. **纯 CSS 方法**：利用 CSS3 的 `background-attachment` 属性设置为 `fixed`。这种方法简单易实现，但仅适用于背景图像，并且在某些浏览器或设备上可能存在兼容性问题。
2. **JavaScript 方法**：通过监听页面滚动事件，根据滚动位置动态调整元素的位置。这种方法更灵活，可以应用于任何元素，并且可以实现更复杂的视差效果。通常使用 JavaScript 库（如 Rellax.js、Parallax.js 等）来简化开发过程。

需要注意的是，过多或不合适的视差滚动效果可能会导致页面性能下降、用户体验受损，因此在实现视差滚动效果时要保持适度。

### 关于Tailwind CSS 用法？

介绍： 用来写css样式的一种东西

好处：**你不用再浪费精力去发明类名了**、**不用担心写的css样式会对其他人的样式造成污染、**

其类似于内联样式，但是更加好、可以进行响应式设计、且可以进行悬停、聚焦状态css书写

### background的详细用法（外包常问）？

```
background: 是一个简写属性
background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size，和 background-attachment。

background: url("test.jpg") no-repeat center center;
background-size:
// 设置图片背景的大小，可以用百分比，像素单位，
// 属性有： contain 在保证图片完整的情况下，容纳图片  cover:图片等比例缩放，填满整个容器。
```

### 上下固定中间滚动布局？

用flex实现!

```
<style>
    body,html{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .app{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        height: 40px;
        background-color: orange;
    }
    .con{
        background: aqua;
        overflow: auto;
        flex: 1;
    }
    .temp{
        height: 200px;
        background: cornflowerblue;
        margin: 10px;
    }
    .footer{
        background: blue;
        height: 50px;
    }
</style>

<body>
    <div class="app">
        <div class="header"></div>
        <div class="con">
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
            <div class="temp">111</div>
        </div>
        <div class="footer"></div>
    </div>
</body>
```

<hr />

## JavaScript

### js的七种基本数据类型*

Boolean ; null ; undefined ;Number ;string ;bigint ; Symbol;

### js有哪些内置对象？*

JavaScript有许多内置对象，包括但不限于：

- 基本对象： Object、Boolean、Symbol、Number、String
- 符合数据结构：Array、Set、Map、WeakSet、WeakMap
- 日期和时间对象：Date
- 数学计算对象：Math
- 正则表达式对象：RegExp
- 函数对象：Function
- 错误对象：Error、TypeError、RangeError等
- 其他对象：Global、JSON等

### typeof 与instanceof ？*

typeof 能识别所有的值类型，识别函数，能区分是否是引用类型。(但是不判断 Array、object)

instanceof 用于检测构造函数的 **prototype** 属性是否出现在某个实例对象的原型链上。

```
typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"
```

---

### 哪些常用的数组处理方法？*

**改变数组的**： push、pop、shift、unshift、splice （可添加或者删除）

**es6的数组处理方法**：forEach、map、any、every、filter、reduce、find( 有return值、无undefine )、findIndex(有索引、无返回-1)、includes(return boolean)、indexOf（有索引、无 -1）

**普通的数组处理**：concat、join、sort(升序)、reverse（反转）、flat()

### 哪些常用的字符串处理方法？*

concat、includes、indexof、slice、split、toUpperCase()、`toLowerCase()`、`startsWith(searchValue, position)`  、endsWith(searchValue, length) 、`repeat(count)`

正则：match、replace、

### 深拷贝和浅拷贝*

深拷贝拷贝所有值，与原数据完全独立，浅拷贝只拷贝第一层。

深拷贝：

1. for循环递归
2. JSON.parse(JSON.stringif(obj))
3. lodash中的 Clonedeep()

浅拷贝:

```
Object.assign({}, original)
```

[...] 扩展运算符

### 什么是闭包？*

#### 什么是js的闭包，概念？闭包的意义？

（**变量保护**）意义！！（从架构的角度）（面试官解释了写插件的时候、不希望别人修改你的变量，不希望别人修改你的插件，闭包可以对变量进行保护，自我防护的机制，别人改不了，你自己也不会污染其他人的代码）

```
1.重用变量又不能造成全局污染
2.内层函数访问外层变量
```

#### 理解概念

闭包是指一个函数可以访问另一个函数作用域内的变量。当一个函数嵌套在另一个函数中时，内部函数可以访问外部函数的变量，即使外部函数已经返回了。这种情况下，内部函数形成了一个闭包，它保留了外部函数的作用域链并可以继续访问这些变量。

**闭包**：**现象：闭包就是内层函数访问外层变量。**

原理：*闭包*是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。

```
function outer(){
    const a = 1
    function b(){
        console.log(a)
    }
    f();
}
outer() // b访问a就构成一个闭包。闭包实现数据的私有，需要结果才返回，不需要结果就不用返回。
```

另外一种非常有意思的闭包。

```
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

闭包的利用：闭包常常用于实现函数的封装和私有化，以及在回调和事件处理等场景下的数据共享与传递。

```
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();
var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。

### 内存管理，垃圾回收的几种方式？（等下写）

内存的生命周期

1. 分配内存
2. 使用分配内存（读、写）
3. 不需要的时候释放

   回收垃圾的方法：引用计数法，标记清除法。

### 判断两个对象内容完全相等的方法？(+3)

1. Object.keys 方法来获取对象属性的列表，然后循环验证。
2. Lodash 等工具库判断两个对象, isEqual ()方法，判断是否相等
3. JSON.stringfy()把对象序列化之后比较他们的字符串。
4. Object.is() 严格比较相等。（内容和地址都要相等）

### 如何拷贝一个对象变量？

Object.assign()

### 如何理解基本数据类型和复杂数据类型？

### 如何理解作用域、作用域链和执行上下文？

在JavaScript中，作用域、作用域链和执行上下文是密切相关的概念，它们与变量和函数的查找、访问以及生命周期有关。

1. 作用域（Scope）：

   **作用域是一个变量或函数的可访问范围**。JavaScript中有三种作用域：**全局作用域**、**局部（函数）作用域**和**块级作用域**。全局作用域中声明的变量和函数可以在整个代码中访问，局部作用域中声明的变量和函数只能在特定的函数内部访问，块级作用域在一对花括号内定义，对`let`和`const`关键字声明的变量有效。

   变量的生命周期受其作用域的限制。全局作用域中的变量在整个程序执行过程中持续存在，局部作用域中的变量在函数执行结束时销毁，块级作用域在代码块执行结束时，块级作用域中的变量将被销毁。
2. 作用域链（Scope Chain）：

   **当代码执行过程中访问一个变量或函数时，JavaScript引擎会沿着作用域链查找该标识符**。作用域链是由当前执行上下文的作用域和其所有父级作用域组成的链表。

   查找过程从当前作用域开始，然后逐级向上查找，直到找到目标标识符或到达全局作用域。如果在全局作用域中仍未找到目标标识符，则返回`undefined`。
3. 执行上下文（Execution Context）：

   **执行上下文是JavaScript代码执行过程中的环境**。每当进入一个新的函数执行或全局代码执行时，都会创建一个新的执行上下文。执行上下文包含了当前执行的代码所需的所有信息，如变量、函数、作用域链等。

   JavaScript引擎使用执行上下文栈（Execution Context Stack）来管理执行上下文。栈顶的执行上下文为当前执行的代码环境。当一个函数被调用时，一个新的执行上下文被压入栈顶；当函数执行结束时，执行上下文从栈顶弹出，返回到调用者的上下文环境。

总结起来，作用域是变量和函数的可访问范围；作用域链是由当前执行上下文的作用域和其父级作用域组成的链表，用于在代码执行过程中查找变量和函数；执行上下文是代码执行过程中的环境，包含了当前执行的代码所需的所有信息。这三者共同决定了代码执行过程中变量和函数的查找、访问以及生命周期。

### 如何创建一个没有原型的对象？

可以使用 Object.create(null) 方法创建一个没有原型的对象。这个方法创建一个全新的对象并将其原型设置为 null，因此它没有继承任何属性或方法。例如：

```js
const obj = Object.create(null);
console.log(obj.toString); // undefined
```

### let const var比较

let const var 都是用来声明变量的。let 、const 声明的变量是块级作用域，同一个作用域内不能重名，

1. 作用域：
   - `var`：声明的变量具有函数作用域。这意味着在函数内部声明的变量只能在该函数内部访问，而在函数外部声明的变量具有全局作用域。
   - `let`和`const`：声明的变量具有块级作用域。这意味着变量仅在声明它们的代码块（例如：`if`语句、`for`循环、`while`循环等）内部可访问。
2. 变量提升（Hoisting）：
   - `var`：声明的变量会被提升到所在作用域的顶部。这意味着**在声明之前访问变量不会导致引用错误，但变量的值将是`undefined`。**
   - `let`和`const`：声明的变量不会被提升。在声明之前访问变量会导致引用错误。
3. 重复声明：
   - `var`：允许在同一作用域内多次声明同名变量，后续声明将被忽略。
   - `let`和`const`：在同一作用域内不允许重复声明同名变量。尝试这样做会导致语法错误。
4. 变量的可变性：
   - `var`和`let`：声明的变量可被重新赋值。
   - `const`：声明的变量是不可变的，即一旦赋值，无法更改。这对于声明常量或确保某个变量在整个程序执行过程中保持不变的情况非常有用。

### 谈谈你对变量提升的理解

变量提升（Hoisting）是 JavaScript 的一个核心概念，理解它对于编写和理解代码非常重要。以下是我对变量提升的理解：

1. 什么是变量提升：在 JavaScript 中，变量和函数声明（使用var和function）在内部会被“提升”到它们所在作用域（全局或函数）的顶部。这意味着在代码执行之前，JavaScript 引擎已经知道这些变量和函数的存在，即使它们在源代码中的位置可能在后面。
2. 声明与赋值：需要注意的是，提升只作用于声明，不作用于赋值或初始化。如果一个变量在后面被赋值，那么它在提升时仍被认为是`undefined`。只有当执行到赋值语句时，它才会被赋予特定的值。
3. var, let, const：只有用`var`声明的变量会被提升。用`let`和`const`声明的变量也有类似的提升行为，但由于它们存在“暂时性死区”（Temporal Dead Zone，TDZ），在声明前对它们的访问会导致错误。
4. 函数提升：函数声明也会被提升，并且优先级高于变量。如果一个函数和一个变量同名，且变量未被赋值，那么该名称指向函数。

### JSON.stringify有什么缺点？怎么解决？

`JSON.stringify()`是一个将JavaScript对象转换为JSON字符串的方法。

1. 丢失原型链上的属性和方法。
2. 处理日期对象的时候，反序列化之后，得到的就不是一个Date()对象了。
3. undefined、Symbol、函数之类的。都会忽略。
4. 循环引用。

尽管它在许多情况下非常有用，但它确实存在一些限制和缺点：

1. 循环引用：`JSON.stringify()`无法处理具有循环引用的对象。如果一个对象的属性直接或间接引用了自身，`JSON.stringify()`将抛出一个错误，表示存在循环引用。
2. `undefined`、函数和Symbol忽略：`JSON.stringify()`不会序列化对象中的`undefined`、函数和Symbol类型的属性。这些属性将被忽略，不会出现在生成的JSON字符串中，单独转换则会返回`undefined`。
3. 丢失原型链：在对象序列化后，原型链上的属性和方法将丢失。只有对象自身的可枚举属性会被序列化。因此，在反序列化（使用`JSON.parse()`）后，原始对象的原型链信息将不复存在。
4. 日期对象处理：当使用`JSON.stringify()`序列化日期对象时，日期对象会被转换为它们的ISO字符串表示形式。在反序列化时，这些日期将被视为普通字符串，而不是日期对象。

   ```
   const dateObj = new Date();

   // 将日期对象转换为字符串
   const dateString = dateObj.toISOString();

   // 进行序列化
   const serializedDate = JSON.stringify(dateString);

   console.log(serializedDate);
   ```
5. 非数组和非对象的值：对于不是数组或对象的顶层值（例如：字符串、数字、布尔值等），`JSON.stringify()`会直接返回其对应的JSON表示，而不会将其包装在对象或数组中。

   ```
   const de = Array.from(spareArray,e => e === undefined ? null : e )
   ```

   解决方法：

   可以用lodash 的库中的cloneDeep() 来进行一个深拷贝。

### for...in 和 for...of的区别?

for...in循环用于遍历对象的可枚举属性，返回的是属性名称；for...of循环用于遍历可迭代对象（如数组、字符串、Map、Set等），返回的是元素值。

for in 它会遍历对象自身及其原型链上的所有可枚举属性，他的遍历是不纯粹的。

解决方法：

```
for (let prop in obj) {
  if (Object.hasOwnProperty.call(object, key)) {
    console.log(prop + ": " + obj[prop]);
  }
}
```

for of 遍历要更加干净一些。

### new操作符都做了什么? *

1. 创建一个新对象
2. 对象的`__proto__`指向构造函数的`prototype`。
3. 构造函数将对象绑定到`this`并调用
4. 如果构造函数返回对象或函数则直接返回，否则返回这个新对象。

```
function customNew(constructor, ...args) {
  // 创建一个空对象，作为新实例的基础
  const instance = Object.create(constructor.prototype);

  // 将构造函数的作用域赋给新对象（设置 this 值）
  const result = constructor.apply(instance, args);

  // 如果构造函数显式返回一个对象，则返回该对象
  if (typeof result === 'object' && result !== null) {
    return result;
  }

  // 返回新对象实例
  return instance;
}
```

### 类数组和数组的区别，dom 的类数组如何转换成数组

类数组（Array-like）和数组（Array）都是用于存储多个值的数据结构，但它们之间存在一些关键区别：

1. 类型：数组是JavaScript的内置对象类型，继承自`Array.prototype`，具有一系列数组方法（如`push()`、`pop()`、`map()`等）。类数组是普通的对象，其属性名为索引（如`0`、`1`、`2`等），具有一个`length`属性，但不具备数组的方法。
2. 原型：数组的原型为`Array.prototype`，因此具有数组的所有方法。类数组的原型通常为`Object.prototype`，并不包含数组的方法。

要将DOM的类数组（例如，通过`document.getElementsByClassName()`或`document.querySelectorAll()`获取的元素集合）转换为数组，可以使用以下方法之一：

1. 使用`Array.from()`方法：
   Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

   ```js
   let nodeList = document.querySelectorAll('div');
   let array = Array.from(nodeList);
   ```

   `Array.from()`方法会创建一个新数组，并将类数组的元素逐个复制到新数组中。
2. 使用扩展运算符（Spread Operator）：

   ```js
   let nodeList = document.querySelectorAll('div');
   let array = [...nodeList];
   ```

   扩展运算符`...`可以将类数组直接转换为数组。
3. 使用`Array.prototype.slice.call()`：

   ```js
   let nodeList = document.querySelectorAll('div');
   let array = Array.prototype.slice.call(nodeList);
   ```

`Array.prototype.slice.call()`方法会将类数组作为上下文，并创建一个新数组，将类数组的元素逐个复制到新数组中。

这些方法可以将类数组转换为数组，这样就可以在转换后的数组上使用数组的方法了。注意，这些方法不仅适用于DOM类数组，还适用于其他类数组对象。

### offsetWidth/offsetHeight，clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

offsetWidth/offsetHeight是元素的可见宽度/高度加上padding、border和滚动条（如果存在）的宽度/高度。

clientWidth/clientHeight是元素的可见宽度/高度,包括padding，不包括滚动条。

scrollWidth/scrollHeight是元素内容的完整宽度/高度，包括溢出部分。如果元素没有溢出，则scrollWidth/scrollHeight等于clientWidth/clientHeight。如果有溢出，则scrollWidth/scrollHeight大于clientWidth/clientHeight。

### mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系

mouseover和mouseout是HTML DOM事件，它们会在鼠标移入或移出元素时触发。它们也会在鼠标指针进入或离开**子元素**时触发。这也就是说，如果在父元素上有mouseover事件，并且鼠标指针进入子元素，则该元素上仍然会触发mouseover事件。mouseout同理。

mouseenter和mouseleave事件也是在鼠标进入或离开元素时触发。与mouseover和mouseout不同的是，mouseenter和mouseleave事件**不会传播到子元素**。因此，如果鼠标指针进入或离开元素的子元素，则不会触发mouseenter和mouseleave事件。

### event.stopPropagation()与event.stopImmediatePropagation的区别

event.stopPropagation()可以**阻止事件冒泡到父元素**，但不阻止其他事件处理程序的执行。而event.stopImmediatePropagation()可以立即阻止事件冒泡并取消同一元素上其他事件处理程序的执行。

### 说一下事件循环机制Event Loop*

参考链接：https://www.ruanyifeng.com/blog/2014/10/event-loop.html
参考链接：https://github.com/jtwang7/JavaScript-Note/issues/49

事件循环（Event Loop）是 JavaScript 运行时环境中的一个核心概念，它负责协调异步操作和同步代码的执行。JavaScript 是单线程的，这意味着它一次只能执行一个任务。事件循环使 JavaScript 能够在执行同步代码的同时，处理异步操作（如定时器、用户交互和网络请求）的回调。

事件循环的工作原理大致如下：

1. 首先，JavaScript 引擎执行全局同步代码（例如来自`<script>`标签或 Node.js 文件的代码）。
2. 当遇到异步操作（如 `setTimeout`、`setInterval`、`Promise`、`fetch` 等），它们的回调函数会被放入相应的任务队列中（微任务队列或宏任务队列）。
3. 同步代码执行完成后，事件循环开始检查微任务队列。如果队列中有任务，事件循环将依次执行它们，直到队列为空。
4. 接下来，事件循环检查宏任务队列。如果队列中有任务，事件循环将执行第一个任务，然后返回到微任务队列，检查是否有新的微任务需要执行。
5. 事件循环在微任务队列和宏任务队列之间循环，依次执行队列中的任务。当两个队列都为空时，事件循环将等待新的任务（如用户交互或网络请求回调）。
6. 当新任务出现时，事件循环将其添加到相应的队列中，并继续循环执行任务。

事件循环的目标是在处理同步代码和异步回调之间保持平衡，确保 JavaScript 代码的执行效率和响应能力。通过这种方式，事件循环允许 JavaScript 在单线程环境中有效地处理并发操作。

### esm和commonjs的区别

ESM（ECMAScript Modules）和 CommonJS 是 JavaScript 中两种不同的模块系统。它们都允许将代码拆分成可重用的模块，并在需要时导入这些模块。尽管它们都实现了相似的功能，但它们之间存在一些关键差异：

1. 语法：ESM 和 CommonJS 使用不同的语法来导入和导出模块。

   - ESM 使用 `import` 和 `export` 关键字
   - CommonJS 使用 `require` 和 `module.exports`关键字
2. 运行时加载与静态加载：

   - CommonJS 是**运行时加载**，这意味着模块在运行时解析和加载。因此，在运行时可以动态修改模块和依赖关系。
   - ESM 是**静态加载**，这意味着模块在编译时解析和加载。这允许更好的优化，如代码消除和更快的加载速度，但不允许在运行时动态修改模块。
3. 作用域：ESM 和 CommonJS 在处理变量作用域方面有所不同。

   - ESM 使用**模块作用域**，每个模块具有自己的顶级作用域。在模块内声明的变量不会污染全局作用域。
   - CommonJS 使用**文件作用域**，但与 ESM 不同，CommonJS 模块可以通过 `global` 对象访问全局作用域。
4. 循环依赖：ESM 和 CommonJS 处理循环依赖的方式不同。

   - ESM 可以更好地处理循环依赖，因为模块是静态加载的。在循环依赖中，导入的值可能是不完整的，但不会导致错误。
   - CommonJS 在处理循环依赖时可能会遇到问题，因为模块是运行时加载的。这可能导致在循环依赖中的模块中获得一个不完整的对象。
5. 兼容性和使用场景：

   - CommonJS 主要用于 Node.js 环境，因为它是 Node.js 的原生模块系统。虽然现代 Node.js 版本也支持 ESM，但很多旧的 Node.js 代码仍使用 CommonJS。然而，许多新的 Node.js 项目逐渐采用 ESM。
   - ESM 通常用于现代 Web 开发，因为大多数现代浏览器原生支持 ESM。在使用构建工具（如 Webpack、Rollup 或 Parcel）时，ESM 也提供了更好的优化和打包能力。
6. 实时绑定与值拷贝：

   - ESM 使用**实时绑定**，当导入的值发生更改时，导入模块的值也会跟着更改。这意味着导入的值始终保持最新。
   - CommonJS 使用**值拷贝**，当模块被导入时，值被复制到导入模块。这意味着在导入模块中，值的更改不会反映到原始模块，导入的值在导入时是固定的。
7. 导出值：

   - ESM 导出值是**映射关系**，**可读，不可修改**，但可通过导出的函数修改导出的值。
   - CoomonJS 导出**值的拷贝**，**可以修改导出的值**。
8. export使用：

   - ESM export和export default支持一起使用。
   - CoomonJS module.exports和exports不支持一起使用，会被覆盖。

总结一下，ESM 和 CommonJS 的主要区别在于它们的语法、加载机制、作用域、循环依赖处理、兼容性和使用场景以及实时绑定与值拷贝。尽管它们在某些方面有所不同，它们都是为了解决 JavaScript 模块化编程的问题。

### 解释下JavaScript栈内存和堆内存？

在 JavaScript 中，栈内存（Stack Memory）和堆内存（Heap Memory）扮演着不同的角色，它们分别负责存储不同类型的数据。以下是它们在 JavaScript 中的简要说明：

1. 栈内存（Stack Memory）：
   - 栈内存主要用于存储基本类型（原始类型）的值，如 `number`、`string`、`boolean`、`null` 和 `undefined`。这些类型的值通常较小且固定大小。
   - 栈内存还负责存储函数调用的执行上下文、局部变量和临时数据。
   - 栈内存遵循后进先出（LIFO）的原则进行分配和释放空间。当函数被调用时，函数的执行上下文、局部变量和相关信息会被压入栈中；当函数返回时，这些数据会从栈中弹出。
   - 栈内存的分配和回收速度较快，因为内存管理由 JavaScript 引擎自动完成。
   - 由于栈内存有限，如果递归调用过深或者分配大量的局部变量，可能导致栈溢出。
2. 堆内存（Heap Memory）：
   - 堆内存主要用于存储引用类型的值，如对象（`object`）、数组（`array`）和函数（`function`）。这些类型的值通常较大，大小不固定。
   - JavaScript 引擎使用垃圾回收机制自动管理堆内存中的对象。当对象不再被引用时，它们会被标记为垃圾，并在下一次垃圾回收时释放内存。
   - 与栈内存相比，堆内存分配和回收速度较慢，因为需要管理更复杂的数据结构和垃圾回收机制。
   - 堆内存可以动态分配，因此可以存储更多数据。
   - 如果没有正确处理引用关系，可能导致内存泄漏。

总结一下，在 JavaScript 中，栈内存用于存储基本类型的值、函数调用的执行上下文和局部变量，堆内存用于存储引用类型的值。理解栈内存和堆内存的差异有助于编写高效且内存友好的 JavaScript 程序。

### 箭头函数与普通函数区别？

箭头函数（Arrow Functions）与普通函数（常被称为函数声明或函数表达式）在 JavaScript 中有一些重要的区别。这些区别包括语法、`this` 关键字的绑定、arguments 对象的使用、构造函数行为以及原型链。以下是箭头函数和普通函数之间的主要区别：

1. `this` 关键字绑定：
   - 箭头函数没有自己的 `this`，它从包围它的普通函数或全局作用域继承 `this`。这使得在事件处理器或回调函数中使用箭头函数非常方便，因为它们自动捕获外部的 `this`。
   - 普通函数有自己的 `this`，它的值在函数调用时确定。根据函数调用的方式（如通过对象方法调用、直接调用、构造函数调用等），`this` 的值可能会有所不同。
2. arguments 对象：
   - 箭头函数没有自己的 `arguments` 对象。它们可以访问包围它们的普通函数的 `arguments` 对象。
   - 普通函数有自己的 `arguments` 对象，这是一个类数组对象，包含了传递给函数的参数。
3. 构造函数行为：
   - 箭头函数不能作为构造函数使用，因此不能使用 `new` 关键字调用。它们也没有 `prototype` 属性。
   - 普通函数可以作为构造函数使用，通过 `new` 关键字创建新的对象实例。
4. 原型链：
   - 由于箭头函数没有 `prototype` 属性，它们不能作为其他对象的原型。
   - 普通函数有 `prototype` 属性，可以作为其他对象的原型。
5. 生成器：
   - 箭头函数不能使用`yield`关键字。
   - 普通函数可以使用`yield`关键字变成生成器函数。

### 箭头函数的this是声明时确定还是调用时确定？

箭头函数的 `this` 是根据其被声明的位置来确定的，而不是它被调用的位置。这个特性称为"词法作用域"或者"静态作用域"。箭头函数不会创建自己的 `this`，它会从自己的作用域链上一层继承 `this`。

### isNaN与Number.isNaN的区别（没用过）

isNaN函数用于检查一个值是否是NaN，它会将传入的参数先转换为数字类型再进行判断。如果传入的参数无法转换为数字类型，则会返回true。

而Number.isNaN用于检查一个值是否为NaN，但它不会将参数转换为数字类型，只有在参数本身就是NaN时才返回true。否则，返回false。

### 谈谈你对this的理解

在 JavaScript 中，`this` 是一个特殊的关键字，它在函数调用时动态地引用了一个对象。`this` 的值取决于函数的调用方式，不同的调用方式会导致 `this` 指向不同的对象。以下是一些关于 `this` 的不同用法和场景：

1. 全局上下文：

   当在全局作用域中使用 `this` 时，它指向全局对象。在浏览器环境中，全局对象是 `window`；在 Node.js 环境中，全局对象是 `global`。
2. 函数调用：

   当在函数内部使用 `this` 且函数作为普通函数调用时（非对象方法调用），`this` 通常指向全局对象。但在严格模式下（使用 `"use strict"`），`this` 会被设置为 `undefined`。
3. 对象方法调用：

   当在对象的方法内部使用 `this` 时，`this` 指向调用该方法的对象。这也适用于原型链中的方法。
4. 构造函数调用：

   当在构造函数内部使用 `this` 且使用 `new` 关键字调用构造函数时，`this` 指向新创建的对象实例。
5. 显式绑定：

   使用 `call`、`apply` 或 `bind` 方法调用函数时，可以显式地将 `this` 绑定到一个指定的对象。
6. 箭头函数：

   箭头函数没有自己的 `this`，它从包围它的普通函数或全局作用域继承 `this`。这使得在事件处理器或回调函数中使用箭头函数非常方便，因为它们自动捕获外部的 `this`。

总之，`this` 是 JavaScript 中一个动态上下文的关键字，它的值取决于函数调用的方式。

### 谈谈你对严格模式的理解

在JavaScript中，严格模式（strict mode）和非严格模式（sloppy mode）主要有以下几个区别：

1. 变量声明： 在严格模式下，必须明确地声明变量（使用`let`、`const`或`var`关键字）。否则，将会抛出一个引用错误（ReferenceError）。在非严格模式下，如果没有声明变量，JavaScript会自动将其声明为全局变量，这可能会导致意外的全局污染。
2. this指针： 在严格模式下，全局作用域中的`this`值为`undefined`。在非严格模式下，全局作用域中的`this`值为全局对象（浏览器环境中为`window`对象，Node.js环境中为`global`对象）。此外，在严格模式下，不允许使用`call`、`apply`或`bind`将`this`值设置为`null`或`undefined`。
3. 禁止使用未来保留字： 严格模式中，不能将一些未来保留字（如`implements`、`interface`、`let`、`package`、`private`、`protected`、`public`、`static`和`yield`）用作变量名或函数名。
4. 禁止使用八进制字面量： 在严格模式下，不允许使用八进制字面量（如`0123`）。非严格模式下，八进制字面量是允许的。
5. 禁止删除变量、函数和函数参数： 严格模式中lete，使用`de`操作符删除变量、函数和函数参数会引发语法错误（SyntaxError）。在非严格模式下，这样的操作是允许的，但实际上不会删除这些对象。
6. 限制函数参数的重复声明： 在严格模式下，如果一个函数具有多个相同名称的参数，将会抛出一个语法错误。非严格模式下允许这种重复声明，但只有最后一个参数值会生效。
7. 错误处理： 严格模式相较于非严格模式，更严格地处理某些类型的错误。例如，当试图修改只读属性、给不可扩展的对象添加属性或删除不可配置的属性时，严格模式会抛出类型错误（TypeError），而非严格模式下则会静默失败。

要启用严格模式，可以在脚本或函数开头添加`"use strict";`指令。这将对整个脚本或函数体中的代码启用严格模式。推荐使用严格模式编写代码，因为它可以帮助发现潜在的错误并避免一些不良的编程实践。

### 谈谈你对Promise的理解

Promise是一种在JavaScript中用于处理异步操作的编程模式。它表示一个尚未完成但预计在未来某个时刻完成的操作的结果。Promise允许我们以更简洁、易读的方式处理异步操作，避免了传统的回调地狱（callback hell）问题。

Promise有三种状态：

1. pending（待定）：初始状态，既不是fulfilled，也不是rejected。
2. fulfilled（已实现）：表示异步操作已成功完成。
3. rejected（已拒绝）：表示异步操作失败。

Promise具有以下特点：

1. Promise对象是不可变的，一旦创建，其状态就不能再被改变。
2. Promise状态只能从pending变为fulfilled或rejected，不能逆向改变，且只能改变一次。
3. Promise允许我们将成功和失败的处理函数分开，增加代码的可读性。

缺点：

1. 无法取消：一旦创建了 Promise，就无法取消它。这可能导致在某些情况下，不再需要结果的异步操作仍然在执行。
2. 总是异步：Promise 的回调总是异步执行，即使操作已经完成。这可能会导致一些意外的行为，特别是在执行顺序敏感的情况下。
3. 调试困难：由于 Promise 的链式调用和异步特性，调试 Promise 可能比调试同步代码更具挑战性。错误堆栈可能不够清晰，难以确定问题出在哪里。

Promise基本用法包括：

1. 创建Promise对象：通过`new Promise(executor)`创建一个Promise对象，其中executor是一个执行器函数，接受两个参数：resolve和reject。成功时调用resolve函数并传递结果，失败时调用reject函数并传递原因。
2. 链式调用：通过`.then()`方法处理fulfilled状态，接受一个回调函数作为参数，当Promise状态变为fulfilled时调用。`.catch()`方法处理rejected状态，接受一个回调函数作为参数，当Promise状态变为rejected时调用。
3. Promise.all：接受一个Promise数组作为参数，当所有Promise都变为fulfilled状态时返回一个新的Promise，其值为所有Promise结果的数组。如果有任意一个Promise变为rejected状态，则返回的Promise也变为rejected，且返回原因是第一个rejected的Promise的原因。
4. Promise.race：接受一个Promise数组作为参数，返回一个新的Promise，其状态和结果与第一个完成（无论是fulfilled还是rejected）的Promise相同。

通过使用Promise，我们可以更有效地处理异步操作，降低代码复杂性，提高可维护性。在现代JavaScript开发中，Promise已成为处理异步操作的重要基石。

### 为什么0.1+0.2不等于0.3（再去理解一下）

可参考文档：https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E4%B8%80%E3%80%81%E5%9C%BA%E6%99%AF%E5%A4%8D%E7%8E%B0
在JavaScript（以及许多其他编程语言）中，0.1 + 0.2 不等于 0.3 的原因是浮点数精度问题。JavaScript使用IEEE 754标准中规定的双精度浮点数（double-precision floating point）来表示数字。这种表示方法在大多数情况下都很有效，但有时会导致精度损失。

双精度浮点数只有有限的位数（64位）来表示数字，其中1位表示符号位，11位表示指数，以及52位表示尾数。当尝试表示某些数字（特别是十进制小数）时，它们的二进制表示可能是无限循环的，因此需要截断以适应有限的位数。这可能导致浮点数的近似值与实际值之间存在微小差异。

在本例中，0.1和0.2的二进制表示都是无限循环的，需要截断。当它们被截断并以双精度浮点数存储时，这两个数字的实际值与理论值略有不同。因此，当执行0.1 + 0.2时，结果也会有微小误差，与0.3的理论值不完全相等。

为了解决这个问题，可以将结果四舍五入到所需的精度。例如，如果要比较两个数字是否相等，可以将它们四舍五入到一个合理的精度，然后再进行比较：

```js
function areNumbersAlmostEqual(num1, num2, epsilon = 1e-10) {
  return Math.abs(num1 - num2) < epsilon;
}

console.log(areNumbersAlmostEqual(0.1 + 0.2, 0.3)); // 输出 true
```

在这个示例中，我们使用一个称为"epsilon"的小数值来表示可接受的误差范围。我们计算两个数字之差的绝对值，如果它小于epsilon，我们认为这两个数字几乎相等。在实践中，需要根据具体问题选择合适的epsilon值。

### Map与WeakMap的区别

Map 和 WeakMap 在 JavaScript 中都提供了键值对的存储，但它们的工作方式和底层实现有一些重要的区别。

1. 键的引用：在 Map 中，键的引用是强引用，也就是说只要 Map 存在，那么它的键值对就会保留在内存中，不会被垃圾收集器回收。而在 WeakMap 中，键的引用是弱引用，也就是说如果没有其他地方引用该键，那么该键就会被垃圾收集器回收，不论该 WeakMap 是否还存在。
2. 键的类型：在 Map 中，键可以是任何类型，包括原始类型（比如字符串、数字、布尔值）和对象类型。而在 WeakMap 中，键必须是对象。
3. 迭代器和清除方法：Map 具有诸如 `size`、`clear`、`keys`、`values` 和 `entries` 等方法，允许开发者获取大小，清除所有键值对，或者迭代所有的键或值。然而，由于 WeakMap 的键是弱引用，为了防止在垃圾回收过程中可能引发的并发问题，WeakMap 没有这些方法。
4. 底层实现：JavaScript 本身是高级语言，其具体实现取决于底层的 JavaScript 引擎，如 V8 或 SpiderMonkey。在一般情况下，Map 可以使用简单的哈希表来实现。对于 WeakMap，由于其键是弱引用，因此在内存管理方面需要更加复杂的处理。这些处理通常在引擎级别完成，而不是在 JavaScript 代码级别。

以上这些区别使得 Map 和 WeakMap 有各自适用的情况。比如，当你需要存储的键值对在某个时间点之后不再需要时，使用 WeakMap 可以防止内存泄漏。而当你需要完全控制何时删除键值对时，使用 Map 更为合适。

### Map的一些属性和方法，Map的具体使用

### es6新特性

解构、es6的新方法、

#### 扩展运算符...

```
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
const a1 = [1, 2];
const [...a2] = a1;
// [1,2]

// 还可以用扩展运算符实现数组合并，或者实现浅拷贝
const arr1 = ['a', 'b',[1,2]];
const arr2 = ['c'];
const arr3 = [...arr1,...arr2]
arr1[2][1] = 9999 // arr1
console.log(arr[3]) // arr3,['a','b',[9999,2],'c']

// 字符串转为数组
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

#### 解构运算...

#### 空值合并运算符

?? 是一种用于处理空值的运算符。如果左侧为null 或者undefined 就使用右侧的值，反之则用左侧。

与 || 相似，但是排除了false 0 还有 ‘ ’ 等情况。

```
const name = null;
const defaultName = 'John';

const result = name ?? defaultName;
console.log(result); // 输出：'John'

const num = 0;
const defaultNum = 42;

const result2 = num ?? defaultNum;
console.log(result2); // 输出：0
```

<hr />

#### Promise.allSettled()

返回传入的每个promise的结果数组

`Promise.allSettled()` 方法返回一个 Promise，该 Promise 在所有给定的 Promise 已经 resolve 或 reject 后 resolve，提供每个 Promise 的结果数组。

```
const promises = [
  Promise.resolve('Resolved'),
  Promise.reject('Rejected')
];

Promise.allSettled(promises)
  .then(results => {
    console.log(results);
  });
// [{ status: "fulfilled", value: "Resolved" }, { status: "rejected", reason: "Rejected" }]
```

#### 数组扁平化操作 flat() 与 flatmap()

Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。

```
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2) // 传入参数能转化多少层
// [1, 2, 3, 4, 5]
[1, [2, [3]]].flat(Infinity)  // 无论多少层都转化为一维数组
// [1, 2, 3]
```

flatmap相当于执行Array.prototype.map(),然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

```
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

### ****动态对象键****

```
const dynamicKey = 'dynamicProperty';
const obj = {
  [dynamicKey]: '这是一个动态的属性'
};

console.log(obj.dynamicProperty); // 这是一个动态的属性
```

### 如何理解原型链？（重点）

原型链是 JavaScript 中实现继承的一种机制，它通过让一个对象的原型指向另一个对象，从而使得一个对象可以访问另一个对象中定义的属性和方法。

当我们试图访问一个对象中不存在的属性或方法时，JavaScript 引擎会沿着原型链一直向上查找，直到找到该属性或方法为止，或者最终抵达 Object.prototype（所有对象的祖先）上停止查找。

### 关于prototype 与__proto_

__proto__是**每个对象**都有的一个属性，而prototype是**函数**才会有的属性。

___proto__指向的是**当前对象**的**原型对象**，而prototype指向的，是以**当前函数**作为**构造函数**构造出来的**对象**的**原型对象**。

**你的__proto__来自你构造函数的prototype**

prototype 是用来区分 Function 和 Object 的关键:
函数创建时, JS 会为函数自动添加 prototype 属性, 其值为一个带有 constructor 属性(指向对应的构造函数)的对象，这个对象就是我们所说的原型对象，除了 constructor 属性外，我们还可以在上面添加一些公用的属性和方法;

```
Function.prototype = {
  constructor: Function,
  // ...
}
```

而每个对象则都有一个内部属性`[[Prototype]]`, 其用于存放该对象对应的原型对象。
但是对象的内部属性`[[Prototype]]`是无法被直接访问和获取的，需要通过 `__proto__` , `Object.getPrototypeOf` / `Object.setPrototypeOf`访问.

> 你可以理解为，`[[Prototype]]` 存放了对原型对象的引用，真正的原型对象是由 `Function.prototype` 创建和维护的

### prototype 与 **proto** 的联系

1. `__proto__` 存在于所有对象上, `prototype` 只存在于函数上;
2. 每个对象都对应一个原型对象, 并从原型对象继承属性和方法, 该对应关系由 `__proto__` 实现(访问对象内部属性`[[Prototype]]`);
3. `prototype` 用于存储共享的属性和方法, 其作用主要体现在 new 创建对象时, 为 `__proto__` 构建一个对应的原型对象(设置实例对象的内部属性`[[Prototype]]`);
4. `__proto__` 不是 ECMAScript 语法规范的标准, 是浏览器厂商实现的一种访问和修改对象内部属性 `[[Prototype]]` 的访问器属性(getter/setter), 现常用 ECMAScript 定义的 `Object.getPrototypeOf` 和 `Object.setPrototypeOf` 代替;
5. `prototype` 是 ECMAScript 语法规范的标准;

> 总结来说：`[[Prototype]]` 是对象内维护其对应原型对象的属性，但它不可直接被外界访问和修改；`__proto__` 是浏览器厂商实现的访问和修改对象内部属性 `[[Prototype]]` 的访问器属性(getter/setter)，不规范，现多用ECMAScript 定义的 `Object.getPrototypeOf` 和 `Object.setPrototypeOf` 代替；而 `prototype` 则是原型对象真正创建和存储的地方，在这里可以定义一些公用的属性和方法。

### 

## TypeScript

### ts中的this和js中的this的区别？

在 TypeScript 中，this 的类型是动态的，取决于它所在的上下文。而在 JavaScript 中，this 的类型是静态的，只能在函数被调用时确定。

在 TypeScript 中，通过使用类型断言或类型定义，可以明确地声明 this 的类型。这可以帮助减少代码中的隐式错误，并且也使得代码更具可读性和可维护性。

### ts中的any在什么时候使用？

### type和interface的区别？

interface只在编译阶段存在，编译后生成的代码不包含接口的定义，他不会影响运行时的性能与行为。

type也是编译阶段处理的，但是其定义在某些情况下会影响类型的推导和检查。

type支持联合、元组、映射类型，

1. 声明方式：

   - `type` 是使用 `type` 关键字定义类型别名，可以为基本类型、联合类型、交叉类型等复杂类型提供一个名称。例如：

     ```typescript
     type Point = {
       x: number;
       y: number;
     };
     ```
   - `interface` 是使用 `interface` 关键字定义接口，主要用于描述对象的结构。例如：

     ```typescript
     interface Point {
       x: number;
       y: number;
     }
     ```
2. 扩展：

   - `type` 可以使用交叉类型 `&` 进行扩展。例如：

     ```typescript
     type Name = {
       name: string;
     };

     type Age = {
       age: number;
     };

     type Person = Name & Age;
     ```
   - `interface` 可以使用 `extends` 关键字进行扩展。例如：

     ```typescript
     interface Name {
       name: string;
     }

     interface Age {
       age: number;
     }

     interface Person extends Name, Age {}
     ```
3. 合并声明：

   - `type` 不能进行合并声明，同名的 `type` 会导致错误。
   - `interface` 可以进行合并声明，同名的 `interface` 会自动合并，合并后的接口包含所有声明的属性。
4. 类型映射：

   - `type` 可以使用映射类型创建新类型，例如：

     ```typescript
     type ReadonlyPoint = Readonly<Point>;
     ```
   - `interface` 不能直接使用映射类型，但可以通过交叉类型和映射类型创建新接口：

     ```typescript
     interface ReadonlyPoint extends Readonly<Point> {}
     ```
5. 其他类型表示：

   - `type` 支持联合类型、元组类型、映射类型等更多类型表示。例如：

     ```typescript
     type Coordinate = [number, number];
     type Shape = 'circle' | 'square' | 'rectangle';
     ```

- `interface` 主要用于描述对象的结构，不支持其他类型表示。

总结一下，`type` 和 `interface` 在 TypeScript 中都可以用于定义复杂类型，但它们在声明方式、扩展、合并声明和类型表示等方面有所不同。`type` 更灵活，支持更多类型表示，而 `interface` 更适用于描述对象结构，可以进行合并声明。

### object类型和Object类型的区别

在 TypeScript 中，`object`类型是指非原始类型，即除了 `number`、`string`、`boolean`、`symbol`、`null` 和 `undefined` 之外的类型。而 `Object` 类型是 JavaScript 中的全局对象类型，包含了一些内置方法和属性（如 `toString()` 和 `valueOf()`），可以进行类型转换。

一个实例化的 JavaScript 对象的类型是 `Object`，而一个非原始类型的值的类型是 `object`。例如：

```typescript
const obj1: object = {};    // OK
const obj2: Object = {};    // OK

const num1: object = 42;    // Error
const num2: Object = 42;    // OK, 但不推荐，因为 42 为原始类型
```

总之，`object`表示任何非原始类型的值，而 `Object`表示 JavaScript 的全局对象类型。

### 谈谈你对Enum枚举类型的理解

在 TypeScript 中，枚举（Enum）是一种特殊的数据类型，它允许为一组相关的值赋予有意义的名字。枚举类型可以帮助提高代码的可读性和可维护性。以下是关于 TypeScript 中枚举类型的一些关键点：

1. 声明枚举：

   使用 `enum` 关键字定义一个枚举类型。例如：

   ```typescript
   enum Color {
     Red,
     Green,
     Blue
   }
   ```
2. 使用枚举：

   可以通过枚举类型名字访问枚举值。例如：

   ```typescript
   let myColor: Color = Color.Red;
   ```
3. 数字枚举：

   默认情况下，枚举值是从 0 开始自增的数字。你也可以为某个成员显式指定一个数字，后续成员将从该数字开始自增。例如：

   ```typescript
   enum Direction {
     Up = 1,
     Down, // 2
     Left, // 3
     Right // 4
   }
   ```
4. 字符串枚举：

   除了数字枚举，TypeScript 还支持字符串枚举。在字符串枚举中，每个成员都需要显式地赋予一个字符串值。例如：

   ```typescript
   enum HttpMethod {
     GET = 'GET',
     POST = 'POST',
     PUT = 'PUT',
     DELETE = 'DELETE'
   }
   ```
5. 反向映射：

   数字枚举具有反向映射的特性，这意味着可以通过枚举值得到枚举名。例如：

   ```typescript
   enum Status {
     OK = 200,
     NotFound = 404
   }

   console.log(Status[200]); // 输出 "OK"
   ```

   字符串枚举没有反向映射特性。
6. 常量枚举：

   使用 `const` 关键字声明常量枚举。常量枚举在编译时会被计算，**不会在编译后的代码中生成实际的枚举对象**，可以减少生成的代码体积。例如：

   ```typescript
   const enum Weekday {
     Sunday,
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday
   }
   ```

总之，TypeScript 中的枚举类型提供了一种为一组相关值赋予有意义名字的方法，增强了代码的可读性和可维护性。枚举类型包括数字枚举、字符串枚举和常量枚举，可以根据不同的需求选择使用。

### 谈谈你对泛型的理解

泛型是一种在定义函数、接口或类时不预先指定具体的类型，而是在使用时指定的一种特性。在TypeScript中，泛型被广泛应用以增加代码的重用性和可维护性。

以下是我对TypeScript中泛型的理解：

1. **类型安全**：泛型可以帮助我们在编译时检查类型信息。这种特性可以有效地减少运行时的错误，因为我们可以在代码编写阶段就捕获潜在的类型错误。
2. **代码重用**：我们可以编写一个适用于多种类型的函数，而不是针对每一种类型都写一个函数。泛型可以提高代码的复用性，减少不必要的代码重复。
3. **灵活性**：泛型提供了高度的灵活性，我们可以在编写函数或类时不必预先指定具体的类型，而是在使用这些函数或类时指定类型。这样就使得我们的函数或类可以适应更广泛的情况。
4. **类型推断**：在许多情况下，TypeScript编译器可以自动推断出泛型的类型，这大大减少了我们编写和阅读代码时的工作量。

### any和unknown的区别？

在 TypeScript 中，`any` 和 `unknown` 都可以代表任何类型的值。但是它们在类型安全性和如何使用上有显著的差异。

1. **类型检查**：

   - `any`：当你将一个值标记为 `any` 类型时，TypeScript 将不会对这个值进行任何类型检查。这意味着，你可以在该值上进行任何操作，而不会得到编译时的错误。
   - `unknown`：它表示一个未知的值的类型。你不能直接对 `unknown` 类型的值进行操作，也不能将它分配给除 `unknown` 和 `any` 类型之外的其他类型的变量，除非你先进行类型检查或类型断言。
2. **安全性**：

   - `any`：使用 `any` 会绕过 TypeScript 的类型系统，可能导致运行时错误。它提供了最大的灵活性，但也损失了类型安全性。
   - `unknown`：要操作 `unknown` 类型的值，你必须先确保这个值是你期望的类型。这迫使你更加谨慎地处理这些值，增加了类型安全性。
3. **使用场景**：

   - `any`：当你确实不关心类型或从老的 JavaScript 代码迁移到 TypeScript 时，可能会使用 `any` 作为临时解决方案。
   - `unknown`：当你想表示一个可以是任何类型的值，但仍然想保持类型安全性时，可以使用 `unknown`。

**示例**：

考虑以下代码片段：

```typescript
let a: any = "hello";
let b: number = a;  // 这里不会有错误，因为 a 是 any 类型

let x: unknown = "hello";
let y: number = x;  // 错误！不能将类型 "unknown" 分配给类型 "number"

if (typeof x === "number") {
    let z: number = x;  // 在这里没问题，因为我们已经检查了 x 的类型
}
```

总之，`unknown` 提供了**一种在不完全确定类型时保持类型安全性**的方式，而 `any` 则完全关闭了 TypeScript 的类型检查。在可能的情况下，推荐使用 `unknown` 而不是 `any`，以保持代码的类型安全性。

### 谈谈你对词法作用域的理解

词法作用域（有时也称为静态作用域）是在编程中用于确定变量可见性和生命周期的一种作用域规则。以下是对词法作用域的深入理解：

1. **定义时确定**：词法作用域是在代码的编写阶段定义的，而不是在运行时。换句话说，作用域是由代码的物理结构决定的，而不是它是如何被调用的。
2. **嵌套结构**：在词法作用域中，我们可以在一个函数内部定义另一个函数，从而形成一个嵌套的作用域链。内部函数可以访问其外部函数的变量和参数，但外部函数不能访问其内部函数的变量。
3. **全局与局部**：

   - **全局作用域**：定义在所有函数外部的变量拥有全局作用域。全局变量可以在代码的任何地方访问。
   - **局部作用域**：在函数内部定义的变量拥有局部作用域。它们只能在函数内部被访问。
4. **作用域链**：当在一个作用域内查找一个变量时，如果当前作用域没有定义该变量，查找会继续到包含（外部）作用域，直到找到该变量或达到全局作用域。这种查找链被称为作用域链。
5. **与动态作用域的区别**：词法作用域与动态作用域是两种不同的作用域规则。在动态作用域中，作用域是由函数如何被调用决定的，而不是代码的结构。JavaScript 使用的是词法作用域，而不是动态作用域。
6. **闭包**：闭包是词法作用域和函数的强大组合。当函数能够记住并访问其词法作用域，即使当该函数在其原始词法作用域之外执行时，我们就称之为闭包。
7. **阻止变量提升**：在 JavaScript 中，`let` 和 `const` 关键字（ES6及之后的版本引入）为变量定义提供了块级作用域，这与传统的 `var` 关键字有所不同。
8. **性能考虑**：由于词法作用域是在编译时确定的，编译器可以对代码进行优化。知道哪些变量在哪里被访问，以及它们如何被访问，可以帮助编译器提高代码的执行效率。

<hr />

### 枚举

**枚举就是一个对象的所有可能取值的集合**。后端日常返回0、1 等等状态的时候，我们都可以通过枚举去定义，这样可以提高代码的可读性，便于后续的维护。

枚举有数字枚举和字符串枚举

```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

```

### 类型体操

## Node

### require一个模块时的查找过程

当使用 `require` 函数加载一个模块时，Node.js 遵循一定的查找和解析过程。以下是 `require` 函数的主要查找过程：

1. 内置模块：

   首先，Node.js 检查请求的模块是否为内置模块（如 `http`, `fs`, `path` 等）。如果是内置模块，直接返回内置模块的导出对象，查找过程结束。
2. 文件和文件夹模块：

   如果请求的模块不是内置模块，Node.js 将尝试将其解析为文件或文件夹模块。按照以下顺序查找：

   - 检查是否存在带 `.js`、`.json`、`.node` 扩展名的文件。如果找到了匹配的文件，加载并执行该文件，然后返回其导出对象。
   - 如果没有找到匹配的文件，检查是否存在同名文件夹。如果存在同名文件夹，Node.js 将查看该文件夹内的 `package.json` 文件。如果 `package.json` 文件中定义了 `main` 字段，Node.js 将尝试加载该字段指定的文件。如果没有 `main` 字段或无法加载指定的文件，Node.js 将尝试加载文件夹内的 `index.js`、`index.json` 或 `index.node` 文件。
3. 节点模块：

   如果请求的模块既不是内置模块，也不是文件或文件夹模块，Node.js 将尝试将其解析为节点模块。Node.js 会按照一定的顺序在 `node_modules` 文件夹中查找模块：

   - 从当前文件所在的目录开始，查找 `node_modules` 文件夹。如果找到了匹配的模块，加载并执行该模块，然后返回其导出对象。
   - 如果在当前目录的 `node_modules` 文件夹中未找到匹配的模块，Node.js 将继续向上级目录查找，直到找到匹配的模块或到达文件系统的根目录。
4. 查找失败：

   如果在以上步骤中未找到匹配的模块，Node.js 将抛出一个 `MODULE_NOT_FOUND` 错误。

总结一下，当使用 `require` 函数加载一个模块时，Node.js 遵循一定的查找和解析过程。首先检查内置模块，然后尝试解析为文件或文件夹模块，最后尝试解析为节点模块。如果在这些步骤中未找到匹配的模块，Node.js 将抛出一个错误。

### 谈谈你对Node中间件的理解

中间件（Middleware）是一种重要的设计模式。（逻辑层）它们用于处理请求和响应的过程中的各种任务，以便将逻辑分离到不同的组件中，提高代码的可读性和可维护性。以下是关于 Node.js 中间件的一些关键点：

1. 功能：中间件的主要功能是在请求和响应的处理过程中执行特定任务。例如，验证用户身份、解析请求体、记录访问日志、处理跨域请求等。
2. 顺序执行：中间件按照添加顺序依次执行。当一个中间件处理完毕后，它可以选择将控制权传递给下一个中间件，或者直接结束请求-响应周期。
3. 基本结构：在 Express 中，中间件通常是一个函数，接收三个参数：`req`（请求对象）、`res`（响应对象）和 `next`（下一个中间件函数）。在 Koa 中，中间件是一个异步函数，接收一个参数：`ctx`（上下文对象），并返回一个 Promise。

   - Express 中间件示例：

     ```js
     function logger(req, res, next) {
       console.log(`${req.method} ${req.url}`);
       next();
     }
     ```
   - Koa 中间件示例：

     ```js
     async function logger(ctx, next) {
       console.log(`${ctx.method} ${ctx.url}`);
       await next();
     }
     ```
4. 添加中间件：在 Express 和 Koa 中，都有一种方法来将中间件添加到请求处理管道中。

   - Express 示例：

     ```js
     const express = require('express');
     const app = express();
     app.use(logger);
     ```
   - Koa 示例：

     ```js
     const Koa = require('koa');
     const app = new Koa();
     app.use(logger);
     ```
5. 错误处理：中间件还可以用于处理错误。在 Express 中，错误处理中间件接收四个参数：`err`（错误对象）、`req`（请求对象）、`res`（响应对象）和 `next`（下一个中间件函数）。在 Koa 中，错误处理中间件通常在其他中间件的 `try`/`catch` 块中捕获异常。

   - Express 错误处理示例：

     ```js
     function errorHandler(err, req, res, next) {
       console.error(err);
       res.status(500).send('Internal Server Error');
     }
     app.use(errorHandler);
     ```
   - Koa 错误处理示例：

     ```js
     async function errorHandler(ctx, next) {
       try {
         await next();
       } catch (err) {
         console.error(err);
         ctx.status = 500;
         ctx.body = 'Internal Server Error';
       }
     }
     app.use(errorHandler);
     ```

总之，Node.js 中间件是一种设计模式，用于在请求和响应的处理过程中执行特定任务。中间件可以帮助我们将逻辑分离到不同的组件中，提高代码的可读性和可维护性。通过使用中间件，我们可以更方便地组织和管理代码，以实现各种功能，如身份验证、日志记录、错误处理等。

当创建一个中间件时，需要考虑以下几点：

1. 职责分离：每个中间件应该只负责一个特定任务。这有助于保持代码的简洁和易于维护。
2. 代码复用：通过将通用功能封装在中间件中，我们可以在不同的项目和模块中重用这些功能。
3. 顺序重要：中间件的执行顺序很重要，因为它们之间可能存在依赖关系。例如，一个解析请求体的中间件应该在处理具体业务逻辑的中间件之前执行。
4. 可配置性：中间件应该具有一定的可配置性，以便根据项目的不同需求进行调整。
5. 异常处理：确保在中间件中处理可能发生的异常，以便能够优雅地处理错误并向用户返回有用的错误信息。

通过使用中间件，我们可以创建出更加模块化、可扩展和可维护的 Node.js 应用程序。无论是使用 Express、Koa 还是其他框架，中间件都是 Node.js 开发中一个非常重要的概念。

### npm run dev时发生了什么？

`npm run dev` 是一个在 Node.js 项目中常见的命令，通常用于启动开发环境。这个命令实际上会触发一系列的操作。下面是一个简化的概述：

1. 首先，当你执行 `npm run dev` 命令时，npm 会在项目的 `package.json` 文件中查找名为 `dev` 的脚本。这个脚本通常是一个包含了如何启动开发服务器或构建工具的命令。
2. 接下来，npm 会执行 `dev` 脚本中的命令。这个命令通常会启动一个开发服务器，如 Webpack Dev Server、Express、Next.js 等，这些服务器会监听文件更改，自动重新编译和刷新浏览器。
3. 在开发服务器启动的过程中，可能会执行一些构建任务，如编译 JavaScript、CSS、HTML 等资源，执行代码检查，以及优化代码等。
4. 有些项目可能还会启动其他辅助工具，如热模块替换（HMR, Hot Module Replacement）来实现无需刷新页面即可更新局部变化，或者启动一个代理服务器来处理跨域请求等。
5. 最后，当开发服务器启动完成后，你可以在浏览器中访问项目，并在修改代码后看到实时更新。

综上，`npm run dev` 通常是一个用于启动开发环境的命令，它会执行一系列操作来方便开发人员进行实时的代码调试和更新。具体的操作可能因项目和开发工具的不同而有所差异。

### Node中进程之间是如何通信的

在 Node.js 中，进程之间可以使用多种方式进行通信。主要的通信方式是使用进程间通信（Inter-process communication, IPC）通道。以下是 Node.js 中实现进程间通信的几种方法：

1. `child_process.fork()`

   使用 `child_process.fork()` 方法创建的子进程会自动建立一个 IPC 通道，允许父子进程之间通过 `send()` 方法发送消息，同时监听 `message` 事件接收消息。例如：

   父进程（parent.js）：

   ```js
   const { fork } = require('child_process');
   const child = fork('./child.js');

   child.send('Hello from parent!');

   child.on('message', (msg) => {
     console.log(`Received message from child: ${msg}`);
   });
   ```

   子进程（child.js）：

   ```js
   process.on('message', (msg) => {
     console.log(`Received message from parent: ${msg}`);
     process.send('Hello from child!');
   });
   ```
2. `child_process.spawn()`

   使用 `child_process.spawn()` 创建子进程时，可以通过配置 `stdio` 选项来建立一个 IPC 通道。例如：

   父进程（parent.js）：

   ```js
   const { spawn } = require('child_process');
   const child = spawn(process.execPath, ['./child.js'], {
     stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   });

   child.send('Hello from parent!');

   child.on('message', (msg) => {
     console.log(`Received message from child: ${msg}`);
   });
   ```

   子进程（child.js）：

   ```js
   process.on('message', (msg) => {
     console.log(`Received message from parent: ${msg}`);
     process.send('Hello from child!');
   });
   ```
3. 使用第三方库

   除了上述 Node.js 内置的方法外，还可以使用一些第三方库来实现进程间通信，如：`node-ipc`、`zeromq` 等。这些库通常提供了更高级的抽象和更强大的功能。

总之，Node.js 中进程间通信主要通过 IPC 通道实现。可以使用 `child_process.fork()` 或 `child_process.spawn()` 方法创建具有 IPC 通道的子进程，也可以考虑使用第三方库来实现更高级的通信需求。

### 谈谈你对Stream的理解

在 Node.js 中，**流（Stream）是一种处理数据的抽象接口**，允许开发者按照一定的顺序处理数据。流可以用于读取、写入或转换数据。**流的核心思想是将大量数据拆分成小的数据块，一次处理一个数据块**，从而避免一次性加载整个数据集导致的内存不足问题。流在 Node.js 中被广泛应用，如文件操作、网络传输等场景。

流有以下四种类型：

1. **Readable Stream**：可读流是从某个来源读取数据的流。例如，从文件中读取数据、从 HTTP 响应中读取数据等。可读流会触发 `data` 事件来传输数据块，当数据读取完成时，会触发 `end` 事件。
2. **Writable Stream**：可写流是将数据写入到某个目标的流。例如，向文件中写入数据、向 HTTP 请求中写入数据等。可写流提供了 `write()` 方法用于写入数据，`end()` 方法用于表示数据写入完成。
3. **Duplex Stream**：双工流是可读可写的流，可以同时读取和写入数据。例如，TCP 套接字就是一个双工流，允许在同一时间进行数据的读取和写入。
4. **Transform Stream**：转换流是一种特殊的双工流，它可以在读写过程中修改或转换数据。例如，压缩或解压数据、加密或解密数据等。

在 Node.js 中，流是基于事件的，可读流和可写流都继承自 `EventEmitter` 类。这使得流可以通过事件机制来处理各种情况，如数据到达、数据写入完成、错误发生等。

流有许多优点，例如：

- **内存占用低**：流允许按需处理数据，避免一次性加载整个数据集导致的内存不足问题。
- **速度快**：流可以在数据可用时立即开始处理，而无需等待整个数据集加载完成。
- **可组合**：流可以通过管道（pipe）组合在一起，实现数据的读取、转换和写入等一系列操作。

总之，Node.js 中的流是一种处理大量数据的高效方式，具有低内存占用、快速处理和可组合等特点。在文件操作、网络传输等场景中，流被广泛应用。

### 谈谈你对Node事件循环的理解

Node.js 事件循环（Event Loop）是其核心运行机制之一，它允许 Node.js 在处理大量并发操作时保持高性能。事件循环是一个程序结构，用于等待、接收并处理事件，例如 I/O 操作、计时器和其他异步操作。它的工作原理是在事件队列中持续循环，直到程序终止。下面详细介绍 Node.js 事件循环的关键概念：

1. 单线程：Node.js 采用单线程模型，这意味着在给定时刻只能执行一个任务。但是，由于它采用非阻塞 I/O，因此可以处理大量并发操作。
2. 非阻塞 I/O：Node.js 的 I/O 操作是非阻塞的，这意味着执行 I/O 时不会等待操作完成，而是继续执行其他任务。当 I/O 操作完成时，回调函数将被添加到事件队列以供事件循环处理。
3. 事件队列：事件队列是一个先进先出（FIFO）的队列，用于存储待处理的事件。事件循环会不断从队列中取出并处理事件。
4. 事件循环阶段：Node.js 事件循环分为几个阶段，每个阶段负责处理不同类型的任务：
   - 定时器阶段：处理 setTimeout 和 setInterval 计时器的回调。
   - I/O 回调阶段：处理大部分 I/O 回调。
   - 闲置、准备阶段：内部使用，为其他阶段做准备。
   - 轮询阶段：检查新的 I/O 事件并处理。
   - 检查阶段：处理 setImmediate 的回调。
   - 关闭事件回调阶段：处理关闭请求，如服务器关闭、socket 断开等。
5. 微任务（Microtasks）：在事件循环的每个阶段之间，Node.js 会处理微任务队列。微任务包括 Promise 的 resolve 和 reject 回调。这意味着微任务会在事件循环的下一个阶段之前执行。

通过协调这些概念，Node.js 事件循环使得程序能够以高效、可扩展的方式处理大量并发操作。在编写 Node.js 程序时，了解事件循环如何工作以及如何在程序中使用异步模式是非常重要的。

### process.nextTick(callback)、setImmediate(callback)和setTimeout(callback, 0)的区别？

`process.nextTick(callback)`、`setImmediate(callback)` 和 `setTimeout(callback, 0)` 都是在 Node.js 中用于异步执行代码的函数，但它们的行为和执行顺序有所不同。

1. **`process.nextTick(callback)`**：此函数将 `callback` 添加到当前事件循环的"next tick queue"中。这意味着 `callback` 函数会在当前操作完成后、事件循环的下一轮循环之前立即执行。`process.nextTick` 具有最高优先级，因此在所有异步任务中最先执行。
2. **`setImmediate(callback)`**：此函数将 `callback` 添加到事件循环的"check"阶段（即在 I/O 回调之后、关闭回调之前）。`setImmediate` 的执行顺序要低于 `process.nextTick`，但高于 `setTimeout(callback, 0)`。`setImmediate` 主要用于分离计算密集型任务，以允许其他任务在事件循环中执行。
3. **`setTimeout(callback, 0)`**：此函数将 `callback` 添加到定时器队列，使其在定时器阶段执行。尽管延迟时间设置为 0，但实际的延迟可能会更长，因为事件循环需要处理其他任务。`setTimeout(callback, 0)` 的执行顺序最低，通常在所有其他异步任务之后执行。

总结一下，这些函数的执行顺序是：

- `process.nextTick(callback)`：优先级最高，在当前事件循环的下一刻执行。
- `setImmediate(callback)`：在事件循环的 I/O 回调之后执行。
- `setTimeout(callback, 0)`：在定时器队列中执行，具有最低的优先级。

在实践中，你应该根据需要选择适当的函数。例如，如果你希望在事件循环的下一轮循环之前立即执行一个任务，可以使用 `process.nextTick`；如果你希望在其他任务完成后执行一个任务，可以使用 `setImmediate` 或 `setTimeout`。

### child_process模块中，spawn()、fork()、exec()的区别？

`child_process` 是 Node.js 的一个内置模块，它允许你在子进程中执行系统命令和运行其他 Node.js 进程。模块中的 `spawn()`、`fork()` 和 `exec()` 函数都可以用于创建子进程，但它们之间存在一些差异：

1. **`spawn(command[, args][, options])`**：`spawn` 是一个底层函数，用于异步地创建一个新的子进程。它接受一个命令（例如 `'ls'` 或 `'node'`）和一个可选的参数数组。`spawn` 返回一个 `ChildProcess` 对象，你可以通过该对象的 `stdout` 和 `stderr` 流来获取子进程的输出。`spawn` 适用于需要处理大量数据的长时间运行的进程，因为它不会缓冲输出，而是将数据以流的形式返回。
2. **`fork(modulePath[, args][, options])`**：`fork` 是一个特殊的 `spawn`，专门用于创建 Node.js 子进程。它接受一个 Node.js 模块的路径（而不是系统命令）和一个可选的参数数组。与 `spawn` 类似，`fork` 返回一个 `ChildProcess` 对象。`fork` 还为父子进程之间的通信提供了内置支持，可以使用 `send()` 方法发送消息，接收消息的事件为 `message`。由于 `fork` 专门用于 Node.js 进程，所以它更适合 Node.js 应用程序中的进程管理。
3. **`exec(command[, options][, callback])`**：`exec` 用于异步地执行系统命令，并将输出缓冲到一个回调函数中。它接受一个完整的命令字符串（包括参数），当进程完成时，回调函数将被调用，并接收可能的错误、标准输出和标准错误作为参数。`exec` 适用于预期输出较小的短时命令，因为它会将输出缓冲到内存中，可能导致内存不足的问题。

总结一下：

- `spawn()`：用于异步地创建子进程，适用于大量数据的长时间运行的进程。
- `fork()`：用于创建 Node.js 子进程，提供了父子进程间的内置通信支持。
- `exec()`：用于执行短时命令，将输出缓冲到内存中。适用于预期输出较小的情况。

在选择适当的函数时，你应该根据需要执行的命令类型、预期的输出量和是否需要进程间通信来进行判断。

<hr />

## 浏览器

### 各种主流浏览器与其使用的内核

Google Chrome：**Blink**（基于 WebKit 分支而来）
Microsoft Edge（新版）：Blink（基于 Chromium）
Mozilla Firefox：**Gecko**
Apple Safari：**WebKit**
Opera：Blink（基于 Chromium）

### DOMContentLoaded 与 load 的区别 ?

`DOMContentLoaded` 和 `load` 都是浏览器中的事件，它们表示页面加载过程中的不同阶段。这两个事件的主要区别在于它们触发的时间和关注的内容。

1. **DOMContentLoaded**：当 HTML 文档被完全加载和解析完成后，`DOMContentLoaded` 事件就会触发，而此时无需等待样式表、图像和子框架的完成加载。换句话说，`DOMContentLoaded` 主要关注 HTML 文档结构的加载，以便 JavaScript 代码可以在 DOM 树准备就绪后立即运行。这使得你可以尽早地开始操作 DOM，而无需等待其他资源加载完成。
2. **load**：当页面上的所有资源（包括样式表、图像、子框架等）都完成加载后，`load` 事件会触发。这意味着在 `load` 事件触发时，你可以确保页面上的所有资源都可用，这对于需要操作图像尺寸或其他依赖外部资源的功能来说非常有用。

总之，`DOMContentLoaded` 和 `load` 事件的区别在于它们关注的内容和触发时间：

- `DOMContentLoaded`：在 HTML 文档结构加载和解析完成后触发，不等待外部资源（如样式表和图像）加载完成。
- `load`：在页面上的所有资源（包括样式表、图像等）加载完成后触发。

通常，如果你的 JavaScript 代码仅依赖于 DOM 结构，那么使用 `DOMContentLoaded` 事件会更快、更有效。如果你的代码依赖于外部资源，那么使用 `load` 事件可能更合适。

### 谈谈你对dom事件机制的理解

DOM（文档对象模型，Document Object Model）事件机制是Web浏览器中实现交互的重要组成部分。在JavaScript中，DOM事件机制使得开发者可以在特定情况下响应用户的操作，如点击、滚动、键盘输入等。以下是对DOM事件机制的一些理解：

1. 事件流：DOM事件机制分为三个阶段，分别是捕获阶段（capturing phase）、目标阶段（target phase）和冒泡阶段（bubbling phase）。事件首先会经过捕获阶段，沿着DOM树从上至下传递，直到到达事件的目标元素。然后进入目标阶段，触发目标元素上的事件处理程序。最后是冒泡阶段，事件沿着DOM树从下往上回传。
2. 事件处理程序：开发者可以为DOM元素添加事件处理程序，用以响应特定的事件。事件处理程序可以使用两种方式进行绑定：一种是通过HTML属性直接在元素上绑定，如`onclick`；另一种是通过JavaScript为元素添加事件处理程序，如`addEventListener()`方法。
3. 事件对象：当事件触发时，浏览器会自动创建一个事件对象，该对象包含了有关事件的详细信息，例如事件类型、目标元素、触发时间等。事件对象通常作为事件处理程序的第一个参数传递。
4. 事件委托：事件委托是一种事件处理机制，通过将事件处理程序绑定到父元素，可以实现对子元素的事件监听。这样可以减少事件处理程序的数量，提高性能。事件委托利用了事件冒泡机制，使得在父元素上可以捕捉到子元素触发的事件。
5. 阻止默认行为和阻止事件传播：在某些情况下，我们希望阻止事件的默认行为或阻止事件的传播。可以通过调用事件对象的`preventDefault()`方法来阻止默认行为，调用`stopPropagation()`方法来阻止事件的传播。

了解DOM事件机制对于前端开发者非常重要，因为它涉及到网页交互、用户体验等关键方面。掌握DOM事件机制有助于编写更高效、可维护的代码。

### 什么是默认行为，哪些事件有默认行为

默认行为是指浏览器在某些事件触发时自动执行的内置行为。在处理这些事件时，如果不希望触发默认行为，可以使用`preventDefault()`方法来阻止它。以下是一些具有默认行为的常见事件：

1. `click`：当点击某些元素（如链接）时，浏览器会执行默认行为，如导航到指定的URL。
2. `submit`：当表单元素触发提交事件时，浏览器的默认行为是向服务器发送表单数据。
3. `keydown`：在输入框内按下某些特定键（如Enter键）时，可能会触发浏览器的默认行为，如提交表单。
4. `contextmenu`：当用户右击网页时，浏览器会显示上下文菜单。这是`contextmenu`事件的默认行为。
5. `dragstart`和`drop`：当对某些元素进行拖放操作时，浏览器会执行默认的拖放行为。
6. `mousedown`：在文本区域内按下鼠标，浏览器默认会选中文本。
7. `wheel`：当用户滚动鼠标滚轮时，浏览器的默认行为是滚动页面。
8. `touchstart`、`touchmove`、`touchend`：在触摸设备上，这些触摸事件的默认行为可能包括滚动、缩放等。

这些事件的默认行为取决于浏览器及其版本。在某些情况下，为了实现自定义行为或提高用户体验，开发者可能需要阻止这些默认行为。在事件处理程序中调用`event.preventDefault()`方法可以实现这一目的。但请注意，不是所有事件的默认行为都可以被阻止，部分事件可能由于浏览器安全策略等原因无法阻止默认行为。

### CSS加载会造成阻塞吗？

CSS 加载对于渲染流程来说是有阻塞性的。当浏览器遇到一个外部 CSS 文件时，它会发送一个请求去获取这个文件。在获取并解析完 CSS 文件之前，浏览器会阻塞渲染流程。这是因为 CSS 文件中可能包含对页面元素的样式信息，浏览器需要确保在渲染页面时使用正确的样式。

尽管 CSS 加载阻塞渲染，但它并不阻塞其他资源的下载（如 JavaScript、图片等）。这意味着浏览器可以并行下载其他资源，从而提高页面的加载性能。

为了避免 CSS 阻塞渲染，可以采取以下措施：

1. **将 CSS 放在 `<head>` 标签中**：将 `<link>` 标签放在 `<head>` 中，可以确保浏览器尽早发现并下载 CSS 文件，从而减少渲染阻塞的时间。
2. **使用媒体查询**：通过为 CSS 文件添加媒体查询，可以告诉浏览器只在特定条件下使用这个文件。这样，在不满足条件的情况下，浏览器不会阻塞渲染。例如：`<link rel="stylesheet" href="print.css" media="print">`。
3. **代码分割和按需加载**：将 CSS 分为多个较小的文件，只在需要时加载。例如，可以将关键 CSS 内联到 HTML 文档中，以加速首屏渲染。其他非关键 CSS 可以在页面加载完成后异步加载。
4. **优化和压缩 CSS**：优化和压缩 CSS 代码，可以减小文件大小，从而加快下载速度。可以使用 CSS 预处理器（如 Sass、Less）或压缩工具（如 CSSNano、UglifyCSS）进行优化。

通过采用这些策略，可以降低 CSS 加载对页面渲染的阻塞性，从而提高用户体验。

### 谈谈你对跨域资源共享CORS的理解

跨域资源共享（Cross-Origin Resource Sharing，简称 CORS）是一种安全机制，允许一个网页的资源（例如 AJAX 请求、字体、图片等）从不同的源（域名、协议或端口）访问。**由于同源策略（Same-origin policy）的限制，不同源的网页通常无法互相访问资源**。CORS 通过在 HTTP 头中加入特定的字段，使得浏览器和服务器之间可以协商，从而允许跨域请求。

CORS 主要通过以下几种方式实现跨域访问：

1. **简单请求**：简单请求是指满足一定条件的跨域请求，包括使用以下 HTTP 方法之一：GET、HEAD、POST，并且 HTTP 头信息不超出以下字段：Accept、Accept-Language、Content-Language、Content-Type（限于 application/x-www-form-urlencoded、multipart/form-data、text/plain）。对于简单请求，浏览器会在请求中添加 `Origin` 头，指示请求来自哪个源。服务器接收到请求后，如果允许跨域访问，会在响应头中添加 `Access-Control-Allow-Origin` 字段。
2. **预检请求**：预检请求（Preflight request）是一种 CORS 机制，用于处理不满足简单请求条件的跨域请求。预检请求使用 OPTIONS 方法发送，浏览器会在请求头中包含 `Origin`、`Access-Control-Request-Method` 和 `Access-Control-Request-Headers` 字段。服务器收到预检请求后，如果允许跨域访问，会在响应头中添加 `Access-Control-Allow-Origin`、`Access-Control-Allow-Methods`、`Access-Control-Allow-Headers` 等字段。预检请求成功后，浏览器才会发送实际的跨域请求。
3. **携带身份凭证**：CORS 还支持在跨域请求中携带身份凭证（如 Cookie），通过设置 `withCredentials` 属性为 `true`。在这种情况下，服务器需要在响应头中添加 `Access-Control-Allow-Credentials: true` 字段，以允许携带身份凭证的请求。同时，`Access-Control-Allow-Origin` 字段不能为通配符（`*`），必须指定具体的源。

总的来说，CORS 通过在 HTTP 头中添加特定的字段，使得浏览器和服务器之间可以协商允许跨域访问。这种机制确保了 Web 应用程序的安全性，同时允许跨域资源共享。在实际开发中，服务器端需要正确配置 CORS 相关的响应头，以支持跨域请求。

### 浏览器的主要组成部分是什么？

浏览器主要由以下几个组成部分：

1. **用户界面（User Interface）**：用户界面包括地址栏、前进/后退按钮、书签菜单等。它是用户与浏览器进行交互的部分。
2. **浏览器引擎（Browser Engine）**：浏览器引擎是浏览器的核心部分，负责在用户界面和渲染引擎之间协调操作。它接收用户界面的命令，然后将其传递给渲染引擎或其他浏览器组件。
3. **渲染引擎（Rendering Engine）**：渲染引擎负责显示请求的内容，如 HTML、CSS 和图像等。它将这些资源解析为屏幕上可见的图形。主流的渲染引擎有 WebKit（Chrome、Safari 等浏览器使用）和 Gecko（Firefox 使用）。
4. **网络（Networking）**：网络组件用于处理网络请求和响应，如 HTTP 请求，以获取所需的资源（HTML、CSS、JavaScript、图像等）。它还负责处理网络协议、DNS 查询等。
5. **JavaScript 解释器（JavaScript Interpreter）**：JavaScript 解释器负责解析和执行 JavaScript 代码。主流的 JavaScript 引擎有 V8（Chrome 和 Node.js 使用）、SpiderMonkey（Firefox 使用）和 JavaScriptCore（Safari 使用）。
6. **UI 后端（UI Backend）**：UI 后端负责绘制用户界面的基本组件，如窗口、按钮等。它使用操作系统的用户界面方法，以实现跨平台的用户界面功能。
7. **数据存储（Data Storage）**：浏览器需要在本地存储数据，如 Cookie、localStorage 和 IndexedDB 等。这些数据存储技术使得 Web 应用可以在浏览器中持久化数据。

这些组件共同构成了现代浏览器，使得用户可以浏览网页并与之互动。各个浏览器可能在实现上有所不同，但它们的基本组成部分和功能是相似的。

![70902972428](C:\Users\鱼鱼鱼\AppData\Local\Temp\1709029724282.png)

### 谈谈你对SPA单页应用的理解

SPA（Single Page Application，单页应用）是一种 Web 应用开发模式，它在浏览器中加载一个 HTML 文件，然后通过 JavaScript 动态更新和操作 DOM 元素，以实现页面内容的改变。在这种模式下，所有的操作都在同一个页面中进行，不需要跳转到其他页面。这样可以避免多次向服务器请求不同的页面，从而提高用户体验。

以下是关于 SPA 的一些特点和优缺点：

优点：

1. **快速响应**：SPA 在第一次加载时，获取所有必要的资源（HTML、CSS、JavaScript），之后只需通过 AJAX 请求获取数据，无需重新加载整个页面。这使得 SPA 更快速响应，为用户提供了更流畅的体验。
2. **前后端分离**：SPA 通常与 RESTful API 结合使用，使得前端和后端可以独立开发和部署。这种分离有助于提高开发效率，降低维护成本。
3. **易于开发和调试**：由于 SPA 主要依赖于 JavaScript 进行页面更新和数据处理，开发者可以使用各种现代 JavaScript 开发工具和框架，如 React、Angular 和 Vue 等，以简化开发和调试过程。

缺点：

1. **SEO 问题**：传统的搜索引擎爬虫可能无法正确解析和执行 JavaScript，导致 SPA 页面的内容无法被搜索引擎索引。虽然现代搜索引擎如 Google 在这方面有所改进，但仍需额外的优化以确保 SPA 的搜索引擎优化（SEO）效果。
2. **初始加载时间**：由于 SPA 在第一次加载时需要获取所有必要的资源，这可能导致初始加载时间较长。为解决这个问题，可以采用代码分割、懒加载等技术来优化加载性能。
3. **安全问题**：SPA 可能面临跨站脚本（XSS）攻击和其他安全威胁。开发者需要采取相应的安全措施，如对用户输入进行过滤和验证，确保 Web 应用的安全性。

总的来说，SPA 是一种流行的 Web 应用开发模式，它具有快速响应、前后端分离等优点，但同时也需要注意解决 SEO、性能和安全等方面的问题。

### 为什么JS执行时会阻塞页面加载

JavaScript 执行阻塞页面加载的原因是浏览器在解析和渲染 HTML 文档时遵循自上而下的顺序。当浏览器遇到一个 `<script>` 标签时（尤其是外部 JavaScript 文件），它会立即下载并执行这个脚本。由于 JavaScript 可能会修改 DOM 结构或操作 CSSOM（如添加、删除元素或更改样式），浏览器必须确保在执行 JavaScript 之前，先解析完 JavaScript 之前的 HTML 和 CSS。这样可以**防止页面出现不一致的渲染效果**。

因此，当浏览器遇到一个 JavaScript 脚本时，它会：

1. 阻塞 HTML 解析。
2. 如果有外部 JavaScript 文件，发送请求并等待下载完成。
3. 执行 JavaScript 代码。
4. 继续解析剩余的 HTML 文档。

JavaScript 执行阻塞页面加载可能会导致性能问题和较差的用户体验。为了解决这个问题，可以采用以下策略：

1. **将脚本放在文档底部**：将 `<script>` 标签放在文档的底部，紧邻 `</body>` 标签。这样可以确保在执行 JavaScript 之前，先解析完 HTML 和 CSS，从而减少阻塞时间。
2. **使用 `defer` 属性**：给 `<script>` 标签添加 `defer` 属性，可以告诉浏览器在下载脚本的同时继续解析 HTML。脚本将在文档解析完成后顺序执行。例如：`<script src="example.js" defer></script>`。
3. **使用 `async` 属性**：给 `<script>` 标签添加 `async` 属性，可以使脚本异步下载和执行。这意味着脚本会在下载完成后立即执行，而不用等待其他脚本。请注意，这可能会导致脚本执行顺序发生变化，因此只适用于那些不依赖其他脚本的独立脚本。例如：`<script src="example.js" async></script>`。

通过采用这些策略，可以减少 JavaScript 对页面加载的阻塞性，提高页面性能和用户体验。

### 说一说你对Cookie localStorage sessionStorage的理解

Cookie、localStorage 和 sessionStorage 都是在客户端存储数据的技术，但它们之间有一些关键的区别：

1. **Cookie**：

   - Cookie 最初是为了在客户端保存用户会话信息而设计的，它们可以在客户端和服务器之间进行传递。
   - Cookie 的大小限制为 4KB 左右，因此不适合存储大量数据。
   - Cookie 有一个有效期，可以设置为特定的时间长度。过期后，Cookie 会被自动删除。
   - Cookie 可能面临安全风险，如跨站请求伪造（CSRF）攻击。因此，在使用 Cookie 时需要采取一定的安全措施。
   - 因为每次 HTTP 请求都会携带 Cookie，所以频繁操作 Cookie 可能会影响性能。

   ```
   vue使用js-cookie库去操作cookie
   ```
2. **localStorage**：

   - localStorage 是 HTML5 引入的一种客户端存储技术，允许在用户的浏览器中存储较大量的数据（通常为 5-10MB，根据浏览器实现有所不同）。
   - localStorage 中存储的数据没有有效期，会一直保留，除非用户手动清除或者使用代码进行删除。
   - localStorage 只在客户端进行操作，不会与服务器进行通信。
   - localStorage 的数据存储在同一个域名下，不同域名之间的 localStorage 数据是隔离的。
3. **sessionStorage**：

   - sessionStorage 与 localStorage 非常相似，它们都是 HTML5 引入的客户端存储技术，具有相同的存储容量限制。
   - 与 localStorage 不同的是，sessionStorage 的数据仅在当前浏览器标签或窗口的生命周期内有效。当用户关闭标签或窗口时，sessionStorage 中的数据会被自动清除。
   - sessionStorage 同样只在客户端进行操作，不会与服务器进行通信。
   - sessionStorage 的数据同样存储在同一个域名下，不同域名之间的 sessionStorage 数据是隔离的。

总之，Cookie、localStorage 和 sessionStorage 都是客户端存储技术，但它们之间在数据有效期、存储容量和与服务器通信等方面有所不同。根据具体需求和场景，开发者可以选择合适的技术进行数据存储。

### 讲讲浏览器缓存

浏览器缓存是一种性能优化技术，通过将已请求的资源（如 HTML、CSS、JavaScript、图片等）存储在本地，以减少网络请求和数据传输。当用户再次访问相同的资源时，浏览器可以直接从缓存中获取，从而加快页面加载速度、降低服务器压力和减少网络流量消耗。

浏览器缓存主要分为以下几种类型：

1. **强缓存**： 强缓存是指浏览器在缓存期间内不会再向服务器发送任何请求，而是直接从本地缓存中获取资源。强缓存由以下两个 HTTP 响应头控制：
   - `Expires`：指定资源的过期时间。例如：`Expires: Wed, 21 Oct 2023 07:28:00 GMT`。但由于服务器时间和客户端时间可能存在差异，所以这个响应头不太准确。
   - `Cache-Control`：使用更现代且准确的方式控制缓存。例如：`Cache-Control: max-age=3600`，表示资源的缓存有效期为 3600 秒。其他可用的指令还包括 `no-cache`、`no-store`、`must-revalidate` 等。
2. **协商缓存**： 当强缓存失效后，浏览器会向服务器发送请求，以验证资源是否有更新。协商缓存通过以下 HTTP 响应头和请求头控制：
   - `Last-Modified` 和 `If-Modified-Since`：服务器返回资源时，通过 `Last-Modified` 响应头指定资源最后修改时间。浏览器下次请求时会通过 `If-Modified-Since` 请求头发送这个时间。服务器会比较这个时间和资源的实际修改时间，如果没有变化，则返回 `304 Not Modified` 状态码，浏览器将使用本地缓存；否则返回更新后的资源和新的 `Last-Modified` 时间。
   - `ETag` 和 `If-None-Match`：`ETag` 是服务器为资源生成的唯一标识（通常是哈希值）。浏览器下次请求时会通过 `If-None-Match` 请求头发送这个标识。服务器会比较这个标识和资源的当前 `ETag`，如果相同，则返回 `304 Not Modified` 状态码；否则返回更新后的资源和新的 `ETag`。
3. **其他缓存技术**： 除了上述浏览器缓存机制外，还有一些其他缓存技术，如 Service Workers、Memory Cache、IndexedDB 等。它们可以根据具体需求和场景进行灵活地缓存策略配置。

### 路由history和hash的区别？*

路由 history 和 hash 是前端路由（Single Page Application, SPA）中常用的两种模式。它们的主要区别在于实现方式和 URL 的展示形式。

1. **Hash 模式**：

   - Hash 模式基于浏览器 URL 中的哈希（`#`）部分进行路由切换。当哈希值改变时，浏览器不会向服务器发送请求，而是触发 `hashchange` 事件。前端路由库会监听这个事件，并根据哈希值变化来更新视图。

     ```
     //设置 url 的 hash，会在当前url后加上'#abc'
     window.location.hash='abc';
     let hash = window.location.hash //'#abc'
     // 监听 hashchange 事件
     window.addEventListener('hashchange', function() {
       var currentHash = window.location.hash;
     });
     ```
   - URL 示例：`https://example.com/#/page1`
   - Hash 模式兼容性较好，适用于旧版本浏览器。
   - SEO 友好性：由于 # 后面的内容不会被搜索引擎索引，因此对 SEO 不友好。
2. **History 模式**：

   - History 模式基于 HTML5 的 History API（如 `pushState`、`replaceState` 和 `popstate` 事件）实现。这些 API 允许在不重新加载页面的情况下，直接操作浏览器的历史记录和 URL。
   - ```
     // 添加新的历史记录
     history.pushState({ page: "page2" }, "Page 2", "page2.html");
     // 监听 popstate 事件
     window.addEventListener('popstate', function(event) {
       var state = event.state;
       console.log(state)
     });
     // 其他方法
     history.back();
     history.forward();
     history.go(1);//相当于history.forward()
     history.go(-1);//相当于history.back()
     history.go(0); // 刷新当前页面
     ```

     URL 示例：`https://example.com/page1`
   - History 模式需要服务器的配合，因为在用户直接访问某个路由（如 `https://example.com/page1`）时，如果服务器没有对应的配置，可能会返回 404 错误。为了解决这个问题，服务器需要设置一个通配符路由，将所有未匹配到的路由都重定向到单页应用的入口 HTML 文件。

   需要后端那边进行一个页面的重定向操作。

   用nginx

   ```
   server {
       listen 80;
       server_name yourdomain.com;

       root /path/to/your/dist; # 替换为你的项目构建输出目录

       location / {
           try_files $uri $uri/ /index.html;
       }

       # 可选：配置静态资源缓存
       location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
           expires max;
           add_header Cache-Control "public";
       }
   }
   ```

   总之，Hash 模式和 History 模式是前端路由中的两种实现方式，具有不同的 URL 展示形式和浏览器兼容性。在选择路由模式时，需要根据项目需求、用户体验和服务器配置等因素进行权衡。

### 谈一谈你对重排和重绘理解

在浏览器渲染过程中，重排（reflow）和重绘（repaint）是两个重要概念。它们是指浏览器在处理 DOM 元素样式和位置变化时所发生的操作。

**重排（Reflow）**： 重排，也称为回流，是指浏览器重新计算元素的布局、尺寸和位置等几何信息的过程。当 DOM 结构发生变化，或者元素的尺寸、位置、边距等样式发生改变时，浏览器需要重新计算这些元素的几何属性，并确定如何在页面上显示它们。重排可能会导致整个页面的重新布局，因此是一个性能敏感的过程。

触发重排的操作包括：

- 添加或删除 DOM 元素
- 修改元素尺寸（如宽度、高度、边距等）
- 修改元素位置（如浮动、定位等）
- 改变窗口大小
- 修改默认字体大小

  **响应式页面，窗口大小调整导致回流，该怎么办?**
- ```
  使用CSS3动画和过渡：使用CSS3动画和过渡代替JavaScript控制的动画效果。CSS3动画和过渡通常使用GPU加速，对页面的回流影响较小。

  使用节流（throttling）和防抖（debouncing）：在处理窗口调整事件时，可以使用节流和防抖的技术来限制事件的触发频率，减少回流的次数。节流和防抖可以通过函数库或自定义实现。

  缓存DOM查询结果：频繁的DOM查询也会导致回流。为了减少回流，可以缓存DOM查询结果，避免重复查询。

  使用transform属性：对于需要改变元素位置或大小的情况，可以使用transform属性来实现。transform属性不会触发布局（layout）回流，因此可以减少回流的发生。

  避免强制同步布局：在JavaScript代码中，避免频繁地读取布局属性（例如offsetTop和offsetWidth）或执行强制同步布局的操作。这些操作会导致浏览器强制进行回流。

  分离读和写操作：在JavaScript代码中，尽量将读取和写入操作分离开来。先执行所有的读取操作，然后再执行写入操作，这样可以减少回流的次数。

  使用虚拟化技术：对于需要显示大量数据的列表或表格，可以考虑使用虚拟化技术，只渲染当前可见的部分，而不是全部渲染。这可以减少页面回流的开销。

  优化CSS布局：合理设计CSS布局，避免使用影响性能的布局方式，例如使用table布局或频繁的浮动布局。

  使用requestAnimationFrame：对于需要执行动画效果的情况，可以使用requestAnimationFrame来触发动画更新，这样可以与浏览器的刷新频率同步，减少回流的发生。
  ```

**重绘（Repaint）**： 重绘是指浏览器重新绘制 DOM 元素的过程，但不涉及元素的几何属性计算。当元素的外观样式（如**颜色、背景、边框**等）发生变化时，浏览器需要重新绘制这些元素，以反映样式的变化。相较于重排，重绘的**性能开销**较小。

触发重绘的操作包括：

- 修改元素颜色、背景等视觉样式
- 元素的几何属性发生变化，触发重排（重排会导致重绘）

为了提高页面渲染性能，我们应尽量减少重排和重绘的发生。一些优化措施包括：

- 避免频繁修改 DOM 结构和样式，可以将修改操作合并后一次性执行
- 使用 `requestAnimationFrame` 或者 `setTimeout` 函数进行样式更新的节流
- 对于不可见或者离屏的元素，可以先将它们移除或隐藏，然后在内存中进行样式修改，最后再重新插入或显示
- 使用 CSS3 动画替代 JavaScript 动画，以利用 GPU 加速
- 使用虚拟 DOM 技术（如 React、Vue 等框架），避免不必要的 DOM 更新

### 谈一谈跨域，同源策略，以及跨域解决方案

**同源策略**： 同源策略是一种安全机制，用于限制文档或脚本从不同来源的数据进行交互。当两个资源具有相同的协议（如 http 或 https）、域名和端口时，它们被认为是同源的。同源策略限制了从一个源加载的网页脚本与来自另一个源的资源进行交互的能力，以防止恶意行为，如跨站脚本攻击（XSS）或数据窃取。

**跨域**： 跨域是指当一个资源试图访问来自不同源的另一个资源时，由于同源策略的限制而无法进行的情况。例如，一个从 `http://example-a.com` 加载的网页试图通过 AJAX 请求 `http://example-b.com` 上的数据，这就是一个跨域请求。

**跨域解决方案**： 有多种方法可以绕过同源策略的限制，实现跨域请求。以下是一些常见的跨域解决方案：

1. **CORS（跨域资源共享）**： CORS 是一种官方推荐的跨域解决方案。它允许服务器通过设置响应头（如 `Access-Control-Allow-Origin`）来放宽对跨域请求的限制。浏览器将根据这些响应头决定是否允许跨域请求。
2. **JSONP（JSON with Padding）**： JSONP 利用了 `<script>` 标签的 src 属性不受同源策略限制的特性。它通过动态创建一个 `<script>` 标签，并将回调函数作为参数传递给服务器。服务器将请求数据包装在回调函数中，并将其作为响应返回。客户端脚本收到响应后，会立即执行回调函数以获取数据。
3. **使用代理服务器**： 可以通过代理服务器将跨域请求转发到目标服务器。这样，客户端与代理服务器之间的请求就是同源的，而代理服务器与目标服务器之间的请求则由代理服务器完成。常见的代理服务器实现方式有 **Nginx 反向代理、Node.js 中间件代理**等。
4. **使用 iframe 和 postMessage**： 可以使用 iframe 加载跨域页面，然后通过 `window.postMessage` 方法在不同源的窗口之间传递消息。这种方法需要跨域页面的配合，以便在接收到消息时执行相应操作。
5. **使用 WebSockets**： WebSockets 可以实现跨域通信，因为它们不受同源策略限制。通过建立一个 WebSocket 连接，客户端和服务器可以进行双向通信，实现跨域数据交换。
6. **使用 CORS 代理**： 如果目标服务器没有实现 CORS，而你又不想在自己的服务器上设置反向代理，可以使用第三方 CORS 代理服务。这些服务在请求目标服务器时为你添加 CORS 响应头，从而使浏览器允许跨域请求。但请注意，这可能会带来安全风险，因此不建议在生产环境中使用。
7. **使用 document.domain**： 当两个具有相同根域名但子域名不同的页面需要进行跨域通信时，可以将它们的 `document.domain` 设置为相同的值。这样，它们将被视为同源，可以进行通信。但此方法仅适用于具有相同根域名的情况。
8. **使用 window.name**： 可以利用 `window.name` 在同源和跨域的窗口之间传递数据。`window.name` 属性在窗口跳转时会保留其值，因此可以将数据存储在 `window.name` 中，然后通过跳转到同源页面来读取数据。但这种方法受到一些限制，只能传递字符串数据，且安全性和可靠性相对较低。

每种跨域解决方案都有其优缺点，需要根据实际场景和需求选择合适的方法。现代 Web 开发中，CORS 是最常用且推荐的解决方案。但在某些特殊场景或者兼容旧版浏览器时，可能需要考虑其他方案。在实现跨域时，始终要关注安全性和数据保护，确保不会引入安全漏洞。

### 前端如何进行seo优化

前端在进行搜索引擎优化（SEO）时，可以从以下几个方面进行优化：

1. **合理的标题、描述和关键词**： 确保每个页面都有独特且描述准确的`<title>`标签和`<meta name="description">`标签。这有助于搜索引擎理解页面内容，同时也为用户在搜索结果中显示更具吸引力的信息。
2. **语义化的 HTML 结构**： 使用语义化的 HTML 标签，如`<header>`、`<footer>`、`<nav>`、`<section>`、`<article>`等，以帮助搜索引擎更好地理解页面结构和内容。
3. **良好的页面结构**： 确保页面具有清晰的层次结构和导航，这有助于搜索引擎爬虫更容易地抓取和索引页面内容。
4. **优化 URL 结构**： 使用简洁且描述性的 URL，避免过长或包含不必要的参数。这有助于搜索引擎理解页面内容，并提高用户体验。
5. **使用 header 标签**： 使用`<h1>`至`<h6>`等 header 标签来组织页面内容，确保每个页面只有一个`<h1>`标签。这有助于搜索引擎理解页面的主题和重要性。
6. **图片优化**： 为所有图片添加`alt`属性，以便搜索引擎了解图片内容。同时，优化图片大小和格式，以提高页面加载速度。
7. **内部链接和锚文本**： 合理地使用内部链接和有意义的锚文本，以帮助搜索引擎更好地理解站点结构和内容之间的关联。
8. **响应式设计**： 确保网站适应不同设备和屏幕尺寸，提供良好的用户体验。搜索引擎倾向于对移动友好的网站给予更高的排名。
9. **网站速度优化**： 提高网站加载速度，减少页面渲染时间。这包括压缩资源、合并文件、优化图片、使用浏览器缓存等。搜索引擎会考虑网站速度作为排名的因素之一。
10. **遵循 W3C 标准**： 确保代码符合 W3C 标准，减少 HTML、CSS 和 JavaScript 的错误。这有助于搜索引擎更容易地抓取和解析页面内容。
11. **生成 XML Sitemap**： 为网站创建一个 XML Sitemap，并提交给搜索引擎。这有助于搜索引擎更有效地抓取和索引网站内容。
12. **使用结构化数据**： 使用结构化数据（如 Schema.org、JSON-LD、Microdata 等）来标注页面内容，有助于搜索引擎更准确地理解页面信息，并可能在搜索结果中显示为富文本摘要，提高点击率。
13. **使用 robots.txt 控制爬虫访问**： 合理设置 robots.txt 文件，指定搜索引擎爬虫可以访问和抓取的页面，避免爬虫抓取不相关或低质量的页面。
14. **优化站内搜索**： 提供高效、准确的站内搜索功能，有助于提高用户体验和用户停留时间，间接影响搜索排名。
15. **社交媒体整合**： 将网站内容与社交媒体平台整合，提高内容的曝光度和分享率，增加外部链接，有助于提高搜索排名。
16. **网站安全**： 使用 HTTPS 加密，保护用户数据和隐私。搜索引擎会将安全性作为排名因素之一。

总之，前端在进行 SEO 优化时，要关注页面结构、内容、用户体验和技术实现等多个方面。通过提高页面质量、提升用户体验和遵循搜索引擎的最佳实践，有助于提高网站在搜索结果中的排名和可见度。

### requestAnimationFrame与requestIdleCallback区别

`requestAnimationFrame`和`requestIdleCallback`都是浏览器提供的用于优化JavaScript任务调度的API。它们之间的主要区别在于它们的使用场景和触发时机。

1. **requestAnimationFrame**：

`requestAnimationFrame`主要用于优化浏览器的动画渲染。它允许你在浏览器即将进行下一次重绘之前安排一个回调函数执行。这意味着，回调函数将在最佳的时间点执行，从而提高动画的性能和流畅度。

`requestAnimationFrame`的优点包括：

- 与浏览器的刷新率同步，避免动画卡顿或丢帧现象。
- 当页面不可见或最小化时，浏览器会暂停执行`requestAnimationFrame`回调，从而减少CPU和GPU的使用，节省资源。

典型的`requestAnimationFrame`用法如下：

```js
function animate() {
  // 执行动画操作
  ...
  // 在下一次重绘之前请求执行动画
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

1. **requestIdleCallback**：

`requestIdleCallback`用于优化非关键性任务的执行，例如代码分析、日志报告、数据存储等。当浏览器空闲时，`requestIdleCallback`会触发回调函数执行，从而避免阻塞关键任务，如渲染、动画和用户交互。

`requestIdleCallback`的优点包括：

- 利用浏览器的空闲时间执行低优先级任务，避免干扰关键任务。
- 可以设置超时时间，确保在指定时间内完成任务。

典型的`requestIdleCallback`用法如下：

```js
function performNonCriticalTask(deadline) {
  while (deadline.timeRemaining() > 0) {
    // 执行非关键任务
    ...
  }

  // 如果还有未完成的任务，继续请求空闲回调
  requestIdleCallback(performNonCriticalTask);
}

requestIdleCallback(performNonCriticalTask);
```

总之，`requestAnimationFrame`和`requestIdleCallback`分别用于优化动画渲染和非关键性任务的执行。`requestAnimationFrame`在每次浏览器重绘之前执行回调，以实现高性能的动画效果；`requestIdleCallback`则在浏览器空闲时执行回调，避免影响关键任务。

### SSR的实现原理？

服务器端渲染（Server Side Rendering，简称 SSR）是一种 web 应用的渲染方式，其实现原理是在服务器端将页面内容渲染为 HTML 字符串，然后将这些字符串发送到客户端，客户端接收到 HTML 后直接显示，无需等待 JavaScript 的解析、执行和渲染。

SSR 的核心实现原理可以概括为以下几个步骤：

1. **请求处理**：客户端发起请求时，请求首先到达服务器。
2. **服务器渲染**：服务器接收到请求后，根据路由和数据，将对应的页面内容渲染为 HTML 字符串。这一步通常涉及到模板引擎或服务器端 JavaScript 框架的使用，例如 React 的 `ReactDOMServer.renderToString()` 和 Vue 的 `vue-server-renderer`。
3. **数据注入**：在渲染过程中，服务器还需要获取所需的数据，将其注入到 HTML 中。这可以通过内联脚本、JSON 格式或其他方式实现。数据注入的目的是在客户端 JavaScript 代码运行时能够获取到服务器端已经准备好的数据，避免重复请求。
4. **生成完整 HTML**：将渲染好的 HTML 字符串插入到 HTML 模板中，形成一个完整的 HTML 页面。这个页面包含了已经渲染好的内容以及必要的 JavaScript、CSS 等资源引用。
5. **发送响应**：服务器将完整的 HTML 页面作为响应发送给客户端。客户端接收到响应后，直接将 HTML 页面展示给用户。
6. **客户端接管**：在客户端，浏览器会解析和执行 JavaScript 代码，接管页面的交互和操作。这一步通常被称为 "hydration" 或 "激活"，因为客户端 JavaScript 代码需要 "激活" 服务器端渲染的静态 HTML，使其具有动态功能。

通过 SSR，用户可以更快地看到页面的内容，因为无需等待客户端的 JavaScript 代码下载、解析、执行和渲染。此外，由于搜索引擎爬虫能够更好地解析服务器端渲染的 HTML，因此 SSR 对 SEO 也有一定的优势。然而，SSR 也会增加服务器的负担，因为服务器需要负责渲染页面。在实际应用中，可以根据项目需求和性能要求，选择合适的渲染方式。

### 讲讲你对PWA的理解

PWA（Progressive Web App，渐进式 web 应用）是一种将现代 web 技术与传统移动应用功能结合的应用开发模式。PWA 旨在通过提供原生应用的类似体验，改进 web 应用的可用性、性能和用户体验。PWA 的核心技术包括 Service Workers、Web App Manifest 和离线缓存等。

PWA 的主要特点如下：

1. **可靠性**：通过 Service Workers 和离线缓存技术，PWA 可以在无网络或网络不稳定的环境下运行。用户在访问 PWA 时，即使断网，也能看到离线内容或自定义的离线提示页面。
2. **快速**：PWA 通过预缓存关键资源和优化加载策略，提高了应用的加载速度和运行性能。在访问 PWA 时，用户可以更快地看到页面内容，并感受到流畅的交互体验。
3. **可安装**：通过 Web App Manifest，PWA 可以被添加到用户的设备主屏幕，并以独立窗口运行，类似于原生应用。用户可以直接从主屏幕启动 PWA，而无需通过浏览器。
4. **跨平台**：PWA 基于 web 技术，因此可以在不同的操作系统和设备上运行，包括桌面和移动设备。这意味着，开发者只需维护一套代码，就能为多个平台提供类似的应用体验。
5. **更新简便**：PWA 无需通过应用商店发布和更新。当用户访问 PWA 时，应用会自动检查并应用更新。这样，用户总是能获取到最新的应用版本，而开发者也能更轻松地发布和管理更新。
6. **安全**：PWA 需要通过 HTTPS 运行，确保数据传输的安全性。同时，由于 Service Workers 可以拦截和处理请求，PWA 还可以实现更丰富的安全策略和功能，如请求过滤、内容安全策略（CSP）等。
7. **可搜索**：PWA 作为 web 应用，可以被搜索引擎抓取和索引。这意味着，PWA 可以获得更好的搜索引擎优化（SEO），提高应用的可见度和用户获取途径。

总之，PWA 是一种充分利用现代 web 技术，为用户提供原生应用般体验的 web 应用开发模式。通过 PWA，开发者可以实现更可靠、快速、可安装和跨平台的应用，提升用户体验和满意度。

### 谈谈浏览器的离线缓存与本地缓存的区别

浏览器的离线缓存和本地缓存都是用于在用户设备上存储数据以提高网页性能的技术，但它们的实现方式和使用场景略有不同。下面是它们之间的一些主要区别：

1. 目的：

离线缓存：主要用于在用户离线时仍然可以访问网页。它可以在没有网络连接的情况下提供基本的功能，如查看已缓存页面的内容。

本地缓存：主要用于减少网络延迟，提高加载速度。通过在用户设备上缓存常用资源，如图片、脚本、样式等，可以在用户再次访问网站时直接从缓存中读取，降低服务器负担和提高用户体验。

2. 存储类型：

**离线缓存**：使用HTML5的**Application Cache（AppCache）**和Service Worker技术实现。这些技术允许开发者为用户设备创建一个离线版本的网页，包括HTML、CSS、JavaScript等资源。

**本地缓存**：使用浏览器提供的缓存策略和存储机制实现，如HTTP缓存、Cookie、Web Storage（包括localStorage和sessionStorage）和IndexedDB等。

3. 生命周期：

离线缓存：由开发者通过AppCache或Service Worker配置文件控制，包括缓存资源的更新和过期策略。

本地缓存：由浏览器或服务器通过HTTP头部字段（如**Cache-Control、Expires**等）控制，或通过脚本（如localStorage和IndexedDB）设置的存储时间限制。

4. 适用场景：

离线缓存：适用于需要在无网络环境下访问的网页，例如离线阅读应用、PWA（Progressive Web Apps）等。

本地缓存：适用于任何需要提高网站性能和加载速度的场景，减少不必要的网络请求。

总之，离线缓存和本地缓存都是为了优化网页性能，它们各自针对不同的使用场景。离线缓存主要是为了在没有网络连接时继续访问网页，而本地缓存则是为了提高网页加载速度和降低服务器负担。

### 谈谈你对Shadow DOM的理解

Shadow DOM 是 Web Components 规范的一个重要组成部分，它提供了一种将 HTML、CSS 和 JavaScript 封装在独立、隔离的 DOM 结构中的方法，从而实现组件的样式和行为的封装。Shadow DOM 解决了全局样式污染的问题，使得开发者可以创建具有独立样式和逻辑的可重用组件。

Shadow DOM 的关键特点如下：

1. **封装**：Shadow DOM 允许将一组 DOM 元素和相关样式封装在一个独立的、隔离的 DOM 树中。这样，组件的样式不会影响到主文档，同样主文档的样式也不会影响到组件。通过这种封装，组件可以在不同的应用中重用，而无需担心样式污染和冲突。
2. **隔离**：Shadow DOM 的树结构是隔离的，意味着组件内的 DOM 元素和 JavaScript 逻辑与主文档是分开的。这有助于保护组件内的数据和方法，避免被外部访问和修改。
3. **附件阴影树**：通过 `attachShadow` 方法，可以在一个普通的 DOM 元素上创建一个 Shadow DOM。这个普通元素被称为 "Shadow Host"，而创建的 Shadow DOM 被称为 "Shadow Tree"。Shadow Tree 与主文档的 DOM 树是并列的，互不干扰。
4. **插槽（Slot）**：Shadow DOM 支持使用 `<slot>` 元素来分发（或投影）主文档中的内容。这使得组件可以定义可自定义的内容区域，让使用者在引入组件时提供所需的内容。
5. **样式隔离**：组件内的 CSS 样式只对 Shadow Tree 中的元素生效，不会影响到主文档。同时，主文档的 CSS 样式（除了 CSS 变量）也不会影响到组件。这样，组件的样式能够完全独立，避免了全局样式污染。

总之，Shadow DOM 提供了一种在 Web 开发中实现组件封装和样式隔离的机制。通过使用 Shadow DOM，开发者可以创建具有独立样式和行为的可重用组件，简化开发过程，提高组件的可维护性。

### 谈谈你对微前端的理解？

微前端（Micro Frontends）是一种架构模式，它的主要目标是将单一的，通常较大的前端应用程序（如单页面应用）拆分为多个较小的、独立的部分。这些独立的部分通常被称为"微应用"（micro apps）。

微前端的主要理念来源于微服务架构，后者在后端开发中已经变得非常流行。与微服务一样，微前端也强调团队的独立性和技术栈的多样性。每个微应用可以由不同的团队使用不同的技术栈来开发，然后再集成到一个统一的用户界面中。

以下是我对微前端的一些理解：

1. **解耦**：微前端的一个关键优点是解耦。每个微应用都是独立的，有自己的代码库、构建流程、开发团队和生命周期。这可以使每个团队更专注于自己的部分，降低开发复杂性，提高开发速度。
2. **技术栈无关**：每个微应用可以选择适合自己需求的技术栈，不必受限于整个应用的技术选择。这使得前端开发可以跟上技术的发展，逐步引入新的技术和工具，而无需进行大规模的重构。
3. **并行开发**：由于每个微应用都是独立的，所以可以并行开发，提高开发效率。也可以更灵活地调整开发资源和计划，因为每个团队的工作不会直接影响到其他团队。
4. **独立部署**：每个微应用可以独立部署，不需要重新部署整个应用。这可以大大减少部署带来的风险，并且可以更快地将新功能和修复推送到用户那里。

但是，微前端也不是没有挑战的。例如，微应用间的通信和协调、整体用户体验的一致性、性能问题（比如加载时间和资源占用）等，都需要在实施微前端架构时仔细考虑。

总的来说，我认为微前端是一个有前景的架构模式，它在前端开发中引入了微服务的思想，有助于解决大型、复杂的前端应用开发和维护的问题。但是，它也需要对前端架构和工程化有深入的理解，才能有效地实施和管理。

### 讲讲浏览器的进程和线程

浏览器的**进程和线程**是浏览器实现其功能的基础。它们之间的关系和任务分工对于理解浏览器的运行原理和性能优化至关重要。简单来说，**进程是操作系统资源分配的最小单位**，而线程是操作系统调度（CPU 利用率）的最小单位。

**进程**：

进程是一个运行中的程序实例，它包含程序所需的所有资源。一个进程拥有独立的内存空间、全局变量、打开的文件和设备等。浏览器中的进程主要有以下几类：

1. **浏览器主进程**：负责协调浏览器的各个模块，包括用户界面、地址栏、书签栏等。它还负责管理浏览器的各个标签页进程和插件进程。
2. **渲染进程**：负责将网页内容渲染到屏幕上。每个标签页通常对应一个渲染进程（在某些情况下，标签页可能会共享一个渲染进程）。渲染进程包括 HTML、CSS 和 JavaScript 的解析、布局、渲染以及执行等任务。
3. **插件进程**：负责运行和管理浏览器插件（如 Flash）。
4. **网络进程**：负责处理网络请求，包括资源的下载、上传和缓存。

**线程**：

线程是进程中的一个执行单元，它共享进程的资源，如内存空间和文件句柄。一个进程可以有多个线程，这些线程可以并发执行任务。在浏览器中，有以下几种主要的线程：

1. **主线程**：渲染进程的主要执行线程，负责解析和执行 JavaScript 代码、处理 DOM 事件、执行 CSS 动画等任务。主线程是单线程的，这意味着 JavaScript 的执行和页面渲染任务需要排队执行。
2. **Web Workers**：一种可以在后台运行 JavaScript 代码的线程，它与主线程独立，不会阻塞主线程。Web Workers 可以用于执行耗时的计算任务，避免影响页面渲染。
3. **Service Workers**：用于实现离线缓存、消息推送、后台同步等功能的独立线程。Service Workers 与 Web Workers 类似，但具有更多的 API 和能力。
4. **渲染线程**：负责将解析好的 HTML、CSS 和图像资源绘制到屏幕上。渲染线程与主线程是分离的，这意味着页面的渲染和 JavaScript 的执行是并行进行的。
5. **合成线程**：负责处理页面的合成和分层。当浏览器检测到可以使用 GPU 加速的动画时，合成线程会将这些动画分离出来并在 GPU 上独立运行。这可以避免主线程的阻塞，提高页面的性能。
6. **网络线程**：负责处理 HTTP 请求和响应，以及与服务器之间的通信。网络线程与主线程独立，以避免网络请求导致的阻塞。
7. **定时器线程**：负责处理 JavaScript 中的定时器任务（如 `setTimeout` 和 `setInterval`）。这些任务会在定时器线程上排队执行，然后在指定的时间后将回调函数推送到主线程的任务队列中。
8. **解析线程**：负责解析 HTML 和 CSS。解析线程会将解析后的 DOM 树和 CSSOM 树合并为渲染树，并传递给渲染线程进行绘制。在某些情况下，解析线程和主线程可能会合并为一个线程，这取决于浏览器的具体实现。
9. **文件线程**：负责处理与文件系统的交互，如读取和写入操作。这些操作在文件线程上执行，避免阻塞主线程。

以上就是浏览器中的一些主要进程和线程。需要注意的是，不同浏览器的实现可能会有所不同，但它们的基本原理和任务分工是类似的。理解这些进程和线程之间的关系有助于我们更好地理解浏览器的运行原理，从而优化前端性能。

### html解析过程

HTML（超文本标记语言）是用于构建和呈现网页内容的标准标记语言。浏览器解析HTML的过程包括以下几个步骤：

1. 获取HTML文档：浏览器首先向服务器发送请求，获取HTML文档。服务器响应请求并返回HTML文件，通常是一个以`.html`或`.htm`为扩展名的文件。
2. 词法分析：浏览器开始对HTML文档进行词法分析，将其分解成各种符号（tokens），例如标签、属性和文本内容。词法分析的结果是一系列token，这些token有助于构建DOM树。
3. 构建DOM树：浏览器将词法分析得到的tokens用于构建DOM（文档对象模型）树。DOM树是一种表示HTML文档结构的树形数据结构，其中每个节点代表页面上的一个元素、属性或文本内容。
4. 解析CSS：浏览器会解析与HTML文档关联的CSS样式表，包括内联样式、内部样式和外部样式。解析CSS样式后，浏览器会生成CSSOM（CSS对象模型）树，这是一种表示CSS样式的树形结构。
5. 构建渲染树：浏览器将DOM树和CSSOM树合并，生成渲染树。渲染树包含了页面上可见的所有元素及其样式信息。隐藏元素（如`display: none;`）不会包含在渲染树中。
6. 布局（Layout）：根据渲染树，浏览器计算每个元素在页面上的准确位置和大小。这个过程也被称为重排（reflow）。
7. 绘制（Painting）：布局完成后，浏览器开始将元素绘制到屏幕上。这个过程包括绘制文本、颜色、图片、边框等视觉效果。
8. 合成（Compositing）：在某些情况下，浏览器会将页面分成多个层进行绘制。最后，这些层会按照特定顺序合成为最终的页面视图。

在整个解析过程中，浏览器可能还需要处理JavaScript代码。JavaScript可以通过修改DOM树、CSSOM树和触发事件等方式影响页面的呈现。

### 说一说从输入URL到页面呈现发生了什么？*

从输入 URL 到页面呈现，经历了以下几个主要步骤：

1. **地址解析**：浏览器首先解析输入的 URL，提取协议、域名、端口和路径等信息。
2. **DNS 查询**：浏览器通过 DNS 查询将域名解析为 IP 地址。如果浏览器或操作系统缓存中已有相应的 DNS 记录，将直接使用缓存的结果；否则，浏览器将发送请求到 DNS 服务器进行查询。
3. **建立 TCP 连接**：浏览器与目标服务器建立 TCP 连接，进行三次握手。这一步确保了数据传输的可靠性。
4. **发送 HTTP 请求**：浏览器构建 HTTP 请求报文，包含请求头（如 User-Agent、Accept 等）和请求体（如 POST 提交的表单数据），然后通过建立的 TCP 连接将请求报文发送给服务器。
5. **服务器响应**：服务器收到请求后，处理请求并生成响应报文，包含响应头（如 Content-Type、Content-Length 等）和响应体（如请求的 HTML 文件）。服务器通过 TCP 连接将响应报文发送回浏览器。
6. **浏览器接收响应**：浏览器接收并解析响应报文，提取状态码、响应头和响应体等信息。
7. **解析 HTML**：浏览器开始解析 HTML 文档，构建 DOM 树。遇到外部资源（如 CSS、JavaScript、图片等），浏览器会发起额外的请求获取这些资源。
8. **解析 CSS**：浏览器解析 CSS 文件，构建 CSSOM 树。CSSOM 树和 DOM 树会被合并为渲染树。
9. **执行 JavaScript**：浏览器解析并执行 JavaScript 代码。注意，JavaScript 的执行可能会修改 DOM 树和 CSSOM 树，从而影响渲染树的构建。
10. **构建渲染树**：浏览器将 DOM 树和 CSSOM 树合并为渲染树，包含每个可见元素的布局信息。
11. **布局**：浏览器根据渲染树计算每个元素的准确位置和大小，确定页面的布局。
12. **绘制**：浏览器遍历渲染树，将每个元素绘制到屏幕上。
13. **合成**：在某些情况下，浏览器会将页面分成多个层进行绘制。最后，这些层会按照特定顺序合成为最终的页面视图。
14. **页面呈现**：浏览器将渲染好的页面呈现给用户。

总之，从输入 URL 到页面呈现，浏览器经历了一系列复杂的过程。理解这些过程有助于我们优化前端性能，提高用户体验。

### 当前的前端渲染方式有哪些，谈谈你对它们的理解，并说说它们的优缺点是什么？

当前主要的前端渲染方式有三种：服务器端渲染（SSR）、客户端渲染（CSR）和预渲染（Prerendering）。下面分别阐述这三种渲染方式的特点及优缺点：

1. **服务器端渲染（SSR）**：

   服务器端渲染指的是在服务器上将网页的 HTML、CSS 和 JavaScript 渲染成完整的 HTML 页面，然后将渲染后的页面发送给客户端。客户端接收到页面后直接展示，无需执行额外的 JavaScript。

   - 优点：
     1. 有利于 SEO，因为搜索引擎可以直接爬取完整的 HTML 页面。
     2. 首屏加载速度较快，因为用户无需等待 JavaScript 执行完毕就能看到页面内容。
   - 缺点：
     1. 服务器端压力较大，因为每次请求都需要服务器进行页面渲染。
     2. 用户交互复杂度受限，因为每次交互都可能需要重新渲染页面。
2. **客户端渲染（CSR）**：

   客户端渲染指的是将 HTML、CSS 和 JavaScript 发送给客户端，然后在客户端执行 JavaScript 来生成页面内容。这种方式在现代前端框架（如 React、Vue 和 Angular）中非常常见。

   - 优点：
     1. 服务器压力较小，因为页面渲染工作由客户端完成。
     2. 用户交互体验较好，因为客户端可以实现动态的、无需刷新页面的交互。
   - 缺点：
     1. 首屏加载速度较慢，因为客户端需要等待 JavaScript 执行完毕才能看到页面内容。
     2. 不利于 SEO，因为搜索引擎在爬取页面时可能无法执行 JavaScript。
3. **预渲染（Prerendering）**：

   预渲染是在构建过程中生成静态 HTML 文件，然后将这些静态文件部署到服务器。当用户请求页面时，服务器直接返回对应的静态 HTML 文件。这种方法适用于内容不经常变动的网站。

   - 优点：
     1. 首屏加载速度较快，因为用户无需等待 JavaScript 执行完毕就能看到页面内容。
     2. 有利于 SEO，因为搜索引擎可以直接爬取静态 HTML 页面。
     3. 服务器压力较小，因为页面在构建过程中已经渲染完成。
   - 缺点：
     1. 构建过程可能较慢，尤其是对于大型网站。
     2. 如果网站内容经常变动，需要频繁地重新构建和部署页面。

总结：

每种渲染方式都有其优缺点，具体选择哪种方式要根据实际项目需求进行权衡。以下是一些建议：

- 如果 SEO 对项目至关重要，而且项目内容相对稳定，则可以考虑使用预渲染或服务器端渲染。
- 如果项目需要提供丰富的用户交互体验，可以考虑使用客户端渲染，这样能够充分利用现代前端框架的优势。
- 如果项目的内容动态性较强，可以考虑使用服务器端渲染或客户端渲染。但对于客户端渲染，可能需要考虑使用服务端渲染的同构应用或者采用一些服务器端渲染辅助的技术（如 prerender.io）来提高 SEO 效果。
- 对于首屏加载速度有较高要求的项目，可以考虑使用服务器端渲染或预渲染。

实际项目中，可以根据需求灵活地将不同渲染方式结合使用，以达到最佳的性能和用户体验。例如，可以在服务器端渲染首屏内容以提高首屏加载速度，然后在客户端渲染后续的页面内容以提供更好的交互体验。

### 谈谈你对Web Workers的理解

Web Workers 在浏览器中提供了一个单独的、并行的执行环境，可以运行长时间运行的脚本而不会阻塞 UI 线程。然而，这个执行环境与主 JavaScript 执行环境相比有一些限制。以下是主要的一些限制：

1. 无法访问 DOM：Web Workers 运行在隔离的线程中，不能直接访问网页的 DOM。任何与 UI 相关的操作都需要通过主线程完成。
2. 无法访问全局对象：Web Workers 不能访问许多全局对象，如 `window` 对象，因为这些对象与 UI 相关或者包含与 UI 相关的功能。
3. 无法访问某些 Web API：像 navigator.geolocation 或者 window.localStorage 这样的 Web API 无法在 Web Workers 中使用。
4. 无法加载其他脚本：Web Workers 无法使用 `<script>` 标签加载其他脚本。但是，可以使用 `importScripts()` 函数来导入其他脚本。
5. 数据传递限制：Web Workers 通过消息传递与主线程通信。这意味着所有的数据在传送时都需要被序列化和反序列化，这可能会对性能产生影响。
6. 运行环境的限制：Web Workers 运行在不同的全局上下文中，即 `DedicatedWorkerGlobalScope`，而不是主线程的 `window`。因此，一些预期在 `window` 上下文中使用的代码在 Web Worker 中可能无法正常工作。

总的来说，Web Workers 是设计用于执行计算密集型或者长时间运行的任务，而非操作 UI 或者处理与 UI 相关的逻辑。对于需要与 UI 交互的操作，仍然需要在主线程中完成。

### 聊聊js的垃圾回收？

**标记-清除算法**（Mark and Sweep）：这是JavaScript主要使用的垃圾回收算法之一。它通过标记不再需要使用的对象，然后将其从内存中清除。垃圾回收器会从一个称为"根"的起始点开始遍历对象图，并标记所有可达的对象，然后清除未被标记的对象。

**引用计数**：引用计数是一种简单的垃圾回收技术，它基于对象的引用计数来确定何时回收对象。每个对象都有一个引用计数，当引用计数为0时，表示对象不再被引用，可以进行回收。然而，引用计数算法无法解决循环引用的问题，即两个或多个对象互相引用，但无法被外部访问到，导致引用计数无法归零。

内存泄漏：内存泄漏是指应用程序中的对象仍然被保留在内存中，但不再需要。这些对象无法被垃圾回收器回收，导致内存占用不断增加，最终可能引发性能问题或崩溃。常见的内存泄漏情况包括未释放的事件监听器、未清理的定时器、循环引用等。

垃圾回收触发时机：具体的垃圾回收触发时机因浏览器和JavaScript引擎的不同而异。通常情况下，垃圾回收器会在内存达到一定阈值时自动触发，以及在空闲时间执行一些增量回收操作，以避免过长的停顿时间。

性能优化：虽然现代的JavaScript引擎在垃圾回收方面已经非常高效，但在编写JavaScript代码时，仍然可以采取一些措施来优化内存使用和垃圾回收的性能。例如，避免创建不必要的临时对象、显式释放不再需要的资源（如事件监听器、定时器等）、避免循环引用等。

### 如何优化和减少垃圾回收的影响，从而提高应用性能？

以下是一些建议和技巧来帮助优化和减少垃圾回收的影响：

1. **避免全局变量**：全局变量不会被垃圾回收，除非它们被设置为 `null`。只有在确实需要时才应该使用它们。
2. **使用对象池**：对于频繁创建和销毁的对象（如在游戏或高性能应用中的实体），使用对象池可以重用对象而不是每次都创建新的对象。这可以避免频繁的垃圾回收。
3. **小心闭包**：闭包可能会导致意外的引用，从而阻止对象被垃圾回收。确保你只在需要时使用闭包，并在不再需要它们时断开引用。
4. **手动释放大对象**：对于大的数据结构或数组，如果你知道它们不再需要，可以手动将它们设置为 `null`，从而提前提示垃圾回收器。
5. **避免循环引用**：确保对象之间没有循环引用，因为这可能导致它们无法被垃圾回收。
6. **使用弱引用**：在合适的场景下，使用 `WeakMap` 或 `WeakSet` 可以让你存储对对象的引用，而不会阻止这些对象被垃圾回收。
7. **优化事件监听器**：确保及时删除不再需要的事件监听器。未删除的事件监听器可能会导致内存泄漏。
8. **减少内存分配**：减少动态创建对象、数组和闭包的频率可以帮助减少需要回收的垃圾量。
9. **使用浏览器开发者工具**：浏览器提供的开发者工具（如 Chrome DevTools）可以帮助你监测和诊断内存使用情况和潜在的泄漏。
10. **考虑使用 WebAssembly**：对于需要高性能和低延迟的应用，使用 WebAssembly 可能会帮助减少 JavaScript 的垃圾回收的影响，因为 WebAssembly 有自己的内存管理模型。

<hr />

## 计算机网络

### 常见的状态码？*

1. **200 OK**：表示请求成功，服务器已成功处理请求。
2. **204 No Content**：表示请求成功，但服务器未返回任何内容。
3. 3开头是重定向
4. **400 Bad Request**：表示客户端发送的请求存在语法错误或无法被服务器理解。
5. **401 Unauthorized**：表示请求需要用户认证或权限验证，客户端需要提供有效的凭据。
6. **403 Forbidden**：表示服务器理解请求，但**拒绝执行请求**。通常是因为权限不足。
7. **404 Not Found**：表示请求的资源未找到。
8. **405 Method Not Allowed**：表示请求中使用的 HTTP 方法不被允许。
9. **408 Request Timeout**：表示服务器在等待请求时发生超时。
10. **422 Unprocessable Entity** 请求的实体数据存在问题，例如数据的格式不正确或缺少必要的字段
11. **429 Too Many Requests**：表示客户端发送的请求过多，服务器拒绝处理请求。
12. **500 Internal Server Error**：表示服务器内部错误，无法完成请求。
13. **503 Service Unavailable**：表示服务器暂时无法处理请求，通常是因为服务器过载或维护。

### 谈谈你对OSI模型的理解

OSI（开放式系统互联）模型是一个用于描述计算机网络协议的七层参考模型。它是ISO（国际标准化组织）在20世纪80年代提出的，旨在促进不同类型的计算机和网络系统之间的互通性和互操作性。OSI模型可以帮助我们更好地理解网络通信过程中的各个步骤，以及如何在这些步骤中组织和使用各种协议。

OSI模型从下到上共有7层，每一层都有特定的职责，它们分别是：

1. **物理层（**Physical Layer）：这一层负责处理与传输介质（如电缆、光纤）有关的硬件方面的问题，包括比特（0和1）的传输、电压、接口等。物理层的主要目标是确保数据在传输过程中的完整性和可靠性。
2. **数据链路层**（Data Link Layer）：数据链路层负责在网络节点之间建立、维护和拆除数据链路。它将物理层传输的比特组合成帧（frame），同时负责错误检测和流量控制。典型的数据链路层协议有以太网（Ethernet）、Wi-Fi和PPP（点对点协议）等。
3. **网络层**（Network Layer）：网络层负责将数据包（packet）从源节点路由到目标节点。它处理IP地址、路由选择、分片和重组等问题。网络层的主要协议有IP（互联网协议）、ICMP（互联网控制消息协议）等。
4. **传输层**（Transport Layer）：传输层负责在源端和目标端之间提供端到端（end-to-end）的数据传输服务。它处理数据的分段、重组、流量控制、错误检测和校正等问题。常见的传输层协议有TCP（传输控制协议）和UDP（用户数据报协议）。
5. **会话层**（Session Layer）：会话层负责在通信双方之间建立、管理和终止会话。会话层的主要职责是维护会话状态、同步数据流和进行恢复操作。尽管OSI模型中包含了会话层，但在实际的互联网协议中，很多功能已经与其他层次结合在一起，例如TCP协议。
6. **表示层**（Presentation Layer）：表示层负责处理数据的表示、编码和解码，以便在不同系统之间进行交换。这包括数据压缩、加密和字符集转换等等功能。表示层的一个典型例子是SSL/TLS协议，它在应用层协议（如HTTP）之下提供数据加密和解密服务。然而，在现代网络协议中，表示层的很多功能通常直接集成在应用层协议中，如JSON、XML等数据格式。
7. **应用层**（Application Layer）：应用层是OSI模型中最高层，它负责处理用户与网络之间的交互，提供面向用户的服务。应用层协议定义了各种应用程序如何与网络进行通信，例如发送电子邮件、浏览网页等。常见的应用层协议包括HTTP（超文本传输协议）、FTP（文件传输协议）、SMTP（简单邮件传输协议）等。

OSI模型的一个重要优点是它将网络功能划分为若干模块化的层次，每个层次都有明确的职责。这种分层架构有助于降低网络设计和实现的复杂性，同时还有利于对现有协议的改进和替换，以适应不断变化的技术需求。

然而，需要注意的是，OSI模型主要是一个理论框架，用于帮助我们更好地理解网络协议的组织和交互。实际上，许多现代网络协议并不完全遵循OSI模型的严格分层结构，而是采用更灵活的混合模式。例如，TCP/IP模型是互联网中最常用的网络协议体系，它将OSI模型的7层合并为4层（应用层、传输层、网络层和链路层）。尽管如此，OSI模型仍然是一个有用的概念工具，可以帮助我们更好地理解复杂的计算机网络。

### 什么是HTTP，它的用途是什么？

HTTP（HyperText Transfer Protocol，**超文本传输协议**）是一种用于在互联网上进行数据通信的应用层协议。它基于 TCP/IP 协议栈工作，通常使用 TCP 作为传输层协议。HTTP 的主要作用是**规定了客户端（例如浏览器）和服务器之间的请求和响应的格式与规则**，从而实现数据的交换。

HTTP 的主要用途是：

1. **资源获取**：客户端可以通过 HTTP 向服务器发送请求，获取 HTML、CSS、JavaScript、图片、视频等各种资源，以便呈现和运行网页或其他应用。
2. **数据提交**：客户端可以通过 HTTP 将数据提交给服务器，例如表单提交、文件上传等。
3. **API 交互**：客户端和服务器可以通过 HTTP 进行 API 交互，以便在前后端之间传递数据。常见的数据格式包括 JSON 和 XML。

HTTP 协议的特点：

1. **无状态**：HTTP 是无状态的，意味着服务器不会存储与客户端之间交互的信息。为了实现有状态的会话，可以使用 Cookie 和 Session 等技术。
2. **简单快速**：HTTP 协议简单，易于实现。客户端和服务器之间的请求和响应报文格式统一，便于解析和处理。
3. **可扩展**：HTTP 允许自定义请求头和响应头，可以根据需要扩展协议的功能。
4. **明文传输**：HTTP 协议本身不提供数据加密功能，所有数据以明文形式传输。为了提高数据安全性，可以使用 HTTPS（HTTP Secure，基于 SSL/TLS 的 HTTP）进行加密传输。

HTTP 协议包括一系列请求方法（如 GET、POST、PUT、DELETE 等），用于指定请求的类型和目的。此外，HTTP 协议还定义了一系列状态码，用于表示请求的结果和相关信息。

### TCP中三次握手和四次挥手的含义

在 TCP（传输控制协议）中，三次握手和四次挥手是用来建立和终止连接的重要过程。下面分别解释它们的含义：

**三次握手（Three-Way Handshake）**：

三次握手是建立 TCP 连接的过程，确保数据传输的可靠性和连接的双向通信。这个过程包含三个步骤：

1. 客户端向服务器发送一个 **SYN（同步**）报文，表示客户端希望建立连接。报文中包含一个随机生成的序列号（Sequence Number）。
2. 服务器收到 SYN 报文后，回复一个 **SYN+ACK（同步确认**）报文，其中 ACK 的值为客户端序列号加一。同时，服务器也会发送一个自己的随机序列号。
3. 客户端收到 SYN+ACK 报文后，发送一个 **ACK（确认）**报文给服务器，其中 ACK 的值为服务器序列号加一。

完成这三个步骤后，客户端和服务器之间的 TCP 连接就建立好了，可以进行双向通信。

**四次挥手（Four-Way Handshake）**：

四次挥手是终止 TCP 连接的过程。当数据传输完成后，客户端和服务器需要通过四次挥手来关闭连接。这个过程包含四个步骤：

1. 客户端发送一个 FIN（完成）报文给服务器，表示客户端已完成数据发送。
2. 服务器收到 FIN 报文后，回复一个 ACK（确认）报文给客户端，表示已收到客户端的关闭请求。此时，客户端到服务器的连接被关闭，但服务器到客户端的连接仍然存在。
3. 当服务器完成数据发送后，也会发送一个 FIN 报文给客户端，表示服务器准备关闭连接。
4. 客户端收到服务器的 FIN 报文后，回复一个 ACK 报文给服务器，表示已收到服务器的关闭请求。经过一段时间（通常为 2MSL，即最长报文段寿命的两倍）后，客户端关闭与服务器的连接。

完成这四个步骤后，客户端和服务器之间的 TCP 连接就被完全关闭了。

### TCP提供了什么服务？

**传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议**。它为应用程序之间提供可靠的数据传输服务。TCP在Internet协议族中被广泛应用，与网络层协议IP（Internet Protocol）共同组成TCP/IP协议簇。

TCP提供的服务包括：

1. 面向连接：TCP在数据传输前建立一个连接。连接的建立、维护和终止都由TCP管理。这种面向连接的方式使得TCP适用于需要可靠通信的应用。
2. 可靠传输：TCP通过使用确认机制、重传机制和错误校验来确保数据的可靠传输。如果数据包丢失或损坏，TCP会自动重发数据包，从而保证数据的完整性和正确性。
3. 流量控制：TCP使用滑动窗口机制来实现流量控制，确保接收方的缓冲区不会被发送方的数据溢出。这样，发送方和接收方可以根据自身处理能力和网络状况动态调整传输速率，提高传输效率。
4. 拥塞控制：为了防止网络拥塞，TCP使用拥塞控制算法来调整发送数据的速率。当网络出现拥塞时，TCP会减少发送速率，避免网络拥塞进一步恶化。当网络恢复正常时，TCP会逐渐提高发送速率。
5. 数据排序：TCP会为每个数据包分配一个序号，接收方可以根据序号重新组合数据包，从而确保数据按正确顺序传输。
6. 复用与分用：TCP允许多个应用程序在同一台主机上通过不同的端口共享网络资源。这意味着多个应用程序可以在同一时间使用TCP进行数据传输，而不会互相干扰。

### SSL/TLS是如何握手的？

SSL（安全套接层）和TLS（传输层安全）协议用于在互联网上建立安全的、加密的通信连接。尽管TLS是SSL的后续版本，但在实际用语中，它们经常互换使用。TLS握手过程可以分为以下几个步骤：

1. 客户端发起连接：客户端（例如，浏览器）向服务器发起一个安全连接请求。这个请求包括客户端支持的TLS版本、支持的加密套件（加密算法和密钥交换方法的组合）以及一个随机数（ClientHello 随机数）。
2. 服务器响应：服务器从客户端提供的加密套件列表中选择一个加密套件，并向客户端返回服务器的证书（包含公钥和服务器身份信息）、选择的TLS版本和加密套件，以及一个随机数（ServerHello 随机数）。此外，如果需要客户端身份验证，服务器还会请求客户端的证书。
3. 证书验证：客户端验证服务器证书的有效性。证书应由受信任的证书颁发机构（CA）签名。这一步的目的是确保与客户端通信的服务器是可信的，防止中间人攻击。
4. 密钥交换：客户端使用服务器证书中的公钥加密一个新的随机数（称为 Pre-Master Secret），并将其发送给服务器。服务器使用其私钥解密 Pre-Master Secret。然后，客户端和服务器分别使用 ClientHello 随机数、ServerHello 随机数和 Pre-Master Secret，通过一个伪随机函数生成主密钥（Master Secret）。这个主密钥将用于之后的对称加密和解密操作。
5. 客户端和服务器协商参数：客户端和服务器根据主密钥生成一组加密参数（例如，对称密钥、初始化向量、消息验证码等），这些参数将用于保护后续的数据传输。
6. 客户端和服务器验证握手过程：客户端发送一个加密的 Finished 消息，服务器解密并验证消息的完整性。服务器也发送一个加密的 Finished 消息，客户端解密并验证。这一步的目的是确保双方已正确完成密钥交换和参数协商。
7. 加密数据传输：完成握手过程后，客户端和服务器使用协商的加密参数进行安全的数据传输。此时，所有传输的数据都是加密的，以确保其机密性和完整性。

TLS握手过程旨在在客户端和服务器之间建立一个安全、加密的通信通道，以保护数据在互联网上的传输。

### 数字证书里面主要包含什么信息？

数字证书，通常用于 SSL/TLS 通信和其他加密场景，是一个电子文档，用于证明公钥的所有权和身份。数字证书通常由认证机构 (CA) 签署。以下是数字证书中主要的包含的信息：

1. **主体信息（Subject）**：

   - **公钥（Public Key）**：该证书对应的公钥。
   - **主体的名称（Subject Name）**：通常为网站的域名或组织的名称。
   - **组织名称（Organization Name）**：证书持有者的组织或公司名称（例如，"OpenAI Inc."）。
   - **组织单位（Organizational Unit, OU）**：组织内的特定部门或单位。
   - **地理位置信息**：如国家（Country）、州/省（State/Province）、城市（Locality）等。
2. **颁发者信息（Issuer）**：

   - **颁发者名称（Issuer Name）**：签发该证书的证书认证机构 (CA) 的名称。
   - 和主体类似，可能还包括组织名称、组织单位、国家等信息。
3. **有效期（Validity Period）**：

   - **开始日期（Not Before）**：证书的有效开始日期。
   - **结束日期（Not After）**：证书的过期日期。
4. **序列号（Serial Number）**：颁发者给证书分配的唯一编号，用于识别。
5. **签名算法（Signature Algorithm）**：用于签署此证书的算法（如 RSA、ECDSA 或其他）。
6. **证书签名（Signature）**：CA 使用其私钥生成的证书的数字签名。这使得其他人可以使用 CA 的公钥来验证证书的真实性和完整性。
7. **扩展和约束（Extensions and Constraints）**：这些是可选的，但在许多证书中都有。它们为证书提供了额外的属性和规则。例如：

   - **Key Usage**：描述公钥可以用于什么（例如，数据加密、数字签名等）。
   - **Extended Key Usage**：进一步详细说明公钥的使用，如服务器身份验证、客户端身份验证等。
   - **Subject Alternative Name (SAN)**：除主体名称外，其他有效的名称（通常用于多域名或通配符证书）。
   - **Certificate Policies**：关于证书如何使用和 CA 如何管理证书的策略。
8. **版本（Version）**：证书的版本号。目前，最常见的版本是 v3。

当客户端（例如，web 浏览器）接收到数字证书时，它会使用相关 CA 的公钥来验证证书的签名，从而验证证书的真实性。此过程有助于确保在网络上进行的通信是安全和加密的。

### Websocket与Ajax的区别？

WebSocket 和 Ajax 是两种不同的 Web 技术，它们在实现客户端与服务器之间通信时有一些区别。以下是它们之间的主要区别：

1. **连接方式**：
   - WebSocket：WebSocket 是一种全双工通信协议，建立连接后，客户端和服务器之间可以同时进行数据发送和接收。WebSocket 连接在建立后会保持连接状态，直至显式断开连接。
   - Ajax：Ajax（Asynchronous JavaScript and XML）是一种基于 HTTP 协议的异步请求技术。每次 Ajax 请求都需要建立一个新的 HTTP 连接，请求完成后连接会被关闭。因此，Ajax 是一种基于请求-响应模式的半双工通信方式。
2. **实时性**：
   - WebSocket：由于 WebSocket 是全双工通信，服务器可以在任何时候主动向客户端发送数据，因此实时性较强，适用于实时通信、在线游戏等场景。
   - Ajax：由于 Ajax 基于请求-响应模式，服务器不能主动向客户端发送数据，客户端需要定期发起请求以获取更新。因此，实时性相对较弱，适用于非实时的数据获取和更新。
3. **开销和性能**：
   - WebSocket：WebSocket 在建立连接后会保持连接状态，因此减少了频繁建立和断开连接的开销。同时，WebSocket 使用自己的二进制分帧格式进行数据传输，帧头较小，数据传输效率较高。
   - Ajax：每次 Ajax 请求都需要建立新的 HTTP 连接，这会导致一定的性能开销。另外，HTTP 协议的请求和响应头部较大，相对降低了数据传输效率。

总结：WebSocket 适用于实时性要求较高、需要双向通信的场景，而 Ajax 更适用于传统的 Web 应用，用于获取和更新数据。根据实际应用需求，可以选择合适的技术进行通信。

### HTTP1.0、HTTP1.1、HTTP2.0之间有什么区别

1. **HTTP/1.0**:

   - **无连接**：每个 HTTP 请求打开一个新的连接，请求结束后立即关闭连接。
   - **无状态**：每个请求都是独立的，服务器不保存之前的请求信息。
   - **缓存**：使用简单的 `Pragma: no-cache` 来避免缓存。
2. **HTTP/1.1**:

   - **长连接**：引入了持久连接，这意味着多个 HTTP 请求和响应可以在一个连接中连续发送，避免了为每个请求都建立新连接的开销。这是通过 `Connection: keep-alive` 头来实现的。
   - **管线化**：请求可以同时被发送，但是服务器必须按照它们接收到的顺序来逐一响应。
   - **缓存控制**：更加详细和精确的缓存头，如 `Cache-Control`，提供了更好的缓存管理。
   - **主机头的要求**：允许多个域名解析到同一 IP 地址，从而使虚拟主机成为可能。
   - **错误通知**：增加了更多的状态码和更丰富的错误信息。
3. **HTTP/2**:

   - **二进制协议**：不再是像 HTTP/1.x 那样的文本协议，而是一个二进制协议。这使得协议的解析、网络传输更高效。
   - **多路复用**：允许多个请求和响应在一个连接上同时并行交换，解决了 HTTP/1.1 中的“线头阻塞”问题。
   - **优先级和权重**：可以为请求设置优先级和权重，使得重要的请求得到更快的响应。
   - **服务器推送**：服务器可以对客户端“推送”资源，即使客户端尚未请求。
   - **首部压缩**：使用 HPACK 压缩，减少了请求和响应的大小。
   - **更强的流控制**：为每一个流提供了流控制机制。

### HTTP/2相比HTTP/1.1新增了什么

HTTP/2 是 HTTP/1.1 的升级版本，旨在解决 HTTP/1.1 中的一些性能问题，提高网络传输的效率。HTTP/2 相比于 HTTP/1.1 主要有以下新增特性：

1. **二进制分帧**：HTTP/2 将数据以二进制格式进行传输，请求和响应被分解为更小的帧，每个帧有自己的类型和标识符。这使得数据传输更加高效，易于解析。
2. **多路复用**：HTTP/2 允许在同一个 TCP 连接上同时发送和接收多个请求和响应，避免了 HTTP/1.1 中的队头阻塞问题。这样可以提高页面加载速度，减少网络延迟。
3. **头部压缩**：HTTP/2 使用 HPACK 压缩算法对请求和响应头部进行压缩，减小了传输数据的大小，从而降低了传输延迟。
4. **服务器推送**：HTTP/2 服务器可以主动将一些尚未被客户端请求的资源推送给客户端，以便客户端在需要时立即使用，提高了资源加载速度。

### HTTP/3相比HTTP/2解决了哪些问题？

HTTP/3 是互联网工程任务组（IETF）制定的新一代 HTTP（超文本传输协议）标准，它基于 QUIC 协议（快速 UDP 互联网连接），旨在解决 HTTP/2 存在的一些问题，提高网络性能和安全性。相较于 HTTP/2，HTTP/3 主要解决了以下问题：

1. 首部阻塞（Head-of-line blocking）：在 HTTP/2 中，多个请求和响应通过同一个 TCP 连接进行多路复用。由于 TCP 是面向连接的、可靠的传输协议，要求数据按顺序到达，当其中一个数据包丢失或延迟时，整个连接的其他数据包必须等待，直到丢失的数据包被重新传输并到达。这种现象被称为首部阻塞。HTTP/3 采用基于 UDP 的 QUIC 协议，它允许单独处理每个数据流，从而消除了首部阻塞问题。
2. 连接建立延迟：HTTP/2 在建立 TCP 连接之后，还需要通过 TLS 握手建立安全连接。这意味着需要多次往返才能完成连接建立。而 HTTP/3 使用 QUIC 协议，它将传输层（TCP）和安全层（TLS）整合在一起，从而减少了连接建立所需的往返次数。对于已经与服务器建立过连接的客户端，QUIC 甚至可以实现 0-RTT（零往返时间）连接建立，大幅降低了延迟。
3. 更好的网络路径迁移：当客户端或服务器的 IP 地址发生变化时（如移动设备在 Wi-Fi 和移动网络之间切换），TCP 连接可能中断，需要重新建立。HTTP/3 的 QUIC 协议提供了内置的连接迁移特性，允许在 IP 地址变化时保持连接状态，减少中断和延迟。
4. 拥塞控制和恢复：由于 HTTP/3 使用 QUIC 协议，它可以在单独的数据流上实现更细粒度的拥塞控制。这意味着当一个数据流受到网络拥塞影响时，其他数据流可以继续正常传输，不受影响。同时，QUIC 采用了更先进的丢包恢复机制，使得数据传输更加高效和可靠。

尽管 HTTP/3 有很多优势，但它目前仍在逐步推广和普及。浏览器和服务器需要支持 QUIC 协议，以便充分利用 HTTP/3 带来的改进。

### GET和POST请求的区别是什么？

GET和POST是HTTP协议中最常见的两种请求方法，它们之间的主要区别包括：

1. **请求参数的传递方式不同**：

   - GET请求的参数被附加到URL之后，以键值对的形式出现，各参数之间以&符号分割，如`http://example.com/page?param1=value1&param2=value2`。
   - POST请求的参数存储在请求体（Request Body）中。
2. **数据大小的限制不同**：

   - GET由于受URL长度限制，所以能传递的参数量相对有限。
   - POST请求由于参数在请求体中，理论上数据量没有限制，但实际上大小会受到WEB服务器的限制。
3. **安全性不同**：

   - GET请求的参数直接被包含在URL中，数据暴露给了用户，安全性较低，因此不适合传递敏感信息。
   - POST请求的参数在请求体中，用户无法在地址栏看到，安全性相对较高。
4. **可缓存**：

   - GET请求的结果通常可以被浏览器或代理服务器缓存。
   - POST请求的结果则通常不被缓存。
5. **幂等性和副作用**：

   - GET是幂等的，也就是说，无论调用一次还是多次，产生的效果是相同的。
   - POST不是幂等的，每次请求都可能导致不同的结果。
6. **请求的用途**：

   - GET通常用于请求服务器数据，例如网页浏览、图片加载等。
   - POST通常用于提交数据给服务器，例如表单提交、文件上传等。

虽然GET和POST是最常见的HTTP请求方法，但HTTP协议还定义了其他一些请求方法，如PUT、DELETE、PATCH、HEAD等，每种方法都有其特定的用途和语义。

### TCP与UDP有什么区别？

TCP（传输控制协议）和UDP（用户数据报协议）是互联网协议套件的两个主要协议，它们用于不同类型的网络服务，并具有各自的特点和用途。以下是它们的主要区别：

1. **连接类型**：

   - TCP是一种面向连接的协议，这意味着在数据交换之前，必须首先建立连接。一旦建立了连接，就会保持开放状态，直到所有数据传输完毕。TCP使用的是可靠的通信通道，确保数据的完整性和顺序。
   - UDP是一种无连接的协议，这意味着它不需要在发送数据之前建立连接。因此，UDP的通信通道是不可靠的，无法保证数据的完整性和顺序。
2. **速度和可靠性**：

   - TCP提供了一种可靠的数据传输方法，通过校验和、序列号、确认应答、重传机制和拥塞控制等机制，确保数据在网络中的正确无误的传输。但这些特性使得TCP相比UDP来说速度较慢。
   - UDP不提供数据可靠性，它只是简单地发送数据，不进行错误检查或数据恢复。这意味着如果网络出现问题，数据可能会丢失。但由于缺少了这些额外的特性，UDP的速度通常比TCP快。
3. **使用场景**：

   - TCP常用于需要高可靠性的应用，如Web浏览器、电子邮件服务、文件传输等。
   - UDP常用于对实时性要求较高、可接受一些数据丢失的应用，如流媒体、在线游戏和VoIP（网络电话）。
4. **报头长度**：

   - TCP的报头长度更长，最小为20字节，因为它包含了许多控制信息（如序列号和确认号）。
   - UDP的报头长度较短，只有8字节，因为它只提供基本的功能。
5. **流量控制和拥塞控制**：

   - TCP有内置的流量控制和拥塞控制机制，这使得TCP可以在网络繁忙时降低数据发送速度，以防止数据丢失。
   - UDP没有这些控制机制，所以在网络繁忙时可能会导致大量数据丢失。

总的来说，TCP和UDP都有它们各自的优势和使用场景。选择使用哪一个协议取决于特定的应用需求，如需要可靠性还是速度，以及对数据丢失的容忍度。

### 常见的API设计规范有哪些？

确实，RESTful是API设计中的一种非常流行的设计风格，但并非唯一的设计规范。除了RESTful之外，还有一些其他的API设计规范和架构风格，包括：

1. **REST (Representational State Transfer)**：REST是一种软件架构风格，通常用于设计网络应用程序。RESTful API遵循一组约定，如使用HTTP方法（GET，POST，PUT，DELETE等），使用路径来表示资源，并在可能的情况下，使用HTTP状态代码来表示错误。RESTful API通常使用JSON进行数据传输。
2. **GraphQL**：GraphQL是一个开源的数据查询和操作语言，同时也是一个运行时系统，用于现有数据的查询。与REST不同，GraphQL允许客户端精确地获取它需要的数据，而无需获取额外的信息。这可以帮助解决RESTful设计中的过度获取和信息获取不足的问题。
3. **gRPC**：gRPC是一个高性能、开源的通用RPC框架，它由Google开发。gRPC提供了一种简单的方法来定义服务：客户端应用程序可以直接在服务器上调用方法，就像是本地对象一样，而不用考虑底层的网络通信细节。
4. **JSON-RPC和XML-RPC**：这两种都是远程过程调用(RPC)规范，它们允许在网络上的一台计算机（客户端）调用另一台计算机（服务器）上的方法或过程。JSON-RPC使用JSON来编码数据，而XML-RPC使用XML来编码数据。
5. **OData (Open Data Protocol)**：OData是一个用于构建和消费RESTful API的开放标准。使用OData，你可以通过简单的HTTP请求进行查询和操作数据。
6. **SOAP**：SOAP是一种基于XML的消息协议，用于在web服务中交换结构化的信息。SOAP可以与各种通信协议一起使用，包括HTTP、SMTP等。

以上都是常见的API设计规范和架构风格，每种都有其特点和用途，设计API时应根据具体需求和场景进行选择。

### 哪些协议底层使用UDP？

UDP（用户数据报协议）是一种无连接的网络通信协议，它不保证数据报的交付、顺序或校验，从而在通信速度和网络效率上优于TCP。以下是一些在底层使用UDP的协议：

1. **DNS (域名系统)**: DNS用于将互联网域名解析为IP地址。由于解析请求必须尽快完成，通常使用UDP作为传输协议。
2. **DHCP (动态主机配置协议)**: DHCP是一种网络协议，用于在网络上动态分配IP地址。因为DHCP请求需要快速处理，所以通常使用UDP。
3. **RTP (实时传输协议)**: RTP用于实时传输音频和视频数据。RTP通常与RTCP (RTP 控制协议)一起使用，用于媒体流的同步和质量反馈。RTP使用UDP，因为对于实时媒体流来说，速度和效率比确保每个包的交付更重要。
4. **SNMP (简单网络管理协议)**: SNMP用于管理和监控网络设备。SNMP消息需要快速发送并响应，因此使用UDP。
5. **NTP (网络时间协议)**: NTP用于在网络中同步时钟。NTP消息需要快速交付，所以通常使用UDP。
6. **QUIC (快速UDP互联网连接)**: QUIC是一种多路复用的传输层协议，用于在HTTP/3中替代TCP。QUIC使用UDP，以减少连接和重新传输的延迟。
7. **VoIP (语音 over IP)**: VoIP技术，如Skype和一些其他的互联网电话应用，使用UDP进行音频数据传输，因为它们更关心实时性，而不是数据的完整性。

### HTTP中，get、post、put、delete有什么区别？

HTTP中的GET、POST、PUT、DELETE是四种常见的HTTP方法（也称为“动词”），它们各自代表了不同的操作，通常用于RESTful Web服务中。以下是这四种方法的基本区别：

1. **GET**：

   - 用途：获取资源信息。
   - 安全性：GET是安全的，这意味着它只是获取信息并不改变资源状态。
   - **幂等性：**GET是幂等的，这意味着多次执行同一GET请求，结果都是一样的。
   - 数据传输：参数包含在URL中，因此数据量有限，并且可能被记录在日志中。
   - 缓存：GET请求的响应是可以被缓存的。
   - 示例：访问一个网页或获取某个项目的详细信息。
2. **POST**：

   - 用途：提交数据并创建新资源。
   - 安全性：POST不是安全的，因为它可能改变资源的状态。
   - 幂等性：POST不是幂等的，因为重复发送同一个POST请求可能会有不同的效果（例如，重复创建相同的资源）。
   - 数据传输：参数不在URL中，而是在请求体中。因此，可以发送大量的数据。
   - 示例：填写并提交一个表单。
3. **PUT**：

   - 用途：更新现有资源或创建新资源。
   - 安全性：PUT不是安全的。
   - 幂等性：PUT是幂等的，重复执行同一PUT请求应该总是产生相同的结果。
   - 数据传输：数据在请求体中。
   - 示例：更新一个项目的详细信息。
4. **DELETE**：

   - 用途：删除资源。
   - 安全性：DELETE不是安全的。
   - 幂等性：DELETE是幂等的，因为无论删除多少次，资源都已经被删除。
   - 数据传输：通常不带请求体，资源标识通常在URL中。
   - 示例：删除一个项目。

<hr />

## echarts

### 动态设置option

使用echarts.setOption(obj) obj 为需要为需要修改的对象，或者 echarts.updateOption(obj)

直接更新需要修改的配置。

## 项目相关问题

前端SSE

类似于前端的订阅，Server-Sent Events（SSE）是一种用于实现服务器向客户端实时推送数据的Web技术。

### 前端虚拟列表

一次接收一百条数据；

### 大文件切片上传！！！！

https://juejin.cn/post/6986188684605259783#heading-15

#### 选择大文件切片上传的理由

项目中有用到可能会上传图片的功能，分辨率比较高，为减轻服务器资源压力。

#### 大文件上传实现

[推荐](https://blog.csdn.net/cpc980209/article/details/140093954)

```
1. 将需要上传的文件按照一定的分割规则，分割成相同大小的数据块；
2. 初始化一个分片上传任务，返回本次分片上传唯一标识；
3. 按照一定的策略（串行或并行）发送各个分片数据块；
4. 发送完成后，服务端根据判断数据上传是否完整，如果完整，则进行数据块合成得到原始文件

拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕

断点续传
根据前端传给后台的md5值，到服务器磁盘查找是否有之前未完成的文件合并信息（也就是未完成的半成品文件切片），取到之后根据上传切片的数量，返回数据告诉前端开始从第几节上传
```

#### 某个切片上传失败怎么解决？

重试机制：为上传失败的切片实施重试机制。例如，设置最大重试次数和重试间隔，并在每次重试时重新发送失败的切片。这可以增加上传的可靠性，并在临时的网络问题或服务器繁忙时提供更好的鲁棒性。

#### 上传过程中刷新页面怎么办？

刷新之后，只能让用户再接着点击，继续上传了。但是服务器会支持断电续传功能。

断点续传：如果服务器端支持断点续传功能，可以使用之前上传过的切片信息来继续上传。服务器可以根据已上传的切片进行校验，并跳过已经上传成功的部分，只处理未上传或上传失败的切片。

#### 如何进行并行上传？

参考链接：https://blog.csdn.net/WQQREN/article/details/118569345

poolLimit（数字类型）：表示限制的并发数；
array（数组类型）：表示任务数组；
iteratorFn（函数类型）：表示迭代函数，用于实现对每个任务项进行处理，该函数会返回一个 Promise 对象或异步函数。

```
  async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
      // 调用iteratorFn函数创建异步任务
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p); // 保存新的异步任务

      // 当poolLimit值小于或等于总任务个数时，进行并发控制
      if (poolLimit <= array.length) {
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e); // 保存正在执行的异步任务
        if (executing.length >= poolLimit) {
          await Promise.race(executing); // 等待较快的任务执行完成
        }
      }
    }
    return Promise.all(ret);
  }
```

#### 切片什么时候按数量切，什么时候按大小切？

**网络状况**：如果网络状况较好，可以考虑按大小切片，以充分利用网络带宽，提高上传速度。如果网络状况较差或者不稳定，可以考虑按数量切片，以减少传输失败的概率。
**后端处理能力**：如果后端服务器处理能力有限，可以考虑按数量切片，以减少服务器负载。如果后端服务器有足够的处理能力，可以考虑按大小切片，以提高上传速度和效率。
**用户体验**：较小的切片可以更快地上传，从而提供更好的用户体验。但是，切片数量过多可能会增加上传过程的复杂性和耗时。
**文件特性**：某些特定类型的文件可能更适合按数量切片，而某些特定大小的文件可能更适合按大小切片。例如，视频文件可能更适合按大小切片，而文本文件可能更适合按数量切片。

#### 如何结合 Web Worker 处理大文件上传？

https://www.ruanyifeng.com/blog/2018/07/web-worker.html

#### 用户上传时暂停？

#### 上传完成之后如何合并？

在前端，我们通过计数器 `uploadedChunks` 来跟踪已经上传的切片数量。当 `uploadedChunks` 达到总切片数 `chunks` 时，表示所有切片都已上传完成，此时可以调用 `/merge` 端点来合并切片。

```
if (uploadedChunks === chunks) {
    mergeChunks(file.name, chunks);
}
```

### 请求的数据格式

FormDate; JSON; application/x-www-form-urlencoded；普通文本

### axios的二次封装怎么封装的？

### 关于refreshToken怎么做的

刷新token ,

```
1.登陆后，两个令牌：Access Token 和 Refresh Token
2. 当access——token过期，响应拦截器捕获 401，用 refresh TOken 发请求
3. 服务器检验 refreshToken 合法，就会返回新的Access token
4. 使用新的 Access Token 访问资源
```

刷新token的关键代码：

```
const RefreshTokenUrl = '/api/auth/refresh';
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let authorization = null;
    if (RefreshTokenUrl === config.url) {
      authorization = localStorage.getItem('refresh_token') ? `Bearer ${localStorage.getItem('refresh_token')}` : null;
    } else {
      authorization = localStorage.getItem('access_token') ? `Bearer ${localStorage.getItem('access_token')}` : null;
    }
    config.headers.Authorization = authorization;
    printRequestInfo(config);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    try {
      checkStatusCode(response);
    } catch (error) {
      console.log(response.data);
    }
    printResponseInfo(response);
    return response;
  },
  async (error: any) => {
    // if (error.response.status === 400 && !error.config._retry) {
    //     error.config._retry = true;
    //     return axiosInstance(error.config);
    // }
    console.log('error', error);
    if (error.response.status === 401) {
    // 重点
      if (RefreshTokenUrl === error.config.url) {
        router.push({ path: '/login' });
        return Promise.reject(error);
      }
      console.groupCollapsed('刷新token');
      await getRefreshedToken();
      error.config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
      console.groupEnd();
      return axiosInstance(error.config);
    } else if (error.response.status === 422) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      router.push({ path: '/login' });
    } else if (error.response.status === 400) {
      if (error.config.url === '/api/user/register') {
        message.error('重复激活,已前往登录');
        router.push({ path: '/login' });
      }
    }
    return Promise.reject(error);
  }
);
```

// 重发请求

重发获取access_token，在把headers里的authorization替换，然后return axiosInstance(error.config)

修改完token，和url，再重新return新的axiosInstance

### 用户权限设置（难点）

1. **routes里面设置 props: {} 特殊标识；**
2. **后台页面再去筛选，显示侧边栏信息。**
3. **router.beforeEach() 判断跳转过去的路由是否有权限，有就放行，没有就不通过。**
4. **刷新失效问题。**

https://github.com/pekonchan/Blog/issues/20

我觉得最好的方案：https://blog.csdn.net/lzc13902932164/article/details/131913215

路由权限

一般在router.beforeEach()内判断是否有权限进入，没有就重定向到其他路由。

```
const routes = [
    {
        path: '/exam1',
        component: exam1,
        props: {
            authorityId: 100
        }
    },
    {
        path: '/exam2',
        component: exam2,
        props: {
            authorityId: 200
        }
    }
];

routes.forEach(item => {
    item.props = {
        ...item.props,
        authorityId: 100
    };
});
```

会把权限相关信息存到vuex里面，不存到localStorage、或者sessionStorage里面，因为怕用户修改。

```
// authority.js

import * as types from '../mutation-types';

// state
const state = {
    // 权限id值数组，null为初始化情况，如果为[]代表该用户没有任何权限
    rights: null
};

// getters
const getters = {
    rights: state => state.rights
};

// actions
const actions = {
    /**
     * 设置用户访问权限
     */
    setRights ({ commit }, value) {
        commit(types.SET_RIGHTS, value);
    }
};

// mutations
const mutations = {
    [types.SET_RIGHTS] (state, value) {
        state.rights = value;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
```

判断那么为`null`是有两种情况的：

- 从空tab或别的网站进入到eod（如输入url、sso登录跳转过来）；
- 刷新页面

关于刷新之后，权限信息丢失问题：

进入后，获取权限，到后台，左侧导航栏控制？

```
import store from '/store';

/**
 * 检查进入的路由是否需要权限控制
 * @param {Object} to - 即将进入的路由对象
 * @param {Object} from - 来自的路由对象
 * @param {Function} next - 路由跳转的函数
 */
const verifyRouteAuthority = async (to, from, next) => {
    // 获取路由的props下的authorityId信息
    const defaultConfig = to.matched[to.matched.length - 1].props.default;
    const authorityId = (defaultConfig && defaultConfig.authorityId) ? defaultConfig.authorityId : null;

    // authorityId存在，表示需要权限控制的页面
    if (authorityId) {
        // 获取vuex中存储权限信息的模块，authority为该模块名
        const authorityState = store.state.authority;
        // 为null的场景： 从空tab或别的网站进入到eod（如输入url、sso登录跳转过来）；刷新页面；
        if (authorityState.rights === null) {
            const userId = sessionStorage.getItem('userId');
            //  如果是刷新了导致存储的权限路由配置信息没了，则要重新请求获取权限，判断刷新页是否拥有权限
            if (userId) {
                // 重新获取权限，以下为例子
                const res = await loginService.getRights();
                store.dispatch('setRights', res);
            } else { // 如果是非当页刷新，则跳转到首页
                next({ path: '/' });
                return true;
            }
        }

        // 如果是要进行权限控制的页面，判断是否有对应权限，无则跳转到首页
        if (!authorityState.rights.includes(authorityId)) {
            next({ path: '/' });
            return true;
        }
    }

    return false;
};

/**
 * 能进入路由页面的处理
 */
const enterRoute = async (to, from, next) => {
    // 进行权限控制校验
    const res = await verifyRouteAuthority(to, from, next);
    // 如果通不过检验已进行内部跳转，则退出该流程
    if (res) {
        return;
    }

    // 进行登录验证以及获取必要的用户信息等操作
    // ...
};

router.beforeEach((to, from, next) => {
    // 无匹配路由
    if (to.matched.length === 0) {
        // 跳转到首页 添加query，避免手动跳转丢失参数，例如token
        next({
            path: '/',
            query: to.query
        });
        return;
    }
    enterRoute(to, from, next);
});
```

### Socket.io 通讯与WebSocket的理解

项目中：使用 Socket.io 提供的 API 来监听来自服务器的任务更新事件，根据任务的状态变化，更新用户界面上的任务。

**需要使用的原因**：后台端，任务列表接收全平台用户的任务执行数据，对任务更新的实时性有较高的要求。

列表或其他相关的任务展示信息，使用户可以实时地看到任务的最新状态。

浏览器里面用： ws 看请求。

webSocket协议：**是在网络中实现双向通信的协议**。它允许客户端和服务器之间建立**持久的连接**，并通过该连接进行**实时**数据传输。

应用场景： 弹幕聊天，协同。

```
import { io } from 'socket.io-client';
import { baseURL } from '@/utils/http.js';
import { useUserStore } from '@/stores/index.js';
import { onMounted, ref } from 'vue';

// 引入消息组件

const userStore = useUserStore();
const { token, userInfo } = userStore;

const props = defineProps({
  orderId: String
});

// 消息列表
const messageList = ref([]);
// 文字信息
const textMessage = ref('');
// 问诊订单详情
const orderDetail = ref({});

const onInputConfirm = () => {
  console.log('[ textMessage.value ] => ', textMessage.value);
};

const getOrderDetail = () => {
  console.log('[ 222 ] => ', 222);
};

onMounted(() => {
  const socket = io(baseURL, {
    reconnectionDelayMax: 10000,
    auth: {
      token: 'Bearer ' + token
    },
    query: {
      orderId: props.orderId // 房间号
    },
    transports: ['websocket', 'polling']
  });

  // 获取历史消息;
  socket.on('chatMsgList', ({ code, data }) => {
    console.log('[ data ] => ', data);
    // 没有返回数据
    if (code !== 10000) return;
    // 提取列表数据
    data.forEach(({ items }) => {
      // 追加到消息列表中
      messageList.value.push(...items);
    });
    // console.log('[ messageList ] => ', messageList.value);
  });

  // 如何发送消息
  socket.on('statusChange', getOrderDetail);

  // 清空表单
  textMessage.value = '';
});
```

### xlsx设置表格样式

普通导出。

**请求数据： blob 数据流， JSON，formData,**

```
export const exportUserExcel = () => {
    return get('/user/export', '', 'blob')
}
    async handleExport() {
      console.log("导出");
      const res = await exportUserExcel();
      const blob = new Blob([res], { type: "application/vnd.ms-excel" });
      console.log(res, "who are you");
      // 创建 href 超链接，点击进行下载
      window.URL = window.URL || window.webkitURL;
      const href = URL.createObjectURL(blob);
      const downA = document.createElement("a");
      downA.href = href;
      downA.download = "用户表";
      downA.click();
      // 销毁超连接
      window.URL.revokeObjectURL(href);
      this.$notify({
        title: "成功",
        message: "您已成功导出用户表",
        type: "success",
      });
    },
```

前端实现导入导出：

**exceljs** 用于Excel数据处理，file-sever用于保存到本地文件。

合并单元格，配置样式，条件验证

```
sheet1.eachRow((row, rowNumber) => {
    // 遍历每个单元格
    row.eachCell((cell) => {
      // 设置边框样式
      cell.border = {
        top: {style: 'thin'},
        left: {style: 'thin'},
        bottom: {style: 'thin'},
        right: {style: 'thin'}
      };
      // 设置居中对齐
      cell.alignment = {
        vertical: 'middle',
        horizontal: 'center'
      };
    });
  });
  // 获取标题行数据
  const titleCell = sheet1.getRow(1);
  // 设置行高为30
  titleCell.height = 30
  // 设置标题行单元格样式
  titleCell.eachCell((cell) => {
    // 设置标题行背景颜色为黄色
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: 'FFFF00'}
    };
    // 设置标题行字体
    cell.font = {
      color: {argb: 'FF0000'}, //颜色为红色
      bold: true,// 字体粗体
      size: 18 // 设置字体大小为18
    };
  })
  // 获取第二行到最后一行的内容数据
  const bodyRows = sheet1.getRows(2, sheet1.rowCount);
  // 处理内容行的数据
  bodyRows.forEach((bodyRow) => {
    // 设置行高为20
    bodyRow.height = 20
    bodyRow.eachCell((cell) => {
      cell.font = {
        size: 16 // 设置内容行字体大小为16
      };
    });
  });
```

// 上下合并单元格
sheet1.mergeCells("B2:B3");
// 左右合并单元格
sheet1.mergeCells("C3:D3");
// 范围合并单元格
sheet1.mergeCells("C4:D5");

### Vue-i18配置，如何配置的

先下包，配置 VSCode 设置，在 src 目录下新建 i18n.js 文件，

```
import { createI18n } from 'vue-i18n'
import enLocale from './locales/en'
import zhCNLocale from './locales/zh-CN'

const messages = {
  en: {
    ...enLocale
  },
  'zh-CN': {
    ...zhCNLocale
  }
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh-CN',
  globalInjection: true,
  messages
})

export default i18n；
```

编辑自己的语言包，在 main.js 中注册 i18n 实例，在模板中使用 $t 函数: {{ $t('message.hello') }}

### 配置i18,如何解决中英文切换后，字体长度不一致？

### 有没有遇到特别难的问题？

### 大屏可视化怎么做的，echarts图数据如何动态更新

setOption()

### echarts的页面下钻

参考：https://blog.csdn.net/LiFHCode/article/details/81221693

Echarts可以通过setOptions间接实现下钻功能。

触发点击事件，点击事件的功能是销毁该Echarts实例，并会向后台请求该月份的数据，当后台返回数据后，进行重新初始化Echarts实例。

echarts.dispose();

伪代码展示：

```
initChart: function(mychart,option){
    myChart.setOption(option)
    //如果某个用例被点击
    mycahrt.on('click',(obj)=>{
     // 销毁之前的实例
     echarts.dispose()
     // 创建新的实例
     var mychart = echarts.init(dom)
     // 请求新的数据series
     if (object.name == "Animals"){
            option.xAxis.data = [
            'Cats','Dogs','Cows','Sheep','Pigs'
            ];
            option.series[0].data = [
                4,2,1,2,1
            ];
            option.legend.data= ['Animals'];

            option.series[0].name=['Animals'];
        }
        myChart.setOption(option, true);
    })
}
```

### 支付功能如何完成

### 超过十个页面栈之后，无法打开其他页面原因

111

## MVVM框架

js静态方法

静态方法（Static Methods）：
静态方法是定义在类本身上，而不是类的实例上的方法。
静态方法通常用于类级别的操作，而不是与特定实例相关的操作。
在静态方法内部，无法直接访问类的实例属性或方法，因为静态方法不会被实例继承。
可以通过类名直接调用静态方法，而不需要先创建类的实例。
**静态方法通常用于实现通用的功能或工具函数**。

```
class MathUtil {
  static add(x, y) {
    return x + y;
  }
}
```

js实例方法

实例方法是定义在类的原型（prototype）上，每个类的实例都可以调用这些方法。
实例方法通常用于处理与特定实例相关的操作，可以访问实例的属性和其他方法。
实例方法可以通过类的实例调用，通过this关键字访问实例的属性和方法。
实例方法会被类的每个实例继承并共享。

```
class Person {
  constructor(name) {
    this.name = name;

  }

  greet() {

    return Hello, my name is ${this.name}.;

  }

}

```

### 数据驱动MVVM

- Model：模型层，负责处理业务逻辑以及和服务器端进行交互
- View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁

### 对SPA单页应用的理解

SPA：单页web应用，它通过在加载初始页面后（h5,css,js），t通过js动态地更新页面内容，从而模拟出多个页面的效果。

优点： 用户体验流畅，更好的支持前后端

缺点：

- 不利于搜索引擎的抓取
- 首次渲染速度相对较慢

**首屏加载速度慢怎么解决？**

方法：

- 减小入口文件积
- 静态资源本地缓存
- UI框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启GZip压缩
- 使用SSR

减少入口文件体积，（路由懒加载）

```
routes:[ 
    path: 'Blogs',
    name: 'ShowBlogs',
    component: () => import('./components/ShowBlogs.vue')
]
```

静态资源本地缓存

```
// 检查本地是否已经存储了资源
if (!localStorage.getItem('cachedResource')) {
    // 如果没有存储资源，请求资源并存储到本地
    fetch('https://example.com/static/resource.js')
        .then(response => response.text())
        .then(data => {
            // 将资源存储到LocalStorage中
            localStorage.setItem('cachedResource', data);
            console.log('资源已缓存到本地');
        })
        .catch(error => console.error('资源请求失败：', error));
} else {
    console.log('从本地缓存加载资源');
    // 从LocalStorage中获取资源并使用
    const cachedData = localStorage.getItem('cachedResource');
    // 在这里使用缓存的资源
}
```

ui框架按需加载

```
import { Button, Input, Pagination, Table, TableColumn, MessageBox } from 'element-ui';
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
```

组件重复打包

假设`A.js`文件是一个常用的库，现在有多个路由使用了`A.js`文件，这就造成了重复下载

解决方案：在`webpack`的`config`文件中，修改`CommonsChunkPlugin`的配置

`minChunks`为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件

图片资源的压缩

### v-if与v-for的优先级

vue2中 v-for > v-if 。这可能会导致在进行循环渲染时，v-if 条件判断可能会对每个循环项都进行检查。

vue3中同一元素下，v-if > v-for

v-if 与 v-for不放在同一元素，由于语法上存在歧义，建议避免在同一元素上同时使用两者。

```
<template v-if="isShow">
    <p v-for="item in items">
</template>
```

### **computed 与 watch 的区别**

computed用于计算属性，依赖值的变化，会缓存，只有依赖值发生变化，相应的值才会发生改变，

但是computed不支持异步。

如果需要监听异步数据变化，就要用watch 监听异步数据。

### nexttick原理

等待下一次dom更新刷新。nexttick的本质是一个promise,vue的更新机制是批量异步更新，多次数据更改，只会执行最后一次.

### 为什么 data 在组件内必须是函数，而 vue 的根实例则没有此限制？

在 Vue 组件中，`data` 必须是一个函数，因为组件可能会被多次实例化。如果 `data` 是一个对象，那么所有组件实例将共享相同的数据对象。这样一来，当一个组件实例修改了数据时，所有其他实例的数据也会被更改，这是我们不希望看到的。使用函数可以确保每次实例化组件时，都会返回一个全新的数据对象副本，从而保证组件实例之间的数据隔离。

在 Vue 的根实例中，这个限制并不适用。根实例只会被创建一次，因此不需要担心多个实例共享相同的数据对象。然而，将 `data` 作为函数返回对象的方式也是可以在根实例中使用的，这样可以保持一致性。但在实际开发中，为了简便，我们通常在根实例中直接使用对象作为 `data`。

### vue2中选项props、data、method、computed、watch的优先级？

在 Vue2 中，props、data、methods、computed 和 watch 这些选项都扮演着不同的角色，因此它们之间没有严格的优先级顺序。然而，我们可以从两个方面来理解这些选项的关系和执行顺序：数据初始化和数据更新。

1. 数据初始化：

在 Vue 组件实例创建和挂载的过程中，各选项的执行顺序如下：

a) props：父组件向子组件传递数据。当子组件实例创建时，首先从父组件接收 props 数据。

b) data：组件的本地状态数据。在接收 props 数据后，组件会初始化 data。

c) methods：用于在组件中定义各种方法。methods 选项在 data 初始化之后定义，这样可以在其他地方（如计算属性或侦听器）调用这些方法。

d) computed：计算属性是基于其他数据（如 props、data、methods 等）计算而来的。因为计算属性依赖于其他数据，所以它们在 data 和 methods 初始化之后计算。

e) watch：侦听器用于观察和响应 Vue 实例上的数据变化。watch 选项在数据初始化完成之后设置，以便在数据发生变化时触发回调函数。

2. 数据更新：

当组件的数据发生变化时，Vue 会根据依赖关系来更新 computed 和 watch。在这种情况下，它们的执行顺序如下：

a) 数据变化：当 props 或 data 中的数据发生变化时，会触发更新。

b) computed：当依赖的数据发生变化时，计算属性会重新计算。由于计算属性具有缓存机制，只有当依赖数据发生变化时，它们才会重新计算。

c) watch：当被观察的数据发生变化时，侦听器会触发相应的回调函数。与计算属性不同，侦听器没有缓存机制，每次数据变化都会触发回调函数。

总结：在 Vue2 中，props、data、methods、computed 和 watch 这些选项都扮演着不同的角色。在组件实例创建和挂载的过程中，各选项按照特定顺序执行。在数据更新时，computed 和 watch 根据依赖关系来触发更新。

### 谈谈你对vue2以及vue3双向绑定原理的理解

Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。Vue 具有响应式数据绑定功能，使得数据和 DOM 之间能够双向绑定。Vue2 和 Vue3 的双向绑定原理有所不同，接下来分别介绍它们的实现原理：

1. Vue2 双向绑定原理：

Vue2 使用的双向绑定核心原理是基于数据劫持和发布-订阅模式。Vue2 的双向绑定分为两部分：数据劫持（通过 Object.defineProperty()） 和 Watcher 类。

- 数据劫持：Vue2 使用 Object.defineProperty() 方法劫持数据对象的属性，对属性的 getter 和 setter 进行拦截。当属性值被访问或修改时，会触发 getter 和 setter，实现数据的响应式。
- Watcher 类：Watcher 用于订阅数据变化和更新视图。每个数据属性都有一个 Watcher 实例，当数据发生变化时，触发 setter，并通知 Watcher，然后 Watcher 会调用其更新函数，将新值应用到 DOM。

2. Vue3 双向绑定原理：

Vue3 的双向绑定原理基于 Proxy 和 Reflect。Vue3 使用 Proxy 对象对数据进行代理，而不是像 Vue2 那样使用 Object.defineProperty() 进行数据劫持。

- Proxy：Vue3 使用 Proxy 对象创建一个数据代理，当代理对象的属性被访问或修改时，会触发 Proxy 的拦截器函数（如 get 或 set），实现数据的响应式。
- Reflect：Vue3 使用 Reflect API 进行对象操作，如获取属性值、设置属性值等。Reflect API 提供了一种更简洁、安全的方法来操作对象，同时具有更好的性能。

Vue3 相较于 Vue2 的优势：

- Vue3 使用 Proxy 代替 Object.defineProperty()，可以直接监听对象的变化，而不仅仅是属性。这解决了 Vue2 中无法监听数组变化和对象属性添加的问题。
- Vue3 使用 Proxy 可以提高性能，因为 Proxy 是原生支持的，而 Object.defineProperty() 是基于 JavaScript 层面的劫持。
- Vue3 代码结构更简洁，易于维护。

总结：Vue2 和 Vue3 的双向绑定原理都是基于数据劫持，但它们使用的技术实现方式不同。Vue2 使用 Object.defineProperty() 和发布-订阅模式，而 Vue3 使用 Proxy 和 Reflect。Vue3 相对于 Vue2 在性能和功能上有所改进。

### Vue中响应式属性、dep以及watcher之间的关系是什么？

Vue.js 中的响应式系统是其核心特性之一，该系统使得 Vue.js 可以在数据改变时更新视图。这个响应式系统主要包含以下三个核心概念：响应式属性、Dep（依赖）以及 Watcher（观察者）。

1. **响应式属性**：在 Vue.js 中，当我们在 data 对象中定义属性时，Vue.js 会将这些属性转化为 getter/setter 形式，这样就实现了响应式。当我们访问或修改一个属性时，getter/setter 就会被调用。
2. **Dep（依赖）**：Dep 可以看作是一个订阅器，它维护着一个 Watcher 列表，当响应式属性被修改时，Dep 会通知它的所有 Watcher，告诉它们数据已经被更新。Dep 在 getter 中收集 Watcher，在 setter 中触发 Watcher 更新。
3. **Watcher（观察者）**：Watcher 是一个观察者对象，它观察某个响应式属性的变化。当响应式属性的 getter 被访问时，Dep 会将当前的 Watcher 添加到自己的订阅者列表中。当响应式属性被修改时，Dep 会通知 Watcher，然后 Watcher 会执行相应的操作（比如更新视图）。

所以，**响应式属性、Dep 和 Watcher 之间的关系**可以这样理解：响应式属性是被观察的目标，Dep 是观察者（Watcher）和目标（响应式属性）之间的桥梁，它负责添加观察者，也负责在目标发生改变时通知观察者。Watcher 则是观察者，它观察响应式属性的变化，当变化发生时，执行相应的操作。

总的来说，这种关系构成了 Vue.js 的响应式系统，使得 Vue.js 可以在数据改变时自动更新视图。

### Vue中，Watcher有哪些类型？

在 Vue.js 中，Watcher（观察者）是响应式系统的重要组成部分，它用于在某个数据发生变化时执行特定的回调函数。在 Vue.js 中，主要有以下几种类型的 Watcher：

1. **渲染 Watcher**：每一个组件实例都有对应的一个渲染 Watcher。当组件的数据变化时，渲染 Watcher 会被触发，进而重新渲染组件。这种类型的 Watcher 是 Vue 内部自动创建的，用于保证组件视图的更新。
2. **用户 Watcher**：这是用户通过 `vm.$watch()` API 或组件的 `watch` 选项创建的 Watcher。用户可以通过这种方式来监听某个数据的变化，并在变化时执行特定的回调函数。
3. **计算属性 Watcher**：这种类型的 Watcher 用于计算属性（computed property）。当计算属性所依赖的数据发生变化时，计算属性 Watcher 会被触发，从而重新计算属性的值。

以上就是 Vue.js 中主要的几种 Watcher。这些 Watcher 都在 Vue 的响应式系统中起到了关键的作用，使得 Vue 可以在数据改变时自动更新视图。

### vue2和vue3分别的父组件和子组件的渲染时机？

**vue2:**

- **初始化渲染时机**

  父beforeCreate => 父created => 父beforeMount => 子beforeCreate => 子created => 子beforeMount => 子mounted => 父mounted
- **更新过程**

  父beforeUpdate => 子beforeUpdate => 子updated => 父updated
- **销毁过程**

  父beforeDestory => 子beforeDestory => 子destoryed => 父destoryed

**vue3:**

- **初始化渲染时机**

  父setup => 父beforeCreate => 父created => 父beforeMount => 子setup => 子beforeCreate => 子created => 子beforeMount => 子mounted => 父mounted
- **更新过程**

  父beforeUpdate => 子beforeUpdate => 子updated => 父updated
- **销毁过程**

  父beforeUnmount => 子beforeUnmount => 子unmounted => 父unmounted

### 谈谈你对vue2以及vue3整个渲染过程的理解

Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。Vue2 和 Vue3 的渲染过程有所不同，下面分别介绍它们的渲染过程：

1. Vue2 渲染过程：

Vue2 的渲染过程主要包括以下步骤：

1. 解析模板：Vue2 使用基于 HTML 的模板语法。Vue 会将模板解析成抽象语法树（AST）。
2. 生成渲染函数：Vue2 会将 AST 转换为渲染函数（render function）。渲染函数是一个纯 JavaScript 函数，用于创建和更新虚拟 DOM 树。
3. 响应式数据：Vue2 使用 Object.defineProperty() 为数据对象创建 getter 和 setter。当数据发生变化时，会触发 setter，并通知对应的 Watcher 实例。
4. 创建 Watcher：对于每个数据属性，Vue2 会创建一个 Watcher 实例。Watcher 负责订阅数据变化，并在数据更新时调用渲染函数。
5. 首次渲染：在实例创建时，Vue2 会调用渲染函数生成虚拟 DOM 树，并将其映射到实际的 DOM 节点上。
6. 更新：当数据发生变化时，Vue2 会重新调用渲染函数生成新的虚拟 DOM 树。然后，使用虚拟 DOM 的 diff 算法（称为 patching）找出变化的部分，并更新实际的 DOM。

Vue3 渲染过程：

Vue3 的渲染过程与 Vue2 类似，但有一些关键的改进和优化。以下是 Vue3 渲染过程的主要步骤：

1. 解析模板：Vue3 同样使用基于 HTML 的模板语法，并将模板解析成抽象语法树（AST）。
2. 生成渲染函数：Vue3 会将 AST 转换为渲染函数。Vue3 的渲染函数使用了一种新的编译策略，称为 "优化模式"，可以在编译阶段静态地分析模板中的动态绑定，并生成更高效的代码。
3. 响应式数据：Vue3 使用 Proxy 对象代替 Object.defineProperty()，创建数据的响应式代理。这提供了更好的性能和更广泛的数据监听能力。
4. 创建 Watcher：Vue3 中仍然使用 Watcher 实例订阅数据变化，并在数据更新时调用渲染函数。但 Vue3 的 Watcher 实现有所优化，减少了不必要的计算和渲染。
5. 首次渲染：与 Vue2 类似，Vue3 会在实例创建时调用渲染函数生成虚拟 DOM 树，并将其映射到实际的 DOM节点上。
6. 更新：当数据发生变化时，Vue3 会重新调用渲染函数生成新的虚拟 DOM 树。然后，使用优化后的虚拟 DOM diff 算法找出变化的部分，并更新实际的 DOM。Vue3 的 diff 算法经过优化，可以更快地找到差异并更新 DOM。
7. 组合式 API：Vue3 引入了组合式 API，它是一种更灵活的组织和复用组件逻辑的方式。使用组合式 API，可以更容易地将代码分解为独立的、可重用的函数。这对于更大型的项目和更复杂的组件逻辑非常有用。

总结：Vue2 和 Vue3 的渲染过程有很多相似之处，如解析模板、生成渲染函数、响应式数据、创建 Watcher、首次渲染和更新。然而，Vue3 在性能、响应式系统和组件逻辑复用方面进行了优化和改进，提供了更高效和灵活的渲染过程。

<img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_05_31_BBZDb5.jpg" style="width: 50%" />

### 说下nextTick的原理

Vue 的 `nextTick` 函数是一个非常实用的工具方法，它允许我们在 DOM 更新完成后延迟执行一个回调函数。这在某些情况下非常有用，例如当你需要在数据变化后操作 DOM 元素时。接下来我们来详细了解 `nextTick` 的原理。

Vue 中的数据变化是异步的。当数据发生变化时，Vue 不会立即更新 DOM，而是将更新任务推入一个队列。在同一事件循环中发生的所有数据变化都会被加入到这个队列中。在下一个事件循环（也就是下一个 "tick"）开始时，Vue 会清空队列，并批量执行 DOM 更新。这种机制可以避免不必要的 DOM 更新，从而提高性能。

`nextTick` 的作用就是在这个队列清空并且 DOM 更新完成后，执行我们传给它的回调函数。这样我们可以确保回调函数在 DOM 更新后执行，让我们可以安全地操作已经更新过的 DOM 元素。

为了实现 `nextTick`，Vue 使用了一个任务队列和一种任务调度策略。具体实现取决于浏览器支持的 API。Vue 首选使用 `Promise.then()`、`MutationObserver` 或 `setImmediate` 进行异步调度。如果浏览器不支持这些 API，Vue 会退回到使用 `setTimeout(fn, 0)`。

总结，`nextTick` 的原理是基于 Vue 的异步更新队列和任务调度策略。通过使用 `nextTick`，我们可以在 DOM 更新完成后执行回调函数，确保在操作 DOM 时，数据已经被更新。

### 谈谈你对keep-alive的理解

`keep-alive` 是 Vue 中的一个内置组件，它用于缓存组件的状态以提高性能。当我们在不同组件之间切换时，通常组件会被销毁并重新创建。然而，在某些情况下，我们可能希望保留组件的状态，以避免不必要的重新渲染。这时，我们可以使用 `keep-alive` 组件来实现这个目的。

以下是关于 `keep-alive` 的一些关键点：

1. 缓存组件：将组件包裹在 `keep-alive` 标签内，可以使其状态得到缓存。当组件被切换时，它不会被销毁，而是被缓存起来。当组件重新被激活时，它的状态会被恢复，而不是重新创建。
2. 生命周期钩子：当组件被 `keep-alive` 包裹时，组件的生命周期钩子会发生变化。组件在被激活和停用时，分别触发 `activated` 和 `deactivated` 生命周期钩子。这使得我们可以在这两个钩子函数中执行一些特定的逻辑，如获取数据或重置状态。
3. 包含和排除组件：`keep-alive` 组件提供了 `include` 和 `exclude` 属性，允许我们有选择地缓存特定的组件。我们可以通过组件名称或正则表达式来指定要缓存的组件。
4. 缓存策略：`keep-alive` 还提供了一个 `max` 属性，允许我们设置缓存组件的最大数量。当缓存组件的数量超过这个限制时，最早的组件会被销毁。

总结：`keep-alive` 是 Vue 的内置组件，用于缓存组件状态以提高性能。通过将组件包裹在 `keep-alive` 标签内，我们可以在不同组件之间切换时保留它们的状态。`keep-alive` 还提供了一些属性来控制缓存行为，如包含和排除组件、设置缓存最大数量等。同时，`keep-alive` 影响了组件的生命周期钩子，引入了 `activated` 和 `deactivated` 钩子。

### 讲讲vue组件之间的通信

组件通信有如下分类：

- 父子组件之间的通信
  - `props`/`$emit`。
  - `$parent`/`$children`
  - `ref`
  - `provide`/`inject`
  - `$attrs`/`$listeners` => vue3已移除
  - `$on`/`$emit` => vue3已移除
- 兄弟组件之间的通信
  - `eventBus`
  - `vuex`
- 跨级通信
  - `eventBus`
  - `vuex`
  - `provide`/`inject`
  - `$attrs`/`$listeners`
  - `$on`/`$emit`

这里讲下eventBus，eventBus又称为事件总线，在vue中可以用来作为组件间的沟通桥梁，所有组件公用相同的事件中心，可以向该中心发送事件和监听事件。eventBus的缺点是就是当项目较大时，容易造成难以维护的灾难。

```javascript
// event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()

// Children1.vue
this.$bus.$emit('foo') 

// Children2.vue
this.$bus.$on('foo', this.handle) 
```

### 谈谈你对vue2以及vue3生命周期的理解

Vue 生命周期指的是 Vue 组件从创建到销毁经历的不同阶段。在组件的生命周期中，Vue 提供了一系列生命周期钩子函数，允许我们在特定时刻执行一些自定义逻辑。Vue2 和 Vue3 的生命周期钩子有些许不同，下面分别介绍它们。

1. Vue2 生命周期钩子：

a) beforeCreate：在实例创建之后，数据观测、属性计算等初始化之前触发。

b) created：在实例创建完成后，数据观测、属性计算等已经初始化完毕，但尚未开始 DOM 编译和挂载。

c) beforeMount：在模板编译完成、挂载 DOM 之前触发。此时，虚拟 DOM 已创建，真实 DOM 尚未更新。

d) mounted：在模板编译完成、挂载 DOM 之后触发。此时，真实 DOM 已经更新。

e) beforeUpdate：在数据发生变化，组件重新渲染之前触发。此时，可以获取到旧的 DOM 结构。

f) updated：在数据发生变化，组件重新渲染并更新 DOM 之后触发。此时，可以获取到新的 DOM 结构。

g) beforeDestroy：在实例销毁之前触发。此时，实例仍然完全可用。

h) destroyed：在实例销毁之后触发。此时，实例的所有指令绑定、事件监听器等都已经解除。

1. Vue3 生命周期钩子：

Vue3 的生命周期钩子基本与 Vue2 类似，但有一些命名上的变化。这些变化主要是为了与 Vue3 的组合式 API 保持一致：

a) beforeCreate -> setup：在 Vue3 中，setup 函数取代了 beforeCreate 和 created 生命周期钩子。组件的数据和方法在 setup 函数中定义。

b) created：由于有了 setup 函数，created 生命周期钩子在 Vue3 中不再使用。

c) beforeMount：与 Vue2 中相同。

d) mounted：与 Vue2 中相同。

e) beforeUpdate：与 Vue2 中相同。

f) updated：与 Vue2 中相同。

g) beforeUnmount：Vue3 中将 beforeDestroy 重命名为 beforeUnmount。

h) unmounted：Vue3 中将 destroyed 重命名为 unmounted。

总结：Vue2 和 Vue3 的生命周期钩子基本相似，允许我们在组件的不同阶段执行自定义逻辑。主要区别在于 Vue3 引入了 setup 函数取代了 beforeCreate 和 created 生命周期钩子，并将 beforeDestroy 和 destroyed 重命名为 beforeUnmount 和 unmounted。这些变化使得 Vue3 生命周期钩子与组合式 API 保持一致。

### 什么情况下会创建Watcher(观察者)？什么情况下会创建Dep(依赖容器)对象？

在 Vue.js 中，Watcher 对象和 Dep 对象的创建时机如下：

1. 创建 Watcher 对象的情况：

- 编译模板：在编译模板时，Vue.js 解析模板中的指令（如 v-model、v-bind 等）和插值表达式（如 {{message}}），为每个指令或表达式创建一个 Watcher 对象。这些 Watcher 对象负责监听数据变化并在数据发生变化时更新视图。
- 手动实例化：当需要手动监控某个表达式或计算属性时，可以创建一个 Watcher 对象。例如，在 Vue 组件中，可以使用 vm.$watch() 方法创建一个 Watcher 对象以监听某个数据属性或计算属性的变化。

1. 创建 Dep 对象的情况：

- 响应式数据：当 Vue 组件实例化时，Vue.js 会遍历组件的 data 对象。对于 data 对象中的每个属性，Vue.js 使用 Object.defineProperty() 方法进行劫持。在这个过程中，会为每个属性创建一个 Dep 对象。Dep 对象（依赖容器）负责收集所有与该属性相关的 Watcher 对象（观察者）。当属性被访问时，Dep 会将当前的 Watcher 对象添加到其依赖列表中，实现依赖收集。

总结一下，Watcher 对象主要在编译模板和手动监控表达式或计算属性时创建。Dep 对象主要在 Vue 组件实例化时为 data 对象中的每个属性创建。这两种对象共同构成了 Vue.js 的响应式系统，实现数据与视图之间的双向绑定。

### vue3相比vue2新增了什么？

Vue3 相对于 Vue2 引入了许多新特性和优化，这些变化使得 Vue3 在性能、可扩展性和易用性方面有了很大提升。以下是 Vue3 相比于 Vue2 的主要新增内容：

1. Composition API：Vue3 引入了组合式 API，这是一种新的组件逻辑组织方式，允许更灵活地复用和组合组件逻辑。相比于 Vue2 的选项式 API，组合式 API 更容易让我们在大型项目中管理和维护代码。
2. 更好的性能：Vue3 在性能方面进行了很多优化，包括更小的打包体积、更快的渲染速度以及更高效的组件更新。这些优化使得 Vue3 的性能比 Vue2 更强大。
3. 更小的体积：Vue3 的编译器和运行时都经过了优化，使得打包后的体积更小。此外，Vue3 支持 tree-shaking，可以进一步减小最终构建文件的大小。
4. 更好的 TypeScript 支持：Vue3 的源代码完全使用 TypeScript 重写，因此 Vue3 提供了更好的 TypeScript 支持和类型推导。
5. 新的生命周期钩子和更改：Vue3 为了与组合式 API 保持一致，对生命周期钩子进行了一些重命名，例如 beforeDestroy 变为 beforeUnmount，destroyed 变为 unmounted。同时，Vue3 引入了 setup 函数来代替 beforeCreate 和 created 生命周期钩子。
6. 更强大的响应式系统：Vue3 使用 Proxy 对象重写了响应式系统，解决了 Vue2 中的一些限制（例如，对象属性的动态添加和删除）。新的响应式系统还提供了更好的性能和内存管理。
7. Fragment 和 Teleport：Vue3 支持 Fragment（片段），允许一个组件具有多个根元素。此外，Vue3 引入了 Teleport 组件，可以将子组件渲染到 DOM 中的任意位置，解决了一些特殊场景下的渲染问题。
8. Suspense：Vue3 引入了 Suspense 组件，允许我们在异步组件加载时展示一个 fallback 内容。这使得异步组件的加载和错误处理变得更加简单和优雅。

总结：Vue3 相比于 Vue2 引入了许多新特性和优化，包括组合式 API、更好的性能、更小的体积、更好的 TypeScript 支持、新的生命周期钩子和更改、更强大的响应式系统、Fragment 和 Teleport 组件以及 Suspense 组件。这些变化使得 Vue3 在性能、可扩展性和易用性方面有了很大提升。

### 谈谈你对Vuex以及Pinia的理解，以及它们之间的区别

Vuex 和 Pinia 都是 Vue.js 的状态管理库，它们帮助我们在 Vue 应用中管理和维护共享状态。这两者有一定的相似性，但也存在一些关键的区别。

1. Vuex：

Vuex 是 Vue 官方推荐的状态管理库，适用于 Vue2 和 Vue3。它提供了一种集中式存储来管理应用程序中所有组件的状态。Vuex 的核心概念包括：

- State：存储应用程序的状态数据。
- Getters：从 state 中派生出新的状态，类似于计算属性。
- Mutations：用于更改 state 的同步方法。
- Actions：用于执行异步操作（例如 API 调用）并触发 mutations。

Vuex 遵循严格的单向数据流，确保状态更改的可预测性。同时，Vuex 还提供了一些开发者工具，帮助我们在开发过程中跟踪和调试状态更改。

2. Pinia：

Pinia 是一个轻量级的状态管理库，专为 Vue3 设计。它充分利用了 Vue3 的组合式 API 和响应式系统，使得状态管理更加简洁和灵活。Pinia 的核心概念包括：

- Store：存储应用程序的状态数据和相关方法。
- State：用于存储状态的响应式对象。
- Actions：用于执行异步操作和更改 state。

Pinia 的使用方法与 Vuex 类似，但其 API 更简洁，易于学习和使用。此外，Pinia 同样支持开发者工具，方便我们跟踪和调试状态更改。

3. 区别：

- 适用范围：Vuex 适用于 Vue2 和 Vue3，而 Pinia 专为 Vue3 设计。
- API 设计：Pinia 的 API 更简洁，易于学习和使用。它充分利用了 Vue3 的组合式 API 和响应式系统。
- 状态更新：Vuex 通过 mutations 和 actions 分别处理同步和异步状态更新，而 Pinia 将这两者合并为 actions。
- 体积：Pinia 是一个轻量级库，相比于 Vuex 有更小的体积。
- 生命周期：Pinia store 支持更好的生命周期管理，如 onBeforeMount、onMounted 等。

总结：Vuex 和 Pinia 都是 Vue 的状态管理库，用于管理和维护共享状态。它们之间的主要区别在于适用范围、API 设计、状态更新方式、体积和生命周期管理。对于 Vue3 项目，Pinia 可能是一个更轻量、更简洁的选择，但 Vuex 作为官方推荐的库，在稳定性和生态方面仍具有优势。

### 谈谈你对vue2以及vue3中diff算法的理解

Vue 的 diff 算法是用于在虚拟 DOM（Virtual DOM）更新过程中比较新旧两个虚拟节点树的差异，从而仅对有差异的部分进行真实 DOM 的更新，以提高性能。Vue2 和 Vue3 中的 diff 算法都基于 Snabbdom 库，但在 Vue3 中，diff 算法进行了一些优化，使得性能更高。

以下是对 Vue2 和 Vue3 中 diff 算法的理解：

1. Vue2 diff 算法：

Vue2 的 diff 算法主要通过同级节点之间的比较来进行。在对比新旧虚拟节点时，它采用**双端比较**的策略。首先分别比较新旧虚拟节点树的头部和尾部节点，通过四种可能的情况进行节点的移动、删除和创建。具体步骤如下：

- 如果新旧头部节点相同，将两个头部节点向后移动。
- 如果新旧尾部节点相同，将两个尾部节点向前移动。
- 如果旧头部节点和新尾部节点相同，将旧头部节点移动到尾部。
- 如果旧尾部节点和新头部节点相同，将旧尾部节点移动到头部。

如果以上四种情况都不满足，Vue2 会创建一个新的 key 到 index 的映射表，然后遍历新的子节点，查找旧节点中是否存在相同的 key。如果找到相同的 key，将旧节点移动到正确的位置。否则，创建一个新节点并插入到正确的位置。最后，删除旧节点中未匹配的节点。

2. Vue3 diff 算法：

Vue3 的 diff 算法在 Vue2 的基础上进行了优化。Vue3 利用**了静态节点和动态节点**的概念，通过对静态节点进行跳过，减少了不必要的比较。此外，Vue3 对于静态节点和动态节点的处理也进行了优化。在处理动态节点时，Vue3 使用了一个名为 `lis`（Longest Increasing Subsequence，最长递增子序列）的算法，通过查找最长递增子序列，找到需要移动的最少节点数量，从而减少节点移动操作，提高性能。

总结：Vue 的 diff 算法用于比较新旧虚拟节点树的差异，从而实现高效的 DOM 更新。Vue2 和 Vue3 的 diff 算法都基于 Snabbdom 库，采用双端比较策略。Vue3 在 Vue2 的基础上进行了优化，引入了静态节点和动态节点的概念，通过跳过静态节点的比较和使用 lis 算法减少节点移动操作，提高了性能。

尽管 Vue3 的 diff 算法相较于 Vue2 进行了优化，但在实际应用中，性能提升的程度还取决于组件的结构和数据变化。以下是一些建议，可以帮助我们在使用 Vue 时充分利用 diff 算法的优势：

1. 使用 key：为列表中的每个节点分配唯一的 key，可以帮助 diff 算法更快地找到相应的节点，从而提高性能。尽量避免使用不稳定的值（例如随机数或索引）作为 key。
2. 避免不必要的节点更新：尽量避免在没有实际更改的情况下触发组件的重新渲染。可以使用计算属性、watchers 和 Vue 的性能优化功能（如 `shouldComponentUpdate` 和 `keep-alive`）来减少不必要的渲染。
3. 合理划分组件：将大型组件拆分为更小的子组件，以便更好地控制组件的更新。当某个子组件的状态发生变化时，只需更新该子组件，而不会影响其他子组件。
4. 优化动态节点：在 Vue3 中，利用静态节点和动态节点的概念，确保动态节点的数量和位置合理。这可以帮助减少 diff 算法的计算量，提高性能。

通过了解 Vue2 和 Vue3 中的 diff 算法原理，并结合实际项目中的组件结构和数据变化情况，我们可以更好地利用 Vue 的性能优势，构建高效的前端应用。

### 为什么虚拟DOM会提高性能？

虚拟 DOM（Virtual DOM）是一种**在内存中表示真实 DOM 的数据结构**。它允许我们在内存中对 DOM 进行操作，而不是直接操作真实的 DOM。虚拟 DOM 的主要优势是性能提升，原因如下：

1. 减少 DOM 操作次数：真实 DOM 的操作（如创建、更新、删除元素）通常比内存操作更耗时。虚拟 DOM 允许我们在内存中进行大量操作，然后一次性将这些操作应用到真实 DOM 上，减少了对真实 DOM 的操作次数。
2. 最小化更新范围：虚拟 DOM 结合 diff 算法，可以找出新旧虚拟 DOM 之间的差异，从而仅对有差异的部分进行真实 DOM 的更新。这可以减少不必要的 DOM 操作，提高性能。
3. 批量更新：当有多个更改需要应用到真实 DOM 时，虚拟 DOM 可以将这些更改合并为一次更新。这有助于避免因多次操作导致的布局抖动（Layout Thrashing）和重绘，从而提高性能。
4. 更好的跨平台兼容性：虚拟 DOM 不仅可以表示 Web 页面中的 DOM，还可以表示其他平台的 UI（例如移动应用或桌面应用）。这意味着使用虚拟 DOM 的框架（如 Vue 或 React）可以更容易地实现跨平台应用程序，而不必为每个平台编写特定的代码。

虚拟 DOM 的性能提升并非绝对，它主要适用于大型应用和频繁更新的场景。对于简单的应用或更新较少的情况，虚拟 DOM 可能带来一定的开销。然而，在许多情况下，虚拟 DOM 提供了一种有效的方法来减少真实 DOM 操作，从而提高应用程序的性能。

### react生命周期有哪些？

React 的生命周期方法可分为三个主要阶段：挂载阶段（Mounting）、更新阶段（Updating）和卸载阶段（Unmounting）。以下是 React 的类组件生命周期方法。需要注意的是，React 16.3 版本后引入了新的生命周期方法，废弃了一些旧的方法。

1. 挂载阶段（Mounting）： 这个阶段涉及到组件在 DOM 中创建和插入的过程。

- constructor：构造函数，用于初始化组件的状态（state）和绑定事件处理器。
- static getDerivedStateFromProps：在组件实例创建后和渲染前调用。根据传入的 props 计算出新的状态，返回一个用于更新状态的对象。这是一个静态方法，不能在其中使用 `this`。
- render：用于创建虚拟 DOM，并返回要渲染的 JSX 结构。这是一个纯函数，不应在其中执行任何副作用操作。
- componentDidMount：在组件挂载到 DOM 后立即调用。常用于触发 AJAX 请求、DOM 操作、添加事件监听等副作用操作。

2. 更新阶段（Updating）： 当组件的状态（state）或属性（props）发生变化时，组件将重新渲染。这个阶段涉及到组件的更新过程。

- static getDerivedStateFromProps：与挂载阶段中的相同，当组件接收到新的属性时调用。
- shouldComponentUpdate：在重新渲染之前调用，可以根据变化的状态和属性来决定是否需要重新渲染。返回一个布尔值，如果为 false，则阻止组件更新。
- render：与挂载阶段中的相同，重新渲染组件。
- getSnapshotBeforeUpdate：在 DOM 更新之前获取快照，用于在 componentDidUpdate 中比较新旧 DOM。返回一个值或 null，作为 componentDidUpdate 的第三个参数。
- componentDidUpdate：在组件更新并重新渲染后调用。常用于触发 AJAX 请求、DOM 操作、更新事件监听等副作用操作。

3. 卸载阶段（Unmounting）： 当组件从 DOM 中移除时，进入卸载阶段。

- componentWillUnmount：在组件卸载前调用。用于清理组件产生的副作用，如取消 AJAX 请求、移除事件监听等。

需要注意的是，React 16.8 引入了 Hooks，它允许在函数组件中使用状态和生命周期特性。使用 `useState`、`useEffect` 和其他 Hooks 可以在函数组件中实现类似的生命周期行为。

### 谈谈你对受控组件和非受控组件的理解

在React中，表单元素的类型可以被划分为受控组件和非受控组件。

**受控组件：**

受控组件是指表单元素（如`<input>`，`<textarea>`，`<select>`等）的值被React的state控制的组件。换句话说，对于一个受控组件，其输入的值总是由React的state驱动的。我们通过设置组件的状态，并在每次用户交互时（如输入文本，选择下拉选项等）更新这个状态，来控制这个组件的值。

例如，以下是一个受控组件的例子：

```jsx
class ControlledForm extends React.Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />;
  }
}
```

受控组件通常有更好的灵活性，因为你可以直接控制输入的内容，例如进行格式化、验证等。

**非受控组件：**

非受控组件则不通过state来控制输入的值。相反，它们使用原生的DOM API来获取或修改表单元素的值。通常，我们使用React的`ref`来获取DOM元素，然后从该元素上读取或设置值。

以下是一个非受控组件的例子：

```jsx
class UncontrolledForm extends React.Component {
  myInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.myInput.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.myInput} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

非受控组件的优点是它们更简单，更接近传统的HTML形式，但它们通常不能提供受控组件那样的灵活性。你需要使用DOM API来获取或设置值，这可能使得代码更难理解和维护。

在大多数情况下，推荐使用受控组件，因为它们使得应用的状态更可预测，并且更易于实现复杂的功能，如实时验证和输入限制。然而，在某些情况下，非受控组件可能更简单或更方便，例如当处理大量输入和动态输入时。

### 讲讲react组件之间的通信

React 组件之间的通信主要依赖于属性（props）和上下文（context）。以下是 React 组件间通信的几种常见方式：

1. 父组件向子组件传递数据（Props）： 父组件通过属性（props）将数据传递给子组件。子组件通过 `this.props`（类组件）或函数参数（函数组件）访问传递的数据。这是 React 中最常见的通信方式。

   ```jsx
   function ChildComponent(props) {
     return <div>{props.message}</div>;
   }

   class ParentComponent extends React.Component {
     render() {
       const message = "Hello from parent!";
       return <ChildComponent message={message} />;
     }
   }
   ```
2. 子组件向父组件传递数据（回调函数）： 子组件不能直接修改父组件的状态。为了让子组件向父组件传递数据，父组件可以将一个回调函数作为属性传递给子组件。子组件调用该回调函数时，可以将数据作为参数传递，从而实现向父组件传递数据。

   ```jsx
   function ChildComponent(props) {
     return (
       <button onClick={() => props.handleMessage("Hello from child!")}>
         Send Message
       </button>
     );
   }

   class ParentComponent extends React.Component {
     handleMessage(message) {
       console.log(message);
     }

     render() {
       return <ChildComponent handleMessage={this.handleMessage.bind(this)} />;
     }
   }
   ```
3. 兄弟组件间通信： 兄弟组件间的通信需要依赖于它们共同的父组件。父组件可以通过状态（state）和回调函数将兄弟组件间的数据传递。

   ```jsx
   class ParentComponent extends React.Component {
     state = {
       message: "",
     };

     handleMessage(message) {
       this.setState({ message });
     }

     render() {
       return (
         <div>
           <ChildComponent1 handleMessage={this.handleMessage.bind(this)} />
           <ChildComponent2 message={this.state.message} />
         </div>
       );
     }
   }
   ```
4. 使用上下文（Context）： 当多层嵌套的组件需要通信时，逐层传递属性可能变得繁琐。这时可以使用 React 的上下文（Context）API。Context 提供了一种在组件树中共享数据的方式，而无需显式地传递属性。

   ```jsx
   const MessageContext = React.createContext();

   class ParentComponent extends React.Component {
     state = {
       message: "Hello from context!",
     };

     render() {
       return (
         <MessageContext.Provider value={this.state.message}>
           <ChildComponent />
         </MessageContext.Provider>
       );
     }
   }

   function ChildComponent() {
     return (
       <MessageContext.Consumer>
         {(message) => <div>{message}</div>}
       </MessageContext.Consumer>
     );
   }
   ```
5. 使用状态管理库（如 Redux）： 在大型应用程序中，组件之间的通信可能变得复杂。使用状态管理库（如 Redux）可以集中管理应用程序的状态，简化组件间的通信。组件可以通过连接到状态管理库（如 Redux）来访问和更新全局状态。

   使用 Redux 管理状态可以让你更好地处理大型应用程序中的组件间通信和共享状态。在实际项目中，你可能还需要使用一些额外的工具和技术，例如 Redux Toolkit、Redux Thunk 或 Redux Saga。

### 谈谈你对纯函数的理解

在React中，纯函数指的是给定相同的输入，始终返回相同的输出，而且没有副作用的函数。它们不会改变其输入，也不会影响到系统的任何其他部分，例如修改全局变量、修改传入的对象等。

在React中，纯函数特别重要，因为当父组件的状态或属性改变时，React会重新渲染整个组件树。如果组件内部存在副作用，那么每次渲染时都会重新触发这些副作用，导致性能下降。而纯函数则不会有这个问题，它只会在必要的情况下被调用，从而优化了应用程序的性能。

### 为什么useState不推荐放在if判断里面

因为React依赖于hook调用的顺序和频率始终保持不变，以正确地跟踪和关联状态和副作用。

当在组件渲染过程中调用useState，React会保留这个状态的值，直到下一次渲染。React保持一个内部的"记忆"，通过这个记忆，它知道在每次渲染时，状态值应该对应哪个useState调用。如果在if语句中调用useState，那么hook的调用可能会在不同的渲染中跳过或者重复，导致React无法正确地追踪状态值。

为了遵循 Hooks 的使用规则，确保在函数式组件的顶层调用 `useState`。如果需要根据条件判断来决定是否使用状态，可以考虑将组件拆分成多个子组件，并在相应的子组件中使用 `useState`。这样可以保持 Hooks 的调用顺序一致，同时满足组件的逻辑需求。

### 谈谈你对函数式组件和类组件的理解

在React中，有两种主要的组件类型：函数式组件（Functional Component）和类组件（Class Component）。下面分别介绍它们的特点和区别。

函数式组件：

1. 通过定义一个纯JavaScript函数来创建的，接收props作为参数并返回React元素。
2. 在React 16.8之前，函数式组件仅支持接收props，不支持state和生命周期方法。
3. 自React 16.8引入Hooks后，函数式组件可以使用`useState`和`useEffect`等Hooks来实现状态管理和生命周期方法的功能。
4. 函数式组件通常更简洁，易于阅读和测试。
5. 在性能方面，由于没有生命周期方法和实例化过程，函数式组件在某些情况下可能比类组件更快。

类组件：

1. 是通过定义一个继承自`React.Component`的JavaScript类来创建的，该类包含一个`render`方法，接收props和state作为输入，并返回React元素。
2. 支持state和生命周期方法，如`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`等。
3. 需要通过`this`关键字来访问props和state。
4. 类组件通常相对复杂，可能难以理解和测试。
5. 在性能方面，由于有生命周期方法和实例化过程，类组件在某些情况下可能比函数式组件稍慢。

两者之间的主要区别：

1. 定义方式：函数式组件是纯函数，而类组件是继承自`React.Component`的类。
2. 状态管理：在React 16.8之前，只有类组件可以使用state。自React 16.8引入Hooks后，函数式组件也可以使用`useState`来管理状态。
3. 生命周期方法：在React 16.8之前，只有类组件支持生命周期方法。自React 16.8引入Hooks后，函数式组件可以使用`useEffect`等Hooks来实现生命周期方法的功能。
4. 语法和结构：函数式组件通常更简洁，而类组件可能相对复杂。
5. 性能：由于没有生命周期方法和实例化过程，函数式组件在某些情况下可能比类组件更快。

总的来说，随着React Hooks的引入，函数式组件的功能已经基本与类组件相当。在实际开发中，建议优先使用函数式组件，以保持代码简洁和易于维护。当然，在一些特定场景下，例如需要使用到生命周期方法或者需要访问组件实例（如使用refs）时，类组件仍然具有一定的优势。

### 在React中元素和组件有什么区别？

React中的元素和组件是两个非常核心的概念，理解它们的区别对于理解React非常重要。以下是我对这两者的理解：

1. **React元素**：React元素是描述了你在屏幕上想看到的内容的普通对象。元素包含了组件应该渲染什么的信息，你可以将它们看作是DOM节点或者组件的“快照”。React元素是不可变的，一旦创建，你就不能改变它的子元素或属性。一个元素就像一帧电影——它代表了某一特定的时间点的UI。
2. **React组件**：组件则可以视为函数或类，它们接受输入（即"props"），并返回React元素树，描述屏幕上应该显示什么。组件使你可以将UI拆分成独立的、可重用的部分，你可以独立地考虑每个部分。组件可以是React内置的组件，如`<div />`，也可以是自定义的组件，如`<MyComponent />`。

简单来说，元素是你在代码中看到的，它描述了你想在屏幕上看到什么。而组件则是函数或者类，它决定了屏幕上应该展示什么。组件可以接受参数（props）并返回React元素，也可以包含自己的状态。因此，你可以说组件是动态的——它们描述了如何将输入（props和状态）转换为UI输出。

### 谈谈你对React合成事件的理解

React 的合成事件系统（Synthetic Event）是 React 对原生浏览器事件进行的一层封装，主要是为了保证在所有浏览器中事件的行为是一致的，解决了浏览器之间对事件处理的差异问题。

以下是我对React合成事件的一些理解：

1. **跨浏览器的一致性**：不同的浏览器可能有不同的事件模型，对同一事件可能有不同的行为。React合成事件为所有的事件提供了一套统一的接口，保证了在所有浏览器中事件行为的一致性。例如，所有的React事件处理函数都会接收到一个合成事件对象，你可以通过这个对象的`event.preventDefault()`和`event.stopPropagation()`等方法来控制事件的行为。
2. **事件委派**：React 使用事件委派来提高性能。在 React 中，不是直接把事件处理函数绑定到真实的节点上，而是所有的事件都被绑定到文档的根节点上。当事件发生并冒泡到根节点时，React 会根据事件的信息找到对应的组件并执行相应的事件处理函数。
3. **池化**：React为了提高性能，会复用合成事件对象。事件回调被调用后，所有的事件属性都会被清空并放入事件池中。这就意味着你无法异步访问事件对象。如果你需要异步访问事件对象，你必须调用`event.persist()`来从池中移除合成事件对象，这样React就不会清空这个对象的属性。
4. **合成事件和原生事件的交互**：虽然React事件被封装在合成事件中，但你仍然可以通过`event.nativeEvent`访问到浏览器的原生事件。
5. **完全的事件支持**：React合成事件提供了对所有常见的DOM事件的支持，包括鼠标、键盘、剪贴板、触摸等事件。

总的来说，React的合成事件系统提供了一种处理浏览器事件的高效、一致且跨浏览器的方式，它是React中一项非常重要的特性。

### 请解释一下React Fiber是什么，以及它的主要作用和优势

React Fiber 是 React 16 中新的协调引擎或者说是重新实现的堆栈，它主要**解决在大型应用中由于大量的更新导致的性能问题**。Fiber 的目标是增强React在动画、布局和手势等领域的适应性，以及在不牺牲应用响应能力的前提下，使其具有更好的可扩展性。

主要的改进和优势包括：

1. **增量渲染（Incremental Rendering）：** 这是Fiber最大的改进。之前React的 reconciler（协调器） 是同步的，这意味着一旦开始就必须完成整个渲染树。相比之下，Fiber引入了增量渲染，它**将工作分割成多个小任务并将其在浏览器主线程空闲时进行**。这就意味着React不会阻塞主线程太长时间，保持应用更流畅。
2. **能够暂停、终止、重用或者重启渲染工作：** 这是通过引入了一个新的数据结构Fiber，来跟踪组件的状态以及描述工作过程的。
3. **优先级处理：** Fiber 引入了任务优先级的概念。不同类型的更新可以有不同的优先级，使得一些高优先级的任务（例如动画和手势）能够打断低优先级的任务（如数据同步）的执行，这样可以保证用户界面的流畅性。
4. **并发和错误边界处理：** Fiber的架构为React的并发模式和错误边界提供了基础。这使得在未来React可以在异步渲染和错误处理等方面有更好的发展。

这就是React Fiber的基本概念和主要优势。然而，大多数开发者可能并不需要直接与Fiber接触，因为它是React内部的实现细节，React的公共API在引入Fiber后并没有显著改变。但是理解Fiber的工作原理，可以帮助我们理解React如何处理更新，以及如何提高性能。

### 请描述一下React的Reconciliation（调和）和Diffing算法

React的调和（Reconciliation）和Diffing算法是React在更新UI时决定什么需要改变的核心技术。

**调和（Reconciliation）**

调和是React用来通过比较新旧两个虚拟DOM树，确定要进行哪些更新的过程。当组件的state或props发生变化时，React会创建一个新的虚拟DOM树，并将其与旧的虚拟DOM树进行比较。这就是调和过程。

**Diffing算法**

Diffing算法是调和过程的一部分，用于确定具体要对DOM做出哪些修改。React在两棵树间进行diffing时，首先比较两棵树的根节点。如果根节点的类型不同，React会销毁旧的树并构建一个全新的树。如果根节点的类型相同，React会递归地对子节点进行diffing。

React使用两个假设来优化这个过程：

1. 不同类型的元素会产生不同类型的树。例如，`<a>`元素会产生与`<img>`元素不同的树。
2. 开发者可以通过`key` prop来指示哪些子元素在不同的渲染下能保持稳定。

**React Fiber**

需要注意的是，从React 16（Fiber架构）开始，React的调和过程变得更加复杂。Fiber引入了能够分割渲染工作的新算法，使得React能够根据优先级在渲染过程中暂停和继续渲染工作，从而提高了大型应用的性能。

以上就是关于React的调和（Reconciliation）和Diffing算法的基本概述，实际上这个过程包含的细节和优化要复杂得多。

### 怎样在React应用中实现Server-Side Rendering(SSR)？

Server-Side Rendering (SSR) 指的是将应用在服务器端渲染成HTML字符串，然后发送到客户端的技术。这样做的好处是首屏加载更快，对SEO更友好。

在React中实现SSR主要通过以下步骤：

1. 使用 `ReactDOMServer.renderToString()` 方法将React组件转换成HTML字符串。这个方法会渲染React元素到其初始HTML。React返回的HTML将在浏览器中加载，然后React将连接（hydrate）到这些标记，使其成为完全交互式的。

   示例代码如下：

   ```jsx
   import { renderToString } from 'react-dom/server';
   const html = renderToString(<App />);
   ```
2. 将生成的HTML字符串插入服务器的模板中，然后发送给客户端。
3. 客户端收到服务器返回的HTML并加载到浏览器中，同时也会加载React代码，React会在客户端“接管”（hydrate）应用。
4. 为了避免客户端在接管应用时重新获取数据和重新渲染，我们需要在服务器端将数据序列化并嵌入到页面中，然后在客户端将数据反序列化并提供给React应用。

实现SSR需要处理许多细节，包括路由、数据预加载、代码分割、CSS管理等。针对这些问题，有一些库（例如Next.js）提供了开箱即用的解决方案。

### 请解释一下Higher Order Components(HOC)和Render Props的工作原理。

高阶组件（HOC）是接收一个组件并返回一个新组件的函数。HOC在React中常用于代码复用，逻辑抽象和渲染劫持。HOC不会修改接收的组件，也不会使用继承来复制它的行为。相反，HOC通过组合来实现功能。它是纯函数，无副作用。

例如，下面这个`withLoader`就是一个HOC，它显示一个加载中状态，直到WrappedComponent获取到所需数据：

```jsx
function withLoader(WrappedComponent) {
    return class extends React.Component {
        render() {
            if (this.props.isLoading) {
                return <div>Loading...</div>;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
}
```

**Render Props**

Render Props是一个在React组件中用于共享代码的简单技术。更具体的说，一个Render Props是一个函数，这个函数返回一个React元素并由我们的组件执行。

例如，下面这个`DataLoader`组件使用Render Props模式。它获取数据并使用一个函数作为子元素（children prop）来渲染结果：

```jsx
class DataLoader extends React.Component {
    state = { data: null };

    componentDidMount() {
        fetchData(this.props.url).then(data => this.setState({ data }));
    }

    render() {
        return this.props.children(this.state.data);
    }
}
```

使用该组件的方式如下：

```jsx
<DataLoader url="/api/data">
    {data => (
        <div>
            {/* Render the data */}
        </div>
    )}
</DataLoader>
```

这两种模式在许多情况下可以互换使用，但它们各有优点。HOC适合用于抽象和操作props和state，而Render Props更适合用于动态决定要渲染什么。

### react和vue在列表渲染时都需要提供key，请问key有什么作用？

在 React 和 Vue 中，当你使用列表渲染时，需要为每个列表项提供一个唯一的 key。key 的作用主要有两点：

1. 提高性能：

在列表渲染时，当列表中的元素发生变化（例如添加、删除或重新排序）时，React 和 Vue 都使用 diff 算法来比较新旧虚拟 DOM 树。通过为列表项分配唯一的 key，框架可以更快地识别和追踪每个元素的变化。这样，在列表更新时，只需重新渲染有所变化的元素，而不是整个列表，从而提高渲染性能。

2. 保持组件状态：

在 React 和 Vue 中，组件实例的状态（state）和列表项是相关联的。如果列表项没有分配唯一的 key，框架将很难正确追踪组件实例与列表项之间的关系。这可能导致组件状态在更新时出现错误或丢失。

例如，如果你有一个包含输入框的列表，用户在输入框中输入了一些内容。当列表发生变化时，没有分配 key 的情况下，输入框的值可能会显示在错误的列表项中，或者完全丢失。

因此，为列表项分配唯一的 key 可以确保列表更新时，框架能够正确地追踪和保持组件实例的状态。

总之，在 React 和 Vue 中使用列表渲染时，为每个列表项提供一个唯一的 key 可以提高性能，并确保组件状态在更新过程中保持正确。通常，我们使用从后端获取的数据中的唯一标识（如 ID）作为 key，如果没有唯一标识，可以使用其他可靠且唯一的值。避免使用数组的索引作为 key，因为它可能会导致性能问题和状态错误。

### 你如何在React应用中处理错误？什么是错误边界(Error Boundaries)？

错误处理是任何应用程序必不可少的一部分，React 也不例外。在 React 中，错误处理的主要工具是错误边界(Error Boundaries)。

**错误边界（Error Boundaries）** 是一种 React 组件，它可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

创建错误边界组件需要定义一个新的生命周期方法 `getDerivedStateFromError` 或 `componentDidCatch`。这两个生命周期方法用于捕获子组件树中的错误。

这是一个简单的错误边界组件的例子：

```jsx
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        // 更新 state，下一次渲染将会显示 fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // 你同样可以将错误日志上报给服务器
        logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // 你可以渲染任何自定义的 fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
```

你可以在任何可能需要的地方使用它：

```jsx
<ErrorBoundary>
    <MyWidget />
</ErrorBoundary>
```

这样，如果 `MyWidget` 组件出错，`ErrorBoundary` 组件就会捕获到这个错误，并渲染备用 UI，而不是让整个应用崩溃。

### 请解释下React的Context API的工作原理，以及它如何用于全局状态管理？

React的Context API是一个创建全局状态的方式，可以让数据在组件树中传递，而不需要手动地一层一层传递props。

首先，我们使用`React.createContext`来创建一个Context对象：

```jsx
const MyContext = React.createContext(defaultValue);
```

然后，我们可以通过Context的Provider组件将状态传递到组件树中：

```jsx
<MyContext.Provider value={/* 某个值 */}>
```

任何在`Provider`内部的组件都可以通过Context的Consumer组件来订阅这个状态，或者如果这个组件是函数组件，也可以使用`useContext` Hook：

```jsx
<MyContext.Consumer>
  {value => /* 根据Context value渲染某些内容 */}
</MyContext.Consumer>
```

或

```jsx
const value = useContext(MyContext);
```

虽然Context API提供了管理全局状态的方法，但它并没有提供一种在应用状态发生变化时通知React重新渲染的方式。因此，通常我们会将Context与React组件的state或者其他状态管理库（如Redux，MobX等）结合使用，以便当状态改变时，可以通知React进行重新渲染。

注意，虽然Context可以让我们很方便的进行全局状态管理，但并不意味着我们应该尽可能的使用它。因为使用Context会使得组件的重用变得困难，而且也会使得组件的测试变得复杂。因此，除非你需要在很多不同层级的组件间共享状态，否则应该优先使用组件的props和state。

### 如何进行React性能优化？

React是一个非常强大的前端JavaScript库，用于构建用户界面。然而，随着应用规模的扩大，可能会遇到一些性能问题。下面是一些优化React性能的技术：

1. **使用PureComponent或shouldComponentUpdate：** React.PureComponent通过对props和state的浅对比来实现shouldComponentUpdate()。这可以帮助你避免不必要的render，从而提高性能。
2. **利用React.memo：** 对于函数式组件，你可以使用React.memo进行优化，这也是一种避免不必要render的方式。
3. **避免使用匿名函数或bind：** 在render方法中使用箭头函数或者bind会创建一个新的函数实例，导致无效的重新渲染。
4. **合理使用key：** 在动态渲染元素时，应为每一个元素设置唯一的key，这样可以帮助React识别哪些元素发生了变化。
5. **懒加载：** 对于大型项目，可以采用代码分割和懒加载的方式，减少首次加载时的数据量。
6. **使用虚拟化长列表：** 当你需要处理大量的数据并显示在列表中时，可以使用虚拟化（virtualization）。这可以有效减少页面元素的数量，提高性能。
7. **使用Web Workers处理复杂计算：** Web Workers允许你在后台线程中运行JavaScript，从而不阻塞用户界面。
8. **合理使用第三方库：** 一些大型的第三方库可能会影响React应用的性能，所以在选择时应充分考虑其性能和大小。
9. **优化图片和媒体内容：** 确保你的图片和媒体内容已经过优化，以尽可能减少他们的文件大小。
10. **使用React Profiler进行性能分析：** React DevTools提供了一个Profiler插件，可以帮助你找出应用中的性能瓶颈。

以上就是一些React性能优化的方法，当然这只是一部分。你可能还需要根据具体的应用场景，结合多种方法进行优化。

### 为什么多个 JSX 标签需要被一个父元素包裹？

JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你**不能在一个函数中返回多个对象**，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。

### 请描述一下React中的Virtual DOM是如何工作的？

React使用一种名为"Virtual DOM"的技术来帮助提高应用程序的性能。Virtual DOM（虚拟DOM）实际上是一个或多个JS对象的树形结构，它表示了真实DOM的结构。当数据变化时，React使用虚拟DOM来优化和最小化真实DOM的更新。以下是虚拟DOM工作原理的简单描述：

1. **创建虚拟DOM：** 当你编写React组件并使用JSX时，React会为每个组件和元素创建一个虚拟DOM节点。这些虚拟节点构成了一个虚拟DOM树。
2. **更新虚拟DOM：** 当应用程序的状态变化时，React会创建一个新的虚拟DOM树。这个过程非常快，因为它发生在内存中，不涉及浏览器的布局、样式计算或绘制阶段。
3. **差异化（Diffing）：** 接下来，React会比较新旧两个虚拟DOM树，找出需要更新的最小修改。这个过程称为"差异化"。
4. **重新渲染：** 最后，React将这些变化应用到真实的DOM树上。React尽可能地减少DOM操作，这有助于保持应用程序的性能，因为真实的DOM操作通常比虚拟DOM操作要昂贵得多。

这就是虚拟DOM的基本工作原理。其主要优点是，通过减少直接操作DOM的次数，避免了昂贵的DOM操作，从而提高了性能。它也使得React可以在非浏览器环境（如服务器端渲染或者React Native）中运行。

### 为什么我们在构造函数中绑定`this`？

在JavaScript中，`this`的上下文依赖于函数的调用方式。当我们在类的方法中使用`this`时，我们期望`this`引用的是类的实例。但是，由于事件处理程序等可能更改上下文，`this`可能不会按照我们预期的方式工作。

React类组件的方法不会自动绑定`this`到实例。这意味着，当我们将一个方法作为回调传递（例如作为一个事件处理函数）时，`this`不会指向当前组件的实例。如果在该方法中我们尝试访问`this.props`或`this.state`，会导致错误，因为`this`的上下文已经丢失。

考虑下面的例子：

```jsx
class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello, world!' };
    }

    showMessage() {
        alert(this.state.message);
    }

    render() {
        return (
            <button onClick={this.showMessage}>Click me</button>
        );
    }
}
```

在这个例子中，当我们点击按钮时，`showMessage`方法会被调用，但`this`的上下文并不是`ExampleComponent`的实例，所以`this.state`是`undefined`，这将导致运行时错误。

为了解决这个问题，我们需要在构造函数中绑定`this`到我们的方法上。这可以确保无论方法在哪里被调用，`this`都将始终引用组件实例：

```jsx
class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello, world!' };

        // Bind 'this' to our method
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage() {
        alert(this.state.message);
    }

    render() {
        return (
            <button onClick={this.showMessage}>Click me</button>
        );
    }
}
```

这样，无论`showMessage`方法在何处被调用，`this`都将正确地引用`ExampleComponent`实例，我们就可以在该方法中安全地访问`this.state`和`this.props`。

此外，也可以使用箭头函数来自动绑定`this`，因为箭头函数不会创建自己的`this`上下文，而是继承它们被定义时的上下文。

```jsx
class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello, world!' };
    }

    showMessage = () => {
        alert(this.state.message);
    }

    render() {
        return (
            <button onClick={this.showMessage}>Click me</button>
        );
    }
}
```

但是，箭头函数可能会引入一些其它问题（例如优化问题），所以在构造函数中显式地绑定`this`仍然是推荐的方式。

### 怎样在React中阻止组件重新渲染？

在React中，如果希望阻止一个组件在某些情况下重新渲染，可以使用 `shouldComponentUpdate` 生命周期方法或者 `React.memo` 函数。

1. **shouldComponentUpdate:** 该方法只在类组件中有效。该方法接收两个参数，即新的 props 和新的 state，它默认返回 `true`。如果返回 `false`，那么React将跳过这次的渲染及之后的整个更新过程。
2. **React.memo:** 对于函数组件，我们没有 `shouldComponentUpdate` 这个生命周期方法。不过，我们可以使用 `React.memo` 来实现类似的效果。`React.memo` 是一个高阶组件，它与 `shouldComponentUpdate` 有相似的作用，它“记住”了你的组件并且只有当 props 发生变化时才会重新渲染。

### 描述下React中不可变性的重要性

在React中，不可变性（Immutability）是一种重要的编程技巧，它有助于提高应用程序的性能并简化程序的复杂性。以下是不可变性在React中的重要性：

1. **性能优化：** 在React中，当组件的状态或属性更改时，组件会重新渲染。为了防止不必要的渲染，React提供了`shouldComponentUpdate`生命周期方法（或者在PureComponent和React.memo中的自动浅比较）。通过比较新旧状态或属性，我们可以决定组件是否需要重新渲染。如果我们使用不可变数据，那么这个比较过程就变得非常简单和快速，因为我们只需要进行身份比较（`===`），而不是深度比较。如果引用没有变，那么数据就没有变。
2. **简化编程模型：** 不可变性使得复杂的特性，如撤销/重做，更容易实现。如果我们不直接修改数据，而是生成新的数据版本，那么我们可以保留旧的数据版本，以便稍后使用。
3. **更容易跟踪变化：** 当我们使用不可变数据时，任何数据的变化都将导致新的对象的产生。这使得我们可以利用React Dev Tools或Redux Dev Tools等开发工具，更容易地追踪状态的变化。

总的来说，不可变性在React中的重要性在于它可以帮助我们写出更清晰、更易维护的代码，并且提高应用程序的性能。因此，在React和使用React的库（如Redux）中，都强烈推荐使用不可变数据。

### React的纯组件(PureComponent)是什么？在什么情况下你会使用它？

React.PureComponent 和 React.Component 非常类似，不同之处在于 React.PureComponent 实现了 `shouldComponentUpdate()` 方法，这个方法对 props 和 state 进行了浅对比。这意味着，如果你的组件的 props 或 state 变化了（即引用变化，不是内部属性变化），那么组件将会重新渲染；否则，它就不会重新渲染。

使用 PureComponent 的主要情况包括：

1. **组件的重新渲染依赖于 props 和 state：** 如果你的组件完全依赖于 props 和 state，而且你可以保证 props 和 state 的引用在需要重新渲染时才会改变，那么使用 PureComponent 可以帮助你避免不必要的渲染，从而提高性能。
2. **组件的 props 和 state 结构较为简单：** PureComponent 通过浅对比来检查 props 和 state 是否变化。这意味着，如果你的 props 或 state 是嵌套的对象，那么即使对象的深层属性没有变，只要顶层对象的引用变了，PureComponent 也会触发重新渲染。因此，如果你的 props 和 state 结构较为简单，或者你能保证嵌套对象在需要重新渲染时引用才会改变，那么使用 PureComponent 可以帮助你提高性能。

然而，也要注意 PureComponent 并不是万能的，它并不适合所有场景。在一些情况下，使用 PureComponent 反而可能带来性能问题。例如，如果你的 props 或 state 经常改变，那么 PureComponent 在每次渲染前都会进行浅对比，这可能会带来额外的性能开销。同时，由于 PureComponent 只做浅对比，如果 props 或 state 中包含复杂的嵌套数据结构，可能会导致误判，无法准确地识别出 props 或 state 是否真正变化。

在使用 PureComponent 时，你需要了解它的工作原理，以及何时使用它才能真正提高应用的性能。

### 解释React的同步和异步setState

React的`setState`方法在某些情况下是异步的，而在其他情况下是同步的。理解这一点很重要，因为它可以帮助我们理解和预测React的行为。

**异步的setState:**

在大多数情况下，`setState`的行为是异步的。当我们在React的事件处理程序（例如onClick、onSubmit等）中调用`setState`时，React会将更新排入队列，然后在稍后的时间以最有效的方式批量应用这些更新。这种方法可以增加应用的性能，因为它避免了不必要的重新渲染。

**同步的setState:**

然而，在某些特定情况下，`setState`的行为是同步的。如果我们在React的生命周期方法（如`componentDidMount`或`componentDidUpdate`）或者在`setTimeout`或`setInterval`的回调函数中调用`setState`，那么它就会立即触发组件的重新渲染。

了解`setState`的这种行为对于编写预测性和可调试性的React代码非常重要。

### 在React中使用Portals的场景是什么？

React Portals 提供了一种将子节点渲染到存在于父组件 DOM 层次结构之外的 DOM 节点的方式。

以下是一些使用 Portals 的典型场景：

1. **模态对话框（Modals）和弹出窗口（Popovers）：** 当你创建一个模态对话框或弹出窗口时，你可能希望它能覆盖整个页面，而不是仅仅覆盖父组件的范围。你也可能希望模态对话框或弹出窗口能够独立于其父组件的 Z-index。通过使用 Portals，你可以将模态对话框或弹出窗口渲染到 DOM 树的顶层，使其可以覆盖整个页面。
2. **全局通知和提示：** 类似于模态对话框，你可能希望全局通知或提示能够显示在页面的顶层，并且不受任何父组件的影响。通过使用 Portals，你可以将这些元素渲染到任何你想要的位置。
3. **避免某些 CSS 问题：** 在某些情况下，父组件的 CSS（例如，overflow 或 z-index）可能会影响或限制子组件的显示。在这种情况下，你可以使用 Portals 将子组件渲染到父组件的 DOM 结构之外，以避免这些 CSS 问题。

总的来说，React Portals 是一种强大的工具，它可以帮助你在需要在 DOM 结构上“跳出”父组件边界的时候进行渲染。然而，使用 Portals 也需要注意一些问题，例如，你需要确保正确地管理和清理在 Portals 中渲染的元素，以避免内存泄漏等问题。

### 在React中使用Redux和MobX的主要区别是什么？

Redux和MobX都是用于管理React应用状态的流行库，但他们的方法和概念差异较大。

**Redux**:

Redux基于Flux架构，使用单向数据流，并且维护一个不可变的全局状态树。在Redux中，所有的状态改变都通过分发（dispatching）预定义的操作（actions）来触发，并由纯函数（reducer）处理。

Redux的主要特点：

- **单一的状态树**：所有的应用状态都存储在一个大的对象中。
- **不可变状态**：状态不能直接修改，只能通过分发操作并处理reducer函数来改变。
- **纯函数和可预测性**：reducer函数必须是纯函数，给定相同的输入，总是返回相同的输出。

**MobX**:

相比之下，MobX采用更加直观和灵活的方式管理状态。它通过**反应性系统自动跟踪状态改变**，并更新相关的组件。

MobX的主要特点：

- **可观察的状态**：你可以声明应用状态为可观察的（observable），并将React组件转化为观察者（observer）。
- **自动的派生**：当状态改变时，MobX会自动更新依赖这些状态的函数、计算值和组件。
- **直接修改状态**：你可以直接修改状态，而不需要分发操作或使用reducer函数。

**Redux和MobX的选择**:

选择使用Redux或MobX主要取决于你的团队和项目的需求。

如果你想要一个严格的、可预测的数据流和状态管理，那么Redux可能是更好的选择。Redux的严格性使得它非常适合于大型的、复杂的项目，或者需要处理一致性问题的项目。

相反，如果你需要更快的开发速度和更高的灵活性，或者你的项目并不需要处理复杂的状态管理问题，那么MobX可能是更好的选择。MobX的简洁和直观使得它更易于理解和使用，尤其是对于那些不熟悉Flux架构或者函数式编程的开发者。

### 谈谈你对Flux的理解

Flux是Facebook为其React视图库创建的应用架构模式，用于处理数据流动。

Flux架构的核心是一个单向数据流，其中包含四个主要部分：Dispatcher、Stores、Views（React组件）和Actions。

1. **Actions**：Actions是一个简单的JavaScript对象，它描述了应用中发生的事件，但不指定应用状态如何更新。Action对象可以由用户交互、网络响应等产生，然后被分发（dispatched）给Store。
2. **Dispatcher**：Dispatcher是Flux应用中的中央枢纽。当Action被触发时，Dispatcher会将Action分发到所有注册在其上的Store。
3. **Stores**：Stores负责存储应用的状态和逻辑。每个Store都维护一个特定领域内的状态，例如用户的登录状态或购物车的内容。当Store接收到Dispatcher分发来的Action时，会根据Action的类型更新其状态。Store状态的更新通常通过switch-case语句或者if-else逻辑来实现。
4. **Views**：Views（通常是React组件）从Store中读取状态并显示。当Store的状态发生变化时，会通知Views，然后Views重新渲染。

这四个部分构成了Flux的单向数据流：Actions被分发到Store，Store处理Action并更新状态，然后通知Views重新渲染。

Flux架构的主要优点是其数据流动的明确性和可预测性。因为数据总是按照一个固定的方向流动，所以在调试和理解应用的行为时更容易追踪数据。这特别对于构建大型、复杂的前端应用非常有用。

### vue和react框架之间有什么不同？

Vue 和 React 都是现代前端框架，分别由 Evan You 和 Facebook 团队开发。它们旨在帮助开发者构建高效、可维护的用户界面。尽管它们有许多相似之处，但在一些关键方面存在一些不同。以下是 Vue 和 React 之间的一些主要差异：

1. 模板语法和 JSX：

Vue 使用模板语法，将 HTML、CSS 和 JavaScript 集成在一起。Vue 的模板是基于 HTML 的，这使得它们对于前端开发者来说非常熟悉。Vue 提供了一些特殊的属性和指令（如 v-for、v-if 等），以便于操作 DOM 和组件。

React 使用 JSX（JavaScript XML），它是一种 JavaScript 语法扩展，允许在 JavaScript 代码中编写类似 HTML 的结构。与 Vue 的模板语法不同，JSX 更接近于 JavaScript，需要熟悉 JavaScript 语法的开发者。

2. 数据绑定：

Vue 提供了双向数据绑定，通过 v-model 指令可以轻松实现。这使得在表单元素和数据之间建立双向绑定变得非常简单。

React 默认使用单向数据流，父组件通过属性（props）将数据传递给子组件。实现双向数据绑定需要编写更多的代码，通常需要使用回调函数或状态管理库（如 Redux）。

3. 组件通信：

Vue 为组件通信提供了内置的事件系统（通过 $emit 和 $on），以及 props。这使得在 Vue 应用中实现组件间通信相对简单。

React 使用 props 和回调函数进行组件间通信。虽然它没有内置的事件系统，但可以使用第三方库（如 Redux 或 MobX）来实现更复杂的通信。

4. 生态系统：

Vue 拥有一个相对更小但紧密的生态系统。Vue 的官方库（如 Vuex、Vue Router 等）为开发者提供了许多功能。Vue 社区也积极维护了许多插件和库。

React 拥有一个庞大的生态系统，可以为开发者提供各种各样的解决方案。React 社区很大，拥有大量的库和插件，可以满足不同的需求。但是，这也意味着在选择最佳实践和工具时可能需要进行更多的研究。

5. 学习曲线：

Vue 通常被认为具有较低的学习曲线，尤其是对于那些熟悉 HTML、CSS 和 JavaScript 的前端开发者。Vue 的文档易于理解，模板语法直观，使得初学者更容易上手。

React 的学习曲线可能会略高一些，因为 JSX 和函数式编程概念需要一些时间适应。然而，React 的文档也相当详细，并有大量的社区资源可供参考。

6. 可扩展性：

Vue 为开发者提供了灵活的选项，可以根据项目的需求进行配置。Vue 提供了许多内置功能和官方库，有助于保持一致性和实现快速开发。

React 本身非常灵活，可以很好地与各种库和工具集成。这使得 React 更容易适应不同类型的项目。然而，这种灵活性也意味着开发者需要在选择最佳实践和工具时进行更多的研究。

7. 性能：

Vue 和 React 都具有出色的性能。它们都使用虚拟 DOM 技术，通过高效地比较新旧虚拟 DOM 来实现最小化的真实 DOM 更新。尽管在大多数情况下性能差异不大，但根据应用程序的具体需求和实现方式，两者之间可能存在一些差异。

8. 企业和社区支持：

React 由 Facebook 开发和维护，拥有大量的企业和社区支持。这使得 React 成为一个非常稳定和可靠的选择，特别是对于大型企业级应用程序。

Vue 是一个独立的开源项目，由 Evan You 和一个活跃的社区维护。Vue 在亚洲市场尤其受欢迎，但在全球范围内也越来越受到认可。虽然它可能没有 React 那样庞大的支持，但 Vue 仍然是一个非常可靠和稳定的框架。

总结：

Vue 和 React 分别有各自的优势和特点。Vue 的模板语法和双向数据绑定使其易于上手和快速开发，而 React 提供了高度灵活的架构和庞大的生态系统。在选择框架时，需要根据项目需求、团队经验和个人偏好来决定使用哪一个。

### vue的diff算法，遍历Vdom使用的是深度优先遍历还是广度优先遍历？

Vue 3 使用了虚拟 DOM (Vdom)，并采用深度优先遍历 (Depth-First Traversal) 来进行比较和更新。这种遍历方式沿着每个分支尽可能深地遍历节点树，然后回溯。

当渲染一个新的视图时，Vue 3 会创建一颗新的虚拟 DOM 树并将其与旧的虚拟 DOM 树进行比较。这一比较过程通过深度优先遍历实现，从而找出两棵树之间的差异，然后将这些差异应用到实际的 DOM 树上，从而有效地更新视图。

深度优先遍历可以更容易地检测具体子树的更改，这对于在更新过程中维护组件的状态和生命周期很重要。这也与 React 的 diff 算法相似，都是倾向于采用深度优先遍历。

### MVC和MVVM框架的区别？

MVC（Model-View-Controller）和 MVVM（Model-View-ViewModel）都是软件架构设计模式，用于分离应用程序的关注点，以提高可维护性和可扩展性。尽管它们有相似之处，但它们的实现方式和组件之间的交互有所不同。

1. MVC（Model-View-Controller）：

- Model：代表应用程序的数据模型和业务逻辑。它负责处理数据存储和检索。
- View：代表用户界面，展示数据给用户，并接收用户输入。
- Controller：处理用户输入，将用户操作转换为 Model 更新，并通知 View 更新。

在 MVC 架构中，View 和 Controller 之间存在较强的依赖关系。用户输入由 Controller 处理，Controller 更新 Model，然后 Model 通知 View 更新。这样的双向通信使得 View 和 Controller 的耦合度较高。

1. MVVM（Model-View-ViewModel）：

- Model：与 MVC 中的 Model 相同，代表应用程序的数据模型和业务逻辑。
- View：代表用户界面，负责展示数据和接收用户输入。但在 MVVM 架构中，View 不直接与 Model 交互。
- ViewModel：扮演 View 和 Model 之间的中介，负责将 Model 中的数据转换为 View 可以显示的数据，同时将 View 的用户输入转换为 Model 可以理解的操作。

MVVM 架构的关键特点是数据绑定（Data Binding），它允许 View 和 ViewModel 之间自动同步数据。这样，当 Model 数据发生变化时，View 会自动更新；当用户在 View 中进行操作时，ViewModel 会自动更新 Model。这种自动同步减少了 View 和 ViewModel 之间的直接交互，降低了它们之间的耦合度。

总结：MVC 和 MVVM 都是用于分离关注点的架构设计模式。MVC 通过 Controller 来处理用户输入并更新 Model 和 View，而 MVVM 利用 ViewModel 作为 Model 和 View 之间的中介，实现数据绑定。MVVM 架构相较于 MVC，降低了组件之间的耦合度，使得代码更易于维护和扩展。许多现代前端框架（如 Vue 和 React）采用了类似 MVVM 的设计模式。

<hr />

## 前端工程化

### 对Webpack做过哪些优化？

Webpack 是一个非常强大的模块打包器，它可以帮助开发者处理代码依赖、打包、压缩等任务。在使用 Webpack 的过程中，我们可以通过一些方法优化项目，提高性能和用户体验。以下是一些常见的 Webpack 优化方法：

1. Tree shaking：通过此技术，Webpack 可以消除未使用的代码，从而减少最终包的大小。为了实现这一点，确保在 package.json 文件中设置 "sideEffects" 选项。
2. 代码分割（Code Splitting）：将代码分割成不同的 chunks，从而实现按需加载和并行加载。这可以减少首次加载时间和浏览器解析时间。可以使用 SplitChunksPlugin 和动态 import() 实现代码分割。
3. 懒加载（Lazy Loading）：懒加载是一种按需加载策略，只有在实际需要时才加载某些代码。这可以显著减少首屏加载时间。
4. 使用缓存：通过设置 cache-loader、HardSourceWebpackPlugin 或其他缓存插件，可以利用缓存加快构建速度。
5. 压缩代码：使用插件如 TerserPlugin（用于 JavaScript）和 MiniCssExtractPlugin（用于 CSS）对代码进行压缩，减少代码体积，提高加载速度。
6. 使用 DLL：通过使用 DllPlugin 和 DllReferencePlugin，可以将第三方库与应用程序代码分离，从而减少构建时间。
7. 配置 resolve.alias：通过配置 resolve.alias，可以缩短查找模块的路径，从而提高构建速度。
8. 使用 Web Workers 或 Service Workers：通过将一些任务放在后台线程中处理，可以提高应用程序的性能。
9. 提取 CSS：通过使用 MiniCssExtractPlugin，可以将 CSS 从 JS 中分离出来，提高加载性能。
10. 使用 Loaders 和 Babel：通过配置不同的 loaders 和 Babel 插件，可以在构建过程中优化代码，例如转换 ES6 语法、移除 console.log 等。
11. 配置性能提示：通过配置 performance.hints 和 performance.assetFilter，可以监控和优化构建产物的大小。
12. 使用 Webpack Bundle Analyzer：通过这个插件，可以分析和可视化 Webpack 输出的文件，从而帮助发现潜在的优化点。

这些是在使用 Webpack 时可以采取的一些优化方法。针对具体项目，可能还需要结合实际情况进行更多优化。

### Wepback的生命周期有哪些？

Webpack 的生命周期主要由以下几个阶段组成：

1. 初始化（Initialization）：在这个阶段，Webpack 会读取配置文件（如：webpack.config.js）和命令行参数，然后创建一个新的 Compiler 实例。这个实例包含了整个构建过程中的配置、插件、Loaders 等相关信息。
2. 解析（Resolution）：Webpack 根据入口文件（entry）开始逐层解析依赖关系。对于每个解析到的模块文件，Webpack 都会检查是否需要使用对应的 Loaders 进行转换和处理。此阶段的主要目的是创建一个依赖图（Dependency Graph），其中包含了项目中所有模块及其相互依赖关系。
3. 编译（Compilation）：在这个阶段，Webpack 开始根据依赖图逐个编译模块。对于每个模块，Webpack 会首先执行预编译任务（如使用 Babel 转换 ES6 语法），然后调用相应的 Loaders 处理模块内容。编译完成后，Webpack 会生成一个中间表示（Intermediate Representation，简称 IR），这是一个包含所有模块及其处理结果的对象。
4. 输出（Emit）：Webpack 将 IR 转换为最终的输出文件（如：bundle.js）。在这个阶段，Webpack 会执行优化任务（如代码压缩、文件名哈希化），并将处理后的文件写入磁盘。输出完成后，Webpack 会触发相应的钩子（如：onEmit、afterEmit），以便插件可以执行自定义操作。
5. 完成（Done）：构建流程完成后，Webpack 会触发一系列完成钩子（如：onDone、afterDone），以便插件可以执行清理和统计任务。此时，Webpack 会输出构建结果，包括处理后的文件、错误、警告等信息。

这些阶段概述了 Webpack 的生命周期。在这个过程中，Webpack 会调用许多内置的插件和钩子函数来处理文件和资源。开发者还可以通过自定义插件和钩子来扩展和控制 Webpack 的行为。

### Webpack有哪些常见的Loader？

1. babel-loader：用于将 ES6/ES7 语法转换为浏览器兼容的 ES5 语法。
2. css-loader：解析 CSS 文件中的 `@import` 和 `url()`，将 CSS 转换为 JavaScript 模块。
3. style-loader：将 CSS 作为样式标签插入到 HTML 文档中。
4. less-loader：将 Less 代码转换为 CSS 代码。
5. sass-loader：将 Sass/SCSS 代码转换为 CSS 代码。
6. postcss-loader：使用 PostCSS 对 CSS 进行处理，如自动添加浏览器前缀、压缩 CSS 等。
7. file-loader：处理文件引用，将文件复制到输出目录，并返回文件的 URL。
8. url-loader：将文件以 base64 编码的形式内联到代码中，可以减少 HTTP 请求次数。
9. image-webpack-loader：压缩和优化图像文件。
10. ts-loader：将 TypeScript 转换为 JavaScript。

### Webpack有哪些常见的Plugin？

1. HtmlWebpackPlugin：生成一个 HTML 文件，并自动引入所有生成的脚本和样式。
2. MiniCssExtractPlugin：将 CSS 提取为单独的文件，而不是将其内联到 JavaScript 中。
3. CleanWebpackPlugin：在每次构建前清理输出目录。
4. DefinePlugin：允许在编译时创建全局常量，用于在开发和生产环境中区分不同的行为。
5. TerserPlugin：压缩和优化 JavaScript 代码。
6. OptimizeCSSAssetsPlugin：压缩和优化 CSS 文件。
7. HotModuleReplacementPlugin：实现模块热替换，用于开发环境。
8. CopyWebpackPlugin：将静态资源复制到输出目录。
9. SplitChunksPlugin：实现代码分割，提高加载性能。
10. CompressionWebpackPlugin：使用 Gzip 或 Brotli 压缩生成的资源文件。

### Webpack中Loader和Plugin的区别？

1. Loader 用于转换和处理模块。它是一个函数，接收源文件作为输入，并输出处理后的结果。Loader 的作用是对源代码进行处理，例如编译、压缩、转换等。常见的 Loader 任务包括：将 Sass/SCSS 转换为 CSS、将 ES6 代码转换为浏览器兼容的代码等。
2. Plugin 是用于扩展 Webpack 功能的插件。它可以在构建流程中的不同阶段执行不同的任务，如清理输出目录、生成 HTML 文件等。Plugin 的作用范围更广泛，它可以访问 Webpack 的整个编译过程，从而实现各种复杂的功能。

Loader 主要负责对模块的转换和处理，而 Plugin 负责完成更广泛的任务，包括编译过程中的各种钩子和自定义功能。

### Wepback5有哪些新特性？

1. 持久缓存：Webpack 5 引入了文件系统缓存，可以在多次构建之间持久存储中间结果。这可以显著提高重复构建的速度。
2. 模块联邦（Module Federation）：这是一个允许多个独立构建共享代码的新特性。模块联邦可以在不牺牲性能的情况下实现微前端架构。
3. 更好的 Tree Shaking：Webpack 5 改进了 Tree Shaking，可以更有效地移除无用代码。
4. 默认支持 Content Hash：现在默认为输出文件名添加内容哈希，以实现长期缓存优化。
5. 更小的运行时代码：Webpack 5 的运行时代码更小，有助于减小最终生成的包的大小。
6. 改进的代码分割策略：Webpack 5 对 SplitChunksPlugin 的默认配置进行了优化，以更好地支持公共代码的提取。
7. 移除了一些过时的特性：Webpack 5 移除了一些不推荐使用的特性，如 Node.js 的 polyfill。

### 谈谈你对Source map的理解，生产环境如何使用？

Source Map 是一种映射文件，用于将压缩、转换后的代码映射回原始源代码。这可以帮助开发者在浏览器中调试压缩、转换后的代码。Source Map 文件通常具有 `.map` 扩展名，与生成的代码文件一起分发。浏览器可以解析这些 Source Map 文件，从而在调试时显示原始代码。

在生产环境中，你可能希望隐藏源代码或者避免额外的 HTTP 请求。一种方法是将 Source Map 上传到错误跟踪服务（如 Sentry），这样只有当出现错误时，错误跟踪服务才会下载并使用 Source Map。另一种方法是将 Source Map 内联到生成的代码文件中，这样可以避免额外的 HTTP 请求。然而，这会增加生成的文件大小，可能会影响性能。

### 谈谈你对热更新的理解

热更新（Hot Module Replacement，简称 HMR）是一种用于提高开发效率的技术。在应用程序运行过程中，HMR 可以实时替换、添加或删除模块，而无需刷新整个页面。这样，开发者可以立即看到更改的效果，而不会丢失应用程序的状态。Webpack 的 HotModuleReplacementPlugin 插件可以实现 HMR 功能。

### 谈谈你对Babel的理解，并说下它的原理

Babel 是一个 JavaScript 编译器，用于将最新的 JavaScript 语法（如 ES6、ES7）转换为浏览器兼容的 ES5 语法。Babel 的主要功能是确保你编写的代码在所有浏览器中都能正常运行，不受浏览器对新特性支持程度的影响。

Babel 的原理：

1. 解析（Parsing）：Babel 首先将源代码解析为一个抽象语法树（Abstract Syntax Tree，简称 AST）。解析过程中，Babel 将源代码分解成词素（Tokens），然后根据语法规则将词素组合成 AST。AST 是一种树状结构，用于表示源代码的语法结构。
2. 转换（Transforming）：在 AST 的基础上，Babel 使用插件（plugins）和预设（presets）进行转换。插件是用于实现具体语法转换或优化的功能模块，例如将箭头函数转换为普通函数。预设是一组插件的集合，用于处理一组相关的语法特性，如 ES2015+ 的新特性。
3. 生成（Generating）：在转换阶段完成后，Babel 将修改后的 AST 转换回 JavaScript 代码。生成阶段可以保留原始代码中的格式和注释，或者使用压缩插件对代码进行优化。

Babel 允许开发者使用最新的 JavaScript 语法和特性，同时确保代码在各种浏览器中兼容。通过对代码进行转换和优化，Babel 可以提高代码的可维护性和性能。

### 谈谈你对Vite的理解

Vite（法语单词，意为“快速”的意思）是一种现代化的前端构建工具，由 Vue.js 作者尤雨溪（Evan You）创建。Vite 的目标是为现代浏览器提供一个更轻量级、快速的开发和构建工具。它主要解决了一些传统构建工具（如 Webpack）在开发过程中的瓶颈问题，从而提高了开发者的效率。

Vite 的主要特点和优势包括：

1. 基于浏览器原生 ES modules：Vite 利用浏览器原生支持的 ES modules 功能，实现了按需加载和快速的开发服务器。这消除了开发环境中构建和热更新的瓶颈，从而大幅提高了开发速度。
2. 快速冷启动：与 Webpack 等传统构建工具相比，Vite 具有更快的冷启动速度。这是因为 Vite 在开发环境下无需进行整体构建，而是直接为请求的模块提供服务。
3. 轻量级：Vite 的核心功能非常轻量，使得它在下载、安装和运行时更加高效。
4. 热模块替换（HMR）：Vite 支持 HMR，这使得开发者在开发过程中可以在不刷新页面的情况下看到更改的结果，从而提高开发效率。
5. 构建性能优化：虽然 Vite 旨在提供快速的开发环境，但它也支持高效的生产环境构建。Vite 使用 Rollup 进行生产环境构建，可以实现 Tree Shaking、代码分割等优化功能。
6. 插件系统：Vite 提供了一个简单易用的插件系统，可以方便地扩展和定制 Vite 的功能。许多社区插件可以满足不同需求，如 CSS 处理、图片优化等。
7. 框架支持：Vite 不仅支持 Vue.js，还支持 React、Preact、Svelte 等其他流行的前端框架。
8. 开箱即用的特性：Vite 集成了一些常用的开发工具和特性，如 CSS 预处理器支持（Sass、Less等）、TypeScript 支持等，无需额外配置即可使用。

总之，Vite 是一种新型的前端构建工具，它提供了快速的开发环境、高效的构建性能和易用的插件系统。尤其对于开发现代前端应用程序，Vite 可以大大提高开发效率。

### 谈谈你对Gulp的理解

Gulp 是一个流行的前端自动化构建工具，通过它可以自动执行各种重复性、繁琐的任务，从而提高开发效率。Gulp使用流（stream）来处理文件，这样可以减少磁盘 I/O，提高任务执行速度。

以下是关于 Gulp 的一些主要理解：

1. 简单易用：Gulp 的 API 非常简单直观，只需要几个主要的方法（如 src、dest、watch、task 和 series/parallel）就可以编写自动化任务。Gulpfile.js（Gulp 配置文件）通常是易于阅读和维护的。
2. 插件生态：Gulp 拥有丰富的插件生态系统，可以通过安装和配置插件来实现各种任务，如编译 SASS、压缩 JavaScript、优化图片等。
3. 基于流（Stream）：Gulp 的核心特点是使用 Node.js 流来处理文件，这使得 Gulp 可以在内存中处理文件，避免了不必要的磁盘读写。这种处理方式使得 Gulp 任务执行速度更快。
4. 代码即配置：与基于配置文件的构建工具（如 Webpack、Grunt）不同，Gulp 使用代码来定义任务。这使得 Gulpfile.js 更加灵活和可定制，可以根据项目需求编写特定的任务。
5. 自动化任务管理：Gulp 可以监视文件变化，当检测到变化时自动执行相关任务。这可以确保开发过程中，项目始终处于最新状态，提高开发效率。
6. 并行和串行任务执行：Gulp 提供了 series() 和 parallel() 方法，可以方便地组合任务，实现串行或并行执行。这可以最大程度地利用多核 CPU 的性能，提高任务执行速度。

尽管现在前端构建工具有很多选择，如 Webpack、Parcel 和 Vite 等，但 Gulp 仍然在一些特定场景下具有优势。例如，对于一些简单的前端项目，或者需要灵活、定制化的构建流程，Gulp 是一个很好的选择。

### 谈谈Webpack、Vite和Gulp三者之间的区别

Webpack、Vite 和 Gulp 是三种流行的前端构建工具，它们之间有一些显著的区别：

1. Webpack：
   - Webpack 是一个模块打包器，主要用于 JavaScript 应用程序的打包和优化。
   - 它支持各种资源（如 JS、CSS、图片、字体等）的加载和处理。
   - Webpack 支持代码分割、懒加载、Tree Shaking 等优化策略，有助于提高应用程序的性能。
   - 通过插件系统，Webpack 可以进行高度定制，满足各种项目需求。
   - 缺点是配置相对复杂，构建速度在某些情况下较慢。
2. Vite：
   - Vite 是一个基于 ES modules 的开发服务器和构建工具，由 Vue.js 作者尤雨溪创建。
   - Vite 利用原生 ES 模块（ESM）特性，实现快速开发服务器和按需编译。
   - Vite 支持 HMR（热模块替换），提高开发效率。
   - Vite 使用 Rollup 进行生产环境构建，具有出色的 Tree Shaking 能力。
   - Vite 配置相对简单，易于上手，但某些场景下可能没有 Webpack 那么灵活。
3. Gulp：
   - Gulp 是一个基于流（stream）的任务运行器，主要用于自动化处理前端资源。
   - Gulp 通过编写任务，可以实现各种复杂的构建流程，如编译 SASS、压缩 JS 等。
   - Gulp 的核心优势在于其流式处理，减少磁盘 I/O，提高任务执行速度。
   - Gulp 使用代码定义任务，具有很好的灵活性，适用于简单项目或高度定制化的构建需求。
   - 缺点是 Gulp 不支持模块打包，需要与其他工具（如 Webpack、Rollup）结合使用以实现完整的构建流程。

总结：

Webpack、Vite 和 Gulp 之间的主要区别在于它们的使用场景、核心功能和处理方式。Webpack 是一个功能丰富的模块打包器，适用于各种类型的项目。Vite 是一个轻量级、高性能的开发服务器和构建工具，尤其适用于现代框架项目。Gulp 是一个灵活的任务运行器，用于处理前端资源和自动化工作流。在实际项目中，开发者可以根据需求选择合适的工具，甚至将它们组合使用以实现最佳的构建流程。

<hr />

## 前端性能优化

### 前端常见的性能优化有哪些？

前端性能优化是为了提高用户体验和页面响应速度的一种手段。以下是一些常见的前端性能优化方法：

1. 优化图片：对图片进行压缩、使用合适的格式（例如，WebP）和尺寸，以及利用图片懒加载技术。
2. 使用CDN（内容分发网络）：将静态资源分发到全球各地的服务器，减少用户加载资源的延迟。
3. 缓存策略：利用浏览器缓存策略，如Cache-Control和ETag，减少重复请求。
4. 代码压缩与优化：通过压缩和移除不必要的代码，减小文件大小。同时优化代码逻辑，提高代码执行效率。
5. 异步加载：使用异步加载技术（如，async和defer属性）减少阻塞渲染的脚本。
6. 利用浏览器渲染优化：避免强制同步布局，减少重排和重绘。
7. 使用CSS3硬件加速：利用GPU加速，提高动画和页面渲染性能。
8. 优化CSS选择器：使用简洁、高效的CSS选择器，提高渲染速度。
9. 代码分割与按需加载：通过代码分割和按需加载技术，降低首次页面加载时间。
10. 使用Web Workers：利用Web Workers进行后台处理，避免阻塞主线程。
11. 服务端渲染（SSR）与预渲染：利用服务端渲染和预渲染技术，加快首屏渲染速度。
12. 优化字体加载：减少字体文件大小，使用字体加载策略避免阻塞渲染。
13. 使用HTTP/2：使用HTTP/2协议，实现多路复用，降低网络延迟。
14. 优化资源优先级：利用`<link rel="preload">` 和 `<link rel="prefetch">` 标签，优化资源加载顺序。
15. 使用事件委托，利用冒泡机制处理事件。
16. 使用防抖、节流处理频繁触发的事件。

以上只是一部分常见的前端性能优化方法，实际应用时还需要根据项目具体需求和场景来选择合适的优化策略。

### 讲下虚拟列表的原理

虚拟列表（Virtual List）又称无限滚动列表或者长列表优化，是一种前端性能优化技术。其主要目的是在处理大量数据列表时，提高用户体验和页面性能。以下是虚拟列表的基本原理：

1. 渲染可视区域的列表项：虚拟列表的核心思想是仅渲染可见部分的列表项。当用户滚动列表时，根据可视区域的大小，计算需要显示的列表项，然后只渲染这些列表项。
2. 列表项的位置计算：虚拟列表需要计算每个列表项的位置信息，以便在滚动过程中正确地显示列表项。这通常通过索引和固定高度（或者预估高度）来实现。
3. 复用列表项DOM元素：为了减少创建和销毁DOM元素的性能开销，虚拟列表通常会复用列表项的DOM元素。当一个列表项滚出可视区域时，它的DOM元素会被重新利用，用于显示新的列表项。
4. 占位元素：虚拟列表通常会使用一个占位元素（如一个空的div）来模拟整个列表的高度。这样可以使滚动条保持正确的位置和大小，使用户能够像正常列表一样进行滚动操作。
5. 事件监听与更新：虚拟列表需要监听滚动事件，以便在用户滚动时实时更新可视区域的列表项。此外，如果列表数据发生变化，虚拟列表还需要重新计算位置信息并更新可视区域的列表项。

通过上述原理，虚拟列表能够显著减少大量列表项的渲染成本，从而提高页面的性能和用户体验。在实际应用中，根据项目的具体需求和场景，可能还需要对虚拟列表进行一定的定制和优化。

### 讲讲常见的性能指标有哪些？它们分别对应的作用是什么？

Web前端性能指标是衡量一个网站或Web应用程序加载速度、交互性和用户体验的关键因素。以下是一些常见的Web前端性能指标及其解释：

1. 首次绘制（FP，First Paint）：页面在用户设备上开始渲染的时间点。这个指标可以用来衡量页面加载速度的初步感知。
2. 首次内容绘制（FCP，First Contentful Paint）：页面上的任何内容（如文字、图片等）首次渲染的时间点。这个指标可以用来衡量用户看到页面内容的速度。
3. 首次有效绘制（FMP，First Meaningful Paint）：页面主要内容呈现给用户的时间点。这个指标可以用来衡量页面的视觉完整度。
4. 首次输入延迟（FID，First Input Delay）：用户首次与页面交互（如点击按钮、输入等）所需时间。这个指标可以用来衡量页面的交互性。
5. 速度指数（SI，Speed Index）：描述页面加载过程中的视觉体验的一个指标。速度指数越低，用户体验越好。
6. 大致加载时间（TTFB，Time To First Byte）：从用户发出请求到接收到服务器响应的第一个字节所需的时间。这个指标可以用来衡量网络延迟和服务器处理速度。
7. 页面完全加载时间（Load Time）：从用户发出请求到页面完全加载所需的时间。这个指标可以用来衡量页面加载速度的综合体验。
8. 页面体积：页面的所有资源（HTML、CSS、JavaScript等）的总大小。页面体积越小，加载速度越快。
9. 请求次数：加载页面所需的网络请求次数。请求次数越少，加载速度越快。
10. 首次CPU空闲时间（First CPU Idle）：页面首次达到CPU空闲状态的时间点。这个指标可以用来衡量页面在何时可以响应用户输入。
11. 最大潜在首次输入延迟（Max Potential FID）：一个预测性指标，衡量在页面首次可交互之前可能发生的最大输入延迟。
12. 累计布局偏移（CLS，Cumulative Layout Shift）：页面在加载过程中元素位置变化的总和。这个指标可以用来衡量页面的视觉稳定性。

<hr />

## 前端监控

### 前端如何做性能监控？

前端性能监控是指收集、分析和报告前端性能数据的过程。在前端开发中，性能监控可以帮助我们了解用户在实际使用过程中的体验，发现和解决性能瓶颈。以下是一些前端性能监控的方法：

1. 利用浏览器提供的性能API，例如Navigation Timing API、Resource Timing API、User Timing API等，收集页面加载、资源加载和自定义性能指标的数据。
2. 使用PerformanceObserver API来监听性能数据的变化，实时收集性能指标。
3. 监控页面的错误信息，包括JavaScript错误、资源加载失败等。可以使用window.onerror和window.addEventListener('error')进行捕获。
4. 监控用户的交互事件，如点击、滚动、输入等，以了解用户在使用过程中可能遇到的性能问题。
5. 使用Long Tasks API来检测可能导致页面卡顿的长时间任务，例如运行时间较长的JavaScript代码。
6. 利用Web Vitals库来监控核心性能指标，如Largest Contentful Paint（LCP）、First Input Delay（FID）和Cumulative Layout Shift（CLS）等。
7. 将收集到的性能数据发送到服务器端进行存储和分析。可以使用XMLHttpRequest或Fetch API进行数据上报。
8. 使用开源或商业的应用性能监控（APM）工具，如Google Analytics、Sentry、New Relic等，进行性能数据的收集、分析和可视化展示。
9. 对收集到的性能数据进行定期分析，找出性能瓶颈，优化前端代码和架构，提高用户体验。

性能监控是前端优化的重要环节，通过不断地监控、分析和优化，我们可以确保用户在使用过程中获得良好的体验。

### 前端如何做错误监控？

前端错误监控是指捕获、记录和上报用户在实际使用过程中遇到的错误。错误监控有助于开发者发现和修复潜在的问题，提高应用的稳定性。以下是前端错误监控的一些建议：

1. 监控JavaScript运行时错误：可以使用`window.onerror` 或 `window.addEventListener('error')`来捕获JavaScript运行时错误。

   ```js
   window.onerror = function(message, source, lineno, colno, error) {
     // 处理错误信息
   };

   window.addEventListener('error', function(event) {
     // 处理错误信息
   });
   ```
2. 捕获Promise异常：使用`window.addEventListener('unhandledrejection')`来捕获未处理的Promise异常。

   ```js
   window.addEventListener('unhandledrejection', function(event) {
     // 处理错误信息
   });
   ```
3. 捕获资源加载错误：通过监听`error`事件，捕获例如图片、样式表、脚本等资源加载失败的错误。

   ```js
   document.addEventListener('error', function(event) {
     if (event.target.tagName === 'IMG' || event.target.tagName === 'LINK' || event.target.tagName === 'SCRIPT') {
       // 处理错误信息
     }
   }, true);
   ```
4. AJAX请求错误：当使用XMLHttpRequest或Fetch API进行AJAX请求时，可能会遇到网络错误或服务器错误。可以在请求的错误回调或catch方法中捕获：

   ```js
   fetch('https://example.com/data').then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   }).catch(error => {
     // 处理错误信息
   });
   ```

<hr />

## 前端安全

### 谈一谈你对XSS攻击理解

跨站脚本攻击（XSS，Cross-site Scripting）是一种常见的网络安全漏洞，它允许攻击者将恶意代码注入到受害者访问的网站中。这种攻击通常通过JavaScript来实现，但也可能涉及到其他脚本语言。在XSS攻击中，攻击者的目标是利用用户对网站的信任，进而窃取用户的数据、破坏网站的功能或者进行其他恶意行为。

XSS攻击可以分为三种类型：

1. 存储型XSS攻击（Stored XSS）：攻击者将恶意代码提交到目标网站的数据库中，当其他用户访问受影响的页面时，恶意代码将被加载并执行。这种类型的XSS攻击是最危险的，因为攻击者可以长期控制受害者的浏览器。
2. 反射型XSS攻击（Reflected XSS）：攻击者通过创建一个包含恶意代码的URL，诱使受害者点击这个链接。当受害者访问这个URL时，恶意代码会在其浏览器中执行。这种类型的XSS攻击需要用户的互动，因此相对存储型XSS攻击来说，风险较低。
3. DOM型XSS攻击（DOM-based XSS）：这种类型的XSS攻击是通过操作网页的Document Object Model（DOM）来实现的。攻击者会寻找可以用来插入恶意代码的DOM节点，当用户访问受影响的页面时，恶意代码将被执行。这种类型的攻击与反射型XSS相似，但更难以检测和防御。

为了防范XSS攻击，网站开发者和运维人员可以采取以下措施：

1. 对用户输入进行过滤和验证：确保所有的用户输入都经过适当的验证和过滤，以防止恶意代码的注入。
2. 使用安全的编码方法：对用户输入的数据进行编码，将特殊字符转换为HTML实体，以防止代码在浏览器中被解析和执行。
3. 设置Content Security Policy（CSP）：使用CSP可以限制浏览器加载和执行外部资源，降低XSS攻击的风险。
4. 使用HttpOnly Cookies：将敏感信息（如会话ID）存储在HttpOnly Cookies中，以防止恶意脚本通过浏览器窃取这些信息。
5. 保持软件和库的更新：确保使用的开发工具、库和框架是最新的，并修复已知的安全漏洞。

### 谈一谈你对CSRF攻击理解

跨站请求伪造（CSRF，Cross-Site Request Forgery）是一种常见的网络安全漏洞，攻击者通过诱使受害者执行不知情的操作来利用受害者在网站上的身份。这种攻击是基于用户在其他网站上的登录状态和网站的信任机制。

在CSRF攻击中，攻击者创建一个恶意网站或发送一个包含恶意代码的电子邮件。当受害者访问恶意网站或查看电子邮件时，浏览器会在后台向目标网站发送伪造的请求。由于受害者已经在目标网站上登录，因此这些请求将带有有效的凭据（如cookies），使攻击者能够以受害者的身份执行操作。

为了防范CSRF攻击，网站开发者和运维人员可以采取以下措施：

1. 使用CSRF令牌：在用户提交表单或执行敏感操作时，为每个请求生成一个随机的、唯一的CSRF令牌。将这个令牌与用户的会话关联，并在请求中包含该令牌。服务器端需要验证每个请求的令牌，确保它与用户会话的令牌匹配。这样可以防止攻击者伪造有效的请求。
2. 验证请求来源：检查请求的来源，例如HTTP的Referer头或Origin头，确保请求来自于合法的域名。这有助于防止跨域的CSRF攻击。
3. 使用SameSite Cookies属性：设置SameSite属性为“Strict”或“Lax”，可以防止浏览器在跨站请求时发送cookies。这可以降低CSRF攻击的风险，但可能不适用于所有场景。
4. 要求用户重新验证身份：在执行敏感操作（如修改密码或执行交易）时，要求用户重新输入密码或进行二次验证。这可以降低CSRF攻击的成功率。
5. 提高安全意识：教育用户识别和避免钓鱼网站、恶意邮件等，以降低CSRF攻击的成功率。

### 谈谈你对SQL注入的理解

SQL注入（SQL Injection）是一种网络安全漏洞，它允许攻击者通过在输入数据中插入恶意SQL代码，来控制或操纵应用程序与数据库之间的交互。这种攻击通常发生在应用程序未对用户输入进行充分验证和过滤的情况下。攻击者可以利用SQL注入漏洞来窃取、篡改或删除数据，甚至可能获得对整个数据库系统的控制权。

SQL注入攻击的常见类型包括：

1. 联合查询注入（Union-based SQL Injection）：攻击者通过构造包含UNION语句的恶意SQL查询，使其与原始查询合并，从而获取额外的数据。
2. 基于错误的SQL注入（Error-based SQL Injection）：攻击者利用数据库在执行恶意查询时产生的错误信息，获取有关数据库结构和数据的信息。
3. 盲注SQL注入（Blind SQL Injection）：攻击者通过逐步尝试不同的输入值，并根据应用程序的响应来推断数据库结构和数据。这种攻击方式较为缓慢，但在目标系统没有显示具体错误信息的情况下仍然有效。

为了防止SQL注入攻击，开发者和运维人员可以采取以下措施：

1. 使用预编译语句和参数化查询：预编译语句和参数化查询可以将SQL代码与数据分离，从而避免恶意代码的注入。这是防止SQL注入的最有效方法。
2. 对用户输入进行验证和过滤：确保所有用户输入都经过适当的验证和过滤，以防止恶意代码的注入。使用白名单验证策略，仅允许已知安全的输入值。
3. 最小权限原则：为应用程序的数据库账户分配最小必要权限，以减少潜在的损害。例如，如果应用程序仅需要读取数据，不应给予其写入和删除权限。
4. 数据库错误信息处理：避免在应用程序中显示详细的数据库错误信息，以防攻击者利用这些信息进行攻击。可以使用自定义错误页面或者错误日志来记录错误信息，以便进行调试。
5. 定期进行安全审计和更新：定期检查应用程序和数据库的安全设置，修复已知的漏洞，确保使用的软件和库是最新的。进行代码审查和安全测试，以发现潜在的安全漏洞。

## 跨端开发

### 微信小程序

#### 简述下 wx.navigateTo(), wx.redirectTo(), wx.switchTab(), wx.navigateBack(), wx.reLaunch()的区别?

微信小程序中，这些 API 用于页面跳转和导航，它们之间的主要区别如下：

1. wx.navigateTo(): 这个方法用于跳转到一个新页面，保留当前页面，新页面会被添加到页面栈中。用户可以点击返回按钮回到原页面。适用于多级页面的跳转。
2. wx.redirectTo(): 此方法用于跳转到一个新页面，但不保留当前页面，即不允许用户返回。适用于无需返回上一页面的场景。
3. wx.switchTab(): 这个方法用于切换到 tabBar 页面，并关闭其他非 tabBar 页面。tabBar 页面是小程序底部导航栏的页面，可以方便用户在不同页面之间切换。
4. wx.navigateBack(): 此方法用于返回上一页面或多级页面。可以指定返回的层数，默认为1，即返回上一页面。这个方法是从页面栈中删除相应页面实现返回功能的。
5. wx.reLaunch(): 这个方法用于关闭所有页面，打开到应用内的某个页面。适用于需要清空页面栈，重新启动小程序的场景。

#### 谈谈微信小程序的架构以及为什么要用到双线程？

微信小程序的架构主要分为两部分：逻辑层（App Service）和渲染层（Webview）。这两个部分运行在不同的线程中，形成了双线程架构。

1. 逻辑层（App Service）： 逻辑层主要负责处理数据、业务逻辑和页面事件等。在这一层中，开发者编写 JavaScript 代码来实现小程序的功能。逻辑层运行在一个独立的线程中，通常称为 JSCore 线程。微信客户端提供了一些基础库，使得开发者可以调用相关 API 来实现小程序的各种功能。
2. 渲染层（Webview）： 渲染层主要负责展示小程序的界面。在这一层中，开发者使用 WXML（类似于 HTML）和 WXSS（类似于 CSS）来定义页面结构和样式。每一个页面对应一个 Webview，每个 Webview 独立运行在各自的线程中。

双线程架构的主要原因是为了实现逻辑层和渲染层的分离，提高小程序的性能。

1. 性能优化：通过将业务逻辑和页面渲染分离到不同的线程中，可以有效避免渲染线程的阻塞，提高小程序的运行性能。当逻辑层进行计算或处理数据时，渲染层不会受到影响，能够保持流畅的用户体验。
2. 安全性：双线程架构可以隔离 DOM 操作和 JavaScript 代码的执行，增强了小程序的安全性。由于小程序不允许直接操作 DOM，开发者只能通过官方提供的 API 来实现页面的交互和数据绑定。这样可以避免一些潜在的安全问题，例如跨站脚本攻击（XSS）。
3. 简化开发：双线程架构使得开发者可以专注于业务逻辑和页面渲染，而无需关心它们之间的通信。微信小程序提供了丰富的 API 和组件，帮助开发者快速搭建高性能的应用。

综上所述，双线程架构有助于提高微信小程序的性能、安全性和易用性。

#### 微信小程序体积压缩的方案？

为了提高微信小程序的加载速度和运行性能，开发者可以采取一些压缩和优化措施。以下是一些常见的微信小程序体积压缩方案：

1. 代码压缩与混淆：对小程序的 JavaScript 代码进行压缩和混淆，可以有效地减小文件体积。使用诸如 UglifyJS、Terser 等工具可以实现这一目标。
2. 压缩 WXML 和 WXSS：对 WXML（类似于 HTML）和 WXSS（类似于 CSS）文件进行压缩，移除不必要的空格、换行和注释，以减小文件大小。可以使用一些构建工具，如 Gulp、Webpack 等，结合相应的插件实现自动化压缩。
3. 优化图片资源：对图片资源进行压缩和优化，以减少图片文件的大小。可以使用一些在线工具或构建工具插件，如 TinyPNG、ImageOptim、imagemin 等，对图片进行有损或无损压缩。此外，尽量使用小程序支持的 WebP 格式，以获得更好的压缩效果。
4. 按需加载：对于不是首次渲染必须的资源，可以采用按需加载的策略，以减小初始加载的文件体积。例如，可以使用小程序的分包加载功能，将不同页面或功能的代码和资源拆分成多个子包，实现按需加载。
5. 减少不必要的资源：审查小程序中的资源文件，移除不必要的图片、字体、图标等资源。同时，尽量避免使用大型的第三方库，只引入所需的模块。
6. 使用云开发：利用微信提供的云开发功能，将一些资源放在云端，而不是打包到小程序中。例如，将图片、音频和视频等资源存储在云存储中，按需获取。
7. 代码拆分：避免在同一个文件中编写过多的代码，可以将功能模块化，拆分成多个文件。这样不仅可以提高代码的可维护性，还能避免加载过多不必要的代码。
8. 优化数据请求：减少数据请求的频率和数据量，尽量在后端完成数据处理和筛选。此外，可以使用缓存策略，减少不必要的数据请求。

通过这些方案，可以有效地减小微信小程序的体积，提高加载速度和运行性能。在开发过程中，结合具体的项目需求，灵活采用这些优化措施。

#### 微信小程序的生命周期函数

微信小程序的生命周期函数是指在小程序运行过程中，框架自动执行的一些函数。这些函数主要用于监听页面或应用的生命周期事件，如页面的加载、显示、隐藏等。以下是微信小程序中的主要生命周期函数：

1. 应用生命周期函数（App 对象）：
   - onLaunch：当小程序启动时触发，全局只触发一次。可用于初始化全局数据、检查用户登录状态等。
   - onShow：当小程序从后台进入前台显示时触发。可以在此函数中获取用户数据、更新页面数据等。
   - onHide：当小程序从前台进入后台时触发。可以在此函数中暂停计时器、保存数据等。
2. 页面生命周期函数（Page 对象）：
   - onLoad：页面加载时触发。一个页面只会调用一次，可在此函数中获取页面参数、请求数据等。
   - onShow：页面显示时触发。每次打开页面都会调用一次。可以在此函数中更新页面数据、开启计时器等。
   - onReady：页面初次渲染完成时触发。一个页面只会调用一次。可以在此函数中获取已渲染的 DOM 节点等。
   - onHide：页面隐藏时触发。当页面离开前台或被其他页面覆盖时触发。可以在此函数中暂停计时器、保存数据等。
   - onUnload：页面卸载时触发。当页面被关闭时触发。可以在此函数中清理页面数据、监听器等。
3. 组件生命周期函数（Component 对象）：
   - created：组件实例刚刚被创建时触发。可以在此函数中初始化组件数据。
   - attached：组件实例被插入页面节点树时触发。可以在此函数中进行数据绑定等操作。
   - ready：组件布局完成后触发。可以在此函数中操作子组件、获取组件节点信息等。
   - moved：组件实例被移动到另一个节点树时触发。可以在此函数中处理组件的移动。
   - detached：组件实例被从页面节点树移除时触发。可以在此函数中进行清理工作，如移除事件监听器、销毁对象等。

根据不同的场景，开发者可以在这些生命周期函数中执行相应的操作。注意，部分生命周期函数的执行顺序是固定的，例如页面的 onLoad 一定在 onShow 之前执行。在编写代码时，需要注意生命周期函数的执行顺序和相应的作用。

#### 微信小程序的优劣势

微信小程序作为一种轻量级的应用形式，具有一定的优势和劣势。下面是一些主要的优劣势：

优势：

1. 低成本：与传统的原生应用相比，小程序的开发成本较低，开发周期较短，可以快速实现产品上线。
2. 无需安装：用户无需下载安装即可使用，节省了用户的时间和设备存储空间。
3. 跨平台：微信小程序基于微信客户端，可以在 Android 和 iOS 平台上运行，实现了一定程度的跨平台兼容性。
4. 更新迅速：小程序的更新不需要用户进行手动操作，每次打开都会获取最新版本，方便开发者快速迭代和修复问题。
5. 流量入口多样：微信小程序可以通过微信内搜索、公众号、朋友圈、小程序码等多种渠道进行推广，便于吸引用户。
6. 安全性：微信小程序不允许直接操作 DOM，限制了一些潜在的安全风险，如跨站脚本攻击（XSS）。
7. 丰富的 API 和组件：微信提供了丰富的 API 和组件，方便开发者快速实现功能和界面，提高开发效率。

劣势：

1. 功能受限：相较于原生应用，小程序的功能和权限受到限制，某些复杂的功能可能无法实现。
2. 性能：由于小程序运行在微信客户端内，性能可能不如原生应用。尤其是在低端设备上，性能问题可能更加明显。
3. 用户粘性较低：用户使用小程序的门槛较低，但与此同时，用户流失的风险也相对较高。
4. 依赖微信生态：微信小程序完全依赖于微信生态，受制于微信的政策和规则。一旦微信生态发生变化，小程序可能受到影响。
5. 跨平台局限性：虽然小程序具有一定的跨平台特性，但在不同平台上可能仍存在兼容性和性能差异。同时，小程序无法在非微信环境下运行。

根据具体的业务需求和场景，开发者可以权衡微信小程序的优劣势，选择是否采用小程序作为应用开发的方式。

#### bindtap和catchtap的区别是什么?

bindtap是普通的点击事件绑定，而catchtap是阻止事件冒泡的点击事件绑定。简单来说，如果有多个嵌套的组件都绑定了tap事件，使用catchtap可以只触发当前组件的tap事件，而不会触发其父级组件的tap事件。而使用bindtap则可能会触发其父级组件、祖先级组件的tap事件。

<hr />

## 数据结构与算法

### 深度优先遍历和广度优先遍历的区别是什么？

深度优先遍历（Depth-First Search, DFS）和广度优先遍历（Breadth-First Search, BFS）都是用于遍历或搜索树或图的算法。这两种方法各有其优缺点：

### 深度优先遍历 (DFS)：

#### 优点：

1. **空间效率**：在树的深度远小于广度时，DFS通常更加空间效率。因为它只需要存储一个路径的信息，而不是存储整个层的信息。
2. **寻找深度解**：当问题需要找到深度解（例如求解迷宫的一条路径）时，DFS是一个很好的选择。
3. **实现相对简单**：使用递归或堆栈，DFS相对容易实现。
4. **可以找到连通分量**：对于图的分析，DFS可以被用来识别图的连通分量。

#### 缺点：

1. **可能不完整**：在无限或非常大的搜索空间中，DFS可能永远不会结束，或者可能会错过更优解。
2. **可能找到非最优解**：不同于BFS，DFS可能找到一个解，但并不是最优解。
3. **使用递归可能导致栈溢出**：如果搜索树非常深，递归实现可能会导致栈溢出。

### 广度优先遍历 (BFS)：

#### 优点：

1. **找到最优解**：如果存在多个解，BFS会找到最少步骤的解，因为它首先检查所有的近邻节点。
2. **完整性**：即使在无限或非常大的搜索空间中，BFS也可以保证找到解（如果存在）。
3. **适用于广度大于深度的情况**：如果树或图的广度远小于深度，BFS可能更加高效。

#### 缺点：

1. **空间消耗**：因为BFS需要存储所有扩展节点的信息，所以空间消耗可能非常大，特别是当广度远大于深度时。
2. **可能较慢找到深度解**：如果解在较深的层，BFS可能需要更多时间来找到它，因为它需要逐层搜索。

### 总结

选择DFS还是BFS主要取决于问题的具体要求和搜索空间的结构。如果你需要找到最优解并且广度相对较小，BFS可能是更好的选择。如果你只需要找到一个解，或者如果深度相对较小，DFS可能更加适合。在实际应用中，深度优先搜索和广度优先搜索的选择可能还取决于其他许多因素，如问题的特殊性质和可用资源。

<hr />

## 测试

### 你觉得编写测试的好处是什么？

编写测试的好处有很多，以下是其中的一些关键优势：

1. 保证代码质量：编写测试可以帮助确保代码的质量，因为它会检查代码的正确性和功能性。通过发现潜在的错误和问题，我们可以更快地修复它们，确保代码的稳定性和可靠性。
2. 防止回归：当对现有代码进行修改或扩展时，测试可以确保这些更改不会导致之前解决的问题再次出现。这称为“防止回归”，有助于维护代码的长期稳定性。
3. 提高开发效率：测试可以帮助开发者更快地识别和解决问题，从而提高开发效率。自动化测试还可以在开发过程中减轻人工测试的负担，使开发者可以集中精力编写更多的功能代码。
4. 易于重构和优化：测试可以让开发者在重构或优化代码时更有信心，因为他们知道任何潜在的问题都会被测试捕捉到。这使得代码更具可维护性，可以更轻松地进行优化和改进。
5. 提升团队协作：编写测试有助于确保代码对其他团队成员更具可读性和可理解性。测试可以作为代码的文档，帮助其他开发者了解代码的预期行为和功能。这在团队合作中尤为重要，可以提高整个团队的生产力。
6. 客户信任：具有全面测试的软件项目更容易赢得客户的信任，因为它们展示了开发团队对质量的关注和承诺。这有助于提高客户满意度并为未来的项目创造良好的声誉。
7. 减少错误成本：及时发现和解决问题可以降低错误的长期成本。在项目后期发现问题的成本通常比在开发过程中早期发现和修复的成本要高得多。通过编写测试，我们可以在项目早期发现和解决问题，降低整体成本。

总之，编写测试对于确保软件质量、提高开发效率、优化代码、增强团队协作和赢得客户信任等方面具有重要作用。

### ATDD、TDD和BDD的区别？

ATDD（接受测试驱动开发）、TDD（测试驱动开发）和BDD（行为驱动开发）都是软件开发的实践方法，它们之间有一定的关联，但各有侧重点和特点。

1. TDD（测试驱动开发）： TDD 是一种敏捷开发实践，它要求开发者在编写功能代码之前先编写测试用例。开发者首先编写一个失败的测试，然后编写实现功能的最少量代码以使测试通过，最后重构代码以提高质量。TDD 的核心原则是“红-绿-重构”（红色表示失败的测试，绿色表示通过的测试，重构表示改进代码质量）。TDD 的主要目的是通过编写简洁、可维护的代码来提高软件质量。
2. ATDD（接受测试驱动开发）： ATDD 与 TDD 类似，但关注的是从用户的角度编写测试。开发者在实现功能之前，先与客户、产品经理和测试人员合作，共同确定功能的验收标准和测试用例。这些测试用例描述了应用程序应该如何满足用户需求和期望。然后，开发者使用 TDD 的方法来实现功能，确保满足这些验收标准。ATDD 的主要目的是确保软件满足用户需求和业务目标。
3. BDD（行为驱动开发）： BDD 是一种介于 TDD 和 ATDD 之间的开发实践，它关注于使用通用的、自然语言描述的行为规范来编写测试。BDD 强调与非技术人员（如产品经理、业务分析师等）的沟通和协作，确保团队对软件行为有共同的理解。BDD 测试用例描述了给定特定情境下，软件应该如何响应。这些用例通常遵循“给定-当-那么”（Given-When-Then）的格式。BDD 的主要目的是提高团队间的沟通和协作，确保软件满足业务需求。

总结一下，TDD 主要关注代码质量和功能的正确性，ATDD 关注软件满足用户需求和业务目标，而 BDD 关注团队间的沟通和协作，以及确保软件符合业务需求。在实际项目中，这三种方法可以相互结合使用，以达到更好的软件开发效果。

<hr />

## 运维

### 什么是正向代理和反向代理？

正向代理（Forward Proxy）和反向代理（Reverse Proxy）是两种不同类型的代理服务器。它们在网络架构中发挥着重要的作用，具体来说：

1. 正向代理： 正向代理位于客户端与目标服务器之间，充当客户端与目标服务器之间的中间人。客户端发起请求时，请求首先到达正向代理服务器，然后代理服务器将请求转发到目标服务器。正向代理的主要作用包括：

- 为内部网络客户端提供对外部资源的访问能力
- 提供缓存功能，加速对常用资源的访问
- 对客户端身份进行匿名化
- 实现负载均衡
- 实施安全策略和访问控制

1. 反向代理： 反向代理位于客户端与目标服务器之间，充当目标服务器与客户端之间的中间人。客户端发起请求时，请求首先到达反向代理服务器，然后代理服务器将请求转发到后端服务器。反向代理的主要作用包括：

- 提供负载均衡，将客户端请求分发到多个后端服务器
- 提供SSL加密和解密功能，实现安全通信
- 提供缓存功能，加速对常用资源的访问
- 实现应用服务器的隔离，保护后端服务器免受恶意攻击
- 集中处理和监控客户端请求，实现统一的访问控制和安全策略

简言之，正向代理主要面向客户端，帮助客户端访问互联网上的资源；反向代理主要面向服务器，帮助服务器处理来自客户端的请求。

### 为什么Nginx性能这么高？

Nginx 的高性能可以归因于其独特的设计和架构。以下是 Nginx 高性能的关键因素：

1. 事件驱动、异步非阻塞架构：Nginx 使用了事件驱动的异步非阻塞 I/O 模型。这种模型允许 Nginx 在单个进程中处理大量并发连接，而无需为每个连接创建一个新的线程或进程。这大大降低了上下文切换和内存分配的开销，提高了性能。
2. 轻量级：Nginx 的代码量较小，安装和配置简单，占用资源较少。这使得 Nginx 在处理请求时能够更高效地利用系统资源。
3. 高效的静态文件处理：Nginx 对静态文件的处理能力非常出色，它可以利用 sendfile 系统调用、TCP_CORK 和 TCP_NOPUSH 套接字选项等高级 I/O 功能，以高效地为静态资源提供服务。
4. Keep-Alive 连接：Nginx 支持 HTTP Keep-Alive 连接，这意味着多个请求可以在同一连接上进行，减少了连接建立和关闭的开销。
5. 内建的负载均衡和反向代理：Nginx 提供了功能强大的反向代理和负载均衡功能，可以在多个后端服务器之间分发请求，提高整体性能。
6. 缓存功能：Nginx 提供了缓存功能，可以将后端服务器的响应进行缓存，加速对常用资源的访问，减轻后端服务器的负担。
7. 可扩展性：Nginx 支持模块化扩展，用户可以根据需要添加功能模块，定制 Nginx 以满足特定需求。
8. 稳定性：Nginx 的稳定性非常高，即使在高负载情况下也能保持稳定运行。这使得 Nginx 能够在生产环境中提供可靠的服务。

这些因素共同使得 Nginx 成为一个高性能的 Web 服务器和反向代理服务器。其优异的性能表现吸引了许多大型网站和互联网公司将 Nginx 作为首选的 Web 服务器和反向代理服务器。

### Nginx的优缺点？Nginx应用场景？

Nginx 是一个高性能、轻量级的 Web 服务器和反向代理服务器。它广泛用于网站和网络应用的开发，其优缺点如下：

优点：

1. 高性能：Nginx 使用事件驱动的异步非阻塞架构，可以支持大量并发连接。相较于其他传统服务器，例如 Apache，Nginx 在并发场景下具有更低的资源消耗和更高的性能。
2. 轻量级：Nginx 的代码量较小，安装和配置简单，占用资源较少。
3. 反向代理：Nginx 提供了功能强大的反向代理功能，可以实现负载均衡、缓存、SSL 加密解密等。
4. 静态文件处理：Nginx 对静态文件的处理能力非常出色，能高效地为静态资源提供服务。
5. 可扩展性：Nginx 支持模块化扩展，用户可以根据需要添加功能模块。
6. 稳定性高：Nginx 有着很高的稳定性，被广泛应用于生产环境。

缺点：

1. 动态语言支持较弱：与 Apache 相比，Nginx 对动态语言的支持不够完善，通常需要与其他应用服务器（如 PHP-FPM、uWSGI 等）配合使用。
2. 模块更新和扩展：Nginx 模块需要在编译时集成，无法像 Apache 那样通过动态加载模块。当需要更新或添加模块时，通常需要重新编译 Nginx。
3. 社区支持：虽然 Nginx 社区不断发展，但与 Apache 等老牌 Web 服务器相比，其社区支持相对较弱。

Nginx 应用场景：

1. 静态资源服务器：Nginx 非常擅长处理静态文件，如图片、CSS、JavaScript 等。在很多场景下，Nginx 作为静态资源服务器可以减轻应用服务器的负担，提高响应速度。
2. 反向代理和负载均衡：Nginx 提供了强大的反向代理和负载均衡功能，可以将客户端请求分发到多个后端服务器，提高服务的可用性和扩展性。
3. SSL 终端：Nginx 支持 SSL/TLS 加密和解密，可作为 HTTPS 服务的终端，保证数据的安全传输。
4. 缓存服务器：Nginx 可以作为缓存服务器，对后端服务器的响应进行缓存，加速对常用资源的访问，提高用户体验。
5. Web 应用服务器：虽然 Nginx 对动态语言支持的不足，但它仍然可以与其他应用服务器（如 PHP-FPM、uWSGI 等）配合使用，共同组成 Web 应用的整体架构。例如，Nginx 可以作为反向代理服务器，将动态请求转发给 PHP-FPM 处理，同时负责静态文件的处理。

总之，Nginx 的高性能、轻量级和稳定性使其在众多应用场景中得到广泛应用，特别是在处理静态文件、反向代理和负载均衡等方面表现出色。然而，对于动态语言支持和模块扩展方面，Nginx 仍然需要与其他应用服务器配合使用以获得更好的效果。

### 跨域问题及解决方案*

1. 浏览器处于安全考虑，默认添加了同源策略，同源策略：同协议，同域名，同端口。当使用xhr对象发起请求时，发起请求的源地址，和要请求的目标地址，不同源时，浏览器会默认阻止，认为这次请求跨域，阻止，报错
2. 同源策略：

   1. 协议：http 和 https
   2. 域名：[www.baidu.com](http://www.baidu.com) 和 [www.qq.com](http://www.qq.com)
      - [www.baidu.com](http://www.baidu.com)
      - baike.baidu.com
   3. 端口：3000 和 3001
3. 跨域的解决方式

   开发环境，配置：vue.config.js 配置proxy

   ```
   module.exports = {
     devServer: {
       proxy: {
         '/api': {
           target: 'http://your-backend-server.com', // 后端服务地址
           changeOrigin: true,
           pathRewrite: { '^/api': '' }, // 路径重写规则
         },
       },
     },
   };
   ```

   生产环境：

   1. CORS：后端服务器设置CORS,在请求的资源信息上设置：Access-Control-Allow-Origin.

      ```
      const express = require('express');
      const app = express();

      app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // 允许所有来源，也可以指定具体的域名，例如 'http://example.com'
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      });

      app.get('/data', (req, res) => {
        res.json({ message: 'This is data from the server!' });
      });

      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
      ```
   2. 服务器代理：不适用浏览器直接发起跨域请求，先搭建一个中间服务器，由自己搭建的服务器发起原本的跨域请求，拿到数据。再通过浏览器请求自己的服务器中跨域的数据。

### 如何用Nginx解决前端跨域问题？

要使用 Nginx 解决前端跨域问题，您可以通过配置 Nginx 为您的 Web 服务添加 CORS（跨域资源共享）相关的响应头。以下是一个简单的示例，展示如何在 Nginx 配置文件中实现 CORS 配置：

1. 打开 Nginx 配置文件，通常位于 `/etc/nginx/nginx.conf` 或 `/etc/nginx/sites-available/your_site_config`。
2. 在配置文件中找到您想要添加 CORS 支持的 `location` 块。如果没有，您可以创建一个。
3. 在 `location` 块中添加以下配置：

   ```nginx
   location / {
       # ...原有配置...

       # 添加CORS相关的响应头
       if ($request_method = 'OPTIONS') {
           add_header 'Access-Control-Allow-Origin' '*';
           add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
           add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
           add_header 'Access-Control-Max-Age' 1728000;
           add_header 'Content-Type' 'text/plain; charset=utf-8';
           add_header 'Content-Length' 0;
           return 204;
       }
       if ($request_method = 'GET') {
           add_header 'Access-Control-Allow-Origin' '*';
           add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
           add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
           add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
       }
   }
   ```

   在这个示例中，我们为 `OPTIONS` 请求和 `GET` 请求添加了 CORS 相关的响应头。您可以根据实际需求调整允许的请求方法和其他配置。
4. 保存配置文件并重新加载 Nginx 以使更改生效：

现在，Nginx 已经为您的 Web 服务添加了 CORS 支持，应该可以解决前端跨域问题。请注意，上面的示例中使用了通配符 `*` 作为 `Access-Control-Allow-Origin` 的值，这意味着允许所有域进行跨域访问。在实际生产环境中，您可能需要将其替换为特定的域名以提高安全性。

### 谈谈你对Docker的理解

Docker是一个开源的容器平台，它可以帮助开发者和运维人员轻松地打包、分发和运行应用。它基于容器化技术，让应用程序和其依赖环境作为一个整体打包在一起，实现了环境与应用程序的隔离。Docker的核心思想是将应用程序与底层基础设施分离，从而使开发和部署过程更加简单、高效和可靠。

Docker的主要特点包括：

1. 轻量级：Docker使用容器来运行应用，这些容器共享宿主机的操作系统内核，因此容器的开销小于虚拟机。它们启动快速，占用的资源更少。
2. 易于打包和分发：Docker可以将应用程序及其依赖项一起打包成一个镜像，这使得应用程序可以在不同的环境中轻松移植和复制。Docker Hub等仓库提供了便利的镜像分发和管理。
3. 隔离性：每个容器运行在自己的命名空间中，拥有独立的文件系统、网络和进程空间，这意味着容器之间相互隔离，可以在同一台机器上运行多个互不干扰的应用。
4. 可扩展性：Docker支持容器的水平扩展和垂直扩展，可以根据需要快速添加或删除容器实例，以应对不同的负载需求。
5. DevOps友好：Docker支持持续集成与持续部署（CI/CD），使得开发、测试和生产环境更加统一，有助于提高开发和运维团队的协作效率。
6. 生态系统丰富：Docker拥有庞大的社区和丰富的插件生态系统，包括Docker Compose、Docker Swarm、Kubernetes等，这些工具可以帮助用户更好地管理和协调多个容器。

总之，Docker是一个强大的容器化技术平台，它使应用程序的开发、部署和运维更加简单、高效和可靠。

### Docker如何批量清理临时镜像文件？

在Docker中，可以使用以下命令批量清理临时镜像文件：

```
docker image prune -a
```

该命令将删除所有未被使用的镜像和标签。如果你只想删除未被使用的镜像，可以使用以下命令：

```
docker image prune
```

### Docker本地的镜像文件都存放在哪里？

在 Docker 中，本地的镜像文件存储在 Docker 的文件系统中，一般位于宿主机的`/var/lib/docker`目录下。在该目录下有多个子目录和文件，其中比较重要的有：

- `containers/`：存储容器的文件系统和元数据。
- `image/`：存储镜像文件和元数据。
- `volumes/`：存储 Docker 卷的数据。
- `networks/`：存储 Docker 网络的配置和状态。

在`image/`目录下，有一个子目录`overlay2/`（在使用 overlay2 存储驱动的情况下），它包含了所有的镜像文件和元数据，每个镜像对应一个目录。例如，如果有一个名为`nginx:latest`的镜像，则它的文件存储路径为`/var/lib/docker/image/overlay2/<hash>/merged/`，其中`<hash>`是镜像的 SHA256 哈希值。

请注意，这些路径可能因为 Docker 版本、存储驱动等因素而有所不同。如果想要确定本地 Docker 存储的路径，可以使用以下命令查看 Docker 的配置信息：

```
docker info
```

其中会列出 Docker 存储的根目录和数据子目录。

### Docker如何停止所有正在运行的容器？

要停止所有正在运行的容器，可以使用以下命令：

```
docker stop $(docker ps -q)
```

该命令使用`docker ps -q`命令列出所有正在运行的容器的 ID，然后将其传递给`docker stop`命令以停止这些容器。这样就可以一次性停止所有正在运行的容器。

如果你希望删除所有停止的容器，可以使用以下命令：

```
docker container prune
```

该命令将删除所有已经停止的容器。请注意，这些命令将永久删除容器，因此在使用之前请确保你确实想要删除这些容器。

### 构建Docker镜像应该遵循哪些原则？

构建Docker镜像时，应遵循一些原则以保证镜像的高质量、安全性和可维护性。以下是一些建议：

1. 使用官方基础镜像：尽可能使用官方提供的基础镜像，因为它们经过了广泛测试且得到了良好的支持。
2. 保持镜像轻量化：减少镜像大小，只包含运行应用程序所需的最小依赖。这将提高镜像的传输速度和部署时间。
3. 使用多阶段构建：通过多阶段构建，可以在一个Dockerfile中使用多个构建阶段，以便更有效地处理构建过程。这有助于减少镜像大小和优化构建时间。
4. 缩小镜像攻击面：确保镜像中只包含必要的组件，避免安装不必要的软件包，以降低安全风险。
5. 使用.dockerignore文件：使用.dockerignore文件排除不需要的文件和目录，以减小镜像大小并加快构建速度。
6. 标签和版本控制：为镜像使用清晰、有意义的标签，并进行版本控制。这有助于跟踪和管理不同版本的镜像。
7. 缓存和层次化：充分利用Docker构建缓存，并将Dockerfile中的指令合理分层。这有助于加速构建过程并提高可维护性。
8. 设置适当的用户权限：避免使用root用户运行容器，以降低潜在的安全风险。
9. 指定资源限制：设置适当的资源限制，如CPU和内存，以防止容器消耗过多宿主机资源。
10. 文档化：为Dockerfile和镜像提供清晰的文档，以便其他人了解如何使用和维护它们。

遵循这些原则有助于创建高质量、安全且易于维护的Docker镜像。

### 谈谈你对Docker-Compose的理解

Docker Compose是一个用于定义和运行多容器Docker应用程序的工具。它允许用户使用YAML文件（通常命名为`docker-compose.yml`）来描述一个完整的应用程序环境，包括服务、网络和卷等配置。通过Docker Compose，开发者可以轻松地管理复杂的多容器应用，实现一键式启动、停止和重新部署。

以下是Docker Compose的一些主要特点：

1. 服务定义：使用YAML语法定义应用程序的各个服务。每个服务都基于一个Docker镜像，并且可以配置其端口映射、环境变量、依赖关系等。
2. 网络管理：Docker Compose允许用户定义应用程序内部的网络，以便实现服务之间的隔离和通信。默认情况下，Docker Compose会创建一个网络，并将所有服务连接到该网络。
3. 卷管理：Docker Compose支持定义和管理持久化存储卷，以便在容器之间共享数据。这对于数据库等需要持久化存储的应用非常有用。
4. 依赖管理：Docker Compose可以管理服务之间的依赖关系，确保服务按照正确的顺序启动和关闭。这可以通过`depends_on`关键字来实现。
5. 一键操作：使用`docker-compose up`命令，可以一次性启动定义在YAML文件中的所有服务。同样地，`docker-compose down`命令可以一次性停止所有服务。
6. 开发和生产环境配置：Docker Compose支持使用多个YAML文件来覆盖和扩展配置，这使得开发者可以针对开发、测试和生产环境使用不同的配置。

Docker Compose大大简化了多容器应用程序的管理，使开发者可以专注于编写应用程序代码，而无需关心底层的容器管理和编排。然而，需要注意的是，虽然Docker Compose适用于开发和测试环境，但在生产环境中，可能需要更强大的容器编排工具，如Kubernetes。

### 谈谈你对K8S的理解

Kubernetes（简称K8s）是一个开源的容器编排平台，旨在自动化部署、扩展和管理容器化应用程序。它最初由Google开发，后来成为Cloud Native Computing Foundation（CNCF）的一部分。Kubernetes提供了一种声明式的方式来描述应用程序的部署和运行状态，使得复杂的容器化应用程序可以在多个主机上进行分布式部署和管理。

以下是Kubernetes的一些主要特点：

1. 高可用性：Kubernetes支持容器在集群的不同节点上进行分布式部署，以实现负载均衡和故障转移。这有助于提高应用程序的可用性和性能。
2. 水平可扩展：Kubernetes可以根据负载需求自动扩展或缩减容器实例数量。这可以通过Deployment资源中的副本数（Replicas）进行配置。
3. 自我修复：Kubernetes监控容器状态，当容器出现故障时，它可以自动重新启动容器、替换容器或重新调度容器到其他节点上，从而确保应用程序始终处于健康状态。
4. 声明式配置：Kubernetes使用YAML或JSON文件描述应用程序的部署和运行状态，这些配置文件可以与源代码一起存储和管理，从而实现基础设施即代码（Infrastructure as Code）。
5. 服务发现和负载均衡：Kubernetes提供了内置的服务发现和负载均衡机制，可以将流量自动分发到不同的容器实例上，以实现高可用性和性能。
6. 存储管理：Kubernetes支持多种持久化存储解决方案，如NFS、iSCSI、GlusterFS等。它允许用户为容器动态配置和管理持久化存储卷。
7. 密钥和配置管理：Kubernetes可以管理应用程序的敏感信息（如密码、密钥等）和配置文件，使得这些信息可以在不同的容器实例之间安全地共享。
8. 强大的生态系统：Kubernetes拥有丰富的插件和扩展生态系统，例如Helm（用于包管理）、Prometheus（用于监控）等，这些工具可以帮助用户更好地管理和监控Kubernetes集群。

总之，Kubernetes是一个功能强大的容器编排平台，它提供了一种高度自动化和可扩展的方式来管理容器化应用程序。尽管Kubernetes的学习曲线较陡峭，但对于大型、复杂的应用程序，它是一个非常有价值的工具。

<hr />

## 数组处理之reduce方法

累加器

reducer 逐个遍历数组元素，每一步都将当前元素的值与前一步的结果相加（该结果是之前所有步骤结果的总和）——直到没有更多需要相加的元素。

```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

## 数据结构与算法

实现栈，要求有栈入，栈出，有length方法，实现push，pop, peek,isEmpty ,和length方法

```
  class Stack {
        constructor() {
          this.index = -1
          this.arr = []
        }
        push(element) {
          this.arr[++this.index] = element
        }

        pop() {
          return this.arr[this.index--]
        }

        peek() {
          return this.arr[this.index]
        }

        isEmpty() {
          return this.index < 0
        }

        get length() {
          return this.index + 1
        }
      }  
```

### 排序

#### 快速排序（Quick Sort）

```typescript
function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    // 获取分区索引
    const partitionIndex = partition(arr, low, high);

    // 递归调用
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  // 选择基准值
  const pivot = arr[high];

  // 初始化分区索引
  let i = low - 1;

  // 将小于等于基准值的元素放到基准值的左侧
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // 交换基准值和分区索引+1位置的元素
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // 返回分区索引+1作为新的基准值索引
  return i + 1;
}

// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 归并排序（Merge Sort）

```typescript
function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }

  // 分割数组
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 递归调用并合并结果
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  // 合并两个已排序的数组
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  // 将剩余的元素添加到结果数组
  return result.concat(left, right);
}

// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(mergeSort(arr));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 堆排序（Heap Sort）

```typescript
function heapSort(arr: number[]): void {
  let n = arr.length;

  // 构建大顶堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 逐个提取元素并调整堆结构
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    n--;
    heapify(arr, n, 0);
  }
}

function heapify(arr: number[], n: number, i: number): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
heapSort(arr);
console.log(arr);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 冒泡排序（Bubble Sort）

```typescript
function bubbleSort(arr: number[]): void {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果没有发生交换，说明数组已经有序
    if (!swapped) {
      break;
    }
  }
}

// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
bubbleSort(arr);
console.log(arr);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 选择排序（Selection Sort）

```typescript
function selectionSort(arr: number[]): void {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // 寻找最小元素的索引
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 交换最小元素与当前元素
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}

// 测试用例
const arr1 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
selectionSort(arr1);
console.log(arr1);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 插入排序（Insertion Sort）

```typescript
function insertionSort(arr: number[]): void {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // 将大于 key 的元素向后移动
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 插入 key 到正确位置
    arr[j + 1] = key;
  }
}

// 测试用例
const arr2 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
insertionSort(arr2);
console.log(arr2);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 希尔排序（Shell Sort）

```typescript
function shellSort(arr: number[]): void {
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }
}

// 测试用例
const arr3 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
shellSort(arr3);
console.log(arr3);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 计数排序（Counting Sort）

```typescript
function countingSort(arr: number[]): number[] {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const count: number[] = new Array(range).fill(0);
  const output: number[] = new Array(arr.length);

  // 统计元素出现次数
  arr.forEach((value) => {
    count[value - min]++;
  });

  // 累加计数
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // 生成结果数组
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
}

// 测试用例
const arr4 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(countingSort(arr4));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 基数排序（Radix Sort）

```typescript
function radixSort(arr: number[]): void {
  const max = Math.max(...arr);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSortForRadix(arr, exp);
    exp *= 10;
  }
}

function countingSortForRadix(arr: number[], exp: number): void {
  const n = arr.length;
  const output: number[] = new Array(n).fill(0);
  const count: number[] = new Array(10).fill(0);

  // 统计个位数字出现的次数
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // 累加计数
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // 生成结果数组
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // 将结果复制回原数组
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// 测试用例
const arr5 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
radixSort(arr5);
console.log(arr5);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 桶排序（Bucket Sort）

```typescript
function bucketSort(arr: number[], bucketSize = 5): number[] {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = new Array(bucketCount).fill(0).map(() => []);

  // 将元素分配到桶中
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - min) / bucketSize);
    buckets[index].push(arr[i]);
  }

  // 对每个桶进行排序
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // 将桶中的元素合并到结果数组
  return ([] as number[]).concat(...buckets);
}

// 测试用例
const arr6 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(bucketSort(arr6));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 二叉树排序（Binary Tree Sort）

二叉树排序是指利用二叉搜索树（Binary Search Tree，BST）的特性进行排序的算法。二叉搜索树是一种特殊的二叉树，对于树中的每个节点，其左子树中的所有节点值均小于该节点值，其右子树中的所有节点值均大于该节点值。通过中序遍历二叉搜索树，可以得到一个有序的序列。

```typescript
// 定义一个二叉搜索树节点类
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 定义一个二叉搜索树类，包含插入和中序遍历方法
class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._insertNode(this.root, value);
    }
  }

  private _insertNode(node: TreeNode, value: number): void {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this._insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this._insertNode(node.right, value);
      }
    }
  }

  inOrderTraversal(): number[] {
    const result: number[] = [];
    this._inOrderTraversalNode(this.root, result);
    return result;
  }

  private _inOrderTraversalNode(node: TreeNode | null, result: number[]): void {
    if (node !== null) {
      this._inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this._inOrderTraversalNode(node.right, result);
    }
  }
}

function binaryTreeSort(arr: number[]): number[] {
  const bst = new BinarySearchTree();

  // 将数组中的值插入二叉搜索树
  arr.forEach((value) => {
    bst.insert(value);
  });

  // 中序遍历二叉搜索树，得到排序后的数组
  return bst.inOrderTraversal();
}

// 测试用例
const arr8 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(binaryTreeSort(arr8));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]

```

注意，二叉搜索树在极端情况下可能导致不平衡，这会影响排序性能。为了解决这个问题，可以使用平衡二叉搜索树（如 AVL 树或红黑树）进行排序。

#### 鸽巢排序（Pigeonhole Sort）

```typescript
function pigeonholeSort(arr: number[]): number[] {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const pigeonholes: number[][] = new Array(range).fill(0).map(() => []);

  // 将元素放入对应的鸽巢
  for (const value of arr) {
    pigeonholes[value - min].push(value);
  }

  // 从鸽巢中取出元素，拼接成排序后的数组
  return ([] as number[]).concat(...pigeonholes);
}

// 测试用例
const arr7 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(pigeonholeSort(arr7));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 侏儒排序（Gnome Sort）

```typescript
function gnomeSort(arr: number[]): void {
  let i = 1;
  let j = 2;

  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i = j;
      j++;
    } else {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i -= 1;
      if (i === 0) {
        i = j;
        j++;
      }
    }
  }
}

// 测试用例
const arr9 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
gnomeSort(arr9);
console.log(arr9); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 猴子排序（Bogo Sort）

```typescript
function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

function shuffle(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function bogosort(arr: number[]): void {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
}

// 测试用例
const arr11 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
bogosort(arr11);
console.log(arr11); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

### 查找

#### 二分查找（Binary Search）

```typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// 测试用例
const sortedArr = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(binarySearch(sortedArr, 10)); // 输出：6
console.log(binarySearch(sortedArr, 4));  // 输出：-1
```

#### 插值查找（Interpolation Search）

```typescript
function interpolationSearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    if (left === right) {
      return arr[left] === target ? left : -1;
    }

    const position = left + Math.floor(((target - arr[left]) * (right - left)) / (arr[right] - arr[left]));

    if (arr[position] === target) {
      return position;
    }

    if (arr[position] < target) {
      left = position + 1;
    } else {
      right = position - 1;
    }
  }

  return -1;
}

// 测试用例
const sortedArr3 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(interpolationSearch(sortedArr3, 10)); // 输出：6
console.log(interpolationSearch(sortedArr3, 4));  // 输出：-1
```

#### 斐波那契查找（Fibonacci Search）

```typescript
function fibonacciSearch(arr: number[], target: number): number {
  const fib = [0, 1];
  while (fib[fib.length - 1] < arr.length) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  let offset = -1;

  while (fib[fib.length - 1] > 1) {
    const index = Math.min(offset + fib[fib.length - 2], arr.length - 1);

    if (target > arr[index]) {
      fib.pop();
      offset = index;
    } else if (target < arr[index]) {
      fib.pop();
      fib.pop();
    } else {
      return index;
    }
  }

  if (fib[fib.length - 1] && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}

// 测试用例
const sortedArr4 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(fibonacciSearch(sortedArr4, 10)); // 输出：6
console.log(fibonacciSearch(sortedArr4, 4));  // 输出：-1
```

#### 指数查找（Exponential Search）

```typescript
function exponentialSearch(arr: number[], target: number): number {
  if (arr[0] === target) {
    return 0;
  }

  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }

  return binarySearch(arr.slice(i / 2, Math.min(i, arr.length)), target);
}

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}


// 测试用例
const sortedArr5 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(exponentialSearch(sortedArr5, 10)); // 输出：6
console.log(exponentialSearch(sortedArr5, 4));  // 输出：-1
```

#### 哈希查找（Hashing）

```typescript
class HashTable {
  storage: Map<number, number>;

  constructor() {
    this.storage = new Map<number, number>();
  }

  insert(key: number, value: number): void {
    this.storage.set(key, value);
  }

  search(key: number): number | null {
    return this.storage.has(key) ? this.storage.get(key) : null;
  }
}

const hashTable = new HashTable();
const arr6 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// 将数组中的值作为键，索引作为值存储到哈希表中
arr6.forEach((value, index) => {
  hashTable.insert(value, index);
});

// 测试用例
console.log(hashTable.search(10)); // 输出：8
console.log(hashTable.search(4));  // 输出：null
```

#### 二叉查找树（Binary Search Tree）

```typescript
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._insertNode(this.root, value);
    }
  }

  private _insertNode(node: TreeNode, value: number): void {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this._insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this._insertNode(node.right, value);
      }
    }
  }

  search(value: number): boolean {
    return this._searchNode(this.root, value);
  }

  private _searchNode(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this._searchNode(node.left, value);
    } else if (value > node.value) {
      return this._searchNode(node.right, value);
    } else {
      return true;
    }
  }
}

const bst = new BinarySearchTree();
const arr7 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// 向二叉查找树中插入数组中的值
arr7.forEach(value => {
  bst.insert(value);
});

// 测试用例
console.log(bst.search(10)); // 输出：true
console.log(bst.search(4));  // 输出：false
```

#### 平衡二叉查找树（Balanced Binary Search Tree），如AVL树、红黑树

```typescript
class AVLTreeNode extends TreeNode {
  height: number;

  constructor(value: number) {
    super(value);
    this.height = 1;
  }
}

class AVLTree extends BinarySearchTree {
  insert(value: number): void {
    this.root = this._insertNode(this.root as AVLTreeNode, value);
  }

  private _insertNode(node: AVLTreeNode | null, value: number): AVLTreeNode {
    if (node === null) {
      return new AVLTreeNode(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left as AVLTreeNode, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right as AVLTreeNode, value);
    } else {
      return node;
    }

    node.height = 1 + Math.max(this._height(node.left), this._height(node.right));
    const balance = this._getBalance(node);

    if (balance > 1) {
      if (value < (node.left as AVLTreeNode).value) {
        return this._rotateRight(node);
      } else {
        node.left = this._rotateLeft(node.left as AVLTreeNode);
        return this._rotateRight(node);
      }
    }

    if (balance < -1) {
      if (value > (node.right as AVLTreeNode).value) {
        return this._rotateLeft(node);
      } else {
        node.right = this._rotateRight(node.right as AVLTreeNode);
        return this._rotateLeft(node);
      }
    }

    return node;
  }

  private _height(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    return (node as AVLTreeNode).height;
  }

  private _getBalance(node: AVLTreeNode): number {
    return this._height(node.left) - this._height(node.right);
  }

  private _rotateLeft(z: AVLTreeNode): AVLTreeNode {
    const y = z.right as AVLTreeNode;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this._height(z.left), this._height(z.right));
    y.height = 1 + Math.max(this._height(y.left), this._height(y.right));

    return y;
  }

  private _rotateRight(y: AVLTreeNode): AVLTreeNode {
    const x = y.left as AVLTreeNode;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = 1 + Math.max(this._height(y.left), this._height(y.right));
    x.height = 1 + Math.max(this._height(x.left), this._height(x.right));

    return x;
  }
}

const avl = new AVLTree();
const arr8 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// 向平衡二叉查找树中插入数组中的值
arr8.forEach(value => {
  avl.insert(value);
});

// 测试用例
console.log(avl.search(10)); // 输出：true
console.log(avl.search(4)); // 输出：false
```

<hr />

## 设计模式

### 谈谈你对设计模式的理解，为什么需要设计模式？

设计模式是针对软件设计中反复出现的问题所提出的通用解决方案。它们是在大量实际软件开发经验中总结出的优秀设计实践，描述了在特定场景下解决问题的方法和思路。设计模式旨在提高代码的可复用性、可扩展性和可维护性，使软件具有更好的灵活性和稳定性。

设计模式的重要性主要体现在以下几个方面：

1. 高效解决问题：设计模式为软件设计中常见问题提供了成熟、可靠的解决方案，使开发者能够更高效地解决问题，避免重复发明轮子。
2. 促进代码复用：设计模式是通用的设计结构，可以在不同的场景和项目中复用，提高了代码的可复用性，减少了开发时间和成本。
3. 提高代码质量：设计模式强调模块间的低耦合、高内聚，有助于提高代码的可读性、可维护性和稳定性，降低了软件的错误率。
4. 促进团队协作：设计模式提供了一套通用的设计语言，使得团队成员在交流和理解代码时能够更加顺畅，提高了团队协作效率。
5. 有益于个人成长：学习和熟练运用设计模式有助于提高开发者的设计能力和编程水平，使得开发者能够在面对复杂问题时更加从容应对。

设计模式主要分为三大类：

1. 创建型模式（Creational Patterns）：关注对象的创建过程，如工厂模式、单例模式、原型模式和建造者模式。
2. 结构型模式（Structural Patterns）：关注类和对象的组合，如适配器模式、桥接模式、装饰器模式、组合模式、外观模式、享元模式和代理模式。
3. 行为型模式（Behavioral Patterns）：关注对象间的通信，如责任链模式、命令模式、解释器模式、迭代器模式、中介者模式、备忘录模式、观察者模式、状态模式、策略模式、模板方法模式和访问者模式。

需要注意的是，设计模式并非万能的，它们只是解决特定问题的方法和思路。在实际开发中，应根据具体需求和场景选择合适的设计模式，并且不要过度追求设计模式，以免引入不必要的复杂性。

### 谈谈你对工厂模式的理解

工厂模式（Factory Pattern）是一种创建型设计模式，它的核心思想是将对象的创建过程封装起来，让客户端不直接与具体类进行交互，而是通过一个统一的接口来创建所需的对象。这样，当需要修改或者扩展对象的创建逻辑时，我们只需要修改工厂类，而不需要修改客户端的代码，从而达到降低耦合度和提高代码可维护性的目的。

工厂模式主要分为以下几种类型：

1. 简单工厂模式（Simple Factory Pattern）：一个工厂类根据传入的参数创建对应的对象。这种模式的缺点是，当需要添加新的产品时，需要修改工厂类的代码，违反了开放封闭原则。
2. 工厂方法模式（Factory Method Pattern）：定义一个工厂接口，让各个具体工厂类实现这个接口，负责创建对应的产品。客户端只需要与工厂接口进行交互，而不关心具体的工厂和产品类。这种模式遵循了开放封闭原则，当需要添加新的产品时，只需添加相应的具体工厂类，不需要修改其他代码。
3. 抽象工厂模式（Abstract Factory Pattern）：提供一个创建一系列相关或者相互依赖对象的接口，而无需指定它们具体的类。抽象工厂模式可以应对更复杂的场景，比如创建多个产品族的产品。客户端同样只需与抽象工厂接口进行交互，实现了对象创建过程的解耦。

工厂模式的优点：

1. 降低了客户端与具体产品类之间的耦合度，提高了代码可维护性。
2. 代码结构清晰，易于扩展和修改。
3. 可以实现对象的复用，节省资源。

工厂模式的缺点：

1. 工厂类职责过重，当产品种类繁多时，代码可能变得复杂。
2. 增加了系统的抽象性和理解难度。

总之，工厂模式通过封装对象的创建过程，降低了客户端与具体产品类之间的耦合度，提高了代码的可维护性和扩展性。在实际开发中，可以根据项目的具体需求来选择适用的工厂模式类型。

### 谈谈你对单例模式的理解

单例模式（Singleton Pattern）是一种创建型设计模式，其核心思想是确保一个类只有一个实例，并提供一个全局访问点来获取该实例。这种模式适用于那些在整个系统中需要唯一实例的场景，如数据库连接池、配置管理器、日志记录器等。单例模式可以确保系统中该类的实例具有全局唯一性，避免了多次创建和销毁实例带来的资源浪费和潜在的错误。

实现单例模式的关键点包括：

1. 将构造方法私有化，以防止客户端通过 new 关键字创建实例。
2. 在类内部创建一个静态私有实例变量。
3. 提供一个公共的静态方法（通常命名为 getInstance()）来获取该实例。

单例模式有多种实现方式，主要包括以下几种：

1. 懒汉式：实例在第一次调用 getInstance() 方法时创建。这种方式的优点是实现了延迟加载，缺点是在多线程环境下可能出现线程安全问题，需要通过加锁等手段解决。
2. 饿汉式：实例在类加载时创建。这种方式的优点是线程安全，缺点是没有实现延迟加载，如果实例的创建过程比较耗时或资源消耗较大，可能会导致性能问题。
3. 双重检查锁定（Double-Checked Locking）：结合懒汉式和同步锁，在 getInstance() 方法内部进行双重判断，确保线程安全且避免了不必要的同步开销。
4. 静态内部类：利用 Java 的静态内部类特性，在静态内部类中创建单例实例，实现了延迟加载且线程安全。
5. 枚举：使用枚举类型实现单例，这种方式是线程安全的，而且代码简洁易懂。这也是《Effective Java》一书推荐的实现方式。

单例模式的优点：

1. 保证了实例的全局唯一性，避免了资源浪费和潜在的错误。
2. 可以实现全局访问，方便使用。

单例模式的缺点：

1. 单例类的职责过重，可能违反单一职责原则。
2. 若实例需要扩展，可能会引入修改困难。

总之，单例模式通过确保一个类只有一个实例，并提供一个全局访问点来获取该实例，可以在一定程度上提高系统的性能和资源利用率。在实际开发中，应根据具体需求选择合适的单例模式实现方式。

### 谈谈你对策略模式的理解

策略模式（Strategy Pattern）是一种行为型设计模式，其核心思想是定义一系列算法，将它们封装成策略类，并使它们可以相互替换。策略模式使得算法可以独立于使用它的客户端而变化，这样可以实现在不修改客户端代码的情况下，灵活地改变和扩展算法。策略模式将算法的定义和使用分离，降低了算法之间的耦合，提高了代码的可扩展性和可维护性。

策略模式通常包含以下几个部分：

1. 策略接口（Strategy Interface）：定义一个公共接口，用于声明所有策略类需要实现的方法。
2. 具体策略类（Concrete Strategy）：实现策略接口，封装具体的算法和行为。
3. 上下文类（Context）：持有一个策略接口的引用，用于调用具体策略类的方法。客户端可以通过修改上下文类持有的策略引用来改变算法。

策略模式的优点：

1. 算法和客户端解耦：策略模式将算法的定义和使用分离，使得客户端与具体算法解耦，降低了模块间的耦合度。
2. 易于扩展和替换：策略模式将每个算法封装成独立的策略类，可以方便地添加新的策略或替换现有策略，而无需修改客户端代码。
3. 提高代码可读性：策略模式将不同的算法和行为封装到具体策略类中，使得代码结构更加清晰，提高了代码的可读性和可维护性。
4. 遵循开放封闭原则：通过策略模式，可以在不修改客户端代码的前提下，灵活地改变和扩展算法，符合开放封闭原则。

策略模式的缺点：

1. 增加了代码数量：每个策略都需要定义一个具体策略类，当策略较多时，会导致类数量的增加。
2. 客户端需要了解策略的区别：虽然策略模式将算法的使用与实现分离，但客户端仍需要了解不同策略之间的区别，以便选择合适的策略。

总之，策略模式通过将算法封装成策略类并定义一个统一的策略接口，实现了算法和客户端的解耦，提高了代码的复用性。

### 谈谈你对观察者模式的理解

观察者模式（Observer Pattern），又称发布-订阅模式（Publish-Subscribe Pattern），是一种行为型设计模式。它定义了对象之间的一对多依赖关系，当一个对象（被观察者）的状态发生改变时，所有依赖于它的对象（观察者）都会得到通知并自动更新。观察者模式用于实现事件驱动的架构，降低了对象之间的耦合，提高了代码的灵活性和可扩展性。

观察者模式主要包含以下几个部分：

1. 抽象被观察者（Subject）：定义了添加、删除和通知观察者的方法。被观察者维护一个观察者列表，用于存储所有注册的观察者。
2. 具体被观察者（Concrete Subject）：实现抽象被观察者的接口，具有一些状态，当这些状态发生变化时，通知所有注册的观察者。
3. 抽象观察者（Observer）：定义一个更新方法，用于接收被观察者状态变化的通知。
4. 具体观察者（Concrete Observer）：实现抽象观察者的接口，当接收到被观察者状态变化的通知时，执行相应的更新操作。

观察者模式的优点：

1. 降低耦合度：观察者模式使得被观察者与观察者之间的依赖关系变得松散，它们可以独立地变化和复用，提高了代码的灵活性。
2. 支持事件驱动：观察者模式可以实现基于事件的通知机制，使得对象之间可以相互通知和响应，有助于实现复杂的事件驱动架构。
3. 易于扩展：通过添加新的观察者，可以方便地扩展系统的功能，而无需修改被观察者的代码。

观察者模式的缺点：

1. 可能引发循环调用：在实际应用中，如果观察者与被观察者之间存在循环依赖关系，可能会引发循环调用，导致系统崩溃。
2. 通知顺序不可控：被观察者通知观察者的顺序是不可控的，这可能导致一些依赖于通知顺序的问题。

总之，观察者模式通过定义对象之间的一对多依赖关系，实现了事件驱动的架构，降低了对象间的耦合，提高了代码的灵活性和可扩展性。在实际开发中，观察者模式广泛应用于实现各种事件监听和通知机制，如用户界面的事件处理、消息推送、日志记录等。

在使用观察者模式时，还需要注意以下几点：

1. 避免循环调用：确保被观察者和观察者之间不存在循环依赖关系，以防止循环调用导致的问题。
2. 考虑性能问题：观察者模式的通知机制可能会导致大量的观察者被通知，从而影响系统性能。在设计时，应合理选择观察者的数量和通知策略，以减轻性能压力。
3. 封装通知逻辑：为了让被观察者更加通用，可以考虑将通知观察者的逻辑封装到一个单独的类中，使得被观察者聚焦于自身业务逻辑。
4. 使用现有框架：许多现代编程语言和框架都提供了对观察者模式的支持，如 Java 中的 `java.util.Observable` 和 `java.util.Observer` 类，C# 中的事件和委托机制等。在实际开发中，可以充分利用这些现有功能，避免重复造轮子。

综上所述，观察者模式是一种实用且灵活的设计模式，它提供了一种有效的方式来解决对象间的通信和依赖问题。在实际开发中，应根据具体需求和场景选择合适的观察者模式实现方式，并注意避免可能存在的问题。

### 谈谈你对命令模式的理解

命令模式（Command Pattern）是一种行为型设计模式，它将请求封装为一个对象，从而使客户端可以用不同的请求对接收者进行参数化。命令模式还支持可撤销的操作，可以将请求的发送者与接收者解耦，使得请求的发送者不需要知道接收者的具体实现。命令模式可以提高代码的灵活性和可扩展性，广泛应用于实现任务队列、事务处理、日志记录等功能。

命令模式主要包含以下几个部分：

1. 抽象命令类（Command）：定义一个抽象的接口，用于声明执行操作的方法。通常包含一个或多个抽象方法，如 `execute()`、`undo()` 等。
2. 具体命令类（Concrete Command）：实现抽象命令类的接口，封装接收者和一组行为。具体命令类通常包含一个接收者（Receiver）的引用，并在 `execute()` 方法中调用接收者的相应方法。
3. 接收者（Receiver）：实现具体的业务逻辑，提供命令类需要执行的方法。
4. 调用者（Invoker）：持有一个命令对象的引用，负责调用命令对象的 `execute()` 方法。调用者可以是客户端代码，也可以是一个中间类，负责接收客户端的请求并调用命令对象。

命令模式的优点：

1. 解耦请求发送者与接收者：命令模式将请求封装成命令对象，使得发送者与接收者之间的依赖关系变得松散，提高了代码的灵活性。
2. 易于扩展：通过添加新的具体命令类，可以方便地扩展系统功能，而无需修改现有代码。
3. 支持撤销操作：命令模式可以通过实现 `undo()` 方法来支持撤销操作，使得客户端可以撤销已执行的命令。
4. 方便实现任务队列、事务和日志记录：命令模式可以将命令对象存储在队列中，实现任务调度和事务处理；同时，可以将命令对象序列化到日志文件中，实现日志记录和恢复功能。

命令模式的缺点：

1. 增加了类的数量：每个具体命令都需要定义一个类，当命令较多时，会导致类数量的增加，增加了系统的复杂性。
2. 可能增加系统开销：由于命令对象的创建和调用，命令模式可能会导致额外的开销，尤其是在高性能要求的场景下。

总之，命令模式通过将请求封装为命令对象，实现了请求的发送者与接收者之间的解耦，提高了代码的灵活性和可扩展性。在实际开发中，命令模式可以应用于以下场景：

1. 需要将请求发送者与接收者解耦的场景：当请求发送者不需要知道接收者的具体实现时，可以使用命令模式将请求封装为命令对象，从而实现解耦。
2. 需要支持撤销操作的场景：命令模式可以通过实现 `undo()` 方法来支持撤销操作，使客户端可以方便地撤销已执行的命令。
3. 需要实现任务队列、事务处理或日志记录的场景：命令模式可以将命令对象存储在队列中，实现任务调度和事务处理；同时，可以将命令对象序列化到日志文件中，实现日志记录和恢复功能。

在使用命令模式时，需要注意以下几点：

1. 合理划分命令类：为了降低系统的复杂性，应该合理地划分命令类，避免创建过多的具体命令类。
2. 注意性能开销：由于命令对象的创建和调用可能导致额外的开销，因此在高性能要求的场景下，应考虑是否适合使用命令模式。
3. 使用现有框架：许多现代编程语言和框架都提供了对命令模式的支持，如 C# 中的委托和命令绑定等。在实际开发中，可以充分利用这些现有功能，避免重复造轮子。

总之，命令模式是一种实用且灵活的设计模式，它提供了一种有效的方式来解决请求发送者与接收者之间的解耦问题。在实际开发中，应根据具体需求和场景选择合适的命令模式实现方式，并注意避免可能存在的问题。

### 谈谈你模板方法模式的理解

模板方法模式（Template Method Pattern）是一种行为型设计模式，它定义了一个算法的骨架，将算法的具体步骤延迟到子类中实现。模板方法模式允许子类在不改变算法结构的情况下，重新定义算法的某些步骤。这种模式可以帮助我们提高代码的复用性和封装性，降低了系统的复杂性。

模板方法模式主要包含以下几个部分：

1. 抽象类（Abstract Class）：定义了一个模板方法，它包含了算法的骨架。模板方法由一系列具体方法和抽象方法组成，具体方法由抽象类实现，抽象方法由子类实现。抽象类可以定义一些钩子方法（Hook Methods），用于在特定情况下让子类改变算法的行为。
2. 具体子类（Concrete Class）：实现抽象类中的抽象方法，提供算法的具体实现。子类可以根据需求，覆盖或扩展抽象类中的钩子方法。

模板方法模式的优点：

1. 代码复用：通过将通用的算法骨架定义在抽象类中，子类可以复用这些代码，降低了代码的重复度。
2. 封装性：模板方法模式将具体实现细节封装在子类中，使得客户端只需要关注抽象类的接口，提高了系统的封装性。
3. 扩展性：子类可以覆盖或扩展抽象类中的钩子方法，从而实现对算法的灵活扩展。
4. 易于维护：将算法骨架和具体实现分离，有利于维护和修改。

模板方法模式的缺点：

1. 类数量增加：对于每个实现不同的算法，都需要定义一个具体子类，这可能导致类数量的增加。
2. 需要继承：模板方法模式依赖于继承关系，可能会导致子类过于庞大，影响代码的可读性和维护性。

总之，模板方法模式是一种实用且灵活的设计模式，它通过定义算法的骨架，将具体实现延迟到子类中，实现了代码复用和封装性。在实际开发中，模板方法模式适用于以下场景：

1. 算法骨架固定，但具体实现可能不同的场景。
2. 当需要在不改变算法结构的情况下，重新定义算法的某些步骤。
3. 当子类需要复用父类的某些通用行为，但又希望保留扩展和覆盖的能力时。

在使用模板方法模式时，需要注意以下几点：

1. 合理划分抽象方法和具体方法：为了保持代码的清晰和易于维护，应合理地划分抽象方法和具体方法，将可复用的代码放入抽象类中，将具体实现放入子类中。
2. 合理使用钩子方法：钩子方法可以让子类有机会改变算法的行为，但不要过度使用，以免导致系统的复杂性增加。
3. 避免过度继承：模板方法模式依赖于继承关系，因此在设计时要避免过度继承，可以考虑使用组合和聚合等方式来减轻子类的负担。
4. 保持抽象类的稳定性：抽象类定义了算法的骨架，对其的修改可能会影响到所有子类。因此，在设计时要确保抽象类的稳定性，尽量避免对其进行修改。

总之，模板方法模式通过定义算法的骨架，将具体实现延迟到子类中，提高了代码的复用性和封装性。在实际开发中，应根据具体需求和场景选择合适的模板方法模式实现方式，并注意避免可能存在的问题。

### 谈谈你对迭代器模式的理解

### 谈谈你对状态模式的理解

状态模式（State Pattern）是一种行为型设计模式，它允许一个对象在其内部状态改变时改变其行为。状态模式将对象的状态封装为独立的类，使得状态转换和行为的实现变得更加清晰。状态模式可以消除大量的条件判断语句，提高代码的可读性和可维护性。

状态模式主要包含以下几个部分：

1. 抽象状态类（State）：定义了一个接口，用于封装与特定状态相关的行为。通常包含一个或多个抽象方法，如 `handle()`。
2. 具体状态类（Concrete State）：实现抽象状态类的接口，提供具体状态对应的行为实现。每个具体状态类通常只表示对象的一种状态。
3. 上下文类（Context）：维护一个当前状态的引用，并提供一个接口来改变当前状态。上下文类通常会将行为委托给当前状态对象来执行。

状态模式的优点：

1. 封装性：将状态和与状态相关的行为封装在一起，使得代码结构更加清晰。
2. 易于扩展：通过添加新的状态类，可以方便地扩展系统的功能，而无需修改现有代码。
3. 消除条件判断：状态模式通过委托给状态对象来执行行为，避免了大量的条件判断语句，提高了代码的可读性和可维护性。
4. 符合开闭原则：状态模式对扩展开放，对修改封闭，增加新的状态类不会影响现有代码。

状态模式的缺点：

1. 类数量增加：对于每个具体状态，都需要定义一个状态类，这可能导致类数量的增加，增加了系统的复杂性。
2. 状态切换逻辑分散：状态切换的逻辑可能分散在状态类和上下文类中，这可能导致状态切换逻辑的复杂性增加。

总之，状态模式是一种实用且灵活的设计模式，它通过将对象的状态封装为独立的类，实现了状态转换和行为的清晰表示。在实际开发中，状态模式适用于以下场景：

1. 当一个对象的行为依赖于其状态，且状态数量较多时。
2. 当需要在运行时改变对象的行为，且这些行为依赖于对象的状态时。
3. 当系统中存在大量的与状态相关的条件判断语句，导致代码难以维护和扩展时。

在使用状态模式时，需要注意合理划分状态类，并关注状态切换逻辑的实现。

### 谈谈你对装饰者模式的理解

装饰者模式（Decorator Pattern）是一种结构型设计模式，它允许在不修改原始类代码的情况下，动态地为对象添加新的功能。装饰者模式使用一种组合的方式，将新功能附加到原始对象上，从而遵循了开闭原则，使得系统具有较好的可扩展性。

装饰者模式主要包含以下几个部分：

1. 抽象组件类（Component）：定义一个抽象接口，用于规范需要被装饰的对象的行为。
2. 具体组件类（Concrete Component）：实现抽象组件类的接口，表示需要被装饰的对象。
3. 抽象装饰者类（Decorator）：继承自抽象组件类，并持有一个抽象组件类的引用。抽象装饰者类的主要作用是为子类提供统一的接口，并将请求转发给持有的抽象组件对象。
4. 具体装饰者类（Concrete Decorator）：继承自抽象装饰者类，实现具体的装饰功能。具体装饰者类可以在原有功能的基础上，添加新的功能。

装饰者模式的优点：

1. 灵活性：装饰者模式可以动态地为对象添加新功能，而不需要修改原始类的代码，使得系统更具灵活性。
2. 可扩展性：通过添加新的具体装饰者类，可以方便地扩展系统的功能，符合开闭原则。
3. 组合灵活：装饰者模式可以通过组合不同的装饰者类，实现多种不同的功能组合。
4. 易于维护：装饰者模式将不同的功能分离到不同的装饰者类中，有利于代码的维护和修改。

装饰者模式的缺点：

1. 类数量增加：对于每个装饰功能，都需要定义一个具体装饰者类，这可能导致类数量的增加，增加了系统的复杂性。
2. 增加了系统的复杂性：由于装饰者模式使用了组合关系，这可能导致系统的结构变得更加复杂。

总之，装饰者模式是一种实用且灵活的设计模式，它允许在不修改原始类代码的情况下，动态地为对象添加新功能。在实际开发中，装饰者模式适用于以下场景：

1. 当需要为一个现有类添加新功能，但又不想修改原始类的代码时。
2. 当需要通过组合多个功能，实现不同的功能组合时。
3. 当需要在运行时动态地为对象添加功能，且这些功能可以相互独立地叠加时。

在使用装饰者模式时，需要注意以下几点：

1. 合理设计抽象组件类和抽象装饰者类：为了保持代码的清晰和易于维护，应合理地设计抽象组件类和抽象装饰者类，确保它们具有清晰的职责和良好的封装性。
2. 注意装饰者类的创建和组合：装饰者模式依赖于装饰者类的创建和组合，因此在设计时要关注这些方面，确保装饰者类可以灵活地创建和组合。
3. 避免过度使用装饰者模式：虽然装饰者模式具有很好的灵活性和可扩展性，但是过度使用可能导致系统变得过于复杂。在实际开发中，应根据具体需求和场景选择合适的设计模式。
4. 考虑性能影响：由于装饰者模式使用了多层的组合关系，这可能导致性能损失。在设计和实现时，应关注性能影响，避免因为过多的嵌套而导致性能下降。

总之，装饰者模式是一种实用且灵活的设计模式，它允许在不修改原始类代码的情况下，动态地为对象添加新功能。在实际开发中，应根据具体需求和场景选择合适的装饰者模式实现方式，并注意避免可能存在的问题。

### 谈谈你对适配器模式的理解

适配器模式是一种结构型设计模式，它的主要目标是使得那些原本不兼容的接口能够一起工作。简单来说，适配器可以作为两个不同对象之间的桥梁，这两个对象可能由于接口不同而无法直接进行交互。

在软件设计中，适配器模式常用于以下场景：

1. 旧代码与新代码交互：如果你在开发过程中引入了新的类，这个新的类的接口与现有代码不兼容，但你又不希望更改现有代码，那么你可以创建一个适配器。这个适配器能够同时与新的类和现有代码进行交互，确保它们能够顺利地协同工作。
2. 外部系统或库：当你的应用需要与外部系统或者第三方库进行交互，而这些系统或者库的接口并不符合你的预期，这个时候适配器模式也能发挥作用。
3. 统一接口：如果你的系统中有多个类，它们执行相似的功能但接口不同，使用适配器可以使得这些类有统一的接口，这将使你的代码更加易于管理和维护。

在适配器模式中，通常会有以下几个角色：

1. 目标（Target）：这是你期望得到的接口，你的系统需要通过这个接口与服务进行交互。
2. 适配器（Adapter）：这是实现了目标接口的类。适配器会把调用请求转发给适配者。
3. 适配者（Adaptee）：这是需要被适配的类或系统。它的接口与目标接口不同，因此不能直接与你的系统交互。
4. 客户（Client）：这是使用目标接口的类。客户通过目标接口与适配器进行交互，而无需知道适配器和适配者的存在。

适配器模式是一种非常实用的设计模式，它提供了一种灵活的方式来创建、组合和复用对象，特别是那些不直接兼容的对象。

### 谈谈你对外观模式的理解

外观模式（Facade Pattern）是一种结构型设计模式，它为一组复杂的子系统提供一个统一的接口，使得这些子系统更容易被客户端使用。外观模式通过定义一个高层接口，将复杂的子系统实现隐藏起来，从而简化了客户端与子系统之间的交互。

外观模式主要包含以下几个部分：

1. 外观类（Facade）：提供一个简单的接口，用于与客户端进行交互。外观类将客户端的请求委托给相应的子系统，处理子系统间的依赖关系，使得客户端与子系统之间的交互变得更加简单。
2. 子系统类（Subsystem）：表示系统内部的各个子系统，实现具体的业务逻辑。子系统类可以独立工作，且不依赖于外观类。子系统类通常具有复杂的接口和实现。

外观模式的优点：

1. 简化接口：外观模式为复杂的子系统提供了一个简化的接口，使得客户端与子系统的交互变得更加简单。
2. 降低耦合：外观模式将客户端与子系统之间的依赖关系降低到最小，有利于系统的解耦和维护。
3. 提高可维护性：外观模式将子系统的实现细节隐藏起来，使得客户端无需关心这些细节，有利于提高系统的可维护性。
4. 符合迪米特原则：外观模式使得客户端只需要与外观类进行交互，而无需直接与子系统类交互，从而遵循了迪米特原则。

外观模式的缺点：

1. 有限的封装：外观模式可能无法完全封装所有子系统的功能，有时客户端可能需要直接访问子系统类，以实现一些特定的功能。
2. 过多的依赖：如果系统中的外观类数量过多，可能导致客户端与外观类之间的依赖过多，从而影响系统的解耦。

总之，外观模式是一种实用且简单的设计模式，它通过定义一个统一的接口，简化了客户端与复杂子系统之间的交互。在实际开发中，外观模式适用于以下场景：

1. 当需要为一个复杂的子系统提供一个简化的接口时。
2. 当需要将客户端与子系统之间的依赖降低到最小时。
3. 当需要将多个子系统组合使用，以实现更复杂的功能时。

在使用外观模式时，需要注意以下几点：

1. 合理划分子系统：为了保持代码的清晰和易于维护，应合理地划分子系统，确保子系统具有清晰的职责和良好的封装性。
2. 设计简单易用的外观接口：外观类的主要目的是简化客户端与子系统的交互，因此在设计外观类时，应该关注接口的简单性和易用性。
3. 不要过度封装：虽然外观模式可以将子系统的实现细节隐藏起来，但在实际开发中，有时客户端可能需要直接访问子系统类。因此，在设计外观模式时，应避免过度封装。
4. 注意外观类与子系统的解耦：外观类应尽量减少对子系统的直接依赖，以保持系统的解耦。如果子系统需要进行修改或升级，应尽量避免影响到外观类和客户端。

通过合理地使用外观模式，可以简化复杂子系统与客户端之间的交互，降低系统的耦合度，提高系统的可维护性。在实际开发中，应根据具体需求和场景选择合适的外观模式实现方式，并注意避免可能存在的问题。

### 谈谈你对代理模式的理解

代理模式是一种常用的结构型设计模式，其主要目标是通过引入一个新的对象（即代理对象）来控制对原对象的访问。代理对象可以在客户端和目标对象之间起到中介的作用。

代理模式主要有三种常见的形式：

1. 虚拟代理：如果一个对象的加载或初始化非常消耗资源，虚拟代理可以延迟这个对象的创建直到真正需要的时候。例如，网页中的图片加载就可以使用虚拟代理，只有当图片在屏幕上滚动到可视范围内时，才开始加载真正的图片。
2. 保护代理：如果一个对象有权限控制需求，保护代理可以决定哪些客户端可以访问该对象。例如，一些对象可能只允许管理员角色进行访问和操作。
3. 远程代理：如果一个对象在不同的地址空间（例如，另一台机器上），远程代理可以隐藏这个对象存在于不同地址空间的事实。例如，在分布式系统或网络通信中，客户端对象通常会与一个本地的代理对象通信，这个代理对象负责通过网络与远程对象通信。

在代理模式中，通常涉及以下几个角色：

1. 抽象主题（Subject）：定义了 RealSubject 和 Proxy 的公共接口，这样在任何使用 RealSubject 的地方都可以使用 Proxy。
2. 真实主题（RealSubject）：定义了 Proxy 所代表的真实实体。
3. 代理（Proxy）：保存一个引用使得代理可以访问实体，并提供一个与 Subject 的接口相同的接口。
4. 客户（Client）：通过 Proxy 访问 RealSubject。

使用代理模式的好处在于，客户端可以透明地使用代理，而不需要知道代理背后的复杂机制。这种设计模式特别适用于那些需要分离关注点的情况，从而使得我们可以聚焦于我们真正关心的业务逻辑，而不是其他辅助性的工作，比如访问控制、负载、网络通信等。

### 谈谈你对组合模式的理解

组合模式（Composite Pattern）是一种结构型设计模式，它允许将对象组合成树形结构以表示“部分-整体”的层次关系，使得客户端可以以一致的方式处理单个对象和组合对象。组合模式适用于处理具有层次结构的数据，例如文件系统、组织结构等。

组合模式主要包含以下几个部分：

1. 抽象组件（Component）：定义一个接口，用于规范组合对象和叶子对象的公共行为。抽象组件通常包含一些基本操作，如添加子组件、删除子组件、获取子组件等。
2. 叶子组件（Leaf）：表示树形结构中的叶子节点，实现抽象组件接口。叶子组件没有子组件，它负责实现具体的业务逻辑。
3. 组合组件（Composite）：表示树形结构中的非叶子节点，实现抽象组件接口。组合组件包含一个子组件列表，用于存储其子组件。组合组件负责实现基本操作，如添加子组件、删除子组件、获取子组件等。同时，组合组件还可以实现其他与业务逻辑相关的操作。

组合模式的优点：

1. 统一操作：组合模式使得客户端可以以一致的方式处理单个对象和组合对象，简化了客户端的操作。
2. 易于扩展：组合模式允许添加新的组件类型，只需实现抽象组件接口即可，不需要修改现有的代码。
3. 更好地表示层次结构：组合模式可以很好地表示具有层次关系的数据结构，如文件系统、组织结构等。

组合模式的缺点：

1. 过度泛化：由于抽象组件接口定义了所有可能的操作，这可能导致叶子组件和组合组件之间的界限变得模糊，增加了实现的复杂性。
2. 违反接口隔离原则：抽象组件接口可能包含一些对叶子组件和组合组件来说并不适用的方法，这违反了接口隔离原则。

总之，组合模式是一种实用且简单的设计模式，它通过定义一个统一的抽象组件接口，使得客户端可以以一致的方式处理单个对象和组合对象。在实际开发中，组合模式适用于处理具有层次结构的数据，如文件系统、组织结构等。在使用组合模式时，应注意避免过度泛化和违反接口隔离原则的问题。

<hr>

## 操作系统

### 什么是操作系统？

操作系统（Operating System，简称 OS）是计算机硬件与用户之间的接口，负责管理和协调计算机硬件资源，为应用程序和用户提供一个友好的运行环境。操作系统具有多种功能，包括进程管理、内存管理、文件系统管理和设备管理等。

操作系统使得程序员和用户不必关心底层硬件的具体细节，可以更高效地开发和使用计算机。常见的操作系统有 Microsoft Windows、macOS、Linux 等。

### 软链接和硬链接的区别是什么？

软链接（符号链接，Symbolic Link）和硬链接（Hard Link）是两种不同类型的文件链接，通常用于在 Unix 和类 Unix 的文件系统中创建文件或目录的引用。它们之间的主要区别如下：

1. 存储方式：硬链接是在文件系统中创建一个与原始文件具有相同的 i-node（索引节点）号的新条目。这意味着硬链接与原始文件共享相同的数据块和属性。因此，它们是同一个文件的不同引用。相反，软链接则是一个独立的文件，它的 i-node 不同于原始文件。软链接包含了指向原始文件的路径信息。
2. 删除操作：当删除原始文件时，硬链接仍然可以访问文件的内容，因为它们共享相同的数据块。然而，当删除原始文件时，软链接将失效，因为它仅包含指向原始文件的路径信息。这时，软链接就成了一个悬空的（或者说失效的）链接。
3. 跨文件系统：硬链接只能在同一个文件系统中创建，因为它们共享相同的 i-node。而软链接可以跨文件系统创建，因为它们只是指向原始文件的路径，而不是具体的数据块。
4. 链接类型：硬链接只能针对文件创建，不能针对目录。软链接则可以针对文件和目录创建。

总之，硬链接是对原始文件内容的直接引用，而软链接是对原始文件路径的引用。硬链接共享与原始文件相同的 i-node 和数据块，而软链接具有独立的 i-node。

### 并发和并行有什么区别？

并发（Concurrency）和并行（Parallelism）是计算机科学中两个相关但不同的概念。它们都涉及到多任务处理，但执行方式和目标有所不同。

1. 并发（Concurrency）：并发是指多个任务在同一时间段内交替执行，但在某个特定时刻，仅有一个任务在运行。这通常是通过任务之间快速切换来实现的，以便在一个任务等待资源（如 I/O 操作）时执行另一个任务。并发主要出现在单核处理器或者多核处理器但核心数量少于任务数量的情况下。并发的目标是充分利用处理器资源，提高资源的使用效率。
2. 并行（Parallelism）：并行是指多个任务在同一时刻同时执行。这通常是通过多核处理器或多处理器系统来实现的，每个处理器或核心负责处理一个或多个任务。并行的目标是利用多个处理器或核心加速任务的完成，提高性能。

总之，区别在于执行方式和目标：并发关注在同一时间段内多任务的交替执行，以提高资源利用率；而并行关注在同一时刻同时执行多个任务，以提高处理速度。在现实场景中，这两个概念可能同时存在，例如在多核处理器系统中执行多个并发任务。

### 协程与线程的区别

协程（Coroutine）和线程（Thread）都是用于实现并发执行的概念，但它们之间存在一些关键区别：

1. 调度方式：线程的调度由操作系统内核管理，通常是抢占式调度。操作系统根据线程优先级和运行时间等因素在不同线程之间进行切换。相比之下，协程的调度是由程序自身控制的，通常采用协作式调度。协程之间的切换由协程自身决定，例如在某个协程遇到 I/O 操作或显式让出执行权时切换到另一个协程。
2. 并发模型：线程是基于多任务并发执行的，每个线程在单独的执行上下文中运行。协程是基于单任务或多任务的并发执行，可以看作是轻量级的线程。在协程模型中，多个协程在同一个线程内共享执行上下文，通过协作式调度来实现并发。
3. 资源消耗：线程通常比协程消耗更多的系统资源，因为每个线程都有自己的栈和内核资源。协程由于在用户态运行并共享同一个线程的执行上下文，通常具有更低的内存和系统资源消耗。
4. 上下文切换开销：线程间的上下文切换涉及到内核态和用户态的切换，通常具有较大的开销。而协程间的上下文切换仅发生在用户态，不需要内核参与，因此开销较小。

总之，协程和线程都是实现并发执行的方法，但它们在调度方式、并发模型、资源消耗和上下文切换开销等方面存在区别。协程是一种轻量级的并发机制，适用于 I/O 密集型任务和需要大量并发执行的场景。线程则适用于 CPU 密集型任务和多核处理器系统。

### 进程与线程的区别

进程（Process）和线程（Thread）是计算机科学中与并发和并行执行相关的两个基本概念。它们之间的主要区别如下：

1. 定义和独立性：进程是一个独立的运行环境，包含了一个程序在运行过程中所需要的所有资源，如代码、数据、内存空间和系统资源等。每个进程在操作系统中都有独立的内存空间和地址空间。线程是进程内的一个执行单元，可以共享进程的资源。一个进程可以包含多个线程，它们共享进程的内存空间和系统资源，但每个线程都有自己独立的运行栈和局部变量。
2. 上下文切换开销：线程间的上下文切换通常比进程间的上下文切换要快得多。因为线程共享进程的内存空间，所以在切换时不需要切换整个内存空间，只需要切换线程运行栈和寄存器状态等少量信息。而进程间的上下文切换需要更多的开销，因为它们具有独立的地址空间。
3. 通信和同步：线程之间的通信和同步通常比进程之间的通信和同步更简单，因为线程共享进程的内存空间，可以直接访问其他线程的数据。进程之间的通信需要通过操作系统提供的进程间通信（IPC）机制，如管道、信号量、共享内存等。
4. 容错性：由于进程具有独立的地址空间，一个进程的崩溃不太可能影响到其他进程。然而，线程共享进程的内存空间，一个线程的崩溃可能导致整个进程的崩溃，从而影响到进程中的其他线程。

总之，进程是一个独立的执行环境，拥有独立的内存空间，而线程是进程内的执行单元，共享进程的资源。线程之间的上下文切换和通信开销相对较小，但容错性较差。

### 什么是死锁？死锁产生的条件？

死锁（Deadlock）是指在多任务环境中，一组或多组任务相互等待对方释放资源的一种状态。在这种情况下，任务之间互相阻塞，无法继续执行。死锁可能导致系统性能下降或完全停止工作。

产生死锁的四个必要条件如下：

1. 互斥条件（Mutual Exclusion）：资源不能被多个任务同时占用。也就是说，一旦一个任务获得某资源，其他任务必须等待该资源被释放。
2. 占有并等待条件（Hold and Wait）：任务持有至少一个资源，同时等待其他任务释放的资源。这意味着任务既占有资源，又在等待其他资源。
3. 非抢占条件（No Preemption）：资源不能被强制从任务中抢占。换句话说，在任务完成之前，它持有的资源不能被其他任务抢占。
4. 循环等待条件（Circular Wait）：存在一组任务，它们构成了一个循环等待资源的链，即每个任务都在等待下一个任务持有的资源。

要避免死锁，必须破坏产生死锁的这四个条件中的至少一个。常见的死锁预防和解决方法包括资源分配策略（如银行家算法）、资源有序分配、死锁检测与恢复等。

### 进程调度策略有哪几种？

进程调度策略是操作系统用于管理进程执行顺序和分配 CPU 时间的方法。以下是一些常见的进程调度策略：

1. 先来先服务（First-Come, First-Served，FCFS）：按照进程到达的顺序进行调度。一旦一个进程开始执行，它将一直占用 CPU，直到完成。这种策略简单易实现，但可能导致较长的平均等待时间。
2. 短作业优先（Shortest Job First，SJF）：根据进程的预计运行时间进行调度。具有较短运行时间的进程优先执行。这种策略可以降低平均等待时间，但需要预先知道进程的运行时间，实际中很难实现。
3. 优先级调度（Priority Scheduling）：根据进程的优先级进行调度。优先级高的进程先执行。这种策略允许更重要的进程优先执行，但可能导致低优先级进程长时间得不到调度（饥饿现象）。
4. 时间片轮转（Round Robin，RR）：为每个进程分配一个固定长度的时间片（或称为时间量子），然后按顺序执行。当一个进程的时间片用完时，调度器将其放到就绪队列的末尾，然后开始执行下一个进程。这种策略实现简单，公平性较好，适用于交互式系统。
5. 多级反馈队列（Multilevel Feedback Queue）：将进程分配到不同优先级的队列中，并根据队列优先级和时间片轮转策略进行调度。这种策略可以在保证系统响应性的同时兼顾 CPU 利用率。

这些进程调度策略各有优缺点，适用于不同的场景。在实际操作系统中，可能会采用混合或改进的调度策略，以满足不同需求。

### 什么是虚拟内存？

虚拟内存（Virtual Memory）是一种内存管理技术，它使得计算机能够为程序提供比实际物理内存更大的地址空间。通过虚拟内存技术，操作系统能够将程序和数据分割成多个独立的内存块（称为页面或页），并将这些内存块在需要时分别加载到物理内存中。同时，操作系统可以将不常用的内存块交换到磁盘上的一个专门区域（称为交换区或页面文件），从而腾出物理内存空间。

虚拟内存的主要优点如下：

1. 内存抽象：虚拟内存为每个进程提供了独立的地址空间，使进程可以在隔离的环境中运行，不需要关心其他进程的内存分配情况。
2. 内存保护：由于每个进程拥有独立的地址空间，因此一个进程无法直接访问其他进程的内存，保证了内存安全。
3. 空间扩展：虚拟内存允许程序使用比实际物理内存更大的地址空间，从而使得程序能够在物理内存有限的情况下正常运行。
4. 内存共享：虚拟内存技术可以实现不同进程间的内存共享，例如共享库和内存映射文件等。
5. 内存利用率提高：虚拟内存通过按需分配页面、将不常用的页面交换到磁盘等方式，提高了物理内存的利用率。

虚拟内存的实现依赖于硬件支持，如内存管理单元（Memory Management Unit，MMU）等。MMU 负责将虚拟地址转换为物理地址，并在访问权限检查和页面错误处理等方面与操作系统协同工作。

## 书写代码的注意事项

1.监听器不用的要及时删除

```
// 👎：使用事件侦听器创建内存泄漏
function createMemoryLeak() {
  const element = document.getElementById("myElement");
  element.addEventListener("click", function handleClick() {
    // ...
  });
  // 忘记删除事件侦听器
}

// 👍：删除事件侦听器以避免内存泄漏
function avoidMemoryLeak() {
  const element = document.getElementById("myElement");
  function handleClick() {
    // ......
  }
  element.addEventListener("click", handleClick);
  // 在不再需要事件侦听器时将其删除
  // element.removeEventListener("click", handleClick);
}
```

2.需要正确的捕获异步错误

```
//错误
// try catch 只能捕获同步错误，而settimeOut是典型的异步操作
try {
  setTimeout(() => {
    throw new Error('err')
  }, 200);
} catch (err) {
  console.log(err);
}
// 修改
new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error('err');
    } catch (err) {
      reject(err);
    }
  }, 200);
})
  .then(() => {
    // Handle successful execution
  })
  .catch((err) => {
    console.log(err); // Error is caught here
  });
```

<hr>

3.关于if else的使用，不要太嵌套太多层

**if...if 类型 或者 else if...else if 类型**

用查找表模式进行处理

```
const rules = {
  x: function (a, b, c) { /* ... */ },
  y: function (a, b, c) { /* ... */ },
  z: function (a, b, c) { /* ... */ }
}

function demo (a, b, c) {
  const action = determineAction(a, b, c)
  return rules[action](a, b, c)
}
```

## 编码题

### **单位转换***

后端返回一个数字，单位是`kb`，而我要展示成 `KB`，`MB` 等形式。大概写一个工具函数

```
function formatSizeUnits(kb) {
    let units = ['KB', 'MB', 'GB', 'TB', 'PB'];
    let unitIndex = 0;

    while (kb >= 1024 && unitIndex < units.length - 1) {
        kb /= 1024;
        unitIndex++;
    }

    return `${kb.toFixed(2)} ${units[unitIndex]}`;
}
```

### **写一个·栈**

```
class Stack {
    constructor() {
        this.arr = []
        this.index = -1
    }
    push(data) {
        this.arr[++this.index] = data
    }// 推入
    pop() {
        return this.index > 0 ? this.arr[this.index--] : undefined
    }// 推出

    isEmpty() {
        return this.index < 0
    } // 是否为空
    length() {
        return this.index + 1
    }
}
```

### 用setTimeout实现setInterval

```typescript
function customSetInterval(callback: () => void, delay: number): () => void {
    let timer;

    const interval = () => {
        callback();
        timer = setTimeout(interval, delay)
    }

    timer = setTimeout(interval, delay)

    // 返回清除定时器的函数
    return () => {
        clearTimeout(timer)
    }
}

// 示例用法
const callback = () => console.log("Hello, world!");
const delay = 1000; // 每隔1000毫秒执行一次
const clearIntervalFunc = customSetInterval(callback, delay);

// 用法：在需要的时候清除定时器
// clearIntervalFunc();
```

### var实现let

```typescript
function demo() {
    (function() {
        var x = "Hello, world!";
        console.log(x); // 输出 "Hello, world!"
    })();

    try {
        console.log(x); // 抛出 ReferenceError，因为x在这个作用域内未定义
    } catch (error) {
        console.error(error); // 输出错误信息
    }
}

demo();
```

### 实现所有的TypeScript Utility Types

```typescript
// 1. Partial<T>
type Partial<T> = { [P in keyof T]?: T[P] };

// 2. Required<T>
type Required<T> = { [P in keyof T]-?: T[P] };

// 3. Readonly<T>
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 4. Pick<T, K>
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

// 5. Omit<T, K>
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 6. Exclude<T, U>
type Exclude<T, U> = T extends U ? never : T;

// 7. Extract<T, U>
type Extract<T, U> = T extends U ? T : never;

// 8. NonNullable<T>
type NonNullable<T> = Exclude<T, null | undefined>;

// 9. ReturnType<T>
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// 10. InstanceType<T>
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// 11. ThisParameterType<T>
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;

// 12. OmitThisParameter<T>
type OmitThisParameter<T> = T extends (this: any, ...args: infer A) => infer R ? (...args: A) => R : T;

// 13. ThisType<T>
// `ThisType` is a marker utility type and can't be implemented like other utility types.
```

### 防抖、节流debounce*

就记**简化版**。

防抖：一直触发就一直清空。

节流：一段时间内只执行一次。

```
function debounce(fn, delay = 500) {
    // timer 是在闭包中的
    let timer = null;  
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments) // 这里捕获外层匿名函数
            timer = null
        }, delay)
    }
}
// 节流
function throttle(fn, delay) {
    let timer = null  
    return function() {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        },delay)
    }
}
```

### New

```typescript
function customNew(constructorFn: Function, ...args: any[]): object {
    const obj = Object.create(constructorFn.prototype); // 创建一个新对象，并将其原型链设置为构造函数的prototype
    const result = constructorFn.apply(obj, args); // 调用构造函数并将this绑定到新创建的对象

    // 如果构造函数返回了一个对象，那么返回这个对象，否则返回创建的新对象
    return (typeof result === "object" && result !== null) ? result : obj;
}

// 示例用法
function Person(name: string, age: number) {
    this.name = name;
    this.age = age;
}

const alice = customNew(Person, "Alice", 30) as Person;
console.log(alice.name); // 输出 "Alice"
console.log(alice.age);  // 输出 30
```

### 数组去重*

```typescript
// First
const uniqueArray = (arr: any[]) => {
    return [...new Set(arr)]
}

// Second
const uniqueArray = (arr: any[]) => {
	const result = [];
  for (const item of arr) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }
  return result;
}

// Third
const uniqueArray = (arr: any[]) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

console.log(uniqueArray([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]
```

### 实现正则切分千分位

```typescript
function formatThousands(n: number): string {
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  const num = n.toString();
  const formattedNum = num.replace(reg, '$&,');
  return formattedNum;
}

// 测试
console.log(formatThousands(123456789)); // 输出: 123,456,789
console.log(formatThousands(1000000)); // 输出: 1,000,000
console.log(formatThousands(9876543210)); // 输出: 9,876,543,210
```

### call*

```typescript
// 实现自定义call方法
Function.prototype.myCall = function (thisArg: any, ...args: any[]): any {
    const fn = this;
    const uniqueKey = Symbol("uniqueKey");
    thisArg[uniqueKey] = fn;

    const result = thisArg[uniqueKey](...args);
    delete thisArg[uniqueKey];

    return result;
};

const obj = {
    name: 'Alice'
}

// 示例用法
function greet(greeting: string, punctuation: string) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.myCall(obj, "Hello", "!"); // 输出 "Hello, Alice!"
```

### apply

```typescript
// 实现自定义apply方法
Function.prototype.myApply = function (thisArg: any, args: any[]): any {
    const fn = this;
    const uniqueKey = Symbol("uniqueKey");
    thisArg[uniqueKey] = fn;

    const result = thisArg[uniqueKey](...args);
    delete thisArg[uniqueKey];

    return result;
};

const obj = {
    name: 'Alice'
}

// 示例用法
function greet(greeting: string, punctuation: string) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.myApply(obj, ["Hi", "!"]); // 输出 "Hi, Alice!"
```

### bind

```typescript
// 实现自定义bind方法
Function.prototype.myBind = function (thisArg: any, ...args1: any[]): (...args2: any[]) => any {
    const fn = this;

    return function (...args2: any[]) {
        return fn.myApply(thisArg, args1.concat(args2));
    };
};

const obj = {
    name: 'Alice'
}

// 示例用法
function greet(greeting: string, punctuation: string) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const boundGreet = greet.myBind(obj, "Hey");
boundGreet("?"); // 输出 "Hey, Alice?"
```

### 深拷贝*

```typescript
function deepClone(obj: any, cache = new WeakMap()): any {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (cache.has(obj)) {
        return cache.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof Function) {
        return function(...args: any[]) {
            obj.apply(this, args)
        }
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (obj instanceof Array) {
        const clonedArr: any[] = [];
        cache.set(obj, clonedArr);
        for (let i = 0; i < obj.length; ++i) {
            clonedArr[i] = deepClone(obj[i], cache);
        }
        return clonedArr;
    }

    const clonedObj: { [key: string]: any } = {};
    cache.set(obj, clonedObj);
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = deepClone(obj[key], cache);
        }
    }

    return clonedObj;
}

// 示例用法
const original: { [key: string]: any } = {
    name: "Alice",
    age: 30,
    dateOfBirth: new Date("1993-01-01"),
    preferences: {
        color: "blue",
        food: "pizza"
    },
    sum() {
        console.log(this.name + '-' + this.age);
    }
};
original.original = original
original.originalArr = [original, original]

const cloned = deepClone(original);
console.log(cloned); // 输出与 original 相同但不是同一个引用的对象
```

### 柯里化*

```typescript
function curry(fn: (...args: any[]) => any): (...args: any[]) => any {
    const arity = fn.length; // 获取原函数的参数个数

    function curried(...args: any[]): any {
        if (args.length >= arity) {
            return fn.apply(null, args);
        }

        return (...restArgs: any[]) => curried.apply(null, args.concat(restArgs));
    }

    return curried;
}

// 示例用法
function add(a: number, b: number, c: number): number {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出 6
```

### es5和es6继承

```js
// ES5继承（构造函数 + 原型链）
function AnimalES5(name: string) {
  this.name = name;
}

AnimalES5.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

function DogES5(name: string, breed: string) {
  AnimalES5.call(this, name); // 调用父类构造函数
  this.breed = breed;
}

DogES5.prototype = Object.create(AnimalES5.prototype); // 设置原型链
DogES5.prototype.constructor = DogES5; // 修复构造函数

DogES5.prototype.sayBreed = function () {
  console.log("My breed is " + this.breed);
};

// 示例用法
const dogES5 = new DogES5("Max", "Golden Retriever");
dogES5.sayName(); // 输出 "My name is Max"
dogES5.sayBreed(); // 输出 "My breed is Golden Retriever"

// ES6继承（使用class和extends关键字）
class AnimalES6 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayName() {
    console.log("My name is " + this.name);
  }
}

class DogES6 extends AnimalES6 {
  breed: string;
  constructor(name: string, breed: string) {
    super(name); // 调用父类构造函数
    this.breed = breed;
  }
  sayBreed() {
    console.log("My breed is " + this.breed);
  }
}
// 示例用法
const dogES6 = new DogES6("Max", "Golden Retriever");
dogES6.sayName(); // 输出 "My name is Max"
dogES6.sayBreed(); // 输出 "My breed is Golden Retriever"
```

### instanceof

```typescript
// 自定义实现 instanceof
function myInstanceOf(target: any, constructorFunc: Function): boolean {
  // 参数校验
  if (typeof target !== 'object' || target === null || typeof constructorFunc !== 'function') {
    return false;
  }

  // 获取目标对象的原型
  let targetProto = Object.getPrototypeOf(target);

  // 获取构造函数的原型
  const constructorProto = constructorFunc.prototype;

  // 遍历原型链，查找目标对象是否是构造函数的实例
  while (targetProto !== null) {
    if (targetProto === constructorProto) {
      return true;
    }
    targetProto = Object.getPrototypeOf(targetProto);
  }

  return false;
}

// 测试用例
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

const dog = new Dog();
const cat = new Cat();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(cat, Dog)); // false
console.log(myInstanceOf(cat, Animal)); // true
console.log(myInstanceOf(123, Number)); // false
```

### 数组扁平化

```typescript
// 自定义实现数组扁平化
function flattenArray(arr: any[]): any[] {
  const result: any[] = [];

  // 递归处理每个元素
  function processItem(item: any) {
    // 如果元素是数组，则递归处理
    if (Array.isArray(item)) {
      item.forEach(processItem);
    } else {
      // 如果元素不是数组，直接添加到结果数组中
      result.push(item);
    }
  }

  arr.forEach(processItem);
  return result;
}

// 测试用例
const nestedArray = [1, [2, [3, 4], 5, [6, [7, 8]]], 9, 10];

console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nestedArray2 = [1, [2, 3], 4, [[5], 6, [7, [8, 9, [10]]]]];

console.log(flattenArray(nestedArray2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 对象扁平化

```typescript
function flattenObject(obj: { [key: string]: any }, prefix = ""): { [key: string]: any } {
    const flattened: { [key: string]: any } = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(flattened, flattenObject(obj[key], newKey));
            } else {
                flattened[newKey] = obj[key];
            }
        }
    }

    return flattened;
}

// 示例用法
const nestedObj = {
    a: {
        b: {
            c: 1,
            d: {
                e: 2
            }
        },
        f: 3
    },
    g: {
        h: 4
    }
};

const flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);
// 输出 { 'a.b.c': 1, 'a.b.d.e': 2, 'a.f': 3, 'g.h': 4 }
```

### JSON.parse

```typescript
const myJSONParse = (target) => {
  return eval(`(${target})`);
};

// 测试用例
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const parsedObject = myJSONParse(jsonString);
console.log(parsedObject); // { name: 'JOHN', age: 30, city: 'NEW YORK' }
```

### EventEmitter事件触发器

```typescript
class EventEmitter {
    private events: Map<string, Array<(...args: any[]) => void>>;

    constructor() {
        this.events = new Map(); // 存储事件名和对应的回调函数列表
    }

    // 添加事件监听
    on(event: string, listener: (...args: any[]) => void): void {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)!.push(listener);
    }

    // 移除事件监听
    off(event: string, listener: (...args: any[]) => void): void {
        const listeners = this.events.get(event);
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }

    // 触发事件
    emit(event: string, ...args: any[]): void {
        const listeners = this.events.get(event);
        if (listeners) {
            listeners.forEach(listener => listener.apply(null, args));
        }
    }

    // 添加只执行一次的事件监听
    once(event: string, listener: (...args: any[]) => void): void {
        const wrappedListener = (...args: any[]) => {
            listener.apply(null, args);
            this.off(event, wrappedListener);
        };
        this.on(event, wrappedListener);
    }
}

// 示例用法
const eventEmitter = new EventEmitter();

function hello(name: string) {
    console.log(`Hello, ${name}!`);
}

eventEmitter.on("greet", hello);
eventEmitter.emit("greet", "Alice"); // 输出 "Hello, Alice!"

eventEmitter.off("greet", hello);
eventEmitter.emit("greet", "Bob"); // 不会输出，因为监听器已被移除

eventEmitter.once("welcome", hello);
eventEmitter.emit("welcome", "Carol"); // 输出 "Hello, Carol!"
eventEmitter.emit("welcome", "David"); // 不会输出，因为监听器只执行一次
```

### async/await

```typescript
function customAsync(generatorFn: (...args: any[]) => Generator) {
    return function (...args: any[]) {
        const generator = generatorFn.apply(null, args);

        function handle(result: IteratorResult<any>): Promise<any> {
            if (result.done) {
                return Promise.resolve(result.value);
            }

            return Promise.resolve(result.value)
                .then(value => handle(generator.next(value)))
                .catch(error => handle(generator.throw!(error)));
        }

        return handle(generator.next());
    };
}

// 示例用法
function* myGenerator() {
    const result1 = yield new Promise(resolve => setTimeout(() => resolve("First result"), 1000));
    console.log(result1);

    const result2 = yield new Promise(resolve => setTimeout(() => resolve("Second result"), 1000));
    console.log(result2);

    return "Done";
}

const myAsyncFunction = customAsync(myGenerator);
myAsyncFunction().then(result => console.log(result)); // 依次输出 "First result", "Second result", "Done"
```

### 正则获取url params*

```typescript
// 自定义实现获取 URL 参数
function getUrlParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const regex = /[?&]([^=&#]+)=([^&#]*)/g;
  let match: RegExpExecArray | null;

  // 使用正则表达式匹配 URL 参数
  while ((match = regex.exec(url)) !== null) {
    // 将匹配到的参数名称和值添加到结果对象中
    params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
  }

  return params;
}

// 测试用例
const testUrl1 = 'https://www.example.com/test?name=John&age=30&city=New%20York';
const result1 = getUrlParams(testUrl1);
console.log(result1); // { name: 'John', age: '30', city: 'New York' }

const testUrl2 = 'https://www.example.com/test?query=test&page=1&filter=active';
const result2 = getUrlParams(testUrl2);
console.log(result2); // { query: 'test', page: '1', filter: 'active' }
```

### jsonp

```typescript
function jsonp(url: string, params: { [key: string]: any }, callbackName: string): Promise<any> {
    return new Promise((resolve, reject) => {
        // 创建一个全局回调函数，用于接收请求返回的数据
        (window as any)[callbackName] = (data: any) => {
            delete (window as any)[callbackName]; // 请求完成后删除全局回调函数
            document.body.removeChild(script); // 移除script标签
            resolve(data); // 解析Promise，返回数据
        };

        // 将请求参数和回调函数名添加到URL
        const queryString = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");
        const finalUrl = `${url}?${queryString}&callback=${callbackName}`;

        // 创建并插入一个script标签，用于发起JSONP请求
        const script = document.createElement("script");
        script.src = finalUrl;
        script.onerror = () => reject(new Error("JSONP request failed")); // 监听错误事件以处理请求失败的情况
        document.body.appendChild(script);
    });
}

// 示例用法
const url = "https://api.example.com/data";
const params = {
    userId: 123,
    accessToken: "abcdefgh"
};
const callbackName = "jsonpCallback";

jsonp(url, params, callbackName)
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### JSON.stringify

```typescript
function customJSONStringify(obj: any): string | undefined {
    const seenObjects: any[] = [];

    function stringify(value: any): string | undefined {
        if (typeof value === "number" || typeof value === "boolean" || value === null) {
            return String(value);
        }

        if (typeof value === "string") {
            return `"${value}"`;
        }

        if (typeof value === "undefined" || typeof value === "function" || value instanceof Symbol) {
            return undefined;
        }

        if (seenObjects.indexOf(value) !== -1) {
            throw new TypeError("Converting circular structure to JSON");
        }
        seenObjects.push(value);

        if (Array.isArray(value)) {
            const arr = value.map(item => stringify(item) ?? "null");
            return `[${arr.join(",")}]`;
        }

        const keys = Object.keys(value).filter(key => typeof value[key] !== "function" && typeof value[key] !== "undefined");
        const keyValuePairs = keys.map(key => `"${key}":${stringify(value[key]) ?? "null"}`);
        return `{${keyValuePairs.join(",")}}`;
    }

    return stringify(obj);
}

// 示例用法
const obj = {
    name: "Alice",
    age: 30,
    sayHello: function() {
        console.log("Hello");
    },
    preferences: {
        color: "blue",
        food: "pizza"
    }
};

console.log(customJSONStringify(obj)); // 输出 '{"name":"Alice","age":30,"preferences":{"color":"blue","food":"pizza"}}'
```

### Promise

```typescript
// 定义Promise的三种状态常量
enum PromiseStatus {
    Pending = "PENDING",
    Fulfilled = "FULFILLED",
    Rejected = "REJECTED"
}

class CustomPromise {
    status: PromiseStatus;
    value: any;
    reason: any;
    onFulfilledCallbacks: Array<(...args: any[]) => void>;
    onRejectedCallbacks: Array<(...args: any[]) => void>;

    constructor(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void) {
        this.status = PromiseStatus.Pending; // 初始状态为Pending
        this.value = null; // 存储成功时的值
        this.reason = null; // 存储失败时的原因
        this.onFulfilledCallbacks = []; // 存储成功时的回调函数
        this.onRejectedCallbacks = []; // 存储失败时的回调函数

        const resolve = (value?: any) => {
            if (this.status === PromiseStatus.Pending) {
                this.status = PromiseStatus.Fulfilled;
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback());
            }
        };

        const reject = (reason?: any) => {
            if (this.status === PromiseStatus.Pending) {
                this.status = PromiseStatus.Rejected;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback());
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled?: (value: any) => any, onRejected?: (reason: any) => any): CustomPromise {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
        onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason; };

        const promise = new CustomPromise((resolve, reject) => {
            const handleFulfilled = () => {
                try {
                    const result = onFulfilled!(this.value);
                    if (result === promise) {
                        throw new TypeError("Chaining cycle detected for promise");
                    }
                    if (result instanceof CustomPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = () => {
                try {
                    const result = onRejected!(this.reason);
                    if (result === promise) {
                        throw new TypeError("Chaining cycle detected for promise");
                    }
                    if (result instanceof CustomPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            if (this.status === PromiseStatus.Fulfilled) {
                queueMicrotask(handleFulfilled);
            } else if (this.status === PromiseStatus.Rejected) {
                queueMicrotask(handleRejected);
            } else {
                this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
                this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
            }
        });

        return promise;
    }

    catch(onRejected?: (reason: any) => any): CustomPromise {
        return this.then(undefined, onRejected);
    }
}
```

### 写一个通用的方法来获取地址栏的某个参数对应的值，不能使用正则表达式*

```javascript
// 方法一
function getQueryParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// 使用示例
const myParamValue = getQueryParam('myParam');
console.log(myParamValue); // 输出myParam参数的值
```

```javascript
// 方法二
function getQueryParam(paramName) {
  var params = window.location.search.substr(1).split('&');
  for (let i = 0; i < params.length; i++) {
    let keyValuePair = params[i].split('=');=
    if (keyValuePair[0] === paramName) {
      return decodeURIComponent(keyValuePair[1]);
    }
  }
  return null;
}

// 使用示例
const myParamValue = getQueryParam('myParam');
console.log(myParamValue); // 输出myParam参数的值

```

### js: 求最大公约数，最小公倍数？(递归调用)

https://blog.csdn.net/huangguohui_123/article/details/104287423

```
// 举例子：
```


```
// 首先，我们来计算数字 12 和 18 的最大公约数（GCD）：
```


```
// 数字 12 的约数有：1, 2, 3, 4, 6, 12
```


```
// 数字 18 的约数有：1, 2, 3, 6, 9, 18
```


```
// 12 和 18 共有的约数是：1, 2, 3, 6。其中最大的共有约数为 6，因此最大公约数为 6。
```


```
// 接下来，我们来计算数字 12 和 18 的最小公倍数（LCM）：
```


```
// 数字 12 的倍数有：12, 24, 36, 48, 60, ...
```


```
// 数字 18 的倍数有：18, 36, 54, 72, 90, ...
```


```
// 12 和 18 共有的倍数是：36。其中最小的共有倍数为 36，因此最小公倍数为 36。
```


代码：

公倍数

https://blog.csdn.net/m0_38118744/article/details/79942837

```
        // 最大公约数
        function gcd(a, b) {
            if (b === 0) {
                return a;
            } else {
                return gcd(b, a % b);
            }
        }

        const b = gcd(10,25)
      
        // 最小公倍数
         function LCM(a, b) {
            return a * b / GCD(a, b);
            }
        }
```

#### 例题：计算公分母（给定一组分数，统一这组分数的分母，并且将统一分母处理到尽量小）

```
        //    求最小公倍数
        //     分子等于： 公倍数/分母 *分子     分母为公倍数
                function GCD(a, b) {
            if (b == 0) {
                return a;
            } else {
                return GCD(b, a % b);
            }
        }
        function LCM(a, b) {
            return a * b / GCD(a, b);
        }

        function unifyDenominators(arr) {
            const mom = arr.map(item => item[1])
            const lastmax = mom.reduce((acc, curr) => LCM(acc, curr), 1); // 求出全部的最小公倍数
            const result = arr.map(item => [lastmax * item[0] / item[1], lastmax]);
            return result;
        }

        let fractions = [[1, 2], [1, 3], [1, 4]];
        let unifiedFractions = unifyDenominators(fractions);
        console.log(unifiedFractions);
```

### 公共子串计算（动态规划）

链接：https://www.nowcoder.com/share/jump/7150760771726231915653

#### 描述

给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度。

数据范围：字符串长度：1≤s≤150 1≤s≤150

进阶：时间复杂度：O(n3) O(n3) ，空间复杂度：O(n) O(n)

#### 输入描述：

输入两个只包含小写字母的字符串

#### 输出描述：

输出一个整数，代表最大公共子串的长度

输入：

```
asdfas
werasdfaswer
```

输出：

```
6
```

代码：

```
void async function () {
    // Write your code here
    const str1 = await readline();
    const str2 = await readline();

    let max = 0;
    const dep = Array.from( Array(str1.length+1), ()=> Array(str2.length+1).fill(0));
    for(let i=0;i < str1.length ;i++){
        for(let j=0;j < str2.length ;j++){
            dep[i+1][j+1] = str1[i] === str2[j] ? dep[i][j]+1 : 0;
            max = Math.max(max,dep[i+1][j+1]);
        }
    }
    console.log(max);
    return max;
}()
```

### 数字颠倒

链接：https://www.nowcoder.com/share/jump/7150760771726232102707

描述

程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001

数据范围： 0≤n≤230−1 0≤n≤230−1

输入描述：

输入一个int整数

输出描述：

将这个整数以字符串的形式逆序输出

示例1

输入：

```
1516000
```

输出：

```
0006151
```

示例2

输入：

```
0
```

输出：

```
0
```

```
void async function () {
    // Write your code here
    const num = await readline();
    const str = (num + '').split("").reverse();
    const result = str.join('');
    console.log(result);
    return result;

    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        console.log(a + b);
    }
}()
```

### 删除公共字符 | 时间限制：1秒 | 内存限制：32768K

输入两个字符串，从第一字符串中删除第二个字符串中所有的字符。例如，输入”They are students.”和”aeiou”，则删除之后的第一个字符串变成”Thy r stdnts.”

```
void (async function () {
    // Write your code here
    const str = await readline();
    const delStr = await readline();
    const delRes = "[" + delStr + "]";
    const reg = new RegExp(delRes, "g");
    const result = str.replace(reg, "");
    console.log(result);

    while ((line = await readline())) {
        let tokens = line.split(" ");
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        console.log(a + b);
    }
})();
```

## 代码阅读题

### this 指向问题：

### 事件循环：

推荐：https://lldlly.github.io/2020/12/10/taskdemo/

事件循环相关练习题：

习题1

```
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });
```

习题2：

```
console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
```

习题3：

```
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");
```

答案：

```
习题1：
1;
3;
4;
2;

习题2：
"begins";
"promise 2";
"setTimeout 1";
"promise 1";
"setTimeout 2";
"dot then 1";
"resolve 1";
习题3：
"script start";
"async1 start";
"async2";
"promise1";
"script end";
"async1 end";
"promise2";
"setTimeout";
```

解析：https://www.explainthis.io/zh-hans/swe/js-event-loop-questions

```
扩展：
async function async1() {
console.log("async1 start");
await async2();
console.log("async1 end");
}

async function async2() {
console.log("async2");
}

async function async3() {
console.log("async3");
}

console.log("script start");

setTimeout(function () {
console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
console.log("promise1");
async3();
resolve();
}).then(function () {
console.log("promise2");
});

console.log("script end");
```

```
script start
 async1 start 
 async2
 promise1
 async3
 script end
 async1 end
 promise2
setTimeout
```
