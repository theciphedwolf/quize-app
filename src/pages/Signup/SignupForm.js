import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Alert, Select } from "antd";
import { Link } from "react-router-dom";
import Api from "../../api";

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await Api.getAll("subjects");
      setSubjects(response.data.data);
      console.log(response.data.data);
    };
    fetchItem();
  }, subjects);

  const onFinish = async (values) => {
    try {
      setSubmitting(true);
      setErrorMessage("");
      console.log(values);
      const res = await Api.signup(values);
      console.log(res);
      setSubmitting(false);
      //setAuthUser(user);
      localStorage.setItem("@token", JSON.stringify(res.token));
    } catch (error) {
      setSubmitting(false);
      onFinishFailed(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.message);
    setErrorMessage(errorInfo.message);
  };

  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {errorMessage ? (
        <Form.Item>
          <Alert message={errorMessage} type="error" />
        </Form.Item>
      ) : null}

      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="FirstName" />
      </Form.Item>

      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="LastName" />
      </Form.Item>

      <Form.Item
        name="mobileNumber"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="mobile" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item name="subject">
        <Select placeholder="subject">
          {subjects.map((item) => (
            <option value={item.title}>{item.title}</option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="schoolType">
        <Select placeholder="school">
          <option value="govt. school">Govt. School</option>
          <option value="pvt. school">Pvt. School</option>
          <option value="pvt. Teacher">Pvt. Teacher</option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="passwordConfirm"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Link to="/login">Already Registered ? Login Here </Link>
      </Form.Item>

      <Form.Item name="terms" valuePropName="checked">
        <Checkbox>Agree With Terms</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          block
          size="large"
          type="primary"
          htmlType="submit"
          loading={submitting}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
