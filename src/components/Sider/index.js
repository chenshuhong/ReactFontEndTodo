/**
 * @Author: 陈树鸿
 * @Date: 2018--14
 */
import React from 'react'
import { Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
class Sider extends React.Component {

  constructor(props){
    super(props)
    let nextOpenKeys = this.props.location.pathname.substring(1).split('/')
    nextOpenKeys.pop()
    nextOpenKeys = nextOpenKeys.map(key=>{
      return `/${key}`
    })
    this.state = {
      selectedKeys:[],
      openKeys:nextOpenKeys
    }
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  loopRoutes(routes,parentPath=''){
    return routes.map(route=>{
      return route.routes?(
        <SubMenu key={route.path} title={<span>{route.icon&&<Icon type={route.icon}/>}{route.name}</span>}>
          {
            this.loopRoutes(route.routes,parentPath+route.path)
          }
        </SubMenu>
      ):(
        <Menu.Item key={parentPath+route.path}><Link to={parentPath+route.path}>{route.icon&&<Icon type={route.icon}/>}{route.name}</Link></Menu.Item>
      )
    })
  }

  static getDerivedStateFromProps(nextProps,prevState){
    let state = {}

    let pathname = nextProps.location.pathname
    let nextSelectedKeys = [pathname]
    if (prevState.selectedKeys !== nextSelectedKeys){
      state.selectedKeys = nextSelectedKeys
    }

    return Object.keys(state).length?state:null
  }

  onOpenChange(openKeys){
    this.setState({
      openKeys
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={this.state.selectedKeys}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        className={this.props.className}>
        {
          this.loopRoutes(this.props.routes)
        }
      </Menu>
    );
  }
}

export default withRouter(Sider)