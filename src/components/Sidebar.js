import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  ProfileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import { AppContext } from "../contexts/AppContext";
import { SIDEBAR_WIDTH } from "../constants";
import styled from "styled-components";

const Sidebar = () => {
  const { sidebar } = useContext(AppContext);
  const { collapsed, setCollapsed } = sidebar;

  const { SubMenu } = Menu;

  return (
    <Layout.Sider
      width={SIDEBAR_WIDTH}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Logo collapsed={collapsed} />

      <Menu theme="" mode="inline" style={{ padding: "16px 0" }}>
        <Menu.Item key="subject">
          <Link to="/subjects">
            <ProfileOutlined />
            <span>Subjects</span>
          </Link>
        </Menu.Item>

        <SubMenu key="sub1" title="Students">
          <Menu.Item key="addstudentgroups">
            <Link to="/addStudentsGroups">
              <ProfileOutlined />
              <span>Add Students Group</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="viewstudentsgroup">
            <Link to="/studentgroups">
              <ProfileOutlined />
              <span>View Student Group</span>
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" title="Quiz">
          <Menu.Item key="addquizsettings">
            <Link to="/addquizsettings">
              <ProfileOutlined />
              <span>General Settings</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="questionmanager">
            <Link to="/questionmanager">
              <ProfileOutlined />
              <span>Question Manager</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="questionorder">
            <Link to="/questionorder">
              <ProfileOutlined />
              <span>Question Orders</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="quizsharing">
            <Link to="/quizsharing">
              <ProfileOutlined />
              <span>Quiz Sharing</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="quizgradandsummary">
            <Link to="/quizgradandsummary">
              <ProfileOutlined />
              <span>Quiz Grad And Summary</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="quizinstruction">
            <Link to="/quizinstruction">
              <ProfileOutlined />
              <span>Quiz Instruction</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="timersettings">
            <Link to="/timersettings">
              <ProfileOutlined />
              <span>Timer Setting</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

Sidebar.Trigger = ({ collapsed, onCollapse }) => {
  return (
    <StyledTrigger onClick={() => onCollapse(!collapsed)}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </StyledTrigger>
  );
};

const StyledTrigger = styled.div`
  height: 64px;
  width: 64px;
  padding: 0 24px;
  font-size: 20px;
  transition: all 0.3s, padding 0s;
  cursor: pointer;
`;

export default Sidebar;
