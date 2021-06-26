import styled from "styled-components";
import size from "../styles/size";
import tipography from "../styles/tipography";

export const Wrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const BoxText = styled.div`
  margin: 0;
  width: 60%;
`;

export const BoxInput = styled.div`
  width: 60%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: bolder;
  font-family: ${tipography.roboto};
  font-size: ${size.regular};
`;

export const Text = styled.p`
  margin: 0.3rem 0 1rem 0;
  font-weight: bolder;
  font-family: ${tipography.roboto};
  font-size: ${size.smaller};
`;
