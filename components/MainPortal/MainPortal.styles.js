import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";

export const Main = styled.section`
  padding: 50px 0;
`;

export const Title = styled.h1`
  color: ${colors.pink};
  text-align: center;
  font-size: 2rem;
  font-family: ${tipography.roboto};
`;

export const Ancora = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-family: ${tipography.roboto};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
  &:visited {
    color: ${colors.dark};
  }
`;


