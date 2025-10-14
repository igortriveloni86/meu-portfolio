import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    // Simular download do CV
    const link = document.createElement("a");
    link.href = "cv/Curriculo_Igor_Triveloni.pdf"; // Substitua pelo caminho real do seu CV
    link.download = "Curriculo_Igor_Triveloni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Igor Triveloni</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={downloadCV}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>CV</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
