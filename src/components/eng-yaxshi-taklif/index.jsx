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
import wifi from './imges/musr.png'

const EngYaxshiTaklif = () => {
  // Swiper instance uchun referens
  const swiperRef = useRef(null);
  return (
    <section className="top-sale">
      <div className="conatiner w-[90%] m-auto bg-[#ECF7FF] py-[2.5rem] px-[1.25rem] flex flex-col gap-[1.875rem]">
        <div className="top-sotuvlar-top flex items-center justify-between">
          <h5 className="text-2xl font-bold leading-[1.725rem] tracking-[0.04em] text-left">
          Eng yaxshi takliflar
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

        <div className="top-sale-cards flex justify-between text-[10px]">
          <div className="swiper-part w-[75%]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
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
              className="mySwiper"
            >
              {Array(6)
                .fill("")
                .map((_ , index) => (
                  <SwiperSlide key = { index }  className = "w-[200px]" >
                    <div className="top-sale-swiper-card rounded-[0.6em] w-[100%] h-[39.4em] shadow-[0rem_0.125rem_0.9375rem_0rem_#00000033] bg-white">
                      <div className="top-sale-card-top flex items-center justify-center px-[1.875rem] py-[1.25rem]">
                        <img
                          loading="lazy"
                          className="w-[100%] h-[100%]"
                          src={wifi}
                          alt="Product img"
                        />
                      </div>
                      <div className="top-sale-card-bottom flex flex-col justify-between h-[37%] px-[16px] md:h-[40%]">
                        <div className="titile flex flex-col gap-[10px]">
                          <h5 className="text-sm font-bold leading-[16.1008px] tracking-[0.04em] text-left">
                          WI FI- MODEL
                          </h5>
                          <h6 className="text-base font-normal leading-[18.4px] tracking-[0.04em] text-left">
                          PIC32-PINGUINO-MICRO, Arduino forma faktor ishlab chiqish kengashi
                          </h6>
                        </div>
                        <div className="price flex  items-end  justify-between ">
                          <div className=" flex flex-col gap-[8px]">
                            <h5 className="text-[11px] font-normal leading-[12.6496px] text-left text-[#E30613]">
                              Sotuvda bor: <span>24 dona</span>
                            </h5>
                            <h4 className="text-xl font-bold leading-[24.2px] text-left text-black">
                              <span>30 850</span>sum
                            </h4>
                          </div>
                          <button className="w-[38px] cursor-pointer h-[38px] border border-solid border-[#D9D9D9] rounded-[100%] flex items-center justify-center">
                            <img src={korzinkaImg} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="top-sale-card w-[20%] h-[39.5em] px-[2.9em] border border-solid border-[#00415A] rounded-[0.6em] flex flex-col justify-around text-[10px]">
            <div className="card-top flex flex-col gap-[2em] text-[10px]">
              <h5 className="text-lg font-bold leading-[2em] tracking-[0.04em] text-left">
                Eng mashhur mahsulotlar
              </h5>
              <h6 className="text-sm font-normal leading-[1.6em] tracking-[0.04em] text-left">
                Bizning mijozlarimiz tanlovi
              </h6>
            </div>
            <button className="catalog-btn text-white flex items-center justify-center text-base font-normal leading-[1.15rem] tracking-[0.04em] text-left w-[100%] h-[42px] rounded-md transition-all bg-[#00415A] hover:bg-[#0e2b36] active:bg-[#25657f] ">
              
              <h5 className="lg:text-[16px] md:text-[12px]">Katalogga o’tish</h5>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngYaxshiTaklif;
