
import { useTranslation } from 'react-i18next'

export default function Footer(){
    const { t } = useTranslation()


        const date = new Date().getFullYear()
  

    return(
        <>
            <footer id="contact">  
                        <p className="copyright">{`© ${date} ${t('footer.tagline')}`}</p>
            </footer>

        </>
    )
}