import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    
  };

  const handleGoogle = () => {
    signInWithGoogle();
  };
  //   navigate
  // useEffect(() => {
  //   if (user || gUser) {
  //     console.log(user || gUser);
  //     if(user){
    // swal({
    //   title: "Account Create",
    //   text: "Succesfully Create By Emaill Password",
    //   icon: "success",
    // });
  //     }else if(gUser){
  // swal({
  //   title: "Account Create",
  //   text: "Succesfully Create By Google",
  //   icon: "success",
  // });
  //     }

  //     navigate("/appointment");
  //   }
  // }, [user, gUser, from, navigate]);
  if (token) {
    navigate("/appointment");
  }

  // loading

  if (loading || gLoading || updating) {
    return <Loading />;
  }
  //   error
  if (error || gError || updateError) {
    swal({
      title: "Please Solve This Error",
      text: error?.message || gError?.message || updateError?.message,
      icon: "error",
    });
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">SIGNUP </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-3">
              <input
                type="submit"
                value={"LogIn"}
                className="btn btn-accent"
              ></input>
            </div>
          </form>
          <p className="text-sm text-center">
            Already Have An Account?{" "}
            <Link to={"/login"}>
              <span className="text-secondary">Please Go To Login</span>
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="form-control ">
            <button
              onClick={handleGoogle}
              className="btn text-accent hover:text-white bg-transparent border-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
