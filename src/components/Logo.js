import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { APP_TITLE } from "../constants";

const Logo = ({ collapsed }) => (
  <StyledLogo>
    <Link to="/">
      <img src={logo} alt="logo" />
      {!collapsed ? <h1>{APP_TITLE}</h1> : null}
    </Link>
  </StyledLogo>
);

Logo.protoTypes = {
  collapsed: PropTypes.bool.isRequired,
};

const StyledLogo = styled.div`
  position: relative;
  padding: 0 24px;
  overflow: hidden;
  background: #001529;
  cursor: pointer;
  transition: all 0.3s;
  a {
    display: flex;
    align-items: center;
    height: 64px;
  }
  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    vertical-align: middle;
    animation: fade-in;
    animation-duration: 0.3s;
  }
`;

export default Logo;
