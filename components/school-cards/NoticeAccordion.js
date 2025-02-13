import React from "react";
import Link from "next/link";

const NoticeAccordion = ({ notices }) => {
  const [activeNotice, setActiveNotice] = React.useState(null);

  const handleToggle = (id) => {
    setActiveNotice(activeNotice === id ? null : id);
  };

  return (
    <div className="accordion" id="noticeAccordion">
      {notices.map((notice) => (
        <div className="accordion-item" key={notice.id}>
          <h2
            className="accordion-header"
            onClick={() => handleToggle(notice.id)}
          >
            <button
              className={`accordion-button ${
                activeNotice !== notice.id ? "collapsed" : ""
              }`}
            >
              <div className="w-full flex justify-between items-center">
                <span>{notice.title}</span>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeNotice === notice.id ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <div className="flex flex-col gap-3">
                <p>{notice.description}</p>
                {notice.venue && (
                  <p>
                    <strong>Venue:</strong> {notice.venue}
                  </p>
                )}
                {notice.coordinator && (
                  <p>
                    <strong>Coordinator:</strong> {notice.coordinator}
                  </p>
                )}
                {notice.participants && (
                  <p>
                    <strong>For:</strong> {notice.participants}
                  </p>
                )}
                {notice.link && (
                  <Link
                    href={notice.link}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-fit"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeAccordion;
