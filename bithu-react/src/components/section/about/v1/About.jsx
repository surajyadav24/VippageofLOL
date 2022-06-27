
import AboutInfoCardList from "../aboutInfoCardList";

import data from "../../../../assets/data/about/aboutv1";
import sectionTitleShape from "../../../../assets/images/icon/title_shapes.svg";
import sectionTitleShape2 from "../../../../assets/images/icon/title_shapes2.svg";
import AboutStyleWrapper from "./About.style";
import lords from "../../../../assets/images/lords/3lords.png"

const About = () => {
  const { } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row d-flex flex-wrap-reverse ">
          
          <div className="col-md-12">
            <div className="v1_about_us_right_sect">
       {/* <div className="heading-abt1"><img src={sectionTitleShape} alt="" />
       About us<img src={sectionTitleShape2} alt="" /></div> */}
              <div className="v1_about_us_right_text">
                {/* <p>
                Welcome to the World of Future Billionaires

                </p>
                <p>
                LOL is a utility-driven metaverse ecosystem allowing its NFT holders to monetize their virtual lands and earn monthly rentals. LOL Metaverse is built on unity & powered by Ethereum blockchain, will be available on Web, IOS, Android as well as VR Apps.

                </p>
                <p>
                  
In the project’s first presale, Lords of the Lands is bringing a Collection of 255 Lords and 300 Land NFTs. 

                </p>
                <p>
                To become the VVIP Whitelister, Mint your whitelisting spot today!

                </p>
                <p>
                Our VVIP Whitelisters will not only have guaranteed access to the genesis mint of both Land and Lord NFT at a discounted mint price but will also enjoy unlimited perks in the LOL universe.

                </p> */}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="v1_about_us_left_sect sm-mt-60">
<img src={lords} alt="" />
           
            </div>
          </div>
        </div>
        {/* about card  */}

      </div>
    </AboutStyleWrapper>
  );
};

export default About;
