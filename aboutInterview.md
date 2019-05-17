## 知识点的掌握

### 关于 HTML+CSS

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
