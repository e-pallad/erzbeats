import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className='footer-cover-title flex justify-content-center align-items-center'>
                <h2 className="site-branding">{process.env.REACT_APP_PROJEKTNAME}</h2>
            </div>
            <div className="footer-content-wrapper">
                <Container>
                    <Row>
                        <Col md={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className="footer-col">
                            <h5>Folge uns auf</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i> Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i> Instagram</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} className="footer-col">
                            <div className="entry-title">
                                <a href="/home">{process.env.REACT_APP_PROJEKTNAME}</a>
                            </div>
                            <div className="entry-mail">
                                <a href="mailto:frage@erzbeats.de">FRAGE@ERZBEATS.DE</a>
                            </div>
                            <div className="footer-links justify-content-md-center">
                                <Row>
                                    <Col>
                                        <a href="/impressum">Impressum</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <a href="/datenschutz">Datenschutzerklärung</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="copyright-info">
                                Copyright ©{new Date().getFullYear()} All rights reserved | This page is made with &#9825; by devfluent
                            </div>
                        </Col>
                        <Col md={{ span: 4, order: 3 }} xs={{ span: 12, order: 2 }} className="footer-col">
                        <h5>Unsere Partner</h5>
                            <Row className="justify-content-around">
                                <Col>
                                    <a href="#!" target={"_blank"} rel={"noreferrer"}>
                                        <img src="https://via.placeholder.com/120x120.png" alt="Partner 1" />
                                        {/*<img src={require("../images/box.png")} alt="Partner 1" />*/}
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://soliq.me" target={"_blank"} rel={"noreferrer"}>
                                        <img src="https://via.placeholder.com/120x120.png" alt="Soliq Liköre" />
                                        {/**<img src={require("../images/box.png")} alt="Partner 2" />*/}
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}