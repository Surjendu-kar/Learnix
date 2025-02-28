import ActivityPageTemplate from "@/components/common/ActivityPageTemplate";
import { coCurricularActivities } from "../data/co_curricular_activities.json";
import { CoCurricularCard } from "@/components/school-cards/CoCurricularCard";

function CoCurricularActivities() {
  return (
    <ActivityPageTemplate
      data={coCurricularActivities}
      title="Curricula Activities"
      CardComponent={CoCurricularCard}
      breadcrumbTitle="Curricula Activities"
    />
  );
}

export default CoCurricularActivities;
