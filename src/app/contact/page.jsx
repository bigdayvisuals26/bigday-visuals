import "./contact.css";
const links = {
  website: "https://bigdayvisuals.vercel.app/",
  whatsapp1: "https://wa.me/919914994135",
  whatsapp2: "https://wa.me/916280035719",
  email: "bigdayvisuals26@gmail.com",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-card">
        <div className="brand-mark">BD</div>
        <p className="eyebrow">BIG DAY VISUALS</p>
        <h1>Your day, beautifully told.</h1>
        <p className="intro">
          Hamara kaam dekhein ya apni booking ke baare mein baat karein.
        </p>

        <nav className="contact-links" aria-label="Contact aur booking links">
          <a className="contact-link" href={links.website} target="_blank" rel="noreferrer">
            <span className="link-icon">↗</span>
            <span>
              <strong>Website dekhein</strong>
              <small>Hamare kaam aur services dekhein</small>
            </span>
            <span className="arrow">›</span>
          </a>

          <a
            className="contact-link"
            href={`${links.whatsapp1}?text=${encodeURIComponent("Hi Big Day Visuals, mujhe booking ke baare mein jaankari chahiye.")}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">◉</span>
            <span>
              <strong>WhatsApp · Main</strong>
              <small>+91 99149 94135</small>
            </span>
            <span className="arrow">›</span>
          </a>

          <a
            className="contact-link"
            href={`${links.whatsapp2}?text=${encodeURIComponent("Hi Big Day Visuals, mujhe booking ke baare mein jaankari chahiye.")}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">◉</span>
            <span>
              <strong>WhatsApp · Alternate</strong>
              <small>+91 62800 35719</small>
            </span>
            <span className="arrow">›</span>
          </a>

          <a
            className="contact-link"
            href={`mailto:${links.email}?subject=${encodeURIComponent("Booking enquiry — Big Day Visuals")}`}
          >
            <span className="link-icon">✉</span>
            <span>
              <strong>Booking ke liye email karein</strong>
              <small>{links.email}</small>
            </span>
            <span className="arrow">›</span>
          </a>
        </nav>

        <footer>BIG DAY VISUALS · LET’S MAKE IT MEMORABLE</footer>
      </section>
    </main>
  );
}