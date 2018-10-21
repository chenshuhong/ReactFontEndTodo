/**
 * @Author: 陈树鸿
 * @Date: 2018--15
 */

let routes = [{
  path: '/',
  name: '首页',
  component: import('page/Home')
}, {
  path: '/todolist',
  name: 'todolist',
  component: import('components/TodoList')
}, {
  path: '/datavisualization',
  name: '数据可视化',
  routes: [
    {
      path: '/echarts',
      name: 'Echarts',
      component: import('page/DateVisualization/Echarts')
    }
  ]
}]

export default routes