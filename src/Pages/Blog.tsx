import './Blog.css';
import BlogCard from '../Components/BlogCard';
import blogData from '../Database/blogDatabase';

function Blog() {
  return (
    <div>
      <div className="blogContainer">
          {blogData.map((item) => (
            <BlogCard item={item} key={item.id}/>
          ))}
      </div>      
    </div>
  );
}

export default Blog;
