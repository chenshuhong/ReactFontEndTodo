/**
 * @Author: 陈树鸿
 * @Date: 2018--22
 */
import React from 'react'
import {Redirect, Route} from "react-router-dom";
import AuthContext from 'context/AuthContext'

export default function ({component: Component, ...rest}) {
  return (
    <AuthContext.Consumer>
      {
        auth => (
          <Route
            {...rest}
            render={props =>
              auth.isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {from: props.location}
                  }}
                />
              )
            }
          />
        )
      }
    </AuthContext.Consumer>
  )
}