import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //   const url = `http://localhost:5000/order/`
  const [myOrder, setMyOrder] = useState([]);
  fetch(`http://localhost:5000/order?email=${email}`)
    .then((res) => res.json())
    .then((data) => setMyOrder(data));

  return (
    <div>
      <h3>My Order: {myOrder?.length}</h3>
      
    </div>
  );
};

export default MyOrder;
