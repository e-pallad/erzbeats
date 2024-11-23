import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";

// Timer done component
const Completionist = () => (
  <div className="entry-header-subline">
    <h2>DANCE TOGETHER. FOREVER.</h2>
  </div>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="countdown flex flex-wrap justify-content-between text-center">
        <div className="countdown-holder">
          <div className="dday">{days}</div>
          <label>Tage</label>
        </div>
        <div className="countdown-holder d-xl-block d-none">
          <div className="dlimiter">:</div>
        </div>
        <div className="countdown-holder">
          <div className="dhour">{hours}</div>
          <label>Stunden</label>
        </div>
        <div className="countdown-holder d-xl-block d-none">
          <div className="dlimiter">:</div>
        </div>
        <div className="countdown-holder">
          <div className="dmin">{minutes}</div>
          <label>Minuten</label>
        </div>
        <div className="countdown-holder d-xl-block d-none">
          <div className="dlimiter">:</div>
        </div>
        <div className="countdown-holder">
          <div className="dsec">{seconds}</div>
          <label>Sekunden</label>
        </div>
      </div>
    );
  }
};

export default function HeroCountdown() {
  return (
    <div className="hero-content">
      <Container>
        <Row>
          <Col>
            <div className="entry-header">
              <h2>Die Party des Sommers '25</h2>
            </div>
            <Countdown
              date="2025-06-21T16:00:00"
              daysInHours={false}
              renderer={renderer}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="entry-footer">
              <a href="/tickets" className="btn">
                Tickets
              </a>
              <a href="#lineup" className="btn">
                Lineup
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
