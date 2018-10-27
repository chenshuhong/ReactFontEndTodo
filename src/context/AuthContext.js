/**
 * @Author: 陈树鸿
 * @Date: 2018--23
 */
import React from 'react'

const AuthContext = React.createContext({
    isAuthenticated: false,
    onLoginSuccess: () => {
      console.log('please achieve in app.js')
    }
  }
);

export default AuthContext