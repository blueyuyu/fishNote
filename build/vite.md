## vite 构建 bug , vite 报错504

![](.\img\vite504.png)

https://www.jianshu.com/p/c6e910405287

排查发现： 本应该使用npm 下包，却用了pnpm 进行下包，最后导致一些依赖错误。

研究一下，各种下包的方法，以及产生的依赖文件是啥？？？