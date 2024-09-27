import './App.css'
import Header from "./components/Header.jsx"
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div style={{position: "relative", marginLeft: "auto", marginRight: "auto"}} id="mainCard">
      <Header style={{position: "relative"}} />
      <About />
      <Contact />
    </div>
  )
}

export default App
