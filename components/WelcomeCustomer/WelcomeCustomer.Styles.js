import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export const WelcomeCustomer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0 6px 7px -6px #d4d4d9;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 3rem;
  color: ${colors.dark};
  font-family: ${tipography.roboto};
  font-size: 1.1rem;
  font-weight: bolder;
`;

export const SubTitle = styled.h2`
  color: ${colors.dark};
  font-family: ${tipography.roboto};
  font-size: 0.9rem;
`;

export const boxIcon = styled.div`
  margin: 0 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Users = styled(BiUserCircle)`
  font-size: 2rem;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 1.5rem;
  color: ${colors.pink};
`;