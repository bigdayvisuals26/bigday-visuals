'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { gsap } from 'gsap';
import './GoogleReviews.css';

// Replace these clearly marked examples with genuine customer reviews before publishing.
// For each real Google review, add its author, exact text, rating, date, and Google Maps review URL.
const REVIEWS = [
  {
    id: 'demo-1',
    author: 'Sample Client 01',
    occasion: 'Wedding photography',
    rating: 5,
    date: 'Sample review',
    text: 'The team made our special day feel relaxed and captured so many moments we will always treasure.',
    sourceUrl: '',
    isDemo: true,
  },
  {
    id: 'demo-2',
    author: 'Sample Client 02',
    occasion: 'Pre-wedding shoot',
    rating: 5,
    date: 'Sample review',
    text: 'We felt comfortable throughout the shoot, and the photos told our story beautifully.',
    sourceUrl: '',
    isDemo: true,
  },
  {
    id: 'demo-3',
    author: 'Sample Client 03',
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
    <section className="static-reviews-section" ref={sectionRef} aria-labelledby="static-reviews-title">
      <Container>
        <Row className="align-items-end gy-4 mb-4 mb-lg-5">
          <Col lg={8} ref={headingRef}>
            <p className="static-reviews-eyebrow">Bigday Visuals · Client stories</p>
            <h2 id="static-reviews-title" className="static-reviews-title">{title}</h2>
            <p className="static-reviews-subtitle">{subtitle}</p>
          </Col>
          <Col lg={4} className="text-lg-end">
            <span className="static-reviews-count">{items.length} {items.length === 1 ? 'story' : 'stories'}</span>
          </Col>
        </Row>

        {hasDemoContent && (
          <div className="static-reviews-demo-note" role="note">
            Sample testimonials for preview — replace with genuine customer reviews before publishing.
          </div>
        )}

        <Row className="align-items-center g-4">
          <Col lg={8}>
            <div
              className="static-review-slider"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
              }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials; pauses on hover or keyboard focus"
            >
              <Carousel
                activeIndex={activeIndex}
                onSelect={(index) => setActiveIndex(index)}
                interval={null}
                controls={items.length > 1}
                indicators={items.length > 1}
                keyboard
                pause={false}
                touch
                wrap
                className="static-review-carousel"
              >
                {items.map((review, index) => (
                  <Carousel.Item key={review.id || index}>
                    <motion.div
                      initial={false}
                      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      whileHover={reduceMotion ? undefined : { y: -2 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <Card className="static-review-card">
                        <Card.Body>
                          <div className="static-review-topline">
                            <span className="static-review-occasion">{review.occasion}</span>
                            {review.isDemo ? (
                              <span className="static-review-sample-tag">Sample</span>
                            ) : review.sourceUrl ? (
                              <a className="static-review-google-tag" href={review.sourceUrl} target="_blank" rel="noreferrer">Google review ↗</a>
                            ) : null}
                          </div>
                          <Stars rating={review.rating} />
                          <Card.Text className="static-review-copy">“{review.text}”</Card.Text>
                          <div className="static-review-bottomline">
                            <div>
                              <strong className="static-review-author">{review.author}</strong>
                              <div className="static-review-date">{review.date}</div>
                            </div>
                            <span className="static-review-pagination">{index + 1} / {items.length}</span>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col lg={4}>
            <div className="static-review-controls">
              <p>Real moments, remembered in their own words.</p>
              <span className="static-review-autoplay">Auto-slides every 7 seconds · hover to pause</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
