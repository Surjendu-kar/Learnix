import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
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
      <ul className="navigation">
        <li className="menu-item-has-children">
          <Link href="#">Home</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
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
          <div
            className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">About</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
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
              <Link href="/principal's-message">Principal's Message</Link>
            </li>
            <li>
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
        <li className="menu-item-has-children">
          <Link href="#">Administration</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/staff-details">Staff Details</Link>
            </li>
            <li>
              <Link href="/school-comittee">School Comittee</Link>
            </li>
            <li>
              <Link href="/student-enrol">Student Enrol</Link>
            </li>
            <li>
              <Link href="/fee-and-scholarship">Fee and Scholarship</Link>
            </li>
            <li>
              <Link href="/teachers-training">Teachers Training</Link>
            </li>
            <li>
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
        <li className="menu-item-has-children">
          <Link href="#">Academics</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/school-curriculum">School Curriculum</Link>
            </li>
            <li>
              <Link href="/list-of-books">List of Books</Link>
            </li>
            <li>
              <Link href="/school-at-glance">School at Glance</Link>
            </li>
            <li>
              <Link href="/holidays-list">Holidays List</Link>
            </li>
            <li>
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
        <li className="menu-item-has-children">
          <Link href="#">More</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/co-curricular-activities">
                Co Curricular Activities
              </Link>
            </li>
            <li>
              <Link href="/school-activities">School Activities</Link>
            </li>
            <li>
              <Link href="/achievements">Achievements</Link>
            </li>
            <li>
              <Link href="/olympiad">Olympiad</Link>
            </li>
            <li>
              <Link href="/community-services">Community Services</Link>
            </li>
            <li>
              <Link href="/sports">Sports</Link>
            </li>
            <li>
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
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
