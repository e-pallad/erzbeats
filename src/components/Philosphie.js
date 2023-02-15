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
                                    <img src={require("../images/philosophie.jpg")} alt="Menschen genießen Musik" width={420} height={360} />
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