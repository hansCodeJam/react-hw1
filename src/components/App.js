import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import '../index.css';


function App() {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
   )
}

export default App;
