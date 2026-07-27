import { educationConfig } from '../config';

export default function Education() {
  return (
    <section
      className="education-section"
      id="education"
      style={{
        background: '#fff',
        color: '#000',
        padding: '72px 40px',
        borderTop: '1px solid #000',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div
        className="education-grid"
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 0.55fr) minmax(360px, 1fr)',
          gap: '48px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.62)',
              margin: '0 0 20px',
            }}
          >
            {educationConfig.sectionLabel}
          </p>
          <h2
            style={{
              fontFamily: "'Geist Pixel', monospace",
              fontSize: 'clamp(42px, 5vw, 76px)',
              fontWeight: 400,
              lineHeight: 0.92,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Education
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            borderTop: '1px solid #000',
            borderLeft: '1px solid #000',
          }}
        >
          {educationConfig.items.map((item) => (
            <article
              key={item.school}
              style={{
                padding: '24px',
                borderRight: '1px solid #000',
                borderBottom: '1px solid #000',
                display: 'grid',
                gap: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 400,
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                      margin: '0 0 8px',
                    }}
                  >
                    {item.school}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.58)',
                      margin: 0,
                    }}
                  >
                    {item.location}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    margin: 0,
                  }}
                >
                  {item.period}
                </p>
              </div>

              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: 0,
                }}
              >
                {item.degree}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  lineHeight: '20px',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.62)',
                  margin: 0,
                }}
              >
                {item.courses.join(' / ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
