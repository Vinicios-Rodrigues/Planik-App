import * as S from "./Total.styles";
import WelcomeCustomer from "../WelcomeCustomer/WelcomeCustomer";
import MainPortal from "../MainPortal/MainPortal";
import Card from "../Card/Card";

const Total = () => {
  return (
    <S.Wrapper>
      <WelcomeCustomer Title="Portal do Cliente" SubTitle="João Paulo" />
      <MainPortal />
     <Card />
    </S.Wrapper>
  );
};

export default Total;