import { useTranslation } from 'react-i18next'
import nextjs from '../assets/nextjs.svg'



export default function Skills(){

    const { t } = useTranslation()

    return (
            <section id="skills">
            <div className="container">
                <h2>{t('skills.title')}</h2>
                <p>{t('skills.description')}</p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <div className="skill-name">React</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-js"></i>
                        </div>
                        <div className="skill-name">JavaScript</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <div className="skill-name">HTML</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-css3"></i>
                        </div>
                        <div className="skill-name">CSS</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-node-js"></i>
                        </div>
                        <div className="skill-name">Node.js</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                           <i>EX</i>
                        </div>
                        <div className="skill-name">Express.js</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="skill-name">SQL</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i><img src={nextjs} alt="next.js" className="nextjsImg"/></i>
                        </div>
                        <div className="skill-name">Next.js</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-python"></i>
                        </div>
                        <div className="skill-name">Python</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="bx bxl-typescript"></i>
                        </div>
                        <div className="skill-name">TypeScript</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="bx bxl-tailwind-css"></i>
                        </div>
                        <div className="skill-name">Tailwind</div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="bx bxl-git"></i>
                        </div>
                        <div className="skill-name">GIT</div>
                    </div>
                </div>
            </div>
        </section>

    )
}