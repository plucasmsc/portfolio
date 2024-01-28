import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App () {

  return (

    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;