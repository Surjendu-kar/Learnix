import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="about-area tg-motion-effects section-py-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="about__images">
                <img
                  className="small-img tg-motion-effects3"
                  src="/assets/img/others/about-2.jpg"
                  alt="img"
                  style={{
                    height: "300px",
                    border: "10px solid white",
                    borderRadius: "10px",
                  }}
                />
                <img
                  className="big-img"
                  src="/assets/img/others/about-1.jpg"
                  alt="img"
                  style={{
                    height: "550px",
                    width: "440px",
                    border: "10px solid white",
                    borderRadius: "10px",
                  }}
                />
                <div className="about__exp">
                  <svg
                    width={126}
                    height={108}
                    viewBox="0 0 126 108"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z"
                      fill="currentcolor"
                    />
                  </svg>
                  <h4 className="year">25 +</h4>
                  <p>Years of Experiences</p>
                </div>
                <img
                  src="/assets/img/others/about_dots.svg"
                  alt="svg"
                  className="dots tg-motion-effects2"
                />
                <svg
                  className="circle tg-motion-effects1"
                  width={344}
                  height={344}
                  viewBox="0 0 344 344"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x={20}
                    y={20}
                    width={304}
                    height={304}
                    rx={152}
                    stroke="currentcolor"
                    strokeWidth={40}
                  />
                </svg>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about__content">
                <div className="section__title">
                  <span className="sub-title">Principal's Message</span>
                  <h2 className="title tg-svg">
                    Nurturing{" "}
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="svg-3"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      Excellence
                    </span>
                    Through Education
                  </h2>
                </div>
                <p className="desc">
                  Welcome to our institution where we strive for academic
                  excellence and holistic development. Our commitment is to
                  provide quality education that prepares students for global
                  challenges while maintaining strong ethical values.
                </p>
                <ul className="about__info-list list-wrap">
                  <li className="about__info-list-item">
                    <div className="icon">
                      <i className="flaticon-graduation-cap" />
                    </div>
                    <p className="content">
                      50+ <br /> Programs
                    </p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon">
                      <i className="flaticon-support" />
                    </div>
                    <p className="content">
                      200+ <br /> Faculty Members
                    </p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon">
                      <i className="flaticon-group" />
                    </div>
                    <p className="content">
                      25K+ <br /> Alumni Network
                    </p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon">
                      <i className="flaticon-file" />
                    </div>
                    <p className="content">
                      100+ <br /> Activities
                    </p>
                  </li>
                </ul>
                <div className="tg-button-wrap">
                  <Link href="/about-us" className="btn tg-svg">
                    <span className="text">Read Full Message</span>{" "}
                    <span
                      className="svg-icon"
                      id="about-btn"
                      data-svg-icon="assets/img/icons/btn-arrow.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
