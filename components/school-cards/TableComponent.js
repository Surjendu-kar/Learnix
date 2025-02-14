import React, { useState } from "react";

const TableComponent = ({ data, headerItems, expandedFields }) => {
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
    <>
      <div
        className="accordion"
        id="accordionExample"
        style={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        {data.map((item) => (
          <div className="accordion-item" key={item.id}>
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
                <div className="d-flex justify-content-between w-100">
                  {headerItems.map((header, index) => (
                    <span key={index}>{item[header.key]}</span>
                  ))}
                </div>
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
                  {expandedFields.map((field, index) => (
                    <li className="course-item" key={index}>
                      <div className="course-item-link">
                        <span className="item-name">
                          <strong style={{ marginRight: "5px" }}>
                            {field.label}:
                          </strong>
                          {field.type === "badge" ? (
                            <span
                              className={`badge ${
                                item[field.key] === "Active"
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {item[field.key]}
                            </span>
                          ) : (
                            item[field.key]
                          )}
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

      <style jsx>{`
        .accordion-button .d-flex span {
          flex: 1;
          text-align: left;
          padding: 0.25rem 0;
        }
      `}</style>
    </>
  );
};

export default TableComponent;
