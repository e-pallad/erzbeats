import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Header from './components/Header';
import Hero from './components/Hero';
import Lineup1 from './components/Lineup1';
import Lineup2 from './components/Lineup2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="content-section">
        <Container>
          <Row>
            <Lineup1 />
          </Row>
          <Row>
            <Lineup2 />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
