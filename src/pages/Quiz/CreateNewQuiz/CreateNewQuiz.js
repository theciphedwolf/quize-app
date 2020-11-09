import React from "react";

import { Breadcrumb, Space, Button, Card } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  BarsOutlined,
  ShareAltOutlined,
  FolderAddOutlined,
  FlagOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import styled from "styled-components";
import { Link } from "react-router-dom";
const CreateNewQuiz = ({ match }) => {
  return (
    <div>
      <Breadcrumb style={{ margin: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Employees</Breadcrumb.Item>
      </Breadcrumb>

      <PageContent>
        <Space direction="vertical">
          <Space
            style={{
              padding: "0 16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></Space>
          <div
            style={{
              padding: "0 16px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <h5>Quiz Setting</h5>
              <Card style={{ width: 300 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p>
                    <Link to="">
                      Quiz Preview <SearchOutlined />
                    </Link>
                  </p>
                  <p>
                    <Link to="">
                      Quiz Info <InfoCircleOutlined />
                    </Link>
                  </p>
                </div>

                <h4>
                  <Link to={`/BasicSetting/${match.params.id}`}>
                    General Settings <SettingOutlined />
                  </Link>
                </h4>
                <h4>
                  <Link to={`/questionManager/${match.params.id}`}>
                    Question Manager <BarsOutlined />
                  </Link>
                </h4>
                <h4>
                  <Link to={`/questionorder/${match.params.id}`}>
                    Question Order
                  </Link>
                </h4>
                <h4>
                  <Link to={`/quizsharing/${match.params.id}`}>
                    Quiz Sharing <ShareAltOutlined />
                  </Link>
                </h4>
                <h4>
                  <Link to={`/quizinstruction/${match.params.id}`}>
                    Quiz Instruction <FolderAddOutlined />
                  </Link>
                </h4>
                <h4>
                  <Link to={`/quizgradandsummary/${match.params.id}`}>
                    Quiz Grad And Summary <FlagOutlined />
                  </Link>
                </h4>
                <h4>
                  <Link to={`/timersettings/${match.params.id}`}>
                    Timer Setting <ClockCircleOutlined />
                  </Link>
                </h4>

                <Button>Activate Quiz</Button>
              </Card>
              ,
            </div>

            <div style={{ marginLeft: "20px" }}>
              <h5>Quiz Editing And Results</h5>
            </div>
          </div>
        </Space>
      </PageContent>
    </div>
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

export default CreateNewQuiz;
