import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import './BigdayFounders.css';
import Image from 'next/image';

const founders = [
  {
    name: 'Amit Kumar',
    role: 'Founder · Video Editor',
    experience: '3 years of experience',
    img: "/Images/AnilKumar.png",
    bio: 'Currently working with Dr. Satinder Sartaaj, Amit brings a thoughtful eye for storytelling, rhythm, and clean video edits.',
    initials: 'AK',
  },
  {
    name: 'Anil Kumar',
    role: 'Co-Founder · UI/UX Designer',
    experience: '5 years of experience',
    img: '/Images/AnilKumar.png', // Add Anil's photo here, for example: '/images/anil-kumar.jpg'
    bio: 'Working with an IT company in Chandigarh, Anil brings experience in UI/UX, graphics, and building clear, considered brand experiences.',
    initials: 'AK',
  },
];

const skills = [
  { name: 'Photoshop', value: 100 },
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'Graphic Design', value: 100 },
  { name: 'Brand & Product Design', value: 100 },
];

function FounderPortrait({ founder, index }) {
  return (
    <div className={`bigday-founder__portrait bigday-founder__portrait--${index + 1}`}>
      {founder.img ? (
        <Image src={founder.img} alt={`${founder.name}, ${founder.role}`} width={500} height={500} />
      ) : (
        <div className="bigday-founder__portrait-placeholder" aria-label={`Add ${founder.name}'s photo`}>
          <span>{founder.initials}</span>
          <small>Founder portrait</small>
        </div>
      )}
      <span className="bigday-founder__portrait-mark" aria-hidden="true">B</span>
    </div>
  );
}

export default function BigdayFounders() {
  return (
    <section className="bigday-founders" id="about-us">
      <Container>
        <div className="bigday-founders__intro">
          <span className="bigday-founders__eyebrow">The people behind the moments</span>
          <h2>Two Brothers. One Vision.</h2>
          <p className="bigday-founders__lead">
            Hum hain Amit aur Anil — brothers, creatives, aur <strong>Bigday Visuals</strong> ke founders.
            Hamara sapna hai Pathankot aur Chandigarh se ek aisa creative brand banana jo har story ko
            quality, creativity aur care ke saath capture kare.
          </p>
        </div>

        <Row className="g-4 bigday-founders__people">
          {founders.map((founder, index) => (
            <Col md={6} key={founder.name}>
              <article className="bigday-founder">
                <FounderPortrait founder={founder} index={index} />
                <div className="bigday-founder__details">
                  <span className="bigday-founder__role">{founder.role}</span>
                  <h3>{founder.name}</h3>
                  <span className="bigday-founder__experience">{founder.experience}</span>
                  <p>{founder.bio}</p>
                  <blockquote>
                    {index === 0
                      ? '“Har frame mein ek feeling honi chahiye.”'
                      : '“Achha design wahi hai jo har baat ko saaf rakhe.”'}
                  </blockquote>
                </div>
              </article>
            </Col>
          ))}
        </Row>

        <div className="bigday-founders__vision">
          <span className="bigday-founders__eyebrow">Our vision</span>
          <h3>Har big day ki story, saaf aur khoobsurti se.</h3>
          <p>
            Photography, video editing, graphics aur UI/UX ke experience ko saath laakar hum aisa kaam
            karte hain jo polished, thoughtful aur samajhne mein clear ho. Bigday Visuals ke through
            hum Pathankot aur Chandigarh mein ek trusted creative brand banana chahte hain — jahan
            har client ko quality work aur apni story ka best version mile.
          </p>
        </div>

        <div className="bigday-founders__skills">
          <div className="bigday-founders__skills-heading">
            <div>
              <span className="bigday-founders__eyebrow">What we bring to the frame</span>
              <h3>Our creative toolkit</h3>
            </div>
            <p>Design se final edit tak, har detail par poora dhyaan.</p>
          </div>
          <Row className="g-4">
            {skills.map((skill) => (
              <Col sm={6} key={skill.name}>
                <div className="bigday-skill">
                  <div className="bigday-skill__label"><span>{skill.name}</span><span>{skill.value}%</span></div>
                  <ProgressBar now={skill.value} aria-label={`${skill.name}: ${skill.value}%`} />
                </div>
              </Col>
            ))}
          </Row>
          <p className="bigday-founders__skills-note">
            Skill bars are editable estimates for presentation. Update percentages to reflect your actual proficiency.
          </p>
        </div>

        <div className="bigday-founders__contact" id="contact">
          <div>
            <span className="bigday-founders__eyebrow">Let’s create something memorable</span>
            <h3>Have a story in mind?</h3>
            <p>Photography, films, design — let’s make your big day look as special as it feels.</p>
          </div>
          <Button className="bigday-founders__button" href="#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
