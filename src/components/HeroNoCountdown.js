import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeroVidMp4 from '../vid/ErzbeatsAftermovie_720p.mp4';
import HeroVidWebm from '../vid/ErzbeatsAftermovie_WEBM.webm';
import HeroPoster from '../img/erzbeats-poster.gif';

export default function HeroNoLineup() {
    return (
        <div className='hero-content hero-video'>
            <Container>
                <Row>
                    <Col>
                        <div className='entry-header'>
                            <h2>Die Party des Sommers '24</h2>
                        </div>
                        <video id='header-video' poster={HeroPoster} autoPlay loop muted>
                            <source 
                                src={HeroVidWebm} 
                                type='video/webm' 
                            />
                            <source
                                src={HeroVidMp4}
                                type='video/mp4'
                            />
                        </video>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
