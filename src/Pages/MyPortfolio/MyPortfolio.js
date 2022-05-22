import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { FaUserTie, FaEnvelope } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const MyPortfolio = () => {
  return (
    <div>
      <Header />
      <div className="grid justify-center items-center grid-cols-1">
        <div class="avatar mx-auto">
          <div class="w-72 my-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* <img src="https://i.ibb.co/V9LRryY/IMG-1243-1-1.jpg" alt="IMG-1243-1-1" /> */}
            <img
              src="https://i.ibb.co/4d1YW1r/IMG-1252.jpg"
              alt="IMG-1243-1-1"
            />
          </div>
        </div>
        {/* about */}
        <div className="mx-auto max-w-lg">
          <h1 className="flex ">
            <FaUserTie className="text-3xl lg:text-4xl" />{" "}
            <span className="text-3xl lg:text-4xl mx-2">Bablu Mia</span>
          </h1>
          <h1 className="flex my-6">
            <FaEnvelope className="text-3xl lg:text-4xl mt-1" />{" "}
            <span className="text-3xl lg:text-4xl mx-2 ">
              bablumiah2000@gmail.com
            </span>
          </h1>
          <h1 className="flex my-6">
            <BsInstagram className="text-3xl lg:text-4xl mt-1" />{" "}
            <span className="text-3xl lg:text-4xl mx-2 ">
              <a href="https://www.instagram.com/bablu_7.17/" target="_blank">
                bablu_7.17
              </a>
            </span>
          </h1>
          <h1 className="flex my-6">
            <BsLinkedin className="text-3xl lg:text-4xl mt-1" />{" "}
            <span className="text-3xl lg:text-4xl mx-2 ">
              <a
                href="https://www.linkedin.com/in/bablu-mia-71a158210/"
                target="_blank"
              >
                bablu-mia-71
              </a>
            </span>
          </h1>
        </div>
        <div className="mx-auto px-4 w-full md:w-8/12 lg:w-6/12 ">
          <h3 className="mx-auto text-2xl font-semibold text-slate-900 border-b-2 border-yellow-600 inline-block">
            Educatioanal Background:
          </h3>
          <h5 className="text-lg my-2">
            Currently i'm a student of MC College , Sylhet . My subject is BSS
            i'm in 2nd year.
          </h5>
          <h3 className="mx-auto my-2 text-2xl font-semibold text-secondary border-b-2 border-yellow-600 inline-block">
            Good At:
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6  lg:grid-cols-8 gap-6 mt-6 mb-12">
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://icons-for-free.com/download-icon-icon++html+icon-1320194800994962643_512.png"
                  alt="Tailwind-CSS-Avatar-component-css"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_css3-512.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://miro.medium.com/max/1400/0*A70w-WrmSaBVxwAm.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBDTFLgawbHgn8U965MjI0iDXq3Qu4I5gHQ&usqp=CAU"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-20 rounded">
                <img
                  src="https://www.pngkit.com/png/detail/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.png"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-6 text-center text-3xl">My Projects</h2>
      {/* project link  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 my-12">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/7bdWJCv/Red-House-React.png"
              alt="Album"
              className="w-52"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Red House || React</h2>
            <p>This website is about a single product reviews.</p>
            <ul>
                <li>🌱 You can see 3 top review in home page.</li>
                <li>🌱 You can aslo all review in all review page</li>
            </ul>
            <div class="card-actions justify-end">
              <a href="https://red-house-react.netlify.app/" target="_blank">
                <button class="btn btn-primary">SEE LIVE</button>
              </a>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/QCfkMrq/Strength-Coach-54-React.png"
              alt="Album"
              className="w-52"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Strength Coach || React </h2>
            <p>This site is for a personal GYM trainer.</p>
            <ul>
                <li>🌱 You can see packages of trainer.</li>
                <li>🌱 Before booking you have to login.</li>
            </ul>
            <div class="card-actions justify-end">
              <a href="https://assignment-10-ad65f.web.app/" target="_blank">
                <button class="btn btn-primary">SEE LIVE</button>
              </a>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/zSsg74W/Storage-Club-Fullstack-112.png"
              alt="Album"
              className="w-52"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Storage Club || Fullstack</h2>
            <p>This site is about warehouse management system.</p>
            <ul>
                <li>🌱 You can deliver and restock.</li>
                <li>🌱 before adding must be loged in.</li>
            </ul>
            <div class="card-actions justify-end">
              <a href="https://storage-club.web.app/" target="_blank">
                <button class="btn btn-primary">SEE LIVE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPortfolio;
