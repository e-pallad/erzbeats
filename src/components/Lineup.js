import Col from "react-bootstrap/Col";

import data from "./data/lineup.json"
import SoundCloudImg from './../img/box.png';
import SoundCloudWebp from './../img/box.webp';

export default function Lineup() {
    const lineup = data.map((data, index) => 
        { if ( index % 2 === 0 ) {
            return (
                <div className="lineup-artists-wrap flex flex-wrap">
                    <figure className="featured-image">
                        {( data.instagram ? (
                            <a href={data.instagram} target={"_blank"} rel={"noreferrer"} alt={"Instagram Link: " + data.name}>
                                <picture>
                                    <source 
                                        srcSet={process.env.PUBLIC_URL + data.images.webp} 
                                        alt={"Teaser: " + data.name}
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={process.env.PUBLIC_URL + data.images.png} 
                                        alt={"Teaser: " + data.name} 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        ) : (
                            <picture>
                                <source 
                                    srcSet={process.env.PUBLIC_URL + data.images.webp} 
                                    alt={"Teaser: " + data.name}
                                    width={360}
                                    height="auto"
                                />
                                <img 
                                    src={process.env.PUBLIC_URL + data.images.png} 
                                    alt={"Teaser: " + data.name} 
                                    width={360}
                                    height="auto"
                                />
                            </picture>
                        ) )}
                    </figure>
                    <div className="lineup-artists-description">
                        <div className={"lineup-artists-description-container " + data.name.replace(/\s/g, "-").toLowerCase()}>
                            <div className="entry-title">{data.name}</div>
                            <div className="entry-content"><p>{data.beschreibung}</p></div>
                            {( data.soundcloud ? 
                                (<div className="box-link">
                                    <a href={data.soundcloud} target={"_blank"} rel={"noreferrer"} alt={data.name + " Soundcloud Link"}>
                                        <picture>
                                            <source 
                                                srcSet={SoundCloudWebp} 
                                                alt={data.name + "Soundcloud Link"}
                                                width={52} 
                                                height={52}
                                            />
                                            <img 
                                                src={SoundCloudImg} 
                                                alt={data.name + "Soundcloud Link"}
                                                width={52} 
                                                height={52} 
                                            />
                                        </picture>
                                    </a>
                                </div>) : ( null ) 
                            )}
                        </div>
                    </div>
                </div>
            ) 
        } else {
            return (
                <div className="lineup-artists-wrap flex flex-wrap">
                    <div className="lineup-artists-description">
                        <div className={"lineup-artists-description-container " + data.name.replace(/\s/g, "-").toLowerCase()}>
                            <div className="entry-title">{data.name}</div>
                            <div className="entry-content"><p>{data.beschreibung}</p></div>
                            {( data.soundcloud ? 
                            (<div className="box-link">
                                <a href={data.soundcloud} target={"_blank"} rel={"noreferrer"} alt={data.name + " Soundcloud Link"}>
                                    <picture>
                                        <source 
                                            srcSet={SoundCloudWebp} 
                                            alt={data.name + "Soundcloud Link"}
                                            width={52} 
                                            height={52}
                                        />
                                        <img 
                                            src={SoundCloudImg} 
                                            alt={data.name + "Soundcloud Link"}
                                            width={52} 
                                            height={52} 
                                        />
                                    </picture>
                                </a>
                            </div>) : ( null ) 
                        )}
                        </div>
                    </div>
                    <figure className="featured-image">
                        {( data.instagram ? (
                            <a href={data.instagram} target={"_blank"} rel={"noreferrer"} alt={"Instagram Link: " + data.name}>
                                <picture>
                                    <source 
                                        srcSet={process.env.PUBLIC_URL + data.images.webp} 
                                        alt={"Teaser: " + data.name}
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={process.env.PUBLIC_URL + data.images.png} 
                                        alt={"Teaser: " + data.name} 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        ) : (
                            <picture>
                                <source 
                                    srcSet={process.env.PUBLIC_URL + data.images.webp} 
                                    alt={"Teaser: " + data.name}
                                    width={360}
                                    height="auto"
                                />
                                <img 
                                    src={process.env.PUBLIC_URL + data.images.png} 
                                    alt={"Teaser: " + data.name} 
                                    width={360}
                                    height="auto"
                                />
                            </picture>
                        ) )}
                    </figure>
                </div>
            )
        }
    });

    return (
        <Col xs="12">
            <div id="lineup" className="lineup-artists-headline">
                <div className="entry-title">
                    <p>ERZbeats {process.env.REACT_APP_YEAR}</p>
                    <h2>Lineup</h2>
                </div>
                <div className="lineup-artists">
                    {lineup}
                </div>
            </div>
        </Col>
    )
}
