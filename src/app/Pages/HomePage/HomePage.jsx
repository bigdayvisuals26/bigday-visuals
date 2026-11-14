"use client";
import React, { useEffect, useState } from "react";
import './HomePage.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Skiper49 from '@/app/Components/HeroCarousel/HeroCarousel'
import Link from 'next/link'
import { TfiCamera } from 'react-icons/tfi'
import { GiDeliveryDrone } from 'react-icons/gi'
import { PiBookOpenUserFill } from 'react-icons/pi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { TbCameraHeart } from 'react-icons/tb'
import { RiCameraLensAiLine } from 'react-icons/ri'
import { FaAngleDoubleDown, FaArrowRight, FaFacebook, FaInstagram, FaPhoneAlt, FaPlay, FaStaylinked, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import AboutUs from "../About-Us/AboutUs";
import Image from "next/image";
import "glightbox/dist/css/glightbox.min.css";
import CountUp from "react-countup";
import { BiMessageRounded } from "react-icons/bi";

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
    title: "Wedding",
    category: "wedding",
    image: "/Images/Gallery/1.avif",
  },
  {
    id: 2,
    title: "Wedding",
    category: "wedding",
    image: "/Images/Gallery/2.avif",
  },
  {
    id: 3,
    title: "Wedding",
    category: "wedding",
    image: "/Images/Gallery/3.avif",
  },
  {
    id: 4,
    title: "Wedding",
    category: "wedding",
    image: "/Images/Gallery/4.avif",
  },
  {
    id: 5,
    title: "Pre-Wedding",
    category: "prewedding",
    image: "/Images/Gallery/5.avif",
  },
  {
    id: 6,
    title: "Pre-Wedding",
    category: "prewedding",
    image: "/Images/Gallery/6.avif",
  },
  {
    id: 7,
    title: "Pre-Wedding",
    category: "prewedding",
    image: "/Images/Gallery/7.avif",
  },
  {
    id: 8,
    title: "Pre-Wedding",
    category: "prewedding",
    image: "/Images/Gallery/8.avif",
  },
  {
    id: 9,
    title: "Birthday & Events",
    category: "birthday",
    image: "/Images/Gallery/9.avif",
  },
  {
    id: 10,
    title: "Birthday & Events",
    category: "birthday",
    image: "/Images/Gallery/10.avif",
  },
  {
    id: 11,
    title: "Birthday & Events",
    category: "birthday",
    image: "/Images/Gallery/11.avif",
  },
  {
    id: 12,
    title: "Birthday & Events",
    category: "birthday",
    image: "/Images/Gallery/12.avif",
  },
  {
    id: 13,
    title: "Birthday & Events",
    category: "maternity",
    image: "/Images/Gallery/13.avif",
  },
  {
    id: 14,
    title: "Birthday & Events",
    category: "maternity",
    image: "/Images/Gallery/14.avif",
  },
  {
    id: 15,
    title: "Birthday & Events",
    category: "maternity",
    image: "/Images/Gallery/15.avif",
  },
  {
    id: 16,
    title: "Birthday & Events",
    category: "portfolio",
    image: "/Images/Gallery/16.avif",
  },
  {
    id: 17,
    title: "Birthday & Events",
    category: "portfolio",
    image: "/Images/Gallery/17.avif",
  },
  {
    id: 18,
    title: "Birthday & Events",
    category: "portfolio",
    image: "/Images/Gallery/18.avif",
  },
  {
    id: 19,
    title: "Birthday & Events",
    category: "reels",
    image: "/Images/Gallery/19.avif",
  },
  {
    id: 20,
    title: "Birthday & Events",
    category: "reels",
    image: "/Images/Gallery/20.avif",
  },
  


  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredGallery =
  activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  // Gallery Data Ended 


  // Booking Form Strted
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    otherEvent: '',
    message: '',
  });

  // Replace with your WhatsApp business number (include country code, no '+' or spaces)
  const whatsappNumber = '919914994135';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedEvent =
      formData.eventType === 'Other' ? formData.otherEvent : formData.eventType;

    // Format the message for WhatsApp
    const text = `*New Photography Booking Inquiry* 📸
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone/WhatsApp:* ${formData.phone}
*Event Date:* ${formData.date}
*Event Type:* ${selectedEvent}
*Details:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me{whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  }; 
  // Booking Form Ended 


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

      <section className="IntroductionSection">
        <Container fluid className="container-xl">
          <div className="IntroductionData">
            <div className="TopIntroDiv">
              <div className="leftintro">
                <h3>We’re two brothers who turn your real moments into photographs and films you’ll want to relive.</h3>
              </div>
              <div className="rightintro">
                <p>One of us brings 5 years of UI/UX and visual design experience. The other has 3 years of video editing experience, including work with Dr. Satinder Sartaj. Together, we capture weddings, celebrations, portraits and the little moments in between.</p>
              </div>
            </div>
            <h6>Our <span>process</span></h6>
            <div className="BottomIntroDiv">
              <div className="IntroProcess">
                <div className="IntroSpan">01</div>
                <div className="IntroTexed">
                  <h3>Discover</h3>
                  <p>We get to know your occasion, style and the moments that matter most.</p>
                </div>
              </div>
              <div className="IntroProcess">
                <div className="IntroSpan">02</div>
                <div className="IntroTexed">
                  <h3>Plan</h3>
                  <p>We discuss the schedule, locations and coverage so everything feels considered.</p>
                </div>
              </div>
              <div className="IntroProcess">
                <div className="IntroSpan">03</div>
                <div className="IntroTexed">
                  <h3>Capture</h3>
                  <p>We photograph and film the candid moments, big emotions and joyful details.</p>
                </div>
              </div>
              <div className="IntroProcess">
                <div className="IntroSpan">04</div>
                <div className="IntroTexed">
                  <h3>Deliver</h3>
                  <p>We carefully edit your photos and films, ready for you to revisit and share.</p>
                </div>
              </div>
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

              <button className={activeCategory === "wedding" ? "active" : ""} onClick={() => setActiveCategory("wedding")} >
                Wedding
              </button>

              <button className={activeCategory === "prewedding" ? "active" : ""} onClick={() => setActiveCategory("prewedding")} >
                Pre-Wedding
              </button>

              <button className={activeCategory === "birthday" ? "active" : ""} onClick={() => setActiveCategory("birthday")}>
                Birthday & Events
              </button>

              <button className={activeCategory === "maternity" ? "active" : ""} onClick={() => setActiveCategory("maternity")}>
                Maternity & Baby
              </button>

              <button className={activeCategory === "portfolio" ? "active" : ""} onClick={() => setActiveCategory("portfolio")} >
                Portfollio
              </button>
              <button className={activeCategory === "reels" ? "active" : ""} onClick={() => setActiveCategory("reels")} >
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

            <div className="LeftContDiv">
              <span className="section-subtitle">Contact Us</span>
              <h2> Let&apos;s make your <span>big </span> <br /> <span>day</span> unforgettable.</h2>
              <div className="ContSocialDiv">
                <div className="SocialItems">
                  <div className="socl">
                    <Link href="#"><FaPhoneAlt color="#d9a850" /> +91-9914994135</Link>
                    <Link href="#"><BiMessageRounded /> WhatsApp Anil</Link>
                  </div>
                  <div className="socl">
                    <Link href=""><FaPhoneAlt color="#d9a850" /> +91-6280035719</Link>
                    <Link href=""><BiMessageRounded /> WhatsApp Amit</Link>
                  </div>
                </div>
                <div className="MailDiv">
                  <Link href="mailto:bigdayvisuals26@gmail.com">bigdayvisuals26@gmail.com</Link>
                  <h6>Pathankot, Punjab, India</h6>
                </div>

              </div>
              <div className="scllink">
                <Link href=""><FaInstagram fontSize={20}/></Link>
                <Link href=""><FaFacebook fontSize={20} /></Link>
                <Link href=""><FaYoutube fontSize={20} /></Link>
              </div>
            </div>

            <div className="RightContDiv">
              <p>Booking enquiry</p>
              {/* <Form>
                <Row>
                  <Col md={6}>
                    <Form.Control type="name" placeholder="Enter First Name"  />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="email" placeholder="Enter Email Adress" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Control type="number" placeholder="Phone / Whatsapp" />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Control as="textarea" rows={8} placeholder="Tell us about your big day…" />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button>Send booking on WhatsApp</Button>
                  </Col>
                </Row>
              </Form> */}

              <Form onSubmit={handleSubmit}>
                <Row >
                  <Col md={6}>
                    <Form.Group controlId="formName" className="InptCntrl">
                      <Form.Label>
                        First Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter First Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="InptCntrl">
                      <Form.Label>
                        Email Address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row >
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="InptCntrl">
                      <Form.Label>
                        Phone / WhatsApp <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formDate" className="InptCntrl">
                      <Form.Label>
                        Event Date <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Custom Event Type Select */}
                <Row >
                  <Col md={formData.eventType === 'Other' ? 6 : 12}>
                    <Form.Group controlId="formEventType" className="SlectCntrl">
                      <Form.Label>
                        Select Event Type <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="eventType"
                        className="slcd"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Choose an Event --</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Maternity Shoot">Maternity Shoot</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Conditional Input if "Other" is selected */}
                  {formData.eventType === 'Other' && (
                    <Col md={6}>
                      <Form.Group controlId="formOtherEvent" className="InptCntrl">
                        <Form.Label>
                          Specify Event <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="otherEvent"
                          placeholder="Enter your event type"
                          value={formData.otherEvent}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  )}
                </Row>

                <Row >
                  <Col md={12}>
                    <Form.Group controlId="formMessage" className="InptCntrl">
                      <Form.Label>
                        Event Details <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        className="InptTextArea"
                        rows={5}
                        placeholder="Tell us about your big day…"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Button variant="success" type="submit" className="SubmitBTN">
                      Send booking on WhatsApp
                    </Button>
                  </Col>
                </Row>
              </Form>

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
