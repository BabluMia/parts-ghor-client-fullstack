import React from "react";
import swal from "sweetalert";

const ManageItemModal = ({ singlePoduct, setSingleProduct, refetch }) => {
  console.log(singlePoduct);
  const deleteItem = (id) => {
    const url = `https://nameless-inlet-18267.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal({
            title: "Delete Notification",
            text: "Deleted Successfully",
            icon: "success",
          });
        }
        console.log(singlePoduct);
        setSingleProduct(null);
        refetch();
      });
  };
  return (
    <div class="modal" id="my-modal-3">
      <div class="modal-box">
        <label
          onClick={() => setSingleProduct(null)}
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>

        <h3 class="font-bold text-lg">
          {`Are you sure u want to delete  ${singlePoduct?.name}`}
        </h3>
        <p class="py-4">If you delete you do not able to see it on your Item</p>
        <div class="modal-action">
          <button
            class="btn btn-sm mx-2"
            onClick={() => deleteItem(singlePoduct?._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItemModal;
