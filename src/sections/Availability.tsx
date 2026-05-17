export default function Availability() {
  return (
    <section
      className="availability-strip"
      style={{
        background: '#000',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        padding: '18px 40px',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
          whiteSpace: 'nowrap',
        }}
      >
        <span>Open to full stack roles</span>
        <span>Remote or hybrid</span>
        <span>Bloomington, IN</span>
        <span>React / Spring Boot / AWS</span>
      </div>
    </section>
  );
}
