import { useState, useEffect, useRef } from 'react';
import '../styles/Education.css';

const education = [
  {
    id: 1,
    icon: '🎓',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Durgapur Institute of Advanced Technology and Management',
    period: 'Jul 2023 – Jul 2027',
    gpa: '8.28 CGPA',
    description:
      'Pursuing B.Tech in CSE with strong foundations in Data Science, Machine Learning, and Artificial Intelligence. Experienced in data preprocessing, EDA, feature engineering, and predictive modeling.',
    highlights: ['B.Tech CSE', 'CGPA: 8.28 / 10', 'Durgapur, West Bengal'],
  },
  {
    id: 2,
    icon: '🏫',
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Radhanagar High School',
    period: 'Mar 2023',
    gpa: '76.2%',
    description:
      'Completed Higher Secondary education with focus on science and mathematics, building core analytical and problem-solving skills.',
    highlights: ['Class XII Science', 'Score: 76.2%', 'Bankura, West Bengal'],
  },
  {
    id: 3,
    icon: '📜',
    degree: 'Secondary Education (Class X)',
    institution: 'Radhanagar High School',
    period: 'Jul 2021',
    gpa: '85%',
    description:
      'Completed Secondary Education with distinction, demonstrating solid academic excellence across foundational subjects.',
    highlights: ['Class X (Madhyamik)', 'Score: 85%', 'Bankura, West Bengal'],
  },
];

const internships = [
  {
    id: 1,
    icon: '🔬',
    role: 'Summer Intern',
    organization: 'IEEE Computational Intelligence Society, Kolkata Chapter',
    period: 'Summer Internship',
    description:
      'Engaged in computational intelligence research and applications, exploring intelligent systems and machine learning paradigms.',
    highlights: ['Computational Intelligence', 'IEEE CIS Kolkata', 'Research & ML'],
  },
  {
    id: 2,
    icon: '💼',
    role: 'Data Science Virtual Intern',
    organization: 'EliteTech Intern',
    period: 'Virtual Internship',
    description:
      'Hands-on experience with end-to-end data science workflows including exploratory data analysis, data cleaning, and statistical modeling.',
    highlights: ['Data Science', 'Data Analytics', 'Model Building'],
  },
];

const certifications = [
  {
    id: 1,
    icon: '🐍',
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    description: 'Comprehensive certification covering algorithmic thinking, Python programming, and practical computational techniques.',
    badge: 'NPTEL Certified',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    description: 'Industry-recognized credential covering supervised & unsupervised learning, classification, regression, and model evaluation.',
    badge: 'IBM Certified',
  },
  {
    id: 3,
    icon: '🍃',
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB',
    description: 'Cloud document database fundamentals, NoSQL schema design, queries, and document aggregation pipelines.',
    badge: 'MongoDB Certified',
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState('education');
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = [];
  }, [activeTab]);

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// background &amp; credentials</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Academic qualifications, internships, and professional certifications
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="edu-tabs">
          <button
            className={`edu-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <span>🎓 Education</span>
            <span className="edu-tab-count">{education.length}</span>
          </button>
          <button
            className={`edu-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            <span>💼 Internships</span>
            <span className="edu-tab-count">{internships.length}</span>
          </button>
          <button
            className={`edu-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <span>📜 Certifications</span>
            <span className="edu-tab-count">{certifications.length}</span>
          </button>
        </div>

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="education-timeline">
            {education.map((item) => (
              <div className="edu-item visible" key={item.id}>
                <div className="edu-icon-col">
                  <div className="edu-dot">{item.icon}</div>
                </div>

                <div className="edu-content">
                  <div className="edu-meta">
                    <span className="edu-period">{item.period}</span>
                    {item.gpa && <span className="edu-gpa">⭐ {item.gpa}</span>}
                  </div>

                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-institution">🏛️ {item.institution}</p>
                  <p className="edu-description">{item.description}</p>

                  <div className="edu-highlights">
                    {item.highlights.map((h) => (
                      <span key={h} className="edu-highlight">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Internships Tab */}
        {activeTab === 'internships' && (
          <div className="education-timeline">
            {internships.map((item) => (
              <div className="edu-item visible" key={item.id}>
                <div className="edu-icon-col">
                  <div className="edu-dot">{item.icon}</div>
                </div>

                <div className="edu-content">
                  <div className="edu-meta">
                    <span className="edu-period">{item.period}</span>
                  </div>

                  <h3 className="edu-degree">{item.role}</h3>
                  <p className="edu-institution">🏢 {item.organization}</p>
                  <p className="edu-description">{item.description}</p>

                  <div className="edu-highlights">
                    {item.highlights.map((h) => (
                      <span key={h} className="edu-highlight">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="cert-grid">
            {certifications.map((item) => (
              <div className="cert-card" key={item.id}>
                <div className="cert-icon">{item.icon}</div>
                <div className="cert-badge">{item.badge}</div>
                <h3 className="cert-title">{item.title}</h3>
                <p className="cert-issuer">Issued by {item.issuer}</p>
                <p className="cert-desc">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
