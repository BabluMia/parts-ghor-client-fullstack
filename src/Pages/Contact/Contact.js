import React, { useRef } from "react";
import swal from "sweetalert";
import Header from "../Shared/Header";

const Contact = () => {
  const feedbackSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      text: event.target.text.value,
    };
    console.log(data);
    fetch(`https://nameless-inlet-18267.herokuapp.com/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          swal({
            title: "Send Response",
            text: "Successfully Sended Your Response",
            icon: "success",
          });
          console.log(data);
        }
      });
    event.target.reset();
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Send Your Feedback!!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <div class="card-body">
                <form action="" onSubmit={feedbackSubmit}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Your Response</span>
                    </label>
                    <textarea
                      name="text"
                      type="text"
                      placeholder="Type Here"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control mt-6">
                    <input
                      type="submit"
                      value="Send"
                      class="btn btn-primary"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
