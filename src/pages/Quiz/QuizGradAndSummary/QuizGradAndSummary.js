import React, { useState } from "react";
import {
  Card,
  Breadcrumb,
  Space,
  Form,
  message,
  Input,
  Button,
  Switch,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled from "styled-components";
import Api from "../../../api";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const QuizGradAndSummary = ({ match }) => {
  const [endText, setEndText] = useState("");
  const [passText, setPassText] = useState("");
  const [failText, setFailText] = useState("");
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [feedback, setFeedback] = useState(true);

  const handleSubmit = async ({ asAsAbove, ...data }) => {
    data.quizGradAndSummary.endText = endText;
    data.quizGradAndSummary.passText = passText;
    data.quizGradAndSummary.failText = failText;
    data.quizGradAndSummary.sms = sms;
    data.quizGradAndSummary.email = email;
    data.quizGradAndSummary.feedback = feedback;

    const res = await Api.updateOne("quizs", match.params.id, data);
    console.log(res);
    console.log(localStorage.getItem("@quiz"));
    if (res.status === "success") {
      message.success("Data Saved");
    }
  };

  const onChange = (name, checked) => {
    eval(name + `(${checked});`);
  };

  return (
    <Container>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Add</Breadcrumb.Item>
      </Breadcrumb>

      <Form {...layout} onFinish={handleSubmit}>
        <Card>
          <h6>
            Edit Text Here to be displayed to all quiz applicants at the end of
            the quiz
          </h6>

          <ReactQuill theme="snow" value={endText} onChange={setEndText} />
        </Card>
        <Card>
          <h6>Define Grading Criteria</h6>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>Quiz Passing Marks</p>
            <Form.Item name={["quizGradAndSummary", "passMarks"]}>
              <Input />
            </Form.Item>
          </div>
        </Card>

        <Card>
          <h6>Passing Test Message</h6>

          <ReactQuill theme="snow" value={passText} onChange={setPassText} />
        </Card>

        <Card>
          <h6>Failed Test Message</h6>

          <ReactQuill theme="snow" value={failText} onChange={setFailText} />
        </Card>

        <Card>
          <h6>Submit Quiz Result</h6>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Switch
              defaultChecked
              onChange={(checked) => {
                onChange("setEmail", checked);
              }}
            />
            <p style={{ marginLeft: 20 }}>Email</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Switch
              defaultChecked
              onChange={(checked) => {
                onChange("setSms", checked);
              }}
            />
            <p style={{ marginLeft: 20 }}>SMS</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Switch
              defaultChecked
              onChange={(checked) => {
                onChange("setFeedback", checked);
              }}
            />
            <p style={{ marginLeft: 20 }}>Online Feedback</p>
          </div>
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

export default QuizGradAndSummary;
