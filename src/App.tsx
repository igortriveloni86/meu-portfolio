import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Expericence";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header />
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                  </main>
                  <Footer />
                </motion.div>
              }
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
