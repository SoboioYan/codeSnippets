# vue-manage-system

基于 Vue.js 2.x 系列 + Element UI 的后台管理系统解决方案。

## 功能

-   [x] Element UI
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡
-   [x] 表单
-   [x] 图表 :bar_chart:
-   [x] 富文本编辑器
-   [x] markdown 编辑器
-   [x] 图片拖拽/裁剪上传
-   [x] 支持切换主题色 :sparkles:
-   [x] 列表拖拽排序
-   [x] 权限测试
-   [x] 404 / 403
-   [x] 三级菜单
-   [x] 自定义图标

## 目录结构介绍

    |-- build                            // webpack配置文件
    |-- config                           // 项目打包路径
    |-- src                              // 源码目录
    |   |-- components                   // 组件
    |       |-- common                   // 公共组件
    |           |-- bus.js           	 // Event Bus
    |           |-- Header.vue           // 公共头部
    |           |-- Home.vue           	 // 公共路由入口
    |           |-- Sidebar.vue          // 公共左边栏
    |           |-- Tags.vue           	 // 页面切换标签组件
    |       |-- page                   	 // 主要路由页面
    |           |-- 403.vue
    |           |-- 404.vue
    |           |-- BaseCharts.vue       // 基础图表
    |           |-- BaseForm.vue         // 基础表单
    |           |-- BaseTable.vue        // 基础表格
    |           |-- DashBoard.vue        // 系统首页
    |           |-- DragList.vue         // 拖拽列表组件
    |           |-- Icon.vue			 // 自定义图标组件
    |           |-- Login.vue          	 // 登录
    |           |-- Markdown.vue         // markdown组件
    |           |-- Premission.vue       // 权限测试组件
    |           |-- Upload.vue           // 图片上传
    |           |-- VueEditor.vue        // 富文本编辑器
    |   |-- App.vue                      // 页面入口文件
    |   |-- main.js                      // 程序入口文件，加载各种公共组件
    |-- .babelrc                         // ES6语法编译配置
    |-- .editorconfig                    // 代码编写规格
    |-- .gitignore                       // 忽略的文件
    |-- index.html                       // 入口html文件
    |-- package.json                     // 项目及工具的依赖配置文件
    |-- README.md                        // 说明

## 本地开发

    // 开启服务器，浏览器访问 http://localhost:8080
    npm run dev

## 构建生产

    // 执行构建命令，生成的dist文件夹放在服务器下即可访问
    npm run build

## 组件使用说明与演示

### vue-schart

vue.js 封装 sChart.js 的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)

<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart
            class="wrapper"
            :canvasId="canvasId"
            :type="type"
            :data="data"
            :options="options"
        ></schart>
    </div>
</template>

<script>
    import Schart from 'vue-schart' // 导入Schart组件
    export default {
        data: function() {
            return {
                canvasId: 'myCanvas', // canvas的id
                type: 'bar', // 图表类型
                data: [
                    { name: '2014', value: 1342 },
                    { name: '2015', value: 2123 },
                    { name: '2016', value: 1654 },
                    { name: '2017', value: 1795 }
                ],
                options: {
                    // 图表可选参数
                    title: 'Total sales of stores in recent years'
                }
            }
        },
        components: {
            Schart
        }
    }
</script>
<style>
    .wrapper {
        width: 7rem;
        height: 5rem;
    }
</style>
```

### element-ui

一套基于 vue.js2.0 的桌面组件库。访问地址：[element](http://element.eleme.io/#/zh-CN/component/layout)

### Vue-Quill-Editor

基于 Quill、适用于 Vue2 的富文本编辑器。访问地址：[vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)

（IE10 及以下不支持）

### mavonEditor

基于 Vue 的 markdown 编辑器。访问地址：[mavonEditor](https://github.com/hinesboy/mavonEditor)

### vue-cropperjs

一个封装了 cropperjs 的 Vue 组件，用于裁剪图片。访问地址：[vue-cropperjs](https://github.com/Agontuk/vue-cropperjs)

## 其他注意事项

### 一、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分四步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
{
    // 富文本编辑器组件
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve)
},
```

第二步：删除引入该组件的文件。在目录 src/components/page/ 删除 VueEditor.vue 文件。

第三步：删除该页面的入口。在目录 src/components/common/Sidebar.vue 中，找到该入口，删除下面这段代码。

```js
{
	index: 'editor',
	title: '富文本编辑器'
},
```

第四步：卸载该组件。执行以下命令：
npm un vue-quill-editor -S

完成。

### 二、如何切换主题色呢？

第一步：打开 src/main.js 文件，找到引入 element 样式的地方，换成浅绿色主题。

```javascript
import 'element-ui/lib/theme-default/index.css' // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
```

第二步：打开 src/App.vue 文件，找到 style 标签引入样式的地方，切换成浅绿色主题。

```javascript
@import "../static/css/main.css";
@import "../static/css/color-dark.css";     /*深色主题*/
/*@import "../static/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

第三步：打开 src/components/common/Sidebar.vue 文件，找到 el-menu 标签，把 background-color/text-color/active-text-color 属性去掉即可。

## 项目截图

### 默认皮肤

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms1.png)

### 浅绿色皮肤

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms2.png)
