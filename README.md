#这是我的第一个项目，2019必胜！！
##上传github
##制作首页App组件
1、完成Header区域，使用Mint-ui的Header组件
2、完成Tabber区域（注意购物车图标的实现需要扩展图标和字体库文件）

##改造Tabber为路由
##设置路由高亮 
##创建路由链接
##制作轮播图
##制作六宫格
##制作路由切换动画效果
##制作新闻路由链接
  1、创建界面
  2、使用vue-resource获取新闻资讯数据
  3、渲染数据

##实现新闻资讯列表 点击跳转到新闻详情
1、列表每一项创建router-link,并获取唯一的id
2、创建新闻详情组件页面newsinfo.vue
3、对应组件与新闻详情路由地址

##实现新闻详情的页面布局和数据渲染

##单独封装评论子组件conment.vue
 接口获取评论数据失败
##实现发表评论功能
1、将文本框实现双向数据绑定
2、为发表绑定事件
3、检测是否为空，为空提示非法
4、通过vue-resource请求服务器提交评论 
5、对新评论对象使用unshift直接插入comments里面

#改造图片分享链接为路由
#绘制图片列表
1、顶部滑动条制作(注意不要使用全屏类fullscreen,需要导入mui的scroll控件才能使用JS组件)
2、制作底部图片列表

##导入MUI的JS文件出现的BUG的解决方案
1、passive滑动问题，使用touch-action样式解决
2、进入无法滑动，需刷新才能滑动的，使用mounted加载完后再带入mui的scroll的js控件
3、无法切换Tabbar，因为mui的Tabbar样式冲突，需要改动样式名，并copy原样式代码

##获取图片分享

##制作图片列表区域  
1、图片列表需要使用懒加载（mint-ui的lazy-load 加载）
2、渲染图片列表数据

##实现页面图片懒加载和样式美化

##实现点击图片跳转到图片详情页面 
注意改造li为router-link时候要设定tag属性为li，否则会失去原有样式

##实现页面详情页的美化

##实现页面详情页的的缩略图功能 
1、使用vue-preview插件
2、每个图片数据中增加w和h属性

##绘制商品列表结构并美化

##尝试在手机上进行项目预览和测试
1、确保手机电脑在同一个局域网
2、打开项目package.json文件，在dev脚本中，添加一个--host指令，把当前电脑的wifi IP地址，设置为--host指令值；
+如何查看自己电脑所处wifi的IP呢，在cmd终端中运行'ipconfig',查看无线网的ip地址

##完成商品详情页的制作

##完成加入购物车小球动画的自适应以及数据的传递