# 基础知识点的掌握

## 关于 HTML+CSS

> 经典问题:
> CSS 实现垂直水平居中

```html
<div class="wrapper">
  <div class="content"></div>
</div>
```

```css
.wrapper {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
.content {
  position: absolute;
  width: 200px;
  height: 200px;
  /*top、bottom、left和right 均设置为0*/
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /*margin设置为auto*/
  margin: auto;
  border: 1px solid green;
}
/* 或者 */
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
```

## AJAX

### 定义和用法:

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

```js
function CreateXmlHttp() {
  //创建XmlHttpRequest对象
  if (window.XmlHttpRequest) {
    xmlhttp = new XmlHttpRequest()
  }
}

function Ustbwuyi() {
  var data = document.getElementById('username').value
  CreateXmlHttp()
  if (!xmlhttp) {
    alert('创建xmlhttp对象异常！')
    return false
  }

  xmlhttp.open('POST', url, false)

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      document.getElementById('user1').innerHTML = '数据正在加载...'
      if (xmlhttp.status == 200) {
        document.write(xmlhttp.responseText)
      }
    }
  }
  xmlhttp.send()
}
```

### AJAX 的工作原理：

1. 创建 ajax 对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）

2. 判断数据传输方式(GET/POST)

3. 打开链接 open()

4. 发送 send()

5. 当 ajax 对象完成第四步（onreadystatechange）数据接收完成，判断 http 响应状态（status）200-300 之间或者 304（缓存）执行回调函数

### 同步 or 异步

- 所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

### JS 中的异步操作有哪些

1. 定时器都是异步操作
2. 事件绑定都是异步操作
3. ajax 中我们一般都是采用异步操作
4. 回调函数可以理解为异步

## web 前端开发，如何提高页面性能优化？

### 内容方面：

1. 减少 HTTP 请求 (Make Fewer HTTP Requests)

2. 减少 DOM 元素数量 (Reduce the Number of DOM Elements)

3. 使得 Ajax 可缓存 (Make Ajax Cacheable)

### 针对 CSS：

1.把 CSS 放到代码页上端 (Put Stylesheets at the Top)

2.从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)

3.精简 JavaScript 与 CSS (Minify JavaScript and CSS)

4.避免 CSS 表达式 (Avoid CSS Expressions)

### 针对 JavaScript：

1. 脚本放到 HTML 代码页底部 (Put Scripts at the Bottom)

2. 从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)

3. 精简 JavaScript 与 CSS (Minify JavaScript and CSS)

4. 移除重复脚本 (Remove Duplicate Scripts)

### 面向图片(Image)：

1. 优化图片

2. 不要在 HTML 中使用缩放图片

3. 使用恰当的图片格式

4. 使用 CSS Sprites 技巧对图片优化

## 关于 ES6、ES7、ES8

### ES6 的新特性你了解哪些?

1. 新增声明命令 let 和 const

- 关于 let：

  - let 声明的变量只在它所在的代码块有效；
  - let 不允许在相同作用域内，重复声明同一个变量。

- 关于 const:
  - const 声明一个只读的常量。一旦声明，常量的值就不能改变。

2. 模板字符串

- 模块化
  - 模块化的功能主要由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过 import 来引用其它模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突。

3. 函数的默认参数、箭头函数

4. import 和 export

5. Promise 对象：异步编程的一种解决方案，一般是用来解决回调狱函数

- 所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

- Promise 对象有以下两个特点:

  - 对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
  - 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

- 基本用法：

```js
const promise = new Promise(function(resolve, reject) {
 // ... some code

 if (/* 异步操作成功 */){
   resolve(value);
 } else {
   reject(error);
 }
});
```

- Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

- resolve 函数的作用是，将 Promise 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject 函数的作用是，将 Promise 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

- Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。

- 数组的扩展运算符

  - 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

### 关于 ES7 你了解多少

- Array.prototype.includes()方法
  ```
    ['a', 'b', 'c'].includes('a')     // true
    ['a', 'b', 'c'].includes('d')     // false
  ```
- 求幂运算符（\*\*）

  ```js
  3 ** 2 // 9
  ```

### 关于 ES8 你了解多少

- 异步函数(Async/await)

  - 函数前面的 async 一词意味着一个简单的事情：这个函数总是返回一个 promise，如果代码中有 return <非 promise>语句，JavaScript 会自动把返回的这个 value 值包装成 promise 的 resolved 值。
  - await 只能在 async 函数内部使用，可以让 JavaScript 进行等待，直到一个 promise 执行并返回它的结果，JavaScript 才会继续往下执行

  ```js
  async function showAvatar() {
    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json')
    let user = await response.json()

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
    let githubUser = await githubResponse.json()

    // 展示头像
    let img = document.createElement('img')
    img.src = githubUser.avatar_url
    img.className = 'promise-avatar-example'
    documenmt.body.append(img)

    // 等待3s
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000)
    })

    img.remove()

    return githubUser
  }
  showAvatar()
  ```

- Object.entries()和 Object.values()

  - Object.entries()

    > 如果一个对象是具有键值对的数据结构，则每一个键值对都将会编译成一个具有两个元素的数组，这些数组最终会放到一个数组中，返回一个二维数组,若目标对象是数组时，则会将数组的下标作为键值返回

    ```js
    Object.entries({ one: 1, two: 2 }) //[['one', 1], ['two', 2]]
    Object.entries([1, 2]) //[['0', 1], ['1', 2]]
    ```

  - Object.values()
    > 它的工作原理跟 Object.entries()很像，顾名思义，它只返回自己的键值对中属性的值。它返回的数组顺序，也跟 Object.entries()保持一致。
    ```js
    Object.values({ one: 1, two: 2 }) //[1, 2]
    Object.values({ 3: 'a', 4: 'b', 1: 'c' }) //['c', 'a', 'b']
    ```

### 函数的闭包以及递归

- 闭包

  闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

  ```js
  function A() {
    let a = 1
    function B() {
      console.log(a)
    }
    return B
  }
  ```

- 递归

  如果一个函数在内部调用自身本身，这个函数就是递归函数。

  ```js
  function fact(n){
  if (n === 1){
    return 1
  }else{
    return n * fact(n - 1)
  }
  ```

  `剩余待补充...`

# 插件的掌握

## jQuery

> [jQuery API](http://jquery.cuishifeng.cn/)

### （简单的）jQuery 源码分析

```js
;(function(window, undefined) {})()
// 一个匿名函数自执行，它的好处在于，可以把代码块中所有的变量都变成局部变量，这样就不会造成对全局变量的一个污染，导致代码冲突

jQuery.fn = jQuery.prototype = {}
// 表明jQuery是一个基于面向对象的程序，往后就是在给jQuery对象添加一些属性和方法。

jQuery.Callbacks = function(options) {}
// 回调对象:通过回调对象统一管理函数

jQuery.extend({ Deferred: function(func) {} })
// Deferred:延迟对象,对异步的统一管理

jQuery.support = function(support) {}
// support:功能检测,无需判断浏览器,通过判断功能检测浏览器版本

jQuery.fn.extend({ queue: function(type, data) {} })
// queue:队列管理,入队 dequeue:出队

$('#div1').animate({ left: 100 })
$('#div1').animate({ top: 100 })
$('#div1').animate({ width: 100 }) //left->top->width 通过队列管理执行顺序
//  这个就是通过queue队列管理实现的顺序进行动画。

jQuery.fn.extend({ attr: function(name, value) {} })
// 其中定义了attr(), prop(),val(),addClass()...方法,对元素属性的操作
```

## BootStrap

> [BootStrap](http://www.bootcss.com)

> 待补充

## Zepto

> [Zepto](https://www.html.cn/doc/zeptojs_api/)

### Zepto 与 jQuery 的区别

- 相同点：

  > Zepto 是 jQuery 的轻量级替代品，它的 API 与 jquery 基本一致，它的体积非常小，jQuery 中常用的 API 和方法，Zepto 基本都有，所以适用于移动端开发。相比于 jQuery Mobile，Zepto 更合适。

- 不同点：

  1. Zepto 不支持 IE 浏览器
  2. DOM 操作的区别
     - 添加 id 时，jQuery 不会生效，Zepto 会生效
  3. 事件触发的区别
     - 使用 jQuery 时 load 事件的处理函数不会执行；使用 Zepto 时 load 事件的处理函数会执行
  4. 事件委托的区别
     - 在 Zepto 中，当 a 被点击后，依次弹出了内容为"a 事件"和"b 事件"，说明虽然事件委托在.a 上可是却也触发了.b 上的委托。但是在 jQuery 中只会触发.a 上面的委托弹出”a 事件“。Zepto 中，document 上所有的 click 委托事件都依次放入到一个队列中，点击的时候先看当前元素是不是.a，符合则执行，然后查看是不是.b，符合则执行。而在 jQuery 中，document 上委托了 2 个 click 事件，点击后通过选择符进行匹配，执行相应元素的委托事件。
  5. click 和 tap 比较

     - 两者都会在点击时触发，但是在手机 WEB 端，click 会有 200~300 ms，所以请用 tap 代替 click 作为点击事件。

## MUI

> [MUI](http://dev.dcloud.net.cn/mui/)

## swiper

> [Swiper](https://www.swiper.com.cn/) 是纯 javascript 打造的滑动特效插件，面向手机、平板电脑等移动终端。

### vue 使用 Swiper

```js
// CDN
<link rel="stylesheet" href="path/to/swiper/dist/css/swiper.css"/>
<script type="text/javascript" src="path/to/swiper.js"></script>
<script type="text/javascript" src="path/to/dist/vue-awesome-swiper.js"></script>
  Vue.use(window.VueAwesomeSwiper)

//项目内全局安装

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 组件内安装
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
```

## Sass/Less

[Sass](https://www.sass.hk/) 是一门 CSS 预处理语言,基于 Ruby 语言开发而成

[Less](http://lesscss.cn/) 是一门 CSS 预处理语言

    sass 和 less 都是 css 的预编译处理语言，他们引入了 mixins，参数，嵌套规则，运算，颜色，名字空间，作用域，JavaScript 赋值等 加快了 css 开发效率,当然这两者都可以配合 gulp 和 grunt 等前端构建工具使用

- 变量

  ```css
  @width：100px;
  .box {
    width: @width;
  }
  ```

- 嵌套规则

  ```css
  父级{

      子集
  }
  ```

- 插入文件(sass)

      @import命令插入外部文件 .scss和css都可

- 条件语句(sass)

      //@if 可以用来判断 @else 则是配套

      .box{
          @if 1+1>1 {width:100px;}@else {
              width:200px;
          }
      }

- 循环语句(Sass)

      //@for @while @each
      @for $i from 1 to 10{
          border-#{$i}{
      border:#{\$i}px solid red;
      }
      }

      //@while
      $i:6;
      @while $i>0{
      .item-#{$i}{
              width:2em*$i;
      }
      $i:$i-2;
      }

      //@each
      @each $member in a, b, c, d {
      　　　　.#{$member} {
      　　　　　　 background-image: url("/image/#{\$member}.jpg");
      　　　　}
      　　}

### Sass/less 的区别

- sass 和 less 都是 css 的预编译处理语言，他们引入了 mixins，参数，嵌套规则，运算，颜色，名字空间，作用域，JavaScript 赋值等 加快了 css 开发效率,当然这两者都可以配合 gulp 和 grunt 等前端构建工具使用

## VUE(2.x)

> [VUE](https://cn.vuejs.org/)

### 什么是深入响应式原理？

- 深入响应式原理是利用了数据劫持和订阅发布的模式, 当数据模型发生改变的时候，
- 视图就会响应的进行更新， 那么深入响应式原理是利用 es5 的 Object.defineProperty 中 getter/setter 来进行数据的劫持的

- Vue 通过 watcher 将 data 中的属性全部使用 Object.definePropery 变成 getter 和 setter,当属性值发生
  改变的时候， 就会触发， 然后 wather 就会触发， 告诉视图（V）进行重新渲染

- 名称解释：

  数据劫持： Object.defineProperty 中的 getter/setter ， 然后在执行 watcher

  订阅发布：事件（自定义事件）

  订阅： 事件的声明 vm.$on    
      发布： 事件的触发  vm.$emit

### 双向绑定的理解

1. 效果

   数据改，视图更

   视图改，数据更

2. 实现

   使用 v-model 实现

3. 缺点

   v-model 默认绑定 value 属性， 所以 v-model 只能在表单使用

4. 原理

   1. 为什么数据能直接在视图显示

      v-model 默认绑定了 DOM 对象的 value 属性， 当它初次绑定的时候，
      就会触发 getter,watcher 就会触发， watcher 通知 Vue 生成新的 VDOM 树，
      再通过 render 函数进行渲染,生成真实 DOM

   2. 为什么视图修改数据就会修改

      当视图修改是， 意味着 DOM 的 value 属性值改变，就会触发 setter,watcher 监听机制就会执行
      watcher 通知 Vue 生成新的 VDOM 树，再通过 render 函数进行渲染,生成真实 DOM

### watch 监听

      用来监听数据的变换， 当数据模型 （data 选项 M）发生改变时， watch 就会触发

      watch中的key指的就是data选项中key
      对比 watch computed methods
      methods : 用于时间
      watch : 1.异步操作 2. 开销较大
      computed : 1. 有逻辑 2. 要像变量一样使用

### mixins

组件即实例， 实例即组件

1. 概念：

   mixins 混合, 将根实例或是组件中的配置项抽离出来，单独管理

2. 类型

   A：局部混入

   注意：

   1. 即使分离出去， 我们的配置项中也可以继续写分离出去的配置
   2. 如果说分离出去中的内容有冲突， 以组件中的配置项为准 3. 配置项中的方法执行时是最优先的

   B: 全局混入

   注意：全局混入慎用（不建议你使用）

   理由：全局混入会影响所有的组件（实例）

### 生命周期（钩子函数）

![生命周期表](./img/VUE生命周期表.png)

- **beforeCreate（创建前）**

  - 官方文档: 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

- **created（创建完）**

  - 官方文档: 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，\$el 属性目前不可见。

- **beforeMount（挂载前）**

  - 官方文档: 在挂载开始之前被调用：相关的 render 函数首次被调用。

- **mounted（挂载完）**

  - 官方文档: el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

- **beforeUpdate（更新前）**

  - 官方文档: 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

  - 注: 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

- **updated（更新完）**

  - 官方文档: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

    当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

  - 注: updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.\$nextTick 替换掉 updated

- **beforeDestroy（销毁前）**

  - 官方文档: 实例销毁之前调用。在这一步，实例仍然完全可用。

  - 注: 该钩子在服务器端渲染期间不被调用。

- **destroyed（销毁完）**

  - 官方文档: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

  - 注: 该钩子在服务器端渲染期间不被调用。

### Vue Router

使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。

> yyz(自我理解):最终目的是进行组件间的交换，以引用的地址达成交换

其余待补充...

## VUEX

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

- **State**

- **Getter**

- **Mutation**

- **Module**

## [webpack](https://webpack.docschina.org/concepts/)-中文文档
