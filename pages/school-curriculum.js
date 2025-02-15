import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { curriculumData } from "@/data/curriculum_data.json";

const CurriculumCard = ({ name, courses, link, icon }) => (
  <div className="col">
    <div className="categories__item">
      <Link href={link}>
        <i className={icon} />
        <span className="name">{name}</span>
        <span className="courses">{courses}</span>
      </Link>
    </div>
  </div>
);

function SchoolCurriculum() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="School Curriculum">
      <section className="categories-area section-py-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-9">
              <div className="categories__wrap">
                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                  {curriculumData.map((item) => (
                    <CurriculumCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SchoolCurriculum;
