"use client";
import React, { useState } from "react";
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
import { FaAngleDoubleDown, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Footer from "@/app/Components/Footers/Footer";
import AboutUs from "../About-Us/AboutUs";

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



  return (
    <>
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
      
     





      <section className="ContactSection">
        <Container fluid className="container-xl">
          <div className="ContactData">

            <div className="ContactTopDiv">

              <div className="g">
                <span><FaPhoneAlt /></span>
                <div className="w">
                  <div className="w">
                    <h3>Book Us</h3>
                    <p>+91-855437816</p>
                  </div>
                  <Link href="#">Call Now</Link>
                </div>
              </div>
              <div className="g">
                <span><FaLocationDot /></span>
                <div className="w">
                  <div className="w">
                    <h3>Studio Address</h3>
                    <p>13 Madison Street, NY, USA</p>
                  </div>
                  <Link href="#">View Map</Link>
                </div>
              </div>
              

            </div>



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

  



      <Footer/>



      
    </>
  )
}

export default HomePage
