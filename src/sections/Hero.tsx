import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AsciiCanvas from '../components/AsciiCanvas';
import CountUpValue from '../components/CountUpValue';
import { heroConfig, metricsConfig, navigationConfig } from '../config';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');
  const heroMetrics = metricsConfig.items.slice(0, 4);

  const closeMobileMenu = useCallback((restoreFocus = false) => {
    setMobileMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(['.hero-nav-item', '.hero-copy'], { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        '.hero-nav-item',
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.045 }
      );
      gsap.fromTo(
        '.hero-copy',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.06 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sectionIds = navigationConfig.links
      .map((link) => link.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0.01, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu(true);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeMobileMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    requestAnimationFrame(() => {
      navRef.current?.querySelector<HTMLAnchorElement>('.hero-nav-links a')?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [closeMobileMenu, mobileMenuOpen]);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <nav
        ref={navRef}
        className="hero-nav"
        aria-label="Primary navigation"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 40%) minmax(0, 1fr)',
          alignItems: 'center',
          gap: '28px',
          padding: '18px clamp(20px, 3vw, 48px)',
          background: 'rgba(0,0,0,0.92)',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          fontFamily: "'IBM Plex Mono', monospace",
          boxSizing: 'border-box',
        }}
      >
        <a
          className="hero-nav-item hero-brand"
          href="#hero"
          aria-label="Durgesh Tiwari, return to top"
        >
          {navigationConfig.brandName}
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className={`mobile-menu-toggle${mobileMenuOpen ? ' is-open' : ''}`}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-line menu-line-top" aria-hidden="true" />
          <span className="menu-line menu-line-middle" aria-hidden="true" />
          <span className="menu-line menu-line-bottom" aria-hidden="true" />
        </button>

        <div
          id="primary-navigation"
          className={`hero-nav-links${mobileMenuOpen ? ' is-open' : ''}`}
          aria-hidden={!mobileMenuOpen ? undefined : false}
        >
          {navigationConfig.links.map((item, index) => {
            const isActive = activeHref === item.href;
            return (
              <div className="hero-nav-item" key={`${item.label}-${item.href}`}>
                <a
                  className={isActive ? 'is-active' : undefined}
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => closeMobileMenu()}
                >
                  {item.label}
                </a>
                {index < navigationConfig.links.length - 1 && (
                  <span className="hero-nav-separator" aria-hidden="true">
                    ·
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="hero-panel">
        <div className="hero-content">
          <p className="hero-copy hero-eyebrow">{heroConfig.eyebrow}</p>
          <h1 className="hero-copy">
            <span className="hero-name">Durgesh Tiwari</span>
            {heroConfig.titleLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < heroConfig.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className="hero-impact-grid hero-copy" id="impact" aria-label="Selected impact metrics">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="hero-impact-item">
                <strong>
                  <CountUpValue metric={metric} />
                </strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>

          <p className="hero-lead hero-copy">{heroConfig.leadText}</p>
          <p className="hero-proof hero-copy">{heroConfig.supportingNotes[2]}</p>

          <div className="hero-actions hero-copy">
            <a href="/Durgesh_Tiwari_Resume.pdf" download>
              Download resume
            </a>
            <a href="https://linkedin.com/in/durgesh98" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/blackhat955" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-ascii" role="img" aria-label="Procedural ASCII moon visualization">
        <AsciiCanvas />
      </div>
    </section>
  );
}
