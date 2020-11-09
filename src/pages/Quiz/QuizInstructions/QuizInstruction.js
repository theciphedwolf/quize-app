import React, { useState } from "react";
import { Card, Breadcrumb, Space, Form, message, Button, Checkbox } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled from "styled-components";
import Api from "../../../api";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const QuizInstruction = ({ match }) => {
  const plainOptions = [
    "Name",
    "Grade",
    "School",
    "TeacherName",
    "Email",
    "Mobile",
  ];
  const [value, setValue] = useState("");
  const [infoNeeded, setInfoNeeded] = useState("");
  const handleSubmit = async () => {
    const res = await Api.updateOne("quizs", match.params.id, {
      quizInstructions: { instructions: value, quizInitiationForm: infoNeeded },
    });
    console.log(res);
    if (res.status === "success") {
      message.success("Data Saved");
    }
  };

  function onChange(checkedValues) {
    setInfoNeeded(checkedValues);
  }

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
          <p>Provide Quiz Instructions Here</p>
          <ReactQuill theme="snow" value={value} onChange={setValue} />

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Checkbox.Group
              options={plainOptions}
              defaultValue={["name"]}
              onChange={onChange}
            />
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

export default QuizInstruction;
