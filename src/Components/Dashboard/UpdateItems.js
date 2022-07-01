import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LogoImg from "../../Images/logo.png";

const UpdateItems = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
 
  } = useForm();

  useEffect(() => {
    const url = `https://power-hack-26.herokuapp.com/update-billing/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  },[id]);

  const onSubmit = (data) => {
    const dataInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
    };

    const url = `https://power-hack-26.herokuapp.com/update-billing/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.modifiedCount > 0) {
          toast("Your Product Update Successfully");
          navigate("/dashboard")
        }
      });
  };

  return (
    <div className=" bg-neutral min-h-screen">
      <div className="flex justify-center items-center mb-8 pt-8">
        <img className="w-[50px]" src={LogoImg} alt="" />
        <h1 className=" text-xl font-extrabold text-secondary ">Power Hack</h1>
      </div>
      <div class="card max-w-lg mx-auto bg-base-100 border">
        <div className="card-body">
          <div>
            <form
              className="grid grid-cols-1 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="input text-secondary text-lg placeholder:text-secondary input-bordered"
                placeholder={product.name}
                type="text"
                {...register("name")}
              />
              <input
                className="input text-secondary text-lg placeholder:text-secondary input-bordered"
                placeholder={product.email}
                type="email"
                {...register("email")}
              />

              <input
                placeholder={product.phone}
                className="input text-secondary text-lg placeholder:text-secondary input-bordered"
                type="number"
                {...register("phone")}
              />

              <input
                className="input text-secondary text-lg placeholder:text-secondary input-bordered"
                placeholder={product.amount}
                type="number"
                {...register("amount")}
              />

              <input
                className="btn btn-ghost bg-secondary text-white"
                type="submit"
                value="Update Bill"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
