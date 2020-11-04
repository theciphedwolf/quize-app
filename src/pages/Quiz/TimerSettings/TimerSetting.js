import React, { useState } from "react";
import {
  Card,
  Breadcrumb,
  Space,
  Form,
  message,
  Select,
  Radio,
  Button,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";

import styled from "styled-components";
import Api from "../../../api";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const TimerSetting = () => {
  const [questionBasedTiming, setQuestionBasedTiming] = useState(true);
  const [manualActivateQuiz, setManualActivateQuiz] = useState(true);

  const handleSubmit = async ({ asAsAbove, ...data }) => {
    data.timerSetting.manualActivation = manualActivateQuiz;
    data.timerSetting.questionBasedTiming = questionBasedTiming;
    const res = await Api.updateOne(
      "quizs",
      localStorage.getItem("quiz"),
      data
    );
    console.log(res);
    if (res.status === "success") {
      message.success("Data Saved");
    }
  };

  const onChange = (name, e) => {
    eval(name + `(${e.target.value});`);
  };

  return (
    <Container>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Add</Breadcrumb.Item>
      </Breadcrumb>

      <h3>Timer Setting</h3>

      <Form {...layout} onFinish={handleSubmit}>
        <Card>
          <h5>Quiz Timing</h5>
          <Form.Item name={["timerSetting", "questionBasedTiming"]}>
            <Radio.Group
              onChange={(e) => {
                onChange("setQuestionBasedTiming", e);
              }}
              value={questionBasedTiming}
            >
              <Radio value={true}>Activate the quiz manually</Radio>
              <Radio value={false}>
                Activate automatically according to the quiz settings
              </Radio>
            </Radio.Group>
            <br />
            Late students are allowed to sit for the quiz during
            <Select>
              <option>3 mins</option>
            </Select>
          </Form.Item>
        </Card>

        <Card>
          <p>
            The "Activate Quiz" button is available on the side menu. After
            clicking on it, quiz takers will be allowed access the quiz is for
            the duration specified below. Bear in mind the fact that tardy
            people will not be allowed to start the quiz unless there is a grace
            period after the quiz begins.
          </p>
          <Form.Item name={["timerSetting", "manualActivation"]}>
            <Radio.Group
              onChange={(e) => {
                onChange("setManualActivateQuiz", e);
              }}
              value={manualActivateQuiz}
            >
              <Radio value={true}>Activate the quiz manually</Radio>
              <Radio value={false}>
                Activate automatically according to the quiz settings
              </Radio>
            </Radio.Group>
            <br />
            Late students are allowed to sit for the quiz during
            <Select>
              <option>3 mins</option>
            </Select>
          </Form.Item>
          From quiz start
        </Card>

        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>

            <Button>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export default TimerSetting;
