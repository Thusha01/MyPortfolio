
import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
