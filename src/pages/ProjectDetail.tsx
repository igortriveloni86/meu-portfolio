import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API or state management
  const project = {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Uma plataforma completa de e-commerce desenvolvida com React, Node.js e PostgreSQL. O projeto inclui funcionalidades como carrinho de compras, sistema de pagamentos, painel administrativo e muito mais.",
    longDescription: `Este projeto foi desenvolvido para uma empresa que precisava de uma solução completa de e-commerce. 
    A plataforma permite aos usuários navegar por produtos, adicionar itens ao carrinho, realizar pagamentos seguros e acompanhar pedidos.
    
    O painel administrativo oferece controle total sobre produtos, pedidos, usuários e relatórios de vendas. 
    A arquitetura foi pensada para ser escalável e permitir futuras expansões.`,
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker", "AWS"],
    features: [
      "Sistema de autenticação completo",
      "Carrinho de compras dinâmico",
      "Integração com gateway de pagamento",
      "Painel administrativo",
      "Sistema de avaliações",
      "Busca e filtros avançados",
      "Responsivo e otimizado para mobile",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    duration: "3 meses",
    team: "4 pessoas",
    role: "Full Stack Developer",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft size={20} />
            <span>Voltar ao portfólio</span>
          </motion.button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>Ver Demo</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>Ver Código</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Sobre o Projeto
              </h2>
              <div className="prose prose-invert max-w-none">
                {project.longDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-300 mb-4 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Principais Funcionalidades
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Galeria</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Informações do Projeto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Duração</div>
                    <div className="text-white">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Equipe</div>
                    <div className="text-white">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Minha Função</div>
                    <div className="text-white">{project.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-purple-400 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Links do Projeto
              </h3>
              <div className="space-y-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Ver Demo Online</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 w-full bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
                >
                  <Github size={20} />
                  <span>Código no GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
