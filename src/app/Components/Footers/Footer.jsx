"use client";
import React from 'react'
import "./Footer.css"
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import { FaFacebook, FaGlobe, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { LuMoveUpRight } from 'react-icons/lu';
import Image from 'next/image';

function Footer() {
  return (
    <>
    
    <footer className='FooterSection'>

        <div className="pxl-divider-border-top">

        </div>

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

                    


                    <div className="newsletter">
                        
                        <div className="newsletter__logo" aria-label="bigdayVisuals">
                            <Image src="/Images/logo.png" alt="BigDayVisuals" width={95} height={73} priority />
                        </div>

                        <div className="newsletter__frame">
                            <h2 className="newsletter__heading">
                                SIGN UP FOR ALL THE LATEST NEWS
                                <br />
                                AND OFFERS
                            </h2>

                            <Form className="newsletter__form">
                                <Form.Control
                                type="email"
                                placeholder="Enter your mail"
                                aria-label="Email address"
                                required
                                />
                                <Button type="submit">
                                SUBSCRIBE <span aria-hidden="true">↗</span>
                                </Button>
                            </Form>
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