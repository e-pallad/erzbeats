import { Col, Row } from "react-bootstrap";

export default function Philosophie() {
    return (
        <Col xs="12">
            <Row>
                <Col xs="12">
                    <div className="philosophie-headline">
                        <div className="entry-title">
                            <p>ERZbeats 2023</p>
                            <h2>Unsere Philosophie</h2>
                        </div>
                        <div className="philosophie">
                            <div className="philosophie-wrap flex flex-wrap">
                                <figure className="featured-image">
                                    <picture>
                                        <source 
                                            srcSet={require("../images/philosophie.webp")} 
                                            alt="Menschen genießen Musik"
                                            width={360}
                                            height="auto"
                                        />
                                        <img 
                                            src={require("../images/philosophie.jpg")} 
                                            alt="Menschen genießen Musik" 
                                            width={360}
                                            height="auto"
                                        />
                                    </picture>
                                </figure>
                                <div className="philosophie-description">
                                    <div className="philosophie-description-container">
                                        <div className="entry-content">
                                            <p> 
                                                Das Erzbeats Open Air, soll dich für einen Tag, aus dem üblichen Alltag herausholen. Wir kreieren an einem Tag unvergessliche Momente mit deinen Freunden und wollen dir genau das Feeling geben, was du sonst nur auf Festivals bekommst. Tanz mit uns bis in die Morgenstunden und lasse deinen Gefühlen dabei freien Lauf. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}