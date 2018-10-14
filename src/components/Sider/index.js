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
    this.rootSubmenuKeys = ['sub1'];
    this.state = {
      openKeys: ['sub1'],
    };
    this.onOpenChange = this.onOpenChange.bind(this)
  }


  onOpenChange(openKeys){
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        className={this.props.className}>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="todolist"><Link to='/todolist'>TodoList</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}