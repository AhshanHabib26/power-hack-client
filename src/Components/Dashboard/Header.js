import React from "react";
const Header = () => {

  return (
    <div className=" max-w-7xl mx-auto">
      <div class="navbar text-white  rounded-xl   bg-secondary my-5">
        <div class="navbar-start w-[50%]">
          <button class="btn btn-ghost normal-case text-xl">Billings</button>
        </div>
        <div class="navbar-center w-[40%]  hidden lg:flex">
          <input
            type="text"
            placeholder="Type here"
            class="input text-secondary text-xl input-bordered input-secondary w-full max-w-4xl"
          />
        </div>
        <div class="navbar-end">
          <label for="item-modal" class="btn modal-button">
            Add New Bill
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
