import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage } from "../Store/paginationSlice";
import { Link } from "react-router-dom";
import { PaginationProps, RootState } from "../types";

/**
 * @param {Object} props
 * @param {number} props.child - Total number of pages
 * @param {string} props.category - Category name for shop OR "" for blog
 * @param {'shop' | 'blog'} props.type - To determine route structure
 */
function Pagination({ child, category = "", type = "shop" }: PaginationProps) {
  const totalPages = child;
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  const pagesPerGroup = 10;
  const currentPageGroupIndex = Math.floor((currentPage - 1) / pagesPerGroup);

  const groupStartPage = currentPageGroupIndex * pagesPerGroup + 1;
  const groupEndPage = Math.min(groupStartPage + pagesPerGroup - 1, totalPages);

  // 🔧 Route Builder
  const getRoute = (pageNumber: number) => {
    return type === "blog"
      ? `/blog/${pageNumber}`
      : `/shop/${category}/${pageNumber}`;
  };

  const renderPages = () => {
    const pages = [];
    for (let i = groupStartPage; i <= groupEndPage; i++) {
      pages.push(
        <Link to={getRoute(i)} key={i}>
          <button
            className={`page-btn ${i === currentPage ? "active" : ""}`}
            onClick={() => dispatch(updateCurrentPage(i))}
          >
            {i}
          </button>
        </Link>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      {/* First Page */}
      <Link to={getRoute(1)}>
        <button
          disabled={currentPage === 1}
          className="nav-btn"
          onClick={() => dispatch(updateCurrentPage(1))}
        >
          « First
        </button>
      </Link>

      {/* Previous Group */}
      {groupStartPage > 1 && (
        <Link to={getRoute(groupStartPage - 1)}>
          <button
            className="nav-btn"
            onClick={() => dispatch(updateCurrentPage(groupStartPage - 1))}
          >
            ‹ Prev
          </button>
        </Link>
      )}

      {/* Page Numbers */}
      {renderPages()}

      {/* Next Group */}
      {groupEndPage < totalPages && (
        <Link to={getRoute(groupEndPage + 1)}>
          <button
            className="nav-btn"
            onClick={() => dispatch(updateCurrentPage(groupEndPage + 1))}
          >
            Next ›
          </button>
        </Link>
      )}

      {/* Last Page */}
      <Link to={getRoute(totalPages)}>
        <button
          disabled={currentPage === totalPages}
          className="nav-btn"
          onClick={() => dispatch(updateCurrentPage(totalPages))}
        >
          Last »
        </button>
      </Link>
    </div>
  );
}

export default Pagination;
