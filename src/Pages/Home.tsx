import homeImage from "../../Public/pageImages/homeImage1.jpg"
import "./Home.css"
import OurStory from "../Components/OurStory";

function Home() {
  return (
    <div>

        {/* Home display image */}

        <div className="homeImageContainer">
            <img src={homeImage} alt="Clothes Image" className="homeImage" />
        </div>

        {/* Home image text */}

        <div className="homeTextContainer">

            <div className="homeTextContainerHeading">
                <h2 className="homeHeadingText">Crafted</h2>
            </div>

            <div className="homeTextContainerHeading2">
                <h2 className="homeHeadingText2">for Confidence</h2>
            </div>

        </div>

        {/* Our story */}

        <OurStory/>

    </div>
  );
}

export default Home;