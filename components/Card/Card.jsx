import * as S from "./Card.Styles";
import Image from "next/image";
import imoveis from "./imoveis";
const Card = () => {
  return (
    <>
      <S.Over>Overview</S.Over>

      <S.Content>
        <S.Card>
          <Image src="/images/Grafico.png" width={600} height={639} />
        </S.Card>
        <S.Card>
          <S.Title>Ultimos Comunicados</S.Title>
          <S.ContainerItem>
            <S.P>Lorem ipsum dolor sit met...</S.P>
            <S.Icons size="25" />
          </S.ContainerItem>
          <S.ContainerItem>
            <S.P>Lorem ipsum dolor sit met...</S.P>
            <S.Icons size="25" />
          </S.ContainerItem>
          <S.ContainerItem>
            <S.P>Lorem ipsum dolor sit met...</S.P>
            <S.Icons size="25" />
          </S.ContainerItem>

          <S.SubTitle>Ver mais Comunicados</S.SubTitle>
        </S.Card>
        <S.Card3>
          <S.Title>Meu Imóvel</S.Title>

          {imoveis.map((item) => (
            <S.Li>{item.imovel} </S.Li>
          ))}

          <S.SubTitle>Ver mais detalhes</S.SubTitle>
        </S.Card3>
        <S.Card4>
          <Image src="/images/TimeLine.png" width={1108} height={245} />
        </S.Card4>
      </S.Content>
    </>
  );
};

export default Card;
