import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import Downloads from "./components/Download/Downloads";
import Faqs from "./components/Faqs/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-serif">
      <Header></Header>
      <Hero
        title="A Simple Bookmark Manager"
        subtitle="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
        load instantly. Try it for free."
      ></Hero>
      <Features></Features>
      <Downloads></Downloads>
      <Faqs></Faqs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
