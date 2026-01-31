import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import WhyChooseUs from './components/WhyChooseUs';
import RecentBlog from './components/RecentBlog';
import OurAgents from './components/OurAgents';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <Hero />
      <Properties />
      <WhyChooseUs />
      <RecentBlog />
      <OurAgents />
      <Footer />
    </div>
  );
};

export default App;
