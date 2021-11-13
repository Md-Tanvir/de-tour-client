import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [services, setServices] = useState(null);
  const { user } = useAuth();
  const email = user.email;

  // get orders of logged user
  useEffect(() => {
    fetch(`https://pure-shore-77614.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // cancelling order with id
  const handleCancel = (id) => {
    fetch(`https://pure-shore-77614.herokuapp.com/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Do you want to cancel the service?");
          alert("Canceled successfully");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center my-4">Your Order Summery</h2>
      {/* spinner */}
      {!services && (
        <div class="d-flex justify-content-center">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-4 g-5">
        {services?.map((pd) => (
          <div key={pd._id} className="col">
            <div className="card h-100">
              <img
                src={pd?.img}
                style={{ height: "200px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">{pd?.name}</h2>
                <p className="card-text">{pd?.description.slice(0, 50)}</p>
                <h4>$ {pd?.price}</h4>

                <button
                  onClick={() => handleCancel(pd?._id)}
                  className="btn btn-danger float-end"
                >
                  Cancel
                </button>
                <button className="btn btn-success float-start">
                  {pd?.status}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
