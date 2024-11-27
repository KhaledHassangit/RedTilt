import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import News from "./Components/News";
import Services from "./Components/Services";
import Layout from "./layout/Layout";
import ScrollToTop from 'react-scroll-to-top'; // Import ScrollToTop

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <News />
      <Contact />
      <ScrollToTop smooth className="scroll-to-top-button" />
    </Layout>
  );
}

export default App;
