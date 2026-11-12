"use client";

import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroCarousel.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const images = [
  {
    src: "/images/13.jpeg",
    alt: "Illustration 1",
  },
  {
    src: "/images/32.jpeg",
    alt: "Illustration 2",
  },
  {
    src: "/images/20.jpeg",
    alt: "Illustration 3",
  },
  {
    src: "/images/21.jpeg",
    alt: "Illustration 4",
  },
  {
    src: "/images/19.jpeg",
    alt: "Illustration 5",
  },
  {
    src: "/images/1.jpeg",
    alt: "Illustration 6",
  },
  {
    src: "/images/2.jpeg",
    alt: "Illustration 7",
  },
  {
    src: "/images/3.jpeg",
    alt: "Illustration 8",
  },
  {
    src: "/images/4.jpeg",
    alt: "Illustration 9",
  },
  {
    src: "/images/5.jpeg",
    alt: "Illustration 10",
  },
  {
    src: "/images/6.jpeg",
    alt: "Illustration 11",
  },
];

const Carousel = ({
  images,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}) => {
  return (
    <motion.div
      className="carousel-wrapper container-fluid"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
    >
      <motion.div
        className="carousel-inner-wrapper"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Swiper
          modules={[
            EffectCoverflow,
            Autoplay,
            Pagination,
            Navigation,
          ]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={spaceBetween}
          loop={loop}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: false,
                }
              : false
          }
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }
              : false
          }
          className="custom-coverflow"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`${image.src}-${index}`}
              className="custom-swiper-slide"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
            </SwiperSlide>
          ))}

          {showNavigation && (
            <>
              <button
                type="button"
                className="custom-swiper-prev"
                aria-label="Previous slide"
              >
                <BiChevronLeft size={26} />
              </button>

              <button
                type="button"
                className="custom-swiper-next"
                aria-label="Next slide"
              >
                <BiChevronRight size={26} />
              </button>
            </>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

const Skiper49 = () => {
  return (
    <section className="skiper-section">
      <Carousel
        images={images}
        showPagination={true}
        showNavigation={true}
        loop={true}
        autoplay={true}
        spaceBetween={0}
      />
    </section>
  );
};

export default Skiper49;