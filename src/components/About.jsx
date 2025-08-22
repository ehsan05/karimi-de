import { useEffect } from 'react';
import data from '../data/about';
import { useTranslation } from 'react-i18next'

export default function About() {

  const { t } = useTranslation()

  useEffect(() => {
    document.querySelectorAll('.innerCounter').forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / 100;
      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <>
      <section id="about">
        <div className="about-content">
          <h2 className="heading text-[5rem] font-bold">
            {t('about.intro')}
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>{t('about.title')}</h3>
              <p>{t('about.description')}</p>
              <dl className="personal-info">
                {[
                  { label: 'Name', value: data.name },
                  { label: t('contact.location'), value: t('contact.location-value') },
                  { label: t('contact.focus'), value: t('contact.focus-value') },
                  { label: 'Email', value: data.email },
                ].map((item, index) => (
                  <div className="info-item" key={index}>
                    <dt>{item.label}:</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="about-stats">
 
                <div className="stat-item"  role="region" aria-label="">
                  <div className="stat-info">
                    <span className="counter"><p className='innerCounter' data-target={data.stats[0].value}>{data.stats[0].value}</p>+</span>
                    <p>{t('about.stats_projects')}</p>
                  </div>
                </div>

                     <div className="stat-item"  role="region" aria-label="">
                  <div className="stat-info">
                    <span className="counter"><p className='innerCounter' data-target={data.stats[1].value}>{data.stats[1].value}</p>+</span>
                    <p>{t('about.stats_tech')}</p>
                  </div>
                </div>

                     <div className="stat-item"  role="region" aria-label="">
                  <div className="stat-info">
                    <span className="counter"><p className='innerCounter' data-target={data.stats[2].value}>{data.stats[2].value}</p>+</span>
                    <p>{t('about.stats_learning')}</p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}