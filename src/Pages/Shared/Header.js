import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import {  signOut } from 'firebase/auth';
import swal from "sweetalert";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
      return <Loading/>
    }
  
    const logOut = () =>{
      signOut(auth)
      swal({
        title: "Logout Notification",
        text: 'Succesfully Logged Out',
        icon: "success"
      });
      localStorage.removeItem('accessToken')
    }
    const menuItem = (
      <>
        <li className="">
          <Link
            to={"/"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            HOME
          </Link>
        </li>
  
        <li className="">
          <Link
            to={"/blog"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            BLOG
          </Link>
        </li>
        <li className="">
          <Link
            to={"/contact"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            CONTACT
          </Link>
        </li>
        <li className="">
          <Link
            to={"/about"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            ABOUT
          </Link>
        </li>
        {
          user && <li className="">
          <Link
            to={"/dashboard"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            DASHBOARD
          </Link>
        </li>
        }
        {
          user ? <li className="">
          <a onClick={logOut}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            LOGOUT
          </a>
        </li> : <li className="">
          <Link
            to={"/login"}
            className="hover:bg-[#3e5d51] hover:text-white rounded-lg"
          >
            LOGIN
          </Link>
        </li>
        }
      </>
    );
  
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case ml-1 lg:ml-16 text-2xl font-semibold">
            PARTS GHOR
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal mr-8">{menuItem}</ul>
        </div>
        <div className="navbar-end block ml-32 lg:hidden ">
        <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
  
          {/* <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
      </div>
    );
};

export default Header;