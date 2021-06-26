import * as S from "./BoxRight.styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import EsqueciSenha from "../EsqueciSenha/EsqueciSenha";

const BoxRight = ({ title }) => {
  return (
    <S.Wrapper>
      <S.BoxText>
        <S.Title>{title}</S.Title>
        <S.Text>
          Um espaço pensado exclusivo para <br /> você, Cliente!
        </S.Text>
      </S.BoxText>
      <S.BoxInput>
        <Input tipo="text" placeHolder="Login" />
        <Input tipo="password" placeHolder="Senha" />
        <EsqueciSenha texto="esqueci minha senha" />
      </S.BoxInput>
      <Button texto="Login" />
    </S.Wrapper>
  );
};
export default BoxRight;
