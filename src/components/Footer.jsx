export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: '2rem 0',
      borderTop: '1px solid rgba(168, 85, 247, 0.1)',
      background: 'rgba(3, 7, 18, 0.8)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--color-purple-400)',
          }}>
            &lt;SG/&gt;
          </span>
          <span style={{
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}>
            © {year} Sanju Ghosh. All rights reserved.
          </span>
        </div>

        <div style={{
          fontSize: '0.82rem',
          color: 'var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          Built with
          <span style={{ color: '#f472b6' }}>♥</span>
          using React + Vite
          <span style={{
            padding: '0.15rem 0.5rem',
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            color: 'var(--color-purple-400)',
            marginLeft: '4px',
          }}>
            v1.0
          </span>
        </div>

        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.82rem',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            padding: '0.4rem 0.9rem',
            border: '1px solid var(--color-border)',
            borderRadius: '9999px',
            transition: 'all 0.25s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-purple-400)';
            e.currentTarget.style.color = 'var(--color-purple-400)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.color = 'var(--color-text-secondary)';
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
