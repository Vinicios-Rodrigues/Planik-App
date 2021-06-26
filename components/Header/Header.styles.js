import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";
import size from "../styles/size";

export const Header = styled.header`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  background: ${colors.white};
  box-shadow: 0 6px 7px -6px #d4d4d9;
`;

export const WrapperMenu = styled.nav`
  display: flex;
  align-items: center;
  width: 30%;
  background: ${colors.dark};
`;

export const Text = styled.p`
  color: ${colors.white};
  font-family: ${tipography.roboto};
  font-size: ${size.smaller};
  font-weight: bold;
  text-transform: uppercase;
`;
