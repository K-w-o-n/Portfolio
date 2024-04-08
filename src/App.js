
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero.jsx'
import Bot from './Components/Bot.jsx'
import About from './Components/About.jsx'
import Skill from './Components/Skill.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Bot/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
