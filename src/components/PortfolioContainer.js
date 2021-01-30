import React, { useState } from 'react';
import NavTabs from './NavTabs/NavTabs';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default Portfolio;
