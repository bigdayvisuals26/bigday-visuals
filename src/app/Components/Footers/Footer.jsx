"use client";
import React from 'react'
import "./Footer.css"
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import { FaFacebook, FaGlobe, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { LuMoveUpRight } from 'react-icons/lu';

function Footer() {
  return (
    <>
    <footer className='FooterSection'>

        <div className="tp">
            <Container fluid className="container-xl">
                <div className="TopFooter">

                    <div className="LeftFtr">
                        <ul>
                            <li><Link href="">ABOUT US</Link></li>
                            <li><Link href="">OUR TEAM</Link></li>
                            <li><Link href="">PACKAGES</Link></li>
                            <li><Link href="">Gallery</Link></li>
                            <li><Link href="">SERVICES</Link></li>
                        </ul>
                    </div>

                    <div className="MidFtr">
                        <div className="d">
                            <div className="f"></div>
                            <div className="f">
                                <div className="f">
                                    <h6>SIGN UP FOR ALL THE LATEST <br /> NEWS AND OFFERS</h6>
                                </div>
                                <div className="f">
                                    <Form.Control type="email" placeholder="Enter Email Adress" />
                                    <Button>Subcribe <LuMoveUpRight /></Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="RytFtr">
                        <ul>
                            <li><Link href="">BOOKING</Link></li>
                            <li><Link href="">PRODUCTS</Link></li>
                            <li><Link href="">RECENT POST</Link></li>
                            <li><Link href="">LATEST NEWS</Link></li>
                            <li><Link href="">Contact Us</Link></li>
                        </ul>
                    </div>

                </div>
            </Container>
        </div>

        <div className="btp">
            <Container fluid className="container-xl">
                <div className="BtmFt">
                    <p>&copy; 2026 Bigday Visuals · Every moment. Your Bigday.</p>
                    <p> Design By <Link href="#">Anil Kumar</Link></p>
                    <div className="SocialLinks">
                        <Link href="#"><FaInstagram size={22} /></Link>
                        <Link href="#"><FaFacebook size={22}/></Link>
                        <Link href="#"><FaSquareXTwitter size={22} /></Link>
                        <Link href="#"><FaYoutube size={22} /></Link>
                        <Link href="#"><FaGlobe size={22} /></Link>
                    </div>
                </div>
            </Container>
            
        </div>
    </footer>

    </>
  )
}

export default Footer