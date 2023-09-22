import Advertisement from "./components/advertisement.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero title={"Hello"} subtitle={"Hi"} backgroundColor={"black"} />
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;
