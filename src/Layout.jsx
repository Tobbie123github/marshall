import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
 import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function Layout() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/> 
    </>
  )
}

export default Layout;
