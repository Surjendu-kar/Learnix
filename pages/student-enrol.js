import Layout from "@/components/layout/Layout";
import TableComponent from "@/components/school-cards/TableComponent";
import React from "react";
import { enrollmentData } from "@/data/student_enroll.json";

function StudentEnrol() {
  const headerItems = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "grade", label: "Grade" },
    { key: "enrollmentDate", label: "Date" },
  ];

  const expandedFields = [
    { key: "studentId", label: "Student ID" },
    { key: "name", label: "Name" },
    { key: "grade", label: "Grade" },
    { key: "enrollmentDate", label: "Enrollment Date" },
    { key: "status", label: "Status", type: "badge" },
    { key: "parentName", label: "Parent Name" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="StudentEnrol">
      <div className="container" style={{ margin: "50px auto" }}>
        <TableComponent
          data={enrollmentData}
          headerItems={headerItems}
          expandedFields={expandedFields}
        />
      </div>
    </Layout>
  );
}

export default StudentEnrol;
