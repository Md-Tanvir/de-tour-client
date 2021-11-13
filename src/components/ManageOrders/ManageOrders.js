import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState(null);
  const [isApproved,setIsApproved]= useState(false)

  // getting all orders
  useEffect(() => {
    fetch("https://pure-shore-77614.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isApproved]);

  // deleting order with id
  const handleDelete = (id) => {
    fetch(`https://pure-shore-77614.herokuapp.com/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Do you want to delete the service?");
          alert("Deleted successfully");
          const remaining = allOrders.filter((order) => order._id !== id);
          setAllOrders(remaining);
        }
      });
  };
  // updating order status
  const handleStatus = (id) => {
    fetch(`https://pure-shore-77614.herokuapp.com/allOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order Approved");
          setIsApproved(true)
        }
      });
  };

  return (
    <div>
      <div className="container my-3">
        {allOrders && <h1 className="text-center">Total Order: {allOrders.length}</h1> }
        {/*  */}
        {!allOrders && (
        <div class="d-flex justify-content-center my-5 pb-5">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
        <div className="services">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {allOrders?.map((order) => (
              <div key={order._id} className="col">
                <div className="card h-100">
                  <img
                    src={order?.img}
                    style={{ height: "200px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title">{order?.name}</h2>
                    <p className="card-text">
                      Order from: <b>{order?.email}</b>
                    </p>
                    <h4>$ {order?.price}</h4>
                    <button
                      onClick={() => handleStatus(order._id)}
                      className="btn btn-success"
                    >
                      Give Approval
                    </button>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
