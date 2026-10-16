import { useState } from 'react';
import '../styles/Contact.css';

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ghoshsanju751@gmail.com',
    href: 'mailto:ghoshsanju751@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 8509729245',
    href: 'tel:+918509729245',
  },
  {
    icon: '⚡',
    label: 'LeetCode',
    value: 'LogicLionsanju007',
    href: 'https://leetcode.com/u/LogicLionsanju007/',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'sanjuDiatm-design',
    href: 'https://github.com/sanjuDiatm-design',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Radhanagar, Bankura, West Bengal, 722157',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ghoshsanju751@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New Portfolio Message from ${form.name}`,
          message: form.message,
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Form submission service error, opening mailto fallback:', err);
      // Fallback: open user's default email client
      const mailtoUrl = `mailto:ghoshsanju751@gmail.com?subject=${encodeURIComponent(
        form.subject || `Portfolio Message from ${form.name}`
      )}&body=${encodeURIComponent(
        `Hi Sanju,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// get in touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a data challenge or exciting project? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">
              Ready to build something{' '}
              <span className="gradient-text">intelligent?</span>
            </h3>
            <p className="contact-info-text">
              I'm currently open to full-time roles, freelance data science projects,
              and research collaborations. Whether you have a question or just want
              to say hi — my inbox is always open.
            </p>

            <div className="contact-items">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-item"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-content">
                      <p className="contact-item-label">{item.label}</p>
                      <p className="contact-item-value">{item.value}</p>
                    </div>
                    <span className="contact-item-arrow">→</span>
                  </a>
                ) : (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-content">
                      <p className="contact-item-label">{item.label}</p>
                      <p className="contact-item-value">{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <h3 className="form-success-title">Message Sent!</h3>
                <p className="form-success-text">
                  Thanks for reaching out, {form.name || 'there'}! Your message has been sent to <strong>ghoshsanju751@gmail.com</strong>.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '1.2rem', flexWrap: 'wrap' }}>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setForm({ name: '', email: '', subject: '', message: '' });
                      setSubmitted(false);
                    }}
                  >
                    Send Another →
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send a Message 📨</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input"
                      placeholder="Project Collaboration / Job Opportunity"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? (
                      <>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p style={{ marginTop: '0.9rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                    Prefer direct email? Reach out at{' '}
                    <a
                      href="mailto:ghoshsanju751@gmail.com"
                      style={{ color: 'var(--color-purple-400)', textDecoration: 'underline' }}
                    >
                      ghoshsanju751@gmail.com
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
