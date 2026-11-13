"use client";
import React, { useEffect, useState } from "react";
import './HomePage.css'
import { Button, Container, Form } from 'react-bootstrap'
import Skiper49 from '@/app/Components/HeroCarousel/HeroCarousel'
import Link from 'next/link'
import { TfiCamera } from 'react-icons/tfi'
import { GiDeliveryDrone } from 'react-icons/gi'
import { PiBookOpenUserFill } from 'react-icons/pi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { TbCameraHeart } from 'react-icons/tb'
import { RiCameraLensAiLine } from 'react-icons/ri'
import { FaAngleDoubleDown, FaArrowRight, FaPhoneAlt, FaPlay, FaStaylinked } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import AboutUs from "../About-Us/AboutUs";
import Image from "next/image";
import "glightbox/dist/css/glightbox.min.css";
import CountUp from "react-countup";

function HomePage() {
  const [selectedValue, setSelectedValue] = useState("");

  const heroItems = [
    {
      id: 1,
      icon: <TfiCamera fontSize={52} />,
      title: "Wedding Photography",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
    {
      id: 2,
      icon: <GiDeliveryDrone fontSize={52}/>,
      title: "Drone Cinematography ",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
    {
      id: 3,
      icon: <BsCameraReelsFill fontSize={52} />,
      title: "Wedding Cinematography ",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
    {
      id: 4,
      icon: <PiBookOpenUserFill fontSize={52} />,
      title: "Personal Portfolio Shoot ",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
    {
      id: 5,
      icon: <RiCameraLensAiLine fontSize={52} />,
      title: "Wildlife Photography ",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
    {
      id: 6,
      icon: <TbCameraHeart fontSize={52} />,
      title: "Studio Photography ",
      description: " The talent at kimono runs wide range of services. Across many market geographies & typologies.",
      link: "#",
    },
  ];

  const generationStats = [
    { id: 1, value: 10, suffix: "k+", label: "Products Sold" },
    { id: 2, value: 35, suffix: "", label: "Years Service" },
    { id: 3, value: 450, suffix: "", label: "Outlets Worldwide" },
    { id: 4, value: 1000, suffix: "+", label: "Satisfied Customers" },
  ];
  const [statsRefreshKey, setStatsRefreshKey] = useState(0);

  useEffect(() => {
    const refreshStats = () => setStatsRefreshKey((prev) => prev + 1);
    window.addEventListener("focus", refreshStats);

    return () => window.removeEventListener("focus", refreshStats);
  }, []);


  // Gallery Data Started  

  const galleryData = [
  {
    id: 1,
    title: "Luxury Sofa",
    category: "living",
    image: "/Images/gallery1.avif",
  },
  {
    id: 2,
    title: "Wooden Dining Table",
    category: "dining",
    image: "/Images/gallery2.avif",
  },
  {
    id: 3,
    title: "Modern Bed",
    category: "bedroom",
    image: "/Images/gallery3.avif",
  },
  {
    id: 4,
    title: "Office Desk",
    category: "office",
    image: "/Images/gallery4.avif",
  },
  {
    id: 5,
    title: "Luxury Chair",
    category: "living",
    image: "/Images/gallery5.avif",
  },
  {
    id: 6,
    title: "Outdoor Furniture",
    category: "outdoor",
    image: "/Images/gallery6.avif",
  },
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredGallery =
  activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  // Gallery Data Ended 


  return (
    <>

    <Link
        href="https://wa.me/916280035719"
        target="_blank"
        className="wa-float"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>

      <section className="HeroMainSection">
          <div className="HeroMainData">
            <p className="TextSpan">Pathankot · Punjab · Since 2026</p>
            <div className="HeadingDiv">
              <h2> If it&apos;s your </h2>
              <span>Big Day</span>
              <p>it deserves Bigday Visuals</p>
            </div>

            <div className="HeroBtnDiv">
              <Button>WATCH OUR WORK</Button>
              <Link href="https://wa.me/916280035719"target="_blank">
                WHATSAPP US
              </Link>
            </div>

          </div>
      </section>

      <section className="HeroSection">
          <Container fluid className="container-xl">
              <div className="HeroTexedDiv">
                <span className="section-subtitle">Photography Agency</span>
                <div className="HeroHeading">
                  <h1> We Capture Your Best  <span className="pxl-title--highlight"> Memories </span>  Here </h1>
                  <p>kimono photography Agency runs wide and deep. Across many markets, geographies typologies, our team members</p>
                </div>
              </div>
        </Container>
        <Skiper49/>


          <Container fluid className="container-xl">
              <div className="HeroContentDiv">
                <div className="ContentHeading">
                  <span className="section-subtitle">Photography</span>
                  <div className="HeroHeading">
                    <h2> Explore Kimono <br /> Photography  <span className="pxl-title--highlight"> Services </span> </h2>
                    <p>kimono photography Agency runs wide and deep. Across many markets, geographies typologies, our team members</p>
                  </div>
                </div>           
                <div className="HeroContentData">
                  {heroItems.map((item) => (
                    <div className="HerocontItems" key={item.id}>
                      <span>{item.icon}</span>

                      <div className="htitle">
                        <Link href={item.link}>{item.title}</Link>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>           
              </div>

          </Container>

        {/* <div class="pxl-divider-vertical">
          <div class="pxl-section-line1"></div>
          <div class="pxl-section-line2"></div>
          <div class="pxl-section-line3"></div>
          <div class="pxl-section-line4"></div>
        </div> */}

      </section>

      <section className="ExploreKeySec">
        <div className="ExploreItems">
          <div className="ExploreTrack">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Link href="#">Birthday</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Wedding</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Pre-Wedding</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Reels & Editing</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Maternity & Baby</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Every Moment. Your Bigday.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="WhatWeDoSection">
        <Container fluid className="container-xl">
          <div className="WhatWeDoData">
            <div className="whatWeDoHeading">
              <h2>What we <em className="text-gold-gradient">do</em></h2>
            </div>
            <div className="whatWeDoContent">
              <ul>
                <li><span>01</span> <Link href="#">Wedding Films</Link> <p>Full-day cinematic coverage, highlight films and traditional albums.</p> </li>
                <li><span>02</span> <Link href="#">Pre-Wedding</Link> <p>Story-driven shoots across Punjab&apos;s most beautiful locations.</p> </li>
                <li><span>03</span> <Link href="#">Birthday & Events</Link> <p>Candid coverage of birthdays, anniversaries and family functions.</p> </li>
                <li><span>04</span> <Link href="#">Maternity & Baby</Link> <p>Soft, timeless portraits of life&apos;s newest chapters.</p> </li>
                <li><span>05</span> <Link href="#">Reels & Editing</Link> <p>Scroll-stopping reels and pro editing for creators and brands.</p> </li>
                <li><span>06</span> <Link href="#">Albums & Design</Link> <p>Premium album layouts, invites and graphics by our designer.</p> </li>
                
              </ul>
            </div>



          </div>

        </Container>
      </section>

      <AboutUs/>

      <section className="GallerySec" id="Services">
        <Container fluid className="container-xl">

          <div className="GalleryData">

            <div className="GalleryHeading">
              <span>Our Collection</span>
              <h2>Discover Beautiful Furniture</h2>
              <p> Explore our premium collection of handcrafted furniture designed
                for comfort, elegance, and modern living.</p>
            </div>

            <div className="GalleryFilter">

              <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
                All
              </button>

              <button className={activeCategory === "Wedding" ? "active" : ""} onClick={() => setActiveCategory("Wedding")} >
                Wedding
              </button>

              <button className={activeCategory === "Pre-Wedding" ? "active" : ""} onClick={() => setActiveCategory("Pre-Wedding")} >
                Pre-Wedding
              </button>

              <button className={activeCategory === "Birthday & Events" ? "active" : ""} onClick={() => setActiveCategory("Birthday & Events")}>
                Birthday & Events
              </button>

              <button className={activeCategory === "office" ? "active" : ""} onClick={() => setActiveCategory("office")}>
                Maternity & Baby
              </button>

              <button className={activeCategory === "outdoor" ? "active" : ""} onClick={() => setActiveCategory("outdoor")} >
                Portfollio
              </button>
              <button className={activeCategory === "outdoor" ? "active" : ""} onClick={() => setActiveCategory("outdoor")} >
                Reels & Editing
              </button>

            </div>

            <div className="GalleryCardDiv">
              {filteredGallery.map((item) => (
                <div className="ss" key={item.id}>
                  <div className="GalleryItem">
                    <Image src={item.image} alt={item.title} width={380} height={475} priority />
                    <div className="GalleryOverlay">
                      <h4>{item.title}</h4>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </Container>
      </section>

      <section className="NextGenSection">
        <Container fluid className="container-xl">
          <div className="NextGenData">
            <div>
              <VideoButton />
            </div>
            <h2>Next-Generation Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ComnBtn text="View all products" href="#" />
          </div>
        </Container>
        <div className="GenrationCount" key={statsRefreshKey}>
          {generationStats.map((item) => (
            <div className="GenCountItem" key={item.id}>
              <h4>
                <CountUp
                  key={`${item.id}-${statsRefreshKey}`}
                  start={0}
                  end={item.value}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                {item.suffix}
              </h4>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      
     





      <section className="ContactSection">
        <Container fluid className="container-xl">
          <div className="ContactData">

          
            <div className="ContactBottomDiv">

              <div className="TpCL">
                <span className="section-subtitle">Contact Us</span>
                <h2> Feel Free To <br /> Ask Anything <br />  <span className="pxl-title--highlight"> Contact Us </span></h2>
              </div>

              <div className="TpCR">

                <Form>

                  <div className="FormControled Two">
                    <Form.Control type="name" placeholder="Enter First Name" />
                    <Form.Control type="name" placeholder="Enter Last Name" />
                  </div>

                  <div className="FormControled">
                    <Form.Control type="email" placeholder="Enter Email Adress" />
                  </div>

                  <div className="select-wrapper">
                    <select
                      id="custom-select"
                      className="custom-select"
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                    >
                      <option value="" disabled>
                        Open this select menu
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* <span className="select-arrow"><FaAngleDoubleDown /></span> */}
                  </div>

                  {selectedValue && (
                    <p className="selected-text">
                      Selected value: {selectedValue}
                    </p>
                  )}

                  <div className="FormControled">
                    <Form.Control as="textarea" rows={8} placeholder="Message" />
                  </div>

                  <div className="s">
                    <Button>SUBMIT NOW</Button>
                  </div>

                </Form>

              </div>


            </div>


          </div>
        </Container>
      </section>

  






      
    </>
  )
}

export default HomePage


export function ComnBtn({ href, text }) {
  return (
    <div className="ComonBtn">
      <Link href={href}>
        {text}{" "}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
}

export function VideoButton() {
  useEffect(() => {
    let lightbox;
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({
        selector: ".glightbox-video",
        autoplayVideos: true,
      });
    });
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);
  const text = " PLAY VIDEO • PLAY VIDEO • ";
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      className="videoBtn glightbox-video" >
      <svg className="circleText" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-65,0 a65,65 0 1,1 130,0 a65,65 0 1,1 -130,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>
      <div className="playIcon">
        <FaPlay />
      </div>
    </a>
  );
}
