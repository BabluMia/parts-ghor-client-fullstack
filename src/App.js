import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import History from "./Pages/Dashboard/History";
import Users from "./Pages/Dashboard/Users";
import SingleProduct from "./Pages/Home/SingleProduct";


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
          <Route index element={<History/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
