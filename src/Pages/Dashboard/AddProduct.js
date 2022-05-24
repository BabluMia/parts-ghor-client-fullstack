import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = async (data) => {
    const product = {
      name: data.itemName,
      price: parseInt(data.price),
      min_order: parseInt(data.min_order),
      quantity: parseInt(data.quantity),
      desc: data.desc,
      img: data.img,
    };
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(res=>res.json).then(data=>{
        if(data){
            swal({
                title:'product Info',
                text:'Successfully Added Doctor',
                icon:'success'
            })
        }
        console.log(product)
        reset()
    })
  };
  return (
    <div>
      <h3 className="text-center text-3xl my-3">ADD ITEM </h3>
      <div class="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <div class="card-body bg-[#ead7d7] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                {...register("itemName", {
                  required: {
                    value: true,
                    message: "itemName is Required",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />

              <input
                type="number"
                placeholder="Item Quantity"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Qantity is Required",
                  },
                })}
              />
              <input
                type="number"
                placeholder="Minimum Quantity"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                {...register("min_order", {
                  required: {
                    value: true,
                    message: "Minimum Quantity",
                  },
                })}
              />
              <textarea
                type="text"
                placeholder="Type Description"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                {...register("desc", {
                  required: {
                    value: true,
                    message: "Product desc",
                  },
                })}
              />
              <input
                placeholder="drop img"
                className="input input-bordered w-full border-slate-600 max-w-xs my-3"
                type="text"
                {...register("img", {
                  required: {
                    value: true,
                    message: "img",
                  },
                })}
              />
            </div>

            <div className="form-control mt-3">
              <input
                type="submit"
                value={"ADD ITEM"}
                className="btn btn-success"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
