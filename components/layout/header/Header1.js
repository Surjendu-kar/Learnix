import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  breadcrumbTitle,
}) {
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`tg-header__area ${
            !breadcrumbTitle ? "transparent-header" : ""
          } ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>

                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="menu-item-has-children">
                          <Link href="#">Home</Link>
                          <ul className="sub-menu">
                            <li className="active">
                              <Link href="/">Home One</Link>
                            </li>
                            <li>
                              <Link href="/index-2">Home Two</Link>
                            </li>
                            <li>
                              <Link href="/index-3">Home Three</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">About</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/about">About Us</Link>
                            </li>
                            <li>
                              <Link href="/affiliation">Affiliation</Link>
                            </li>
                            <li>
                              <Link href="/infrastucture">Infrastucture</Link>
                            </li>
                            <li>
                              <Link href="/admission">Admission</Link>
                            </li>
                            <li>
                              <Link href="/principal's-message">
                                Principal's Message
                              </Link>
                            </li>
                            <li>
                              <Link href="/mandatory-disclosure">
                                Mandatory Disclosure
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Administration</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/staff-details">Staff Details</Link>
                            </li>
                            <li>
                              <Link href="/school-comittee">
                                School Comittee
                              </Link>
                            </li>
                            <li>
                              <Link href="/student-enrol">Student Enrol</Link>
                            </li>
                            <li>
                              <Link href="/fee-and-scholarship">
                                Fee and Scholarship
                              </Link>
                            </li>
                            <li>
                              <Link href="/teachers-training">
                                Teachers Training
                              </Link>
                            </li>
                            <li>
                              <Link href="/tc-sample">TC Sample</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Academics</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/school-curriculum">
                                School Curriculum
                              </Link>
                            </li>
                            <li>
                              <Link href="/list-of-books">List of Books</Link>
                            </li>
                            <li>
                              <Link href="/school-at-glance">
                                School at Glance
                              </Link>
                            </li>
                            <li>
                              <Link href="/holidays-list">Holidays List</Link>
                            </li>
                            <li>
                              <Link href="/cbse-result">CBSE Result</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">More</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/co-curricular-activities">
                                Co Curricular Activities
                              </Link>
                            </li>
                            <li>
                              <Link href="/school-activities">
                                School Activities
                              </Link>
                            </li>
                            <li>
                              <Link href="/achievements">Achievements</Link>
                            </li>
                            <li>
                              <Link href="/olympiad">Olympiad</Link>
                            </li>
                            <li>
                              <Link href="/community-services">
                                Community Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/sports">Sports</Link>
                            </li>
                            <li>
                              <Link href="/cbse-activities">
                                CBSE Activities
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-phone d-none d-lg-block d-xl-none d-xxl-block">
                          {/* <Link href="/tel:993-00-67777">
                            <i className="flaticon-phone-call" />
                            993-00-67777
                          </Link> */}
                          <div className="banner__phone">
                            <i className="flaticon-phone-call" />
                            <div className="number-info">
                              <span>Admission Enquiry</span>
                              <h6 className="number">
                                <Link href="tel:1800-123-4567">
                                  1800-123-4567
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="header-btn free-btn">
                          <Link href="/contact" className="btn">
                            Try For Free
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="tg-flaticon-close-1" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        {/* <li className="header-btn login-btn">
                          <Link href="#" className="btn">
                            Log in
                          </Link>
                        </li> */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20,
                          }}
                        >
                          <div className="banner__phone">
                            <i className="flaticon-phone-call" />
                            <div className="number-info">
                              <span>Admission Enquiry</span>
                              <h6 className="number">
                                <Link href="tel:1800-123-4567">
                                  1800-123-4567
                                </Link>
                              </h6>
                            </div>
                          </div>

                          <li className="header-btn">
                            <Link href="#" className="btn">
                              Try For Free
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                    {/* <div className="social-links">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                <div
                  className="tgmobile__menu-backdrop"
                  onClick={handleMobileMenu}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
