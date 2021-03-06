import React, { useState } from "react";

const ManageOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  fetch(`https://nameless-inlet-18267.herokuapp.com/orders`)
    .then((res) => res.json())
    .then((data) => setAllOrder(data));
  return (
    <div>
      <p className="my-3 text-3xl text-center">Manage All Order</p>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrder?.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.email}</td>
                <td>{order.itemName}</td>
                <td>{order.orderQuantity}</td>
                <td>
                  {order.paid === true ? (
                    <span className="text-cyan-900 font-bold">Paid Done</span>
                  ) : (
                    <span className="font-bold text-danger">Not Paid</span>
                  )}
                </td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
