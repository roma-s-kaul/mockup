import React from 'react';
//import Idea from './Idea';
import Footer from './Footer';
import Result from './Result';
import Header from './Header';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"> 
        <Header />
        <Result />
      </div>
      <Footer />
    </div>
  );
}

export default App;
