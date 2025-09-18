import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MobileButton from './components/MobileButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Statistics />
      <Gallery />
      <Testimonials />
      <Footer />
      <MobileButton />
    </div>
  );
}

export default App;