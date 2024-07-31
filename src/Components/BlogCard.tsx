import { Link } from 'react-router-dom';
import './BlogCard.css'

function BlogCard({item}) {

  return (
    <div>
      <Link to={`/blog/${item.id}/${item.title1}`}>
      <div className='blogCardContainer'>
        <div className='blogImageContainer'>
            <img className='blogImage' src={item.image1} alt={item.title1} />
        </div>
          <div className='blogDetailsContainer'>
            <p>By <span>{item.author}</span> \ {item.date}</p>
            <h2>{item.title1.slice(0,25)}...</h2>
            <p>{item.description1.slice(0,160)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
