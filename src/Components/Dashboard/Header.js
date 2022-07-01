import React from "react";
const Header = () => {

  return (
    <div className=" max-w-7xl mx-auto">
      <div class="navbar text-white  rounded-xl   bg-secondary my-5">
        <div class="navbar-start">
          <button class="btn btn-ghost normal-case text-xl">Billings</button>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <div class="form-control">
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered"
              />
            </div>
          </ul>
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
