/*
 * @Author: shilei
 * @Date: 2021-01-07 15:18:33
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 00:56:54
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/pages/login/index.js
 */
import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { connect, Provider } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/login'
import store from '../../store/login'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {

  onFinish = (values) => {
    console.log(this.props.isLogin);
    this.props.login();
    console.log(this.props.isLogin);
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div style={{marginTop: '100px'}}>        
        <Row>        
          <Col span={6} offset={8}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>              
          </Col>
        </Row>
      </div>
     )
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login/>
      </Provider>  
    )
  }
}