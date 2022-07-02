import React, { Suspense, lazy } from "react";
import { useModal } from "../utils/ModalContext";
import loadable from '@loadable/component'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout/Layout"
const Banner = lazy(() => import("../components/section/banner/v1"));
const Footer = loadable(() => import('../components/section/footer/v1'));

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
