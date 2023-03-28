import '../src/index.css'
import { AboutMe } from './components/Aboutme/AboutMe'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills/Skills'
function App() {

  return (
    <>
      {/* <Header /> */}
      <Home />
      <Skills />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App
