import { Link } from 'react-router-dom'
import Skills from "./Skills"
import profilePic from '../assets/profile-pic.jpg';
import { useTranslation } from 'react-i18next'




export default function Home(){

    const { t } = useTranslation()
    
    return (
       <>
       
        <section id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>{t('hero.title')}</h1>
                        <p className="hero-subtitle"><span className="typing">{t('hero.subtitle')}</span></p>
                        <p>{t('hero.description')}</p>
                        <div className="cta-buttons">
                     
                                 <a className="btn btn-primary" href='/contact'>
                                <i className="fas fa-paper-plane"></i>{t('hero.cta_contact')}</a>
                       
                            <a href="/src/assets/lebenslauf.pdf" className="btn btn-secondary">
                                <i className="fas fa-download"></i>{t('hero.cta_cv')}
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-container">
                                <img src={profilePic} alt="ehsan-image" className="profile-image"></img>
                        </div>
                    </div>
                </div>
                          <div className="social-links">
                            <a href="https://github.com/ehsan05" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://x.com/Ehsanokarimi" className="social-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="mailto:ehsanullahokarimi@.com" className="social-link">
                                <i className="fas fa-envelope"></i>
                            </a>

                             <a href="tel:+4017680749251" className="social-link">
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
            </div>
        </section>

        <Skills />
       </>
    )
}

