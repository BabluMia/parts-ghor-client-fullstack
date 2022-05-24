import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import { BsBookFill } from "react-icons/bs";
import swal from "sweetalert";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user] = useAuthState(auth);

  const {
    isLoading,
    error,
    refetch,
    data: profile,
  } = useQuery(["userData", user], () =>
    fetch(`http://localhost:5000/user/${user?.email}`).then((res) => res.json())
  );

  if(isLoading){
      return <Loading/>
  }
  if(error){
    swal({
        title:'Fetch Error',
        text:'Faild To Fetch',
        icon:'error'
    })
  }
//   console.log(profile);
const getData = e=>{
    e.preventDefault()
    const update = {
        name:profile?.displayName,
        email:profile?.email,
        clg:e.target.clg.value ,
        address:e.target.address.value,
        phone:parseInt(e.target.phone.value)
    }
    fetch(`http://localhost:5000/user/${user?.email}`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
    }).then((res) => res.json()).then(data=>{
        console.log(data);
        if(data){
            swal({
                title:'Info Updated',
                text:'Data Updated Successfully',
                icon:'success'
            })
            refetch()
            e.target.reset()
        }
    })
}
  return (
    <div>
      <h4 className="text-center text-3xl my-4">My Profile</h4>
      <div className="">
        <div class="mx-auto mb-6 card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt=""
                  />
                )}
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name : {profile?.displayName}</h2>
            <p>Email: {profile?.email}</p>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">College Name</span>
              </label>
              <input
                type="text"
                readOnly
                placeholder={
                  profile?.clg === "" ? "No College Name Yet! " : profile?.clg
                }
                class="input input-bordered w-full max-w-xs text-lg focus:outline-none  font-bold text-black"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Address:</span>
              </label>
              <input
                type="text"
                readOnly
                placeholder={
                  profile?.address === ""
                    ? "No Address Added Yet!"
                    : profile?.address
                }
                class="input input-bordered w-full max-w-xs text-lg focus:outline-none  font-bold text-black"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Number</span>
              </label>
              <input
                type="text"
                readOnly
                placeholder={
                  profile?.phone === null
                    ? "No Phone Added Yet! "
                    : profile?.phone
                }
                class="input input-bordered w-full max-w-xs text-lg focus:outline-none  font-bold text-black"
              />
            </div>
          </div>
        </div>
      </div>
      {/* info card */}
      <div class="mx-auto card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <form action="" onSubmit={getData}>
            <input required type="text" name="clg" placeholder="Add College" class=" my-3 input input-bordered w-full max-w-xs" />
            <input required type="text" name="address" placeholder="Add Address" class=" my-3 input input-bordered w-full max-w-xs" />
            <input required type="number" name="phone" placeholder="Add Number" class=" my-3 input input-bordered w-full max-w-xs" />
            <input type="submit" value='Submit' className="btn btn-primary" />
            </form>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
