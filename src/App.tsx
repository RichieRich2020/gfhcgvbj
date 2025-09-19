import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { EnrollmentCard } from './components/EnrollmentCard';
import Menu from './components/Menu';
import Statistics from './components/Statistics';
import EnrichCard from './components/EnrichCard';
import ScoreGrid from './components/ScoreGrid';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MobileButton from './components/MobileButton';
import PersonalCustomerCard from './components/PersonalCustomerCard';
import EnrichCreate from './components/EnrichCreate';
import EnrichBanner from './components/EnrichBanner';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#enrich-create') {
        setCurrentPage('enrich-create');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'enrich-create':
        return <EnrichCreate />;
      default:
        return (
          <>
            <Hero />
           

          
            {/* <About /> */}
            <ScoreGrid />
            {/* <PersonalCustomerCard /> */}
            {/* <EnrollmentCard 
              title="Advanced React Development"
              instructor="Sarah Johnson"
              description="Master advanced React concepts including hooks, context, performance optimization, and modern patterns."
              duration="8 weeks"
              enrolledStudents={24}
              maxStudents={30}
              deadline="Dec 15, 2024"
              price="$299"
              status="open"
              level="Intermediate"
              category="Web Development"
            /> */}
            {/* <Menu />
            <Statistics />
            <EnrichCard />
            <Gallery />
            <Testimonials /> */}
          </>
        );
    }
  };

  return (
    <div className="App bg-white min-h-screen ">
      <Header />
      {renderPage()}
      <Footer />
      <MobileButton />
    </div>
  );
}

export default App;