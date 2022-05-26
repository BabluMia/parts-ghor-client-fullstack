import React, { useState } from "react";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import ManageItemModal from "./ManageItemModal";

const MangeItem = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const {
    isLoading,
    error,
    data: allProducts,
    refetch,
  } = useQuery("products", () =>
    fetch("https://nameless-inlet-18267.herokuapp.com/products").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    swal({
      title: "Fetch Error",
      text: "Can Not Fatch Products",
      icon: "error",
    });
  }
  return (
    <div>
      <h2 className="text-center my-4">All Product {allProducts.length}</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allProducts?.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div class="avatar">
                      <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={product?.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <a
                      href="#my-modal-3"
                      onClick={() => setSingleProduct(product)}
                      class="btn btn-sm"
                    >
                      Delete
                    </a>
                    {console.log(product)}
                  </td>
                </tr>
              ))}
            </tbody>
            {console.log(singleProduct)}
            {singleProduct !== null && (
              <ManageItemModal
                setSingleProduct={setSingleProduct}
                singleProduct={singleProduct}
                refetch={refetch}
              />
            )}
          </table>
        </div>
        {/*  ---------------------------------------*/}
        
      </div>
    </div>
  );
};

export default MangeItem;
