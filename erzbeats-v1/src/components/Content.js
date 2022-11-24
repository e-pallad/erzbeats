import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Content() {
    return (
        <div className="content-section">
            <Container>
                <Row>
                    <Col xs="12">
                        <div class="lineup-artists-headline">
                            <div class="entry-title">
                                <p>ERZbeat 2023</p>
                                <h2>Die Headliner</h2>
                            </div>
                            <div class="lineup-artists">
                                <div class="lineup-artists-wrap flex flex-wrap">
                                    <figure class="featured-image">
                                        <a href="#Test123">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                    <div class="lineup-artists-description">
                                        <div class="lineup-artists-description-container">
                                            <div class="entry-title">
                                                Jamila Williams
                                            </div>
                                            <div class="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                            <div class="box-link">
                                                <a href="#somewhere"><img src="images/box.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineup-artists-wrap flex flex-wrap">
                                    <div class="lineup-artists-description">
                                        <figure class="featured-image d-md-none">
                                            <a href="#somewhere">
                                                <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                            </a>
                                        </figure>
                                        <div class="lineup-artists-description-container">
                                            <div class="entry-title">
                                                Sandra Superstar
                                            </div>
                                            <div class="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                            <div class="box-link">
                                                <a href="#somewhere"><img src="images/box.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <figure class="featured-image d-none d-md-block">
                                        <a href="#somewhere">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                </div>
                                <div class="lineup-artists-wrap flex flex-wrap">
                                    <figure class="featured-image">
                                        <a href="#somewhere">
                                            <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                        </a>
                                    </figure>
                                    <div class="lineup-artists-description">
                                        <div class="lineup-artists-description-container">
                                            <div class="entry-title">
                                                DJ Crazyhead
                                            </div>
                                            <div class="entry-content">
                                                <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                                </p>
                                            </div>
                                            <div class="box-link">
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
