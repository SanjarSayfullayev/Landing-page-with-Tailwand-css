import './App.css';
import About from './companents/About';
import AllInOne from './companents/AllInOne';
import Hero from './companents/Hero';
import Navbar from './companents/Navbar';
import Pricing from './companents/Pricing';
import Support from './companents/Support';
import Footer from './companents/Footer';

function App() {
  return (
    <div>
         <Navbar />
         <Hero />
         <About />
         <Support />
         <AllInOne />
         <Pricing />
         <Footer />
    </div>
  );
}

export default App;
