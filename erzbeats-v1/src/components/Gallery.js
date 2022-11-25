import { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Navigation } from "swiper";

import button from "../images/button.png";

export default function Gallery() {
    const swiperRef = useRef();

    return (
        <div className="homepage-next-events">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="entry-title">
                            <p>ERZbeat 2023</p>
                            <h2>Gallerie</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='next-event-slider-wrap'>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className='next-event-slider'
            >
                <SwiperSlide>
                    <div className="next-event-content">
                        <figure className="featured-image">
                            <img src="https://via.placeholder.com/461x365.png" alt="" />
                            <a href="#123" className="entry-content flex flex-column justify-content-center align-items-center">
                                <h3>ERZbeat 2023</h3>
                                <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                            </a>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="next-event-content">
                        <figure className="featured-image">
                            <img src="https://via.placeholder.com/461x365.png" alt="" />
                            <a href="#123" className="entry-content flex flex-column justify-content-center align-items-center">
                                <h3>ERZbeat 2023</h3>
                                <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                            </a>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="next-event-content">
                        <figure className="featured-image">
                            <img src="https://via.placeholder.com/461x365.png" alt="" />
                            <a href="#123" className="entry-content flex flex-column justify-content-center align-items-center">
                                <h3>ERZbeat 2023</h3>
                                <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                            </a>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="next-event-content">
                        <figure className="featured-image">
                            <img src="https://via.placeholder.com/461x365.png" alt="" />
                            <a href="#123" className="entry-content flex flex-column justify-content-center align-items-center">
                                <h3>ERZbeat 2023</h3>
                                <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                            </a>
                        </figure>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}>
                <img src={button} alt=""/>
            </div>
            </div>
        </div>
    )
}
