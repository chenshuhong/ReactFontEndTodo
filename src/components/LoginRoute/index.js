/**
 * @Author: 陈树鸿
 * @Date: 2018-10-29
 */
/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import {Redirect, Route} from "react-router-dom";
import { connect } from 'react-redux'
import {onLoginSuccess} from 'actions/app'

function LoginRoute({component: Component,isAuthenticated,onLoginSuccess, ...rest}) {
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
              state: {from: props.location}
            }}
          />
        ) : (
          <Component {...props} onLoginSuccess={onLoginSuccess}/>
        )
      )}/>
  )

}

const mapStateToProps = state => ({
  isAuthenticated: state.app.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  onLoginSuccess: () => dispatch(onLoginSuccess())
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginRoute)
 