import React from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import capacitors from "./imges/capacitors.svg";
import proxxon from "./imges/proxxon.svg";
import elme from "./imges/elme.svg";
import rigol from "./imges/rigol.svg";
import nor from "./imges/nor.svg";
import bosch from "./imges/bosch.svg";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";
const Dillerlar = () => {
  return (
    <section className="dillerlar">
      <div className="container w-[90%] m-auto flex items-center justify-between">
        <button>
          <HiMiniArrowLongLeft />
        </button>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 10,
              }
            }}
            modules={[Navigation]}
            className="mySwiper w-[100%]"
          >
            <SwiperSlide>
            <img src={capacitors} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={proxxon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={elme} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={rigol} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={nor} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={bosch} alt="" />
            </SwiperSlide>
          </Swiper>
        
      
          
          
         
        <button>
          <HiMiniArrowLongRight />
        </button>
      </div>
    </section>
  );
};

export default Dillerlar;
