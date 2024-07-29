import "./OurTeam.css"
import heroImg from "../../Public/pageImages/heroImg.jpg"
import { RiVerifiedBadgeFill } from "react-icons/ri";

function OurTeam() {
  return (
    <div>
      <div className="ourTeamContainer">
        <h1>Our Team</h1>
        <div className="ourTeamParaContainer">
          <p>"Meet our Developer—an architect of diligence and creativity. Their code seamlessly merges elegance with functionality, delivering impeccable user experiences. Humble yet visionary, they thrive on collaboration, diligently integrating feedback to refine projects. With each line meticulously crafted, they embody teamwork, propelling excellence and innovation."</p>
        </div>

        <div className="ourTeamHeroImgContainer">
          <img src={heroImg} className="ourTeamHeroImg" alt="heroImg" />
        </div>
        <p className="ourTeamName">Nikhil Jalandhra</p>
        <p className="ourTeamPost"><span><RiVerifiedBadgeFill /></span>Developer</p>

      </div>
    </div>
  );
}

export default OurTeam;
