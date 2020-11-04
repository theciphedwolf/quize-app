import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Space, Button } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import QuizCard from "./../../components/QuizCard";
import styled from "styled-components";
import Api from "../../api";
const Portal = () => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await Api.getAll("quizs");
      setQuiz(data.data);
      setLoading(false);
    };
    fetchItem();
  }, []);

  return !loading ? (
    <div>
      <Breadcrumb style={{ margin: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Employees</Breadcrumb.Item>
      </Breadcrumb>

      <PageContent>
        {console.log(quiz)}
        <Space direction="vertical">
          <Space
            style={{
              padding: "0 16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></Space>

          <h5>Online/Offline test and Quizzes</h5>
          <Link to="/addnewquiz">
            <Button type="primary">
              <PlusOutlined />
              Add New Quiz
            </Button>
          </Link>

          <div
            style={{
              padding: "0 16px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <h5>Studying Task</h5>
              <Link to="/addnewquiz">
                <Button type="primary">
                  <PlusOutlined />
                  New Task
                </Button>
              </Link>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <h5>Capacity Assasement</h5>
              <Link to="/addsubject">
                <Button type="primary">
                  <PlusOutlined />
                  New Assessment
                </Button>
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {quiz.data.map((quizItem) => (
              <QuizCard
                id={quizItem._id}
                quizTitle={quizItem.quizBasicSetting.title}
                quizDescription={quizItem.quizBasicSetting.description}
                createdDate={quizItem.created_at}
              />
            ))}
          </div>
        </Space>
      </PageContent>
    </div>
  ) : (
    <p>Hello</p>
  );
};

const PageContent = styled.div`
  margin: 16px;
  padding: 16px 0;
  background-color: #fff;
  > * {
    width: 100%;
  }
  .ant-pagination {
    margin: 16px;
  }
`;

export default Portal;
