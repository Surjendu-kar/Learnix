import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { achievements } from "../data/achievements.json";

const AchievementCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb02.jpg`} alt="img" />
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
        <h5 className="title">{item.title}</h5>
        <ul className="courses__item-meta list-wrap">
          <li>
            <i className="flaticon-user-1" /> {item.student}
          </li>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <li>
              <i className="flaticon-timer" /> Grade {item.grade}
            </li>
            <li>
              <i className="flaticon-user-1" /> {item.level}
            </li>
          </div>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>{item.date}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.prize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Achievements() {
  return (
    <ActivityPageTemplate
      data={achievements}
      title="Achievements"
      CardComponent={AchievementCard}
      breadcrumbTitle="Student Achievements"
    />
  );
}

export default Achievements;
