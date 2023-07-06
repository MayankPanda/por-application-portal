import React, {useState} from "react";
import {loginUser} from "../services/loginServices"
import "../styles/loginStyle.css"
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {Button, Checkbox, Form, Input, Card, Row, Col, Menu} from "antd";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [current, setCurrent] = useState("student");
    const onFinish = () => {
        const postData = {
            username:`${username}`,
            password:`${password}`,
        }
        const response = loginUser(postData);
        console.log(response);
    }
    const menuItems = [
        {
            label: 'Student Login',
            key: 'student',
        },
        {
            label: 'Team Login',
            key: 'team',
        },
    ]
    return (
        <React.Fragment>
            <Row>
                <Col span={24} style={{justifyContent:"center"}}>
                    <Card size="small" className="login-card" title="Login" bordered={false}>
                        <Menu onClick={(e) =>{setCurrent(e.key); setUsername(""); setPassword("");}} selectedKeys={[current]} mode="horizontal" items={menuItems} /><br/>
                        <Form name="loginForm" className="login-form" initialValues={{remember:true,}} onFinish={onFinish}>
                            <Form.Item name="username" rules={[{required:true, message:"Please input your Username!"}, {type:"email", message:"Please input in valid format!"}]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e) => {setUsername(e.target.value); console.log(username);}} value={username} autoComplete="off" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{required:true, message:"Please input your password"}]}>
                                <Input.Password type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" onChange={(e) => {setPassword(e.target.value); console.log(password);}} autoComplete={"new-password"} />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember Me</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login