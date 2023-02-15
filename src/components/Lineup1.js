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
                            <a href="https://www.instagram.com/blvckcrowz/" target={"_blank"} rel={"noreferrer"}>
                                <img src={require("../images/blvck-crows.png")} alt="Teaser: Blvck Crows" />
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
                                    <a href="https://soundcloud.com/blvckcrowz" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/box.png")} alt="Blvck Crows Soundcloud Link" width={52} height={52} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <div className="lineup-artists-description">
                            <figure className="featured-image d-md-none">
                                <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                    <img src={require("../images/darley-jefferson.png")} alt="Teaser: Darley Jefferson" />
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
                                    <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/box.png")} alt="" width={52} height={52} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <figure className="featured-image d-none d-md-block">
                            <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                <img src={require("../images/darley-jefferson.png")} alt="Teaser: Darley Jefferson" />
                            </a>
                        </figure>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <figure className="featured-image">
                            <a href="https://www.instagram.com/oscar_house_/" target={"_blank"} rel={"noreferrer"}>
                                <img src={require("../images/oscar-house.png")} alt="Teaser: Oscar House" />
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
                                    <a href="https://soundcloud.com/oscar_house" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/box.png")} alt="" width={52} height={52} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <div className="lineup-artists-description">
                            <figure className="featured-image d-md-none">
                                <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                    <img src={require("../images/justin-pollnik.jpg")} alt="Teaser: Justin Pollnik" />
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
                                    <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                        <img src={require("../images/box.png")} alt="" width={52} height={52} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <figure className="featured-image d-none d-md-block">
                            <a href="#somewhere" target={"_blank"} rel={"noreferrer"}>
                                <img src={require("../images/justin-pollnik.jpg")} alt="Teaser: Justin Pollnik" />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </Col>

    )
}
