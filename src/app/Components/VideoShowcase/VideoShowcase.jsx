import { Container, Row, Col } from "react-bootstrap";
import "./VideoShowcase.css";

function VideoShowcase() {
  return (
    <section className="video-showcase" id="films">
      <Container fluid>
        <Row className="align-items-end video-showcase-heading">
          <Col md={7}>
            <span className="video-eyebrow">BIDDAYS VISUALS · FILMS</span>
            <h2>
              The day.
              <br />
              The feeling.
              <br />
              <em>The film.</em>
            </h2>
          </Col>

          <Col md={5}>
            <p>
              Relive the people, emotions and little moments that made the
              celebration yours.
            </p>
          </Col>
        </Row>

        <div className="video-showcase-frame">
          <video
            className="showcase-video"
            src="/Images/WhatsApp%20Video%202026-08-02%20at%206.24.25%20PM.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Biddays Visuals wedding film"
          >
            Your browser does not support video playback.
          </video>

          <span className="video-frame-label">A STORY BY BIDDAYS VISUALS</span>
        </div>
      </Container>
    </section>
  );
}

export default VideoShowcase;