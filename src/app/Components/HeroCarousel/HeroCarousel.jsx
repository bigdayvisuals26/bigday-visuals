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
import Image from "next/image";
import { Container } from "react-bootstrap";

const images = [
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
  },
  {
    src: "/Images/Gallery/4.avif",
    alt: "Illustration 1",
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
              <Image className="carousel-image" src={image.src} alt={image.alt} width={900} height={900} priority />
             
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
    <section className="SelectedWorkSec">
      <Container fluid className="container-xl">

        <div className="SeltedWorkData">

          <div className="SlectTexed">
            <h2>Selected <span>Work</span></h2>
            <p>Tap any film to watch it on our YouTube, Instagram <br /> or Facebook.</p>
          </div>

          <div className="SlectCrosel">
            <Carousel images={images} showPagination={true} showNavigation={true} loop={true} autoplay={true} spaceBetween={0}/>
          </div>


        </div>

      </Container>
      
    </section>
  );
};

export default Skiper49;