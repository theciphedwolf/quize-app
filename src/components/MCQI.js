import React, { useState } from "react";
import { Form, Input, Button, Switch, Alert } from "antd";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import Api from "./../api";

const MCQI = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [terminate, setTerminate] = useState(true);
  const [skip, setSkip] = useState(true);
  const [image, setImage] = useState("");

  const handleSubmit = async ({ asAsAbove, ...data }) => {
    data = {
      ...data,
      type: "mcqt",
      skip: skip,
      terminateIfWrong: terminate,
      quiz: localStorage.getItem("@quiz"),
      image: image,
    };
    const res = await Api.addOne("questions", data);
    console.log(res);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.message);
    setErrorMessage(errorInfo.message);
  };

  const onSkipChange = (checked) => {
    setSkip(checked);
  };

  const getFiles = (files) => {
    setImage(files[0].base64);
  };

  const onTerminateChange = (checked) => {
    setTerminate(checked);
  };

  return (
    <Container>
      <Form
        name="basic"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        {errorMessage ? (
          <Form.Item>
            <Alert message={errorMessage} type="error" />
          </Form.Item>
        ) : null}

        <br></br>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Description!" }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <br></br>
        <Form.Item>
          <FileBase64
            multiple={true}
            onDone={(files) => {
              getFiles(files);
            }}
          />
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <div>
              <Form.Item name={["options", "option1"]} label="Option 1">
                <Input />
              </Form.Item>

              <Form.Item name={["options", "option2"]} label="Option 2">
                <Input placeholder="Option 2" />
              </Form.Item>
            </div>

            <div>
              <Form.Item name={["options", "option3"]} label="Option 3">
                <Input placeholder="Option 3" />
              </Form.Item>
              <Form.Item name={["options", "option4"]} label="Option 4">
                <Input placeholder="Option 4" />
              </Form.Item>
            </div>
            <div></div>
          </div>

          <div>
            <p>Correct Answer</p>
            <Form.Item
              name="correctAnswer"
              rules={[{ required: true, message: "Description!" }]}
            >
              <Input name="correctOption" placeholder="Option 4" />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          name="points"
          rules={[{ required: true, message: "Description!" }]}
          label="Points"
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="pointsForIncorrect"
          label="Points For Incorrect"
          rules={[{ required: true, message: "Description!" }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item name="skip" label="Can Skip?">
          <Switch value={skip} defaultChecked onChange={onSkipChange}></Switch>
        </Form.Item>

        <Form.Item name="terminateIfWrong" label="Terminate If Wrong">
          <Switch
            value={terminate}
            defaultChecked
            onChange={onTerminateChange}
          ></Switch>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export default MCQI;
