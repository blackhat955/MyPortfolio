import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { metricsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.impact-card',
        { opacity: 0, y: 42, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
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
      className="impact-section"
      id="impact"
      style={{
        background: '#000',
        color: '#fff',
        padding: '88px 40px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div
          className="impact-header"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 0.7fr) minmax(320px, 1fr)',
            gap: '48px',
            alignItems: 'end',
            marginBottom: '44px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.52)',
                margin: '0 0 20px',
              }}
            >
              {metricsConfig.sectionLabel}
            </p>
            <h2
              style={{
                fontFamily: "'Geist Pixel', monospace",
                fontSize: 'clamp(44px, 6vw, 92px)',
                fontWeight: 400,
                lineHeight: 0.9,
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Impact
              <br />
              Signals
            </h2>
          </div>
        </div>

        <div
          className="impact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            borderTop: '1px solid rgba(255,255,255,0.24)',
            borderLeft: '1px solid rgba(255,255,255,0.24)',
          }}
        >
          {metricsConfig.items.map((item) => (
            <article
              key={item.label}
              className="impact-card"
              style={{
                minHeight: '220px',
                padding: '24px',
                borderRight: '1px solid rgba(255,255,255,0.24)',
                borderBottom: '1px solid rgba(255,255,255,0.24)',
                display: 'grid',
                alignContent: 'space-between',
                gap: '26px',
                background: '#050505',
              }}
            >
              <div
                style={{
                  fontFamily: "'Geist Pixel', monospace",
                  fontSize: 'clamp(52px, 7vw, 96px)',
                  lineHeight: 0.9,
                }}
              >
                {item.value}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    margin: '0 0 10px',
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '19px',
                    color: 'rgba(255,255,255,0.58)',
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
