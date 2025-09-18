import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import Technology from './components/Technology';
import Results from './components/Results';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Solution />
        <Technology />
        <Results />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
