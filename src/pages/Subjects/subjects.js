import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Space, Button } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Api from "../../api";
const Subjects = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await Api.getAll("questions");
      console.log(response.data.data);
      setData(response.data.data);
    }
    fetchData();
  }, []);

  return data ? (
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
          >
            <Link to="/import">
              <Button>Import</Button>
            </Link>

            <Link to="/addsubject">
              <Button type="primary">
                <PlusOutlined />
                Add New Subject
              </Button>
            </Link>
          </Space>
        </Space>
      </PageContent>
    </div>
  ) : (
    <p>Hello World</p>
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

export default Subjects;
