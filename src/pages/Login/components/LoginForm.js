import React, { useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Api from "../../../api";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { setAuthUser } = useContext(UserContext);

  const onFinish = async (values) => {
    try {
      setSubmitting(true);
      setErrorMessage("");

      const { user } = await Api.login(values.username, values.password);
      console.log(user);
      setSubmitting(false);
      setAuthUser(user);

      localStorage.setItem("@user", JSON.stringify(user));
      localStorage.setItem("@role", JSON.stringify(user.role));
      localStorage.setItem("@userid", JSON.stringify(user._id));
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
    <Form
      name="basic"
      initialValues={{ username: "admin", password: "admin", remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {errorMessage ? (
        <Form.Item>
          <Alert message={errorMessage} type="error" />
        </Form.Item>
      ) : null}

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item name="signup">
        <Link to="/signup">Not Registered ? Signup Here </Link>
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

export default LoginForm;
