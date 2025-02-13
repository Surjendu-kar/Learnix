import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function Notice() {
  const [isActive, setIsActive] = React.useState({
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

  const notices = [
    {
      id: 1,
      title: "Annual Sports Day Registration",
      date: "2025-01-17",
      description:
        "Registration for Annual Sports Day is now open. Students interested in participating should register with their respective sports coordinators.",
      venue: "Sports Ground",
      coordinator: "Mr. Mahesh Singh",
      participants: "All grades",
      link: "/sports",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting Schedule",
      date: "Last Saturday of January 2025",
      description:
        "Monthly parent-teacher meeting to discuss student progress and address concerns. Time slots will be allocated through the school portal.",
      venue: "Respective Classrooms",
      coordinator: "Class Teachers",
      participants: "All grades",
    },
    {
      id: 3,
      title: "Science Exhibition Project Submission",
      date: "2025-01-16",
      description:
        "All students participating in the Science Exhibition must submit their project proposals to their respective science teachers.",
      venue: "School Ground",
      coordinator: "Dr. Ravi Kumar",
      participants: "Grades 6-12",
      link: "/school-activities",
    },
    {
      id: 4,
      title: "New Co-Curricular Activities Registration",
      date: "2025-01-15",
      description:
        "Registration for various co-curricular activities including Robotics Club, Drama Club, and Science Club is now open. Limited seats available.",
      coordinator: "Activity Coordinators",
      participants: "As per activity requirements",
      link: "/co-curricular-activities",
    },
    {
      id: 5,
      title: "Career Counseling Session",
      date: "2025-01-20",
      description:
        "Special career counseling session for senior students. Various college representatives and career experts will be present.",
      venue: "School Hall",
      coordinator: "Mr. Arun Kumar",
      participants: "Grades 9-12",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Notice">
      <div className="container">
        <div
          className="courses__details-curriculum"
          style={{ margin: "50px 0" }}
        >
          <h4 className="title">Latest Notices</h4>
          <div className="accordion" id="accordionExample">
            {notices.map((notice) => (
              <div className="accordion-item" key={notice.id}>
                <h2
                  className="accordion-header"
                  onClick={() => handleToggle(notice.id)}
                >
                  <button
                    className={
                      isActive.key == notice.id
                        ? "accordion-button collapsed"
                        : "accordion-button"
                    }
                  >
                    {notice.title}
                  </button>
                </h2>
                <div
                  className={
                    isActive.key == notice.id
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                >
                  <div className="accordion-body">
                    <ul className="list-wrap">
                      <li className="course-item">
                        <div className="course-item-link">
                          <span className="item-name">
                            {notice.description}
                          </span>
                        </div>
                      </li>
                      {notice.venue && (
                        <li className="course-item">
                          <div className="course-item-link">
                            <span className="item-name">
                              <strong style={{ marginRight: "5px" }}>
                                Venue :
                              </strong>
                              {notice.venue}
                            </span>
                          </div>
                        </li>
                      )}
                      {notice.coordinator && (
                        <li className="course-item">
                          <div className="course-item-link">
                            <span className="item-name">
                              <strong style={{ marginRight: "5px" }}>
                                Coordinator :
                              </strong>
                              {notice.coordinator}
                            </span>
                          </div>
                        </li>
                      )}
                      {notice.participants && (
                        <li className="course-item">
                          <div className="course-item-link">
                            <span className="item-name">
                              <strong style={{ marginRight: "5px" }}>
                                For :
                              </strong>
                              {notice.participants}
                            </span>
                          </div>
                        </li>
                      )}
                      {notice.date && (
                        <li className="course-item">
                          <div className="course-item-link">
                            <span className="item-name">
                              <strong style={{ marginRight: "5px" }}>
                                Date :
                              </strong>
                              {notice.date}
                            </span>
                          </div>
                        </li>
                      )}
                      {notice.link && (
                        <li className="course-item">
                          <Link href={notice.link} className="course-item-link">
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
        </div>
      </div>
    </Layout>
  );
}

export default Notice;
