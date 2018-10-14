/**
 * @Author: 陈树鸿
 * @Date: 2018--15
 */
import TodoList from 'components/TodoList'
import Crypto from 'page/Crypto'
import {flattenDeep} from 'lodash'
let routes = [
  {
    path:'/todolist',
    name:'todolist',
    component:TodoList
  },
  {
    path:'/crypto',
    name:'crypto',
    component:Crypto
  }
]
//数组扁平化
let routesFlat = flattenDeep(routes)
export {routes,routesFlat}