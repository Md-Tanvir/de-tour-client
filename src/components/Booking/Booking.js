import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState({});

  // for getting specific order
  useEffect(() => {
    fetch(`https://pure-shore-77614.herokuapp.com/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "pending";
    data.name = service.name;
    data.description = service.description;
    data.price = service.price;
    data.img = service.image;

    // sending to data base
    fetch("https://pure-shore-77614.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Successful");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="container my-5">
      {/* service area */}
      <div className="row g-5">
        <div className="col-7">
          <div key={service?._id} className="col">
            <div className="card h-100">
              <img
                src={service?.image}
                style={{ height: "400px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">{service?.name}</h2>
                <p className="card-text">{service?.description}</p>
                <h4>$ {service?.price}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* form area */}
        <div className="col-5">
          <h2 className="text-center">Confirm Order</h2>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("displayName")}
              className="service-input"
            />

            <input
              type="email"
              defaultValue={user.email}
              {...register("email")}
              className="service-input"
            />

            <input
              placeholder="Mobile"
              type="tel"
              {...register("mobile")}
              className="service-input"
            />
            <input
              placeholder="Address"
              type="text"
              {...register("address")}
              className="service-input"
            />
            <input type="submit" value="Order Now" className="btn btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
