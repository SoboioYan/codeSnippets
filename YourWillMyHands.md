### VUE 项目创建

    npm i webpack -g //安装 webpack

    npm i webpack-cli -g //安装脚手架

    npm install @vue-cli -g //脚手架命令@vue 自动保存刷新

    如果前面都已经全局安装完毕,那么新建项目可以从以下两部开始.就可以新建项目(开始项目)

    1.vue init webpack-simple my-project //1.x,2.x 的做法

    2.Vue create //现在的创作新项目办法

    如果是从 github 上面 clone 下来的项目,先 git clone 到自己的 pc 上,然后:

    1.npm install //下载 package.json 里面的依赖

    2.npm run serve //跑起来,热更新

    如果项目需要其他的组件,可以根据需要下载,

    eg: --save 是保存为依赖.

    npm install vue-router --save

    npm install iview --save

    npm install moment --save

    npm install jquery --save

    npm install element --save

    ...

### about VUE

1. vue 中的 axios 的 get 请求,eg:this.axios.get(`/url?userName=${this.userName}`),this.userName 要先在 data 里面定义好.
2. 注意@change 事件,用在 input 的点击,select 的点击事件等等!!!!!!!而不是所有的点击事件都是 click.
3. vue 中,select 取值用 v-model="xx"绑定.
4. router 中的 params 传值:(此方法多用于发送请求的时候在 url 后面拼接参数)
   - main.js 里面拼接/:ids.
   - 传值方 router-link :to="'/url/'+ids".
   - 取值方 this.\$route.params 来获取传过来的值.
5. 一定要打印请求之后回来的参数!!!说不定在下个页面你想要的数据,请求回来的数据就带有给你返回了~~~~
6. vue 中,绑定 v-on:click="getData($event)"之后,在下面的methods方法里面,可以:
    getData($event){
   console.log($event.target);//即可得到当前点击的元素,后面加.innerText可以获取当前元素的文本内容
        console.log($event.currentTarget);//即可得到当前触发点击时间的元素,后面加.innerText 可以...
   }
7. li 或者 tr 用 v-for 之后,动态绑定一个:id="item.id",在该行的点击事件@click="xxx(item.id)",传入 item.id 参数.然后下面的 methods 方法写该方法的时候,可以直接接收:xxx(id).
8. 前端打包部署:可以 npm run build 之后,上传到 git,然后后台配置好.
   平安神兵系统:编译前脚本的位置:npm install
   npm run build
   ls 可以查询当前目录下的所有文件
   rm -rf ./文件名(尽量不要用,相当于删库跑路)
9. 最好打开 eslint 语法规范,养成良好习惯.想要忽略一些不需要 eslint 语法规范的文件,可以在.eslintignore 文件里面进行忽略.
10. git 的一些操作命令:
    1. git checkout dev (切换到 dev 的分支);
    2. git checkout master (切换到 master 的主干);
    3. git merge origin/dev (把 dev 分支合并到主干);
    4. git checkout -- . (放弃修改);
    5. git status (查看状态);
    6. git pull (拉取);
    7. git push (推送);
11. 每次 npm run build 之后,可以 cmd 进入到 dist 目录下,使用 http-server 来试跑.前提是全局安装了 http-server 包.
12. 模板字符串中,`icore-supercoder/gateway/menuCenter/${id}`,\${id}为变量.
13. v-on:input 事件可以实时监听触发的 input 输入.
14. mask => 创建全局的 loading 组件.
15. fetch.js => 创建 axios 请求实例,request 请求拦截器(发请求之后的 loading),response 响应之后(数据回来后干掉 loading).
16. api.js => 创建请求方法,然后导出,在用到的地方引入该 api,直接 api.function().then((response) => {}).catch((err) => {//错误处理});
17. 在各 api.js 中,params 与 data 的区别:
    - params 是添加到 url 的请求字符串中的,用于 get 请求方式;
    - data 是添加到请求主体(body)中的,用于 post 请求方式.
18. vue 的目录文件区分组件,首页,功能,utils 工具类,api 等等.
19. build 打包之后项目的 js 文件过大(首次打开加载速度缓慢)问题的解决办法:
    1. router 文件夹的 index.js 里面配置路由懒加载;
    2. SourceMap 设为 false;
    3. cdn 外部引入一些文件,例如 vue,axios,ivew,element-ui,ant-design-vue 等等,但需要有网络;
    4. npm install --save-dev compression-webpack-plugin 进行压缩,在 config/index.js 设置:productionGzip: false,把 false 改为 true.
    5. 使用的框架进行组件按需加载.
    6. 可以安装 webpack-bundle-analyzer 打包优化工具,查看打包后的文件情况.
20. if () {} 判断逻辑里面,如果是判断是否是 undefined 或者是 null,写成 if (value === undefined) {}, 千万不要使用引号,引号表示字符串.
21. 把前端 vue 项目打包之后 copy 到 nginx 地址的步骤:

    1. 首先要知道 nginx 地址的登录账号和密码;
    2. 在 nginx 创建好要存的文件夹(需要发布的路径);
    3. vue 项目进行 npm run build 进行打包;
    4. 进入打包之后,git bash 进入 main 文件目录,使用如下命令:
       scp -r dist/\* root@30.23.17.7:/wls/.../.../
       意为:scp -r dist 目录下面所有文件到 root@30.23,17.7(nginx 地址,拥有者为 root)下已经创建好的:/wls/.../.../目录;
    5. 发完之后 nginx 重生效命令:
    6. 修改拥有者权限(因为是以 root 的身份去 scp 过来的,而使用者的是 deployed 的身份).
       - chown -R deployop \_ chown='change owner' 改变拥有者 若是整个目录下都改,则加 -R 参数用于递归;
       - chmod -R deploy \_ chmod='change group' 改变拥有组 -R 同上.
       - chmod 777 filepath 改变权限
    7. nginx 常用命令:

    - 查看目录: ll 或者 ls;
    - 创建文件夹: mkdir <name>;
    - 修改文件名: mv <old name> <new name>;
    - 删除某个文件: rm -r <name>;
    - 删除全部文件: rm -r -f \* (慎用,删库跑路);

22. 遇到重复的代码逻辑,应该考虑遍历.
    数组 v-for="item in Array",如果用到下标,可以 v-for="(item, index) in Array";
    对象 v-for="(val, key) in Object", key 是对象的 key, val 是对象的 value;
    不管是数组还是对象遍历,都需要 :key='xx'.
23. ant-design-vue 的 :labelInValue="true", select 组件的 select-option 绑定 :sysname="xxx",可以取到自定义的 sysname 的值.
24. 一个组件多次调用,只是数据不一样 1.先在父组件引入该子组件 2.引入的地方:

    ```ts
    <son
    :data="allData[item]" // 传参,[item]是根据不同的 dataTypes 传的参数.
    v-for="item in dataTypes" // 遍历 dataTypes,dataTypes 是不同的名称,区分数据不同.
    :key="item"
    :index-key="item" // dataTypes 也传.
    />
    ```

25. Vue 中,实现渲染换行

    ```ts
    使用 v-html="$options.filters.function(data)",进行绑定
        然后在filters里面
        filters: {
            function(val) {
                if(!val) {
                    //无val的处理
                }
                return val.replace(/,/g, '<br />');   // 遇到,换行
            },
        }
    ```

26. vue 同级之间通信,其实有一个更简单的方法:
    1. 在根组件的实例创建之前,在 Vue 的 prototype 上绑一个总线,然后这个根组件包括它本身都可以直接 this.bus.\$emit()广播消息;
    2. 全局办法:
       - 在 main.js 文件里:Vue.prototype.bus=new Vue();
       - 在需要广播的组件里面:this.bus.\$emit('传的 key', '传的 val');
       - 在需要接收的组件的 mounted 生命周期里面:
       ```js
       this.bus.\$on('传的 key', ('传的 val') => {console.log(val)}).
       ```
27. 使用数组的 reduce()方法来加载异步数据。
    methods 方法里面:
    // 1.定义 async 方法

    ```js
    async getInstance() {
      const list = this.empitArr.reduce((acc) => { // empitArr 数组不能为空，随便定义一个值.
        const prames ={
          key1: val1,
          key2: val2,
          key3: val3,
        };
        return [
          ...acc,
          Api.getInfo(prames);
          Api.getInfo1(prames);
          Api.getInfo2(prames);
        ];
      }， []);

      // 2.数据回来之后
      const resList = await Promise.all(list);
      // 3.根据自己定义的方法进行对数据返回的处理
      if (utils.isSuccess(res[0].code)) {
          // 成功处理
      } else {
      // 错误处理
      }
    }
    ```

28. 当项目所使用的框架（如 ant-design,mui 等）样式无法满足所需时，需要修改框架的默认值。几种做法：

    1. 登录 github 获取该框架的源类名，然后在 vue 的 build 文件里面，utils.js 里面的 moxxxvar 对象里面再次定义默认值。注意，该方法属于全局引入，会全部覆盖。
    2. 在组件的 template 里，给最外层的 div 加上类名（例如：class="bigDiv"），然后找到对应的框架组件类名，在刚才定义的类名下进行样式修改。如果使用的是 vue-loader，那么此方法需要这种方式定义选择器（.bigDiv /deep/ .ant-input {color: #ccc;}).
    3. 有一些组件是在整个文档的 body 之外的，需要在组件的 api 中找到定义组件的 class 方式，给组件定义一个 class，然后在#app 的最外层修改样式。

       例如 ant-design-vue 的下拉框，弹窗的下拉部分。在 api 中找到：drawdownClassName，定义一个类名，再修改样式。

29. vue 中，使用 v-for 遍历出来的数据，点击某一个就高亮那一个，其他无变化的方法：

    ```html
    <li
      v-for="(item, index) in arr"
      :key="item.key"
      @click="clickHeightLight(index)"
      v-bind:class="{ red: i === index }"
    >
      {{item}}
    </li>
    ```

    在 data 里定义 i:null，在 style 里定义类名 red 的样式，在 methods 方法里定义 clickHeightLight 方法，让 i=传入的 index。

30.

### knowledge point

1.JSON.parse() // 从一个字符串中解析出 json 对象.

    eg: var data = '{"name": "xiaobai"}' // 定义一个字符串.
    JSON.parse(data);    // 结果是name: "xiaobai";
    JSON.stringify() // 从一个对象中解析出字符串.
    eg: var data = {name: "xiaobai"} // 定义一个对象.
    JSON.stringify(data);    // 结果是'{name: "xiaobai"}';

2.数组的方法:

    1.Array.find() //方法返回的是符合括号里面的逻辑的值
      eg:
        arr.find((v) => {
            v.id === this.portalId
        })
        返回的是v.id跟this.portalId相等的值,需要接收.
    2....
    3.

### 方法

    1.
