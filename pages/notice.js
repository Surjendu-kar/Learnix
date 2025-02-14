import Layout from "@/components/layout/Layout";
import DropdownCard from "@/components/school-cards/DropdownCard";
import React from "react";
import { notices } from "@/data/notices.json";

function Notice() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Notice">
      <div className="container">
        <div
          className="courses__details-curriculum"
          style={{ margin: "50px 0" }}
        >
          <h4 className="title">Latest Notices</h4>
          <DropdownCard data={notices} />
        </div>
      </div>
    </Layout>
  );
}

export default Notice;
