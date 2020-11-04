import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Dashboard = () => {
  return (
    <StyledLayout>
      <Sidebar />

      <Layout className="site-layout">
        <Header />

        <Layout.Content>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/neworders" component={Home} />
            <Route path="/dispatchedorders" component={Home} />
            <Route path="/completedorders" component={Home} />
            <Route path="/returnedorders" component={Home} />
            <Route path="/drivers" component={Home} />
            <Route path="/vendors" component={Home} />
          </Switch>
        </Layout.Content>

        <Layout.Footer>
          {/* Ant Design ©2018 Created by Ant UED */}
        </Layout.Footer>
      </Layout>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export default Dashboard;
