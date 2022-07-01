import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const ItemModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset 
  } = useForm();

  const onSubmit = (data) => {
    const modalInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
    };

    fetch("https://power-hack-26.herokuapp.com/add-billing", {
      method: "POST",
      body: JSON.stringify(modalInfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId !== 0){
          toast.success('Your Billing Data is Added')
        }
        console.log(result)
        reset()
      });
  };

  return (
    <div>
      <input type="checkbox" id="item-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className=" text-xl font-semibold text-secondary mb-3">
            Add New Bill
          </h1>
          <div>
            <form 
              className="grid grid-cols-1 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="input input-bordered"
                placeholder="Enter Your Full Name"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <span className="text-error">Name is required</span>
              )}

              <input
                className="input input-bordered"
                placeholder="Enter Your Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
              {errors.name?.type === "required" && (
                <span className="text-error">Email is required</span>
              )}

              <input
                placeholder="Enter Your Phone Number"
                className="input input-bordered"
                type="number"
                {...register("phone", {
                  required: (
                    <span className=" text-error">Phone Input is Blank</span>
                  ),
                  minLength: {
                    value: 11,
                    message: "Minimum Length 11",
                  },
                })}
              />
              {errors.phone && <span role="alert">{errors.phone.message}</span>}

              <input
                className="input input-bordered"
                placeholder="Enter Your Paid Amount"
                type="number"
                {...register("amount", {
                  required: true,
                })}
              />
              {errors.amount?.type === "required" && (
                <span className="text-error">Paid Amount is Required</span>
              )}
              <div className=" flex justify-around items-center">
                <div>
                  <input
                    className="btn btn-ghost bg-secondary text-white"
                    type="submit"
                    value="ADD Bill"
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="item-modal" className="btn btn-md btn-error">
                      Cancel
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
