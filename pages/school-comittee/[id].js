import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { committeeMembers } from "@/data/committee_members.json";
import { useState } from "react";

export default function ComitteeDetails() {
  let Router = useRouter();
  const [comitteeDetails, setComitteeDetails] = useState(null);
  const { id } = Router.query;

  useEffect(() => {
    setComitteeDetails(
      committeeMembers.find((comittee) => comittee.id === parseInt(id))
    );
  }, [id]);

  if (!comitteeDetails) {
    return null;
  }

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="comittee Details"
      >
        <section className="instructor-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instructor-details-wrap">
                  <div className="instructor-details-img">
                    <img
                      src={comitteeDetails.image}
                      alt={comitteeDetails.name}
                    />
                  </div>
                  <div className="instructor-details-content">
                    <div className="content-top">
                      <div className="left-side-content">
                        <h2 className="title">{comitteeDetails.name}</h2>
                        <span className="designation">
                          {comitteeDetails.role}
                        </span>
                      </div>
                    </div>
                    <div className="instructor-info-wrap">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-email" />
                          <Link href={`mailto:${comitteeDetails.email}`}>
                            {comitteeDetails.email}
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-mortarboard" />
                          {comitteeDetails.qualification}
                        </li>
                      </ul>
                    </div>
                    <div className="bio-content">
                      <h4 className="title">About:</h4>
                      <p>{comitteeDetails.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <style jsx>{`
        .instructor-details-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 40px;
        }

        .instructor-details-img {
          max-width: 300px;
          max-height: 350px;
          width: 100%;
        }

        .instructor-details-img img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }

        .instructor__shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-height: 300px;
          z-index: 0;
        }

        .instructor-details-content {
          flex: 1;
        }

        @media (max-width: 991px) {
          .instructor-details-wrap {
            flex-direction: column;
            text-align: center;
          }

          .instructor-details-img {
            margin-bottom: 30px;
          }

          .content-top {
            justify-content: center;
          }

          .instructor-info-wrap ul {
            justify-content: center;
          }
        }
      `}</style>
      y
    </>
  );
}
