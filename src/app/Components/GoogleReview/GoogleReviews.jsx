'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { gsap } from 'gsap';
import './GoogleReviews.css';


const REVIEWS = [
  {
    id: 'demo-1',
    author: 'Anil Kumar',
    occasion: 'Wedding photography',
    rating: 5,
    date: '23/02/2026',
    text: 'The team made our special day feel relaxed and captured so many moments we will always treasure.',
    sourceUrl: '',
    isDemo: true,
  },
  {
    id: 'demo-2',
    author: 'xyz',
    occasion: 'Pre-wedding shoot',
    rating: 3,
    date: 'Sample review',
    text: 'We felt comfortable throughout the shoot, and the photos told our story beautifully.',
    sourceUrl: '',
    isDemo: true,
  },
  {
    id: 'demo-3',
    author: 'yzx',
    occasion: 'Birthday celebration',
    rating: 5,
    date: 'Sample review',
    text: 'They captured the smiles, little details, and happy chaos of the celebration perfectly.',
    sourceUrl: '',
    isDemo: true,
  },
];

function Stars({ rating }) {
  return (
    <span className="static-review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span aria-hidden="true" key={index} className={index < rating ? 'is-filled' : ''}>★</span>
      ))}
    </span>
  );
}

export default function GoogleReviews({
  title = 'Kind words from our clients',
  subtitle = 'Every celebration has a story. Here are a few words from the people who shared theirs with us.',
  reviews = REVIEWS,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => reviews.filter((review) => review?.text), [reviews]);
  const hasDemoContent = items.some((review) => review.isDemo);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (items.length < 2 || isPaused || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [items.length, isPaused, reduceMotion]);

  useEffect(() => {
    if (!sectionRef.current || reduceMotion) return undefined;
    const context = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
        );
      }
    }, sectionRef);
    return () => context.revert();
  }, [reduceMotion]);

  if (!items.length) return null;

  return (
    <section className="GoogleReviewSec" ref={sectionRef}>
      <Container fluid className='container-xl'>
        <div className="ReviewData" >
          <div className="TopReview"  ref={headingRef}>
            <div className="ReviewHeading">
              <em>Bigday Visuals · Client stories</em>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
            <div className="ReviewStory">
              <p><span>{items.length} </span> {items.length === 1 ? 'story' : 'stories'}</p>
            </div>
          </div>
          <div className="BottomReview">
            <div
              className="static-review-slider"  onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
              }} role="region" aria-roledescription="carousel" aria-label="Client testimonials; pauses on hover or keyboard focus" >
              <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}
                interval={null} controls={items.length > 1} indicators={items.length > 1} keyboard pause={false} touch wrap className="static-review-carousel">
                {items.map((review, index) => (
                  <Carousel.Item key={review.id || index}>
                      <Card className="static-review-card">
                        <Card.Body>
                          <h6>{review.occasion}</h6>
                          <Stars rating={review.rating} />
                          <Card.Text className="static-review-copy">“{review.text}”</Card.Text>
                          <div className="static-review-bottomline">
                            <div className='AuthorDiv'>
                              <h4>{review.author}</h4>
                              <p>{review.date}</p>
                            </div>
                            <p className="static-review-pagination">{index + 1} / {items.length}</p>
                          </div>
                        </Card.Body>
                      </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
