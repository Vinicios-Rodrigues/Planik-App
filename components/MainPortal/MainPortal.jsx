import * as S from "./MainPortal.styles";

const MainPortal = () => {
  return (
    <S.Main>
      <S.Title className="title">
        Bem Vindo, {""}
        <S.Ancora href="http://localhost:3000/posts/Login">
          João Paulo :{")"}
        </S.Ancora>
      </S.Title>
    </S.Main>
  );
};

export default MainPortal;
