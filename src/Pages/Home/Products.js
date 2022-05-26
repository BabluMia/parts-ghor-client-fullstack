import React from "react";
import { useQuery } from "react-query";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import ProductMap from "./ProductMap";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
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
      <h2 className="text-4xl text-center my-5 ">What We Manufacturer</h2>
      <div className="grid mb-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center">
        {[...products]
          ?.reverse()
          .slice(0, 6)
          .map((product, index) => (
            <ProductMap key={index} product={product}></ProductMap>
          ))}
      </div>
    </div>
  );
};

export default Products;
