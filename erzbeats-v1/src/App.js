import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
