import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Language from './LanguageSwitcher'



export default function Header(){
    const { t } = useTranslation()
    return (
        <header>
             <div className="container header-container">
                <Link  to="/" className='logo'>Ehsan Karimi</Link>
                <nav className="nav-links">
                    <NavLink to="/">{t('header.home')}</NavLink>
                    <NavLink to="/about">{t('header.about')}</NavLink>
                    <NavLink to="/projects">{t('header.projects')}</NavLink>
                    <NavLink to="/contact">{t('header.contact')}</NavLink>
                <Language />
                </nav>
            </div>
        </header>
    )
}

