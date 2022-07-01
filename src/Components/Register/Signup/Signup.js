import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LogoImg from "../../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const inputData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const email = data.email;
    const url = `https://power-hack-26.herokuapp.com/registration/${email}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(inputData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.result.upsertedCount > 0) {
          navigate("/login");
          localStorage.setItem('accessToken', data.token);
          toast.success("Your Account Create Succesfully");

        } else if (data.result.matchedCount !== 0) {
          toast.info("User Already Exsits");
          navigate("/login");
        } else {
          toast.error("Please,Try Again");
        }
      });
  };

  return (
    <div>
      <div>
        <div className="min-h-screen  bg-neutral">
          <div className="flex justify-center items-center mb-3 pt-3">
            <img className="w-[50px]" src={LogoImg} alt="" />
            <h1 className=" text-xl font-extrabold text-secondary ">
              Power Hack
            </h1>
          </div>

          <div className="card max-w-xl mx-auto bg-base-100 border">
            <div className="card-body">
              <h1 className=" text-2xl mt-[-10px]  font-semibold text-secondary">
                Signup
              </h1>
              <p className=" text-md text-secondary mb-2">
                Create New PowerHack Account
              </p>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Name"
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
                    placeholder="Password"
                    className="input input-bordered"
                    type="password"
                    {...register("password", {
                      required: (
                        <span className=" text-error">
                          Password Input is Blank
                        </span>
                      ),
                      minLength: {
                        value: 6,
                        message: "Minimum Length Upto 6",
                      },
                    })}
                  />
                  {errors.password && (
                    <span role="alert">{errors.password.message}</span>
                  )}
                  <p>
                    Already Have An Account?{" "}
                    <Link
                      className="text-secondary text-lg font-semibold"
                      to="/login"
                    >
                      Login
                    </Link>{" "}
                  </p>
                  <input
                    className="btn btn-ghost bg-secondary text-white"
                    type="submit"
                    value="Signup"
                  />
                </form>

                <div className="divider">OR</div>

                <div className=" grid grid-cols-2 gap-x-6">
                  <button className="btn btn-primary">Google</button>
                  <button className="btn btn-secondary">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
