import Head from "next/head";
import { GlobalStyle } from "../components/styles/globalStyles";
import Aside from "../components/Aside/Aside";
import Wrapper from "../components/Wrapper/Wrapper";
import Total from "../components/Total/Total";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Portal do Cliente</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Aside />
        <Total />
      </Wrapper>
    </>
  );
}
