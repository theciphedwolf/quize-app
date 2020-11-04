import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
import { APP_TITLE } from "../../constants";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <Container>
      <Content>
        <Top>
          <Header>
            <Link to="/">
              <Logo alt="logo" src={logo} />
              <Title>{APP_TITLE}</Title>
            </Link>
          </Header>

          <Desc>Signup</Desc>
        </Top>

        <Main>
          <SignupForm />
        </Main>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
`;

const Content = styled.div`
  flex: 1;
  padding: 32px 0;
`;

const Top = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Header = styled.div`
  height: 44px;
  line-height: 44px;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  height: 44px;
  margin-right: 16px;
  vertical-align: top;
`;

const Title = styled.span`
  position: relative;
  top: 2px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
  font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
`;

const Desc = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

const Main = styled.div`
  width: 368px;
  margin: 0 auto;
`;

export default Signup;
