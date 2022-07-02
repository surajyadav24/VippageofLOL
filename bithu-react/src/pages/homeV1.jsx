import React, { Suspense, lazy } from "react";
import { useModal } from "../utils/ModalContext";
import loadable from '@loadable/component'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
<<<<<<< HEAD
import Layout from "../common/layout/Layout"
const Banner = lazy(() => import("../components/section/banner/v1"));
// import Footer from "../components/section/footer/v1";
// import Footer from "../components/section/footer/v1";
// import MintNowModal from "../common/modal/mintNowModal";
// import WalletModal from "../common/modal/walletModal/WalletModal";
=======
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
<<<<<<< HEAD
=======
>>>>>>> a431f61496e3325178ca1cfc7c93ad49d10251f3
// import Smartcontract from "../components/section/smartcontract/Smartcontract";
>>>>>>> 579a5b6d4de37c75086e04b716254bed1760eaea
const Footer = loadable(() => import('../components/section/footer/v1'))
const HomeV1 = () => {
  const { visibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Banner />
      </Suspense>
      <Footer />
    </Layout>
  );
};

export default HomeV1;
