import React from "react";
import { Link } from "react-router-dom";

const ProductMap = ({ product }) => {
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
        <Link to={`/product/${_id}`}>
            <button className="btn btn-primary">Book Loot</button>
        </Link>  
        </div>
      </div>
    </div>
  );
};

export default ProductMap;
