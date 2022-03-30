import React from 'react'
import Contact from './components/contact/Contact';
import Educations from './components/educations/Educations';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Educations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;