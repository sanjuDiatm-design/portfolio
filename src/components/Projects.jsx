import { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'YT Video & Comment Sentiment Analyzer',
    category: 'NLP & LLMs',
    filter: 'nlp',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #1a0533, #2d1b69)',
    description:
      'Agentic AI and NLP application analyzing YouTube videos and comments in real-time. Performs sentiment analysis, topic summarization, and interactive intelligent Q&A.',
    tags: ['Streamlit', 'Agentic AI', 'LLMs', 'NLP', 'Sentiment Analysis', 'Python'],
    metrics: [
      { value: 'Live App', label: 'Streamlit Cloud' },
      { value: 'Agentic', label: 'Architecture' },
      { value: 'NLP', label: 'Sentiment AI' },
    ],
    github: 'https://github.com/sanjuDiatm-design/AI_YouTube_Video_Analyzer',
    demo: 'https://yt-comment-sentiment-analysis.streamlit.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart-Cart Customer Clustering System',
    category: 'Machine Learning',
    filter: 'ml',
    icon: '🛒',
    gradient: 'linear-gradient(135deg, #0a1628, #1e3a5f)',
    description:
      'Machine learning-based customer segmentation system analyzing purchasing behavior to enable targeted marketing and personalized product recommendations using K-Means.',
    tags: ['Python', 'K-Means', 'Scikit-learn', 'Pandas', 'EDA', 'Power BI'],
    metrics: [
      { value: 'K-Means', label: 'Clustering' },
      { value: 'Segment', label: 'Targeting' },
      { value: 'EDA', label: 'Data Insights' },
    ],
    github: 'https://github.com/sanjuDiatm-design/SmartCart-Customer-Clustering-System',
    demo: 'https://github.com/sanjuDiatm-design/SmartCart-Customer-Clustering-System',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Sentiment Analysis Dashboard',
    category: 'NLP & LLMs',
    filter: 'nlp',
    icon: '💬',
    gradient: 'linear-gradient(135deg, #0f2027, #203a43)',
    description:
      'Streaming Twitter/social data pipeline with BERT-based sentiment classification, live dashboard, and trend alerting system.',
    tags: ['Transformers', 'BERT', 'Kafka', 'Streamlit', 'Redis'],
    metrics: [
      { value: '1M+', label: 'Tweets/Day' },
      { value: '92%', label: 'F1-Score' },
      { value: '<100ms', label: 'Response' },
    ],
    github: 'https://github.com',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'NYC Airbnb Room Type Classifier',
    category: 'Data Analytics',
    filter: 'analytics',
    icon: '🗽',
    gradient: 'linear-gradient(135deg, #11001c, #1f1c38)',
    description:
      'End-to-end ML web application predicting NYC Airbnb room types using a Random Forest model, Scikit-learn preprocessing pipelines, and a FastAPI backend with interactive UI.',
    tags: ['Scikit-learn', 'FastAPI', 'Random Forest', 'Python', 'Render', 'EDA'],
    metrics: [
      { value: '48K+', label: 'NYC Listings' },
      { value: 'Live App', label: 'Render Deploy' },
      { value: 'RF Model', label: 'Classification' },
    ],
    github: 'https://github.com/sanjuDiatm-design/NYC-Airbnb-Room-Classifier',
    demo: 'https://nyc-airbnb-room-classifier-1.onrender.com/',
    featured: true,
  },
  {
    id: 5,
    title: 'RAG-Powered Document Q&A System',
    category: 'NLP & LLMs',
    filter: 'nlp',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #0d0015, #1a0030)',
    description:
      'Retrieval-Augmented Generation system using LangChain + GPT-4 for intelligent document querying across enterprise knowledge bases.',
    tags: ['LangChain', 'GPT-4', 'Pinecone', 'FastAPI', 'React'],
    metrics: [
      { value: '50K+', label: 'Documents' },
      { value: '95%', label: 'Relevancy' },
      { value: '3s', label: 'Avg. Response' },
    ],
    github: 'https://github.com',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Geospatial Crime Pattern Analysis',
    category: 'Data Analytics',
    filter: 'analytics',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #0a1628, #162032)',
    description:
      'Interactive geospatial dashboard analyzing urban crime patterns using clustering and predictive hotspot mapping with police deployment optimization.',
    tags: ['GeoPandas', 'DBSCAN', 'Folium', 'PostGIS', 'Dash'],
    metrics: [
      { value: '500K+', label: 'Records' },
      { value: '15%', label: 'Crime Reduction' },
      { value: '8', label: 'Cities Covered' },
    ],
    github: 'https://github.com',
    demo: '#',
    featured: false,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Deep Learning', value: 'dl' },
  { label: 'NLP & LLMs', value: 'nlp' },
  { label: 'Analytics', value: 'analytics' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of data science and ML projects showcasing end-to-end
            workflows from EDA to production deployment
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                <div
                  className="project-visual-bg"
                  style={{ background: project.gradient }}
                />
                <div className="project-visual-overlay">
                  <span className="project-icon">{project.icon}</span>
                </div>
                {project.featured && (
                  <span className="project-badge featured">⭐ Featured</span>
                )}
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-metrics">
                  {project.metrics.map((m) => (
                    <div className="metric" key={m.label}>
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⌥ GitHub →
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐 Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
