/**
 * @Author: 陈树鸿
 * @Date: 2018--05
 */
import ReactDom from 'react-dom'
import React from "react";
import {cloneDeep} from 'lodash'
import './index.less'
import App from 'page/App'

React.Component.prototype.myUpdateState = function (value, name) {
  console.log('father')
  let changeState = {}
  if (Object.prototype.toString.call(name)==='[object Array]'){
    name.map((name,index)=>{
      changeState[name]=value[index]
    })
  } else {
    changeState[name]=value
  }
  this.setState((prevState,props)=>{
    return changeState
  })

  /*let names = name.split('.')
  names.map((name,index)=>{
    if (index){

    } else {
      changeState[name] = this.state[name]
    }
  })
  names.reduce()*/
}

const element = (
  <App/>
)
ReactDom.render(element,document.getElementById('root'))