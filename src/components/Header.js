import React, { useContext } from "react";
import { Layout, Menu, Dropdown } from "antd";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";
import { UserContext } from "../contexts/UserContext";
import Api from "../api";

const Header = () => {
  const { sidebar } = useContext(AppContext);
  const { setAuthUser } = useContext(UserContext);
  const { collapsed, setCollapsed } = sidebar;

  const menu = (
    <Menu>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item
        onClick={() => {
          setAuthUser(null);
          Api.logout();
        }}
      >
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Sidebar.Trigger collapsed={collapsed} onCollapse={setCollapsed} />
      <Dropdown overlay={menu}>
        <AdminButton>
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            alt="profile"
          />
          <span>
            {JSON.parse(localStorage.getItem("@user")).firstName +
              " " +
              JSON.parse(localStorage.getItem("@user")).lastName}
          </span>
        </AdminButton>
      </Dropdown>
    </Container>
  );
};

const Container = styled(Layout.Header)`
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 100;
`;

const AdminButton = styled.div`
  display: flex;
  padding: 0 24px;
  align-items: center;
  cursor: pointer;
  img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

export default Header;
