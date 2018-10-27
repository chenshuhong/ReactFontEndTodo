/**
 * @Author: 陈树鸿
 * @Date: 2018--05
 */
import ReactDom from 'react-dom'
import React from "react";
import './index.less'
import App from 'page/App'

React.Component.prototype.updateModal = function (name, value) {
  console.log('father')
  let changeState = {}
  if (Object.prototype.toString.call(name)==='[object Array]'){
    name.map((name,index)=>{
      changeState[name]=value[index]
    })
  } else {
    changeState[name]=value
  }
  this.setState(changeState)
}

const element = (
  <App/>
)
ReactDom.render(element,document.getElementById('root'))