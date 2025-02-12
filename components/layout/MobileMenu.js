import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  // Function to check if a link is active
  const isLinkActive = (path) => {
    if (path === "#") return false;
    if (path === "/") return pathname === "/";
    return pathname === path;
  };

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
      <ul className="navigation">
        <li
          className={`menu-item-has-children ${
            isLinkActive("/") ||
            isLinkActive("/index-2") ||
            isLinkActive("/index-3")
              ? "active"
              : ""
          }`}
        >
          <Link href="#">Home</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li className={isLinkActive("/") ? "active" : ""}>
              <Link href="/">Home One</Link>
            </li>
            <li className={isLinkActive("/index-2") ? "active" : ""}>
              <Link href="/index-2">Home Two</Link>
            </li>
            <li className={isLinkActive("/index-3") ? "active" : ""}>
              <Link href="/index-3">Home Three</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li
          className={`menu-item-has-children ${
            pathname.startsWith("/about-us") ? "active" : ""
          }`}
        >
          <Link href="#">About</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li className={isLinkActive("/about-us") ? "active" : ""}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={isLinkActive("/affiliation") ? "active" : ""}>
              <Link href="/affiliation">Affiliation</Link>
            </li>
            <li className={isLinkActive("/infrastucture") ? "active" : ""}>
              <Link href="/infrastucture">Infrastucture</Link>
            </li>
            <li className={isLinkActive("/admission") ? "active" : ""}>
              <Link href="/admission">Admission</Link>
            </li>
            <li
              className={isLinkActive("/principal's-message") ? "active" : ""}
            >
              <Link href="/principal's-message">Principal's Message</Link>
            </li>
            <li
              className={isLinkActive("/mandatory-disclosure") ? "active" : ""}
            >
              <Link href="/mandatory-disclosure">Mandatory Disclosure</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li
          className={`menu-item-has-children ${
            pathname.startsWith("/staff") ||
            pathname.startsWith("/school-comittee") ||
            pathname.startsWith("/student-enrol") ||
            pathname.startsWith("/fee") ||
            pathname.startsWith("/teachers") ||
            pathname.startsWith("/tc")
              ? "active"
              : ""
          }`}
        >
          <Link href="#">Administration</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li className={isLinkActive("/staff-details") ? "active" : ""}>
              <Link href="/staff-details">Staff Details</Link>
            </li>
            <li className={isLinkActive("/school-comittee") ? "active" : ""}>
              <Link href="/school-comittee">School Comittee</Link>
            </li>
            <li className={isLinkActive("/student-enrol") ? "active" : ""}>
              <Link href="/student-enrol">Student Enrol</Link>
            </li>
            <li
              className={isLinkActive("/fee-and-scholarship") ? "active" : ""}
            >
              <Link href="/fee-and-scholarship">Fee and Scholarship</Link>
            </li>
            <li className={isLinkActive("/teachers-training") ? "active" : ""}>
              <Link href="/teachers-training">Teachers Training</Link>
            </li>
            <li className={isLinkActive("/tc-sample") ? "active" : ""}>
              <Link href="/tc-sample">TC Sample</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li
          className={`menu-item-has-children ${
            pathname.startsWith("/school-curriculum") ||
            pathname.startsWith("/list-of-books") ||
            pathname.startsWith("/holidays-list") ||
            pathname.startsWith("/cbse-result")
              ? "active"
              : ""
          }`}
        >
          <Link href="#">Academics</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
          >
            <li className={isLinkActive("/school-curriculum") ? "active" : ""}>
              <Link href="/school-curriculum">School Curriculum</Link>
            </li>
            <li className={isLinkActive("/list-of-books") ? "active" : ""}>
              <Link href="/list-of-books">List of Books</Link>
            </li>
            <li className={isLinkActive("/school-at-glance") ? "active" : ""}>
              <Link href="/school-at-glance">School at Glance</Link>
            </li>
            <li className={isLinkActive("/holidays-list") ? "active" : ""}>
              <Link href="/holidays-list">Holidays List</Link>
            </li>
            <li className={isLinkActive("/cbse-result") ? "active" : ""}>
              <Link href="/cbse-result">CBSE Result</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(4)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li
          className={`menu-item-has-children ${
            pathname.startsWith("/co-curricular") ||
            pathname.startsWith("/school-activities") ||
            pathname.startsWith("/achievements") ||
            pathname.startsWith("/olympiad") ||
            pathname.startsWith("/community-services") ||
            pathname.startsWith("/sports") ||
            pathname.startsWith("/cbse-activities")
              ? "active"
              : ""
          }`}
        >
          <Link href="#">More</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}
          >
            <li
              className={
                isLinkActive("/co-curricular-activities") ? "active" : ""
              }
            >
              <Link href="/co-curricular-activities">
                Co Curricular Activities
              </Link>
            </li>
            <li className={isLinkActive("/school-activities") ? "active" : ""}>
              <Link href="/school-activities">School Activities</Link>
            </li>
            <li className={isLinkActive("/achievements") ? "active" : ""}>
              <Link href="/achievements">Achievements</Link>
            </li>
            <li className={isLinkActive("/olympiad") ? "active" : ""}>
              <Link href="/olympiad">Olympiad</Link>
            </li>
            <li className={isLinkActive("/community-services") ? "active" : ""}>
              <Link href="/community-services">Community Services</Link>
            </li>
            <li className={isLinkActive("/sports") ? "active" : ""}>
              <Link href="/sports">Sports</Link>
            </li>
            <li className={isLinkActive("/cbse-activities") ? "active" : ""}>
              <Link href="/cbse-activities">CBSE Activities</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(5)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className={isLinkActive("/gallery") ? "active" : ""}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={isLinkActive("/contact") ? "active" : ""}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
