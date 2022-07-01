import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LogoImg from "../../../Images/logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const email = data.email;
    const url = `https://power-hack-26.herokuapp.com/login/${email}`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Welcome Our Awesome Dashboard");
          navigate('/dashboard')
        }else{
          navigate('/signup')
          toast.warning("Sorry! Please Create an Account?")
        }
      });
  };

  return (
    <div className=" bg-neutral min-h-screen">
      <div className="flex justify-center items-center mb-3 pt-3">
        <img className="w-[50px]" src={LogoImg} alt="" />
        <h1 className=" text-xl font-extrabold text-secondary ">Power Hack</h1>
      </div>
      <div class="card max-w-xl mx-auto bg-base-100 border">
        <div className="card-body">
          <h1 className=" text-3xl mt-[-10px]  font-semibold text-secondary">
            Login
          </h1>
          <p className=" text-md text-secondary mb-2">
            Access PowerHack using your Email and Password.
          </p>
          <div>
            <form
              className="grid grid-cols-1 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="input input-bordered"
                placeholder="Enter Your Email"
                type="email"
                {...register("email", { pattern: /\S+@\S+\.\S+/ })}
              />
              <input
                placeholder="Password"
                className="input input-bordered"
                type="password"
                {...register("password")}
              />
              <label class="label">
                <p>
                  You Have Not An Account, Please?{" "}
                  <Link
                    className="text-secondary text-lg font-semibold"
                    to="/signup"
                  >
                    Signup
                  </Link>{" "}
                </p>
              </label>
              <input
                className="btn btn-ghost bg-secondary text-white"
                type="submit"
                value="Login"
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
  );
};

export default Login;
