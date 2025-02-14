import Layout from "@/components/layout/Layout";
import React from "react";
import Link from "next/link";
import { committeeMembers } from "@/data/committee_members.json";

function SchoolComitte() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SchoolComitte">
      <section className="mentors-area section-pt-120 section-pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title text-center mb-50">
                <h2 className="title">School Managing Committee</h2>
                <p>
                  Our dedicated team of professionals guiding the school towards
                  excellence
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {committeeMembers.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-sm-6 col-12 d-flex justify-content-center"
              >
                <div className="mentors__item w-100">
                  <div className="mentors__img">
                    <Link href={`/school-comittee/${member.id}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                          background: member.bgColor,
                        }}
                      />
                    </Link>
                  </div>
                  <div className="mentors__content">
                    <div className="mentors__content-top">
                      <h4 className="name">
                        <Link href={`/school-comittee/${member.id}`}>
                          {member.name}
                        </Link>
                      </h4>
                      <span className="designation">{member.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SchoolComitte;
