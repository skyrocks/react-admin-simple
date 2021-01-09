import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { login } from '../../store/login.reducer'
import store from '../../store'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@withRouter
@connect(
  state => ({ ...state.login }),
  {login})
class Login extends Component {
  onFinish = (values) => {
    this.props.login(() => {
      console.log(`1s after ${this.props.isLogin}`);
      this.props.history.push('/');
    });
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

export default function LoginProvider() {  
  return (
    <Provider store={store}>
        <Login/>
    </Provider>  
  );
}