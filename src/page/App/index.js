/**
 * @Author: 陈树鸿
 * @Date: 2018--13
 */
import React from "react";
import {
  HashRouter as Router, Link,
  Route,
} from 'react-router-dom'
import Sider from 'components/Sider/index'
import style from './index.less'
import routes from 'src/routes.config'
import {Icon} from "antd";
import {Menu} from "antd/lib/menu";

export default function (props) {
  function loopRoutes(routes,parentPath=''){
    return routes.map(route=>{
      return route.routes?(
        <React.Fragment key={route.path}>
          {
            loopRoutes(route.routes,route.path)
          }
        </React.Fragment>
      ):(
        <Route key={route.path} path={parentPath+route.path} component={route.component}/>
      )
    })
  }
  return (
    <Router>
      <div className={style.matchscreen}>
        <Sider className={style.left} routes={routes}/>
        <div className={style.right}>
          {
            loopRoutes(routes)
          }
        </div>
      </div>
    </Router>
  )
}