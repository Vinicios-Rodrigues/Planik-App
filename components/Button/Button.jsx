import * as S from "./Button.styles";

const Button = ({ texto }) => {
  return (
    <a href="/">
      <S.Button>{texto}</S.Button>
    </a>
  );
};
export default Button;
