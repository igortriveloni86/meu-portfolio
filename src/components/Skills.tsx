import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Container,
  Cloud,
  Shield,
  Monitor,
  Users,
  Settings,
  Terminal,
  FileCode,
  Layers,
  HardDrive,
  Lock,
  Activity,
  Kanban,
  Clipboard,
  Target,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "PHP",
          icon: <FileCode className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "React.js",
          icon: <Code2 className="w-8 h-8" />, //
          color: "text-cyan-400",
        },
        {
          name: "Laravel",
          icon: <Globe className="w-8 h-8" />,
          color: "text-red-400",
        },
        {
          name: "Vue.js",
          icon: <Code2 className="w-8 h-8" />,
          color: "text-green-400",
        },
        {
          name: "Node.js",
          icon: <Server className="w-8 h-8" />,
          color: "text-green-500",
        },
        {
          name: "HTML5",
          icon: <Globe className="w-8 h-8" />,
          color: "text-orange-500",
        },
        {
          name: "CSS3",
          icon: <Layers className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "JavaScript",
          icon: <Zap className="w-8 h-8" />,
          color: "text-yellow-400",
        },
        {
          name: "jQuery",
          icon: <Code2 className="w-8 h-8" />,
          color: "text-blue-500",
        },
      ],
    },
    {
      title: "Banco de Dados",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "MySQL",
          icon: <Database className="w-8 h-8" />,
          color: "text-orange-400",
        },
        {
          name: "SQL Server",
          icon: <Database className="w-8 h-8" />,
          color: "text-red-500",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="w-8 h-8" />,
          color: "text-blue-500",
        },
      ],
    },
    {
      title: "DevOps & Automação",
      icon: <Settings className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      skills: [
        {
          name: "Docker",
          icon: <Container className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "Git",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-orange-500",
        },
        {
          name: "GitHub",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-orange-500",
        },
        {
          name: "GitLab",
          icon: <GitBranch className="w-8 h-8" />,
          color: "text-orange-500",
        },
        {
          name: "CI/CD",
          icon: <Settings className="w-8 h-8" />,
          color: "text-green-400",
        },
        {
          name: "PowerShell",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-blue-600",
        },
      ],
    },
    {
      title: "Cloud & Infraestrutura",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "AWS",
          icon: <Cloud className="w-8 h-8" />,
          color: "text-orange-400",
        },
        {
          name: "Google Cloud",
          icon: <Cloud className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "Windows Server",
          icon: <Server className="w-8 h-8" />,
          color: "text-blue-600",
        },
        {
          name: "Linux",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-yellow-500",
        },
        {
          name: "Active Directory",
          icon: <Terminal className="w-8 h-8" />,
          color: "text-red-500",
        },
      ],
    },
    {
      title: "Backup & Recovery",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      skills: [
        {
          name: "Veeam Backup",
          icon: <HardDrive className="w-8 h-8" />,
          color: "text-green-400",
        },
        {
          name: "Acronis Cyber Protect",
          icon: <Shield className="w-8 h-8" />,
          color: "text-red-400",
        },
      ],
    },
    {
      title: "Monitoramento & Segurança",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      skills: [
        {
          name: "Zabbix",
          icon: <Monitor className="w-8 h-8" />,
          color: "text-red-400",
        },
        {
          name: "pfSense",
          icon: <Lock className="w-8 h-8" />,
          color: "text-blue-500",
        },

        {
          name: "Firewall",
          icon: <Lock className="w-8 h-8" />,
          color: "text-orange-500",
        },
      ],
    },
    {
      title: "Metodologias Ágeis",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        {
          name: "Scrum Master",
          icon: <Users className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "Kanban",
          icon: <Kanban className="w-8 h-8" />,
          color: "text-green-400",
        },
        {
          name: "Jira",
          icon: <Clipboard className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "Trello",
          icon: <Target className="w-8 h-8" />,
          color: "text-blue-600",
        },
        {
          name: "Miro",
          icon: <Activity className="w-8 h-8" />,
          color: "text-yellow-400",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-cyan-400">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e
            eficientes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Cabeçalho da categoria */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}
                >
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Grid de habilidades */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center text-center p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div
                      className={`${skill.color} group-hover:scale-110 transition-all duration-300 mb-2`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
