import React, { useState, useContext } from "react";
import {
  Card,
  Breadcrumb,
  Space,
  Form,
  message,
  Select,
  Input,
  Button,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import Api from "../../api";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const AddSubjects = () => {
  const handleSubmit = async ({ asAsAbove, ...data }) => {
    const res = await Api.addOne("subjects", data);
    console.log(res);
    if (res.status === "success") {
      message.success("Data Saved");
    }
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
          <h3>Add New Subject</h3>
          <Form.Item name={["title"]} label="Subject Name">
            <Input />
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

export default AddSubjects;
