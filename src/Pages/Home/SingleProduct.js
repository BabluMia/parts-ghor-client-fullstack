import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Header from "../Shared/Header";
import Loading from "../Shared/Loading";

const SingleProduct = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://nameless-inlet-18267.herokuapp.com/product/${id}`;
  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery(["product", id], () =>
    fetch(`https://nameless-inlet-18267.herokuapp.com/product/${id}`).then(
      (res) => res.json()
    )
  );

  if (error) {
    swal({
      title: "Fetch Error",
      text: "Can Not Fatch Products",
      icon: "error",
    });
  }
  const { name, price, min_order, quantity, desc, img } = product || {};

  // error

  const [minQuantity, setMinQuantity] = useState(0);
  useEffect(() => setMinQuantity(min_order), [min_order]);
  const [err, setErr] = useState("This product is available soon");
  useEffect(() => {
    if (minQuantity < min_order) {
      setErr(`You have to make at least ${min_order} bookings`);
    } else if (minQuantity > quantity) {
      setErr(`You can't order more than ${quantity}`);
    } else if (quantity < min_order) {
      setErr("This product is available soon");
    } else {
      setErr("");
    }
  }, [minQuantity]);

  if (isLoading) {
    return <Loading />;
  }

  // place order
  const placeOrder = (event) => {
    event.preventDefault();
    const order = event.target.order.value;
    const phone = event.target.phone.value;

    const orderData = {
      itemName: name,
      orderQuantity: parseInt(order),
      name: user?.displayName,
      email: user?.email,
      totalAmount: parseInt(order * price),
      phone: phone,
    };
    if (order < min_order || order > quantity) {
      swal({
        title: "Placement Error",
        text: `Please order minimum ${order}`,
        icon: "error",
      });
    } else {
      fetch(`https://nameless-inlet-18267.herokuapp.com/orders`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            const newQ = parseInt(quantity) - parseInt(order);
            fetch(`https://nameless-inlet-18267.herokuapp.com/product/${id}`, {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ quantity: newQ }),
            })
              .then((res) => res.json())
              .then((data) => {
                refetch();
                console.log(data);
              });
            swal({
              title: " Order Notification ",
              text: "Thank You For Your Order ....",
              icon: "success",
            });
            // console.log(result);
          }
        });
      console.log(orderData);
    }
    event.target.reset();
  };

  return (
    <>
      <Header />
      <h2 className="text-center my-4 text-3xl font-bold">Purchace Now</h2>
      <div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={img}
              className=" rounded-2xl w-[350px] lg:w-[550px]"
              alt="product img"
            />
            <div className="mx-0 lg:mx-5">
              <h1 class="text-3xl font-bold">Name:{name}</h1>
              <p class="mt-4 text-lg border-b-2 border-b-cyan-900 inline-block">
                Product Description:
              </p>
              <span className=" mb-4 block">{desc}</span>
              <p className="my-2 font-semibold">
                Price Per Pices:{" "}
                <span className="text-lg font-bold">${price}</span>
              </p>
              <p className="my-2 font-semibold">
                Minimum Booking:{" "}
                <span className="text-lg font-bold"> {min_order} Pices</span>
              </p>
              <p className="my-2 font-semibold">
                Available In Stock:{" "}
                <span className="text-lg font-bold">${quantity}</span>
              </p>
              <div>
                <form
                  className="grid grid-cols-1"
                  action=""
                  onSubmit={placeOrder}
                >
                  <input
                    className="p-3 my-3 border-2"
                    disabled
                    type="text"
                    value={user?.email}
                  />
                  <input
                    className="p-3 my-3 border-2"
                    disabled
                    type="text"
                    value={user?.displayName}
                  />
                  <input
                    className="p-3 my-3 border-2"
                    required
                    type="number"
                    name="phone"
                    placeholder="type number"
                  />
                  <input
                    className="p-3 my-3 border-2"
                    required
                    type="number"
                    placeholder={`Minimum Order ${min_order} Please`}
                    name="order"
                    onChange={(e) => setMinQuantity(e.target.value)}
                    defaultValue={min_order}
                    min={min_order}
                    max={quantity}
                  />
                  <span className="my-3">{err}</span>
                  <input
                    disabled={err !== ""}
                    type="submit"
                    value="Place Order"
                    class="btn bg-transparent text-accent hover:text-white w-40"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
