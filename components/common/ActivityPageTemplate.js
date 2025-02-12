import { useDispatch, useSelector } from "react-redux";
import { addPerPage, addSort } from "@/features/courseFilterSlice";
import Pagination from "@/components/blog/Pagination";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { CommonSort } from "./CommonSort";
import { getSortedData } from "./sortUtils";

const ActivityPageTemplate = ({
  data,
  title,
  CardComponent,
  breadcrumbTitle,
}) => {
  const dispatch = useDispatch();
  const { courseSort } = useSelector((state) => state.courseFilter);
  const { sort, perPage } = courseSort;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const perPageHandler = (e) => {
    const value = JSON.parse(e.target.value);
    const newItemsPerPage = value.end === 0 ? data.length : value.end;
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    dispatch(
      addPerPage({
        start: 0,
        end: newItemsPerPage,
      })
    );
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const sortedData = getSortedData(data, sort, window.location.pathname);
  const filteredContent = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const pages = Math.ceil(data.length / itemsPerPage);
  const getPaginationGroup = [...Array(pages)].map((_, i) => i + 1);

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage !== pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const content = filteredContent.map((item) => (
    <div className="col" key={item.id}>
      <CardComponent item={item} />
    </div>
  ));

  useEffect(() => {
    dispatch(
      addPerPage({
        start: 0,
        end: 6,
      })
    );
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={breadcrumbTitle}>
      <section className="all-courses-area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
              <aside className="courses__sidebar">
                <div className="shop-widget">
                  <h4 className="widget-title">Sort {title}</h4>
                  <div className="shop-cat-list">
                    <CommonSort />
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content" id="myTabContent">
                {/* Top Bar */}
                <div className="shop-top-wrap courses-top-wrap">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="shop-top-left">
                        <p>
                          We found {filteredContent?.length} {title} for you
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className="shop-top-right m-0 ms-md-auto">
                          <select
                            value={sort}
                            name="orderby"
                            className="orderby"
                            onChange={(e) => dispatch(addSort(e.target.value))}
                          >
                            <option value="">Sort by (Latest First)</option>
                            <option value="oldest">Oldest First</option>
                          </select>
                        </div>
                        <div>
                          <select
                            onChange={perPageHandler}
                            className="chosen-single form-select ms-3"
                            value={JSON.stringify(perPage)}
                          >
                            <option
                              value={JSON.stringify({ start: 0, end: 0 })}
                            >
                              All
                            </option>
                            <option
                              value={JSON.stringify({ start: 0, end: 6 })}
                            >
                              6 per page
                            </option>
                            <option
                              value={JSON.stringify({ start: 0, end: 9 })}
                            >
                              9 per page
                            </option>
                            <option
                              value={JSON.stringify({ start: 0, end: 12 })}
                            >
                              12 per page
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Content */}
                <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                  {content}
                </div>

                {/* Pagination */}
                {pages > 1 && (
                  <Pagination
                    prev={prev}
                    currentPage={currentPage}
                    getPaginationGroup={getPaginationGroup}
                    next={next}
                    pages={pages}
                    handleActive={handleActive}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ActivityPageTemplate;
