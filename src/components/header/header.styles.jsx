import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkCss = css`
  color: #000;
  text-decoration: none;
  font-size: larger;
  padding: 5px 20px;
  margin: auto 10px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #f1efef;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export const LogoText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const NavLinksContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
`;

export const NavLink = styled(Link)`
  ${LinkCss}
`;

export const DivLink = styled.div`
  ${LinkCss}
`;
