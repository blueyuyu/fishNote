在项目根目录下安装[`better-mock`包](https://lavyun.github.io/better-mock/)

```
npm i better-mock
```

在`/src`目录中创建`mock/index.js`文件，并引入`better-mock`，这里要注意的是小程序中要引入`better-mock/dist/mock.mp.js`，否则会抛出错误

```
// #ifdef H5
import Mock from 'better-mock';
// #endif

// #ifdef MP-WEIXIN
const Mock = require('better-mock/dist/mock.mp.js');
// #endif

Mock.mock('url', function () {
    return {
        ok: true,
        data: {},
        msg: '',
    };
});
```

在`/src/main.js`文件中引入`mock/index.js`，这里需要注意，**我们只需要在开发模式下模拟数据，所以要加一个运行环境的判断语句**

```
if (process.env.NODE_ENV == 'development') {
    console.log(process.env);
    require('./mock');
}
```



## 要注意的地方

`Mock.mock()`方法中的 url 参数，必须是一个完整的`url`路径,比如`http://liyun.com/api/addUser`，所以可以考虑封装一个函数，把`baseUrl`当做一个变量处理



## 案例

```
// #ifdef H5
import Mock from 'better-mock';
// #endif

// #ifdef MP-WEIXIN
const Mock = require('better-mock/dist/mock.mp.js');
// #endif

import { baseURL } from '@/utils/http.js';

// mock 的一个get请求
Mock.mock(`${baseURL}mock/address`, function (option) {
  // console.log('[ option ] => ', option);
  const articles = [
    { id: 1, title: '文章标题一', author: '作者一' },
    { id: 2, title: '文章标题二', author: '作者二' },
    { id: 3, title: '文章标题三', author: '作者三' },
    { id: 4, title: '文章标题四', author: '作者四' },
    { id: 5, title: '文章标题五', author: '作者五' }
  ];
  return {
    ok: true,
    data: {
      articles,
      address: {
        name: 'huahua1',
        phone: '112',
        addressInfo: '广东'
      }
    },
    msg: '请求成功'
  };
});

const ret = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1,
      email: '@EMAIL'
    }
  ]
});

// mock的一个post请求
Mock.mock(`${baseURL}mock/test`, 'post', function (options) {
  console.log('[ options ] => ', options);
  try {
    return {
      ok: true,
      data: {
        options: options.body,
        ...ret
      },
      msg: '请求成功'
    };
  } catch (e) {
    //TODO handle the exception
    console.log('[ e ] => ', e);
  }
});
```

基础生成get

```
// mock的一个post请求, 校验类型的请求
const template = {
  name: 'admin',
  password: '123'
};
let obj2 = Mock.mock({
  'age|1-100': 0, //随机生成0-100整数
  'price|1-100.1-4': 0, //随机生成整数部分1-100，小数位数1-4位
  'num|.2-4': 0, //整数部分省略不写，默认是0(js的默认规则)
  'num2|100.3-3': 0 //整数部分保持100不变，小数位数恒定3位数，小数值随机生成
});
const address = Mock.Random.county(true);
const time = Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS');
Mock.mock(`${baseURL}mock/valid`, 'get', function () {
  try {
    return {
      ok: true,
      data: {
        name: Mock.Random.cname(),
        phone: Mock.Random.phone(),
        address,
        time,
        email: Mock.Random.email('qq.com'),
        text: Mock.Random.cword(30)
      },
      msg: '请求成功'
    };
  } catch (error) {
    //TODO handle the exception
    return {
      ok: false,
      msg: '请求失败',
      data: {
        error: '111'
      }
    };
  }
});
```

