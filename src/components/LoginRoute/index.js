/**
 * @Author: 陈树鸿
 * @Date: 2018-10-29
 */
/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import AuthContext from 'context/AuthContext'
import {Button} from 'antd'
import {Redirect, Route} from "react-router-dom";

export default function ({component: Component, ...rest}) {
  return (
    <AuthContext.Consumer>
      {
        auth => (
          <Route
            {...rest}
            render={props => (
              auth.isAuthenticated ? (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {from: props.location}
                  }}
                />
              ) : (
                <Component {...props} onLoginSuccess={auth.onLoginSuccess}/>
              )
            )}/>
        )
      }
    </AuthContext.Consumer>
  )
}
 