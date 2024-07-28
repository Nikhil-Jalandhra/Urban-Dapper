import aboutHeroImg from "../../Public/pageImages/aboutHeroImg.jpg"
import OurStory from "../Components/OurStory";
import OurTeam from "../Components/OurTeam";
import './About.css'

function About() {
  return (
    <div>

      <div className="aboutImageContainer">
        <img src={aboutHeroImg} className="aboutImage" alt="" />
      </div>

      {/* Our story */}

      <OurStory/>

      {/* Carousel */}

      <div className="aboutCarouselContainer">

        <div className="aboutCarousel">
          
          <div className="aboutCarouselAnimation">
            <p>
              URBAN-DAPPER
            </p>
            <p>
              URBAN-DAPPER
            </p>
          </div>
          <div className="aboutCarouselAnimation">
            <p>
              URBAN-DAPPER
            </p>
            <p>
              URBAN-DAPPER
            </p>
          </div>

        </div>
      </div>

      {/* Our team */}

      <OurTeam/>
      

    </div>
  );
}

export default About;
