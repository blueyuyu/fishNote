## 线下笔试题收录

1.笔试链接： https://blog.csdn.net/sinat_51673411/article/details/133487132

第十题： no ； s第十一题： 有意思，注意一下；变量提升：15 很恶心

2.笔试题： https://blog.csdn.net/MarkJunHao/article/details/81272379

常看常错；简直太酷啦！





前端优化；前端css代码题；前端js代码题；event loop判断；


### 一点点不懂题

1. 求输出啥？

```
["1","2","3"].map(parseInt)   
```

```
parseInt(‘1’, 0, [‘1’,‘2’,‘3’]): radix为0时，采用radix的默认值10，即返回一个10进制的结果， ‘1’会先转为1，最后返回1
parseInt(‘2’, 1, [‘1’,‘2’,‘3’]): 因为radix取值为2~36，这里是1，所以返回NaN
parseInt(‘3’, 2, [‘1’,‘2’,‘3’]): radix取值为2，二进制只包括0，1，返回NaN
```



### **网页验证码**？在web端如何实现网页验证码？



### 实现一个页面操作不会整页刷新的网站，

### 并且能在浏览器的前进，后退时正确响应。给出你的技术实现方案？

hash值改变

```
<a href="#/home">首页</a>
<a href="#/about">关于</a>
<div id="app">内容: default</div>

<script>
  const app = document.getElementById('app');

  const handleHashChange = () => {
    switch (location.hash) {
      case '#/home':
        app.textContent = '内容: HOME';
        break;
      case '#/about':
        app.textContent = '内容: ABOUT';
        break;
      default:
        app.textContent = '内容: default';
    }
  };

  window.addEventListener('hashchange', handleHashChange);
</script>
```

History API

```
<a href="#/home">首页</a>
<a href="#/about">关于</a>
<a href="#/more">更多</a>
<div id="app">内容: default</div>

<script>
  const app = document.getElementById('app');
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      history.pushState({}, '', href);
      updateContent();
    });
  });

  window.addEventListener('popstate', updateContent);

  function updateContent() {
    switch (location.pathname) {
      case '/home':
        app.textContent = '内容: HOME';
        break;
      case '/about':
        app.textContent = '内容: ABOUT';
        break;
      case '/more':
        app.textContent = '内容: MORE';
        break;
      default:
        app.textContent = '内容: default';
    }
  }
</script>
```



写一个function() 清除字符串两端空格？