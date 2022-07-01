import React from "react";
import {Link} from 'react-router-dom'
import useItems from "../Hooks/useItems";

const Navbar = () => {

  const [product] = useItems();

  const productPrice = product.map((price) => Number(price.amount));
  const initialValue = 0;
  const sumTotalValue = productPrice.reduce((prev, curv) => prev + curv, initialValue);

  return (
    <div>
      <div class="navbar bg-secondary text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
            >
              <li>
                <Link to=''>Paid Total: $ {sumTotalValue}</Link>
              </li>
              <li className=" my-3">
                <Link to=''>Contact</Link>
              </li>
              <li>
                <Link to=''>About</Link>
              </li>
            </ul>
          </div>
          <Link to='/dashboard' class="btn btn-ghost normal-case text-xl">PowerHack</Link>
        </div>
        <div class="navbar-end mr-0 lg:mr-10 hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to=''>Paid Total: $ {sumTotalValue}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
