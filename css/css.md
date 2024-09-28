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
