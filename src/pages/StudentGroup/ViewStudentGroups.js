import React, { useState, useEffect } from "react";
import { Breadcrumb, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Api from "../../api";
import StudentGroupCard from "../../components/StudentGroupCard";

const ViewStudentGroup = ({ match, history, location }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await Api.getAll("studentgroups");
      console.log(response.data.data);
      setData(response.data.data);
    };
    fetchItem();
  }, data);

  return (
    <div>
      <Breadcrumb style={{ margin: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>ViewStudentGroup</Breadcrumb.Item>
      </Breadcrumb>

      <PageContent>
        <Space direction="vertical">
          {data.map((item) => (
            <StudentGroupCard
              id={item._id}
              name={item.title}
              history={history}
            ></StudentGroupCard>
          ))}
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

export default ViewStudentGroup;
