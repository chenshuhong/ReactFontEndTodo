/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import {Button} from 'antd'
export default function (props) {
  console.log(props)
  return (
    <Button onClick={props.onLoginSuccess} loading={props.isLoginIng}>登录</Button>
  )
}