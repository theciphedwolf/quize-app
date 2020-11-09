import React, { useState } from "react";
import { Card, Breadcrumb, Space, Form, message, Button, Radio } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Api from "../../../api";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const QuestionOrder = ({ match }) => {
  const [radioValue, setRadioValue] = useState(false);

  const handleSubmit = async ({ asAsAbove, ...data }) => {
    const res = await Api.updateOne("quizs", match.params.id, data);
    console.log(res);
    if (res.status === "success") {
      message.success("Data Saved");
    }
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  return (
    <Container>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Add</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Form {...layout} onFinish={handleSubmit}>
          <h3>Question Order</h3>
          <Form.Item name={["questionOrder", "random"]} label="Random">
            <Radio.Group onChange={onChange} value={radioValue}>
              <Radio value={false}>
                Fixed order of questions and answers as defined in Question
                Manager
              </Radio>
              <Radio value={true}>
                Random arrangement of questions and answers
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>

              <Button>Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export default QuestionOrder;
