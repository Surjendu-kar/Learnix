import StaffCard from "@/components/common/StaffCard";
import Layout from "@/components/layout/Layout";
import staffData from "@/data/staff_data.json";

export default function TeachersTraining() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Teachers Training">
      <section className="instructor-area section-pt-120 section-pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {staffData.staffMembers.map((staff) => (
              <div key={staff.id} className="col-xl-3 col-lg-4 col-sm-6">
                <StaffCard staff={staff} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
