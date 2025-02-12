import Link from "next/link";

export const CoCurricularCard = ({ item }) => {
  return (
    <div
      className="courses__item-two shine__animate-item"
      // style={{ minHeight: "450px" }}
    >
      <div className="courses__item-two-thumb">
        <Link
          href={`/co-curricular-activities/${item.id}`}
          className="shine__animate-link"
        >
          <img src={`/assets/img/courses/course_thumb03.jpg`} alt="img" />
        </Link>
      </div>
      <div className="courses__item-two-content">
        <Link
          href="#"
          className="courses__item-tag"
          style={{ backgroundColor: "#E8F9EF", color: "#04BC53" }}
        >
          {item.category}
        </Link>
        <h5 className="title">
          <Link href={`/co-curricular-activities/${item.id}`}>
            {item.activityName}
          </Link>
        </h5>
        <ul className="courses__item-meta list-wrap">
          <li>
            <i className="flaticon-user-1" /> {item.coordinator}
          </li>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <li>
              <i className="flaticon-timer" /> {item.duration}
            </li>
            <li>
              <i className="flaticon-user-1" /> {item.maxParticipants} students
            </li>
          </div>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>{item.schedule}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
