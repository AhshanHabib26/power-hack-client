import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../Images/PageNotFound.gif";
// import './PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <div>
      <div className=" max-w-sm  lg:max-w-xl mx-auto">
        <img
          className=" mt-24"
          src={NotFoundImg}
          alt=""
        />
        <button
          onClick={handleBackBtn}
          className=" btn  btn-outline btn-secondary hover:bg-secondary transition-all ease-in-out  "
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
