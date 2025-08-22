import { useTranslation } from 'react-i18next'


export default function Contact(){
    const { t } = useTranslation()
    return (
        <>
             <section className="contact" id="contact">
                <h2 className="block">{t('contact.intro')}</h2>
                <div className="contact-container">
                <div className="contact-info">
                    <h3>{t('contact.title')}</h3>
                    <p>{t('contact.description')}</p>
                    
                    <div className="info-item">
                    <i className="bx bx-envelope"></i>
                    <div>
                        <h4>{t('contact.email')}</h4>
                        <p>ehsn-kar@proton.me</p>
                    </div>
                    </div>
                    
                    <div className="info-item">
                    <i className="bx bx-phone"></i>
                    <div>
                        <h4>{t('contact.phone')}</h4>
                        <p>+49 176 80749251</p>
                    </div>
                    </div>
                    
                    <div className="info-item">
                    <i className="bx bx-map"></i>
                    <div>
                        <h4>{t('contact.location')}</h4>
                        <p>{t('contact.location-value')}</p>
                    </div>
                    </div>
                </div>
                
                <form action="https://formspree.io/f/mrblwgek" method="POST" className="contact-form">
                    <div className="input-group">
                    <input type="text" name="name" placeholder={t('contact.form_name')} required />
                    <input type="email" name="email" placeholder={t('contact.form_email')} required />
                    <input type="text" name="subject" placeholder={t('contact.form_subject')} required />
                    </div>
                    <textarea name="message" placeholder={t('contact.form_message')} required></textarea>
                    <button type="submit" className="btn btn-primary">{t('contact.form_button')}</button>
                </form>
                </div>
            </section>
        </>
    )
}