import React, { useEffect } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ImageGallery from 'react-image-gallery';
import '../css/image-gallery.css';

const images = require.context('../../public/img/gallery', true);
// let gallery = images(`./${year}/${source}.png`);
// let thumbs = images(`./${year}/thumbs/${source}.png`);

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
    console.log(images)
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
                            <ImageGallery items={imagesTwentyThree} />
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    )
}