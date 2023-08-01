import React, { useEffect } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';

import ImagesTwentyThree from '../components/GalleryTwentyThree';

export default function Home() {
    useEffect(() => {
        document.body.classList.add('gallery-page')
        return () => {
            document.body.classList.remove('gallery-page')
        }
    }, [])
    return (
        <Container>
            <div className='main-content'>
                <div className="gallery_2023">
                    <div className='entry-header'>
                        <div className="entry-title">
                            <p>ERZbeats 2023</p>
                            <h2>Bilder</h2>
                        </div>
                    </div>
                    <div className='gallery'>
                        <Row className="mt-5">
                            <ImageGallery items={ImagesTwentyThree} showPlayButton={false} />
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    )
}