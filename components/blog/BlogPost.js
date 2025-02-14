import React, { useState, useEffect } from "react";
import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard2";
import Pagination from "./Pagination";
import blogData from "../../data/blog.json";

export default function BlogPost({ style, showItem, showPagination }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const limit = showItem;

  const [pagination, setPagination] = useState([]);
  const [limitPerPage, setLimitPerPage] = useState(limit);

  const filteredData =
    activeCategory === "all"
      ? blogData
      : blogData.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredData.length / limitPerPage);

  useEffect(() => {
    createPagination();
    setCurrentPage(1);
  }, [limitPerPage, filteredData.length, activeCategory]);

  const createPagination = () => {
    const pageCount = Math.ceil(filteredData.length / limitPerPage);
    const paginationArray = new Array(pageCount)
      .fill()
      .map((_, idx) => idx + 1);
    setPagination(paginationArray);
  };

  const startIndex = (currentPage - 1) * limitPerPage;
  const endIndex = startIndex + limitPerPage;
  const paginatedProducts = filteredData.slice(startIndex, endIndex);

  const paginationStart = Math.floor((currentPage - 1) / 4) * 4;
  const paginationEnd = paginationStart + 4;
  const paginationGroup = pagination.slice(paginationStart, paginationEnd);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  return (
    <>
      <style jsx>{`
        .btn.btn-border.tg-svg {
          position: relative;
          background: transparent;
          border: 1px solid #e3e3e3;
          color: #090e41;
          transition: all 0.3s ease-out;
          padding: 16px 24px;
          cursor: pointer;
          font-weight: 500;
        }

        .btn.btn-border.tg-svg:hover,
        .btn.btn-border.tg-svg.active {
          background: #3374ff;
          border-color: #3374ff;
          color: #fff;
        }

        .btn.btn-border.tg-svg.active .svg-icon,
        .btn.btn-border.tg-svg:hover .svg-icon {
          filter: brightness(0) invert(1);
        }

        .tg-button-wrap {
          display: flex;
          gap: 12px;
        }
      `}</style>

      <div className="row justify-content-center mb-4">
        <div className="tg-button-wrap justify-content-center">
          <button
            className={`btn btn-border tg-svg ${
              activeCategory === "all" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("all")}
          >
            <span className="text">All Posts</span>
            <span
              className="svg-icon"
              id="all-btn"
              data-svg-icon="assets/img/icons/btn-arrow.svg"
            />
          </button>
          <button
            className={`btn btn-border tg-svg ${
              activeCategory === "News" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("News")}
          >
            <span className="text">News</span>
            <span
              className="svg-icon"
              id="news-btn"
              data-svg-icon="assets/img/icons/btn-arrow.svg"
            />
          </button>
          <button
            className={`btn btn-border tg-svg ${
              activeCategory === "Achievement" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Achievement")}
          >
            <span className="text">Achievements</span>
            <span
              className="svg-icon"
              id="achievements-btn"
              data-svg-icon="assets/img/icons/btn-arrow.svg"
            />
          </button>
        </div>
      </div>

      {paginatedProducts.length === 0 && <h3>No Posts Found</h3>}

      {paginatedProducts.map((item) => (
        <React.Fragment key={item.id}>
          {style !== 2 ? <BlogCard1 item={item} /> : <BlogCard2 item={item} />}
        </React.Fragment>
      ))}

      {showPagination && (
        <Pagination
          getPaginationGroup={paginationGroup}
          currentPage={currentPage}
          totalPages={totalPages}
          next={next}
          prev={prev}
          handlePageChange={handlePageChange}
          handleActive={handleActive}
        />
      )}
    </>
  );
}
