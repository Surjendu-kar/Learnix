import Layout from "@/components/layout/Layout";
import React from "react";

function MandatoryDisclosure() {
  // Sample disclosure data structure
  const disclosureData = {
    generalInfo: [
      { label: "Name of School", value: "Your School Name" },
      { label: "Affiliation Number", value: "CBSE-001" },
      { label: "School Code", value: "12345" },
      {
        label: "Complete Address",
        value: "School Address, City, State - Pincode",
      },
      { label: "Principal Name", value: "Dr. Principal Name" },
      { label: "School Email", value: "school@example.com" },
      { label: "Contact Number", value: "+91-1234567890" },
    ],
    infrastructure: [
      { label: "Total Campus Area", value: "5 Acres" },
      { label: "Total Built Up Area", value: "25,000 sq ft" },
      { label: "Number of Classrooms", value: "50" },
      { label: "Number of Labs", value: "8" },
      { label: "Internet Facility", value: "Yes - 100 Mbps" },
      { label: "Number of Girls Toilets", value: "25" },
      { label: "Number of Boys Toilets", value: "25" },
    ],
    faculty: [
      { label: "Total Teaching Staff", value: "45" },
      { label: "PGT", value: "12" },
      { label: "TGT", value: "18" },
      { label: "PRT", value: "15" },
      { label: "Non-Teaching Staff", value: "20" },
      { label: "School Counsellor", value: "Yes" },
    ],
    enrollment: [
      { label: "School Working Hours", value: "8:00 AM to 2:30 PM" },
      { label: "Total Students", value: "1200" },
      { label: "Student-Teacher Ratio", value: "30:1" },
      { label: "Academic Session", value: "April to March" },
    ],
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Mandatory Disclosure"
    >
      <section className="about-area-two">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="col-12">
              <div className="section__title text-center mb-45">
                <span className="sub-title">Transparency</span>
                <h2 className="title">Mandatory Disclosure</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="row">
            {/* General Information */}
            <div className="col-12 mb-40">
              <div className="table-responsive">
                <h3 className="mb-20">General Information</h3>
                <table className="table">
                  <tbody>
                    {disclosureData.generalInfo.map((item, index) => (
                      <tr key={index}>
                        <th style={{ width: "30%" }}>{item.label}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="col-12 mb-40">
              <div className="table-responsive">
                <h3 className="mb-20">Infrastructure Details</h3>
                <table className="table">
                  <tbody>
                    {disclosureData.infrastructure.map((item, index) => (
                      <tr key={index}>
                        <th style={{ width: "30%" }}>{item.label}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Faculty */}
            <div className="col-12 mb-40">
              <div className="table-responsive">
                <h3 className="mb-20">Staff Details</h3>
                <table className="table">
                  <tbody>
                    {disclosureData.faculty.map((item, index) => (
                      <tr key={index}>
                        <th style={{ width: "30%" }}>{item.label}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Enrollment */}
            <div className="col-12 mb-40">
              <div className="table-responsive">
                <h3 className="mb-20">Academic Information</h3>
                <table className="table">
                  <tbody>
                    {disclosureData.enrollment.map((item, index) => (
                      <tr key={index}>
                        <th style={{ width: "30%" }}>{item.label}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .table-responsive {
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          padding: 20px;
          background: #fff;
        }
        .table {
          margin-bottom: 0;
        }
        .table th {
          background-color: #f8f9fa;
          font-weight: 600;
          padding: 15px;
          border: none;
        }
        .table td {
          padding: 12px 15px;
          vertical-align: middle;
          border: none;
        }
        .table tr {
          border: none;
        }
        h3 {
          color: #333;
          font-size: 24px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .table-responsive {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default MandatoryDisclosure;
