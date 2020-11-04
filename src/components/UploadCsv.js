import React from "react";
import { Card, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Api from "../api";

const UploadCsv = ({ pageTitle, supportedFormats, endpoint, setData }) => {
  const props = {
    name: "file",
    action: `${Api.API_URL}/uploadcsv/${endpoint}`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      const onChange = async () => {
        const msg = await Api.onFileChange(info);
        setData(msg);
      };
      onChange();
    },
  };

  return (
    <Card>
      <Upload {...props}>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
        <span style={{ marginLeft: 16 }}>{supportedFormats}</span>
      </Upload>
    </Card>
  );
};

export default UploadCsv;
