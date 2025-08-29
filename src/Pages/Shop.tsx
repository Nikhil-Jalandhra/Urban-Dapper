import './Shop.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../Store/paginationSlice';
import ProductCard from '../Components/ProductCard';
import productData from '../Database/ProductDatabase';
import Pagination from '../Components/Pagination';
import { Product, RootState } from '../types';

function Shop() {
  const filterLinks = [
    { link: "All", text: "All" },
    { link: "Belts", text: "Belts" },
    { link: "Jackets", text: "Jackets" },
    { link: "Shoes", text: "Shoes" },
    { link: "T-Shirts", text: "T-Shirts" },
    { link: "Wallets", text: "Wallets" },
  ];

  const { category = "All", page = "1" } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);
  const [filterCategory, setFilterCategory] = useState(category);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const itemsPerPage = 12;

  useEffect(() => {
    setFilterCategory(category);
    dispatch(updateCurrentPage(Number(page) || 1));

    const filterData = () => {
      if (category === "All") {
        setFilteredProducts(productData);
      } else {
        const filtered = productData.filter((item) => item.category === category);
        setFilteredProducts(filtered);
      }
    };

    filterData();
  }, [category, page, dispatch]);

  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="productCardsContainer">
      {/* Filter Links */}
      <div className="productsFilter">
        {filterLinks.map((item) => (
          <Link key={item.text} to={`/shop/${item.link}/1`}>
            <button
            style={{backgroundColor: `${filterCategory === item.link ? "#bfa375" : ""}`}}
              className={category === item.link ? "filterLinkActiveCss" : ""}
              value={item.link}
            >
              {item.text}
            </button>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        child={Math.ceil(filteredProducts.length / itemsPerPage)}
        category={category}
        type="shop"
      />


      {/* Products */}
        <div className="shopContainer">
          {paginatedData.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
    </div>
  );
}

export default Shop;
