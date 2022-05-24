import React from "react";
// import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import swal from "sweetalert";
import ReactStars from "react-rating-stars-component";

const ReviewSlider = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("review", () =>
    fetch("https://nameless-inlet-18267.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    swal({
      title: "Fetch Error",
      text: "Faild toload please check connection",
      icon: "error",
    });
  }

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
      <div>
        <h3 className="text-center my-6 text-2xl text-success">
          See Our customar review Review{" "}
        </h3>
        <p className="my-4 max-w-lg mx-auto">
          The term manufacturing refers to the processing of raw materials or
          parts into finished goods through the use of tools, human labor,
          machinery, and chemical processing. Manufacturing allows businesses to
          sell finished products at a higher cost than the value of the raw
          materials used
        </p>
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {[...reviews].reverse().map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-lg mx-auto  p-1 lg:p-12">
                <div class="avatar ">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {review.img !== null ? (
                      <img src={review.img} alt="" />
                    ) : (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="my-2 text-lg font-bold">
                    Name:{" "}
                    <span className="text-md font-semibold">{review.user}</span>
                  </h2>
                  <h2 className="my-2 text-lg font-bold">
                    Email:{" "}
                    <span className="text-md font-semibold">
                      {review.email}
                    </span>
                  </h2>
                  <h2 className="my-2 text-lg font-bold">
                    Review: <span className="text-sm ">{review.text}</span>
                  </h2>
                  <h2 className="text-center">
                    <ReactStars
                      count={parseInt(review.star)}
                      size={24}
                      color="#ffd700"
                    />
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div className="grid grid-cols-2">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h2>Hlw</h2>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
