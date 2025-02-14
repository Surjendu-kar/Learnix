import React, { useState } from "react";
import Link from "next/link";

const DropdownCard = ({ data }) => {
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
    <div className="accordion" id="accordionExample">
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
              {item.title}
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
                <li className="course-item">
                  <div className="course-item-link">
                    <span className="item-name">{item.description}</span>
                  </div>
                </li>
                {item.venue && (
                  <li className="course-item">
                    <div className="course-item-link">
                      <span className="item-name">
                        <strong style={{ marginRight: "5px" }}>Venue :</strong>
                        {item.venue}
                      </span>
                    </div>
                  </li>
                )}
                {item.coordinator && (
                  <li className="course-item">
                    <div className="course-item-link">
                      <span className="item-name">
                        <strong style={{ marginRight: "5px" }}>
                          Coordinator :
                        </strong>
                        {item.coordinator}
                      </span>
                    </div>
                  </li>
                )}
                {item.participants && (
                  <li className="course-item">
                    <div className="course-item-link">
                      <span className="item-name">
                        <strong style={{ marginRight: "5px" }}>For :</strong>
                        {item.participants}
                      </span>
                    </div>
                  </li>
                )}
                {item.date && (
                  <li className="course-item">
                    <div className="course-item-link">
                      <span className="item-name">
                        <strong style={{ marginRight: "5px" }}>Date :</strong>
                        {item.date}
                      </span>
                    </div>
                  </li>
                )}
                {item.link && (
                  <li className="course-item">
                    <Link href={item.link} className="course-item-link">
                      <span className="item-name">View Details</span>
                      <div className="course-item-meta">
                        <span className="item-meta duration">→</span>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownCard;
