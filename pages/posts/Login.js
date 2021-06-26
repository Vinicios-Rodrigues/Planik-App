import HeadHtml from "../../components/Head/Head";
import Header from "../../components/Header/Header";
import MainLogin from "../../components/MainLogin/MainLogin";
import Layout from "../../components/Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <HeadHtml />
      <Header text="menu" />
      <MainLogin />
    </Layout>
  );
};

export default Login;