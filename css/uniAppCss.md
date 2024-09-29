##  🌴 Hbuilder创建的uniapp工程，使用tailwindcss最优雅的方式

### 可行方法一

推荐使用一个插件，这款插件适配了很多比较实用的功能。

这是这个插件的使用文档

https://sonofmagic.github.io/weapp-tailwindcss/docs/quick-start/frameworks/hbuilderx

作者还很贴心的配备了超级详细的视频：

https://www.bilibili.com/video/BV1EV41197Ps/?t=2.548833&spm_id_from=333.1350.jump_directly&vd_source=fe9de9c0731a80bbb6f6d20b16769209

（配置的时候注意： 关于自己的创建项目的内部版本，其内置包的版本； 还有可能会有包找不到的问题）

```
1. 关于找不到 tailwindCss 包的问题？
通过后面的地址，找到uniapp-cli-vite文件，把你下好的tailwindcss文件复制一份，丢进去就能用了。

// 原因： 使用Hbuilder X 构建项目，它内置了一些包，但是这些内置包里面没有 tailwindCss，而在项目启动过程中，项目去这些内置包的文件里去引入 tailwindCss去了。我暂时还没有搞清楚，uni-app引入这些包的一些逻辑，
但是通过反复尝试。把node_moduels里面有的tailwindCss
```



### 可行方法二

结果验证：方法可行；

链接地址：https://ask.dcloud.net.cn/article/id-40098__page-2

需要修改的地方与注意事项：

配置文件：

他少写了个 i++；

```
      spacing(config) {
        let result = { 0: '0' }
        // 允许的数值大一些也无所谓，最后打包tailwindcss会摇树优化，未使用的样式并不会打包  
        for (let i = 1; i <= 300; i++) {
          result[i] = `${i}rpx`
        }
        return result
      },
```

tailwindCss 包含文件，可以多加一点：

```
content: ['./pages/**/*.{html,ts,jsx,tsx,vue,js}', './main.js', './App.vue', './index.html'],
```



在uni-app里搭建项目需要明白的一个问题：

链接：https://blog.csdn.net/LlanyW/article/details/132466730



##  🌴 跳转的注意事项

### 跳转写法

    // 1. url 用的绝对的地址，用 / 开始，从 /pages/  ,open-type = "" 的设定 
    // 2. 用api跳转，也是需要区分页面的
    
    <button @click="getLogin">去登录</button>
    <navigator url="/pages/login/login">login</navigator>
    
    const getLogin = () => {
      uni.reLaunch({
        url: '/pages/login/login'
      });
    };

### 参数的接收

> // 路径参数；接收地址中的参数
> //在起始页面跳转到test.vue页面并传递参数
> uni.navigateTo({
>   url: 'test?id=1&name=uniapp'
> });

```


// 参数的 ：接收方法一
import { onLoad } from '@dcloudio/uni-app';
onLoad(async (option) => {
if (option.id) {
}
});
// 参数的： 接收方法二
const props = defineProps({
  type: String,
  illnessType: String
});
```



##  🌴 关于uni-app 本身钩子的导入情况

```
import { onLoad } from '@dcloudio/uni-app';
```

自己的钩子不支持自动导入，需要手动获取输入；

但是所有和 vue 相关的生命周期钩子是自动导入的。



##  🌴 uni-app 修改组件内部样式

```
:deep(.uni-list-item__content-title) {
  font-size: 32rpx !important;
  color: #3c3e42 !important;
}


// 好像只有不加 scoped 的样式才能改掉，而且
// 层级不够，需要!important 加权重

// 我很少用这种穿透写法，说实话，能通过组件的 customStyle 修改，就用那个；
```



## 🌴 uni-app rpx到px的转化

推荐链接：<https://juejin.cn/post/7083295652318281736>

在uni-app中，涉及到多机型的样式适配问题，一般获取机型的宽高，进行一些处理，

最后，关于样式的单位转化为rpx 最佳！！！

```
// rpx转px
rpxToPx(rpx) {
  const screenWidth = uni.getSystemInfoSync().screenWidth
  return (screenWidth * Number.parseInt(rpx)) / 750
}

// px转rpx
pxToRpx(px) {
  const screenWidth = uni.getSystemInfoSync().screenWidth
  return (750 * Number.parseInt(px)) / screenWidth
}
```

页面使用写成行内样式，再引入计算变量。

```
// template
<view
        class="desc-btn"
        style="position: fixed; width: 90%; left: 0rpx; margin-left: 30rpx"
        :style="{
          top: getFixedHeight + 'rpx'
        }"
      >
     </view>

// js
const getFixedHeight = computed(() => {
  let fixedTop = -40;
  uni.getSystemInfo({
    success: (res) => {
      fixedTop += res.windowHeight; // 可用窗口高度
    }
  });
  return pxToRpx(fixedTop);
});
```



## 🌴 uni-app 上传一定要上传uni_modules

不然结局会有一点小惨！！！

因为uni_modules是uni自引入的，我暂时还不知道咋快速下载，等我之后研究一下吧！





#  ❔ 等待研究

## uv-ui 是怎么实现的？ 他是封装uni-app的原生来实现的吗？





## 研究一下关于错误触发的问题？关于表单绑定的传值情况