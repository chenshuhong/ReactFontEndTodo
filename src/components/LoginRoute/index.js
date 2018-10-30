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
import {login} from 'reducer/app'

function LoginRoute({component: Component,isAuthenticated,isLoginIng,onLoginSuccess, ...rest}) {
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
          <Component {...props} isLoginIng={isLoginIng} onLoginSuccess={onLoginSuccess}/>
        )
      )}/>
  )

}

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => ({
  onLoginSuccess: () => dispatch(login())
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginRoute)
 