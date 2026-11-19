import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const categories = [
  {
    icon: '⚛️',
    title: 'Software Development',
    color: 'blue',
    tags: ['React.js', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Express.js', 'HTML & CSS', 'Vite'],
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    color: 'purple',
    tags: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: '🧠',
    title: 'Generative AI & LLMs',
    color: 'blue',
    tags: ['LLMs', 'Retrieval Augmented Generation (RAG)', 'Agentic AI', 'LangChain', 'Prompt Engineering'],
  },
  {
    icon: '📊',
    title: 'Data Science & Analytics',
    color: 'cyan',
    tags: ['Pandas', 'NumPy', 'EDA', 'Power BI', 'Data Preprocessing', 'Data Visualization'],
  },
  {
    icon: '🗄️',
    title: 'Databases & Storage',
    color: 'green',
    tags: ['MySQL', 'MongoDB Atlas', 'DBMS', 'SQL Queries', 'Data Modeling'],
  },
  {
    icon: '⚡',
    title: 'Web & APIs',
    color: 'pink',
    tags: ['FastAPI', 'Flask', 'Streamlit', 'REST APIs', 'Docker', 'Node.js', 'React.js'],
  },
  {
    icon: '💻',
    title: 'Programming & Core CS',
    color: 'purple',
    tags: ['Python', 'Java', 'TypeScript', 'Data Structures & Algorithms', 'Computer Networks', 'Operating Systems', 'Git & GitHub'],
  },
];

const tools = [
  { name: 'React.js', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'TypeScript', emoji: '📘' },
  { name: 'LeetCode', emoji: '⚡' },
  { name: 'Jupyter', emoji: '📓' },
  { name: 'VS Code', emoji: '💻' },
  { name: 'Git', emoji: '🌿' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Kaggle', emoji: '🏆' },
  { name: 'Hugging Face', emoji: '🤗' },
  { name: 'Weights & Biases', emoji: '📈' },
  { name: 'Streamlit', emoji: '⚡' },
  { name: 'LangChain', emoji: '🔗' },
  { name: 'OpenAI API', emoji: '🤖' },
  { name: 'Google Colab', emoji: '🌐' },
  { name: 'Vercel', emoji: '▲' },
];

const proficiencies = [
  { name: 'Python', pct: 95 },
  { name: 'React.js & Node.js', pct: 80 },
  { name: 'TypeScript', pct: 75 },
  { name: 'Machine Learning', pct: 90 },
  { name: 'Deep Learning', pct: 82 },
  { name: 'Data Analysis', pct: 93 },
  { name: 'SQL & Databases', pct: 85 },
  { name: 'NLP & LLMs', pct: 78 },
];

export default function Skills() {
  const profRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.prof-bar-fill');
            bars.forEach((bar) => {
              bar.style.animationPlayState = 'running';
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (profRef.current) observer.observe(profRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// capabilities</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building full-stack web applications and end-to-end data science & AI solutions
          </p>
        </div>

        {/* Category Cards */}
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category-card" key={cat.title}>
              <span className="skill-category-icon">{cat.icon}</span>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className={`skill-tag ${cat.color}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Ticker */}
        <p className="tools-ticker-label">Tools & Platforms I Use Daily</p>
        <div className="tools-ticker-wrapper">
          <div className="tools-ticker">
            {[...tools, ...tools].map((tool, i) => (
              <div className="tool-chip" key={i}>
                <span className="tool-emoji">{tool.emoji}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Bars */}
        <div className="proficiency-section" ref={profRef}>
          <h3 className="proficiency-title">Proficiency Levels</h3>
          <div className="proficiency-grid">
            {proficiencies.map((p) => (
              <div className="prof-item" key={p.name}>
                <div className="prof-header">
                  <span className="prof-name">{p.name}</span>
                  <span className="prof-pct">{p.pct}%</span>
                </div>
                <div className="prof-bar-bg">
                  <div
                    className="prof-bar-fill"
                    style={{
                      width: `${p.pct}%`,
                      animationPlayState: 'paused',
                      animationDelay: `${Math.random() * 0.3}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
