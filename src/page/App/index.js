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
import Sider from 'components/Sider'
import PrivateRoute from 'components/PrivateRoute'
import LoginRoute from 'components/LoginRoute'
import style from './index.less'
import routes from 'src/routes.config'

function getLoadableComponent(component) {
  return Loadable({
    loader: () => component,
    loading: RouterLoading,
  })
}

function loopRoutes(routes, match = {}) {
  let matchPath = match.path || ''
  return (
    <Switch>
      {
        routes.map(route => {
          let routes = route.routes
          if (routes) {
            return <Route key={route.path} path={route.path} render={({match}) => {
              return loopRoutes(routes, match)
            }}/>
          } else {
            const LoadableComponent = getLoadableComponent(route.component)
            return (
              <PrivateRoute exact key={route.path} path={matchPath + route.path} component={LoadableComponent}/>
            )
          }
        })
      }
      <LoginRoute exact path='/login' component={getLoadableComponent(import('page/Login'))}/>
      <Route component={getLoadableComponent(import('page/NoMatch'))}/>
    </Switch>
  )
}


export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
}