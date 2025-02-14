import Layout from "@/components/layout/Layout";
import React from "react";
import { affiliationData } from "@/data/affiliation.json";
import TableComponent from "@/components/school-cards/TableComponent";

function Affiliation() {
  const headerItems = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
  ];

  const expandedFields = [
    { key: "type", label: "Type" },
    { key: "number", label: "Number" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
    { key: "validity", label: "Validity" },
    { key: "status", label: "Status", type: "badge" },
    { key: "location", label: "Location" },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Affiliation">
        <section className="about-area-two">
          <div className="container">
            {/* Affiliation Table */}
            <TableComponent
              data={affiliationData}
              headerItems={headerItems}
              expandedFields={expandedFields}
            />

            {/* Infrastructure Section */}
            <div className="row mt-80">
              <div className="col-12">
                <div className="section__title mb-30">
                  <h2 className="title">Infrastructure and Facilities</h2>
                </div>
                <div className="about__content-wrap">
                  <p>
                    Our state-of-the-art infrastructure includes modern
                    classrooms, well-equipped laboratories, a comprehensive
                    library, and expansive sports facilities. Our campus is
                    designed to provide an optimal learning environment that
                    supports both academic excellence and holistic development.
                  </p>
                  <div className="row mt-30">
                    <div className="col-md-3 col-sm-6">
                      <div className="fact__item-two text-center mb-30 h-100">
                        <div className="fact__content-two">
                          <h3>Modern Classrooms</h3>
                          <p>Smart boards & AC rooms</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="fact__item-two text-center mb-30 h-100">
                        <div className="fact__content-two">
                          <h3>Laboratories</h3>
                          <p>Physics, Chemistry, Biology & Computer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="fact__item-two text-center mb-30 h-100">
                        <div className="fact__content-two">
                          <h3>Library</h3>
                          <p>20,000+ Books</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="fact__item-two text-center mb-30 h-100">
                        <div className="fact__content-two">
                          <h3>Sports Facilities</h3>
                          <p>Indoor & Outdoor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .table-responsive {
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .table {
          margin-bottom: 0; /* Remove bottom margin */
        }
        .table th {
          background-color: #f8f9fa;
          font-weight: 600;
          padding: 15px;
          border: none; /* Remove borders */
        }
        .table td {
          padding: 12px 15px;
          vertical-align: middle;
          border: none; /* Remove borders */
        }
        .table tr {
          border: none; /* Remove row borders */
        }
        .fact__item-two {
          background: #fff;
          padding: 30px 20px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .fact__item-two:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .table-responsive {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </>
  );
}

export default Affiliation;
