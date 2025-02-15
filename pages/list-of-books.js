import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { listOfBooksData } from "@/data/listOfBooks_data.json";

const ListOfBooks = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="List Of Books">
      <section className="categories-area section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="accordion" id="accordionExample">
                {listOfBooksData.map((item) => (
                  <div
                    className="accordion-item"
                    key={item.id}
                    style={{ marginBottom: "4px" }}
                  >
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(item.id)}
                    >
                      <button
                        className={
                          isActive.key == item.id
                            ? "accordion-button collapsed"
                            : "accordion-button"
                        }
                      >
                        {item.name} - {item.courses}
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == item.id
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        <ul className="list-wrap">
                          {item.mainSubjects.map((subject, index) => (
                            <li className="course-item" key={index}>
                              <div className="course-item-link">
                                <span className="item-name">
                                  <strong style={{ marginRight: "5px" }}>
                                    {subject.subject} :
                                  </strong>
                                  {subject.books.join(", ")}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ListOfBooks;
