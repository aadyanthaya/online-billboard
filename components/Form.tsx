import React, {useState} from "react";
import {Form as AntForm, Input, Row, Col, Button, InputNumber, Card} from "antd"


const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
      message: '${label} is not a valid message!',
    },
    number: {
      range: '${label} must be higher than ${min}',
    },
  };

type BillBoardProps = {
  
};

const Form: React.FC = () => {

  const submitData = async (values: any) => {
    // @ts-ignore
    Blockonomics.widget({
      msg_area: 'payment_area',
      uid: '7ad98c0a77364495',
      email: values.email,
      name: values.name,
      custom_one: values.message,
      amount: values.price
    });
  };

  return (
    <Row gutter={[16, 16]} style={{marginTop: 20}}>
      <Col span={16}>
        <Card title="To Advertise, please fill below form. Current Highest bid">
          <AntForm validateMessages={validateMessages} size="large" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={submitData}>
          <AntForm.Item name={'name'} label="Name" rules={[{ required: true }]}>
              <Input />
            </AntForm.Item>

            <AntForm.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
              <Input />
            </AntForm.Item>

            <AntForm.Item name="price" label="Price" rules={[{type: "number", min: 0, required: true }]}>
              <InputNumber
                style={{ width: 200 }}
                addonAfter="USD"
              />
            </AntForm.Item>

            <AntForm.Item name={'message'} label="Message" rules={[{ type: 'string', required: true }]}>
              <Input.TextArea rows={4} placeholder="Your billboard message" />
            </AntForm.Item>

            <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" block >
                Pay now
              </Button>
            </AntForm.Item>

            </AntForm>
          </Card>
      </Col>
      <Col span={8}>
        <Card style={{height: "100%"}}>
          <div id="payment_area"></div>
        </Card>
      </Col>
    </Row>
  );
};

export default Form;
