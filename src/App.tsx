import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScoreGrid from './components/ScoreGrid';
import Footer from './components/Footer';
import MobileButton from './components/MobileButton';
import EnrichCreate from './components/EnrichCreate';

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