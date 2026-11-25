import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Schools from './pages/Schools.jsx';
import Admissions from './pages/Admissions.jsx';
import GalleryPage from './pages/Gallery.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const destination = hash && document.getElementById(hash.slice(1));
    if (destination) destination.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* Events & News is hidden for now: src/pages/News.jsx is kept for later. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
