import Col from "react-bootstrap/Col";

export default function Lineup1() {
    return (
        <Col xs="12">
            <div id="lineup" className="lineup-artists-headline">
                <div className="entry-title">
                    <p>ERZbeats 2023</p>
                    <h2>Lineup</h2>
                </div>
                <div className="lineup-artists">
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <figure className="featured-image">
                            <a href="https://www.instagram.com/blvckcrowz/" target={"_blank"} rel={"noreferrer"} alt="Instagram: Blvck Crows">
                                <picture>
                                    <source 
                                        srcSet={require("../images/artists/blvck-crows.webp")} 
                                        alt="Teaser: Blvck Crows"
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={require("../images/artists/blvck-crows.png")} 
                                        alt="Teaser: Blvck Crows" 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        </figure>
                        <div className="lineup-artists-description">
                            <div className="lineup-artists-description-container blvck-crowz">
                                <div className="entry-title">
                                    BLVCK CROWZ
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Der in Leipzig ansässige BLVCK CROWZ bringt seine eingängigen und energiegeladenen Jump Up-Sound unter die Massen. Mit seinem unverkennbaren Jump Up Stil erobert BLVCK CROWZ die Drum & Bass-Szene.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="https://soundcloud.com/blvckcrowz" target={"_blank"} rel={"noreferrer"} alt="Blvck Crows Soundcloud Link">
                                        <picture>
                                            <source 
                                                srcSet={require("../images/box.webp")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52}
                                            />
                                            <img 
                                                src={require("../images/box.png")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52} 
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <div className="lineup-artists-description">
                            <figure className="featured-image d-md-none">
                                <a href="#somewhere" target={"_blank"} rel={"noreferrer"} alt="Instagram: Darley Jefferson">
                                    <picture>
                                        <source 
                                            srcSet={require("../images/artists/darley-jefferson.webp")} 
                                            alt="Teaser: Darley Jefferson"
                                            width={360}
                                            height="auto"
                                        />
                                        <img 
                                            src={require("../images/artists/darley-jefferson.png")} 
                                            alt="Teaser: Darley Jefferson" 
                                            width={360}
                                            height="auto"
                                        />
                                    </picture>
                                </a>
                            </figure>
                            <div className="lineup-artists-description-container darley-jefferson">
                                <div className="entry-title">
                                    Darley Jefferson
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Der junge DJ aus Sachsen bietet euch nicht nur eine geile Show, sondern begleitet seit 2018 Millionen Menschen mit seiner Musik. Seine Mixtapes wurden mittlerweile über 50.000.000+ mal geklickt. Warum das so erfolgreich ist, wird er euch auf unserer Bühne zeigen.. please give a warm welcome!
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="#somewhere" target={"_blank"} rel={"noreferrer"} alt="Darley Jefferson Soundcloud Link">
                                        <picture>
                                            <source 
                                                srcSet={require("../images/box.webp")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52}
                                            />
                                            <img 
                                                src={require("../images/box.png")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52} 
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <figure className="featured-image d-none d-md-block">
                            <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                <picture>
                                    <source 
                                        srcSet={require("../images/artists/darley-jefferson.webp")} 
                                        alt="Teaser: Darley Jefferson"
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={require("../images/artists/darley-jefferson.png")} 
                                        alt="Teaser: Darley Jefferson" 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        </figure>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <figure className="featured-image">
                            <a href="https://www.instagram.com/oscar_house_/" target={"_blank"} rel={"noreferrer"} alt="Instagram: Oscar House">
                                <picture>
                                    <source 
                                        srcSet={require("../images/artists/oscar-house.webp")}
                                        alt="Teaser: Oscar House"
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={require("../images/artists/oscar-house.png")} 
                                        alt="Teaser: Oscar House" 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        </figure>
                        <div className="lineup-artists-description">
                            <div className="lineup-artists-description-container oscar-house">
                                <div className="entry-title">
                                    Oscar House
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Oscar House steht für treibende Sounds, knackige Bässe, lässige Vocals und abgefahrene
                                        Drops. Der aus Sachsen stammende DJ und Producer verkörpert seine Leidenschaft zur
                                        elektronischen Tanzmusik wie kaum ein anderer.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="https://soundcloud.com/oscar_house" target={"_blank"} rel={"noreferrer"} alt="Oscar House Soundcloud Link">
                                        <picture>
                                            <source 
                                                srcSet={require("../images/box.webp")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52}
                                            />
                                            <img 
                                                src={require("../images/box.png")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52} 
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <div className="lineup-artists-description">
                            <figure className="featured-image d-md-none">
                                <a href="#somewhere" target={"_blank"} rel={"noreferrer"} alt="Instagram: Justin Pollnik">
                                    <picture>
                                        <source 
                                            srcSet={require("../images/artists/justin-pollnik.webp")} 
                                            alt="Teaser: Justin Pollnik"
                                            width={360}
                                            height="auto"
                                        />
                                        <img 
                                            src={require("../images/artists/justin-pollnik.jpg")} 
                                            alt="Teaser: Justin Pollnik" 
                                            width={360}
                                            height="auto"
                                        />
                                    </picture>
                                </a>
                            </figure>
                            <div className="lineup-artists-description-container justin-pollnik">
                                <div className="entry-title">
                                    Justin Pollnik
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Justin Pollnik ist mit seinen 23 Jahren bereits einer der gefragtesten EDM-Acts in
                                        Ostdeutschland und der wahrscheinlich bekannteste Harder Styles-Act im Osten der
                                        Republik. Der Leipziger zieht die Massen mit, wenn er seine einzigartige Performance
                                        abliefert - egal ob mit seinem deutschen Set aus Hardstyle & EDM oder seiner starken,
                                        einmaligen Crowd Animation.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="#somewhere" target={"_blank"} rel={"noreferrer"} alt="Juston Pollnik Soundcloud Link">
                                        <picture>
                                            <source 
                                                srcSet={require("../images/box.webp")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52}
                                            />
                                            <img 
                                                src={require("../images/box.png")} 
                                                alt="Blvck Crows Soundcloud Link" 
                                                width={52} 
                                                height={52} 
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <figure className="featured-image d-none d-md-block">
                            <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                <picture>
                                    <source 
                                        srcSet={require("../images/artists/justin-pollnik.webp")} 
                                        alt="Teaser: Justin Pollnik"
                                        width={360}
                                        height="auto"
                                    />
                                    <img 
                                        src={require("../images/artists/justin-pollnik.jpg")} 
                                        alt="Teaser: Justin Pollnik" 
                                        width={360}
                                        height="auto"
                                    />
                                </picture>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </Col>
    )
}
