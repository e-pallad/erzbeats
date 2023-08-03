import Col from "react-bootstrap/Col";

import ArtistPlaceholderImagePng from './../img/ArtistPlaceholder.png';
import ArtistPlaceholderImageWebp from './../img/ArtistPlaceholder.webp';

export default function Lineup2() {
    return (
        <Col xs="12">
            <div id="lineup" className="lineup-artists-headline">
                <div className="entry-title">
                    <p>ERZbeats {process.env.REACT_APP_YEAR}</p>
                    <h2>Lineup</h2>
                </div>
                <div className="lineup-artists">
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <figure className="featured-image">
                            <a href="https://www.instagram.com/erzbeats/" target={"_blank"} rel={"noreferrer"} alt="Instagram Link: Erzbeats">
                                <picture>
                                    <source 
                                        srcSet={ArtistPlaceholderImageWebp} 
                                        alt="Platzhalterbild für kommende DJ's"
                                        width={540}
                                        height="auto"
                                    />
                                    <img 
                                        src={ArtistPlaceholderImagePng} 
                                        alt="Platzhalterbild für kommende DJ's" 
                                        width={540}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        </figure>
                        <div className="lineup-artists-description">
                            <div className="lineup-artists-description-container blvck-crowz">
                                <div className="entry-title">
                                    T.B.A.
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Wir halten euch auf den laufenden bis wir genaueres Wissen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
