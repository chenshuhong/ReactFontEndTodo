const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function getCssModuleLoaders(isOpenCssModule,isLess) {
  let loaders =  [
    'style-loader',
    {
      loader: 'css-loader',
      options:{
        modules:isOpenCssModule,//开启css module
        localIdentName:'[local]-[hash:base64:8]'
      }
    },
    'postcss-loader',
  ]
  if (isLess){
    loaders = loaders.concat('less-loader')
  }
  return loaders
}

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React Todo List',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    //设置别名
    alias:{
      src:path.resolve(__dirname,'src'),
      components:path.resolve(__dirname,'src/components'),
      page:path.resolve(__dirname,'src/page'),
      context:path.resolve(__dirname,'src/context'),
      reducer:path.resolve(__dirname,'src/reducers')
    }
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: getCssModuleLoaders(false,false),
      include:path.resolve(__dirname,'node_modules')
    },{
      test: /\.(less)$/,
      use: getCssModuleLoaders(false,true),
      include:path.resolve(__dirname,'node_modules')
    },{
      test: /\.(css)$/,
      use: getCssModuleLoaders(true,false),
      exclude:path.resolve(__dirname,'node_modules')
    },{
      test: /\.(less)$/,
      use: getCssModuleLoaders(true,true),
      exclude:path.resolve(__dirname,'node_modules')
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};