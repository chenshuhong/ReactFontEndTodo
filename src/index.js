/**
 * @Author: 陈树鸿
 * @Date: 2018--05
 */
import ReactDom from 'react-dom'
import React from "react";
import TodoList from './components/TodoList'

let data = [
  'List One',
  'List Two',
  'List Three',
]

const element = (
  <TodoList dataSource={data}/>
)
ReactDom.render(element,document.getElementById('root'))