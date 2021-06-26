import Hamburger from "hamburger-react";
import Image from "next/image";
import * as S from "./Header.styles";

const Header = ({ text }) => {
  return (
    <S.Header>
        <Image
          src="/images/logoPreta.png"
          width={200}
          height={145}
          alt="Your Name"
        />
      <S.WrapperMenu>
        <Hamburger size={20} color="white" />
        <S.Text>{text}</S.Text>
      </S.WrapperMenu>
    </S.Header>
  );
};

export default Header;