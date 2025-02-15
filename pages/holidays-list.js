import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { holidaysData } from "@/data/holidays_data.json";

function HolidaysList() {
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
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Academic Calendar">
      <div className="container" style={{ margin: "50px auto" }}>
        <div className="accordion" id="yearAccordion">
          <div className="accordion-item">
            <h2
              className="accordion-header"
              onClick={() => handleToggle("2024-25")}
            >
              <button
                className={
                  isActive.key === "2024-25"
                    ? "accordion-button collapsed"
                    : "accordion-button"
                }
              >
                Academic Year 2024-25
              </button>
            </h2>
            <div
              className={
                isActive.key === "2024-25"
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }
            >
              <div className="accordion-body">
                <ul className="list-wrap">
                  {holidaysData.map((item, index) => (
                    <li className="course-item" key={index}>
                      <div className="course-item-link">
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="item-name">
                            <strong style={{ marginRight: "5px" }}>
                              {item.date} ({item.day}):
                            </strong>
                            {item.holiday}
                          </span>
                          <span
                            className={`badge ${
                              item.category === "Holiday"
                                ? "bg-danger"
                                : item.category === "Event"
                                ? "bg-primary"
                                : "bg-success"
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                        {item.note && (
                          <small className="text-muted d-block mt-1">
                            Note: {item.note}
                          </small>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HolidaysList;
