import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import WhyChooseUs from "./components/WhyChooseUs";
import RecentBlog from "./components/RecentBlog";
import OurAgents from "./components/OurAgents";
import Footer from "./components/Footer";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Propertie from "./pages/Propertie";
import BlogPage from "./pages/BlogPage";

const Home = () => {
  return (
    <>
      <Hero />
      <Properties />
      <WhyChooseUs />
      <RecentBlog />
      <OurAgents />
      <Footer />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/propertie" element={<Propertie />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
