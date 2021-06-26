import * as S from "./WelcomeCustomer.Styles";
import Notification from "../Notification/Notification";
import Setting from "../Settings/Settings";

const WelcomeCustomer = ({ Title, SubTitle }) => {
  
  return (
    <S.WelcomeCustomer>
      <S.Title>{Title}</S.Title>
      <S.Nav>
        <Setting />
        <Notification />
        <S.SubTitle>{SubTitle}</S.SubTitle>
        <S.boxIcon>
          <S.ArrowDown />
          <S.Users />
        </S.boxIcon>
      </S.Nav>
    </S.WelcomeCustomer>
  );
};

export default WelcomeCustomer;