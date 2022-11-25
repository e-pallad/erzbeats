import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Content() {
    return (
        <div className="content-section">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="lineup-artists-headline">
                            <div className="entry-title">
                                <p>ERZbeat 2023</p>
                                <h2>Die Headliner</h2>
                            </div>
                            <div className="lineup-artists">
                                <div className="lineup-artists-wrap flex flex-wrap">
                                    <figure className="featured-image">
                                        <a href="#Test123">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                    <div className="lineup-artists-description">
                                        <div className="lineup-artists-description-container">
                                            <div className="entry-title">
                                                Jamila Williams
                                            </div>
                                            <div className="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                                <AudioPlayer src="https://soundcloud.com/noah-strebe-387899902/another-love-ostekke" crossOrigin="anonymous" onPlay={e => console.log("onPlay")} />
                                            </div>
                                            <div className="box-link">
                                                <a href="#somewhere"><img src="images/box.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lineup-artists-wrap flex flex-wrap">
                                    <div className="lineup-artists-description">
                                        <figure className="featured-image d-md-none">
                                            <a href="#somewhere">
                                                <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                            </a>
                                        </figure>
                                        <div className="lineup-artists-description-container">
                                            <div className="entry-title">
                                                Sandra Superstar
                                            </div>
                                            <div className="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                            <div className="box-link">
                                                <a href="#somewhere"><img src="images/box.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <figure className="featured-image d-none d-md-block">
                                        <a href="#somewhere">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="lineup-artists-wrap flex flex-wrap">
                                    <figure className="featured-image">
                                        <a href="#somewhere">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                    <div className="lineup-artists-description">
                                        <div className="lineup-artists-description-container">
                                            <div className="entry-title">
                                                DJ Crazyhead
                                            </div>
                                            <div className="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                            <div className="box-link">
                                                <a href="#somewhere">
                                                    <img src="images/box.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
