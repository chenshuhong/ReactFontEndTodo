/**
 * @Author: 陈树鸿
 * @Date: 2018--23
 */
import React from 'react'

const AuthContext = React.createContext({
    isAuthenticated: false,
    onLogin: () => {
      console.log('login success')
    }
  }
);

export default AuthContext