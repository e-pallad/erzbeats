import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import box from "../images/box.jpg";

export default function Lineup2() {
    return (
        <Col xs="12">
            <div className="the-complete-lineup">
                <div className="entry-title">
                    <p>ERZbeat 2023</p>
                    <h2>Lineup Variante 2</h2>
                </div>
                <div className="row the-complete-lineup-artists">
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>Miska Smith</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/>
                            </a>
                        </Figure>
                        <h2>Hayley Down</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>The Band Song</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>Pink Machine</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>Brasil Band</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>Mickey</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>DJ Girl</h2>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                        <Figure className="featured-image">
                            <a href="#123">
                                <img src="https://via.placeholder.com/255x295.png" alt=""/></a>
                        </Figure>
                        <h2>Stan Smith</h2>
                    </div>
                </div>
            </div>
        </Col>
    )
}
