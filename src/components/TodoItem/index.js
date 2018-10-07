/**
 * @Author: 陈树鸿
 * @Date: 2018--06
 */
import React from 'react'
import {List} from 'antd'
const ListItem = List.Item
export default function (props) {
  return (
    <ListItem actions={[<a onClick={props.onDeleteItem}>delete</a>, <a onClick={props.showEditModel}>edit</a>]}>{props.item}</ListItem>
  )
}