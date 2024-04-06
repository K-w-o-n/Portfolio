
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero.jsx'
import Bot from './Components/Bot.jsx'
import About from './Components/About.jsx'
import Skill from './Components/Skill.jsx'
import Project from './Components/Project.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Bot/>
      <About/>
      <Skill/>
      <Project/>

      
    </div>
  );
}

export default App;
