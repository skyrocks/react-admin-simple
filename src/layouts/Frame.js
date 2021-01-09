import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RenderRoutes } from "../routes/allocation";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './Frame.css'
import { contentHeight } from "../utils";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Frame extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ height: '100vh' }} id="layout-app">
        <Sider trigger={null} collapsible collapsed={collapsed} >
          <div className="logo">React</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{height: contentHeight(), overflowY: 'auto'}}>
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/dashboard">工作台</Link>
            </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="系统管理">
              <Menu.Item key="2">
                <Link to="/user">用户管理</Link>
              </Menu.Item>
              <Menu.Item key="3" to="/role">
                <Link to="/role">角色管理</Link>
              </Menu.Item>
              <Menu.Item key="4" to="/auth">
                <Link to="/auth">角色授权</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: this.toggle,
            })}
            <Breadcrumb style={{ lineHeight: '64px', display: 'inline-block' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '24px 16px', height: '100vh', overflowY: 'auto' }}>            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>             
                <RenderRoutes routes={this.props.routes}></RenderRoutes>     
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Frame;

// export default class App extends Component {
//   render() {
//     return (
//         <BrowserRouter>
//           <Route exec path="/login" component={Login}></Route>
//           <AppFrame/>
//         </BrowserRouter>
//     )
//   }
// }
