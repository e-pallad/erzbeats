import React, { useEffect } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';

const imagesTwentyThree = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
]

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
                <div className="gallery">
                    <div className='entry-header'>
                        <div className="entry-title">
                            <p>ERZbeats 2023</p>
                            <h2>Bilder</h2>
                        </div>
                    </div>
                    <div className='gallery-twentythree'>
                        <Row className="mt-5">
                            <ImageGallery items={imagesTwentyThree} />
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    )
}