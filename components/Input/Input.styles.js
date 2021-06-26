import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";

export const Input = styled.input`
  margin: 0 0 0.5rem 0;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${colors.lighter};
  border-top: none;
  width:100%;
  padding: 0.5rem 0;

  &:focus {
    outline: none !important;
    border-color: 0;
  }
  ::-webkit-input-placeholder {
    color: ${colors.lighter};
    font-family: ${tipography.roboto};
  }
`;
