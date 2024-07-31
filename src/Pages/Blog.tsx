import './Blog.css'
import BlogCard from '../Components/BlogCard';
import blogData from '../Database/blogDatabase';

function Blog() {
  return (
    <div>
        <div className="blogContainer">
          {blogData.map((item,index) => (
            <BlogCard item={item} key={index}/>
          ))}

        </div>      
    </div>
  );
}

export default Blog;
