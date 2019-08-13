
// const path = require('path')
// // 启用热更新的 第2步
// const webpack = require('webpack')
// module.exports = {
//     // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
//     entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
//     output: { // 输出文件相关的配置
//       path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
//       filename: 'bundle.js' // 这是指定 输出的文件的名称
//     }
// }

const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const VueLoaderPlugin=require('vue-loader-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')//Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用：

module.exports = {
  mode: 'production',
  entry: path.join(__dirname,'./src/main.js'),
  output: {
      path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    open:true,
    hot:true,
    contentBase:'src'
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    }),
   
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},//css文件匹配规则
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//less匹配规则
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//scss匹配规则
      {test:/\.(jpg|png)$/,use:'url-loader?limit=2000&name=[Hash:8]-[name].[ext]'},//url匹配规则
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//字体匹配规则
      {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},//字体匹配规则
      {test:/\.vue$/,use:'vue-loader'},//vue匹配规则
    ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
};