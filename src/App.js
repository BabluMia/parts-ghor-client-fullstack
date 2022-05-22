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


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product/:id" element={
          <RequireAuth>
             <SingleProduct/>
          </RequireAuth>
           
        }></Route>
        <Route path="/login" element={<Login />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrder/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="portfolio" element={<Portfolio/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="add-products" element={<AddProduct/>}></Route>
          <Route></Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
