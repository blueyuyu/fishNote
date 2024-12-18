

## 前端现场面试

风浪越大鱼越贵。


### 🍋 柠檬云财税

#### Flex 的几个属性

```
Flex-direction: row | row-reverse | column-reverse | column
Flex-wrap:(适用于多行)： no-wrap | wrap | wrap-reverse
Flex-flow: flex-direction flex-wrap；

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

content是设置间隔；items设置居中之类的

多行排列

```
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
```



#### 代码回退

Git reset | **Git revert**(推荐使用)



#### linux 如何获取全部目录

ls     查看目录；

常见linux操作：

mkdir   aaa      创建目录aaa；

echo >index.js   创建一个名为 index.js 的空文件；

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



常用的数组方法，字符串处理方法？



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

#### 对pinia的理解？

pinia是一个状态管理库，和vuex类似，但是比vuex使用更方便，且其对ts的支持更好。

```
// stores/counter.js
import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null);
    const token = ref(null);

    // 设置用户
    const setUser = (val) => {
      userInfo.value = val;
    };

    // 删除用户
    const delUser = () => {
      userInfo.value = null;
    };

    // 设置token
    const setToken = (val) => {
      token.value = val;
    };

    // 删除用户
    const delToken = () => {
      token.value = null;
    };

    return { userInfo, setUser, delUser, token, setToken, delToken };
  },
  {
    persist: true
  }
);
```

使用仓库

```
import { useUserStore } from '@/stores/index.js';
const store = useUserStore();

const logout = () => {
  // 退出登录
  // 清空用户pinia
  store.delUser();
  store.delToken();
  // 退出到登录页，不可返回其他栈的
  uni.reLaunch({
    url: '/pages/login/login'
  });
};
```



#### Ts中type与interface的区别？

`type` 和 `interface` 在 TypeScript 中都可以用于定义复杂类型，但它们在声明方式、扩展、合并声明和类型表示等方面有所不同。`type` 更灵活，支持更多类型表示，而 `interface` 更适用于描述对象结构，可以进行合并声明。

- type:   定义之后会有类型的推导和检查。

#### 对keep-alive 组件的一些理解？

keep-alive  :在组件切换时缓存组件实例。

`include` 和 `exclude` 属性来控制哪些组件应该被缓存。

max 属性用于限制可以缓存的最大组件实例数量。

如果超过了这个个数的话，在下一个新实例创建之前，就会将以缓存组件中最久没有被访问到的实例销毁掉。

##### 生命周期钩子

- **activated**：当组件被激活（即从缓存中恢复）时调用。
- **deactivated**：当组件被停用（即被缓存）时调用。

使用时

- 每个组件都有 `activated` 和 `deactivated` 钩子。
- 在 `activated` 钩子中，组件会重新获取数据。
- 在 `deactivated` 钩子中，可以进行清理操作，比如取消订阅或清除定时器。

它的功能是在多个组件间动态切换时缓存被移除的组件实例。

```
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>
```

##### 扩展：使用了LRU算法

参考：https://blog.csdn.net/qq_43477721/article/details/120629036



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

为什么vue2在访问method的时候，可以直接 this.getMyMethod()，而不是 this.methods.getMyMethod() ?

#### vue里有哪些内置组件？

（回答keep-alive）

追问： keep-alive 的作用； keep-alive的三个属性？

追问： keep-alive的max=10，当缓存页面超过10之后，会怎样？（面试官说有一个LRU算法）

1. **<transition> 和 <transition-group>**:

   - 用于给元素或组件的进入和离开添加过渡效果。
   - `<transition>` 用于单个元素或组件的过渡。
   - `<transition-group>` 用于列表中多个元素或组件的过渡，并且可以对列表中的元素进行排序、插入和删除。

2. **<teleport>** (Vue 3+):

   - 用于将组件的内容渲染到 DOM 中的不同位置，而不是组件的当前位置。
   - 适用于模态框、提示信息等需要脱离当前组件层级结构的场景。

   ```
   <teleport to="body">
       <div v-if="visible" class="modal-overlay" @click="closeModal">
         <div class="modal" @click.stop>
           <h2>{{ title }}</h2>
           <p>{{ message }}</p>
           <button @click="closeModal">Close</button>
         </div>
       </div>
     </teleport>
   ```

   ​

#### 常用的vue指令？

v-on (@)  v-bind (: 单向传输) v-model(双向数据绑定，v-model只能应用在表单类元素（如：input、select等）)

v-show v-if v-text v-for v-once

#### 如何实现自己的自定义指令？

##### 有哪些钩子函数？

##### 钩子函数里有哪些参数？

 

让你实现一个dialog拖拽的自定义指令？该怎么实现？（给了些思路）



路由有哪些守卫？组件内部的一些首位？

Vuex action mutation? 为什么mutation是同步的？

Ts 中的泛型里理解？如何对泛型进行约束？

断言是怎么用的？

Unknow与any的区别？

Interface与type的区别？

后台管理系统鉴权？

如何针对不同角色看到的菜单不一样？路由权限？



#### 代码如何优化？打包做了什么优化？

###### webpack 打包优化

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

 

###### vite打包优化

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

#### Label标签？

HTML <label> 元素（标签）表示用户界面中某个元素的说明。

行内元素，多用于为表单内提供标签（标识），for 属性内填写该label 绑定的元素的id。



​     Label 中有两个属性是非常有用的,一个是FOR、另外一个就是ACCESSKEY了。

​    FOR属性

​     功能：表示Label标签要绑定的HTML元素，你点击这个标签的时候，所绑定的元素将获取焦点。

​     用法：

```
<Label FOR=”InputBox”>姓名</Label><input ID=”InputBox” type=”text”>
```

​    ACCESSKEY属性：

​     功能：表示访问Label标签所绑定的元素的热键，当您按下热键，所绑定的元素将获取焦点。

​     用法：

```
<Label FOR=”InputBox” ACCESSKEY＝”N”>姓名</Label><input ID=”InputBox” type=”text”>
```

​    局限性：accessKey属性所设置的快捷键不能与浏览器的快捷键冲突，否则将优先激活浏览器的快捷键。



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



2. Css的box-sizing的属性，他有什么意义？为什么要设置成border-box，他的意义？

Box-sizing: border-box | content-box

方便计算

#### 什么是js的闭包，概念？闭包的意义？

（变量保护）意义！！（从架构的角度）（面试官解释了写插件的时候、不希望别人修改你的变量，不希望别人修改你的插件，闭包可以对变量进行保护，自我防护的机制，别人改不了，你自己也不会污染其他人的代码）

```
1.重用变量又不能造成全局污染
2.内层函数访问外层变量
```



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

- UUID

  ```
  const uuid = crypto.randomUUID();
  const obj = {
    id: uuid,
    // 其他属性
  };
  ```

  ​

- 使用时间戳或其他唯一值

  ```
  const id = Date.now().toString();
  const obj = {
    id,
    // 其他属性
  };
  ```

  ​

#### 如何把一个二进制数据转化为十进制？

```
const a = 111001;

function toTenFn(num) {
    const arr = (num + '').split('').reverse();
    console.log('arr', arr);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
    result += arr[i] * Math.pow(2, i);
    }
    return result;
}
```



#### ts中如何借助类来实现接口？

```
export default class Carousel extends React.Component<Props, State> {}
```

```
// props的类型
export default class Props {
  public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: () => {}
  public beforeChange: () => {}
  public selesctedColor: string
  public showDots: boolean = true
}
```

```
public static defaultProps = new Props()
```

#### Echarts的原理是啥？

```

```



#### WebSocket

```

```



#### element组件里有树状图，如何将数组结构转化？

```
const flatArray = [
  { id: 1, pid: null, name: '根节点' },
  { id: 2, pid: 1, name: '子节点 1' },
  { id: 3, pid: 1, name: '子节点 2' },
  { id: 4, pid: 2, name: '孙节点 1' },
  { id: 5, pid: 3, name: '孙节点 2' }
];


const data = [
 {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
]
```



```
export function intoTree(data, pid) {
  const arr1 = []
  data.forEach(item => {
    if (item.pid === pid) {
      // console.log('item.pid', item.pid)
      // 条件成立，把children给他写上
      // const obj = {}
      // 追加属性
      item.label = item.name
      const children = intoTree(data, item.id)
      if (children.length > 0) {
        item.children = children
      }
      arr1.push(item)
    }
  })
  return arr1
}
```

```
// 扁平数组示例
const flatArray = [
  { id: 1, pid: null, name: '根节点' },
  { id: 2, pid: 1, name: '子节点 1' },
  { id: 3, pid: 1, name: '子节点 2' },
  { id: 4, pid: 2, name: '孙节点 1' },
  { id: 5, pid: 3, name: '孙节点 2' }
];

// 转换为树形结构的函数
function buildTree(flatArray) {
  const map = {};
  const tree = [];

  // 将每个节点按 ID 存入 map
  flatArray.forEach(item => {
    map[item.id] = { ...item, children: [] }; // 初始化每个节点的 children 属性
  });

  // 构建树形结构
  flatArray.forEach(item => {
    if (item.pid === null) {
      tree.push(map[item.id]); // 根节点
    } else {
      map[item.pid].children.push(map[item.id]); // 添加子节点
    }
  });

  return tree;
}

// 使用转换函数
const treeStructure = buildTree(flatArray);
console.log(JSON.stringify(treeStructure, null, 2));
```

 

#### 前端常见的安全策略？

1. xss攻击

```
XSS 全称是 Cross Site Scripting(即跨站脚本攻击)，是一种代码注入攻击。为了和 CSS 区分，故叫它XSS。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息等，进而危害数据安全。

窃取Cookie。
监听用户行为，比如输入账号密码后直接发送到黑客服务器。
修改 DOM 伪造登录表单。
在页面中生成浮窗广告


非持久型 XSS
用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。

持久型 XSS
储存型XSS会把用户输入的数据“储存”在服务器端。
当攻击者提交一段XSS代码后，被服务器端接收并存储，当所有浏览者访问这个页面时都会被XSS攻击，这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、评论、用户私信等。

DOM型 XSS
比如在数据传输过程劫持到网络数据包，然后修改里面的 html 文档！这样的劫持方式包括WIFI路由器劫持或者本地恶意软件等。
```

解决思路：

- 安全策略 csp  Content-Security-Policy

```
    <meta charset="utf-8" http-equiv="content-security-policy" content="script-src 'self' 'unsafe-eval' chrome-extension-resource; object-src 'none'; style-src 'self' 'unsafe-inline'; ">

```

-  HttpOnly Cookie

  这是预防XSS攻击窃取用户cookie最有效的防御手段。Web应用程序在设置cookie时，将其属性设为HttpOnly，浏览器会禁止页面的JS访问带有HttpOnly属性的Cookie。这样就可以避免该网页的cookie被客户端恶意JavaScript窃取，保护用户cookie信息。

- 输入过滤或转码

  服务端将一些关键的字符进行转码，比如 `<script` 等

  ​

  ​

参考：https://github.com/yuanyuanbyte/Blog/issues/133



#### object.属性 与 object['']

```
如果属性名称是静态的,使用点符号方式通常更好;  如果需要动态访问属性,使用方括号方式更合适。

用 . 符号；
这种方式要求属性名称是一个有效的标识符。
这种方式在编译时就可以进行类型检查。

用方括号 [];
这种方式允许使用任意字符串作为属性名称,包括动态生成的属性名称。
这种方式在编译时无法进行完全的类型检查,需要在运行时进行属性访问。
这种方式在需要动态访问属性时很有用。
```

下面是动态存取过程

```
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890"
};

const propertyToAccess = prompt("Enter the property you want to access:");
console.log(user[propertyToAccess]); // 根据用户输入动态访问属性
```



前端线上bug如何处理？



#### arguments的理解 ?

**arguments** 是一个对应于传递给函数的参数的类数组对象

function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);



#### 关于Class中的属性get() 与 set() 方法，请写代码举例？

```
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("名字太短了,至少需要3个字符!");
    } else {
      this._name = newName;
    }
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      console.log("年龄不能为负数!");
    } else {
      this._age = newAge;
    }
  }
}

// 创建一个 Person 实例
let person = new Person("John", 30);

// 访问 name 属性
console.log(person.name); // 输出: "John"

// 设置 name 属性
person.name = "Alice"; // 输出: 名字太短了,至少需要3个字符!
person.name = "JohnDoe";
console.log(person.name); // 输出: "JohnDoe"

// 访问 age 属性
console.log(person.age); // 输出: 30

// 设置 age 属性
person.age = -10; // 输出: 年龄不能为负数!
person.age = 35;
console.log(person.age); // 输出: 35

```



### 长沙线上某个公司

#### !!!对vite的理解？使用vite做过哪些优化操作？

快速启动和热更新、按需加载、高效构建、对ts的支持很好。

- **代码分割**: 手动指定模块打包到同一个 chunk 中。
- **Gzip 压缩**: 减少文件大小。
- **CSS 预处理器**: 方便使用 Sass、Less 等。
- **懒加载路由**: 减少初始加载时间。
- **图像优化**: 使用插件对图像进行优化。
- **缓存控制**: 设置 HTTP 头控制静态资源缓存。
- **PWA 支持**: 支持 Progressive Web App 功能。

css预处理、文件压缩、图像压缩、

#### !!! webpack哪些打包优化操作？

- JS代码压缩
- CSS代码压缩
- Html文件代码压缩
- 文件大小压缩
- 图片压缩
- Tree Shaking
- 代码分离
- 内联 chunk

### 如何提高webpack构建速度？

- 优化 loader 配置
- 合理使用 resolve.extensions
- 优化 resolve.modules
- 优化 resolve.alias
- 使用 DLLPlugin 插件
- 使用 cache-loader
- terser 启动多线程
- 合理使用 sourceMap

#### 首屏做过哪些优化？

代码拆分、Tree Shaking、图片优化、使用 CDN、使用骨架屏、预加载关键资源、懒加载、减少重绘和回流、使用 CSS-in-JS 或内联样式、字体优化、Critical CSS、减少第三方脚本、压缩和最小化资源、使用 HTTP 压缩、优化布局和渲染、减少重定向。

#### vuex的常见属性和用法？

- **State**: 存储应用的状态数据。

- **Getters**: 从 `state` 中派生出一些状态，类似于计算属性。

- **Mutations**: 修改 `state` 的唯一途径，必须是同步函数。

- **Actions**: 处理异步操作，并提交 `mutations`。

- **Modules**: 将 Store 分割成模块，便于管理和维护。

  ```
  // modules/user.js
  const userModule = {
    state: {
      user: null,
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
    actions: {
      login({ commit }, user) {
        commit('setUser', user);
      },
    },
    getters: {
      isAuthenticated: state => !!state.user,
    },
  };

  ```



```

this.$store.state.num
this.$store.commit('addNum',1) //修改
this.$store.dispatch('asyncAddNum')
this.$store.getters.计算属性名
```

封装的hooks;文件上传下载
dva里怎么进行状态管理？具体操作？还有什么类似的react状态管理工具？
websocket怎么用?和后端协商吗，后端有做了什么了解吗?
虚拟滚动;react性能优化。



### 广州面试

公司里一般的项目开发流程是怎么样的？



Echarts中如果一次接收几千条数据应该怎么做？（Echarts遇见大规模数据渲染）

https://juejin.cn/post/7398352956711616550

我感觉比较合理的解决方法：

方法一： 后端处理

1、后端数据聚合。后端进行数据聚合，每次单个chart数据不超过2000。
2、前端交互、鼠标缩放、拖拽，根据时间，重新请求，整合更新数据。

方法二： echarts 采样

降采样策略 `series-line.sampling`，通过配置`sampling`采样参数可以告诉 ECharts 按照哪一种采样策略，可以有效的优化图表的绘制效率。



Echarts需要实时的更新数据,应该怎么做？（轮询）如果某次请求的时候，请求出现问题，前端这边怎么确保这个可视化大屏没有问题，或者没有异常呢？



大文件上传的时候，断点续传值怎么实现的？断点续传，定义的数据有哪些? 接收数据有哪些字段？



对Promise的原理有没有什么了解？



### 广州 lespark线下面试题(14k)

nginx配置、webpack做过哪些优化、



异常监控如何上报服务器，



大屏可视化项目多个屏幕拼接展示如何处理



echarts多图表大数据量的情况优化



从头搭一个移动端项目如何搭建，组件库构建相关讲讲；



cookie、localStorage、sessionStorage相关，主域名和子域名cookie能共享么什么什么的？



代码分包问的很细，要我说参数，splitChunk；





### 老板面/人事面



#### 自我介绍

老板你好，我是xx，毕业于 xx学院的xx工程专业，今天来面试前端开发的岗位。

我的技术栈是vue2、vue3与uni-app，在上一家公司参与过两个前端项目的从0-1，独立负责过公司的官网制作，也参与过公司多个自营项目的迭代升级。

我之前了解到公司的技术栈也是vue和uni-app，和我的技术栈比较契合。

#### 问你之前公司的流程？



#### 你的优点缺点？

优点：就严谨细心，喜欢做计划，有产品意识。



缺点：什么太严谨有一种强迫症，导致在某个地方一直打磨，容易打乱时间安排。



#### 个人性格？自我评价？

性格直爽，行动力强，喜欢制定计划，执行计划；

喜欢钻研问题，善于采纳别人的想法和意见。

缺点： 

太喜欢制定计划，计划没有按照预期执行，就会很失落，难受，感觉规则被打破。



#### 为什么离职？

上一份工作在苏州那边，离家比较远，在那边除了同事没有其他的家人朋友，饮食方面和那边也不是很契合。

广州离家近，而且经济比较发达，也比较宜居，所以选择来广州上班。



#### 如何看待加班？





#### 未来3-5年的职业规划？



#### 什么时候可以到岗？





#### 
### 长沙数字马力一面(13k)

1.讲讲个人情况？离职原因？为什么考虑长沙？
2.讲讲项目最近做的一个项目？用什么做的响应式？你做过大屏，大屏是咋适配的？rem、em、vh...
3.讲讲项目中遇到的难点？你这个做法和微前端类似？讲讲你了解的微前端？
4.了解react么？说说你说理解的hook？Vue3中的hook？除了hook以外还有那些逻辑抽离的方式？Vue.extent?mixins?反向继承？
5. Node.js？koa和express有什么差别？洋葱模型？什么是中间件？知道底层原理么？
6. Keep-alive有哪些配置？缓存的是虚拟dom么？LRU？还有哪些方面底层涉及到这个算法？
7. 说说你知道的和在项目中使用的性能优化内容？import动态导入实现分包的原理是什么？
8. 你刚刚说的图片懒加载讲讲？有哪几种？一般用哪种？
9. 闭包
10. TS有了解么？讲讲
11. 反问？技术展示react + ts


### 长沙数字马力二面(13k)

1.自我介绍
2.vuex状态管理使用场景，讲讲具体哪些功能用了这些？
3.你们登录过期是如何判断的？cookie哪些字段？
4.讲讲项目中那个视频播放组件，你有参与封装么
5.spa和mpa的区别	
6.webpack打包文件的整个流程讲讲？有哪些参数？
7.使用uniapp开发遇到过哪些问题，举写例子？ocr模块拉起摄像头是咋做的
8.项目中有参与封装哪些组件？讲讲那个树组件的封装？回填慢有涉及到什么优化么？
9.代码管理是git还是svn?说几个常用命令？
10.说说你知道的node相关内容？有使用哪些中间件？
11.CICD流程？有使用过哪些服务器命令？













### 广州的面试摘要



#### 了解页面渲染过程



#### http请求原理

建立连接：
客户端（如浏览器）想要与服务器通信时，首先会通过 TCP（Transmission Control Protocol）三次握手建立一个可靠的连接。

发送请求：
连接建立后，客户端会向服务器发送一个 HTTP 请求消息。这个请求包含以下几部分：

处理请求：
服务器接收到请求后，解析请求并执行相应的操作，比如查询数据库、生成动态内容等。
返回响应：

断开连接：
一旦客户端接收到了完整的响应，TCP 连接可能会被关闭，除非使用了 HTTP Keep-Alive 选项来保持连接以供后续请求复用。

#### 前端网页性能优化

1. 减少HTTP请求
  合并文件：将多个CSS或JavaScript文件合并成一个，以减少HTTP请求数量。
  使用图标字体或SVG Sprites：将多个图标合并为一个字体文件或SVG sprite，减少图片请求。
2. 压缩资源
  启用Gzip/Brotli：在服务器端启用压缩算法，如Gzip或更高效的Brotli，可以显著减小传输文件的大小。
  压缩图片：使用工具（如ImageOptim, TinyPNG）来压缩图片而不明显降低质量。
  压缩CSS/JS：使用构建工具（如Webpack, Gulp）中的插件对CSS和JavaScript进行压缩，去除不必要的空格、注释等。
3. 优化缓存策略
  设置适当的Cache-Control头：通过HTTP头部告诉浏览器哪些资源可以缓存以及缓存多久。
  利用ETag或Last-Modified：让浏览器能够检查本地缓存是否是最新的，避免不必要的下载。
  版本化静态资源：通过给静态资源添加版本号或哈希值，使更新后的资源能被正确加载。
4. 延迟加载和懒加载
  懒加载图片和视频：只当元素进入视口时才加载图片或视频，减少初始页面加载时间。
  异步加载脚本：对于不影响首屏渲染的脚本，使用async或defer属性使其异步加载，不阻塞DOM解析。
5. 代码分割和按需加载
  动态导入：使用JavaScript的动态导入语法（import()）来实现代码分割，根据需要加载模块。
  Tree Shaking：移除未使用的代码，确保打包后只有真正用到的代码被包含进来。
6. 优化JavaScript执行
  减少重排和重绘：尽量批量修改DOM，减少样式计算次数；使用requestAnimationFrame来进行动画处理。
  事件委托：将事件监听器绑定到父级节点上，利用事件冒泡机制处理子元素的事件，减少内存占用。
  Web Workers：对于耗时的任务，考虑使用Web Workers将其放到后台线程中执行，保持UI流畅。
7. 使用CDN（内容分发网络）
  托管静态资源：将图片、CSS、JS等静态资源托管到CDN上，利用其全球分布的优势加速资源获取。
  选择合适的CDN提供商：根据目标用户群体的位置选择覆盖范围广且稳定的CDN服务提供商。
8. 预取和DNS预解析
  预取资源：提前加载可能会用到的资源（如下一个页面的CSS/JS），提高后续页面加载速度。
  DNS预解析：提前解析第三方资源所在域名的DNS，缩短首次连接时间。
9. 减少重定向
  避免不必要的重定向：每个重定向都会增加额外的HTTP请求，导致延迟。尽量直接链接到最终目的地。
10. 优化移动体验
  采用响应式设计：确保网站在各种设备上有良好的显示效果，同时考虑到移动设备的特点调整布局和交互方式。
  触控优化：为触摸屏设备提供更大的点击区域，并考虑快速点击和手势操作。
11. 监控和诊断工具
   Google Lighthouse：用于审计网页性能、可访问性等方面的开源工具，给出详细的改进建议。
   PageSpeed Insights：由Google提供的在线服务，分析网页并提供建议以加快加载速度。
   Web Vitals：关注关键用户体验指标，如LCP（最大内容绘制）、FID（首次输入延迟）和CLS（累积布局偏移）。

#### 浏览器兼容

CSS 兼容性
前缀属性：一些 CSS 属性可能需要特定的浏览器前缀才能工作（如 -webkit-、-moz-、-o- 和 -ms-）。例如 transition、transform 等动画和变换属性。
解决方案：使用 Autoprefixer 工具自动添加必要的浏览器前缀。
布局差异：不同的浏览器对盒模型、浮动、清除浮动、弹性盒子（Flexbox）、网格布局（Grid Layout）等的支持可能存在差异。
解决方案：确保代码遵循最新的 CSS 规范，并为旧版浏览器提供回退方案；对于复杂的布局，可以考虑使用框架如 Bootstrap 或者 CSS 框架来简化开发。

2. JavaScript 兼容性
  ES6+ 特性支持：较新的 JavaScript 语法和特性（如箭头函数、解构赋值、let 和 const 关键字、模板字符串等）在老旧浏览器中可能不受支持。
  解决方案：使用 Babel 将现代 JavaScript 编译成向后兼容的 ES5 代码。
  DOM API 支持：不同浏览器对 DOM API 的实现有差异，某些方法或属性可能在某些浏览器中不存在。
  解决方案：检查文档或使用 Polyfill 来补充缺失的功能，比如 core-js 可以用来填补 JavaScript 标准库中的空缺。
3. HTML5 元素与 API
  HTML5 新标签：新引入的语义化标签（如 <article>、<section> 等）在 IE9 之前的版本中不被识别。
  解决方案：使用 HTML5 Shiv 或 Modernizr 等工具来增强旧版浏览器对 HTML5 标签的支持。
  多媒体元素：<audio> 和 <video> 标签及其属性在不同浏览器中有不同的编码和格式支持。
  解决方案：提供多种编码格式的文件，以确保至少一种格式能在目标浏览器中播放。
4. 事件处理
  事件绑定方式：不同浏览器使用不同的方法来绑定事件监听器（如 addEventListener 对应的 IE 版本是 attachEvent）。
  解决方案：使用事件委托或者库（如 jQuery）来抽象这些差异。
  触摸事件：移动设备上的触摸事件（如 touchstart、touchmove 等）在桌面浏览器上可能不存在。
  解决方案：检测用户代理或使用像 Hammer.js 这样的库来统一处理触控和鼠标事件。
5. 表单验证
  内置验证：HTML5 表单验证（如 required、pattern 等属性）在不同浏览器中的行为可能会有所不同。
  解决方案：编写自定义验证逻辑，或者依赖第三方库来保证一致性。
6. 媒体查询和响应式设计
  视口设置：某些移动浏览器默认缩放页面，这会影响响应式设计的效果。
  解决方案：通过设置正确的视口元标签（<meta name="viewport" content="width=device-width, initial-scale=1">）来控制页面缩放。
7. 字体和图标
  Web 字体加载：不同浏览器对 Web 字体的加载策略可能不同，可能导致闪屏或其他渲染问题。
  解决方案：优化字体文件大小，延迟加载非关键字体，或使用字体加载器如 Font Face Observer。
8. 插件和 ActiveX
  Flash 和 Silverlight 插件：随着越来越多的浏览器停止支持 Flash 插件，相关的内容可能无法正常显示。
  解决方案：将内容迁移到 HTML5 或其他现代技术。
  解决浏览器兼容性的通用建议
  使用 Polyfills 和 Shims：为不支持的新特性和 API 提供替代实现。
  选择合适的库和框架：许多流行的库和框架已经解决了大量的兼容性问题，可以帮助你减少这些问题。
  测试：尽可能多地在实际的目标浏览器和设备上进行测试，包括使用工具如 BrowserStack 或 Sauce Labs 来模拟各种环境。
  渐进增强：设计时采用渐进增强的原则，确保基础功能在所有浏览器中都能正常工作，同时为现代浏览器提供更丰富的体验。
  关注最新规范和技术：随着浏览器不断更新其对标准的支持，保持对最新 Web 技术的关注有助于提前解决问题。




### 长沙电商类、独立开发公司面试(10k)



#### 搭一个公司官网

（从技术选型角度考虑。自己搭建官网，技术选型，做官网要考虑到哪些问题？）

基于SEO考虑，会采用 next（react） 或者nuxt（vue）来进行网站搭建，或者使用一些成熟的开源库，类似wordpress之类的，wordpress是基于PHP的，他对SEO的适配是很不错的。

开发注意:  响应式设计，网站兼容性问题，网站响应速度，SEO优化，网站部分页面反扒，商城类要特别考虑安全性问题。



响应式设计：确保网站能够在不同设备上（如台式机、平板、手机）正确显示和操作。
浏览器兼容性：不同浏览器对HTML、CSS和JavaScript的支持可能存在差异，需要测试网站在主流浏览器（如Chrome、Firefox、Safari、Edge）中的表现。可以使用Polyfill和Transpiler等技术来解决兼容性问题1。
性能优化：优化网站加载速度，减少资源请求，使用压缩和缓存技术，懒加载图片和资源，使用CDN加速资源加载等2。
用户友好的界面：设计直观、易于导航和使用的界面，确保用户能够轻松找到所需信息并完成操作。
安全性：保护用户数据，防止XSS（跨站脚本攻击）、CSRF（跨站请求伪造）等常见攻击。使用HTTPS协议来加密数据传输，对用户输入进行验证和过滤2。
可维护性和可扩展性：代码应该易于维护和扩展，遵循模块化开发，使用清晰的代码结构和良好的注释。
调试和错误处理：使用浏览器的开发者工具进行调试，设置适当的错误处理机制来捕获和处理异常1。
跨域问题：处理跨域请求，使用JSONP、CORS或代理服务器等方式来实现跨域数据访问1。
SEO（搜索引擎优化）：虽然前端开发人员不直接参与SEO，但了解基本的SEO原则（如使用语义化的HTML标签、优化页面标题和元描述等）仍然重要。



#### 官网，商场，和后台区别？

（从用户角度有什么相同之处，不同之处）

官网和商城是 toC 项目，面向大众；用户体验会更好，隐私性、安全性都有保障。

后台项目是toB 项目，面向企业用户；用户体验相对来说要差一点，一般功能性更强。



商城，更侧重用户体验，功能也比较多，安全性问题；


做电商类页面
如果是是用vue的话，那可能必须要用到 next，服务端渲染，不然SEO不够友好。

去github上找现成的商用平台。(找现成的商用平台，盈利后再自己做)
wordpress+woocommerce，
WordPress.org下载压缩包，服务器用PHP/MySQL，不是WordPress.com。

 shopify 或者 woocommerce 好。

#### 使用的vue 3点几的版本?

现在公司的vue3 版本基本以 vue3.2 、vue3.3为主。

2024.12.18

( 这个问题很有意思，vue3的几个版本  )
最近新出到了，vue3.5的版本，目前使用的3.4版本。

平常用的就是3.2，3.3这样的。

**3.4版本更新：**

1、彻底重构 parser，加快一倍

2、SFC 编译 source map 优化，提速可达 50%

3、响应式系统重构，更精确的 computed 计算触发

4、defineModel 成为稳定功能

5、v-bind 语法糖

**parser 重构、SFC 编译 source map 优化：** 这都是实打实地提升了编译速度啊！编译速度直接影响了开发体验

**响应式系统重构：** 我还记得以前`watchEffect`这个 API 无论依赖改变前后相不相同，都会触发`watchEffect`回调重新执行（性能问题），而响应式系统重构是彻底解决了这个性能问题！

**defineModel：** 以前封装组件时涉及到父子数据双向绑定时，都很麻烦，而有了`defineModel` 之后，瞬间简单

https://cn.vuejs.org/api/sfc-script-setup.html#definemodel

```
// 子组件：
const count = defineModel("count", { type: Number, default: 0 })
function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}

// 父组件
<Child v-model:count="refcount"></Child>
const refcount = ref()
```

```
// 修饰符
const [modelValue, modelModifiers] = defineModel({
  // get() 省略了，因为这里不需要它
  set(value) {
    // 如果使用了 .trim 修饰符，则返回裁剪过后的值
    if (modelModifiers.trim) {
      return value.trim()
    }
    // 否则，原样返回
    return value
  }
})
```

**3.5版本**

  `**Vue3.5**` 支持 Props 响应式解构；https://blog.vuejs.org/posts/vue-3-5

```
import { watchEffect } from 'vue
const { count } = defineProps(['count'])
watchEffect(()=>{
// 每当父组件中的 count 属性发生变化时，这里就会记录console.log(count)
})
```

useTemplateRef 提供了一种新的方式来获取模板引用。

userId 用于生成在服务端和客户端渲染间保持稳定的唯一 ID，适用于表单元素和可访问性属性。

#### setup语法糖，父组件拿子组件里的属性和方法

defineExpose()子组件内暴露，父组件ref获取



#### 如何定义一个命令式的弹框？

1. 创建弹窗组件，用transition做动画处理，transport传送到body，同时暴露两个方法，showModel() hideModel()
2. 编写弹窗组件打开关闭逻辑；用createApp()的app.mount()与app.unmount() 实现组件的挂载与卸载；
3. 把弹窗注册成全局插件，app.config.globalProperties.$showModal = showModal;
4. 页面$()调用



### 长沙pc

vue2 与vue3 区别



vue2原理





双向绑定原理



#### 数据可视化大屏，鼠标滚轮放大，缩小，页面如何适配?

https://blog.csdn.net/Sophie_U/article/details/109582687

normalize-wheel 与 resize-observer-polyfill 

使用相对单位 +  媒体查询 + 为关键元素设置组大最小宽高 + 监听鼠标滚轮缩放大小，限制放大缩小

太大太小不展示某些元素，或者展示一些提示页面。

1. **使用相对单位**:
   - 使用百分比 (`%`)、`em`、`rem` 等相对单位来定义宽度和字体大小，而不是固定的像素值 (`px`)。
2. **媒体查询**:
   - 使用媒体查询来处理不同屏幕尺寸和缩放级别的样式变化。
   - 例如，可以在特定的缩放范围内应用不同的样式规则。
3. **弹性布局**:
   - 使用 Flexbox 和 Grid 布局来创建灵活且适应性强的布局。
   - 确保内容能够根据视口大小自动调整。
4. **最小和最大宽度/高度**:
   - 为关键元素设置最小和最大宽度/高度，以防止过度缩放导致的内容混乱。
5. **动态内容调整**:
   - 在 JavaScript 中监听缩放事件，动态调整内容的位置和大小。
   - 例如，在缩放到极小或极大时，隐藏不必要的元素或显示提示信息。

 getBoundingClientRect() 元素的大小及其相对于[视口](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)的位置。

缩放逻辑:
使用 CSS 的 transform 属性来实现缩放。
监听鼠标滚轮事件来调整缩放级别。
适配不同屏幕尺寸:
使用 Flexbox 和 Grid 布局。
使用媒体查询来适应不同的屏幕分辨率。
确保内容在缩放时保持清晰和可读性。
平滑过渡:
使用 CSS 过渡来实现平滑的缩放效果。
处理缩放中心点，确保用户滚动时不会感到突兀。
边界条件:
设置最小和最大缩放级别，防止过度缩放。
确保内容不会超出视口范围。



## 从头设计组件库怎么考虑？




## 笔试摘要

1. 手写简化promise
2. 双向链表