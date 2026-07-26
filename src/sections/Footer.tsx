import { footerConfig } from '../config';

export default function Footer() {
  if (!footerConfig.copyrightText && !footerConfig.statusText) {
    return null;
  }

  const links = [
    { label: 'EMAIL', value: 'durgeshse98@gmail.com', href: 'mailto:durgeshse98@gmail.com' },
    { label: 'PHONE', value: '+1 (812) 778-5427', href: 'tel:+18127785427' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/durgesh98', href: 'https://linkedin.com/in/durgesh98' },
    { label: 'GITHUB', value: 'github.com/blackhat955', href: 'https://github.com/blackhat955' },
  ];

  return (
    <footer
      id="footer"
      className="site-footer"
      style={{
        background: '#000000',
        color: '#ffffff',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        padding: '72px 40px 32px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 400,
        textTransform: 'uppercase',
      }}
    >
      <div
        className="footer-main"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 0.8fr) minmax(360px, 1fr)',
          gap: '48px',
          alignItems: 'end',
          marginBottom: '56px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 18px',
            }}
          >
            // CONTACT — OPEN CHANNEL
          </p>
          <h2
            style={{
              fontFamily: "'Geist Pixel', monospace",
              fontSize: 'clamp(42px, 7vw, 104px)',
              fontWeight: 400,
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Let&apos;s
            <br />
            Build
          </h2>
        </div>

        <div
          className="footer-links"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            borderTop: '1px solid rgba(255,255,255,0.24)',
            borderLeft: '1px solid rgba(255,255,255,0.24)',
          }}
        >
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '18px',
                borderRight: '1px solid rgba(255,255,255,0.24)',
                borderBottom: '1px solid rgba(255,255,255,0.24)',
                display: 'grid',
                gap: '8px',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.opacity = '0.72';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  opacity: 0.6,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  overflowWrap: 'anywhere',
                }}
              >
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '24px',
          fontSize: '12px',
          lineHeight: '18px',
          letterSpacing: '0.05em',
          color: 'rgba(255,255,255,0.62)',
        }}
      >
        <span>{footerConfig.copyrightText}</span>
        <span>{footerConfig.statusText}</span>
      </div>
    </footer>
  );
}
