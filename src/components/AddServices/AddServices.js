import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for adding new service
  const onSubmit = (data) => {
    fetch("https://pure-shore-77614.herokuapp.com/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
            alert('Successful Added');
        reset();
        }
      });
 
  };

  return (
    <div className="container">
      <div className="">
        <h1 className="mt-5 text-center ">Add Services Here</h1>
        <div className='py-5'>
          {/* form for adding new service */}
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Service Name"
              className="service-input"
            />
            <br />
            <input
              {...register("description")}
              placeholder="Service Description"
              className="service-input"
            />
            <br />

            <input
              {...register("image", { required: true })}
              placeholder="Service Image Link"
              className="service-input"
            />
            <br />
            <input
              {...register("price", { required: true })}
              placeholder="Service Price"
              type="number"
              className="service-input"
            />
            <br />

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              value="Add Service"
              className="btn btn-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
