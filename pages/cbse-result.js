import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { cbseResults } from "../data/cbse_results.json";

const CBSEResultCard = ({ item }) => {
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
          {item.stream} - {item.examType}
        </div>
        <h5 className="title">{item.studentName}</h5>
        <ul className="courses__item-meta list-wrap">
          <li>
            <i className="flaticon-user-1" /> Roll No: {item.rollNumber}
          </li>
          <li>
            <i className="flaticon-user-1" />
            Class: {item.class}
          </li>
          <li>
            <i className="flaticon-user-1" /> Grade: {item.grade}
          </li>
        </ul>
        <div className="courses__item-bottom">
          <div className="course__schedule">
            <span>Total Marks: {item.totalMarks}</span>
          </div>
          <div className="courses__item-rating">
            <span className="percentage">{item.percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function CBSEResult() {
  return (
    <ActivityPageTemplate
      data={cbseResults}
      title="CBSE Result"
      CardComponent={CBSEResultCard}
      breadcrumbTitle="CBSE Result"
    />
  );
}

export default CBSEResult;
