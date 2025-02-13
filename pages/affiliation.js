import Layout from "@/components/layout/Layout";
import React from "react";
import affiliationJson from "@/data/affiliation.json";

function Affiliation() {
  const affiliationData = affiliationJson.affiliationData;

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Affiliation">
        <section className="about-area-two">
          <div className="container">
            {/* Affiliation Table */}
            <div className="row">
              <div className="col-12">
                <div className="table-responsive" style={{ overflowX: "auto" }}>
                  <table className="table">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Type</th>
                        <th scope="col">Number</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Validity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {affiliationData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.type}</td>
                          <td>{item.number}</td>
                          <td>{item.category}</td>
                          <td>{item.date}</td>
                          <td>{item.validity}</td>
                          <td>
                            <span
                              className={`badge ${
                                item.status === "Active"
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td>{item.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

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
