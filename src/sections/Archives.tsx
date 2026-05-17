import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { archivesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Archives() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const projects = archivesConfig.items;
  const featuredProjects = projects.slice(0, 3);

  const closePreview = useCallback(() => {
    setPreviewOpen(false);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const cards = Array.from(gridRef.current.querySelectorAll<HTMLElement>('.project-card'));
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 64, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 76%',
          },
        }
      );

      if (!isMobile) {
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -28 : 28,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!archivesConfig.sectionLabel && !archivesConfig.vaultTitle && projects.length === 0) {
    return null;
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="archives-section"
        id="archives"
        style={{
          background: '#000',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={headerRef}
          className="archives-header"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 0.7fr) minmax(320px, 1fr)',
            gap: '56px',
            alignItems: 'end',
            padding: '96px 40px 48px',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '20px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.58)',
                margin: '0 0 22px 0',
                letterSpacing: '0.12em',
              }}
            >
              {archivesConfig.sectionLabel}
            </h3>
            <h2
              style={{
                fontFamily: "'Geist Pixel', monospace",
                fontSize: 'clamp(42px, 6vw, 92px)',
                fontWeight: 400,
                lineHeight: 0.9,
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Featured
              <br />
              Work
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '24px',
              justifyItems: 'start',
            }}
          >
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '24px',
                color: 'rgba(255,255,255,0.68)',
                maxWidth: '680px',
                margin: 0,
              }}
            >
              Featured builds are shown here. Open the vault for the full project archive with implementation details, stacks, metrics, and demos.
            </p>
            {archivesConfig.vaultTitle && (
              <button
                onClick={() => setPreviewOpen(true)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.8)',
                  borderRadius: 0,
                  padding: '12px 22px',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  transition: 'background 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = '#fff';
                  el.style.color = '#000';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'transparent';
                  el.style.color = '#fff';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {archivesConfig.vaultTitle}
              </button>
            )}
          </div>
        </div>

        <div
          ref={gridRef}
          className="projects-grid"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
            gap: '1px',
            padding: '0 40px 112px',
          }}
        >
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{
                minHeight: '520px',
                display: 'grid',
                gridTemplateRows: '260px 1fr',
                border: '1px solid rgba(255,255,255,0.2)',
                background: index % 2 === 0 ? '#050505' : '#0b0b0b',
                overflow: 'hidden',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.src}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'grayscale(100%) contrast(1.08)',
                    opacity: 0.82,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '18px',
                    bottom: '18px',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '11px',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.72)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    padding: '7px 10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {String(index + 1).padStart(2, '0')} / {project.category} / {project.timeframe}
                </span>
              </div>

              <div
                style={{
                  padding: '28px',
                  display: 'grid',
                  gap: '18px',
                  alignContent: 'start',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: 'rgba(255,255,255,0.66)',
                    margin: 0,
                  }}
                >
                  {project.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.78)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        padding: '5px 8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <ul
                  style={{
                    display: 'grid',
                    gap: '8px',
                    listStyle: 'none',
                    padding: 0,
                    margin: '4px 0 0',
                  }}
                >
                  {project.metrics.map((metric) => (
                    <li
                      key={metric}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: 'rgba(255,255,255,0.58)',
                      }}
                    >
                      // {metric}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.72)',
                        paddingBottom: '3px',
                      }}
                    >
                      Open demo →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.72)',
                        paddingBottom: '3px',
                      }}
                    >
                      View code →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div
        className="project-preview"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          opacity: previewOpen ? 1 : 0,
          pointerEvents: previewOpen ? 'auto' : 'none',
          background: 'rgba(0,0,0,0.96)',
          transition: 'opacity 0.28s ease',
          overflowY: 'auto',
          padding: '104px 40px 56px',
        }}
      >
        {archivesConfig.closeText && (
          <button
            onClick={closePreview}
            style={{
              position: 'fixed',
              top: '32px',
              right: '40px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 400,
              textTransform: 'uppercase',
              color: '#fff',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.8)',
              borderRadius: 0,
              padding: '10px 18px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              zIndex: 110,
            }}
          >
            {archivesConfig.closeText}
          </button>
        )}

        <div
          className="project-preview-list"
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'grid',
            gap: '18px',
          }}
        >
          {projects.map((project, index) => (
            <article
              className="project-preview-card"
              key={`${project.title}-vault`}
              style={{
                display: 'grid',
                gridTemplateColumns: '260px minmax(0, 1fr)',
                gap: '24px',
                alignItems: 'stretch',
                border: '1px solid rgba(255,255,255,0.22)',
                background: '#050505',
                transform: previewOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `transform 0.35s ease ${index * 50}ms`,
              }}
            >
              <img
                src={project.src}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '170px',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                }}
              />
              <div
                style={{
                  padding: '24px 24px 24px 0',
                  display: 'grid',
                  gap: '16px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.46)',
                    margin: 0,
                  }}
                >
                  {String(index + 1).padStart(2, '0')} / {project.category} / {project.timeframe}
                </p>
                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '22px',
                    fontWeight: 400,
                    lineHeight: '28px',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    lineHeight: '22px',
                    color: 'rgba(255,255,255,0.66)',
                    margin: 0,
                  }}
                >
                  {project.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.stack.map((tool) => (
                    <span
                      key={`${project.title}-${tool}`}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.78)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        padding: '5px 8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '18px',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'rgba(255,255,255,0.46)',
                        margin: '0 0 10px',
                      }}
                    >
                      Implementation
                    </p>
                    <ul
                      style={{
                        display: 'grid',
                        gap: '8px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: 'rgba(255,255,255,0.62)',
                          }}
                        >
                          // {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'rgba(255,255,255,0.46)',
                        margin: '0 0 10px',
                      }}
                    >
                      Outcomes
                    </p>
                    <ul
                      style={{
                        display: 'grid',
                        gap: '8px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.metrics.map((metric) => (
                        <li
                          key={metric}
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: 'rgba(255,255,255,0.62)',
                          }}
                        >
                          // {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.72)',
                        paddingBottom: '3px',
                      }}
                    >
                      Open demo →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-block',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.72)',
                        paddingBottom: '3px',
                      }}
                    >
                      View code →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
