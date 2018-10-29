/**
 * @Author: 陈树鸿
 * @Date: 2018--22
 */
import React from 'react'
import {Redirect, Route} from "react-router-dom";
import { connect } from 'react-redux'

function PrivateRoute({component: Component,app, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        app.isAuthenticated ? (
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

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(PrivateRoute)