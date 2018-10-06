/**
 * @Author: 陈树鸿
 * @Date: 2018--06
 */
import React from 'react'
import { List } from 'antd';
import TodoItem from '../TodoItem'
export default function (props) {
  return (
    <List dataSource={props.dataSource} renderItem={item=>(<TodoItem item={item}/>)}/>
  )
}
