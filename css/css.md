这里用来记录一些常用的css方案（有难度版，避免重复百度，重复造轮子）

### 两行文字超出用省略号代替，后方放置“全文”按钮

参考文章链接：https://juejin.cn/post/7065207121175904264

```

```

### css的border阴影

参考链接： https://getcssscan.com/css-box-shadow-examples

### 关于如何丝滑滚动

### 使用fixed时，设置值的研究

贴底边就用 bottom ,  贴顶边就用 top 。 元素尽量往边上放。

```
    <view class="desc-btn" style="position: fixed; width: 90%; left: 0rpx; bottom: 20rpx; margin-left: 30rpx">
    <uv-button
    type="primary"
    :disabled="!nextStepEnable"
    text="下一步"
    customStyle="margin-buttom: 20rpx"
    @click="nextStepFn"
    color="#00c8aa"
    :custom-style="{ borderRadius: '80rpx', height: '80rpx' }"
    ></uv-button>
    </view>
```

### f12 查看样式时， element.style 是写在哪里的样式？ 该如何去查找？

element.style 是指 HTML 元素内联样式,也就是直接写在元素标签上的样式。
写在标签上的内联样式层级是非常高的。
注意：平时封装组件的时候，内联样式，不要给默认值或者少给。

### 内联样式的？



### 关于一些选择器

#### :is() 选择器：组合选择的神器

`:is()`选择器可以将多个选择器分组，大幅减少重复代码。

```
/* 之前的写法 */
header p, main p, footer p {
    line-height: 1.6;
}

/* 使用:is()的写法 */
:is(header, main, footer) p {
    line-height: 1.6;
}
```

#### 2. :where() 选择器：零特异性的福音

`:where()`的功能类似`:is()`，但特异性为0，让样式更容易被覆盖。

```
/* 特异性较高 */
article :is(header, footer) p {
    color: #333;
}

/* 特异性为0，更容易覆盖 */
article :where(header, footer) p {
    color: #333;
}
```

#### 3. :has() 关系选择器：父元素选择的革命

`:has()`让我们终于可以基于子元素选择父元素。

```
/* 选择包含图片的段落 */
p:has(img) {
    display: flex;
    align-items: center;
}

/* 选择后面有标题的段落 */
p:has(+ h2) {
    margin-bottom: 2em;
}
```

#### 4. 属性选择器通配符匹配

使用属性选择器的通配符匹配可以更灵活地选择元素。

```
/* 选择所有数据属性 */
[data-*="important"] {
    font-weight: bold;
}

/* 选择特定语言的元素 */
[lang|="en"] {
    font-family: 'Arial', sans-serif;
}
```

#### :not() 多条件排除

#### 复合选择器优化

组合多个选择器条件，实现精确匹配。

```
button[type="submit"]:not(:disabled):hover{
transform: translateY(-1px);
}
```

#### 层叠层级管理 @layer

使用`@layer`管理样式优先级，减少特异性战争。

@layer base,components,utilities;
@layer base {* 基础样式 */
@layer components{/* 组件样式 */

（不太理解）
