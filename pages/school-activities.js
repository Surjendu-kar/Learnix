import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import schoolActivities from "../data/school_activities.json";

const SchoolActivityCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb09.jpg`} alt="img" />
      </div>
      <div className="courses__item-two-content">
        <div
          className="courses__item-tag"
          style={{ backgroundColor: "#E8F9EF", color: "#04BC53" }}
        >
          {item.category}
        </div>
        <h5 className="title">{item.eventName}</h5>
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
              <i className="flaticon-user-1" /> {item.participants}
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

function SchoolActivities() {
  const activitiesData = Array.isArray(schoolActivities)
    ? schoolActivities
    : schoolActivities.schoolActivities || [];

  return (
    <ActivityPageTemplate
      data={activitiesData}
      title="School Activities"
      CardComponent={SchoolActivityCard}
      breadcrumbTitle="School Activities"
    />
  );
}

export default SchoolActivities;
