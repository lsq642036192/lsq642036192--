import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Organization from './pages/Organization';
import Honors from './pages/Honors';
import News from './pages/News';
import Safety from './pages/Safety';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="organization" element={<Organization />} />
          <Route path="honors" element={<Honors />} />
          <Route path="news" element={<News />} />
          <Route path="safety" element={<Safety />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
