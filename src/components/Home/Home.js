import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner.png";
import faq from "../../img/faq.png";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState(null);
  // getting all services
  useEffect(() => {
    fetch("https://pure-shore-77614.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);

  return (
    <div className="container">
      {/* hero area */}
      <div className="row align-items-center py-5 g-3">
        <div className="col-12 col-md-6">
          <h1 className="hero-text">
            LET'S TAKE A BREAK <br />
            TOUR THE WORLD <br />
            WITH US
          </h1>
          <Link to="/services">
            <button className="btn btn-hero">BOOK NOW</button>
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <img src={banner} className="img-fluid" alt="" />
        </div>
      </div>

      {/* service area */}
      <div className="my-5">
        <h1 className="text-center my-3">Our Services</h1>
        {/* spinner */}
        {!services && (
          <div class="d-flex justify-content-center">
            <div class="spinner-grow my-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {services?.map((pd) => (
            <div key={pd._id} className="col">
              <div className="card h-100">
                <img
                  src={pd?.image}
                  style={{ height: "250px", objectFit: "cover" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="card-title">{pd?.name}</h2>
                  <p className="card-text">{pd?.description.slice(0, 150)}</p>
                  <h4>$ {pd?.price}</h4>
                  <Link to={`/booking/${pd._id}`}>
                    <button className="btn btn-success float-end">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* faq area */}
      <div>
        <h1 className="text-center my-3">
          Frequently Asked <span>Questions</span>
        </h1>
        <div className="row g-5 my-1 align-items-center">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="faq-img d-flex justify-content-center">
              <img src={faq} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-4">
                <h2 className="accordion-header " id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    DO I NEED TRAVEL INSURANCE?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <article>
                      <p className="text-secondary">
                        Travel insurance is available and recommended to protect
                        your travel investment. Many trips, such as tours and
                        cruises, involve non-refundable funds paid months in
                        advance. Travel insurance protects you from losing this
                        investment. Perhaps even more important is the ‘during
                        travel’ coverage and assistance that comes with the
                        top-flight insurance companies we carry.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header border-top" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    HOW DO I CANCEL A TRIP?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <article>
                      <p className="text-secondary">
                        Call us right away. If it’s after normal business hours,
                        please contact the next involved travel supplier
                        (airline, hotel, tour operator, cruise line) to cancel
                        any reservations you will not be able to use. If you
                        purchased travel insurance, please contact the insurance
                        company’s 24-hour line to start the cancellation process
                        and ensure your maximum refund.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header border-top" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    HOW DO I KNOW I CAN TRUST THIS TRAVEL VENDOR?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <article>
                      <p className="text-secondary">
                        Travel Company is extremely cautious when it comes to
                        choosing our business partners and vendors. This vetting
                        of travel suppliers and support of the ‘good ones’ over
                        the past 50+ years has given us preferred access to the
                        world’s top trusted suppliers. In turn, they trust us to
                        represent and care htmlFor the reputations they have
                        earned over the years and to deliver the same high
                        standard of care to our mutual clients.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header border-top" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    WHY SHOULD I USE A TRAVEL AGENT TO BOOK A VACATION?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <article>
                      <p className="text-secondary">
                        A travel agent takes all of the headache out of planning
                        a trip and handles virtually all aspects of your travel,
                        at absolutely no cost to you. The combined experience of
                        the team and the feedback from our thousands of
                        travelers provides an invaluable resource to the
                        traveler planning an important trip.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* news letter are */}
      <div className="container ">
        <div className="row mb-5 pb-5">
          <h1 className="text-center my-5 section-title">
            Subscribe To Our Newsletter
          </h1>
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <button className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
