import Image from "next/image";
import BoxRight from "../BoxRight/BoxRight";
import * as S from "./Main.styles";

const MainLogin = () => {
  return (
    <S.Main>
     <Image 
        src="/images/capa.png"
        width={600}
        height={600}
        alt="Your Name" />
      <BoxRight title="Meu Portal Planik." />
    </S.Main>
  );
};

export default MainLogin;