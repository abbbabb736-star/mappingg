import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Beckend from "./components/Beckend";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />

        <Beckend />
        <Footer/>
      </header>
    </>
  );
}

export default App;
