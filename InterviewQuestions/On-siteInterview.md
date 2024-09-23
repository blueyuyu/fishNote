## 前端现场面试

永远记住，不要打逆风局，不要打逆风局 ！！



### 🍋 柠檬云财税

#### Flex 的几个属性

```
Flex-direction: row | row-reverse | column-reverse | column
Flex-wrap:(适用于多行)： no-wrap | wrap | wrap-reverse
Flex-flow: flex-direction flex-wrap
Justify-content: flex-start | flex-end | center | space-between | space-around

Align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
多根轴线的对齐方式

Align-items: center | 等


关于flex:
Flex: flex-grow | flex-shrink | flex-basis   0 1 auto
auto (1 1 auto) 和 none (0 0 auto)
flex-grow 属性定义项目的放大比例，默认为0
flex-shrink 定义了项目的缩小比例，默认为1(空间不足会压缩)设置为0
flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）
```



#### 代码回退

Git reset | **Git revert**(推荐使用)



#### linux 如何获取全部目录

mkdir   aaa      创建目录aaa；

echo >index.js   创建一个名为 index.js 的空文件；

ls     查看目录；

cat  查看文件；

vim   编辑器编辑文件

#### linux部署到服务器

1. 先把dist 丢进html文件夹里
2. Nginx.conf里配置端口

```
server {
listen 8001;
server_name localhost;
location / {
root html/dist;
index index.html index.htm;
try_files $uni $uni /index.html;
}
}
```



#### 关于数组处理方法  slice splice 与 split

Slice() 函数用于提取原数组的一部分，返回一个新数组，原数组不会被修改;

Splice() 用于通过删除现有元素和/或添加新元素来更改原数组的内容，并返回被删除的元素组成的数组;

Split() 指定的分隔符将一个字符串分割成一个数组



#### 数组去重的几种方法

```
 let arrResult2 = arr5.reduce((pre, cur) => {

	if (!pre.includes(cur)) {

		pre.push(cur);

	}
	return pre;
}, [])


const arr = [1, 2, 3, 2, 4, 1, 5, 3];

const uniqueArr = Array.from(new Set(arr));

console.log(uniqueArr); // 输出 [1, 2, 3, 4, 5]

```

#### 对pinia的理解



#### Ts中type与interface的区别？



#### 对keep-alive 组件的一些理解？

 它的功能是在多个组件间动态切换时缓存被移除的组件实例。

```
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>


```



#### 考了代码执行顺序，事件循环相关的？

（记住！Prmoise里面的代码是同步操作）



###  🥥 迪xx科技公司

#### Vue2原理？

(object.defineProperty()绑定属性)追问如何绑定内部的复杂数据类型？

#### Observe类是用来干嘛的？

· 监听器（Observer）：对所有数据的属性进行监听，一旦属性变化，就会找到dep

· dep 通知watcher 来执行更新函数。

#### Vue原理： template编译成真实dom这个过程发生了什么？

Vue2里的data()为啥是函数？

为什么vue2在访问method的时候，可以直接 this.getMyMrthod()，而不是 this.methods.getMyMethod() ?

vue里有哪些内置组件？（回答keep-alive）

追问： keep-alive 的作用； keep-alive的三个属性？

追问： keep-alive的max=10，当缓存页面超过10之后，会怎样？（面试官说有一个LRU算法）

常用的vue指令？

如何实现自己的自定义指令？有哪些钩子函数？钩子函数里有哪些参数？

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/41b23e65f9a85389de97028e444ce4f230d37e76?) 

 

 

11. 让你实现一个dialog拖拽的自定义指令？该怎么实现？（给了些思路）





12. 路由有哪些守卫？组件内部的一些首位？

13. Vuex action mutation? 为什么mutation是同步的？

14. Ts 中的泛型里理解？如何对泛型进行约束？

15. 断言是怎么用的？

16. Unknow与any的区别？

17. Interface与type的区别？

18. 后台管理系统鉴权？

19. 如何针对不同角色看到的菜单不一样？路由权限

20. 代码如何优化？打包做了什么优化？





webpack 打包优化

JS代码压缩（TerserPlugin）

CSS代码压缩 （css-minimizer-webpack-plugin）

Html文件代码压缩 （HtmlWebpackPlugin ）

文件大小压缩 （compression-webpack-plugin）

图片压缩 （file-loader、image-webpack-loader'）

Tree Shaking （消除死代码、    optimization:{

​        usedExports

​    }）

代码分离 （splitChunksPlugin 进行代码分离）

内联 chunk

 

vite打包优化

推荐：

<https://developer.aliyun.com/article/1441756>

 

代码拆分:

将公共代码提取到单独的文件中。

根据路由配置，进行路由懒加载。

资源压缩:

使用 imagemin 对图片进行压缩。

使用 cssnano 对 CSS 进行压缩。

使用 terser 对 JavaScript 进行压缩。

缓存利用:

开启浏览器缓存。

 

提高构建速度：

优化 loader 配置

合理使用 resolve.extensions

优化 resolve.modules

优化 resolve.alias

使用 DLLPlugin 插件

使用 cache-loader

terser 启动多线程

合理使用 sourceMap

 

 

21. 页面渲染10万条数据？（可能是虚拟列表）



10万条一般还是建议做分页处理的。这里问的是虚拟列表，个人感觉虚拟列表没必要掌握，属于极端情况。



22. 大文件上传的具体步骤？通过什么方法上传？

23. 浏览器缓存有了解过吗？

24. 能一个人做一个项目嘛？（这里开始换面试官）

25. **路由的钩子函数怎么挂载到vue？**

26. Element-ui组件库里使用到extends 继承，在组件库里哪个组件使用过? 冷门api

27. Vite脚手架，有做过哪些优化嘛？

28. 有没有自己写过插件？

29. **可视化大屏三维有了解过吗？笔记本电脑可以放大到很大，以及20分辨率，4000分辨率，像这种问题，怎么做一个兼容性处理？**

30. 有看过哪些东西的源码？

31. **表单的校验交互，内部的实现逻辑，怎么触发表单的某一项的错误提示的？**

**从0到1，从input开始，书写校验规则，如何去触发校验？（提示：input不会触发自己的事件）input会直接触发form表单内的校验**。



###  🥨 大和医疗

####  ❗ toRef与toRefs的区别是什么？

toRefs 批量处理对象中的所有属性,第一层，变成响应式

toRef() 需要传参，且只能将一个属性变成响应式

```
const state = reactive({
  foo: 1,
  bar: 2
})

// 双向 ref，会与源属性同步
const fooRef = toRef(state, 'foo')

// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2

// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) // 3
```

```
const state = reactive({
  foo: 1,
  bar: 2
})

const a = {...toRefs(state)}
```



####  ❗ Render与template的区别是什么？Render来写slot该怎么写？

(用h函数构造组件的写法，我还是有点不懂！！！)

template 使用 HTML 模板语法来描述 UI 结构。
render 函数使用 JavaScript 代码来创建 VNode，描述 UI 结构。

**关于render中的slot，slot.default**

```
// 基本用法
render() {
  const { h } = Vue;
  return h('div', {}, this.$slots.default());
}

// 具名插槽
render() {
  const { h } = Vue;
  return h('div', {}, [
    h('header', {}, this.$slots.header()),
    h('main', {}, this.$slots.default()),
    h('footer', {}, this.$slots.footer()),
  ]);
}

// 作用域
render() {
  const { h } = Vue;
  return h('div', {}, [
    this.$slots.header({ msg: 'Hello' }),
    this.$slots.default({ count: this.count }),
    this.$slots.footer(),
  ]);
}

// 使用
<child-component>
  <template #header="{ msg }">
    <h1>{{ msg }}</h1>
  </template>
  <template #default="{ count }">
    <p>The count is: {{ count }}</p>
  </template>
  <template #footer>
    <p>This is the footer</p>
  </template>
</child-component>
```



**下面是关于h函数的代码**

```
<script lang="ts">
import { h } from "vue";
export default {
  props: ["columns_data", "columns"],
  setup(props) {
    const createColumns = (columns) => {
      if (!columns.length) return undefined;
      return columns.map((column) => {
        return h(
          ElTableColumn,
          { prop: column.prop, label: column.label },
          column.childColumns
            ? { default: () => createColumns(column.childColumns) }
            : undefined,
        );
      });
    };
    return () => {
      return h(
        ElTable,
        {
          data: props.columns_data,
          border: true,
          height: "100%",
        },
        () => createColumns(props.columns),
      );
    };
  },
};
</script>
```



NextTick() 在事件循环中属于异步的微任务，似乎是本轮循环执行的操作？

10人两两握手，一共握手几次？

###  ❗ ❗ 关于webpack打包了解多少？

```
配置一些常见的loader

style-loader: 将css添加到DOM的内联样式标签style里
css-loader :允许将css文件通过require的方式引入，并返回css代码
less-loader: 处理less
sass-loader: 处理sass
postcss-loader: 用postcss来处理CSS
autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss
file-loader: 分发文件到output目录并返回相对路径
url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url
html-minify-loader: 压缩HTML
babel-loader :用babel来转换ES6文件到ES

HtmlWebpackPlugin
mini-css-extract-plugin
```

Vite打包的优化策略了解多少？



Ts有哪些类型？

给你一个老项目，发现启动不了？怎么分析？




###  🥩 大华科技

1. 标签语义化：

通过标签本身的意义来优化文档结构。

####  ❗  如何实现多个标签页之间的通讯

参考文章：https://blog.csdn.net/AdminGuan/article/details/134076898

-  使用LocalStorage或SessionStorage来进行通讯。

当一个标签页修改了存储的数据时，其他标签页可以监听Storage事件来获取最新的数据。

```

/* 在一个标签页中写入数据到 LocalStorage 或 SessionStorage */
localStorage.setItem('shareData', '标签页111');
// sessionStorage.setItem('shareData', '标签页111');
 
/* 在其他标签页中监听存储事件，并获取更新的数据 */
window.addEventListener('storage', function(event) {
  if (event.key === 'shareData') {
    const newData = event.newValue;
    console.log('收到的更新数据：', newData);
  }
});
 
/* 在另一个标签页中更新数据到 LocalStorage 或 SessionStorage */
localStorage.setItem('shareData', '标签页222');
```

 

- #### Shared Worker

  Shared Worker 是一种在多个标签页之间共享的后台线程。标签页可以通过 SharedWorker 进行通信，发送消息和接收消息。

```
//在发送消息的标签页中
/* 创建一个 SharedWorker */
const worker = new SharedWorker('worker.js');
 
// 发送消息
worker.port.postMessage('标签页111');

// 在共享的 Worker 脚本文件 worker.js 中
/* 监听连接事件 */
self.onconnect = function(event) {
  const port = event.ports[0];
  // 监听消息事件
  port.onmessage = function(event) {
    const newData = event.data;
    console.log('收到的更新数据：', newData);
  };
  // 发送消息
  port.postMessage('你好啊！Worker');
};
```



####  ❗  如何监听到页面localStorage的修改？

**当存储区域（localStorage 或 sessionStorage）被修改时，将触发 storage 事件****。**

mounted() {

​    const that = this;

​    //监听缓存中指定key的值变化

​    window.addEventListener(**'storage'**, function (e) {

​      if(e.key && e.key == 'socketQuery' && e.newValue){

​        that.socketQuery = e.newValue //即可获取到【页面A】最新的socketQuery

​      }

​    })

 },

 

4. 单行文本超过

```
{

Text-overflow: ellipsis;

Overflow: hidden;

White-space: nowrap;

}
```

 

5. 多行文本，用子绝父相，定位的方式去掩盖超出部分

```
.demo {

        position: relative;

        line-height: 20px;

        height: 40px;

        overflow: hidden;

    }

    .demo::after {

        content: "...";

        position: absolute;

        bottom: 0;

        right: 0;

        padding: 0 20px 0 10px;

}

```

 

####  ❗  **多tab栏，缓存，页面更新，如何刷新其他tab的数值？**

关于： <keep-alive></keep-alive>  

关于keep-alive缓存了页面组件

1. 在外层封装的时候，用 keep-alive组件包裹住router-view

```
      <keep-alive :include="cachedViews">

        <router-view :key="key" />

      </keep-alive>

<script>

export default {

  name: 'AppMain',

  computed: {

    cachedViews() {

      return this.$store.state.tagsView.cachedViews

    },
    key() {
      return this.$route.path
    }
  }
}

</script>

```

2. 配合router组件里的meta:{} 设置，是否缓存组件，只有有表单的才触发缓存机制，其他的不进行缓存。





如果是已经缓存的组件：

· 在 Vuex 的 state 中保存当前页面的一些状态,如搜索条件、分页信息等

· 在新增完成后,通过 Vuex 的 commit 方法更新这些状态

· 在原先的页面组件中,通过 Vuex 的 mapState 获取这些状态,并在 watch 中监听状态的变化,从而实现页面的刷新

 

或者是在 keep-alive组件的：

在原先的页面组件中,通过**监听 activated 和 deactivated 钩子函数**,在页面激活时刷新页面。

 

7. **如果浏览器突然卡顿该如何去排查？（场景题）**

从渲染和运行两方面去排查：

 

1. 渲染不及时，页面掉帧：

请求过多，请求数据返回太慢（后端可以做一些优化）

Js线程与GUI线程互斥，js请求回来的太慢，会影响到GUI的渲染。

 

2. 回流重绘太多，可以适当的减少一些dom操作；

减少获取scrollTop、clentWidth的次数，或者获取之后存起来。

 

3. 加载的资源引起的阻塞。

（js资源放在body之前、行内script阻塞、css加载会阻塞DOM树渲染（css并不会阻塞DOM树的解析、资源过大阻塞）

 

4. dom节点或事件占用内存过大。

5. 内存泄露。





笔试题：解析url输出

{

Name: a,

Age: 16

}

​      function getParams(url) {

​        let temParams = url.match(/([^?&#]+)=([^?&#]+)/g)

​        if (temParams == null) return false;

​        let params = {}

​        temParams.forEach((item) => {

​          let index = item.indexOf('=')

​          let key = item.slice(0, index)

​          let value = item.slice(index + 1)

​          params[key] = value

​        })

​        return params;

​      }

getParams('http://www.baidu.com/?keyWord=key_word&number=90');

 

### 🥕  数字马力

1. Label标签？

HTML <label> 元素（标签）表示用户界面中某个元素的说明。

行内元素，多用于为表单内提供标签（标识），for 属性内填写该label 绑定的元素的id

 

示例代码：

<label for="username">Click me</label> <input type="text" id="username" />

参考链接：<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label#%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%97%AE%E9%A2%98>

 

 

####  ❗  关于封装头部与底部导航栏的一些思路

以头部导航栏举例：

需要考虑键盘问题、胶囊安全距离、返回处理问题。

 

Uni-app自己的导航就有解决了键盘问题。

胶囊安全距离：胶囊是iOS底部的那个横杠，那个封装一个通用函数，中间高度算的时候减去就行。可以通过api动态获取底部安全距离，再根据距离进行处理。（等下找个项目看看吧）

 

uni.getSysteminfo({

  success: res => {

​    let safeArea = res.safeAreaInsets.bottom;

  }

})

 

返回处理问题：

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/0fd56e4a31de239ea3e50bd72e1c3715f1c2b76d?) 

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/cf00229663d5893dc64ece5b9fd8e0c19fe86bd9?) 

 

3. 如何看待uni-app这个框架？

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/8014e34a1b42c8841db736bfc72daa7ef9b325da?) 

 

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/1e0d8a5572f92825e0f7a67ace440ba9a9ed877c?) 

 

4. Uni-app是如何实现多平台之间的适配的？

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/6fc4d9a8e5016cabaa5dd8495b825f3dc0a953ae?) 

5. Uni-app 在app端有几种实现方案？（nvue、）vix那一套，还有一个混合式app？

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/aa1cbe674628dac65c8a2f4ccc434dcea2f12acf?) 

 

 

6. 混合式app的基本实现是啥？除了uni-app还有了解过其他混合式app的框架吗？

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/5d60a6c609de3da7b741534d95f439588b929d49?) 

 

 

 

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/2b96784eb047995f8e1267cd057e1c18715813a8?) 

 

####  ❗  Uni-app中的rpx 与 px的计算公式是什么？他们的区别是什么？

（这里一时疏忽说错了，以后就说是两倍关系就行）面试官从这里理解到：我没有自己写过移动端的适配方案。

 

这个可以细看这一篇内容：

<https://juejin.cn/post/7083295652318281736>

会有涉及到一些计算相关的问题：

**rpx = (750 \* px) / screenWidth**

**px = (screenWidth \* rpx) / 750**

```
设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx
```



软件工程三要素：（软件的生命周期）

方法（为建造软件提供技术上的解决办法）

工具（为方法的运用提供自动的或半自动的软件支撑环境）

过程（获得高质量的软件所需要完成的一些列任务的框架）

了解一下这一篇文章：<https://cloud.tencent.com/developer/article/1905539>

 

8.小程序和h5的优劣势？对于这个平台的出现有没有思考？（软件工程术语表达）（

小程序访问有便利性等等）

前提： h5出现已经很久了，为啥微信要推出小程序。

总结一下： 

小程序的开发成本低，依托微信运行，可以调用各种硬件权限，同时推广也更加方便，可以通过分享的方式进行传播。  缺点：依托于平台运行

H5:运行范围更广，成本低，但是在手机端优势不高。

 

![img](http://www.kdocs.cn/api/v3/office/copy/c3A5MGNXQUN4UjE5UlllRmJ0a0VQK1RMSmNDNE9GcGNRNW1CNExuUjJBQ0xONEpTU3pwMlhQN2RpTm94RHU3SGFGT2N6bG4wakdpQnkzem8yU2M2QlRqVVhQM1dHTTQ4VURTL29kaVpjclBWejIyOUJtUTZGZVFobEJuRUNWVzM1c3E1bitVT0RRS2dxWjZ2a3ZQZ2xkU041QTY4eUYxQVpXRW1EUkhVeTRiYVJTQXVYNGNnU1hsTDBIMFc0Q3BlNFhBdmh4UXhjRmRPMEovcHZ4dyswYnlMZitUbUx5YTIxVmY0RktBRDRMa1kxUlQxMUlFdVEwalZUQlNkYUNMZFBPVC8wdlJDMGVrPQ==/attach/object/cbe709128875f9671c34ef117b5f465d1a88a4bd?) 

 

9.关于响应式是怎么理解的？哪些页面适合用响应式？淘宝、支付宝、百度等等；

回答了淘宝；又问了淘宝如何实现响应式？（解释一下，只是淘宝的内容适合，但并不是说淘宝就用的响应式，淘宝移动端和web端不同的代码的）

（思路：响应式只是以前提出的web端适配方案，他具有局限性，用媒体查询限制很大）

略

label标签

（略）上面写了

2. Css的box-sizing的属性，他有什么意义？为什么要设置成border-box，他的意义？

Box-sizing: border-box | content-box

方便计算

3. 什么是js的闭包，概念？闭包的意义？（变量保护）意义！！（从架构的角度）（面试官解释了写插件的时候、不希望别人修改你的变量，不希望别人修改你的插件，闭包可以对变量进行保护，自我防护的机制，别人改不了，你自己也不会污染其他人的代码）

4. Es6的导出方式？推荐那种？站在架构或者团队的角度分析；

具名导出，默认导出，推荐具名，方便维护

5. 如果导入之后重名怎么处理？





####   ❗  **封装一个组件编码之前有哪些思考？** **（重点掌握）**

1. 考虑他的接口设计：接收的数据，事件，以及内部插槽的放置


2. 考虑其状态和逻辑： 考虑该组件具体需要实现哪些功能

3. 考虑抽象性：开发者不必暴露所有数据，只需要提供一些必要的方法提供给人使用，

这样可以降低使用难度。

4. 可复用性。封装组件的主要目的之一是提高代码的复用性。因此在设计组件时应该考虑它是否可以被其他组件或应用程序重复使用。可以尝试将一些可变的状态、行为、UI样式和布局进行抽象,使得组件更具通用性。（给外部提供一个写公共样式的地方，也是提高可复用性的一部分）

5. 测试性：这个组件应该开发得方便测试。

（这里可以比对一下开源的ui框架与文档，看看他们是怎么封装组件的，一般组件的prop控制在20以内）



###  🍥 浙江智加信息科技

1. 自我介绍

2. 讲讲前端最主要的是什么

3. 讲一下数组怎么不重复

4. 数组里有重复数字，怎么得到重复值和重复次数，返回什么类型

5. 讲讲一个数组里多个数字，如何当前一个数字结束之后在执行下一个，全部执行才一起返回结束

6. 讲讲es6的继承

讲讲项目中花费时间最长的点



###  🍈 广州探迹

1.谈谈react中hook的意义

#### 讲讲广度优先遍历算法

讲讲缓存有哪些

讲讲缓存中两个控制时间的优先级

5.讲讲什么会导致内存泄漏

#### 讲讲Loader和插件区别

#### 两个独立页签之间怎么通信

8.讲讲项目难点 你怎么解决的



###  🍭 匿名公司1

#### 线上bug处理

性能优化

#### 白屏

v-if和v-show

数组方法

（number）+ 4(string) （number）- 4(string)



11.组件封装

12.双向数据绑定原理

13.vue2数据后面加入的怎么更新

14.数据怎么监听

15.怎么修改第三方组件库样式，怎么避免样式污染

16.插槽

17.首屏优化怎么做

18.路由模式，项目中使用的什么路由模式

19.element怎么搭建后台管理项目

20.父子传值是单向数据流吗？为什么？

21.vue2与vue3区别

#### 页面卡顿怎么优化

23.uniapp可以做什么

24.vuex和pina的区别

25.for、for in、for of区别

26.v-moild怎么实现原理

27.权限设计（到按钮）

#### 封装一个form组件带筛选条件带表格

29.项目从0到1做了什么（配置了什么、命名规则等）

30.npm发布组件

#### 使用第三方插件或组件，怎么避免一个个注入，有没有办法使用插件不用注入

32.async/await的弊端是什么

33.数据类型

34.检测数据类型的方法

#### 类和class

36.设计模式

#### 定义对象有几种方法



#### 一个下拉200条数据怎么处理，纯前端



#### 表格弹出框修改的时候确认怎么判断是否置灰



#### vue2 input框输入一个内容底层做了些什么



#### 动态组件设计思路或者实现





###  🌼  匿名公司 2

#### 如何不使用symbol，给某个对象一个唯一的，不重复的标识？



#### 如何把一个二进制数据转化为十进制？



Echarts的原理是啥？



WebSocket



