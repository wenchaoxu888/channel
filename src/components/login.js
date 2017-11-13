import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';
import axios from 'axios';
import cfg from '../utils/config';

const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const urls = 'http://csapi.haimaqingfan.com/dtbt/login'
        axios({
          method: 'post',
          url: urls,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          params: values,
        }).then(function (res) {
            console.log(res);
            if(res.data.data.accessToken){
              console.log (' 登陆成功');
              history.push('/datastatistics');
            } else {
              console.log (' 账号密码错误 ');
            }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('loginName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ width: "30%" }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ width: "30%" }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


const Login = () => {
  return (
    <div>
      <WrappedNormalLoginForm />
    </div>
  );
};


export default Login;
