import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

const Loading = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  justify-content: center;
  align-items: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
`;

export default Loading;
