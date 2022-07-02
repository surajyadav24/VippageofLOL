
import { useModal } from "../utils/ModalContext";
import loadable from '@loadable/component'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";


// import Footer from "../components/section/footer/v1";
// import Footer from "../components/section/footer/v1";
// import MintNowModal from "../common/modal/mintNowModal";
// import WalletModal from "../common/modal/walletModal/WalletModal";
import Banner from "../components/section/banner/v1";
// import Smartcontract from "../components/section/smartcontract/Smartcontract";
const Footer = loadable(() => import('../components/section/footer/v1'))
const HomeV1 = () => {
  const { visibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      {/* {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />} */}
      <Header />
      <Banner />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
