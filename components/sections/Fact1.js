import CounterUp from "../elements/CounterUp";

export default function Fact1() {
  return (
    <>
      <section className="fact-area position-relative section-pt-120 section-pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div
                className="fact__item text-center"
                style={{ backgroundColor: "#F6F8FC" }}
              >
                <div className="fact__content">
                  <h3 className="count">
                    <CounterUp end={50} />+
                  </h3>
                  <p>Expert Teachers</p>
                </div>
                <div className="fact__img">
                  <img src="/assets/img/others/fact_img01.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="fact__item text-center"
                style={{ backgroundColor: "#FCF6F6" }}
              >
                <div className="fact__content">
                  <h3 className="count">
                    <CounterUp end={1000} />+
                  </h3>
                  <p>Happy Students</p>
                </div>
                <div className="fact__img">
                  <img src="/assets/img/others/fact_img02.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="fact__item text-center"
                style={{ backgroundColor: "#EAF8ED" }}
              >
                <div className="fact__content">
                  <h3 className="count">
                    <CounterUp end={20} />+
                  </h3>
                  <p>Extra Activities</p>
                </div>
                <div className="fact__img">
                  <img src="/assets/img/others/fact_img03.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fact__shapes">
          <div className="categories__shapes-item rotateme">
            <img src="/assets/img/objects/categories_shape01.png" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
}
