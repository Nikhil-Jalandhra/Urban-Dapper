import { Link } from 'react-router-dom';
import './BlogCard.css'

interface blogCardData {
  item: { 
    id: number; 
    author: string; 
    date: string; 
    title1: string; 
    title2: string; 
    title3: string; 
    description1: string; 
    description2: string; 
    description3: string; 
    image1: string; 
    image2: string; 
    image3: string; 
  }; 
}

function BlogCard({item}: blogCardData) {

  return (
    <div>
      <Link to={`/blog/${item.id}/${item.title1}`}>
      <div className='blogCardContainer'>
        <div className='blogImageContainer'>
            <img className='blogImage' src={item.image1} alt={item.title1} />
        </div>
          <div className='blogDetailsContainer'>
            <p className='blogMeta'>By <span>{item.author}</span> \ {item.date}</p>
            <h2 className="blogTitle clamp-1" >{item.title1}</h2>
            <p className="blogDescription clamp-4" >{item.description1}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
