import React, { useState } from 'react';
import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;

const residences = [
    {
        value: 'india',
        label: 'India',
        children: [
            {
                value: 'uttrakhand',
                label: 'Uttrakhand',
                children: [
                    {
                        value: 'nainital',
                        label: 'Nainital',
                    },
                    {
                        value: 'udhamsinghnagar',
                        label: 'U.S. nagar',
                    },
                    {
                        value: 'bageshwar',
                        label: 'Bageshwar'
                    },
                    {
                        value: 'almora',
                        label: 'Almora'
                    },
                    {
                        value: 'uttrakashi',
                        label: 'Uttrakashi'
                    },
                    {
                        value: 'chamoli',
                        label: 'Chamoli'
                    },
                    {
                        value: 'champawat',
                        label: 'Champawat'
                    },
                    // {
                    //     value:'',
                    //     label:''
                    // },
                ],
            },
        ],
    },
];

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="+91">+91</Option>
                {/* <Option value="87">+87</Option> */}
            </Select>
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <div style={{ width: '95vw', marginTop: '2rem', textAlign: 'start' }}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['India'],
                    prefix: '+91',
                    suffix: 'INR'
                }}
                scrollToFirstError
            >
                {/* first_name */}
                <Form.Item
                    name="first_name"
                    label="First Name"
                    // dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please enter first name',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* last_name */}
                <Form.Item
                    name="last_name"
                    label="Last Name"
                    // dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please enter last name',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* email */}
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* nickname */}
                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="What do you want others to call you?"
                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                {/* github */}
                <Form.Item
                    name="github"
                    label="Github Profile"
                    rules={[{ required: true, message: 'Please input your git account link!' }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                {/* residence */}
                <Form.Item
                    name="residence"
                    label="Residence"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>

                {/* phone */}
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                {/* salary */}
                <Form.Item
                    name="salary"
                    label="Current Salary"
                    rules={[{ required: true, message: 'Please input salary amount!' }]}
                >
                    <InputNumber addonBefore={suffixSelector} style={{ width: '100%' }} />
                </Form.Item>

                {/* website */}
                <Form.Item
                    name="website"
                    label="Website"
                    rules={[{ required: false, message: 'Please input website!' }]}
                >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                    </AutoComplete>
                </Form.Item>

                {/* Summary */}
                <Form.Item
                    name="Summary"
                    label="Summary"
                    rules={[{ required: true, message: 'Please input summary' }]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                {/* gender */}
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="male">Prefer not to say</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                {/* captcha */}
                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>

                {/* agreement */}
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default () => <RegistrationForm />;