import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AsciiCanvas from '../components/AsciiCanvas';
import { heroConfig, navigationConfig } from '../config';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const notes = heroConfig.supportingNotes.slice(0, 3);
  const hasHeroContent =
    navigationConfig.brandName ||
    navigationConfig.links.length > 0 ||
    heroConfig.eyebrow ||
    heroConfig.titleLines.length > 0 ||
    heroConfig.leadText ||
    notes.length > 0;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-nav-item',
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.06 }
      );
      gsap.fromTo(
        '.hero-copy',
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!hasHeroContent) {
    return null;
  }

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
      {/* Navigation */}
      <nav
        className="hero-nav"
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
          padding: '22px clamp(20px, 3vw, 48px)',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.28) 78%, rgba(0,0,0,0) 100%)',
          fontFamily: "'IBM Plex Mono', monospace",
          boxSizing: 'border-box',
          backdropFilter: 'blur(2px)',
        }}
      >
        <span
          className="hero-nav-item"
          style={{
            fontSize: 'clamp(16px, 1.45vw, 22px)',
            fontWeight: 400,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {navigationConfig.brandName}
        </span>
        <div
          className="hero-nav-links"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 'clamp(18px, 2.4vw, 44px)',
            minWidth: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {navigationConfig.links.map((item, index) => (
            <div
              className="hero-nav-item"
              key={`${item.label}-${item.href}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(12px, 1.5vw, 28px)',
              }}
            >
              <a
                href={item.href}
                style={{
                  fontSize: 'clamp(10px, 0.82vw, 13px)',
                  fontWeight: 400,
                  color: '#fff',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.2s',
                  paddingBottom: '2px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderBottomColor = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
              </a>
              {index < navigationConfig.links.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>·</span>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div
        className="hero-panel"
        style={{
          position: 'relative',
          width: '40%',
          minWidth: '320px',
          background: '#000',
          overflow: 'hidden',
        }}
      >
        {/* Hero Title */}
        <div
          className="hero-content"
          style={{
            position: 'absolute',
            left: '40px',
            right: '24px',
            top: '21vh',
            zIndex: 10,
            width: 'calc(100% - 64px)',
            maxWidth: 'none',
          }}
        >
          <p
            className="hero-copy"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.42)',
              margin: '0 0 22px 0',
            }}
          >
            {heroConfig.eyebrow}
          </p>
          <h1
            className="hero-copy"
            style={{
              fontFamily: "'Geist Pixel', monospace",
              fontSize: 'clamp(44px, 5.6vw, 82px)',
              fontWeight: 400,
              lineHeight: 0.96,
              color: '#fff',
              textTransform: 'uppercase',
              margin: 0,
              textWrap: 'balance',
              letterSpacing: '0.015em',
            }}
          >
            {heroConfig.titleLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < heroConfig.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div
            className="hero-notes"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '28px 42px',
              marginTop: '56px',
              width: '100%',
            }}
          >
            {[heroConfig.leadText, ...notes].filter((item) => item).map((text) => (
              <p
                className="hero-copy"
                key={text}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: 1.9,
                  color: 'rgba(255,255,255,0.56)',
                  margin: 0,
                  maxWidth: '34ch',
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div
            className="hero-actions hero-copy"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '34px',
            }}
          >
            {[
              { label: 'Email me', href: 'mailto:durgeshse98@gmail.com' },
              { label: 'GitHub', href: 'https://github.com/blackhat955' },
              { label: 'Resume', href: 'mailto:durgeshse98@gmail.com?subject=Resume%20Request%20-%20Durgesh%20Tiwari' },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  border: '1px solid rgba(255,255,255,0.48)',
                  padding: '9px 12px',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="hero-ascii"
        style={{
          position: 'relative',
          width: '60%',
          background: '#000',
          overflow: 'hidden',
        }}
      >
        <AsciiCanvas />
      </div>
    </section>
  );
}
