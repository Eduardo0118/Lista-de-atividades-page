import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #1c1c1c;
  position: fixed;
  align-items: center;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  top: 0;
  left: -250px;
  height: 100vh;
  width: 250px;
  padding-top: 3.5rem;
  transition: transform 0.25s ease-in-out;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  display: flex;
  padding: 10px 15px;
  position: relative;
  top: 15px;
  align-items: center;
  transition: 0.6s;

  &:hover {
    color: #000;
    background-color: #fff;
    border-radius: 10px;
  }
`;
