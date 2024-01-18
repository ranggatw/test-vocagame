import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = (props) => {
  const { data } = props;
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {data.map((item, index) => (
        <SwiperSlide
          pagination={{
            clickable: true,
          }}
          key={index}
          className="min-h-[200px]"
        >
          <h1 className="font-extrabold	 text-white text-center text-5xl">
            {item.title}
          </h1>
          <p className="text-white text-center">{item.desc}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
