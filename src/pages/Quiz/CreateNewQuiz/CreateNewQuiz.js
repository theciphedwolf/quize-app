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
const CreateNewQuiz = () => {
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
                    Quiz Preview <SearchOutlined />
                  </p>
                  <p>
                    Quiz Info <InfoCircleOutlined />
                  </p>
                </div>

                <h4>
                  General Settings <SettingOutlined />
                </h4>
                <h4>
                  Question Manager <BarsOutlined />
                </h4>
                <h4>Question Order</h4>
                <h4>
                  Quiz Sharing <ShareAltOutlined />
                </h4>
                <h4>
                  Quiz Instruction <FolderAddOutlined />
                </h4>
                <h4>
                  Quiz Grad And Summary <FlagOutlined />
                </h4>
                <h4>
                  Timer Setting <ClockCircleOutlined />
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
