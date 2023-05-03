
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Resume } from "./components/resume";
import './fontawesome';
import { Experience } from './components/experience';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Resume />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Experience />
     
    </div>
  );
}

export default App;
