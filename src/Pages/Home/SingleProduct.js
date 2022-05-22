import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";


const SingleProduct = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: product,
    refetch
  } = useQuery(["product", id], () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
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
  const { name, price, min_order, quantity, desc, img } = product;
  return (
    <>
      <Header />
      <h2 className="text-center my-4 text-3xl font-bold">Purchace Now</h2>
      <div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
            <img src={img} className=" rounded-2xl w-[350px] lg:w-[550px]"  alt='product img' />
            <div className="mx-0 lg:mx-5">
              <h1 class="text-3xl font-bold">Name:{name}</h1>
              <p class="mt-4 text-lg border-b-2 border-b-cyan-900 inline-block">Product Description:</p>
              <span className=" mb-4 block">{desc}</span>
              <p className="my-2">Price Per Pices: ${price}</p>
              <p className="my-2">Minimum Booking: ${min_order}</p>
              <p className="my-2">Available: ${quantity}</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
