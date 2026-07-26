import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { manifestoConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const stackGroups = [
    ['Frontend', 'React', 'Angular', 'TypeScript', 'Tailwind'],
    ['Backend', 'Spring Boot', 'Node.js', 'Django', 'GraphQL'],
    ['Cloud', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
    ['Data', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  ];

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoElementRef.current;
    if (!video) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isInView = false;

    const updatePlayback = () => {
      if (isInView && !document.hidden && !reducedMotionQuery.matches) {
        video.play().catch(() => {
          // Autoplay can be blocked by user or browser preferences.
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView && video.preload === 'none') {
          video.preload = 'metadata';
        }
        updatePlayback();
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );

    observer.observe(video);
    document.addEventListener('visibilitychange', updatePlayback);
    reducedMotionQuery.addEventListener('change', updatePlayback);

    return () => {
      observer.disconnect();
      video.pause();
      document.removeEventListener('visibilitychange', updatePlayback);
      reducedMotionQuery.removeEventListener('change', updatePlayback);
    };
  }, []);

  if (!manifestoConfig.text && !manifestoConfig.videoPath) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="manifesto-section"
      id="manifesto"
      style={{
        background: '#ffffff',
        color: '#000000',
        padding: '88px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'auto',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
      }}
    >
      <div
        className="manifesto-grid"
        style={{
          width: '100%',
          maxWidth: '1360px',
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 42%) minmax(360px, 1fr)',
          gap: '48px',
          alignItems: 'stretch',
        }}
      >
        {manifestoConfig.videoPath ? (
          <div
            ref={videoRef}
            className="manifesto-media"
            style={{
              opacity: 0,
              alignSelf: 'stretch',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: '360px',
                overflow: 'hidden',
                background: '#000',
                border: '1px solid #000',
              }}
            >
              <video
                ref={videoElementRef}
                muted
                loop
                playsInline
                preload="none"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              >
                <source src={manifestoConfig.videoPath} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <div ref={videoRef} />
        )}

        <div
          ref={contentRef}
          className="manifesto-content"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            border: '1px solid #000',
            padding: '32px',
            display: 'grid',
            alignContent: 'space-between',
            gap: '28px',
            opacity: 0,
          }}
        >
          <div>
            <p
              style={{
                fontSize: '12px',
                lineHeight: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'rgba(0,0,0,0.52)',
                margin: '0 0 18px',
              }}
            >
              // STACK — SYSTEMS PROFILE
            </p>
            <h2
              style={{
                fontFamily: "'Geist Pixel', monospace",
                fontSize: 'clamp(36px, 4.8vw, 70px)',
                fontWeight: 400,
                lineHeight: 0.92,
                textTransform: 'uppercase',
                margin: '0 0 24px',
              }}
            >
              Build.
              <br />
              Scale.
              <br />
              Ship.
            </h2>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '24px',
                maxWidth: '680px',
                textAlign: 'left',
                margin: 0,
              }}
            >
              {manifestoConfig.text}
            </p>
          </div>

          <div
            className="stack-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              borderTop: '1px solid #000',
              borderLeft: '1px solid #000',
            }}
          >
            {stackGroups.map(([label, ...items]) => (
              <div
                key={label}
                style={{
                  padding: '16px',
                  borderRight: '1px solid #000',
                  borderBottom: '1px solid #000',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(0,0,0,0.52)',
                    margin: '0 0 10px',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {items.join(' / ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
