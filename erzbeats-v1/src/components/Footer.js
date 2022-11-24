import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className='footer-cover-title flex justify-content-center align-items-center'>
                <h2>{process.env.REACT_APP_PROJEKTNAME}</h2>
            </div>
            <div class="footer-content-wrapper">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div class="entry-title">
                                <a href="/home">{process.env.REACT_APP_PROJEKTNAME}</a>
                            </div>
                            <div class="entry-mail">
                                <a href="mailto:frage@erzbeats.de">FRAGE@ERZBEATS.DE</a>
                            </div>
                            <div class="copyright-info">
                                Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with &#9825; by devfluent
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}