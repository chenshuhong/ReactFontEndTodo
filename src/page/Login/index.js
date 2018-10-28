/**
 * @Author: 陈树鸿
 * @Date: 2018--17
 */
import React from 'react'
import {Button} from 'antd'
export default function (props) {
  return (
    <Button onClick={props.onLoginSuccess}>登录</Button>
  )
}