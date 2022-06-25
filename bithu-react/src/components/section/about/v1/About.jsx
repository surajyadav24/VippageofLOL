import SectionTitle from "../../../../common/sectionTitle";

import AboutInfoCardList from "../aboutInfoCardList";

import data from "../../../../assets/data/about/aboutv1";
import aboutThumb1 from "../../../../assets/images/nft/about_us_img1.png";
import aboutThumb2 from "../../../../assets/images/nft/about_us_img2.png";
import AboutStyleWrapper from "./About.style";
import land from "../../../../assets/images/lands/Lands 02.png"

const About = () => {
  const { } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="ABOUT US" subtitle=" " />
              <div className="v1_about_us_right_text">
                <p>

                  Lords Of The Lands is a metaverse of the futuristic medieval era ruled by the Billionaires of the world called, Lords who come to this metaverse to claim their Lordship in the form of Land NFTs where the future of Entertainment, Music Festivals, Sports will come together.

                  LOL is built on the Ethereum Blockchain and can be accessed through Website, Android & IOS Apps and Virtual Reality Apps.

                  LOL is on a mission to create utilities in the Metaverse space and make Music, shopping, Entertainment accessible to millions of Users sitting at the comfort of their homes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
<img src={land} alt="" />
           
            </div>
          </div>
        </div>
        {/* about card  */}

      </div>
    </AboutStyleWrapper>
  );
};

export default About;
