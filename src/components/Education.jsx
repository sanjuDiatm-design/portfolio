import { useEffect, useRef } from 'react';
import '../styles/Education.css';

const education = [
  {
    id: 1,
    icon: '🎓',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Durgapur Institute of Advanced Technology and Management',
    period: '2023 – 2027',
    gpa: '8.3 / 10',
    description:
      'Computer Science & Engineering.',
    highlights: [
      'AI & ML Specialization',
      'State Merit Scholarship',
      '5th sem cgpa 9.13/10.00'
    ],
  },
  {
    id: 2,
    icon: '📜',
    degree: 'Secondary Education',
    institution: 'Radhanagar High School',
    period: '2021',
    gpa: null,
    description:
      'Secondary Exam',
    highlights: [
      'percentage: 85 %'
    ],
  },
  {
    id: 3,
    icon: '🏫',
    degree: 'Higher Secondary Education (Science — PCM + Biology)',
    institution: 'Radhanagar High School',
    period: '2023',
    gpa: '76.2%',
    description:
      'Completed higher secondary education with Physics, Chemistry, Mathematics and Biology. Developed foundational programming skills in C++ and Python.',
    highlights: [
      'State Merit Scholarship',
      'percentage: 76.2 % '
    ],
  },
];

export default function Education() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// background</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic foundations that shaped my journey in software engineering and data science
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div
              className="edu-item"
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="edu-icon-col">
                <div className="edu-dot">{item.icon}</div>
              </div>

              <div className="edu-content">
                <div className="edu-meta">
                  <span className="edu-period">{item.period}</span>
                  {item.gpa && (
                    <span className="edu-gpa">⭐ GPA: {item.gpa}</span>
                  )}
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
      </div>
    </section>
  );
}
