/**
 * @Author: 陈树鸿
 * @Date: 2018--13
 */
import React from "react";
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import Sider from 'components/Sider/index'
import style from './index.less'
import {routes,routesFlat} from 'src/routes.config'

export default function (props) {
  return (
    <Router>
      <div className={style.matchscreen}>
        <Sider className={style.left} routes={routes}/>
        <div className={style.right}>
          {
            routesFlat.map(route=>(
              <Route key={route.path} path={route.path} component={route.component}/>
            ))
          }
        </div>
      </div>
    </Router>
  )
}