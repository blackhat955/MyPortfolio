import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { siteConfig } from './config';
import Hero from './sections/Hero';
import Availability from './sections/Availability';
import Identity from './sections/Identity';
import Manifesto from './sections/Manifesto';
import Facilities from './sections/Facilities';
import Impact from './sections/Impact';
import Archives from './sections/Archives';
import Education from './sections/Education';
import Footer from './sections/Footer';
import FacilityDetail from './pages/FacilityDetail';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [hash]);

  return (
    <div className="route-view">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <Availability />
        <Identity />
        <Facilities />
        <Impact />
        <Manifesto />
        <Archives />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = siteConfig.siteTitle || '6 Ascii Moon Frontend Template';
    document.documentElement.lang = siteConfig.language || '';

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = siteConfig.siteDescription || '';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facility/:slug" element={<FacilityDetail />} />
    </Routes>
  );
}

export default App;
