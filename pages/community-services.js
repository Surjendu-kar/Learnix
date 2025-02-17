import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { communityServices } from "../data/community_services.json";

const CommunityServiceCard = ({ item }) => {
  return (
    <div className="courses__item-two shine__animate-item">
      <div className="courses__item-two-thumb">
        <img src={`/assets/img/courses/course_thumb05.jpg`} alt="img" />
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
          {item.type}
        </div>
        <h5 className="title">{item.name}</h5>
        <ul className="courses__item-meta list-wrap">
          <li>
            <i className="flaticon-user-1" /> {item.coordinator}
          </li>
          <li>
            <i className="flaticon-timer" /> {item.duration}
          </li>
          <li>
            <i className="flaticon-calendar" /> {item.frequency}
          </li>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>{item.date}</span>
          </div>
          <div className="courses__item-rating">
            <span className="venue">{item.targetArea}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function CommunityServices() {
  return (
    <ActivityPageTemplate
      data={communityServices}
      title="Community Services"
      CardComponent={CommunityServiceCard}
      breadcrumbTitle="Community Services"
    />
  );
}

export default CommunityServices;
