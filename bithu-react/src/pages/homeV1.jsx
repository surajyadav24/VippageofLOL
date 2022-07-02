
import { useModal } from "../utils/ModalContext";
import loadable from '@loadable/component'
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
const Footer = loadable(() => import('../components/section/footer/v1'))
const About = loadable(() => import('../components/section/about/v1'))
const HomeV1 = () => {
  const { visibility, walletModalvisibility } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <Banner />
    
    
      <About />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
