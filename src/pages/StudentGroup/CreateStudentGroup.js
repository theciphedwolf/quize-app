import React, { useState } from "react";
import { Card, Breadcrumb, Button, Form, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Api from "../../api";
import UploadCsv from "./../../components/UploadCsv";
import styled from "styled-components";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const CreateStudentGroup = () => {
  const [studentsdata, setData] = useState([]);

  const handleSubmit = async ({ asAsAbove, ...data }) => {
    console.log(studentsdata);
    const fetched = await Api.addOne("studentgroups", {
      students: studentsdata,
      title: data.title,
      teacher: JSON.parse(localStorage.getItem("@userid")),
    });
    console.log(fetched);
  };
  return (
    <Container>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Create Student Group</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Form {...layout} onFinish={handleSubmit}>
          <h3>Add New Student Group</h3>
          <Form.Item name={["title"]} label="Student Group">
            <Input />
          </Form.Item>
          <UploadCsv
            pageTitle={"Screen"}
            supportedFormats={"Upload CSV Format Only"}
            endpoint={"studentGroup"}
            setData={setData}
          ></UploadCsv>

          <Form.Item>
            <Button block size="large" type="primary" htmlType="submit">
              Submit
            </Button>
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

export default CreateStudentGroup;
