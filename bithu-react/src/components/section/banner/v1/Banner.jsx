import { useModal } from "../../../../utils/ModalContext";
import BannerV1Wrapper from "./Banner.style";
import Mintbutton from "../../mintbutton/Mintbutton";
import Vippass from"../../../../assets/images/vippass/vippass.png"
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
              {/* <h2>Claim your Lordship</h2> */}
             
              <h5>

                <span className="footer_shapes_right">
                  <img src={sectionTitleShape2} alt="bithu nft footer" />
                </span>
                Claim your Guaranteed  Whitelisting vip pass
                <span className="shape_left"><img src={sectionTitleShape} /></span>
              </h5>
              <h2>
              Only 200 pass Available
              </h2>
              <div className="vip-pass">
                <img src={Vippass} alt="" />
              </div>
            </div>
            <Mintbutton />
          </div>

        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
