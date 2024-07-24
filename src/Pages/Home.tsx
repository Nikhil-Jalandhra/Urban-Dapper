import homeImage from "../../Public/pageImages/homeImage1.jpg"
import "./Home.css"

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

        <div className="ourStorySection">
            <h1 className="ourStoryHeading">Our Story</h1>
            <div className="ourStoryParaContainer">
                <p className="ourStoryPara">
                Welcome to URBAN-DAPPER, where style meets sophistication. Born from a passion for timeless menswear, we curate collections that blend urban flair with dapper elegance. Our commitment to quality craftsmanship and modern trends ensures every piece embodies confidence and class. Join us in defining contemporary men's fashion, tailored for the discerning individual who values both style and substance.
                </p>
                <p className="ourStoryPara">
                we redefine men's fashion through innovation and meticulous attention to detail. Our commitment to quality craftsmanship and seamless user experience reflects in every garment. Step into style with confidence - experience the essence of sophistication with "URBAN-DAPPER".
                </p>
            </div>
        </div>

    </div>
  );
}

export default Home;