# Hbuilder创建的uniapp工程，使用tailwindcss最优雅的方式

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















