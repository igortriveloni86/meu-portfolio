import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Analista de Infraestrutura & Scrum Master",
      company: "Altvia",
      location: "Marília, SP",
      period: "Set/2022 - Set/2025",
      description: [
        "Gestão de ambientes Windows Server e Linux, com Active Directory, DNS, IIS, WSUS e GPOs.",
        "Implantação e administração de soluções em AWS e Google Cloud.",
        "Criação de pipelines CI/CD e automação de rotinas em PowerShell.",
        "Monitoramento de infraestrutura com Zabbix e gestão de firewall/VPN em pfSense.",
        "Condução de cerimônias ágeis (Daily, Planning, Review e Retrospective).",
        "Planejamento de Sprints e acompanhamento de métricas ágeis, promovendo melhoria contínua.",
      ],

      achievements: [
        "Desenvolvi scripts em PowerShell para automação de tarefas no Active Directory (criação de usuários, grupos e OUs), reduzindo o tempo de provisionamento em 70%.",
        "Reduzi o tempo de resposta a incidentes críticos em 50% através da automação de monitoramentos e alertas integrados com o Zabbix.",
        "Padronizei rotinas de backup com Acronis e Veeam, assegurando 100% de cobertura dos servidores críticos e zero perda de dados em auditorias internas.",
        "Configurei e gerenciei pfSense com VPNs seguras e firewall customizado, aumentando a segurança e reduzindo falhas de acesso remoto.",
      ],

      technologies: [
        "PowerShell",
        "Windows Server",
        "Linux",
        "Active Directory",
        "DNS",
        "AWS",
        "Zabbix",
        "pfSense",
        "Docker",
        "Google Cloud",
        "VPN",
        "IIS",
        "WSUS",
        "Veeam Backup & Replication (VBR)",
        "Acronis",
        "CI/CD",
        "Scrum",
        "Agile",
        "Sprint Planning",
        "Retrospective",
        "",
      ],
    },
    {
      id: 2,
      title: "Desenvolvedor Full Stack",
      company: "Persys Projetos de Inovação Tecnológicas",
      location: "Marília, SP",
      period: "Abr/2022 - Set/2022",
      description: [
        "Desenvolvimento e manutenção de sistemas em PHP (Laravel, Zend Framework 2) e Vue.js.",
        "Implementação de APIs REST e uso de Docker para deploy e ambientes de teste.",
        "Aplicação de práticas de Clean Code e arquitetura MVC.",
        "Integração de testes de APIs com Postman e utilização de Git/GitHub/GitLab para versionamento de código.",
        "Gestão de tarefas em Bitrix24 e participação em cerimônias ágeis.",
      ],

      achievements: [
        "Desenvolvi e mantive aplicações web escaláveis em PHP (Laravel e Zend Framework 2), garantindo maior estabilidade e redução de falhas em produção",
        "Automatizei testes de APIs no Postman, garantindo qualidade e confiabilidade nas entregas contínuas.",
        "Atuei ativamente em equipes ágeis utilizando Bitrix24, contribuindo para entregas pontuais e melhoria contínua dos processos.",
      ],

      technologies: [
        "Vue.js",
        "Php",
        "Laravel",
        "Git/GitHub/GitLab",
        "Postman",
        "Docker",
        "Zend2",
        "API REST",
        "MySql/SQLServer",
        "JavaScript",
        "Microservices",
        "Apis",
        "Restful",
      ],
    },
    {
      id: 3,
      title: "Desenvolvedor Full Stack",
      company: "Webline Software Ltda",
      location: "Marília, SP",
      period: "Nov/2017 - Abr/2022",
      description: [
        "Desenvolvimento de landing pages e sistemas para o setor legislativo e executivo.",
        "Criação de interfaces com PHP, HTML, CSS, JavaScript, jQuery e integração com bancos de dados MySQL.",
        "Versionamento de código com Git/GitHub.",
        "Apoio a clientes e suporte técnico em sistemas web",
        "Aplicação de práticas de Clean Code e arquitetura MVC.",
      ],

      achievements: [
        "Desenvolvi e implementei portais oficiais para Câmaras Municipais e Prefeituras, garantindo conformidade com normas de transparência pública e acessibilidade.",
        "Otimizei o desempenho dos sites institucionais, resultando em carregamento até 60% mais rápido e melhor experiência do cidadão.",
        "Apliquei práticas de Clean Code e arquitetura MVC, facilitando a manutenção e evolução dos sistemas.",
      ],

      technologies: [
        "Php",
        "Html",
        "Css",
        "JavaScript",
        "JQuery",
        "JSON",
        "XML",
        "MySQL",
        "Git/GitHub",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minha <span className="text-cyan-400">Experiência</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Minha jornada profissional e as conquistas que moldaram minha
            carreira
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-cyan-400 to-emerald-500 h-full"></div>

              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full border-4 border-slate-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />

              {/* Content */}
              <div
                className={`w-full ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <motion.div
                  className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  } max-w-lg`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <Building size={14} />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-300 mb-4 leading-relaxed text-sm">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, i) => (
                        <p key={i} className="text-gray-300">
                          {item}
                        </p>
                      ))
                    ) : (
                      <p>{exp.description}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      Principais conquistas:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-cyan-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-600/20 text-cyan-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
