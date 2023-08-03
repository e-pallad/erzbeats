import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LogoPng from './../img/erzbeats.png';
import LogoWebp from './../img/erzbeats.webp';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className='footer-cover-title flex justify-content-center align-items-center'>
                <h2 className="site-branding">{process.env.REACT_APP_PROJEKTNAME}</h2>
            </div>
            <div className="footer-content-wrapper">
                <Container>
                    <Row>
                        <Col xl={{ span: 4 }} md={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className="footer-col social-links">
                            <h5>Folge uns auf</h5>
                            <Row className="justify-content-center">
                                <Col xs={{ span: 2 }}>
                                    <a href="https://www.facebook.com/people/Erzbeats-Lichtenberg/100090111153011/" alt="Link zur Facebook Seite von Erzebeats" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </a>
                                </Col>
                                <Col xs={{ span: 2 }}>
                                    <a href="https://www.instagram.com/erzbeats/" alt="Link zur Instagram Seite von Erzebeats" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                        </svg>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={{ span: 4 }} md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} className="footer-col">
                            <div className="entry-title">
                                <a href="/">
                                    <picture>
                                        <source 
                                            alt="Erzbeats Logo"
                                            srcSet={LogoWebp}
                                            width={"auto"}
                                            height={135}
                                            className="d-inline-block align-top"
                                        />
                                        <img
                                            alt="Erzbeats Logo"
                                            src={LogoPng}
                                            width={"auto"}
                                            height={135}
                                            className="d-inline-block align-top"
                                        /> 
                                    </picture>
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
                                        <picture>
                                            <source 
                                                srcSet={process.env.PUBLIC_URL + '/img/homag.webp'} 
                                                alt="Homag Group" 
                                                height={"auto"} 
                                                width={"150px"} 
                                                style={{ backgroundColor: "white" }} 
                                            />
                                            <img 
                                                src={process.env.PUBLIC_URL + '/img/homag.png'} 
                                                alt="Homag Group" 
                                                height={"auto"} 
                                                width={"150px"} 
                                                style={{ backgroundColor: "white" }} 
                                            />
                                        </picture>
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={{ span: 12 }}>
                                    <a href="https://soliq.me" target={"_blank"} rel={"noreferrer"}>
                                        <picture>
                                            <source 
                                                srcSet={process.env.PUBLIC_URL + '/img/soliq.webp'} 
                                                alt="SOLIQ Premiumliköre" 
                                                height={"150px"} 
                                                width={"150px"} 
                                            />
                                            <img 
                                                src={process.env.PUBLIC_URL + '/img/soliq.png'} 
                                                alt="SOLIQ Premiumliköre" 
                                                height={"150px"} 
                                                width={"150px"} 
                                            />
                                        </picture>
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