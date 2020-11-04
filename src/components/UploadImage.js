import React from "react";
import { Card, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Api from "../api";

const UploadImage = ({ pageTitle, supportedFormats, endpoint, setData }) => {
  const props = {
    name: "file",
    //action: `${Api.API_URL}/uploadcsv/${endpoint}`,
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
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={this.handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </Card>
  );
};

export default UploadImage;
