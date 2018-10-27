/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import AuthContext from 'context/AuthContext'
import {Button} from 'antd'
import {Redirect, Route} from "react-router-dom";
export default function (props) {
  return (
    <AuthContext.Consumer>
      {
        auth => (
          auth.isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
                state: {from: props.location}
              }}
            />
          ) : (
            <Button onClick={auth.onLoginSuccess}>登录</Button>
          )
        )
      }
    </AuthContext.Consumer>
  )
}