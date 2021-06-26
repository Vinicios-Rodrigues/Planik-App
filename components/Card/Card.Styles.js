import styled from "styled-components";
import colors from "../styles/colors";
import tipography from "../styles/tipography";
import { KeyboardArrowRight } from "@styled-icons/material-outlined/KeyboardArrowRight";

export const Content = styled.section`
  display: grid;
  height: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-items: center;
  gap: 20px;
  margin: 0 40px;
`;

export const Card = styled.div`
  background: ${colors.white};
  width: 100%;
  height: auto;
`;

export const Card3 = styled.div`
  grid-area: 1 / 3 /4 /3;
  width: 100%;
  height: 87%;
  background: ${colors.white};
`;

export const Card4 = styled.div`
  width: 100%;
  height: 70%;
  background: ${colors.white};
  grid-area: 2 / 1 / 4 / 3;
`;

export const Li = styled.p`
  margin: 20px 0 40px 20px;
  font-family: ${tipography.roboto};
  color: ${colors.dark};
  list-style: none;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px solid ${colors.light};
`;

export const Title = styled.h3`
  text-align: left;
  font-family: ${tipography.roboto};
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;
  border-bottom: 0.5px solid ${colors.light};
`;

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  justify-selfie: center;
`;

export const SubTitle = styled.h4`
  font-family: ${tipography.roboto};
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: ${colors.primary};
  padding: 1rem;
  border-top: 0.5px solid ${colors.light};
`;

export const P = styled.p`
  margin: 20px 0 40px 20px;
  color: ${colors.dark};
  font-family: ${tipography.roboto};
`;

export const Icons = styled(KeyboardArrowRight)`
  color: ${colors.pink};
  margin: 0 0 20px 10px;
`;

export const Over = styled.h2`
  font-family: ${tipography.roboto};
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.5rem;
  margin: 0 0 1rem 3rem;
  vertical-align: bottom;
  text-align: left;
`;
