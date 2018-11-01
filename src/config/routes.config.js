/**
 * @Author: 陈树鸿
 * @Date: 2018--15
 */

let routes = [{
  path: '/',
  name: '首页',
  component: import('page/Home/index')
}, {
  path: '/todolist',
  name: 'todolist',
  component: import('page/TodoList/index'),
  reducer: import('page/TodoList/reducer')
}, {
  path: '/datavisualization',
  name: '数据可视化',
  routes: [
    {
      path: '/echarts',
      name: 'Echarts',
      component: import('page/DateVisualization/ECharts/index')
    }
  ]
}]

export default routes