import { BrowserRouter as Router } from "react-router-dom";
import {
  AboutMe,
  Footer,
  Keywords,
  Navbar,
  Skills,
  Projects,
  Contact,
} from "./components/index";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <Keywords />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
