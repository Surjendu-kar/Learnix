import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import olympiads from "../data/olympiads.json";

const OlympiadCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb06.jpg`} alt="img" />
      </div>
      <div className="courses__item-two-content">
        <div
          className="courses__item-tag"
          style={{ backgroundColor: "#E8F9EF", color: "#04BC53" }}
        >
          {item.mode}
        </div>
        <h5 className="title">{item.name}</h5>
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
              <i className="flaticon-user-1" /> ₹{item.registrationFee}
            </li>
          </div>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>Exam Date: {item.examDate}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.eligibility}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Olympiads() {
  const olympiadsData = Array.isArray(olympiads)
    ? olympiads
    : olympiads.olympiads || [];

  return (
    <ActivityPageTemplate
      data={olympiadsData}
      title="Olympiads"
      CardComponent={OlympiadCard}
      breadcrumbTitle="Olympiads"
    />
  );
}

export default Olympiads;
