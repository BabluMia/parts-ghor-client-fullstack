import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";

import Users from "./Pages/Dashboard/Users";
import SingleProduct from "./Pages/Home/SingleProduct";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Profile from "./Pages/Dashboard/Profile";
import Portfolio from "./Pages/Dashboard/Portfolio";
import AddProduct from "./Pages/Dashboard/AddProduct";
import NotFound from "./Pages/Shared/NotFound";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import AddReview from "./Pages/Dashboard/AddReview";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import MangeItem from "./Pages/Dashboard/MangeItem";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-portfolio" element={<MyPortfolio />}></Route>
        <Route
          path="product/:id"
          element={
            <RequireAuth>
              <SingleProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />}></Route>
          <Route path="my-order" element={<MyOrder />}></Route>

          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-products"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-order"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-Item"
            element={
              <RequireAdmin>
                <MangeItem/>
              </RequireAdmin>
            }
          ></Route>
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
