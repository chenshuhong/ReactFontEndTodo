/**
 * @Author: 陈树鸿
 * @Date: 2018--15
 */
import TodoList from 'components/TodoList'
import Home from 'page/Home'
import Crypto from 'page/Crypto'
import ECharts from 'page/DateVisualization/ECharts'

let routes = [{
  path: '/',
  name: '首页',
  component: Home
}, {
  path: '/todolist',
  name: 'todolist',
  component: TodoList
}, {
  path: '/datavisualization',
  name: '数据可视化',
  routes: [
    {
      path: '/echarts',
      name: 'Echarts',
      component: ECharts
    }
  ]
}]

export default routes