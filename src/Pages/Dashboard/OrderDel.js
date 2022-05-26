import React from "react";
import swal from "sweetalert";

const OrderDel = ({ order, setOrder }) => {
  // delete
  const handleDelete = (id) => {
    const url = `https://nameless-inlet-18267.herokuapp.com/orders/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal({
            title: "Delete Notification",
            text: "Deleted SuccessFully",
            icon: "success",
          });
        }
        setOrder(null);
      });
  };
  return (
    <div class="modal" id="my-modal-2">
      <div class="modal-box">
        <label
          onClick={() => setOrder(null)}
          for="my-modal-2"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>

        <h3 class="font-bold text-lg">
          {`Are you sure u want to delete ${order.itemName} order`}
        </h3>
        <p class="py-4">
          If you delete you do not able to see it on your order .!!
        </p>
        <div class="modal-action">
          <button
            class="btn btn-sm mx-2"
            onClick={() => handleDelete(order._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDel;
