import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.star <= 5 && data.star > 0 && data.text !== "") {
      //   console.log(data);
      const review = {
        text: data.text,
        star: data.star,
        user: user?.displayName,
        email: user?.email,
        img: user?.photoURL || null,
      };
      console.log(review);
      fetch(`https://nameless-inlet-18267.herokuapp.com/reviews`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            swal({
              title: "Add Review ",
              text: "Thank You For Your Valueable Review",
              icon: "success",
            });
            reset();
            console.log(result);
          }
        });
    } else {
      swal({
        title: "Add Review Error",
        text: "Please add carefully",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h3 className="text-center my-6 text-gray-800 text-3xl font-semibold">
        Add A Review
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-1 max-w-lg mx-auto"
      >
        <input
          type="number"
          {...register("star")}
          className="border-2 my-2 py-2"
          placeholder="Give us some star"
        />
        {/* , { min: 1, max: 5 } */}
        {/* {errors.star && <span>This field is required</span>} */}
        <textarea
          {...register("text", { required: true })}
          placeholder="Write Something"
          className="input-bordered border-2 resize-none"
        ></textarea>
        {/* {errors.text && <span>This field is required</span>} */}
        <input
          type="submit"
          className="btn btn-accent my-3"
          value={"Add Review"}
        />
      </form>
    </div>
  );
};

export default AddReview;
