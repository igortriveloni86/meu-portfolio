import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Catálago de Filmes",
      description:
        "Este projeto é um mini catálogo de filmes onde o usuário pode pesquisar pelo nome de um filme e visualizar pôster, título e ano de lançamento em cards estilizados.",
      image: "images/projeto1.png",
      category: "fullstack",
      technologies: ["PHP", "JavaScript", "Bootstrap", "HTML5"],
      github: "https://github.com/igortriveloni86/PHP_API_FILMES",
      demo: "#",
    },
    {
      id: 2,
      title: "Jogo da Cobrinha",
      description:
        "Um simples jogo da cobrinha. Inclui botões de Iniciar, Pausar e Reiniciar o jogo.",
      image: "images/projeto2.png",
      category: "fullstack",
      technologies: ["JavaScript (ES6)", "CSS3", "HTML5 Canvas"],
      github: "https://github.com/igortriveloni86/projeto_snake",
      demo: "#",
    },
    {
      id: 3,
      title: "Em breve",
      description: "Em breve, mais projetos incríveis.",
      image: "images/em_desenvolvimento.jpg",
      category: "fullstack",
      technologies: ["N/A"],
      github: "#",
      demo: "#",
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-cyan-400">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-cyan-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-emerald-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
