/**
 * @Author: 陈树鸿
 * @Date: 2018--13
 */
import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'
import RouterLoading from 'components/RouterLoading'
import Sider from 'components/Sider/index'
import NoMatch from 'page/NoMatch'
import style from './index.less'
import routes from 'src/routes.config'

export default function (props) {
  function loopRoutes(routes,match={}){
    let matchPath = match.path||''
    return (
      <Switch>
        {
          routes.map(route=>{
            let routes = route.routes
            if (routes){
              return <Route key={route.path} path={route.path} render={({match})=>{
                return loopRoutes(routes,match)
              }}/>
            } else {
              const LoadableComponent = Loadable({
                loader: () => route.component,
                loading: RouterLoading,
              })
              return (
                <Route exact key={route.path} path={matchPath+route.path} component={LoadableComponent}/>
              )
            }
          })
        }
        <Route component={NoMatch}/>
      </Switch>
    )
  }
  return (
    <Router>
      <div className={style.matchscreen}>
        <Sider className={style.left} routes={routes}/>
        <div  className={style.right}>
          {
            loopRoutes(routes)
          }
        </div>
      </div>
    </Router>
  )
}