import React from "react";
import { motion } from "framer-motion";
import { Code, Coffee, Server, Cloud } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Anos Fullstack", value: "7+" },
    { icon: Server, label: "Anos Infraestrutura", value: "2+" },
    { icon: Cloud, label: "Projetos Cloud", value: "15+" },
    { icon: Coffee, label: "Xícaras de Café", value: "∞" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-cyan-400">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-2xl blur-xl opacity-30"></div>
              <img
                src="images/img.jpg"
                alt="Perfil"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Desenvolvedor Full Stack & Analista em Infraestrutura
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Profissional com mais de 7 anos em desenvolvimento Fullstack e 2+
              anos em Infraestrutura de TI, DevOps e Cloud Computing.
              Especializado em criar soluções completas, desde aplicações web
              até arquiteturas de nuvem escaláveis.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
