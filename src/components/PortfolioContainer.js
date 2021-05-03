import React, { useState } from 'react';
import Header from './Header';
import Resume from './Resume';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    
    switch (currentPage) {
      case 'About': 
        return <About/>;
      case 'Works':
        return <Works/>;
      case 'Contact':
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="background">
        <main className="background-box">
          {
            // Render the component returned by 'renderPage()'
            renderPage(currentPage)
          }
        </main>
      </div>
    </div>
  );
}

export default Portfolio;
