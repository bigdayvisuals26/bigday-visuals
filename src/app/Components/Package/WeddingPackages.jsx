"use client";
import Link from "next/link";
import "./WeddingPackages.css";
import { Container } from "react-bootstrap";
import { FaWolfPackBattalion } from "react-icons/fa";

const packages = [
  {
    number: "01",
    name: "Basic",
    tagline: "The moments that matter, beautifully kept.",
    featured: false,
    items: [
      "Traditional wedding photography",
      "Traditional wedding videography",
      "One professional photographer",
      "One edited wedding film",
      "Two premium photo albums",
      "All edited photographs in a digital gallery",
    ],
  },
  {
    number: "02",
    name: "Starter",
    tagline: "A little more coverage for your big day.",
    featured: true,
    items: [
      "Candid and traditional photography",
      "Traditional wedding film",
      "Dedicated photo and video team",
      "Two premium photo albums",
      "Beautifully edited highlights film",
      "Online gallery to share with family",
    ],
  },
  {
    number: "03",
    name: "Advance",
    tagline: "The complete celebration, from every angle.",
    featured: false,
    items: [
      "Candid and traditional photography",
      "Cinematic wedding film + highlights",
      "Drone coverage (venue and weather permitting)",
      "Two handcrafted premium albums",
      "Personalised couple keepsake gift set",
      "Custom photo keychains and couple mugs",
      "Private online gallery for family and friends",
    ],
  },
];


export default function WeddingPackages() {
  return (
    <section className="Packages_Section" id="Packages" >
      <Container fluid className="container-xl">
        <div className="PackagedData">

          <div className="PackageHeading" >
            <em>Wedding collections</em>
            <h2>Your story, <span>beautifully told.</span></h2>
            <p>Three thoughtful ways to remember every feeling, every detail and every once-in-a-lifetime moment.</p>
          </div>

          <div className="PackagedGrid">

            {packages.map((pkg, index) => (
              <article
                className={`package-card${pkg.featured ? " package-card-featured" : ""}`}
                key={pkg.name}
                
              >
                {pkg.featured && <span className="package-popular">A little extra love</span>}
                <div className="package-card-top">
                  <span className="package-number">{pkg.number} / COLLECTION</span>
                  <h2>{pkg.name}</h2>
                  <p className="package-tagline">{pkg.tagline}</p>
                </div>
                <div className="package-rule" />
                <ul className="package-inclusions">
                  {pkg.items.map((item) => (
                    <li key={item}><span aria-hidden="true"><FaWolfPackBattalion /></span>{item}</li>
                  ))}
                </ul>
                <Link className="package-cta" href="#contact">
                  Let’s plan your day <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}




          </div>
          <p className="packages-note">Every wedding is wonderfully different. Get in touch for a collection tailored to your dates, venue and celebration.</p>






        </div>

      </Container>

    </section>
  );
}
