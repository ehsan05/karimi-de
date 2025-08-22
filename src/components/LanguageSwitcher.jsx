import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <select 
        className="selectMenu" 
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Toggle language"
      >
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;