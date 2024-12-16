import React from "react";
// import icons
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import topSaleimg from "./imges/card-img.png";
import korzinkaImg from "./imges/korzinka.svg";

const TopSotuv = () => {
  // Swiper instance uchun referens
  const swiperRef = useRef(null);
  return (
    <section className="top-sale">
      <div className="conatiner w-[90%] m-auto bg-[#ECF7FF] py-[2.5rem] px-[1.25rem] flex flex-col gap-[1.875rem]">
        <div className="top-sotuvlar-top flex items-center justify-between">
          <h5 className="text-2xl font-bold leading-[1.725rem] tracking-[0.04em] text-left">
            Top sotuvlar
          </h5>
          <div className="swiper-btns flex items-center gap-[0.9375rem]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              <HiMiniArrowLongLeft className="w-6 h-6 text-[#323232]" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              <HiMiniArrowLongRight className="w-6 h-6 text-[#323232]" />
            </button>
          </div>
        </div>

        <div className="top-sale-cards flex justify-between">
          <div className="swiper-part w-[80%]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints = {{
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
                  slidesPerView:4,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >

{Array(6)
                .fill("")
                .map((_, index) => (
                  <SwiperSlide key={index}>
                  <div className="top-sale-swiper-card rounded-[6px] w-[250px] h-[394px] shadow-[0px_2px_15px_0px_#00000033] bg-white">
                    <div className="top-sale-card-top flex items-center justify-center px-[30px] py-[20px]">
                      <img
                        loading="lazy"
                        className="w-[100%] h-[100%]"
                        src={topSaleimg}
                        alt="Product img"
                      />
                    </div>
                    <div className="top-sale-card-bottom flex flex-col justify-between h-[37%] px-[16px]">
                      <div className="titile">
                        <h5 className="text-sm font-bold leading-[16.1008px] tracking-[0.04em] text-left">
                          Fanar
                        </h5>
                        <h6 className="text-base font-normal leading-[1.15rem] tracking-[0.04em] text-left">
                          NPT-SP10-ACCU (94 966), Spotligt 37LED...
                        </h6>
                      </div>
                      <div className="price flex  items-end  justify-between ">
                        <div className=" flex flex-col gap-[0.5rem]">
                          <h5 className="text-[0.6875rem] font-normal leading-[0.7906rem] text-left text-[#E30613]">
                            Sotuvda bor: <span>24 dona</span>
                          </h5>
                          <h4 className="text-xl font-bold leading-[1.5125rem] text-left text-black">
                            <span>43 850</span>sum
                          </h4>
                        </div>
                        <button className="w-[2.375rem] cursor-pointer h-[2.375rem] border border-solid border-[#D9D9D9] rounded-[100%] flex items-center justify-center">
                          <img src={korzinkaImg} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="top-sale-card w-[14.375rem] h-[24.6875rem] px-[1.8125rem] border border-solid border-[#00415A] rounded-[0.375rem] flex flex-col justify-around ">
            <div className="card-top flex flex-col gap-[1.25rem]">
              <h5 className="text-lg font-bold leading-[20.6992px] tracking-[0.04em] text-left">
                Eng mashhur mahsulotlar
              </h5>
              <h6 className="text-sm font-normal leading-[16.1008px] tracking-[0.04em] text-left">
                Bizning mijozlarimiz tanlovi
              </h6>
            </div>
            <button className="catalog-btn text-white flex items-center justify-center text-base font-normal leading-[1.15rem] tracking-[0.04em] text-left w-[172px] h-[42px] rounded-md transition-all bg-[#00415A] hover:bg-[#0e2b36] active:bg-[#25657f] ">
              Katalogga o’tish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSotuv;
