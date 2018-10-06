## 项目搭建

虽然是个todo list,但这个todo list会沿着全栈这条链延伸下去，所以我决定用webpack4构建它，一下是用到的技术栈

- webpack：webpack4（构建工具），webpack-cli（执行webpack命令），webpack-dev-server（提供了一个简单的 web 服务器），webpack-merge（合并wepack配置文件），clean-webpack-plugin（每次重新构建清理文件），html-webpack-plugin（自动嵌入生产的文件到html），关于webpack请查看官方文档：[https://www.webpackjs.com/](https://www.webpackjs.com/)
- babel：@babel/core，@babel/preset-env，@babel/preset-react（转换react语法的，比如jsx），babel-loader，项目根目录还要有个config文件，babel.config.js
- less：less和less-loader，css预处理语言，[http://lesscss.cn/](http://lesscss.cn/)
- postcss：css中的babel，提供了丰富的插件用于实现不同场景的编译需求，这里就用到autoprefix（自动加上浏览器前缀），项目根目录还有有个config文件，postcss.config.js
- react：[https://react.docschina.org/](https://react.docschina.org/)
- normailize.css：消除浏览器样式差异

## Hello React

```javascript
import ReactDom from 'react-dom'
import React from "react";
const element = (
  <div>hello react</div>
)
ReactDom.render(element,document.getElementById('root'))
```

在package.json里scripts里配置一条命令：

```
"start": "webpack-dev-server --open --config webpack.dev.js",
```

npm run start即可自动构建，并在浏览器里打开看到hell react