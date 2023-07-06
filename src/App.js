import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
