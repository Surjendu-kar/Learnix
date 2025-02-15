import Link from "next/link";

export default function Categories1() {
  return (
    <>
      <section className="categories-area section-py-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-10">
              <div className="categories__title-wrap text-center text-xl-start">
                <div className="section__title">
                  <span className="sub-title">What We Offer</span>
                  <h2 className="title tg-svg">
                    Our Latest{" "}
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="svg-5"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      Services
                    </span>
                  </h2>
                </div>
                <p>
                  Explore our range of student support services designed to
                  enhance the learning experience and ensure comprehensive
                  development of every student.
                </p>

                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                  <Link href="/co-curricular-activities" className="btn btn-border tg-svg">
                    <span className="text">All Services</span>{" "}
                    <span
                      className="svg-icon"
                      id="svg-6"
                      data-svg-icon="assets/img/icons/btn-arrow.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="categories__wrap">
                <img
                  src="/assets/img/objects/categories_shape03.svg"
                  alt="shape"
                  data-aos="fade-right"
                />
                <img
                  src="/assets/img/objects/categories_shape04.svg"
                  alt="shape"
                  data-aos="fade-left"
                />
                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/courses">
                        <i className="flaticon-email-marketing" />
                        <span className="name">Transportation</span>
                        <span className="courses">School Bus Service</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/courses">
                        <i className="flaticon-graphic-design" />
                        <span className="name">Library</span>
                        <span className="courses">Digital & Physical</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center row-cols-2 row-cols-sm-3">
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/courses">
                        <i className="flaticon-bars" />
                        <span className="name">Sports</span>
                        <span className="courses">Physical Education</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/courses">
                        <i className="flaticon-programming-language" />
                        <span className="name">Healthcare</span>
                        <span className="courses">Medical Facility</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/courses">
                        <i className="flaticon-atom" />
                        <span className="name">Student Support</span>
                        <span className="courses">Mentoring</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories__shapes">
          <div className="categories__shapes-item rotateme">
            <img src="/assets/img/objects/categories_shape01.png" alt="shape" />
          </div>
          <div className="categories__shapes-item" data-aos="fade-up">
            <img src="/assets/img/objects/categories_shape02.png" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
}
