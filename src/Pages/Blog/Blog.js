import React from "react";
import Header from "../Shared/Header";

const Blog = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h3 className="my-4 text-3xl text-gray-400 text-center">This Is Blog Section</h3>
      <div className=" w-9/12 lg:w-6/12 mx-auto ">
        {/* -----------------one--------------- */}
        <div
          tabindex="0"
          class="collapse  collapse-arrow my-4 border border-base-300 bg-base-200 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
          </div>
          <div class="collapse-content">
            <p>There are some way of manage state properly in our React apps.
                We use use rect useState() hook to manage state in our application .
                useEffect() hook alow us to update state in quick time . This use case is for basic using . in large application we need to share state in all over app to get real data thats why we use contextAPI and large application we also use Redux for state management .  
            </p>
            
          </div>
        </div>
        {/* -----------------two--------------- */}
        <div
          tabindex="0"
          class="collapse  collapse-arrow my-4 border border-base-300 bg-base-200 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
          </div>
          <div class="collapse-content">
            <p>There is lots of way to improve the performence of a react application . As a developer we need to know to to  improve performence . We have to Keep component state local where necessary first .Then we have to stop re render components . Have to do dry code . Avoid as much as code reapetation . If we do this kind of work people say we will be improve more then 7% faster our react app.</p>
          </div>
        </div>
        {/* -----------------Three--------------- */}
        <div
          tabindex="0"
          class="collapse  collapse-arrow my-4 border border-base-300 bg-base-200 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
          </div>
          <div class="collapse-content">
            <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for prototypal inheritance, meaning that objects and methods can be shared, extended, and copied.
            Sharing objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
            </p>
          </div>
        </div>
        {/* -----------------Four--------------- */}
        <div
          tabindex="0"
          class="collapse  collapse-arrow my-4 border border-base-300 bg-base-200 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
          </div>
          <div class="collapse-content">
            <p>Unit test is an importent thing for every application . We need to test our code beacuse we dont thing all use case all of the time thats why some times its show error . So for a better project we test our project . This is unit test . For better experience we need test our project for find problems . </p>
          </div>
        </div>
        {/* -----------------Five--------------- */}
        <div
          tabindex="0"
          class="collapse  collapse-arrow my-4 border border-base-300 bg-base-200 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
          Why you do not set the state directly in React.
          </div>
          <div class="collapse-content">
            <p>We do not set the state directly in react beacuse its affect our application . If we set value directly we can not realize the imidate value . If we do not state direct it give us update value all time by realize data . If we set directly we lose control of the state across all components.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
