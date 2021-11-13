import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState(null);

  // getting all services
  useEffect(() => {
    fetch("https://pure-shore-77614.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-3">
      
      {services && (
        <h1 className="text-center">Services Available: {services.length}</h1>
      )}
      {/* spinner */}
      {!services && (
        <div class="d-flex justify-content-center my-5 pb-5">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="services">
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
    </div>
  );
};

export default Services;
