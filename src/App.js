import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import { Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Tickets from './pages/Tickets';
import Bilder from './pages/Bilder'
import Page404 from './pages/404';

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
            <Route index path='/' element={ <Home /> } />
            <Route path='bilder' element={ <Bilder /> } />
            <Route path='impressum' element={ <Impressum /> } />
            <Route path='datenschutz' element={ <Datenschutz /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='tickets' element={ <Tickets /> } />
            <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>  
    </div>
  );
}