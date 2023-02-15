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
                            <a href="#Test123">
                                <img src="https://via.placeholder.com/360x420.png" alt=""/>
                            </a>
                        </figure>
                        <div className="lineup-artists-description">
                            <div className="lineup-artists-description-container">
                                <div className="entry-title">
                                    Jamila Williams
                                </div>
                                <div className="entry-content">
                                    <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="#somewhere"><img src={require("../images/box.png")} alt="" width={52} height={52} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <div className="lineup-artists-description">
                            <figure className="featured-image d-md-none">
                                <a href="#somewhere">
                                    <img src="https://via.placeholder.com/360x420.png" alt=""/>
                                </a>
                            </figure>
                            <div className="lineup-artists-description-container">
                                <div className="entry-title">
                                    Sandra Superstar
                                </div>
                                <div className="entry-content">
                                    <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="#somewhere"><img src={require("../images/box.png")} alt="" width={52} height={52} /></a>
                                </div>
                            </div>
                        </div>
                        <figure className="featured-image d-none d-md-block">
                            <a href="#somewhere">
                                <img src="https://via.placeholder.com/360x420.png" alt=""/>
                            </a>
                        </figure>
                    </div>
                    <div className="lineup-artists-wrap flex flex-wrap">
                        <figure className="featured-image">
                            <a href="#somewhere">
                                <img src="https://via.placeholder.com/360x420.png" alt=""/>
                            </a>
                        </figure>
                        <div className="lineup-artists-description">
                            <div className="lineup-artists-description-container">
                                <div className="entry-title">
                                    DJ Crazyhead
                                </div>
                                <div className="entry-content">
                                    <p>Quisque at erat eu libero consequat tempus. Quisque mole stie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                                    </p>
                                </div>
                                <div className="box-link">
                                    <a href="#somewhere">
                                        <img src={require("../images/box.png")} alt="" width={52} height={52} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>

    )
}
