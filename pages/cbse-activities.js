import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { cbseActivities } from "../data/cbse_activities.json";

const CBSEActivityCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb04.jpg`} alt="img" />
      </div>
      <div className="courses__item-two-content">
        <div
          className="courses__item-tag"
          style={{
            backgroundColor: "#E8F9EF",
            color: "#04BC53",
            width: "fit-content",
          }}
        >
          {item.category}
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
              <i className="flaticon-level" /> {item.level}
            </li>
            <li>
              <i className="flaticon-user-1" /> {item.maxParticipants}{" "}
              participants
            </li>
          </div>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>{item.date}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function CBSEActivities() {
  return (
    <ActivityPageTemplate
      data={cbseActivities}
      title="CBSE Activities"
      CardComponent={CBSEActivityCard}
      breadcrumbTitle="CBSE Activities"
    />
  );
}

export default CBSEActivities;
