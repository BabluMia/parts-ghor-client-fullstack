import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import useToken from "../../Hooks/useToken";
import Header from "../Shared/Header";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user3] = useAuthState(auth)
  const [token] = useToken(user3?.email , user3?.displayName)


  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    
  };

  const handleGoogle = () => {
    signInWithGoogle();
  };
  useEffect(()=>{
    if(token){
    navigate(from, { replace: true });
  }
  },[token, from, navigate])
  
  //   navigate
  useEffect(() => {
    if (user || gUser) {
      
      console.log(user || gUser);
      if (user) {
        swal({
          title: "Account Login",
          text: "Succesfully Login By Emaill Password",
          icon: "success",
        });
      } else if (gUser) {
        swal({
          title: "Google Login",
          text: "Succesfully Login By Google",
          icon: "success",
        });
      }
    }
  }, [user, gUser, from, navigate]);

  // loading

  if (loading || gLoading) {
    return <Loading />;
  }
  //   error
  if (error || gError) {
    swal({
      title: "Please Solve This Error",
      text: error?.message || gError?.message,
      icon: "error",
    });
  }
  return (
    <>
    <Header/>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left ">
          <img src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png" alt="" />
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body bg-[#ead7d7] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered border-slate-600 w-full max-w-xs "
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
                className="input input-bordered border-slate-600 w-full max-w-xs"
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

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-3">
              <input
                type="submit"
                value={"LogIn"}
                className="btn btn-success"
              ></input>
            </div>
          </form>
          <p className="text-sm text-center">
            New In Parts Ghor?{" "}
            <Link to={"/signup"}>
              <span className="text-slate-900">Create an acccount</span>
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="form-control ">
            <button
              onClick={handleGoogle}
              className="btn text-accent hover:text-white btn-success  border-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
