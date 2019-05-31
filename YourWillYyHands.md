npm i webpack -g  //安装webpack
npm i webpack-cli -g    //安装脚手架
npm install  @vue-cli -g  //脚手架命令@vue  自动保存刷新

如果前面都已经全局安装完毕,那么新建项目可以从以下两部开始.就可以新建项目(开始项目)
1.vue init webpack-simple  my-project //1.x,2.x的做法
2.Vue create  //现在的创作新项目办法

如果是从github上面clone下来的项目,先git clone到自己的pc上,然后:
1.npm install   //下载package.json里面的依赖
2.npm run serve //跑起来,热更新

如果项目需要其他的组件,可以根据需要下载,
eg: --save是保存为依赖.
npm install vue-router --save
npm install iview --save
npm install moment --save
npm install jquery --save
npm install element --save
...

### about VUE
    1.vue中的axios的get请求,eg:this.axios.get(`/url?userName=${this.userName}`),this.userName要先在data里面定义好.
    2.注意@change事件,用在input的点击,select的点击事件等等!!!!!!!而不是所有的点击事件都是click.
    3.vue中,select取值用v-model="xx"绑定.
    4.router中的params传值:(此方法多用于发送请求的时候在url后面拼接参数)
        a.main.js里面拼接/:ids.
        b.传值方router-link :to="'/url/'+ids".
        c.取值方this.$route.params来获取传过来的值.
    5.一定要打印请求之后回来的参数!!!说不定在下个页面你想要的数据,请求回来的数据就带有给你返回了~~~~
    6.vue中,绑定v-on:click="getData($event)"之后,在下面的methods方法里面,可以:
    getData($event){
        console.log($event.target);//即可得到当前点击的元素,后面加.innerText可以获取当前元素的文本内容
        console.log($event.currentTarget);//即可得到当前触发点击时间的元素,后面加.innerText可以...
    }
    7.li或者tr用v-for之后,动态绑定一个:id="item.id",在该行的点击事件@click="xxx(item.id)",传入item.id参数.然后下面的methods方法写该方法的时候,可以直接接收:xxx(id).
    8.前端打包部署:可以npm run build之后,上传到git,然后后台配置好.
       平安神兵系统:编译前脚本的位置:npm install
                                   npm run build
                                   ls 可以查询当前目录下的所有文件
                                   rm -rf ./文件名(尽量不要用,相当于删库跑路)
    9.最好打开eslint语法规范,养成良好习惯.想要忽略一些不需要eslint语法规范的文件,可以在.eslintignore文件里面进行忽略.
    10.git的一些操作命令:
       1.git checkout dev (切换到dev的分支);
       2.git checkout master (切换到master的主干);
       3.git merge origin/dev (把dev分支合并到主干);
       4.git checkout -- . (放弃修改);
       5.git status (查看状态);
       6.git pull (拉取);
       7.git push (推送);
    11.每次npm run build之后,可以cmd进入到dist目录下,使用http-server来试跑.前提是全局安装了http-server包.
    12.模板字符串中,`icore-supercoder/gateway/menuCenter/${id} `,${id}为变量.
    13.v-on:input事件可以实时监听触发的input输入.
    14.mask => 创建全局的loading组件.
    15.fetch.js => 创建axios请求实例,request请求拦截器(发请求之后的loading),response响应之后(数据回来后干掉loading).
    16.api.js => 创建请求方法,然后导出,在用到的地方引入该api,直接api.function().then((response) => {}).catch((err) => {//错误处理});
    17.在各api.js中,params与data的区别:
       params是添加到url的请求字符串中的,用于get请求方式;
       data是添加到请求主体(body)中的,用于post请求方式.
    18.vue的目录文件区分组件,首页,功能,utils工具类,api等等.
    19.build打包之后项目的js文件过大(首次打开加载速度缓慢)问题的解决办法:
       1.router文件夹的index.js里面配置路由懒加载;
       2.SourceMap设为false;
       3.cdn外部引入一些文件,例如vue,axios,ivew,element-ui,ant-design-vue等等,但需要有网络;
       4.npm install --save-dev compression-webpack-plugin进行压缩,在config/index.js设置:productionGzip: false,把false改为true.
       5.使用的框架进行组件按需加载.
       6.可以安装webpack-bundle-analyzer打包优化工具,查看打包后的文件情况.
    20.if () {} 判断逻辑里面,如果是判断是否是undefined或者是null,写成 if (value === undefined) {}, 千万不要使用引号,引号表示字符串.
    21.把前端vue项目打包之后copy到nginx地址的步骤:
       1.首先要知道nginx地址的登录账号和密码;
       2.在nginx创建好要存的文件夹(需要发布的路径);
       3.vue项目进行npm run build进行打包;
       4.进入打包之后,git bash 进入main文件目录,使用如下命令:
         scp -r dist/* root@30.23.17.7:/wls/.../.../
         意为:scp -r dist目录下面所有文件到root@30.23,17.7(nginx地址,拥有者为root)下已经创建好的:/wls/.../.../目录;
       5.发完之后nginx重生效命令:
       6.修改拥有者权限(因为是以root的身份去scp过来的,而使用者的是deployed的身份).
         chown -R deployop * chown='change owner' 改变拥有者  若是整个目录下都改,则加 -R参数用于递归;
         chmod -R deploy *   chmod='change group' 改变拥有组  -R同上.
         chmod 777 filepath  改变权限
        7.nginx常用命令:
         查看目录: ll 或者 ls;
         创建文件夹: mkdir <name>;
         修改文件名: mv <old name> <new name>;
         删除某个文件: rm -r <name>;
         删除全部文件: rm -r -f * (慎用,删库跑路);
    22.遇到重复的代码逻辑,应该考虑遍历.
       数组v-for="item in Array",如果用到下标,可以v-for="(item, index) in Array";
       对象v-for="(val, key) in Object", key是对象的key, val是对象的value;
       不管是数组还是对象遍历,都需要 :key='xx'.
    23.ant-design-vue的 :labelInValue="true", select组件的select-option绑定 :sysname="xxx",可以取到自定义的sysname的值.
    24.一个组件多次调用,只是数据不一样
       1.先在父组件引入该子组件
       2.引入的地方:
         <son
           :data="allData[item]"       // 传参,[item]是根据不同的dataTypes传的参数.
           v-for="item in dataTypes"   // 遍历dataTypes,dataTypes是不同的名称,区分数据不同.
           :key="item"
           :index-key="item"           // dataTypes也传.
         />
    25.Vue中,实现渲染换行
        使用v-html="$options.filters.function(data)",进行绑定
        然后在filters里面
        filters: {
            function(val) {
                if(!val) {
                    //无val的处理
                }
                return val.replace(/,/g, '<br />');   // 遇到,换行
            },
        },
    26.vue同级之间通信,其实有一个更简单的方法:
        1.在根组件的实例创建之前,在Vue的prototype上绑一个总线,然后这个根组件包括它本身都可以直接this.bus.$emit()广播消息;
        2.全局办法: 
          a.在main.js文件里:Vue.prototype.bus=new Vue();
          b.在需要广播的组件里面:this.bus.$emit('传的key', '传的val');
          c.在需要接收的组件的mounted生命周期里面:this.bus.$on('传的key', ('传的val') => {console.log(val)}).
    27.使用数组的reduce()方法来加载异步数据。
        methods方法里面.
        // 1.定义async方法
        async getInstance() {
            const list = this.empitArr.reduce((acc) => {  // empitArr数组不能为空，随便定义一个值.
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
    28.当项目所使用的框架（如ant-design,mui等）样式无法满足所需时，需要修改框架的默认值。几种做法：
       1.登录github获取该框架的源类名，然后在vue的build文件里面，utils.js里面的moxxxvar对象里面再次定义默认值。注意，该方法属于全局引入，会全部覆盖。
       2.在组件的template里，给最外层的div加上类名（例如：class="bigDiv"），然后找到对应的框架组件类名，在刚才定义的类名下进行样式修改。如果使用的是vue-loader，那么此方法需要这种方式定义选择器（.bigDiv /deep/ .ant-input {color: #ccc;}).
       3.有一些组件是在整个文档的body之外的，需要在组件的api中找到定义组件的class方式，给组件定义一个class，然后在#app的最外层修改样式。
       例如ant-design-vue的下拉框，弹窗的下拉部分。在api中找到：drawdownClassName，定义一个类名，再修改样式。
    29.vue中，使用v-for遍历出来的数据，点击某一个就高亮那一个，其他无变化的方法：
        <li v-for="(item, index) in arr" :key="item.key" @click="clickHeightLight(index)" v-bind:class="{ red: i === index }">{{item}}</li>
        在data里定义i:null，在style里定义类名red的样式，在methods方法里定义clickHeightLight方法，让i=传入的index。
    30.

### knowledge point
    1.JSON.parse() // 从一个字符串中解析出json对象.
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