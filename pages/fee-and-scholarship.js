import Layout from "@/components/layout/Layout";
import React from "react";

function FeeStructure() {
  const feeData = {
    onAdmission: [
      { label: "Registration Charges", value: "₹500" },
      { label: "Admission Fee", value: "₹5,000" },
      { label: "Annual Collection", value: "₹10,000" },
      { label: "Annual Charges", value: "₹8,000" },
      { label: "Development Fees", value: "₹5,000" },
    ],
    tuitionFee: [
      { label: "Class Prep to X", value: "₹2,500 per month" },
      { label: "Class XI & XII", value: "₹3,000 per month" },
    ],
    additionalFees: [
      {
        label: "Computer Fee (Per Month)",
        subLabel: "Class X & XII (Optional)",
        value: "₹500",
      },
      {
        label: "Science Fee (Per Month - Per Subject)",
        subLabel: "Class X & XII (Optional)",
        subLabel2: "(Physics, Chemistry, Biology)",
        value: "₹300",
      },
    ],
  };

  const scholarshipData = [
    {
      title: "Merit Scholarship",
      criteria: "Above 90% in previous class",
      benefit: "25% fee waiver",
    },
    {
      title: "Sports Excellence",
      criteria: "National/State level achievements",
      benefit: "Up to 50% fee waiver",
    },
    {
      title: "Sibling Discount",
      criteria: "Two or more siblings",
      benefit: "10% discount for second child",
    },
    {
      title: "Girls Education Initiative",
      criteria: "All girl students",
      benefit: "Special fee consideration",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Fee Structure">
      <section className="about-area-two">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="col-12">
              <div className="section__title text-center mb-45">
                <h2 className="title">Fee Structure & Scholarships</h2>
                <p className="mt-3">Academic Year 2024-25</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Fee Structure */}
            <div className="col-lg-8">
              {/* On Admission */}
              <div className="table-responsive mb-4">
                <h3 className="mb-3">On Admission</h3>
                <table className="table">
                  <tbody>
                    {feeData.onAdmission.map((item, index) => (
                      <tr key={index}>
                        <th>{item.label}</th>
                        <td className="text-end">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tuition Fee */}
              <div className="table-responsive mb-4">
                <h3 className="mb-3">Tuition Fee (Per Month)</h3>
                <table className="table">
                  <tbody>
                    {feeData.tuitionFee.map((item, index) => (
                      <tr key={index}>
                        <th>{item.label}</th>
                        <td className="text-end">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Additional Fees */}
              <div className="table-responsive mb-4">
                <h3 className="mb-3">Additional Fees</h3>
                <table className="table">
                  <tbody>
                    {feeData.additionalFees.map((item, index) => (
                      <tr key={index}>
                        <th>
                          {item.label}
                          {item.subLabel && (
                            <>
                              <br />
                              <small>{item.subLabel}</small>
                            </>
                          )}
                          {item.subLabel2 && (
                            <>
                              <br />
                              <small>{item.subLabel2}</small>
                            </>
                          )}
                        </th>
                        <td style={{ textAlign: "right" }}>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scholarships */}
            <div className="col-lg-4">
              <div className="scholarship-section">
                {scholarshipData.map((item, index) => (
                  <div key={index} className="scholarship-card mb-4">
                    <h4 style={{ color: "#1363DF" }}>{item.title}</h4>
                    <p className="criteria">
                      <strong>Criteria:</strong> {item.criteria}
                    </p>
                    <p className="benefit">
                      <strong>Benefit:</strong> {item.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="note-section">
                <h4>Important Notes:</h4>
                <ul>
                  <li>All fees are subject to revision</li>
                  <li>Fee once paid is non-refundable</li>
                  <li>Late fee charges applicable after due date</li>
                  <li>
                    Scholarships are subject to verification of documents and
                    approval
                  </li>
                </ul>
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
          font-weight: 500;
          padding: 15px;
          border: none;
          width: 70%;
        }
        .table td {
          padding: 15px;
          border: none;
          font-weight: 600;
        }
        .scholarship-card {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .scholarship-card h4 {
          color: #2b4eff;
          margin-bottom: 10px;
          font-size: 18px;
        }
        .note-section {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .note-section ul {
          padding-left: 20px;
          margin-bottom: 0;
        }
        .note-section li {
          margin-bottom: 8px;
        }
        @media (max-width: 768px) {
          .scholarship-section {
            margin-top: 30px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default FeeStructure;
