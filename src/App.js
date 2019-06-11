import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import ListUser from './components/content/listUser';
import store from './components/redux/store';

const { Header, Content, Footer, Sider } = Layout;

export default class Main extends Component {

  state = {
		collapsed: false,
  };

  onCollapse = (collapsed) => {
		this.setState({ collapsed });
  }
  toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
  }

  render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Layout style={{ minHeight: '100vh' }}>

						<Sider
							collapsible
							collapsed={this.state.collapsed}
							onCollapse={this.onCollapse}>
							<div className="logo"><h1 style={{ textAlign: "center", color: "white" }}>React project</h1></div>
							<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
								<Menu.Item key="1">
									<Icon type="pie-chart" />
									<span>Deshboard</span>
									<Link to="/" />
								</Menu.Item>
							</Menu>
						</Sider>

						<Layout>
							<Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
								<Icon
									className="trigger"
									type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
									style={{ cursor: 'pointer' }}
									onClick={this.toggle}
								/>
							</Header>

							<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
								<Switch>
									<Route path='/' exact component={ ListUser } />
								</Switch>
							</Content>

							<Footer style={{ textAlign: 'center' }}>
								Ant Design ©2016 Created by Ant UED
							</Footer>
						</Layout>

					</Layout>
				</BrowserRouter>
			</Provider>
		);
  }
}
