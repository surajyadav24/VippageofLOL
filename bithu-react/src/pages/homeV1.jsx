
import { useModal } from "../utils/ModalContext";
import loadable from '@loadable/component'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
<<<<<<< HEAD
=======
// import Smartcontract from "../components/section/smartcontract/Smartcontract";
>>>>>>> 579a5b6d4de37c75086e04b716254bed1760eaea
const Footer = loadable(() => import('../components/section/footer/v1'))
const HomeV1 = () => {
  const { visibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <Banner />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
