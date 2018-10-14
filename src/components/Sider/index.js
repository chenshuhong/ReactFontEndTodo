/**
 * @Author: 陈树鸿
 * @Date: 2018--14
 */
import React from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu;

export default class extends React.Component {

  constructor(props){
    super(props)
  }

  loopRoutes(routes,parentPath=''){
    return routes.map(route=>{
      return route.routes?(
        <SubMenu key={route.path} title={<span>{route.icon&&<Icon type={route.icon}/>}{route.name}</span>}>
          {
            this.loopRoutes(route.routes,route.path)
          }
        </SubMenu>
      ):(
        <Menu.Item key={route.path}><Link to={parentPath+route.path}>{route.icon&&<Icon type={route.icon}/>}{route.name}</Link></Menu.Item>
      )
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        className={this.props.className}>
        {
          this.loopRoutes(this.props.routes)
        }
      </Menu>
    );
  }
}