import './Blog.css'
import BlogCard from '../Components/BlogCard';
import blogData from '../Database/blogDatabase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../Store/paginationSlice';
import { RootState } from '../types';

function Blog() {

  const { page } = useParams();
  
  const dispatch = useDispatch();
  const itemsPerPage = 9;
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  useEffect(() => {
    dispatch(updateCurrentPage(Number(page) || 1));
  }, [dispatch, page]);

  const paginatedData = blogData.slice((currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage)
  

  return (
    <div>
      <Pagination 
        child={Math.ceil(blogData.length / itemsPerPage)} 
        type="blog" 
      />
        <div className="blogContainer">
          {paginatedData.map((item) => (
            <BlogCard item={item} key={item.id}/>
          ))}

        </div>      
    </div>
  );
}

export default Blog;
