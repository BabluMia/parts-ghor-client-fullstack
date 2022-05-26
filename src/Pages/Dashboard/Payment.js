import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L0hNTKkJKROZj1EgrDLSrL4xf7QswyNJF1fKxL3qYtvSMgCwTWNQYCxv8moCjHbUYfOve7YVJnpOMIxZVmiLak3004eNi13T6"
);
// 

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const {
    isLoading,
    error,
    data: order,
  } = useQuery(["order", id], () => fetch(url).then((res) => res.json()));
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
      <div class="card w-96 bg-success  text-primary-content mx-auto">
        <div class="card-body">
          <h2 class="card-title">
            Payment For{" "}
            <span className="font-bold text-cyan-900">{order.itemName}</span>
          </h2>
          <p>
            Orderd By :{" "}
            <span className="font-bold text-cyan-900">{order?.name}</span>
          </p>
          <p>
            Orderd Quantity :{" "}
            <span className="font-bold text-cyan-900">
              {order?.orderQuantity}
            </span>
          </p>
          <p>
            Payable Amount :{" "}
            <span className="font-bold text-cyan-900">
              {order?.totalAmount}
            </span>
          </p>
          <p>
            Phone :{" "}
            <span className="font-bold text-cyan-900">{order?.phone}</span>
          </p>
        </div>
      </div>
      {/* payment card */}
      <div class="card my-6 mx-auto w-96 bg-blue-400 text-neutral-content">
        <div class="card-body  text-center">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
