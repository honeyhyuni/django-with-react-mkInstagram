import React, {useState } from "react";
import {Form, Button, Input, notification} from "antd";
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "api";
import {SmileOutlined, FrownOutlined} from "@ant-design/icons";

export default function Signup(){
    const navigate = useNavigate();
    const [fieldErrors, setFieldErrors] = useState({});
    const onFinish = (values) => {

        async function fn(){
            const {username, password} = values;
            setFieldErrors({});

            const data = {username, password};
            try{
                await axiosInstance.post("/accounts/signup/", data);
                notification.open({
                    message: "회원가입 성공",
                    description: "로그인 페이지로 이동합니다.",
                    icon: <SmileOutlined style={{color:"#108ee9"}}/>
                })
                navigate("/accounts/login");
            }
            catch(error){
                if(error.response){
                    notification.open({
                        message: "회원가입 실패",
                        description: "아이디/암호를 확인해주세요.",
                        icon: <FrownOutlined style={{color: "#ff3333"}}/>
                    })
                    const {data: fieldsErrorMessages} = error.response
                    setFieldErrors(
                        Object.entries(fieldsErrorMessages).reduce((acc , [fieldName, errors]) => {
                            acc[fieldName] = {
                                 validateStatus: "error",
                                 help: errors.join(" ")
                            }
                            return acc;
                        }, {})
                    );
                }

            }
        }
        fn(); 
    };
    return(
        <Form
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish} // submit 직후 호출됨
            //   onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                {
                    min:5, message: "5글자이상 입력해주세요",
                },
                ]}
                hasFeedback
                {...fieldErrors.username}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                {...fieldErrors.password}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
  );
};

const layout = {
    labelCol: {span: 8},
    wrapperCol: {spane: 16}
};


const tailLayout = {
    wrapperCol: {offset:8, span:16}
}