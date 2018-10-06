/**
 * @Author: 陈树鸿
 * @Date: 2018--05
 */
import ReactDom from 'react-dom'
import React from "react";
import './index.less'
import TodoList from './components/TodoList'

const element = (
  <TodoList/>
)
ReactDom.render(element,document.getElementById('root'))