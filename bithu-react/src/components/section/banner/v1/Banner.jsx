import { useModal } from "../../../../utils/ModalContext";
import BannerV1Wrapper from "./Banner.style";
import Mintbutton from "../../mintbutton/Mintbutton";
import SectionTitle from "../../../../common/sectionTitle";
import sectionTitleShape from "../../../../assets/images/icon/title_shapes.svg";
import sectionTitleShape2 from "../../../../assets/images/icon/title_shapes2.svg";

const Banner = () => {
  const { mintModalHandle } = useModal();
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="lolbanner-con">
              <h2>FINALLY... An NFT Collection with REAL UTILITY</h2>
             
              <h5>

                <span className="footer_shapes_right">
                  <img src={sectionTitleShape} alt="bithu nft footer" />
                </span>
                VVIP List Perks
                <span className="shape_left"><img src={sectionTitleShape2} /></span>
              </h5>
            </div>
            <Mintbutton />
          </div>

        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
