import { useContext } from 'react'
import './Header.css'
import { UserContext } from '../Context/UseContext'
export const Header = () => {

  const { language, setLanguage } = useContext(UserContext)


  const handleLanguage = () => {
    setLanguage(!language)
  }

  return (
    <nav>
      {/* <button onClick={handleLanguage}>{language ? "en" : "es"}</button> */}
      <div className="language-switch">
        <button onClick={handleLanguage} className={language ? "language-button active" : "language-button"}>EN</button>
        <button onClick={handleLanguage} className={language ? "language-button" : "language-button active"}>ES</button>

      </div>

    </nav>
  )
}