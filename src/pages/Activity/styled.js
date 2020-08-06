import styled from "styled-components";
import { Link } from "react-router-dom";

import { Check } from "@styled-icons/boxicons-regular/Check";

export const ActivityWrapper = styled.nav`
  width: 40vh;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 4px 4px #000;
  display: flex;
  align-items: center;
  position: fixed;
  top: 10vh;
  flex-flow: column nowrap;
`;

export const ActivityContainer = styled.ul``;

export const ActivityItem = styled.li`
  .active {
    color: #1fa1f2;
  }
`;

export const ActivityTitle = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #333333;
  position: relative;
  top: 15px;
  margin: 13px;
  transition: 0.7s;

  &:hover {
    color: #ff8c00;
  }
`;

export const ActivityIcon = styled(Check)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
