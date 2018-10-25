/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import AuthContext from 'context/AuthContext'
import {Button} from 'antd'
export default function (props) {
  return (
    <AuthContext>
      {
        auth=>(
          <Button onClick={auth.onLogin}>登录</Button>
        )
      }
    </AuthContext>
  )
}
