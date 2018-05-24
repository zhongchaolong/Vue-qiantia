var path = require('path');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
// 打包配置
module.exports = {
   // 入口稳健配置
   entry :'./src/main.js',
   // 出口
   output:{
      // 输出的路径，通常到绝对路径,这个是输出打包后的文件名
      path:path.join(__dirname,'dist'),
      // 输出文件名字
      filename:'bundle.js'
   },
   // 关于其他文件类型的配置
   module:{
      rules:[
         // 配置的是用来解析.css文件的loader
         {
            test:/\.css$/,
            use:['style-loader','css-loader']
            //webpack底层调用这些包的顺序是从右到左
         },
         {
            // 配置解析.less文件
            test:/\.less$/,
            use:[{
               loader:'style-loader'
            },{
               loader:'css-loader'
            },{
               loader:'less-loader'
            }]
         },
         {
            // 配置图片
            test:/\.(png|jpg|gif|ttf|woff|svg|eot)/,
            use:[{
               loader:'url-loader',
               options:{
                  // 代表限制单位大小，大过的值就将图片处理成文件路径的格式，如果图片小于这个值，就图片处理成base64格式
                  limit:50
               }
            }]
         },
         {
            // 配置js文件
            test:/\.js$/,
            exclude:/(node_modules)/,
            use: {
               loader:'babel-loader'
            }
         },
         {
            // 配置vue文件
            test:/\.vue$/,
            loader:'vue-loader'
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template:'./index.html',// 配置要处理的html文件
         filename:'index.html', // 处理后的新文件名称
         title: "hello vue"
      })
   ]

}


