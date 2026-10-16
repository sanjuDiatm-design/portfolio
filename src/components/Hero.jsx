import '../styles/Hero.css';

const stats = [
  { number: '15+', label: 'Projects Built' },
  { number: '5+', label: 'Years Learning' },
  { number: '8+', label: 'Technologies' },
];

const chips = [
  { label: 'Python Expert', icon: '🐍', className: 'chip-1' },
  { label: 'TensorFlow', icon: '🧠', className: 'chip-2' },
  { label: 'Data Viz', icon: '📊', className: 'chip-3' },
  { label: 'LLMs & AI', icon: '🤖', className: 'chip-4' },
];

const socials = [
  { href: 'https://github.com/sanjuDiatm-design', icon: '⌥', label: 'GitHub' },
  { href: 'https://leetcode.com/u/LogicLionsanju007/', icon: '⚡', label: 'LeetCode' },
  { href: 'https://linkedin.com', icon: '🔗', label: 'LinkedIn' },
  { href: 'mailto:ghoshsanju751@gmail.com', icon: '✉', label: 'Email' },
];

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-headline">
              Hi, I'm{' '}
              <span className="hero-headline-name">Sanju Ghosh</span>
              <br />
              Data Scientist &amp;
              <br />
              ML Engineer
            </h1>

            <p className="hero-tagline">
              I turn <strong>raw data into intelligent systems</strong> — building machine
              learning models, data pipelines, and AI applications that solve real‑world problems.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary" onClick={() => scrollToSection('#projects')}>
                <span>View My Work</span>
                <span>→</span>
              </button>
              <a href="/resume.pdf" className="btn-secondary" download="Sanju_Ghosh_CV.pdf">
                <span>Download CV</span>
                <span>↓</span>
              </a>
            </div>

            <div className="hero-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="hero-stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring-2" />
              <div className="hero-avatar-ring" />
              <img src="/avatar.jpg" alt="Sanju Ghosh" className="hero-avatar" />
            </div>

            {chips.map((chip) => (
              <div key={chip.label} className={`hero-chip ${chip.className}`}>
                <span className="chip-icon">{chip.icon}</span>
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="scroll-cue">
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
        <span>scroll</span>
      </div>
    </section>
  );
}
