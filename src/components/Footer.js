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
                        <Col xl={{ span: 4 }} md={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className="footer-col">
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
                        <Col xl={{ span: 4 }} md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} className="footer-col">
                            <div className="entry-title">
                                <a href="/">
                                    <img
                                        alt="Erzbeats logo"
                                        src={require("../images/erzbeats.png")}
                                        width={"auto"}
                                        height={135}
                                        className="d-inline-block align-top"
                                    />    
                                </a>
                            </div>
                            <div className="entry-mail">
                                <a href="mailto:info@erzbeats.de">INFO@ERZBEATS.DE</a>
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
                        </Col>
                        <Col xl={{ span: 4 }} md={{ span: 4, order: 3 }} xs={{ span: 12, order: 2 }} className="footer-col">
                        <h5>Unsere Partner</h5>
                            <Row className="justify-content-around">
                                <Col md={{ span: 12 }}>
                                    <a href="https://www.homag.com/" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/homag.png")} alt="Homag Group" height={"auto"} width={"150px"} style={{ backgroundColor: "white" }} />
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={{ span: 12 }}>
                                    <a href="https://soliq.me" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/soliq.png")} alt="SOLIQ Premiumliköre" height={"150px"} width={"150px"} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="copyright-info">
                                Copyright ©{new Date().getFullYear()} All rights reserved | This page is made with &#9825; by devfluent
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}