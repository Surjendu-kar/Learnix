import Link from "next/link";
import React from "react";

const StaffCard = ({ staff }) => {
  return (
    <>
      <div className="instructor__item">
        <div className="instructor__img">
          <div className="instructor__shape" style={staff.shape} />
          <Link href={`/staff-details/${staff.id}`}>
            <img src={staff.image} alt="instructor" className="img-fluid" />
          </Link>
        </div>
        <div className="instructor__content">
          <div className="left">
            <span className="designation">{staff.designation}</span>
            <h4 className="name">
              <Link href={`/staff-details/${staff.id}`}>{staff.name}</Link>
            </h4>
          </div>
          {/* <div className="right">
            <span className="share">
              <i className="flaticon-share" />
            </span>
            <ul className="social-list list-wrap">
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
        </div>
      </div>

      <style jsx>{`
        .instructor__img img {
          width: 250px;
          height: 300px;
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .instructor__img img {
            height: 300px;
          }
        }

        @media (min-width: 992px) {
          .instructor__img img {
            height: 350px;
          }
        }
      `}</style>
    </>
  );
};

export default StaffCard;
