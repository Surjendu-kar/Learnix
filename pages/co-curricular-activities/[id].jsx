import VideoPopup from "@/components/elements/VidepPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import co_curricular_activities from "../../data/co_curricular_activities.json";

const SingleCurricularActivity = () => {
  const router = useRouter();
  const [course, setCourse] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else {
      const activitiesData = Array.isArray(co_curricular_activities)
        ? co_curricular_activities
        : co_curricular_activities.coCurricularActivities || [];

      setCourse(activitiesData.find((item) => item.id == id));
    }
    return () => {};
  }, [id]);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
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
      <Layout headerStyle={3} footerStyle={1}>
        <section className="courses__breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="courses__breadcrumb-content">
                  <Link href="#" className="category">
                    {course.category}
                  </Link>
                  <h3 className="title">{course.activityName}</h3>
                  <p>{course.description}</p>
                  <ul className="courses__item-meta list-wrap">
                    <li>
                      <div
                        className="coordinator"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <i className="flaticon-user-1" />
                        <span>{course.coordinator}</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-timer" /> {course.duration}
                    </li>
                    <li>
                      <i className="flaticon-file" /> {course.date}
                    </li>
                    <li>
                      <i className="flaticon-user-1" /> {course.maxParticipants}{" "}
                      students
                    </li>
                    <li>
                      <i className="flaticon-file" /> {course.venue}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-details-area section-pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-8">
                <div className="courses__details-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                      <button
                        className={
                          activeIndex === 1 ? "nav-link active" : "nav-link"
                        }
                      >
                        Course Information
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                      <button
                        className={
                          activeIndex === 2 ? "nav-link active" : "nav-link"
                        }
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className={
                        activeIndex === 1 ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="courses__details-content">
                        <p>
                          This tutorial will help you learn quickly and
                          thoroughly. Lorem ipsum, or lipsum as it is sometimes
                          known, iaws dumm text used in laying out print,
                          graphic or web designs. Lorem ipsum dolor sit amet,
                          consectetuer adipiscingawr elit onec odio. Quisque
                          volutpat mattis eros.
                        </p>
                        <p>
                          You’ll be exposed to principles and strategies, but,
                          more importantly, you’ll learn how to actually apply
                          these abstract concepts by coding three different
                          websites for three very different audiences. Lorem
                          ipsum is dummy text used in laying out print, graphic
                          or web designs Lorem ipsum
                        </p>
                        <div className="courses__details-inner">
                          <h3 className="title">What Will You Learn?</h3>
                          <p>
                            This tutorial will help you learn quickly and
                            thoroughly. Lorem ipsum, or lipsum as it is
                            sometimes known, iaws dumm text used in laying out
                            print, graphic or web designsm dolor sit amet.
                          </p>
                          <div className="event-details-list">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-check-circle" />
                                Become a UX designer.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Create quick wireframes.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                You will be able to add UX designe
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Downloadable exercise files
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Become a UI designer.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Build a UX project from beginning to end.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Build test a full website design.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Learn to design websites mobile
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Create your first UX brief persona.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                All the techniques used by UX professionals
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                How to use premade UI kits.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="courses__details-inner">
                          <h3 className="title">Requirements</h3>
                          <p>
                            This tutorial will help you learn quickly and
                            thoroughly. Lorem ipsum, or lipsum as it is
                            sometimes
                          </p>
                          <div className="event-details-list">
                            <ul className="list-wrap">
                              <li>
                                <i className="fas fa-check-circle" />
                                Become a UX designer.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Create quick wireframes.
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                You will be able to add UX designe
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Downloadable exercise files
                              </li>
                              <li>
                                <i className="fas fa-check-circle" />
                                Become a UI designer.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="courses__details-curriculum">
                        <h4 className="title">Curriculum</h4>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              onClick={() => handleToggle(1)}
                            >
                              <button
                                className={
                                  isActive.key == 1
                                    ? "accordion-button  collapsed"
                                    : "accordion-button"
                                }
                              >
                                Introduction
                              </button>
                            </h2>
                            <div
                              className={
                                isActive.key == 1
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              onClick={() => handleToggle(2)}
                            >
                              <button
                                className={
                                  isActive.key == 2
                                    ? "accordion-button  collapsed"
                                    : "accordion-button"
                                }
                              >
                                Capacitance and Inductance
                              </button>
                            </h2>
                            <div
                              className={
                                isActive.key == 2
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              onClick={() => handleToggle(3)}
                            >
                              <button
                                className={
                                  isActive.key == 3
                                    ? "accordion-button  collapsed"
                                    : "accordion-button"
                                }
                              >
                                Final Audit
                              </button>
                            </h2>
                            <div
                              className={
                                isActive.key == 3
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="course-item">
                                    <Link href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="/assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="courses__details-instructors">
                        <h4 className="title">Your Instructors</h4>
                        <div className="courses__instructors-list">
                          <div className="courses__instructors-item">
                            <div className="courses__instructors-thumb">
                              <Link href="/instructor-details">
                                <img
                                  src="/assets/img/courses/details_instructors01.jpg"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="courses__instructors-content">
                              <h5 className="name">
                                <Link href="/instructor-details">
                                  Robert Smith
                                </Link>
                              </h5>
                              <span className="designation">
                                Graphic Design
                              </span>
                              <ul className="meta list-wrap d-flex flex-wrap">
                                <li>
                                  <i className="flaticon-user-1" /> 1,135
                                  Students
                                </li>
                                <li>
                                  <i className="flaticon-file" /> 05
                                </li>
                                <li>
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span className="average">(4.2)</span>
                                  </div>
                                </li>
                              </ul>
                              <p>
                                Donald Logan has more than 15 years’ experience
                                as a project management consultant, educator,
                                technology consultant, business know.
                              </p>
                              <div className="tg-button-wrap">
                                <Link
                                  href="/instructor-details"
                                  className="btn btn-border tg-svg"
                                >
                                  <span className="text">See More</span>{" "}
                                  <span
                                    className="svg-icon"
                                    id="svg-btn1"
                                    data-svg-icon="assets/img/icons/btn-arrow.svg"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="courses__instructors-item">
                            <div className="courses__instructors-thumb">
                              <Link href="/instructor-details">
                                <img
                                  src="/assets/img/courses/details_instructors02.jpg"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="courses__instructors-content">
                              <h5 className="name">
                                <Link href="/instructor-details">
                                  Ketty Roagh
                                </Link>
                              </h5>
                              <span className="designation">Web Developer</span>
                              <ul className="meta list-wrap d-flex flex-wrap">
                                <li>
                                  <i className="flaticon-user-1" /> 1,435
                                  Students
                                </li>
                                <li>
                                  <i className="flaticon-file" /> 05
                                </li>
                                <li>
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span className="average">(4.2)</span>
                                  </div>
                                </li>
                              </ul>
                              <p>
                                Donald Logan has more than 15 years’ experience
                                as a project management consultant, educator,
                                technology consultant, business know.
                              </p>
                              <div className="tg-button-wrap">
                                <Link
                                  href="/instructor-details"
                                  className="btn btn-border tg-svg"
                                >
                                  <span className="text">See More</span>{" "}
                                  <span
                                    className="svg-icon"
                                    id="svg-btn2"
                                    data-svg-icon="assets/img/icons/btn-arrow.svg"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex === 2 ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="courses__details-reviews">
                        <h4 className="title">Student Ratings Reviews</h4>
                        <div className="course-rate">
                          <div className="course-rate__summary">
                            <div className="course-rate__summary-value">
                              4.8
                            </div>
                            <div className="course-rate__summary-stars">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__summary-text">
                              Total 2 Rating
                            </div>
                          </div>
                          <div className="course-rate__details">
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                5
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div
                                  className="rating"
                                  style={{ width: "80%" }}
                                  title="80%"
                                />
                                <span className="rating-count">2</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                4
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div
                                  className="rating"
                                  style={{ width: "50%" }}
                                  title="50%"
                                />
                                <span className="rating-count">1</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                3
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                2
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                1
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="course-reviews">
                          <h4 className="course-review-head">Reviews (01)</h4>
                          <ul className="list-wrap">
                            <li>
                              <div className="review-author">
                                <img
                                  src="/assets/img/blog/comment01.png"
                                  alt="img"
                                />
                              </div>
                              <div className="review-author-info">
                                <div className="review-stars-rated">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <h5 className="user-name">
                                  Admin{" "}
                                  <span className="date">August 5, 2023</span>
                                </h5>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantiu meature areawtyt totam rem aperiam,
                                  eaque ipsa quae ab illo inventore veritatis.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="course-review-form">
                          <h4 className="course-review-head">Write a review</h4>
                          <form action="#">
                            <div className="row">
                              <div className="col-sm-6">
                                <input type="text" placeholder="Your Name" />
                              </div>
                              <div className="col-sm-6">
                                <input type="email" placeholder="Your Email" />
                              </div>
                            </div>
                            <input type="text" placeholder="Review Title" />
                            <div className="course-form-rating">
                              <span>Select Rating:</span>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <textarea placeholder="Type Comments" />
                            <button className="btn">Submit your Review</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SingleCurricularActivity;
