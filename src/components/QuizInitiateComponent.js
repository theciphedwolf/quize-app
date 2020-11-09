import { Input, Form, Button, Breadcrumb } from "antd";
import React, { useState, useEffect } from "react";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Api from "./../api";

const QuizInitiateComponent = ({ match, history }) => {
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      let response = await Api.getOne("quizs", match.params.id);
      setQuiz(response.data.data);
    };
    fetchItem();
  }, quiz);

  const onFinish = async (values) => {
    try {
      history.push({
        pathname: "../takequiz",
        state: {
          quiz: quiz,
          data: values,
          id: match.params.id,
        },
      });
    } catch (error) {
      onFinishFailed(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.message);
  };

  let arr = [];
  if (quiz.hasOwnProperty("quizInstructions")) {
    arr = quiz.quizInstructions.quizInitiationForm;
    console.log(arr);
  }

  return arr ? (
    <Container>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Quiz Initiate Form</Breadcrumb.Item>
      </Breadcrumb>
      <Main>
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {arr.map((item) => {
            console.log(item);
            return (
              <Form.Item
                name={item}
                rules={[{ required: true, message: `Please provide ${item} ` }]}
              >
                <Input placeholder={item} />
              </Form.Item>
            );
          })}

          <Form.Item>
            <Button block size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Main>
    </Container>
  ) : (
    <p>Wait Quiz Is Initiating</p>
  );
};

const Content = styled.div`
  flex: 1;
  padding: 32px 0;
`;

const Title = styled.span`
  position: relative;
  top: 2px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
  font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
`;

const Main = styled.div`
  width: 368px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export default QuizInitiateComponent;
