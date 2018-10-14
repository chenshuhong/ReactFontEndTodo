/**
 * @Author: 陈树鸿
 * @Date: 2018--13
 */
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Sider from 'components/Sider/index'
import TodoList from 'components/TodoList/index'
import Crypto from 'page/Crypto/index'
import style from './index.less'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default function (props) {
  return (
    <Router>
      <div className={style.matchscreen}>
        <Sider className={style.left}/>
        <div className={style.right}>
          <Route exact path="/" component={Home}/>
          <Route path="/todolist" component={TodoList}/>
          <Route path="/crypto" component={Crypto}/>
        </div>
      </div>
    </Router>
  )
}