import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    
    switch (currentPage) {
      case 'About': 
        return <About/>;
      case 'Blog':
        return <Works/>;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
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
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
