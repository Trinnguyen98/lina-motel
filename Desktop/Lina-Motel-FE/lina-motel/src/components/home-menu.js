import React, { useState } from 'react'
import background from '../images/home-background.jpg';
import {
  Form,
  Select,
  Tooltip,
  Input,
  DatePicker,
  Button,
  Row,
  Col
} from 'antd';
import { FacebookOutlined, PhoneOutlined, QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';

export const HomeMenu = () => {
  const [loading, setLoading] = useState(false);
  const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  };
  return (
    <div class="mb-20">
      <div class="h-100 ">
        <div class="h-100  bg-cover w-full bg-top bg-no-repeat flex" style={{
          backgroundImage: `url(${background})`,
        }}>
          <div class="w-full">
            <div class="flex justify-start p-2 items-center">
              <FacebookOutlined class="text-blue-200" />
              <a class="text-white pl-1" href="https://www.facebook.com/nhu.tram.792" target="_blank"> https://www.facebook.com/nhu.tram.792</a>
            </div>
            <div class="flex justify-start pl-2 items-center">
              <PhoneOutlined class="text-blue-200" />
              <a class="text-white pl-1" href="https://zalo.me/+84387116680" target="_blank"> (+84) 38 711 6680</a>
            </div>
            <div class="flex justify-center items-center p-10">
              <h1 class="font-bold font-mono text-5xl text-white" >Lina Motel</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white h-auto -mt-32 w-3/4 content-center m-auto rounded-lg shadow-lg p-2">
        <Form>
          <Form.Item
            name="youname"
            label={
              <span>
                Your name&nbsp;
            <Tooltip title="What do you want others to call you?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            class="text-gray-700  px-4 py-2 m-2"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            class="text-gray-700  px-4 py-2 m-2"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input addonBefore="+84" />
          </Form.Item>
          <Form.Item class="text-gray-700  px-4 py-2 m-2">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item name="range-time-picker" label="Range time" {...rangeConfig} >
                  <DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="roomType"
                  label="Room type"
                  hasFeedback
                  rules={[{ required: true, message: 'Please select your country!' }]}
                >
                  <Select placeholder="Please select a room type">
                    <Select.Option value="single">Single</Select.Option>
                    <Select.Option value="double">Double</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              class="flex justify-center"
              type="primary"
              icon={<SendOutlined />}
              loading={loading}
            >Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}