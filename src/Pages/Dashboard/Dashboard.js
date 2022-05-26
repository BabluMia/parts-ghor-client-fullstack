import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl font-bold text-secondary text-center my-3">
            Welcome To Your Dashboard
          </h2>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}


            <li>
              <Link to={"/dashboard"}>My Profile</Link>
            </li>
            {!admin && <li>
              <Link to={"/dashboard/my-order"}>My Order</Link>
            </li>}
            
            
            <li>
              <Link to={"/dashboard/add-review"}>Add Review</Link>
            </li>

            {admin && 
              <>
                <li>
                  <Link to={"/dashboard/users"}>All user</Link>
                </li>
                <li>
                  <Link to={"/dashboard/add-products"}>Add Products</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manage-order"}>Manage Order</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manage-Item"}>Manage Item</Link>
                </li>
              </>}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
