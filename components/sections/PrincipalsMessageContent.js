import React from "react";
import Image from "next/image";

const PrincipalsMessageContent = () => {
  return (
    <section className="about-area section-pt-80 section-pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="principal-image text-center">
              <img
                src="/assets/img/others/principal.jpg"
                alt="Principal"
                className="img-fluid rounded"
                style={{
                  maxWidth: "350px",
                  border: "10px solid white",
                  boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                }}
              />
              <div className="principal-info mt-4">
                <h4 className="mb-1">Dr. Sarah Johnson</h4>
                <p className="text-muted">M.Ed, Ph.D in Education</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-lg-0 ps-lg-5">
            {" "}
            <div className="principal-message">
              <div className="section__title mb-4">
                <span className="sub-title">Welcome Message</span>
                <h2 className="title">From The Principal's Desk</h2>
              </div>

              <div className="message-content">
                <p className="mb-4">Dear Parents and Students,</p>

                <p className="mb-4">
                  It gives me immense pleasure to welcome you to [School Name],
                  where we believe in nurturing not just minds, but complete
                  individuals who will shape tomorrow's world. As we step into
                  another exciting academic year, I am filled with optimism
                  about the countless opportunities that await our students.
                </p>

                <p className="mb-4">
                  At [School Name], we understand that education goes far beyond
                  textbooks and examinations. Our approach to education is
                  holistic, focusing on:
                </p>

                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Academic Excellence through innovative teaching methods
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Character Development and value-based education
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Physical Education and sports activities
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Creative Arts and cultural programs
                  </li>
                </ul>

                <p className="mb-4">
                  Our dedicated team of educators works tirelessly to create a
                  nurturing environment where every child feels valued,
                  supported, and encouraged to explore their potential. We
                  believe that every student is unique, with their own set of
                  talents and abilities, and our role is to help them discover
                  and develop these gifts.
                </p>

                <p className="mb-4">
                  Technology integration, environmental consciousness, and
                  global awareness are integral parts of our curriculum. We
                  prepare our students not just for examinations, but for life
                  itself. Our state-of-the-art facilities, combined with
                  traditional values, provide the perfect blend of modern
                  education with cultural roots.
                </p>

                <p className="mb-4">
                  Parent partnership plays a crucial role in a child's
                  education. We encourage active participation from parents in
                  school activities and maintain open channels of communication
                  to ensure the best possible support for our students.
                </p>

                <p className="mb-4">
                  As we move forward, we remain committed to our vision of
                  creating responsible global citizens who are academically
                  sound, morally upright, and socially conscious. I invite you
                  to join us in this exciting journey of learning and growth.
                </p>

                <div className="signature mt-5">
                  <p className="mb-0">Warm regards,</p>
                  <h4 className="mb-0">Dr. Sarah Johnson</h4>
                  <p className="text-muted">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessageContent;
