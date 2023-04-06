import { useEffect, useState } from "react"
import { UserContext } from "./UseContext"

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedItem = localStorage.getItem("language")
    const parsedItem = JSON.parse(savedItem)
    return parsedItem
  })

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language))
  }, [language])
  return (
    <UserContext.Provider value={{ language, setLanguage }}>
      {children}
    </UserContext.Provider>
  )
}