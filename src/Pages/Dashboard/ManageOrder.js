import React, { useState } from 'react';

const ManageOrder = () => {
    const [allOrder,setAllOrder] = useState([])
    fetch(`http://localhost:5000/orders`)
    .then(res=>res.json())
    .then(data=>setAllOrder(data))
    return (
        <div>
            <p className='my-3 text-3xl text-center'>Manage All  Order</p>
            <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  allOrder?.map((order,index)=> <tr key={index}>
                  <th>{index+1}</th>
                  <td>{order.email}</td>
                  <td>{order.itemName}</td>
                  <td>{order.orderQuantity}</td>
                  <td>{order.totalAmount}</td>
                  <td>Action</td>
                </tr>)
              }
            
              
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageOrder;