import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import staffData from "@/data/staff_data.json";
import StaffCard from "@/components/common/StaffCard";
import { committeeMembers } from "@/data/committee_members.json";

export default function AboutUs() {
  const mentors = staffData.staffMembers.slice(0, 4);
  const committeeSlice = committeeMembers.slice(0, 4);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          {/* history */}
          <section className="about-area-two">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-8 col-lg-6">
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">History</span>
                      <h2 className="title tg-svg">
                        Empowering Young{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="about-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Minds
                        </span>{" "}
                        Through Quality Education
                      </h2>
                    </div>
                    <p>
                      Founded in 1960 by visionary educators, our institution
                      stands as a testament to educational excellence and
                      innovation. From our humble beginnings as a small
                      establishment, we have grown into one of the region's most
                      respected educational institutions, housed in a
                      prestigious heritage building that combines historical
                      charm with modern facilities.
                    </p>
                    <p>
                      Today, our school functions across five integrated
                      sections - Pre-Primary, Infant, Junior, Middle, and Senior
                      Schools - serving a diverse student body of over 1,900
                      students. Our curriculum seamlessly blends academic rigor
                      with character development, offering both national and
                      international curricula including ICSE, ISC, IGCSE, and
                      IBDP programs.
                    </p>
                    <p>
                      What sets us apart is our commitment to holistic
                      development. Beyond academics, we foster leadership
                      through various clubs and activities, from Model United
                      Nations to Astronomy Club, while our international
                      programs provide global exposure through partnerships with
                      institutions worldwide. Our state-of-the-art facilities,
                      including digitized classrooms and specialized learning
                      centers, ensure students have access to the best resources
                      for their educational journey.
                    </p>
                  </div>
                </div>
                {/* right images */}
                <div className="col-xl-4 col-lg-6 col-md-11">
                  <div className="about__images-wrap">
                    <div className="column">
                      <img
                        src="/assets/img/staff/staff-10.jpg"
                        alt="img"
                        style={{ height: "450px", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* staff */}
          <section className="mentors-area position-relative section-pt-120 section-pb-90">
            <div className="container">
              <div className="section__title-wrap mb-55">
                <div className="row align-items-center gap-4 gap-md-0">
                  <div className="col-md-8">
                    <div className="section__title text-center text-md-start">
                      {/* <span className="sub-title">
                        Our Qualified People Matter
                      </span> */}
                      <h2 className="title tg-svg">
                        Top{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-8"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Class
                        </span>{" "}
                        Mentors
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <Link
                        href="/staff-details"
                        className="btn btn-border tg-svg"
                      >
                        <span className="text">All Staff</span>
                        <span
                          className="svg-icon"
                          id="mentors-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* staff */}
              <div className="row justify-content-center">
                {mentors.map((staff) => (
                  <div key={staff.id} className="col-xl-3 col-lg-4 col-sm-6">
                    <StaffCard staff={staff} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mentors__shapes">
              <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
              <img src="/assets/img/objects/mentors_shape02.png" alt="shape" />
            </div>
          </section>
          {/* school committee */}
          <section className="cta-area-two position-relative">
            <div
              className="cta__bg"
              data-background="/assets/img/bg/cta_bg.jpg"
            />
            <div className="container">
              <div className="section__title-wrap mb-55">
                <div className="row align-items-center gap-4 gap-md-0">
                  <div className="col-md-8">
                    <div className="section__title text-center text-md-start">
                      <h2 className="title tg-svg" style={{ color: "#fff" }}>
                        School{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-8"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Committee
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <Link
                        href="/school-comittee"
                        className="btn btn-border tg-svg"
                      >
                        <span className="text">All Members</span>
                        <span
                          className="svg-icon"
                          id="mentors-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                {committeeSlice.map((member) => (
                  <div key={member.id} className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="mentors__item">
                      <div className="mentors__img">
                        <Link href={`/school-comittee/${member.id}`}>
                          <img
                            src={member.image}
                            alt={member.name}
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                              background: member.bgColor,
                            }}
                          />
                        </Link>
                      </div>
                      <div className="mentors__content">
                        <div className="mentors__content-top">
                          <h4 className="name">
                            <Link href={`/school-comittee/${member.id}`}>
                              {member.name}
                            </Link>
                          </h4>
                          <span className="designation">{member.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mentors__shapes">
              <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
              <img src="/assets/img/objects/mentors_shape02.png" alt="shape" />
            </div>
          </section>

          <section
            className="fact-area fact-bg"
            data-background="/assets/img/bg/fact_bg.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9">
                  <div className="section__title text-center mb-50">
                    <span className="sub-title">Worldwide Our Achievement</span>
                    <h2 className="title tg-svg">
                      Grow You{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="fact-title"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Skills
                      </span>
                      To Advance Your Career path
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-webinar" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={325200} />
                      </h3>
                      <p>Students Enrolled</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-graduates" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={11399} />
                      </h3>
                      <p>Top Class Courses</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-countries" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={312} />
                      </h3>
                      <p>World Countries</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-trophy" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={590} />
                      </h3>
                      <p>Award We Received</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-area-two position-relative">
            <div
              className="cta__bg"
              data-background="/assets/img/bg/cta_bg.jpg"
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="cta__content">
                    <p>ARE YOU READY FOR THIS OFFER</p>
                    <h2 className="title">50% Offer For Very First 50</h2>
                    <h5 className="sub-title">Student’s Mentors</h5>
                    <div className="tg-button-wrap justify-content-center">
                      <Link href="/contact" className="btn tg-svg">
                        <span className="text">Become a Student</span>{" "}
                        <span
                          className="svg-icon"
                          id="cta-btn-2"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta__shapes">
              <img
                src="/assets/img/objects/cta_shape001.svg"
                alt="img"
                className="position-absolute"
                data-aos="fade-down-right"
                data-aos-delay={300}
              />
              <img
                src="/assets/img/objects/cta_shape002.png"
                alt="img"
                className="position-absolute"
              />
              <img
                src="/assets/img/objects/cta_shape003.svg"
                alt="img"
                className="position-absolute"
                data-aos="fade-up-left"
                data-aos-delay={300}
              />
            </div>
          </section>
          <section className="events-area position-relative section-pt-120 section-pb-90">
            <div className="container">
              <div className="section__title-wrap mb-55">
                <div className="row align-items-center gap-4 gap-md-0">
                  <div className="col-md-8">
                    <div className="section__title text-center text-md-start">
                      <span className="sub-title">Featured Events</span>
                      <h2 className="title tg-svg">
                        Upcoming{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="event-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Events
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <Link href="/events" className="btn btn-border tg-svg">
                        <span className="text">Our All Events</span>{" "}
                        <span
                          className="svg-icon"
                          id="events-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb01.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology Conference
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> United Kingdom
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb02.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Exactly How Technology Can Make Reading Better
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Tokyo Japan
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb03.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology Conference
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentors__shapes">
              <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
              <img
                src="/assets/img/objects/events_shape.png"
                width={98}
                alt="shape"
              />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
