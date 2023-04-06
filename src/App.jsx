import '../src/index.css'
import { AboutMe } from './components/Aboutme/AboutMe'
import { ContextProvider } from './components/Context/ContextProvider'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills/Skills'
function App() {

  return (
    <ContextProvider>
      <Header />
      <Home />
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
    </ContextProvider>
  )
}

export default App
