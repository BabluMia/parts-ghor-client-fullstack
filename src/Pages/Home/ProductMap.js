import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const ProductMap = ({ product }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    const {_id,name,img,desc,price,min_order,quantity} = product
  return (
    <div class="card w-96 bg-base-100 mx-auto shadow-xl cursor-pointer">
      <figure>
        <img
          src={img}
          alt="Shoes"
          style={{width:'300px',height:'300px'}}
          className='my-3 rounded-lg'
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{desc.slice(0,50)}...</p>
        <p>Per Quantity: ${price}</p>
        <p>Minimum Order: {min_order}</p>
        <p>In Stock: {quantity}</p>
        <div class="card-actions justify-end">
        <Link to={`/product/${_id}`}  disabled={admin} className="btn btn-primary">
            {/* <button ></button> */}
            Book Loot
        </Link>  
        </div>
      </div>
    </div>
  );
};

export default ProductMap;
