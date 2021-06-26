import styled from "styled-components";
import colors from "../styles/colors";

export const Wrapper = styled.div`
  background: ${colors.light};
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;
