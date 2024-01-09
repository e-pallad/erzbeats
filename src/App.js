import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import { Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
import HeaderTeaser from './components/HeaderTeaser';
import Footer from './components/Footer';

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Tickets from './pages/Tickets';
import Teaser from './pages/Teaser';
import Bilder from './pages/Bilder'
import Page404 from './pages/404';

var teaser = false;

function Layout() {
  if (teaser) {
    return (
      <>
      <HeaderTeaser />
      <Outlet />
      </>
    );
  } else {
    return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    );
  }
}

export default function App() {
  if (teaser) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Layout /> }>
              <Route index path='/' element={ <Teaser /> } />
              <Route path='bilder' element={ <Bilder /> } />
              <Route path='impressum' element={ <Impressum /> } />
              <Route path='datenschutz' element={ <Datenschutz /> } />
              <Route path='kontakt' element={ <Kontakt /> } />
              <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>  
      </div>
    );
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Layout /> }>
              <Route index path='/' element={ <Home /> } />
              <Route path='bilder' element={ <Bilder /> } />
              <Route path='impressum' element={ <Impressum /> } />
              <Route path='datenschutz' element={ <Datenschutz /> } />
              <Route path='kontakt' element={ <Kontakt /> } />
              <Route path='tickets' element={ <Tickets /> } />
              <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>  
      </div>
    );
  }
}