import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <span className="navbar-logo-bracket">&lt;</span>
            SG
            <span className="navbar-logo-bracket">/&gt;</span>
            <span className="navbar-logo-dot" />
          </a>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Talk</span>
            <span>→</span>
          </a>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
          Let's Talk →
        </a>
      </div>
    </>
  );
}
