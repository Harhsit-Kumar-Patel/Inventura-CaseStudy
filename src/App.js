import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import Technology from './components/Technology';
import Results from './components/Results';
import Roadmap from './components/Roadmap';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load heavy components for better performance
const LazyResults = lazy(() => import('./components/Results'));
const LazyRoadmap = lazy(() => import('./components/Roadmap'));

function App() {
  return (
    <div className="App bg-dark-900 text-white min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Solution />
        <Technology />
        <Suspense fallback={<LoadingSpinner />}>
          <LazyResults />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyRoadmap />
        </Suspense>
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
