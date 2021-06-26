import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";

export const WrapperAside = styled.aside`
  background: ${colors.dark};
  width: 100%;
  height: 90%;
`;

export const Wrapperlist = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 35px;
`;

export const ContainerItem = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-bottom: 40px;
  margin-left: 1rem;
  color: ${colors.white};
  font-family: ${tipography.roboto};
`;

export const Content = styled.a`
  text-decoration: none;
`;
