{/*PEDRO LUCAS MS CUNHA - ID 301.376.268 2024-01-28   */}
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