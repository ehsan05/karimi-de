import { useState } from 'react';
import projectsData from '../data/projects';
import { useTranslation } from 'react-i18next'


export default function Projects() {

    const { t } = useTranslation()
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <>
      <section className="projects">
        <div className="projects-header">
          <h2 className="heading">{t('projects.title')}</h2>
          <p className="subtitle">{t('projects.description')}</p>
        </div>

        <div className="filter-buttons">
            <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
                onClick={() => setFilter('javascript')}
            >
                Vanilla JS
            </button>
              <button
                className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
                onClick={() => setFilter('react')}
            >
                React.js
            </button>
                <button
                className={`filter-btn ${filter === 'nextJs' ? 'active' : ''}`}
                onClick={() => setFilter('nextJs')}
            >
                Next.js
            </button>
              <button
                className={`filter-btn ${filter === 'nodeExpress' ? 'active' : ''}`}
                onClick={() => setFilter('nodeExpress')}
            >
                Node & Express.js
            </button>
              <button
                className={`filter-btn ${filter === 'tailwind' ? 'active' : ''}`}
                onClick={() => setFilter('tailwind')}
            > Tailwind CSS
                
            </button>
              <button
                className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
                onClick={() => setFilter('python')}
            >
                python
            </button>
              <button
                className={`filter-btn ${filter === 'sql' ? 'active' : ''}`}
                onClick={() => setFilter('sql')}
            >
                SQL
            </button>
                <button
                className={`filter-btn ${filter === 'typescript' ? 'active' : ''}`}
                onClick={() => setFilter('typescript')}
            >
                TypeScript
            </button>
        </div>
            <div className="projects-container">
            {filteredProjects.map((project, index) => (
                <div className="project-card" key={index}>
                    <div className="project-image">
                        <img 
                            src={project.image.src} 
                            alt={project.image.alt}
                            className="project-img"
                        />
                        <div className="project-links">
                           <div>
                                 {project.links.map((link, linkIndex) => (
                                <a
                                    href={link.href}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={linkIndex}
                                >
                                    <i className={link.icon}></i> {link.text}
                                </a>
                            ))}
                           </div>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-icon">
                            <i className={project.icon}></i>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{t(project.description)}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, techIndex) => (
                                <span className="tech-tag" key={techIndex}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
}