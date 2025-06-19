// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Social from './components/Social';
import Footer from './components/Footer';
import FeaturedListings from './components/FeaturedListings';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import HomeEvaluationForm from './components/HomeEvaluationForm';
import SellingResources from './components/SellingResources';
import BuyingResources from './components/BuyingResources';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/joanne">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Social />
                <Footer />
              </>
            }
          />
          <Route path="/featured-listings" element={<FeaturedListings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/home-evaluation" element={<HomeEvaluationForm />} />
          <Route path="/selling-resources" element={<SellingResources />} />
          <Route path="/buying-resources" element={<BuyingResources />} />

          {/* ✅ 修复：自动跳转未知路径（如初次访问）回首页 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
