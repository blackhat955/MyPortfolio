import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { facilitiesConfig, navigationConfig } from '../config';

export default function FacilityDetail() {
  const { slug } = useParams<{ slug: string }>();

  const facility = useMemo(
    () => facilitiesConfig.items.find((item) => item.slug === slug) ?? null,
    [slug]
  );

  if (!facility) {
    return (
      <div
        className="route-view facility-not-found"
        style={{
          minHeight: '100vh',
          background: '#fff',
          color: '#000',
          fontFamily: "'IBM Plex Mono', monospace",
          padding: '40px',
        }}
      >
        <p>{facilitiesConfig.detailNotFoundText}</p>
        <Link to="/" style={{ color: '#000', textDecoration: 'underline' }}>
          {facilitiesConfig.detailReturnText}
        </Link>
      </div>
    );
  }

  return (
    <div
      className="route-view facility-detail"
      style={{
        minHeight: '100vh',
        background: '#fff',
        color: '#000',
        fontFamily: "'IBM Plex Mono', monospace",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <nav
        className="facility-detail-nav"
        aria-label="Experience detail navigation"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 40px',
          borderBottom: '1px solid #000',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {navigationConfig.brandName}
        </span>
        <Link
          to="/#facilities"
          style={{
            fontSize: '12px',
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#000',
            textDecoration: 'none',
            borderBottom: '1px solid #000',
            paddingBottom: '2px',
          }}
        >
          {facilitiesConfig.detailBackText}
        </Link>
      </nav>

      <div
        className="facility-detail-layout"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          className="facility-detail-copy"
          style={{
            flex: 1,
            padding: '64px 56px',
            borderRight: '1px solid #000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '34px',
              fontWeight: 400,
              lineHeight: '42px',
              textTransform: 'uppercase',
              margin: '0 0 40px 0',
            }}
          >
            {facility.article.title}
          </h1>
          <div style={{ maxWidth: '680px' }}>
            {facility.article.paragraphs.map((paragraph, index) => (
              <p
                key={`${facility.slug}-${index}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '29px',
                  margin: '0 0 26px 0',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div
          className="facility-detail-visual"
          style={{
            flex: 1,
            position: 'relative',
            background: '#fff',
          }}
        >
          {facility.image ? (
            <img
              src={facility.image}
              alt={facility.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                display: 'block',
                padding: '40px',
                boxSizing: 'border-box',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              No Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
