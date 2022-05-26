import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import OrderDel from "./OrderDel";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //   const url = `https://nameless-inlet-18267.herokuapp.com/order/`
  const [myOrder, setMyOrder] = useState([]);
  fetch(`https://nameless-inlet-18267.herokuapp.com/order?email=${email}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setMyOrder(data));

  const [order,setOrder] = useState(null)

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Orderd Quantity</th>
              <th>Payable Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order?.itemName}</td>
                <td>{order?.orderQuantity}</td>
                <td>{order?.totalAmount}</td>
                <td>
                  <button class="btn btn-sm mx-2">Pay</button>
                  <a href="#my-modal-2" onClick={()=>setOrder(order)} class="btn btn-sm">
                    Cancel
                  </a>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        {/* --------- */}
        {
          order !== null && <OrderDel setOrder={setOrder } order={order} />
        }
      </div>
    </div>
  );
};

export default MyOrder;
