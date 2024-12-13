# 面试题推荐链接

1.链接：https://xkhm.net/interview-blog/base/JS.html

2.常见面试题速查：https://aa72fjtc5n.feishu.cn/docx/AP2PdIOcMoDH64xgN82c0AzpnVd

https://www.anyup.cn/site/zh/blog/

市面上比较缺的类型：
1. 需要有一些three.js 经验的管理平台；
2. 人员系统、erp系统的构建人员；
3. react native 开发 或者 react 开发；
4. shopify独立站建站程序员；
5. SEO优化人员；


简历技巧
1. 年龄要对上；
2. webpack 打包，优化之后，时间减少多少，增加多少之类的。对各种场景兼容优化，（什么场景？支付场景，还是别的）
优化之后的指标，速度等等。FCP 、LCP、TTI等等，优化提升百分之多少。
3. 打招呼语言：几年开发经验，曾在什么公司工作，公司做什么业务的，做过什么什么产品。



线下面试切记
1. 配得感强，但是不要那种太自我的人。跳槽的时候是很狂的，心态要放高一点。
2. 技术面试官，不要问太多关于薪资的事情。

找不到工作，找遍中国都要找！！！
坚持不懈，就会有结果。 不给自己退路。江苏、南京那边。

移动端项目难点：
1.键盘输入框等，在ios端上面有问题，基于ios端做了适配。
ios中，输入框获得焦点时，页面输入框被覆盖，定位的元素位置错乱。

当页面input存在于吸顶或者吸底元素中时，用户点击输入框，输入框弹起后，fixed失效，页面固定的元素随着屏幕滚动。

解决方案：
Web API 接口： scrollIntoView()的应用，将input输入框显示在可视区域。

inputOnFocuse(e){
    setTimeOut(e=>{
        e.target.scrollIntoView(true)
    })
}

2.ios 中输入框获取焦点后，失去焦点页面不回弹，顶部上移，底部留有灰色区域，需要手动触摸一个地方才会回弹。

监听软键盘弹起、关闭事件，再进行对应的操作。

('focusout',()=>{
    scrollTo({top: 0;left: 0 :behavior: 'smooth'})
})

3.ios 中flex失效问题

软键盘唤起后，页面的fixed元素将失效，变成absolute，页面超过一屏且滚动时，失效的fixed元素随之滚动。

解决方法： 不让页面滚动，让主体自己滚动，主体 100% ；overflow:scroll;

4.ios中，当时有部分机型软键盘弹起的时候遮住原来视图。

Element.scrollIntoView()让当前元素滚动到视口区域，
