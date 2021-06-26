import * as S from "./Aside.styles";
import Image from "next/image";
import colors from "../styles/colors";

//icons
import { PieChartAlt2 } from "@styled-icons/boxicons-solid/PieChartAlt2";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { Dollar } from "@styled-icons/boxicons-regular/Dollar";
import { MoneyBillWaveAlt } from "@styled-icons/fa-solid/MoneyBillWaveAlt";
import { News } from "@styled-icons/boxicons-regular/News";
import { Timer } from "@styled-icons/fluentui-system-filled/Timer";
import { TrendingUpOutline } from "@styled-icons/evaicons-outline/TrendingUpOutline";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";
import { Comments } from "@styled-icons/fa-regular/Comments";

const Aside = () => {
  return (
    <S.WrapperAside>
      <Image
        src="/images/logo-branca.png"
        width={600}
        height={145}
        alt="Your Name"
      />
      <S.Wrapperlist style={{ color: colors.white }}>
        <S.ContainerItem>
          <PieChartAlt2 size="20" />
          <S.Item>Posição Financeira</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <HomeAlt size="20" />
          <S.Item>2ª Via de Boleto</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <Dollar size="20" />
          <S.Item>Extrato Financeiro</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <MoneyBillWaveAlt size="20" />
          <S.Item>Fluxo de Pagamento</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <News size="20" />
          <S.Item>Informe de Rendimento</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <Timer size="20" />
          <S.Item>Antecipação de Parcelas</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <TrendingUpOutline size="20" />
          <S.Item>Andamento de Obra</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <InfoCircle size="20" />
          <S.Item>Fac</S.Item>
        </S.ContainerItem>

        <S.ContainerItem>
          <Comments size="20" />
          <S.Item>Comunicação</S.Item>
        </S.ContainerItem>
      </S.Wrapperlist>
    </S.WrapperAside>
  );
};

export default Aside;
