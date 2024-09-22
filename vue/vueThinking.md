### 关于组件封装下，对接收的props数据的一些思考？

props是响应式的，

1. 他是不支持一些map之类的处理方法的响应的；
  参看：https://worktile.com/kb/ask/782455.html




### 转化成非响应式？toRaw 与 markRaw?

toRaw:  就是把一个响应式对象转化为普通对象，返回出去，**不改变原来对象**



markRaw:  就是把某个数据，标记为普通对象，当我们把它放到响应式对象中，也依然是非响应式的。

markRaw 使用场景：

- 有些值不应被设置为响应式的，例如复杂的第三方库。比如一个响应式对象中，要放入axios，或者别的随机数字的第三方库
- 如果不让他变成非响应式的，那么Vue就会去找到每一个层级，让其都能响应式处理


- 这样的情况下，性能就会受到严重影响，

- 所以我们需要让其变成永远都不会成功响应式的数据，提高性能

  ​

- 当渲染具有不可变数据源的大列表时，跳过响应式可以提高性能

  **举例： 使用动态组件与markRaw切换组件的案例**

```
 <template>
  <div style="display: flex">
    <div v-for="(item, index) in data" :key="index"
         @click="switchCom(item, index)"
         :class="[active === index ? 'active' : '']"
         class="tabs"
    >
      <div>{{item.name}}</div>
    </div>
    <component :is="comId"></component>
  </div>
</template>
 
 
<script setup>
import {ref, reactive, shallowRef, markRaw} from "vue";
 
import ACom from './components/A.vue'
import BCom from './components/B.vue'
import CCom from './components/C.vue'
 
const comId = shallowRef(ACom)
const active = ref(0)
 
const switchCom = (item, index) => {
  comId.value = item.com
  active.value = index
}
 
// markRaw：作用：标记一个对象，使其永远不会再成为响应式对象。
const data = reactive([
  {
    name: 'A',
    com: markRaw(ACom)
  },
  {
    name: 'B',
    com: markRaw(BCom)
  },
  {
    name: 'C',
    com: markRaw(CCom)
  }
])
</script>
 
 
<style lang="scss">
.active {
  background: blueviolet;
}
 
.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
 
```



### vue3.5+  watch 的三种方法？



**onWatcherCleanup()**  简化清理逻辑

```
import { watch, onWatchCleanUp } from 'vue'

watch(id,(newId)=>{
    const { response ,cancel } = doAsyncWork(newId);
    // id 变化，调用cancel
    // 之前请求没有完成，就取消请求
    onWatchCleanUp(cancel);
})
```



watch 返回值，有了更加精细的控制

```
const {pause ,resume, stop } = watch(source, (newVal , oldVal)=>{
  // 监视逻辑  
})

// 暂停监视
pause();

// 恢复监视
resume();
```



watch 可以指定层级， deep:2 ,3