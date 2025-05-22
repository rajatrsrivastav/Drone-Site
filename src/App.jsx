import { Navbar } from './components/Navbar'
import {LandingPage} from './components/landing-page'
import { Overview } from './components/Overview'
import { Setup } from './components/Setup'
import { Controls } from './components/Controls'
import { Safety } from './components/Safety'
import {Footer} from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main className="pt-20 px-10 lg:px-36 scroll-smooth">
        <LandingPage/>
        <Overview/>
        <Setup/>
        <Controls/>
        <Safety/>
      </main>
      <Footer/>
    </div>
  )
}

export default App