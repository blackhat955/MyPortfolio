import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { identityConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Identity() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set('.identity-cell', { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        '.identity-cell',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="identity-section"
      id="profile"
      style={{
        background: '#fff',
        color: '#000',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        padding: '72px 40px',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div
        className="identity-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 0.75fr) minmax(360px, 1fr)',
          gap: '48px',
          alignItems: 'stretch',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div className="identity-cell">
          <p
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.52)',
              margin: '0 0 22px',
            }}
          >
            {identityConfig.sectionLabel}
          </p>
          <h2
            style={{
              fontFamily: "'Geist Pixel', monospace",
              fontSize: 'clamp(44px, 6vw, 92px)',
              fontWeight: 400,
              lineHeight: 0.92,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Systems
            <br />
            Builder
          </h2>
        </div>

        <div
          className="identity-cell"
          style={{
            border: '1px solid #000',
            padding: '28px',
            display: 'grid',
            gap: '28px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '32px',
                textTransform: 'uppercase',
                margin: '0 0 16px',
              }}
            >
              {identityConfig.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                margin: 0,
                color: 'rgba(0,0,0,0.72)',
              }}
            >
              {identityConfig.summary}
            </p>
          </div>

          <div
            className="identity-detail-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              borderTop: '1px solid #000',
              borderLeft: '1px solid #000',
            }}
          >
            {identityConfig.details.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '16px',
                  borderRight: '1px solid #000',
                  borderBottom: '1px solid #000',
                }}
              >
                <p
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,0.52)',
                    margin: '0 0 8px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                    margin: 0,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
