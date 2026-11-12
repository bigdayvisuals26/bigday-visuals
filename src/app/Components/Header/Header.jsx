'use client'
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
} from "react-bootstrap";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./Header.css";
import Link from "next/link";

function Header() {

  const keywords = [
    "Pre-Weeding Shoot",
    "Wedding Photography",
    "Drone Cinematography",
    "Wildlife Photography",
    "Maternity Photography",
    "Birthday Shoot",
    "Others"
  ];

  return (
    <>
      {/* TOP BAR */}

      <div className="topbar">

        <Container fluid className="container-xl">

          <div className="topbar-inner">

            <div className="social-icons">
              <Link target="_blank" href="https://www.facebook.com/share/19kad4iZny/"><FaFacebookF /></Link>
              <Link target="_blank" href="https://www.instagram.com/bigdayvisuals?dlrf=aGlyNng3Zjlpam56"><FaInstagram /></Link>
              <Link target="_blank" href="https://wa.me/919914994135"><FaWhatsapp /></Link>
            </div>

            <div className="marquee">

              <div className="marquee-content">

                {keywords.concat(keywords).map((item,index)=>(
                  <span key={index}>{item}</span>
                ))}

              </div>

            </div>

            <div className="top-contact">

              <span>
                <FaEnvelope /> bigdayvisuals26@gmail.com
              </span>

              <span>
                <FaMapMarkerAlt /> Pathankot, Punjab, India
              </span>

            </div>

          </div>

        </Container>

      </div>

      {/* HEADER */}

      <Navbar
        expand="lg"
        className="main-header sticky-top"
      >

        <Container fluid className="container-xl">

          <Navbar.Brand href="#" className="NavLogoDiv">
            <div className="logo-mark">JF</div>
            <div className="LogTexted">
                <h6>Jakria<span>Furniture</span></h6>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Furniture
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav className="mx-auto nav-menu">

                <Nav.Link href="/">Home</Nav.Link>

                <Nav.Link href="/#About">About</Nav.Link>

                <Nav.Link href="/#Services">Services</Nav.Link>

                <Nav.Link href="/#Team">Teams</Nav.Link>

                <Nav.Link target="_blank" href="/contact-us">Contact</Nav.Link>

              </Nav>

              <div className="phone-box">

                <div className="phone-icon">
                  <FaPhoneAlt />
                </div>

                <div>

                  <small>Need Help?</small>

                  <h6>+91 6280035719</h6>

                </div>

              </div>

            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>

      </Navbar>

    </>
  );
}

export default Header;