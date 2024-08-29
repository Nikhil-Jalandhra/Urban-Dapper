import { useParams } from "react-router-dom";
import blogData from "../Database/blogDatabase";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GiSpy } from "react-icons/gi";
import "./BlogSummary.css"

function BlogSummary() {

    const {blogId} = useParams()

    const blogDetails = blogData.find((item)=> (item.id === Number(blogId)))
  return (
    <div>
        <div className="blogHeroContainer">
            <div className="blogHeroImageContainer">
                <img className="blogHeroImage" src={blogDetails?.image1} alt={blogDetails?.title1} />
            </div>
            <div className="blogHeroDetailsContainer">
                <p className="blogAuthour" >By <span>{blogDetails?.author}</span> {blogDetails?.date}</p>
                <h2>{blogDetails?.title1}</h2>
                <p className="blogParagraph">{blogDetails?.description1}</p>
                <h2>{blogDetails?.title2}</h2>
                <p className="blogParagraph">{blogDetails?.description2}</p>
                <div className="blogCoStar">
                    <div className="blogCoStar1">
                        <img className="blogCoStarImages" src={blogDetails?.image1} alt={blogDetails?.title2} />
                    </div>
                    <div className="blogCoStar2">
                        <img className="blogCoStarImages" src={blogDetails?.image1} alt={blogDetails?.title3} />
                    </div>
                </div>
                <h2>{blogDetails?.title3}</h2>
                <p className="blogParagraph">{blogDetails?.description3}</p>
                <div className="blogFooterContainer">
                    <div className="blogLastLine"></div>
                    <div className="blogLastLineDetails">
                        <p>At last:&nbsp;<span>MEN</span>&nbsp;WILL&nbsp; <span>be</span>&nbsp;Men&nbsp;<span><GiSpy/></span></p>
                        <div className="blogSocialIcon">
                            <h4>Follow me:</h4>
                            <p><FaGithub /></p>
                            <p><FaLinkedin /></p>
                            <p><RiTwitterXFill /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BlogSummary;
