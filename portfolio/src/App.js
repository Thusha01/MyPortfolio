
import './App.css';
import Home from './Components/Home';
import Education from './Components/Education';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
    </div>
  );
}

export default App;
